import { withHeadless } from '@primereact/core/headless';
import { useEventListener, useUnmountEffect } from '@primereact/hooks';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { $dt } from '@primeuix/styled';
import { blockBodyScroll, focus, unblockBodyScroll, ZIndex } from '@primeuix/utils';
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
        const maskRef = React.useRef<{ elementRef: React.RefObject<HTMLDivElement | null> } | null>(null);
        const rootRef = React.useRef<{ elementRef: React.RefObject<HTMLDivElement> } | null>(null);
        const closeButtonRef = React.useRef<{ elementRef: React.RefObject<HTMLButtonElement> } | null>(null);
        const maskMouseDownTarget = React.useRef<EventTarget | null>(null);
        const target = React.useRef<HTMLElement | null>(null);

        const state = {
            opened: openState ?? false
        };

        useUnmountEffect(() => {
            if (props.autoZIndex) {
                if (maskRef.current) {
                    ZIndex.clear(maskRef.current?.elementRef.current as HTMLDivElement);
                }

                if (rootRef.current) {
                    ZIndex.clear(rootRef.current?.elementRef.current as HTMLDivElement);
                }
            }
        });

        //methods
        const close = () => {
            setOpenState([false, { value: false }]);
        };

        const onOpenStateChange = () => {
            const newOpenState = !openState;

            setOpenState([newOpenState, { value: newOpenState }]);
        };

        const onMaskEnter = () => {
            if (props.autoZIndex && maskRef.current?.elementRef.current) {
                ZIndex.set('modal', maskRef.current.elementRef.current, (props.baseZIndex as number) + ($primereact.config?.zIndex?.modal ?? 1100));
            }
        };

        const onEnter = () => {
            target.current = document.activeElement as HTMLElement;
            enableDocumentSettings();
            bindDocumentKeyDownListener();

            if (props.autoZIndex && rootRef.current?.elementRef.current) {
                ZIndex.set('modal', rootRef.current.elementRef.current, (props.baseZIndex as number) + ($primereact.config?.zIndex?.modal ?? 1100));
            }
        };

        const onAfterEnter = () => {
            focusElement();
        };

        const onLeave = () => {
            focus(target.current as HTMLElement);
            target.current = null;
        };

        const onAfterLeave = () => {
            unbindDocumentKeyDownListener();
            disableDocumentSettings();

            if (props.autoZIndex && maskRef.current?.elementRef.current) {
                ZIndex.clear(maskRef.current?.elementRef.current as HTMLDivElement);
            }
        };

        const focusElement = () => {
            let focusTarget = findFocusableElement(rootRef.current?.elementRef.current ?? null);

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

        const onMaskMouseDown = (event: React.MouseEvent) => {
            maskMouseDownTarget.current = event.target;
        };

        const onMaskMouseUp = () => {
            if (props.dismissable && props.modal && maskRef.current?.elementRef.current === maskMouseDownTarget.current) {
                close();
            }
        };

        return {
            state,
            // refs
            maskRef,
            rootRef,
            closeButtonRef,
            // methods
            close,
            onOpenStateChange,
            onMaskMouseDown,
            onMaskMouseUp,
            // motion callbacks
            onMaskEnter,
            onEnter,
            onAfterEnter,
            onLeave,
            onAfterLeave
        };
    }
});
