import { withHeadless } from '@primereact/core/headless';
import { useEventListener, useMountEffect, useUnmountEffect, useUpdateEffect } from '@primereact/hooks';
import { $dt } from '@primeuix/styled';
import { addClass, addStyle, blockBodyScroll, focus, getOuterHeight, getOuterWidth, getViewport, unblockBodyScroll, ZIndex } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useDialog.props';

export const useDialog = withHeadless({
    name: 'useDialog',
    defaultProps,
    setup: ({ props, $primereact }) => {
        const [openState, setOpenState] = React.useState<boolean>(props.open ?? props.defaultOpen ?? false);
        const [maximizedState, setMaximizedState] = React.useState<boolean>(false);
        const [maskVisibleState, setMaskVisibleState] = React.useState<boolean>(props.open ?? props.defaultOpen ?? false);
        const maskRef = React.useRef<HTMLDivElement | null>(null);
        const motionRef = React.useRef<{ elementRef: React.RefObject<HTMLDivElement> } | null>(null);
        const maximizableButtonRef = React.useRef<{ elementRef: React.RefObject<HTMLButtonElement> } | null>(null);
        const closeButtonRef = React.useRef<{ elementRef: React.RefObject<HTMLButtonElement> } | null>(null);
        const maskMouseDownTarget = React.useRef<EventTarget | null>(null);
        const target = React.useRef<HTMLElement | null>(null);
        const lastPageX = React.useRef<number | null>(null);
        const lastPageY = React.useRef<number | null>(null);
        const dragging = React.useRef(false);

        const state = {
            opened: openState,
            maximized: maximizedState,
            maskVisible: maskVisibleState
        };

        useMountEffect(() => {
            if (props.open || props.defaultOpen) {
                setMaskVisibleState(true);
            }
        });

        useUpdateEffect(() => {
            if (props.open || (props.defaultOpen && !maskVisibleState)) {
                setMaskVisibleState(true);
            }
        }, [props.open, props.defaultOpen]);

        useUpdateEffect(() => {
            if (maskVisibleState && !openState) {
                setOpenState(true);
            }
        }, [maskVisibleState]);

        useUnmountEffect(() => {
            setMaskVisibleState(false);

            if (props.autoZIndex) {
                ZIndex.clear(maskRef.current as HTMLDivElement);
            }
        });

        // methods
        const close = () => {
            setOpenState(false);
            props?.onOpenChange?.({
                value: false
            });
        };

        const toggleMaximized = () => setMaximizedState((prev) => !prev);

        const onOpenStateChange = () => {
            const newOpenState = !openState;

            if (newOpenState && !maskVisibleState) {
                setMaskVisibleState(true);
            }

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
            target.current = document.activeElement as HTMLElement;
            enableDocumentSettings();
            bindGlobalListeners();

            if (props.autoZIndex) {
                ZIndex.set('modal', maskRef.current as HTMLDivElement, (props.baseZIndex as number) + ($primereact.config?.zIndex?.modal ?? 1100));
            }
        };

        const onMotionAfterEnter = () => {
            focusElement();
        };

        const onMotionBeforeLeave = () => {
            if (props.modal) {
                // && !isUnstyled
                addClass(maskRef.current as HTMLDivElement, 'p-overlay-mask-leave');
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

            disableDocumentSettings();
            unbindGlobalListeners();
            setMaskVisibleState(false);
        };

        const focusElement = () => {
            let focusTarget = findFocusableElement(motionRef.current?.elementRef.current ?? null);

            if (!focusTarget) {
                if (maximizableButtonRef.current) {
                    focusTarget = maximizableButtonRef.current.elementRef.current;
                } else if (closeButtonRef.current) {
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

        const onMaskMouseDown = (event: React.MouseEvent) => {
            maskMouseDownTarget.current = event.target;
        };

        const onMaskMouseUp = () => {
            if (props.dismissableMask && props.modal && maskRef.current === maskMouseDownTarget.current) {
                close();
            }
        };

        const enableDocumentSettings = () => {
            if (props.blockScroll) {
                blockBodyScroll({ variableName: $dt('scrollbar.width').name });
            }
        };

        const disableDocumentSettings = () => {
            if (props.blockScroll) {
                unblockBodyScroll({ variableName: $dt('scrollbar.width').name });
            }
        };

        const [bindDocumentDragListener, unbindDocumentDragListener] = useEventListener({
            type: 'mousemove',
            listener: (event: Event) => onDrag(event as unknown as React.MouseEvent)
        });

        const [bindDocumentDragEndListener, unbindDocumentDragEndListener] = useEventListener({
            type: 'mouseup',
            listener: () => onDragEnd()
        });

        const [bindDocumentKeyDownListener, unbindDocumentKeyDownListener] = useEventListener({
            type: 'keydown',
            listener: (event: Event) => onKeyDown(event as unknown as React.KeyboardEvent)
        });

        const bindGlobalListeners = () => {
            if (props.draggable) {
                bindDocumentDragListener();
                bindDocumentDragEndListener();
            }

            if (props.closeOnEscape) {
                bindDocumentKeyDownListener();
            }
        };

        const unbindGlobalListeners = () => {
            unbindDocumentDragListener();
            unbindDocumentDragEndListener();
            unbindDocumentKeyDownListener();
        };

        const onDragStart = (event: React.MouseEvent) => {
            if (!motionRef.current?.elementRef.current) return;

            if ((event.target as Element).closest('div')?.getAttribute('data-pc-section') === 'headeractions') {
                return;
            }

            if (props.draggable) {
                dragging.current = true;
                lastPageX.current = event.pageX;
                lastPageY.current = event.pageY;

                if (motionRef.current?.elementRef.current) {
                    motionRef.current.elementRef.current.style.margin = '0';
                }

                document.body.setAttribute('data-p-unselectable-text', 'true');
                // isUnstyled
                addStyle(document.body, { 'user-select': 'none' });
            }
        };

        const onDrag = (event: React.MouseEvent) => {
            if (dragging.current) {
                if (!motionRef.current?.elementRef.current) return;

                if (lastPageX.current === null || lastPageY.current === null) return;

                const width = getOuterWidth(motionRef.current?.elementRef.current);
                const height = getOuterHeight(motionRef.current?.elementRef.current);
                const deltaX = event.pageX - lastPageX.current;
                const deltaY = event.pageY - lastPageY.current;
                const offset = motionRef.current?.elementRef.current.getBoundingClientRect();
                const leftPos = offset.left + deltaX;
                const topPos = offset.top + deltaY;
                const viewport = getViewport();
                const containerComputedStyle = getComputedStyle(motionRef.current?.elementRef.current);
                const marginLeft = parseFloat(containerComputedStyle.marginLeft);
                const marginTop = parseFloat(containerComputedStyle.marginTop);

                if (motionRef.current && motionRef.current.elementRef.current) {
                    motionRef.current.elementRef.current.style.position = 'fixed';
                }

                if (props.keepInViewport) {
                    if (leftPos >= (props.minX ?? 0) && leftPos + width < viewport.width) {
                        lastPageX.current = event.pageX;

                        if (motionRef.current?.elementRef.current) {
                            motionRef.current.elementRef.current.style.left = leftPos - marginLeft + 'px';
                        }
                    }

                    if (topPos >= (props.minY ?? 0) && topPos + height < viewport.height) {
                        lastPageY.current = event.pageY;

                        if (motionRef.current?.elementRef.current) {
                            motionRef.current.elementRef.current.style.top = topPos - marginTop + 'px';
                        }
                    }
                } else {
                    lastPageX.current = event.pageX;

                    if (motionRef.current?.elementRef.current) {
                        motionRef.current.elementRef.current.style.left = leftPos - marginLeft + 'px';
                    }

                    lastPageY.current = event.pageY;

                    if (motionRef.current?.elementRef.current) {
                        motionRef.current.elementRef.current.style.top = topPos - marginTop + 'px';
                    }
                }
            }
        };

        const onDragEnd = () => {
            if (dragging.current) {
                dragging.current = false;
                document.body.removeAttribute('data-p-unselectable-text');
                // isUnstyled
                addStyle(document.body, { 'user-select': '' });
            }
        };

        const onKeyDown = (event: React.KeyboardEvent) => {
            if (event.code === 'Escape' && props.closeOnEscape) {
                close();
            }
        };

        return {
            state,
            // refs
            maskRef,
            motionRef,
            maximizableButtonRef,
            closeButtonRef,
            // methods
            onOpenStateChange,
            onOpenChange,
            close,
            toggleMaximized,
            onMaskMouseDown,
            onMaskMouseUp,
            onDragStart,
            onMotionEnter,
            onMotionAfterEnter,
            onMotionBeforeLeave,
            onMotionLeave,
            onMotionAfterLeave
        };
    }
});
