import { withHeadless } from '@primereact/core/headless';
import { ConnectedOverlayScrollHandler } from '@primereact/core/utils';
import { useMountEffect } from '@primereact/hooks/use-mount-effect';
import { useUnmountEffect } from '@primereact/hooks/use-unmount-effect';
import { $dt } from '@primeuix/styled';
import { absolutePosition, addClass, addStyle, focus, getOffset, isClient, isTouchDevice, setAttribute } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import { OverlayEventBus } from 'primereact/overlayeventbus';
import * as React from 'react';
import { defaultProps } from './usePopover.props';

export const usePopover = withHeadless({
    name: 'usePopover',
    defaultProps,
    setup: ({ props }) => {
        const { dismissable, baseZIndex = 0, autoZIndex, closeOnEscape, defaultOpen, open, onOpenChange, breakpoints } = props;
        const [visibleState, setVisibleState] = React.useState(false);
        const selfClick = React.useRef(false);
        const overlayEventListeners = React.useRef<((e: unknown) => void) | null>(null);
        const scrollHandler = React.useRef<ConnectedOverlayScrollHandler | null>(null);
        const resizeListener = React.useRef<() => void | null>(null);
        const outsideClickListener = React.useRef<((e: unknown) => void) | null>(null);
        const styleElement = React.useRef<HTMLStyleElement | null>(null);
        const documentKeydownListener = React.useRef<((e: unknown) => void) | null>(null);
        const triggerRef = React.useRef<HTMLElement | null>(null);
        const containerRef = React.useRef<HTMLElement | null>(null);

        const state = {
            visible: visibleState
        };

        const getTrigger = React.useCallback(() => {
            if (triggerRef?.current && triggerRef?.current instanceof HTMLElement) {
                return triggerRef?.current;
            }

            // @ts-expect-error - Temporary fix for elementRef property access
            return triggerRef?.current?.elementRef.current ?? null;
        }, [triggerRef]);

        const getContainer = React.useCallback(() => {
            if (containerRef?.current && containerRef?.current instanceof HTMLElement) {
                return containerRef?.current;
            }

            // @ts-expect-error - Temporary fix for elementRef property access
            return containerRef?.current?.elementRef.current ?? null;
        }, [containerRef]);

        const show = () => {
            if (visibleState) return;

            setVisibleState(true);
            onOpenChange?.({
                value: true
            });
        };

        const hide = () => {
            if (!visibleState) return;

            setVisibleState(false);
            onOpenChange?.({
                value: false
            });

            setTimeout(() => {
                const trigger = getTrigger();

                if (trigger) {
                    focus(trigger);
                }
            }, 10);
        };

        const onBeforeEnter = () => {
            const container = getContainer();

            if (!container) return;

            addStyle(container, { position: 'absolute', top: '0' });
            alignOverlay();

            if (dismissable) {
                bindOutsideClickListener();
            }

            bindScrollListener();
            bindResizeListener();

            if (autoZIndex) {
                // Fix
                ZIndex.set('overlay', container, baseZIndex + 10);
            }

            overlayEventListeners.current = (e: unknown) => {
                const event = e as Event;

                if (container.contains(event.target as Node)) {
                    selfClick.current = true;
                }
            };

            OverlayEventBus.on('overlay-click', overlayEventListeners.current);

            if (closeOnEscape) {
                bindDocumentKeyDownListener();
            }
        };

        const onLeave = () => {
            unbindOutsideClickListener();
            unbindScrollListener();
            unbindResizeListener();
            unbindDocumentKeyDownListener();

            if (overlayEventListeners.current) {
                OverlayEventBus.off('overlay-click', overlayEventListeners.current);
                overlayEventListeners.current = null;
            }

            hide();
        };

        const onAfterLeave = () => {
            const container = getContainer();

            if (autoZIndex && container) {
                ZIndex.clear(container);
            }
        };

        const alignOverlay = () => {
            const container = getContainer();

            const trigger = getTrigger();

            if (!trigger || !container) return;

            absolutePosition(container, trigger, false);

            const containerOffset = getOffset(container);
            const targetOffset = getOffset(trigger);
            let arrowLeft = 0;

            if (Number(containerOffset.left) < Number(targetOffset.left)) {
                arrowLeft = Number(targetOffset.left) - Number(containerOffset.left);
            }

            container.style.setProperty($dt('popover.arrow.left').name, `${arrowLeft}px`);

            if (containerOffset.top < targetOffset.top) {
                addClass(container, 'p-popover-flipped');
                container.setAttribute('data-p-popover-flipped', 'true');
            }
        };

        const onContentKeydown = (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.code === 'Escape' && closeOnEscape) {
                hide();
            }
        };

        const bindOutsideClickListener = () => {
            if (!outsideClickListener.current && isClient()) {
                outsideClickListener.current = (event: unknown) => {
                    const clickEvent = event as MouseEvent;

                    const container = getContainer();

                    if (visibleState && !(clickEvent.target === container || container?.contains(clickEvent.target as Node))) {
                        hide();
                    }

                    selfClick.current = false;
                };

                document.addEventListener('click', outsideClickListener.current);
            }
        };

        const unbindOutsideClickListener = () => {
            if (outsideClickListener.current) {
                document.removeEventListener('click', outsideClickListener.current);
                outsideClickListener.current = null;
                selfClick.current = false;
            }
        };

        const bindDocumentKeyDownListener = () => {
            if (!documentKeydownListener.current) {
                documentKeydownListener.current = (event: unknown) => {
                    const keyboardEvent = event as KeyboardEvent;

                    if (keyboardEvent.code === 'Escape' && closeOnEscape) {
                        hide();
                    }
                };

                window.document.addEventListener('keydown', documentKeydownListener.current);
            }
        };

        const unbindDocumentKeyDownListener = () => {
            if (documentKeydownListener.current) {
                window.document.removeEventListener('keydown', documentKeydownListener.current);
                documentKeydownListener.current = null;
            }
        };

        const bindScrollListener = () => {
            if (!scrollHandler.current) {
                scrollHandler.current = new ConnectedOverlayScrollHandler(getTrigger() ?? null, () => {
                    if (visibleState) {
                        hide();
                    }
                });
            }

            scrollHandler.current.bindScrollListener();
        };

        const unbindScrollListener = () => {
            if (scrollHandler.current) {
                scrollHandler.current.unbindScrollListener();
            }
        };

        const bindResizeListener = () => {
            if (!resizeListener.current) {
                resizeListener.current = () => {
                    if (visibleState && !isTouchDevice()) {
                        alignOverlay();
                    }
                };

                window.addEventListener('resize', resizeListener.current);
            }
        };

        const unbindResizeListener = () => {
            if (resizeListener.current) {
                window.removeEventListener('resize', resizeListener.current);
                resizeListener.current = null;
            }
        };

        const onOverlayClick = (event: Event) => {
            OverlayEventBus.emit('overlay-click', {
                originalEvent: event,
                target: getTrigger()
            });
        };

        const createStyle = () => {
            if (!breakpoints || !styleElement.current) {
                styleElement.current = document.createElement('style');
                styleElement.current.type = 'text/css';
                setAttribute(styleElement.current, 'nonce', 'nonce');
                document.head.appendChild(styleElement.current);

                let innerHTML = '';

                for (const breakpoint in breakpoints) {
                    innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            .p-popover {
                                width: ${breakpoints[breakpoint]} !important;
                            }
                        }
                    `;
                }

                styleElement.current.innerHTML = innerHTML;
            }
        };

        const destroyStyle = () => {
            if (styleElement.current) {
                document.head.removeChild(styleElement.current);
                styleElement.current = null;
            }
        };

        React.useEffect(() => {
            if (open) {
                setTimeout(() => {
                    show();
                }, 0);
            } else {
                hide();
            }
        }, [open]);

        React.useEffect(() => {
            if (defaultOpen) {
                setTimeout(() => {
                    show();
                }, 0);
            } else {
                hide();
            }
        }, [defaultOpen]);

        useMountEffect(() => {
            if (breakpoints) {
                createStyle();
            }
        });

        useUnmountEffect(() => {
            if (dismissable) {
                unbindOutsideClickListener();
            }

            if (scrollHandler.current) {
                scrollHandler.current.destroy();
                scrollHandler.current = null;
            }

            destroyStyle();
            unbindResizeListener();

            const container = getContainer();

            if (container && autoZIndex) {
                ZIndex.clear(container);
            }

            if (overlayEventListeners.current) {
                OverlayEventBus.off('overlay-click', overlayEventListeners.current);
                overlayEventListeners.current = null;
            }
        });

        return {
            state,
            show,
            hide,
            onBeforeEnter,
            onAfterLeave,
            onOverlayClick,
            onLeave,
            onContentKeydown,
            triggerRef,
            containerRef
        };
    }
});
