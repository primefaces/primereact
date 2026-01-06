import { withHeadless } from '@primereact/core/headless';
import { useMountEffect, useUnmountEffect } from '@primereact/hooks';
import { useEventListener } from '@primereact/hooks/use-event-listener';
import { addClass, getHeight, removeClass } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useScrollArea.props';

export const useScrollArea = withHeadless({
    name: 'useScrollArea',
    defaultProps,
    setup({ props, elementRef }) {
        const contentRef = React.useRef<HTMLDivElement>(null);
        const thumbXRef = React.useRef<HTMLDivElement>(null);
        const thumbYRef = React.useRef<HTMLDivElement>(null);
        const [lastScrollLeft, setLastScrollLeft] = React.useState(0);
        const [lastScrollTop, setLastScrollTop] = React.useState(0);
        const isXBarClicked = React.useRef<boolean>(false);
        const isYBarClicked = React.useRef<boolean>(false);
        const lastPageX = React.useRef<number | null>(null);
        const lastPageY = React.useRef<number | null>(null);
        const scrollXRatio = React.useRef<number | null>(null);
        const scrollYRatio = React.useRef<number | null>(null);
        const frame = React.useRef<number | null>(null);
        const initialized = React.useRef<boolean>(false);
        const timer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
        const [orientationState, setOrientationState] = React.useState('vertical');

        const state = {
            orientationState
        };

        const calculateContainerHeight = () => {
            if (!elementRef.current || !contentRef.current) return;

            const containerStyles = getComputedStyle(elementRef.current);
            const thumbXHeight = thumbXRef.current ? parseInt(getComputedStyle(thumbXRef.current).height, 10) : 0;
            const pureContainerHeight = getHeight(elementRef.current) - thumbXHeight;

            if (containerStyles.maxHeight !== 'none' && pureContainerHeight === 0) {
                if (contentRef.current.offsetHeight + thumbXHeight > parseInt(containerStyles.maxHeight, 10)) {
                    elementRef.current.style.height = containerStyles.maxHeight;
                } else {
                    elementRef.current.style.height =
                        contentRef.current.offsetHeight + parseFloat(containerStyles.paddingTop) + parseFloat(containerStyles.paddingBottom) + parseFloat(containerStyles.borderTopWidth) + parseFloat(containerStyles.borderBottomWidth) + 'px';
                }
            }
        };

        const moveBar = () => {
            if (!contentRef.current || !elementRef.current) return;

            // horizontal scroll
            const totalWidth = contentRef.current.scrollWidth;
            const ownWidth = contentRef.current.clientWidth;
            const bottom = (elementRef.current.clientHeight - (thumbXRef.current?.clientHeight || 0)) * -1;

            scrollXRatio.current = ownWidth / totalWidth;

            // vertical scroll
            const totalHeight = contentRef.current.scrollHeight;
            const ownHeight = contentRef.current.clientHeight;
            const right = (elementRef.current.clientWidth - (thumbYRef.current?.clientWidth || 0)) * -1;

            scrollYRatio.current = ownHeight / totalHeight;

            const xRatio = scrollXRatio.current;
            const yRatio = scrollYRatio.current;

            frame.current = requestAnimationFrame(() => {
                if (thumbXRef.current) {
                    if (xRatio >= 1) {
                        addClass(thumbXRef.current, 'p-scrollpanel-hidden');
                    } else {
                        removeClass(thumbXRef.current, 'p-scrollpanel-hidden');
                        thumbXRef.current.style.width = Math.max(xRatio * 100, 10) + '%';
                        thumbXRef.current.style.setProperty('inset-inline-start', ((contentRef.current?.scrollLeft || 0) / totalWidth) * 100 + '%');
                        thumbXRef.current.style.bottom = bottom + 'px';
                    }
                }

                if (thumbYRef.current) {
                    if (yRatio >= 1) {
                        addClass(thumbYRef.current, 'p-scrollpanel-hidden');
                    } else {
                        removeClass(thumbYRef.current, 'p-scrollpanel-hidden');

                        thumbYRef.current.style.height = Math.max(yRatio * 100, 10) + '%';
                        thumbYRef.current.style.top = `calc(${((contentRef.current?.scrollTop || 0) / totalHeight) * 100}% - ${thumbXRef.current?.clientHeight || 0}px)`;
                        thumbYRef.current.style.setProperty('inset-inline-end', right + 'px');
                    }
                }
            });
        };

        const onFocus = (event: React.FocusEvent<HTMLDivElement>) => {
            if (thumbXRef.current && thumbXRef.current.isSameNode(event.target)) {
                setOrientationState('horizontal');
            } else if (thumbYRef.current && thumbYRef.current.isSameNode(event.target)) {
                setOrientationState('vertical');
            }
        };

        const onBlur = () => {
            if (orientationState === 'horizontal') {
                setOrientationState('vertical');
            }
        };

        const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
            if (lastScrollLeft !== event.currentTarget.scrollLeft) {
                setLastScrollLeft(event.currentTarget.scrollLeft);
                setOrientationState('horizontal');
            } else if (lastScrollTop !== event.currentTarget.scrollTop) {
                setLastScrollTop(event.currentTarget.scrollTop);
                setOrientationState('vertical');
            }

            moveBar();
        };

        const onDocumentMouseMove = (event: MouseEvent) => {
            if (isXBarClicked.current) {
                onMouseMoveForXBar(event);
            } else if (isYBarClicked.current) {
                onMouseMoveForYBar(event);
            } else {
                onMouseMoveForXBar(event);
                onMouseMoveForYBar(event);
            }
        };

        const onYBarMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
            isYBarClicked.current = true;
            lastPageY.current = event.pageY;

            if (thumbYRef.current) {
                addClass(thumbYRef.current, 'p-scrollpanel-grabbed');
                thumbYRef.current.setAttribute('data-p-scrollpanel-grabbed', 'true');
            }

            addClass(document.body, 'p-scrollpanel-grabbed');
            document.body.setAttribute('data-p-scrollpanel-grabbed', 'true');

            bindMouseMoveListener();
            unbindMouseUpListener();
            event.preventDefault();
        };

        const onXBarMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
            isXBarClicked.current = true;
            lastPageX.current = event.pageX;

            if (thumbXRef.current) {
                addClass(thumbXRef.current, 'p-scrollpanel-grabbed');
                addClass(thumbXRef.current, 'p-scrollpanel-grabbed');
            }

            addClass(document.body, 'p-scrollpanel-grabbed');
            document.body.setAttribute('data-p-scrollpanel-grabbed', 'true');

            bindMouseMoveListener();
            bindMouseUpListener();
            event.preventDefault();
        };

        const onMouseMoveForXBar = (event: MouseEvent) => {
            if (!lastPageX.current || !scrollXRatio.current || !contentRef.current) return;

            const deltaX = event.pageX - lastPageX.current;

            lastPageX.current = event.pageX;

            frame.current = window.requestAnimationFrame(() => {
                if (contentRef.current && scrollXRatio.current !== null) {
                    contentRef.current.scrollLeft += deltaX / scrollXRatio.current;
                }
            });
        };

        const onMouseMoveForYBar = (event: MouseEvent) => {
            if (!lastPageY.current || !scrollYRatio.current || !contentRef.current) return;

            const deltaY = event.pageY - lastPageY.current;

            lastPageY.current = event.pageY;

            frame.current = window.requestAnimationFrame(() => {
                if (contentRef.current && scrollYRatio.current !== null) {
                    contentRef.current.scrollTop += deltaY / scrollYRatio.current;
                }
            });
        };

        const onDocumentMouseUp = () => {
            if (thumbYRef.current) {
                removeClass(thumbYRef.current, 'p-scrollpanel-grabbed');
                thumbYRef.current.setAttribute('data-p-scrollpanel-grabbed', 'false');
            }

            if (thumbXRef.current) {
                removeClass(thumbXRef.current, 'p-scrollpanel-grabbed');
                thumbXRef.current.setAttribute('data-p-scrollpanel-grabbed', 'false');
            }

            removeClass(document.body, 'p-scrollpanel-grabbed');
            document.body.setAttribute('data-p-scrollpanel-grabbed', 'false');

            unbindMouseMoveListener();
            unbindMouseUpListener();
            isXBarClicked.current = false;
            isYBarClicked.current = false;
        };

        const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
            if (orientationState === 'vertical') {
                switch (event.code) {
                    case 'ArrowDown': {
                        setTimer('scrollTop', props.step as number);
                        event.preventDefault();
                        break;
                    }

                    case 'ArrowUp': {
                        setTimer('scrollTop', (props.step as number) * -1);
                        event.preventDefault();
                        break;
                    }

                    case 'ArrowLeft':

                    case 'ArrowRight': {
                        event.preventDefault();
                        break;
                    }

                    default:
                        //no op
                        break;
                }
            } else if (orientationState === 'horizontal') {
                switch (event.code) {
                    case 'ArrowRight': {
                        setTimer('scrollLeft', props.step as number);
                        event.preventDefault();
                        break;
                    }

                    case 'ArrowLeft': {
                        setTimer('scrollLeft', (props.step as number) * -1);
                        event.preventDefault();
                        break;
                    }

                    case 'ArrowDown':

                    case 'ArrowUp': {
                        event.preventDefault();
                        break;
                    }

                    default:
                        //no op
                        break;
                }
            }
        };

        const onKeyUp = () => {
            clearTimer();
        };

        const repeat = (bar: 'scrollTop' | 'scrollLeft', step: number) => {
            if (contentRef.current) {
                contentRef.current[bar] += step;
                moveBar();
            }
        };

        const setTimer = (bar: 'scrollTop' | 'scrollLeft', step: number) => {
            clearTimer();
            timer.current = setTimeout(() => {
                repeat(bar, step);
            }, 40);
        };

        const clearTimer = () => {
            if (timer.current) {
                clearTimeout(timer.current);
                timer.current = null;
            }
        };

        const [bindResizeListener, unbindResizeListener] = useEventListener({
            target: 'window',
            type: 'resize',
            listener: () => {
                moveBar();
            }
        });

        const [bindMouseMoveListener, unbindMouseMoveListener] = useEventListener({
            target: 'document',
            type: 'mousemove',
            listener: (event: Event) => {
                onDocumentMouseMove(event as MouseEvent);
            }
        });

        const [bindMouseUpListener, unbindMouseUpListener] = useEventListener({
            target: 'document',
            type: 'mouseup',
            listener: () => {
                onDocumentMouseUp();
            }
        });

        useMountEffect(() => {
            setTimeout(() => {
                moveBar();
                calculateContainerHeight();
                initialized.current = true;
            }, 0);

            bindResizeListener();
        });

        useUnmountEffect(() => {
            if (initialized.current) {
                unbindResizeListener();
            }

            if (frame.current) {
                window.cancelAnimationFrame(frame.current);
            }

            clearTimer();
        });

        return {
            state,
            contentRef,
            thumbXRef,
            thumbYRef,
            lastScrollLeft,
            lastScrollTop,
            //methods
            onScroll,
            onXBarMouseDown,
            onYBarMouseDown,
            onFocus,
            onBlur,
            onKeyDown,
            onKeyUp
        };
    }
});
