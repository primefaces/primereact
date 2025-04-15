import { withHeadless } from '@primereact/core/headless';
import { useMountEffect, useUnmountEffect } from '@primereact/hooks';
import { addClass, getHeight, removeClass } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useScrollPanel.props';

export const useScrollPanel = withHeadless({
    setup: ({ props, elementRef, id }) => {
        const rootRef = elementRef as React.RefObject<HTMLElement>;
        const contentRef = React.useRef<HTMLDivElement>(null);
        const xBarRef = React.useRef<HTMLDivElement>(null);
        const yBarRef = React.useRef<HTMLDivElement>(null);
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
        const contentId = id + '_content';

        const calculateContainerHeight = () => {
            if (!rootRef.current || !xBarRef.current || !contentRef.current) return;

            const containerStyles = getComputedStyle(rootRef.current);
            const xBarStyles = getComputedStyle(xBarRef.current);
            const pureContainerHeight = getHeight(rootRef.current) - parseInt(xBarStyles.height, 10);

            if (containerStyles.maxHeight !== 'none' && pureContainerHeight === 0) {
                if (contentRef.current.offsetHeight + parseInt(xBarStyles.height, 10) > parseInt(containerStyles.maxHeight, 10)) {
                    rootRef.current.style.height = containerStyles.maxHeight;
                } else {
                    rootRef.current.style.height =
                        contentRef.current.offsetHeight + parseFloat(containerStyles.paddingTop) + parseFloat(containerStyles.paddingBottom) + parseFloat(containerStyles.borderTopWidth) + parseFloat(containerStyles.borderBottomWidth) + 'px';
                }
            }
        };

        const moveBar = () => {
            if (!contentRef.current || !xBarRef.current || !yBarRef.current || !rootRef.current) return;

            // horizontal scroll
            const totalWidth = contentRef.current.scrollWidth;
            const ownWidth = contentRef.current.clientWidth;
            const bottom = (rootRef.current.clientHeight - xBarRef.current.clientHeight) * -1;

            scrollXRatio.current = ownWidth / totalWidth;

            // vertical scroll
            const totalHeight = contentRef.current.scrollHeight;
            const ownHeight = contentRef.current.clientHeight;
            const right = (rootRef.current.clientWidth - yBarRef.current.clientWidth) * -1;

            scrollYRatio.current = ownHeight / totalHeight;

            const contentElement = contentRef.current;
            const xBarElement = xBarRef.current;
            const yBarElement = yBarRef.current;
            const xRatio = scrollXRatio.current;
            const yRatio = scrollYRatio.current;

            frame.current = window.requestAnimationFrame(() => {
                if (!contentElement || !xBarElement || !yBarElement || xRatio === null || yRatio === null) return;

                if (xRatio >= 1) {
                    addClass(xBarElement, 'p-scrollpanel-hidden');
                } else {
                    removeClass(xBarElement, 'p-scrollpanel-hidden');
                    xBarElement.style.width = Math.max(xRatio * 100, 10) + '%';
                    xBarElement.style.setProperty('inset-inline-start', (contentElement.scrollLeft / totalWidth) * 100 + '%');
                    xBarElement.style.bottom = bottom + 'px';
                }

                if (yRatio >= 1) {
                    addClass(yBarElement, 'p-scrollpanel-hidden');
                } else {
                    removeClass(yBarElement, 'p-scrollpanel-hidden');
                    yBarElement.style.height = Math.max(yRatio * 100, 10) + '%';
                    yBarElement.style.top = `calc(${(contentElement.scrollTop / totalHeight) * 100}% - ${xBarElement.clientHeight}px)`;
                    yBarElement.style.setProperty('inset-inline-end', right + 'px');
                }
            });
        };

        const onFocus = (event: React.FocusEvent<HTMLDivElement>) => {
            if (xBarRef.current && xBarRef.current.isSameNode(event.target)) {
                setOrientationState('horizontal');
            } else if (yBarRef.current && yBarRef.current.isSameNode(event.target)) {
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

        const onYBarMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
            isYBarClicked.current = true;
            lastPageY.current = event.pageY;

            if (yBarRef.current) {
                addClass(yBarRef.current, 'p-scrollpanel-grabbed');
                yBarRef.current.setAttribute('data-p-scrollpanel-grabbed', 'true');
            }

            addClass(document.body, 'p-scrollpanel-grabbed');
            document.body.setAttribute('data-p-scrollpanel-grabbed', 'true');

            document.addEventListener('mousemove', onDocumentMouseMove);
            document.addEventListener('mouseup', onDocumentMouseUp);
            event.preventDefault();
        };

        const onXBarMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
            isXBarClicked.current = true;
            lastPageX.current = event.pageX;

            if (xBarRef.current) {
                addClass(xBarRef.current, 'p-scrollpanel-grabbed');
                addClass(xBarRef.current, 'p-scrollpanel-grabbed');
            }

            addClass(document.body, 'p-scrollpanel-grabbed');
            document.body.setAttribute('data-p-scrollpanel-grabbed', 'true');

            document.addEventListener('mousemove', onDocumentMouseMove);
            document.addEventListener('mouseup', onDocumentMouseUp);
            event.preventDefault();
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
            if (yBarRef.current) {
                removeClass(yBarRef.current, 'p-scrollpanel-grabbed');
                yBarRef.current.setAttribute('data-p-scrollpanel-grabbed', 'false');
            }

            if (xBarRef.current) {
                removeClass(xBarRef.current, 'p-scrollpanel-grabbed');
                xBarRef.current.setAttribute('data-p-scrollpanel-grabbed', 'false');
            }

            removeClass(document.body, 'p-scrollpanel-grabbed');
            document.body.setAttribute('data-p-scrollpanel-grabbed', 'false');

            document.removeEventListener('mousemove', onDocumentMouseMove);
            document.removeEventListener('mouseup', onDocumentMouseUp);
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

        useMountEffect(() => {
            moveBar();
            window.addEventListener('resize', moveBar);
            calculateContainerHeight();
            initialized.current = true;
        });

        useUnmountEffect(() => {
            if (initialized.current) {
                window.removeEventListener('resize', moveBar);
            }

            if (frame.current) {
                window.cancelAnimationFrame(frame.current);
            }
        });

        return {
            contentRef,
            contentId,
            xBarRef,
            yBarRef,
            lastScrollLeft,
            lastScrollTop,
            onScroll,
            onXBarMouseDown,
            onYBarMouseDown,
            onFocus,
            onBlur,
            onKeyDown,
            onKeyUp
        };
    },
    defaultProps
});
