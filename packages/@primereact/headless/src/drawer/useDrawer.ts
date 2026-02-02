import { withHeadless } from '@primereact/core/headless';
import { useEventListener, useUnmountEffect, useUpdateEffect } from '@primereact/hooks';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { $dt } from '@primeuix/styled';
import { addClass, blockBodyScroll, focus, unblockBodyScroll, ZIndex } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useDrawer.props';

export const useDrawer = withHeadless({
    name: 'useDrawer',
    defaultProps,
    setup: ({ props, elementRef, $primereact }) => {
        const [openState, setOpenState] = useControlledState({
            value: props.open,
            defaultValue: props.defaultOpen ?? false,
            onChange: props.onOpenChange
        });
        const [maskVisibleState, setMaskVisibleState] = React.useState<boolean>(props.open ?? props.defaultOpen ?? false);
        const maskRef = React.useRef<HTMLDivElement | null>(null);
        const motionRef = React.useRef<{ elementRef: React.RefObject<HTMLDivElement> } | null>(null);
        const closeButtonRef = React.useRef<{ elementRef: React.RefObject<HTMLButtonElement> } | null>(null);
        const target = React.useRef<HTMLElement | null>(null);

        const state = {
            opened: openState ?? false,
            maskVisible: maskVisibleState
        };

        useUpdateEffect(() => {
            if (openState && !maskVisibleState) {
                setMaskVisibleState(true);
            }
        }, [openState]);

        React.useLayoutEffect(() => {
            if (maskVisibleState && props.autoZIndex && maskRef.current) {
                ZIndex.set('modal', maskRef.current as HTMLDivElement, (props.baseZIndex as number) + ($primereact.config?.zIndex?.modal ?? 1100));
            }
        }, [maskVisibleState]);

        useUnmountEffect(() => {
            setMaskVisibleState(false);

            if (props.autoZIndex) {
                ZIndex.clear(maskRef.current as HTMLDivElement);
            }
        });

        //methods
        const close = () => {
            setOpenState([false, { value: false }]);
        };

        const onOpenStateChange = () => {
            const newOpenState = !openState;

            if (newOpenState && !maskVisibleState) {
                setMaskVisibleState(true);
            }

            setOpenState([newOpenState, { value: newOpenState }]);
        };

        const onMotionEnter = () => {
            target.current = document.activeElement as HTMLElement;
            enableDocumentSettings();
            bindDocumentKeyDownListener();
        };

        const onMotionAfterEnter = () => {
            focusElement();
        };

        const onMotionBeforeLeave = () => {
            if (props.modal) {
                // && !isUnstyled //TODO:
                addClass(maskRef.current as HTMLDivElement, 'p-overlay-mask-leave-active');
            }
        };

        const onMotionLeave = () => {
            focus(target.current as HTMLElement);
            target.current = null;
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
            onMotionEnter,
            onMotionAfterEnter,
            onMotionBeforeLeave,
            onMotionLeave,
            onMotionAfterLeave,
            onMaskClick
        };
    }
});
