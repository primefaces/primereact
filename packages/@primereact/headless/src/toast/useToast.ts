/**
 * This toast system is inspired by Sonner by Emil Kowalski.
 * The architecture and API ideas were adapted for this project.
 * https://github.com/emilkowalski/sonner
 */

import { withHeadless } from '@primereact/core/headless';
import { ToastStore } from '@primereact/headless/toaster';
import { useMountEffect } from '@primereact/hooks/use-mount-effect';
import { useVisibilityChange } from '@primereact/hooks/use-visibility-change';
import * as React from 'react';
import { defaultProps } from './useToast.props';

const SWIPE_THRESHOLD = 50;
const VELOCITY_THRESHOLD = 0.11;

export const useToast = withHeadless({
    name: 'useToast',
    defaultProps,
    setup: ({ props, elementRef }) => {
        const { toast, toaster } = props;

        const index = React.useMemo(() => {
            if (!toaster?.toasts || !Array.isArray(toaster?.toasts)) return 0;

            return toaster?.toasts.findIndex((t) => t.id === toast.id) || 0;
        }, [toaster?.toasts, toast.id]);

        const isDocumentVisible = useVisibilityChange();
        const [removed, setRemoved] = React.useState(false);
        const [swipeDirection, setSwipeDirection] = React.useState<'x' | 'y' | null>(null);
        const [swipeOutDirection, setSwipeOutDirection] = React.useState<'left' | 'right' | 'up' | 'down' | null>(null);
        const [mounted, setMounted] = React.useState(false);
        const [swiping, setSwiping] = React.useState(false);
        const [swipeOut, setSwipeOut] = React.useState(false);
        const [isSwiped, setIsSwiped] = React.useState(false);
        const [offsetBeforeRemove, setOffsetBeforeRemove] = React.useState(0);
        const [initialHeight, setInitialHeight] = React.useState(0);

        const dismissible = toast.dismissible !== false && toast.variant !== 'loading';

        const remainingTimeRef = React.useRef(toast.duration || toaster?.props.timeout || 6000);
        const swipeStartTimeRef = React.useRef<number>(0);
        const pointerStartPositionRef = React.useRef<{ x: number; y: number } | null>(null);

        const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
        const timeoutStartTimeRef = React.useRef<number>(0);
        const lastTimeoutStartTimeRef = React.useRef<number>(0);

        const visibleIndex = React.useMemo(() => {
            return toaster?.state.heights?.findIndex((h) => h.toastId === toast.id) ?? 0;
        }, [toaster?.state.heights, toast.id]);

        const duration = React.useMemo(() => {
            return toast.duration || toaster?.props.timeout || 6000;
        }, [toast.duration, toaster?.props.timeout]);

        const offset = React.useRef(0);

        offset.current =
            toaster?.state.heights?.reduce((prev, curr, reducerIndex) => {
                if (reducerIndex >= visibleIndex) return prev;

                return prev + curr.height;
            }, 0) ?? 0;

        const disabled = toast.variant === 'loading';

        React.useEffect(() => {
            remainingTimeRef.current = duration;
        }, [duration]);

        useMountEffect(() => {
            setMounted(true);
        });

        React.useEffect(() => {
            const toastNode = elementRef.current;

            if (!toastNode || !toast.id) return;

            const height = toastNode.getBoundingClientRect().height;

            setInitialHeight(height);

            toaster?.setHeights((prev) => [{ toastId: toast.id!, height }, ...prev]);

            return () => toaster?.setHeights((prev) => prev.filter((h) => h.toastId !== toast.id));
        }, [toaster?.setHeights, toast.id]);

        React.useLayoutEffect(() => {
            if (!mounted || !toast.id || !toaster?.setHeights) return;

            const toastNode = elementRef.current;

            if (!toastNode) return;

            const originalHeight = toastNode.style.height;

            toastNode.style.height = 'auto';
            const newHeight = toastNode?.getBoundingClientRect().height;

            toastNode.style.height = originalHeight;

            setInitialHeight(newHeight);

            toaster?.setHeights((prev) => {
                const isAlreadyExists = prev.find((h) => h.toastId === toast.id);

                if (!isAlreadyExists) {
                    return [{ toastId: toast.id!, height: newHeight }, ...prev];
                } else {
                    return prev.map((h) => (h.toastId === toast.id ? { ...h, height: newHeight } : h));
                }
            });
        }, [mounted, toast.title, toast.description, toast.id, toast.jsx, toast.action, toast.icon, toaster?.setHeights]);

        const deleteToast = React.useCallback(() => {
            toaster?.handleFocusManagement(elementRef.current);

            setRemoved(true);
            setOffsetBeforeRemove(offset.current);
            toaster?.setHeights((prev) => prev.filter((h) => h.toastId !== toast.id));

            requestAnimationFrame(() => {
                const toastNode = elementRef.current;

                if (!toastNode) return;

                const computedStyle = getComputedStyle(toastNode);
                const durationStr = computedStyle.transitionDuration;
                const durationMs = parseFloat(durationStr) * (durationStr.includes('ms') ? 1 : 1000);

                setTimeout(() => {
                    ToastStore.remove(toast.id!);
                }, durationMs ?? 10);
            });
        }, [toast, toaster?.setHeights]);

        React.useEffect(() => {
            if (toast.removed) {
                deleteToast();
                toast.onDismiss?.(toast);
            }
        }, [toast.removed, deleteToast]);

        const pauseTimer = React.useCallback(() => {
            if (lastTimeoutStartTimeRef.current < timeoutStartTimeRef.current) {
                const elapsedTime = new Date().getTime() - timeoutStartTimeRef.current;

                remainingTimeRef.current = remainingTimeRef.current - elapsedTime;
            }

            lastTimeoutStartTimeRef.current = new Date().getTime();
        }, []);

        const startTimer = React.useCallback(() => {
            if (remainingTimeRef.current === Infinity) return;

            timeoutStartTimeRef.current = new Date().getTime();

            timeoutRef.current = setTimeout(() => {
                toast.onTimeout?.(toast);
                deleteToast();
            }, remainingTimeRef.current);
        }, [toast, deleteToast]);

        React.useEffect(() => {
            if (toast.variant === 'loading' || toast.duration === Infinity) return;

            if (toaster?.state.isExpanded || toaster?.state.isInteracting || !isDocumentVisible) {
                pauseTimer();
            } else {
                startTimer();
            }

            return () => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
            };
        }, [toaster?.state.isExpanded, toaster?.state.isInteracting, toast, deleteToast, isDocumentVisible]);

        const onDragEnd = () => {
            setSwiping(false);
            setSwipeDirection(null);
            pointerStartPositionRef.current = null;
        };

        const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
            if (event.button !== 0) return;

            if (disabled || !dismissible) return;

            swipeStartTimeRef.current = new Date().getTime();
            setOffsetBeforeRemove(offset.current);

            (event.target as HTMLElement).setPointerCapture(event.pointerId);

            setSwiping(true);
            pointerStartPositionRef.current = { x: event.clientX, y: event.clientY };
        };

        const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
            if (!pointerStartPositionRef.current || !dismissible) return;

            if ((window.getSelection()?.toString().length ?? 0) > 0) return;

            const yDelta = event.clientY - pointerStartPositionRef.current.y;
            const xDelta = event.clientX - pointerStartPositionRef.current.x;

            const isRealSwipe = Math.abs(xDelta) > 1 || Math.abs(yDelta) > 1;

            const position = (toaster?.props.position ?? 'bottom-right').split('-');
            const side = position[0];
            const align = position[1];

            if (!swipeDirection && isRealSwipe) {
                setSwipeDirection(Math.abs(xDelta) > Math.abs(yDelta) ? 'x' : 'y');
            }

            const swipeAmount = { x: 0, y: 0 };

            const applyDampening = (delta: number) => {
                const dampen = (delta: number) => {
                    const factor = Math.abs(delta) / 20;

                    return 1 / (1.5 + factor);
                };

                const dampenedDelta = delta * dampen(delta);

                return Math.abs(dampenedDelta) < Math.abs(delta) ? dampenedDelta : delta;
            };

            if (swipeDirection === 'x') {
                swipeAmount.x = (align === 'left' && xDelta < 0) || (align === 'right' && xDelta > 0) ? xDelta : applyDampening(xDelta);
            } else if (swipeDirection === 'y') {
                swipeAmount.y = (side === 'top' && yDelta < 0) || (side === 'bottom' && yDelta > 0) ? yDelta : applyDampening(yDelta);
            }

            if (Math.abs(swipeAmount.x) > 0 || Math.abs(swipeAmount.y) > 0) {
                setIsSwiped(true);
            }

            (elementRef.current as HTMLElement).style.setProperty('--swipe-amount-x', `${swipeAmount.x}px`);
            (elementRef.current as HTMLElement).style.setProperty('--swipe-amount-y', `${swipeAmount.y}px`);
        };

        const onPointerUp = () => {
            if (swipeOut || !dismissible) return;

            setSwiping(false);
            pointerStartPositionRef.current = null;
            const swipeAmountX = Number((elementRef.current as HTMLElement).style.getPropertyValue('--swipe-amount-x').replace('px', '') || 0);
            const swipeAmountY = Number((elementRef.current as HTMLElement).style.getPropertyValue('--swipe-amount-y').replace('px', '') || 0);

            const swipeAmount = swipeDirection === 'x' ? swipeAmountX : swipeAmountY;
            const velocity = Math.abs(swipeAmount) / (new Date().getTime() - (swipeStartTimeRef.current ?? 0));

            if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > VELOCITY_THRESHOLD) {
                setOffsetBeforeRemove(offset.current);

                if (swipeDirection === 'x') {
                    setSwipeOutDirection(swipeAmountX > 0 ? 'right' : 'left');
                } else {
                    setSwipeOutDirection(swipeAmountY > 0 ? 'down' : 'up');
                }

                deleteToast();
                toast.onDismiss?.(toast);
                setSwipeOut(true);

                return;
            } else {
                (elementRef.current as HTMLElement).style.setProperty('--swipe-amount-x', `0px`);
                (elementRef.current as HTMLElement).style.setProperty('--swipe-amount-y', `0px`);
            }

            setIsSwiped(false);
            setSwipeDirection(null);
        };

        const handleCloseOnClick = () => {
            if (disabled || !dismissible) return;

            deleteToast();
            toast.onDismiss?.(toast);
        };

        const state = {
            mounted,
            swiping,
            swipeOut,
            swipeOutDirection,
            swipeDirection,
            initialHeight,
            isSwiped,
            offsetBeforeRemove,
            removed
        };

        return {
            state,
            offset: offset.current,
            offsetBeforeRemove,
            index,
            visibleIndex,
            isVisible: visibleIndex + 1 <= (toaster?.props.limit || 3),
            isFront: index === 0,
            toaster,
            onPointerDown,
            onPointerMove,
            onPointerUp,
            onDragEnd,
            handleCloseOnClick
        };
    }
});
