import { withHeadless } from '@primereact/core/headless';
import { useEventListener, useMountEffect, useUnmountEffect, useUpdateEffect } from '@primereact/hooks';
import { $dt } from '@primeuix/styled';
import { addClass, blockBodyScroll, focus, unblockBodyScroll, ZIndex } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useDrawer.props';

export const useDrawer = withHeadless({
    name: 'useDrawer',
    defaultProps,
    setup: ({ props, elementRef, $primereact, isUnstyled }) => {
        const [openState, setOpenState] = React.useState<boolean>(props.open ?? false);
        const [maskVisibleState, setMaskVisibleState] = React.useState<boolean>(props.open ?? false);
        const maskRef = React.useRef<HTMLDivElement | null>(null);
        const motionRef = React.useRef<{ elementRef: React.RefObject<HTMLDivElement> } | null>(null);
        const closeButtonRef = React.useRef<{ elementRef: React.RefObject<HTMLButtonElement> } | null>(null);

        const state = {
            opened: openState,
            maskVisible: maskVisibleState
        };

        useMountEffect(() => {
            if (props.open) {
                setMaskVisibleState(true);
            }
        });

        useUpdateEffect(() => {
            if (props.open && !maskVisibleState) {
                setMaskVisibleState(true);
            }
        }, [props.open]);

        useUpdateEffect(() => {
            if (maskVisibleState && !openState) {
                setOpenState(true);
            }
        }, [maskVisibleState]);

        useUnmountEffect(() => {
            setMaskVisibleState(false);

            if (props.autoZIndex) {
                ZIndex.clear(maskRef?.current as HTMLDivElement);
            }
        });

        //methods
        const close = () => {
            setOpenState(false);

            props?.onOpenChange?.({
                value: false
            });
        };

        const onOpenStateChange = () => {
            const newOpenState = !openState;

            if (newOpenState && !maskVisibleState) {
                setMaskVisibleState(true);
            }

            //setOpenState(newOpenState);

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
            focusElement();
            bindDocumentKeyDownListener();

            if (props.autoZIndex) {
                ZIndex.set('modal', maskRef.current as HTMLDivElement, (props.baseZIndex as number) + ($primereact.config?.zIndex?.modal ?? 1100));
            }
        };

        const onMotionAfterEnter = () => {
            enableDocumentSettings();
        };

        const onMotionBeforeLeave = () => {
            if (props.modal && !isUnstyled) {
                addClass(maskRef.current as HTMLDivElement, 'p-overlay-mask-leave');
            }
        };

        const onMotionAfterLeave = () => {
            if (props.autoZIndex) {
                ZIndex.clear(maskRef.current as HTMLDivElement);
            }

            unbindDocumentKeyDownListener();
            disableDocumentSettings();
            setMaskVisibleState(false);
        };

        const focusElement = () => {
            let focusTarget = findFocusableElement(motionRef.current?.elementRef.current ?? null);

            if (!focusTarget) {
                if (closeButtonRef.current) {
                    focusTarget = closeButtonRef.current.elementRef.current;
                }
            }

            if (focusTarget) {
                focus(focusTarget as HTMLElement);
            }
        };

        const findFocusableElement = (container: HTMLElement | null) => {
            return container && container.querySelector('[autoFocus]');
        };

        const [bindDocumentKeyDownListener, unbindDocumentKeyDownListener] = useEventListener({
            type: 'keydown',
            listener: (event: Event) => onKeyDown(event as unknown as React.KeyboardEvent)
        });

        const [bindOutsideClickListener, unbindOutsideClickListener] = useEventListener({
            type: 'click',
            listener: (event) => {
                if (isOutsideClicked(event as unknown as React.MouseEvent)) {
                    close();
                }
            }
        });

        const isOutsideClicked = (event: React.MouseEvent) => {
            return elementRef.current && !elementRef.current.contains(event.target as Node);
        };

        const enableDocumentSettings = () => {
            if (props.dismissable && !props.modal) {
                bindOutsideClickListener();
            }

            if (props.blockScroll) {
                blockBodyScroll({ variableName: $dt('scrollbar.width').name });
            }
        };

        const disableDocumentSettings = () => {
            unbindOutsideClickListener();

            if (props.blockScroll) {
                unblockBodyScroll({ variableName: $dt('scrollbar.width').name });
            }
        };

        const onKeyDown = (event: React.KeyboardEvent): void => {
            if (event.code === 'Escape') {
                close();
            }
        };

        const onMaskClick = (event: React.MouseEvent) => {
            if (props.dismissable && props.modal && maskRef.current === event.target) {
                close();
            }
        };

        return {
            state,

            // refs
            maskRef,
            motionRef,
            closeButtonRef,
            // methods
            close,
            onOpenStateChange,
            onOpenChange,
            onMotionEnter,
            onMotionAfterEnter,
            onMotionBeforeLeave,
            onMotionAfterLeave,
            onMaskClick
        };
    }
});
