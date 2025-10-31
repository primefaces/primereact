import { withHeadless } from '@primereact/core/headless';
import { ConnectedOverlayScrollHandler } from '@primereact/core/utils';
import { useEventListener, useUnmountEffect } from '@primereact/hooks';
import { $dt } from '@primeuix/styled';
import { absolutePosition, addClass, addStyle, getOffset, isTouchDevice, relativePosition } from '@primeuix/utils/dom';
import { ZIndex } from '@primeuix/utils/zindex';
import { OverlayEventBus } from 'primereact/overlayeventbus';
import * as React from 'react';
import { defaultProps } from './useOverlay.props';

export const useOverlay = withHeadless({
    name: 'useOverlay',
    defaultProps,
    setup: ({ props, $primereact }) => {
        const [visibleState, setVisibleState] = React.useState(false);
        const containerRef = React.useRef<{ elementRef: React.RefObject<HTMLDivElement> } | null>(null);
        const scrollHandler = React.useRef<ConnectedOverlayScrollHandler | null>(null);
        const selfClick = React.useRef(false);

        const state = {
            visible: visibleState
        };

        const getContainer = React.useCallback(() => {
            if (containerRef?.current && containerRef?.current instanceof HTMLElement) {
                return containerRef?.current;
            }

            return containerRef?.current?.elementRef.current ?? null;
        }, [containerRef]);

        const show = () => {
            if (visibleState) return;

            setVisibleState(true);
            props.onOpenChange?.({
                value: true
            });
        };

        const hide = () => {
            if (!visibleState) return;

            setVisibleState(false);
            props.onOpenChange?.({
                value: false
            });
        };

        const onOverlayEnter = () => {
            const containerElement = getContainer();

            if (!containerElement) return;

            addStyle(containerElement, { position: 'absolute', top: '0' });

            if (props.autoZIndex) {
                ZIndex.set('overlay', containerElement, props.baseZIndex ?? 0 + ($primereact.config?.zIndex?.modal ?? 1100));
            }

            alignOverlay();
        };

        const onOverlayAfterEnter = () => {
            bindOutsideClickListener();
            bindScrollListener();
            bindResizeListener();
        };

        const onLeave = () => {
            unbindOutsideClickListener();
            unbindScrollListener();
            unbindResizeListener();
        };

        const onAfterLeave = () => {
            const containerElement = getContainer();

            if (props.autoZIndex && containerElement) {
                ZIndex.clear(containerElement);
            }
        };

        const alignOverlay = () => {
            const containerElement = getContainer();

            if (!containerElement) return;

            if (props.appendTo === 'self') {
                relativePosition(containerElement, props.target as HTMLElement);
            } else {
                absolutePosition(containerElement, props.target as HTMLElement);
            }

            const containerOffset = getOffset(containerElement);
            const targetOffset = getOffset(props.target);
            let arrowLeft = 0;

            if (Number(containerOffset.left) < Number(targetOffset.left)) {
                arrowLeft = Number(targetOffset.left) - Number(containerOffset.left);
            }

            containerElement.style.setProperty($dt('overlay.arrow.left').name, `${arrowLeft}px`);

            if (containerOffset.top < targetOffset.top) {
                addClass(containerElement, 'p-overlay-flipped');
                containerElement.setAttribute('data-p-overlay-flipped', 'true');
            }
        };

        const [bindOutsideClickListener, unbindOutsideClickListener] = useEventListener({
            type: 'click',
            listener: (event) => onOutsideClick(event as unknown as React.MouseEvent)
        });

        const [bindScrollListener, unbindScrollListener] = useEventListener({
            type: 'scroll',
            listener: () => onScroll()
        });

        const [bindResizeListener, unbindResizeListener] = useEventListener({
            target: 'window',
            type: 'resize',
            listener: () => onResize()
        });

        const onOutsideClick = (event: React.MouseEvent) => {
            if (selfClick.current) {
                selfClick.current = false;

                return;
            }

            if (visibleState && isOutsideClicked(event)) {
                hide();
            }
        };

        const isOutsideClicked = (event: React.MouseEvent) => {
            const containerElement = getContainer();

            if (!containerElement) return;

            const target = event.target as Node;

            return !(containerElement.isSameNode(target) || containerElement.contains(target));
        };

        const onScroll = () => {
            if (!scrollHandler.current) {
                scrollHandler.current = new ConnectedOverlayScrollHandler(getContainer(), () => {
                    if (visibleState) {
                        hide();
                    }
                });
            }

            scrollHandler.current.bindScrollListener();
        };

        const onResize = () => {
            if (visibleState && !isTouchDevice()) {
                hide();
            }
        };

        const onOverlayClick = (event: React.MouseEvent) => {
            OverlayEventBus.emit('overlay-click', {
                originalEvent: event,
                target: props.target
            });

            selfClick.current = true;
        };

        const onOverlayKeyDown = (event: React.KeyboardEvent) => {
            if (event.code === 'Escape') {
                onEscapeKey(event);
            }
        };

        const onEscapeKey = (event: React.KeyboardEvent) => {
            if (visibleState) {
                hide();
            }

            event.preventDefault();
        };

        React.useEffect(() => {
            if (props.open) {
                show();
            } else if (!props.open) {
                hide();
            }
        }, [props.open]);

        useUnmountEffect(() => {
            unbindOutsideClickListener();
            unbindScrollListener();
            unbindResizeListener();

            if (scrollHandler.current) {
                scrollHandler.current.destroy();
                scrollHandler.current = null;
            }

            const containerElement = getContainer();

            if (props.autoZIndex && containerElement) {
                ZIndex.clear(containerElement);
            }
        });

        return {
            state,
            containerRef,
            // methods
            hide,
            onOverlayEnter,
            onOverlayAfterEnter,
            onLeave,
            onAfterLeave,
            onOverlayClick,
            onOverlayKeyDown
        };
    }
});
