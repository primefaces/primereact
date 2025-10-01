import { withHeadless } from '@primereact/core/headless';
import { useMountEffect } from '@primereact/hooks/use-mount-effect';
import { useUnmountEffect } from '@primereact/hooks/use-unmount-effect';
import type { ToastType } from '@primereact/types/shared/toast';
import { ToastManagerInstance, useToastContext } from 'primereact/toast';
import * as React from 'react';
import { defaultProps } from './useToastItem.props';

const SWIPE_THRESHOLD = 50;
const VELOCITY_THRESHOLD = 0.11;
const DAMPENING_FACTOR = 1.5;

export const useToastItem = withHeadless({
    name: 'useToastItem',
    defaultProps,
    setup: ({ props, elementRef }) => {
        const { data } = props;
        const toast = useToastContext();
        const [isMounted, setIsMounted] = React.useState(false);
        const [isSwiping, setIsSwiping] = React.useState(false);
        const [isSwipeOut, setIsSwipeOut] = React.useState(false);
        const [swipeOutDirection, setSwipeOutDirection] = React.useState<'up' | 'down' | 'left' | 'right' | null>(null);
        const [swipeDirection, setSwipeDirection] = React.useState<'y' | 'x' | null>(null);
        const [realHeight, setRealHeight] = React.useState(0);
        const swipeStartTimeRef = React.useRef<Date | null>(null);
        const swipeStartPointerRef = React.useRef<{ x: number; y: number } | null>(null);
        const remainingTimeRef = React.useRef<number>(data.duration || toast?.props.timeout || 6000);
        const timeoutStartTimeRef = React.useRef<number>(0);
        const lastTimeoutStartTimeRef = React.useRef<number>(0);
        const onTransitionEndRef = React.useRef<(event: TransitionEvent) => void>(() => {});
        const fallbackTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
        const rafRef = React.useRef<number | null>(null);

        const state = {
            isMounted,
            isSwipeOut,
            isSwiping,
            swipeOutDirection,
            swipeDirection,
            realHeight
        };

        const { index, offset } = React.useMemo(() => {
            if (!toast?.toasts || !Array.isArray(toast.toasts)) return { index: 0, offset: 0 };

            const toasts = toast.toasts as ToastType[];
            const dataIndex = toasts.indexOf(data);

            if (dataIndex === -1) return { index: 0, offset: 0 };

            const visibleToasts = data.removed ? toasts : toasts.filter((toast) => !toast.removed);
            const index = visibleToasts.indexOf(data);

            const offset = toasts.slice(0, dataIndex).reduce((acc, toast) => acc + (toast.height || 0), 0);

            return { index, offset };
        }, [toast?.toasts, data.id, data.removed]);

        const deleteToast = React.useCallback(() => {
            ToastManagerInstance.remove(data.id);

            toast?.handleFocusElement(elementRef.current);

            onTransitionEndRef.current = (event: TransitionEvent) => {
                if (event.propertyName === 'transform') {
                    cleanup();
                    ToastManagerInstance.delete(data.id);
                }
            };

            fallbackTimeoutRef.current = setTimeout(() => {
                cleanup();
                ToastManagerInstance.delete(data.id);
            }, 500);

            const cleanup = () => {
                if (fallbackTimeoutRef.current) {
                    clearTimeout(fallbackTimeoutRef.current);
                }

                elementRef.current?.removeEventListener('transitionend', onTransitionEndRef.current);
            };

            elementRef.current?.addEventListener('transitionend', onTransitionEndRef.current);
        }, [data, elementRef, toast?.setToasts, isSwipeOut]);

        const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === 'Escape' && data.dismissible !== false && data.variant !== 'loading') {
                deleteToast();
                data.onDismiss?.();
            }
        };

        const onFocus = () => {
            toast?.handleToastFocus?.();
        };

        const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
            if (event.button === 2 || data.variant === 'loading' || data.dismissible === false) return;

            swipeStartTimeRef.current = new Date();
            (event.target as HTMLElement).setPointerCapture(event.pointerId);

            setIsSwiping(true);

            swipeStartPointerRef.current = { x: event.clientX, y: event.clientY };
        };

        const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
            if (!swipeStartPointerRef.current || data.variant === 'loading' || data.dismissible === false) return;

            const yDelta = event.clientY - swipeStartPointerRef.current.y;
            const xDelta = event.clientX - swipeStartPointerRef.current.x;

            if (!swipeDirection) {
                if (Math.abs(yDelta) > Math.abs(xDelta)) {
                    setSwipeDirection('y');
                } else {
                    setSwipeDirection('x');
                }
            }

            const applyDampening = (delta: number) => {
                const factor = Math.abs(delta) / 20;

                return delta * (1 / (DAMPENING_FACTOR + factor));
            };

            const position = toast?.props.position || '';

            const swipeAmount = { x: 0, y: 0 };

            const swipeDirections = position.split('-');

            if (swipeDirection === 'y') {
                const isSwipingUp = yDelta < 0;
                const isTop = swipeDirections.includes('top');
                const isBottom = swipeDirections.includes('bottom');

                if ((isTop && isSwipingUp) || (isBottom && !isSwipingUp)) {
                    swipeAmount.y = yDelta;
                } else {
                    swipeAmount.y = applyDampening(yDelta);
                }
            } else if (swipeDirection === 'x') {
                const isSwipingLeft = xDelta < 0;
                const isLeft = swipeDirections.includes('left');
                const isRight = swipeDirections.includes('right');

                if ((isLeft && isSwipingLeft) || (isRight && !isSwipingLeft)) {
                    swipeAmount.x = xDelta;
                } else {
                    swipeAmount.x = applyDampening(xDelta);
                }
            }

            if (elementRef.current) {
                elementRef.current?.style.setProperty('--p-swipe-amount-x', `${swipeAmount.x}px`);
                elementRef.current?.style.setProperty('--p-swipe-amount-y', `${swipeAmount.y}px`);
            }
        };

        const onPointerUp = () => {
            if (data.variant === 'loading' || data.dismissible === false) return;

            swipeStartPointerRef.current = null;
            setIsSwiping(false);
            const swipeAmountX = Number(elementRef.current?.style.getPropertyValue('--p-swipe-amount-x').replace('px', '') || 0);
            const swipeAmountY = Number(elementRef.current?.style.getPropertyValue('--p-swipe-amount-y').replace('px', '') || 0);

            const timeTaken = new Date().getTime() - (swipeStartTimeRef.current?.getTime() || 0);

            const swipeAmount = swipeDirection === 'x' ? swipeAmountX : swipeAmountY;
            const velocity = Math.abs(swipeAmount) / timeTaken;

            if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > VELOCITY_THRESHOLD) {
                if (swipeDirection === 'x') {
                    setSwipeOutDirection(swipeAmountX < 0 ? 'left' : 'right');
                } else {
                    setSwipeOutDirection(swipeAmountY < 0 ? 'up' : 'down');
                }

                deleteToast();
                setIsSwipeOut(true);
                data.onDismiss?.();

                return;
            } else {
                elementRef.current?.style.setProperty('--p-swipe-amount-x', `0px`);
                elementRef.current?.style.setProperty('--p-swipe-amount-y', `0px`);
            }

            setSwipeDirection(null);
            swipeStartTimeRef.current = null;
        };

        const onDragEnd = () => {
            setIsSwiping(false);
            setSwipeDirection(null);
            swipeStartTimeRef.current = null;
        };

        const handleCloseOnClick = () => {
            deleteToast();
            data.onDismiss?.();
        };

        useMountEffect(() => {
            setIsMounted(true);
        });

        useUnmountEffect(() => {
            if (fallbackTimeoutRef.current) {
                clearTimeout(fallbackTimeoutRef.current);
            }

            if (onTransitionEndRef.current) {
                elementRef.current?.removeEventListener('transitionend', onTransitionEndRef.current);
            }
        });

        React.useEffect(() => {
            if (data.removed) {
                deleteToast();
            }
        }, [data.removed, deleteToast]);

        React.useEffect(() => {
            if (data.variant === 'loading' || data.duration === Infinity) return;

            let timeoutId: NodeJS.Timeout | null = null;

            const startTimer = () => {
                if (remainingTimeRef.current === Infinity) return;

                timeoutStartTimeRef.current = new Date().getTime();

                timeoutId = setTimeout(() => {
                    deleteToast();
                    data.onTimeout?.();
                }, remainingTimeRef.current);
            };

            const pauseTimer = () => {
                if (lastTimeoutStartTimeRef.current < timeoutStartTimeRef.current) {
                    const elapsedTime = new Date().getTime() - timeoutStartTimeRef.current;

                    remainingTimeRef.current = remainingTimeRef.current - elapsedTime;
                }

                lastTimeoutStartTimeRef.current = new Date().getTime();
            };

            if (toast?.state.isExpanded || toast?.state.isInteracting) {
                pauseTimer();
            } else {
                startTimer();
            }

            return () => {
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
            };
        }, [toast?.state.isExpanded, toast?.state.isInteracting, deleteToast]);

        React.useEffect(() => {
            if (!elementRef?.current || !toast?.setToasts) return;

            const height = elementRef.current.getBoundingClientRect().height;

            setRealHeight(height);
            toast.setToasts((prev) => prev.map((t) => (t.id === data.id ? { ...t, height } : t)));
        }, [toast?.setToasts, data.id]);

        React.useLayoutEffect(() => {
            if (!isMounted || !elementRef?.current || !toast?.setToasts) return;

            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }

            rafRef.current = requestAnimationFrame(() => {
                const el = elementRef.current;

                if (!el) return;

                const originalHeight = el.style.height;

                el.style.height = 'auto';
                const newHeight = el.offsetHeight;

                el.style.height = originalHeight;

                setRealHeight(newHeight);
                toast.setToasts((prev) => prev.map((t) => (t.id === data.id ? { ...t, height: newHeight } : t)));
            });

            return () => {
                if (rafRef.current) {
                    cancelAnimationFrame(rafRef.current);
                }
            };
        }, [isMounted, data.variant, data.title, data.description, data.action, data.icon, data.jsx]);

        return {
            state,
            offset,
            index,
            deleteToast,
            onPointerDown,
            onPointerMove,
            onPointerUp,
            onDragEnd,
            handleCloseOnClick,
            onKeyDown,
            onFocus
        };
    }
});
