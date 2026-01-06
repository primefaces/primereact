import { withHeadless } from '@primereact/core/headless';
import { ConnectedOverlayScrollHandler } from '@primereact/core/utils';
import { useEventListener, useUnmountEffect } from '@primereact/hooks';
import { $dt } from '@primeuix/styled';
import { absolutePosition, addClass, focus, getOffset, isTouchDevice, ZIndex } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useConfirmPopup.props';

export const useConfirmPopup = withHeadless({
    name: 'useConfirmPopup',
    defaultProps,
    setup: ({ props, $primereact }) => {
        const [openState, setOpenState] = React.useState<boolean>(props.open ?? props.defaultOpen ?? false);
        const motionRef = React.useRef<{ elementRef: React.RefObject<HTMLDivElement> } | null>(null);
        const triggerRef = React.useRef<{ elementRef: React.RefObject<HTMLButtonElement> } | null>(null);
        const acceptRef = React.useRef<{ elementRef: React.RefObject<HTMLButtonElement> } | null>(null);
        const rejectRef = React.useRef<{ elementRef: React.RefObject<HTMLButtonElement> } | null>(null);
        const scrollHandler = React.useRef<ConnectedOverlayScrollHandler | null>(null);

        const state = {
            opened: openState
        };

        React.useEffect(() => {
            if (props.defaultOpen) {
                open();
            }
        }, [props.defaultOpen]);

        useUnmountEffect(() => {
            ZIndex.clear(motionRef.current?.elementRef.current as HTMLDivElement);
        });

        //methods
        const open = () => {
            setOpenState(true);

            props?.onOpenChange?.({
                value: true
            });
        };

        const close = () => {
            setOpenState(false);

            props?.onOpenChange?.({
                value: false
            });

            focus(triggerRef.current?.elementRef.current as HTMLButtonElement);
        };

        const onOpenStateChange = () => {
            const newOpenState = !openState;

            setOpenState(newOpenState);

            props?.onOpenChange?.({
                value: newOpenState
            });
        };

        const onOpenChange = () => {
            props?.onOpenChange?.({
                value: state.opened
            });
        };

        const onMotionEnter = () => {
            bindOutsideClickListener();
            bindScrollListener();
            bindResizeListener();

            ZIndex.set('overlay', motionRef.current?.elementRef.current as HTMLDivElement, $primereact.config?.zIndex?.modal ?? 1100);
        };

        const onMotionAfterEnter = () => {
            alignOverlay();
            focusElement();
        };

        const onMotionLeave = () => {
            focus(triggerRef.current?.elementRef.current as HTMLButtonElement);

            unbindOutsideClickListener();
            unbindScrollListener();
            unbindResizeListener();
        };

        const onMotionAfterLeave = () => {
            ZIndex.clear(motionRef.current?.elementRef.current as HTMLDivElement);
        };

        const alignOverlay = () => {
            const motionElement = motionRef.current?.elementRef.current;
            const triggerElement = triggerRef.current?.elementRef.current;

            if (!motionElement || !triggerElement) return;

            absolutePosition(motionElement, triggerElement, false);

            const containerOffset = getOffset(motionElement);
            const targetOffset = getOffset(triggerElement);
            let arrowLeft = 0;

            if (containerOffset.left < targetOffset.left) {
                arrowLeft = (targetOffset.left as number) - (containerOffset.left as number);
            }

            motionElement.style.setProperty($dt('confirmpopup.arrow.left').name, `${arrowLeft}px`);

            if (containerOffset.top < targetOffset.top) {
                motionElement.setAttribute('data-p-confirmpopup-flipped', 'true');
                // !isUnstyled &&
                addClass(motionElement, 'p-confirmpopup-flipped');
            }
        };

        const [bindOutsideClickListener, unbindOutsideClickListener] = useEventListener({
            type: 'click',
            listener: (event: Event) => {
                const motionElement = motionRef.current?.elementRef.current;

                if (openState && motionElement && !motionElement.contains(event.target as Node) && !isTargetClicked(event)) {
                    setOpenState(false);
                } else {
                    alignOverlay();
                }
            }
        });

        const [bindScrollListener, unbindScrollListener] = useEventListener({
            type: 'scroll',
            listener: () => {
                if (!scrollHandler.current) {
                    scrollHandler.current = new ConnectedOverlayScrollHandler(triggerRef.current?.elementRef.current as HTMLButtonElement, () => {
                        if (openState) {
                            setOpenState(false);
                        }
                    });
                }

                scrollHandler.current.bindScrollListener();
            }
        });

        const [bindResizeListener, unbindResizeListener] = useEventListener({
            type: 'resize',
            listener: () => {
                if (openState && !isTouchDevice()) {
                    setOpenState(false);
                }
            }
        });

        const focusElement = () => {
            let focusTarget;

            if (props.defaultFocus === undefined || props.defaultFocus === 'accept') {
                focusTarget = acceptRef.current?.elementRef.current;
            } else if (props.defaultFocus === 'reject') {
                focusTarget = rejectRef.current?.elementRef.current;
            }

            if (!focusTarget) {
                focusTarget = findFocusableElement(motionRef.current?.elementRef.current ?? null);
            }

            if (focusTarget) {
                focus(focusTarget as HTMLElement);
            }
        };

        const findFocusableElement = (container: HTMLElement | null) => {
            return container && container.querySelector('[autoFocus]');
        };

        const isTargetClicked = (event: Event) => {
            if (!triggerRef.current) return false;

            const triggerElement = triggerRef.current?.elementRef.current as HTMLButtonElement;

            return triggerElement === event.target || triggerElement.contains(event.target as Node);
        };

        return {
            state,
            // refs
            motionRef,
            triggerRef,
            acceptRef,
            rejectRef,
            // methods
            close,
            onOpenStateChange,
            onOpenChange,
            onMotionEnter,
            onMotionAfterEnter,
            onMotionLeave,
            onMotionAfterLeave
        };
    }
});
