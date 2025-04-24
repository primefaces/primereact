import { withHeadless } from '@primereact/core/headless';
import { useEventListener } from '@primereact/hooks/use-event-listener';
import { getHeight, getOuterHeight, getOuterWidth, getWidth, isRTL } from '@primeuix/utils/dom';
import { isArray, isNotEmpty } from '@primeuix/utils/object';
import * as React from 'react';
import { defaultProps } from './useSplitter.props';

export const useSplitter = withHeadless({
    setup: ({ props, elementRef, inProps }) => {
        const gutterRef = React.useRef<HTMLElement | null>(null);
        const gutterRefs = React.useRef<Record<string, HTMLElement>>({});
        const size = React.useRef<number | null>(null);
        const dragging = React.useRef(false);
        const startPos = React.useRef<number | null>(null);
        const prevPanelElement = React.useRef<HTMLElement | null>(null);
        const nextPanelElement = React.useRef<HTMLElement | null>(null);
        const prevPanelSize = React.useRef<number | null>(null);
        const [prevSize, setPrevSize] = React.useState<number | null>(null);
        const nextPanelSize = React.useRef<number | null>(null);
        const prevPanelIndex = React.useRef<number | null>(null);
        const timer = React.useRef<ReturnType<typeof setInterval> | null>(null);
        const [panelSizes, setPanelSizes] = React.useState<number[]>([]);
        const [panels, setPanels] = React.useState<React.ReactNode[]>([]);
        const horizontal = props.layout === 'horizontal';
        const gutterCounter = React.useRef(0);
        const panelCounter = React.useRef(0);

        const registerGutter = React.useCallback(() => {
            const index = gutterCounter.current;

            gutterCounter.current += 1;

            return index;
        }, []);

        const registerPanel = React.useCallback(() => {
            const index = panelCounter.current;

            panelCounter.current += 1;

            return index;
        }, []);

        React.useEffect(() => {
            gutterCounter.current = 0;
            panelCounter.current = 0;

            return () => {
                gutterCounter.current = 0;
                panelCounter.current = 0;
            };
        }, []);

        const onResizeStart = (event: React.MouseEvent | React.TouchEvent | KeyboardEvent, index: number, isKeyDown = false) => {
            gutterRef.current = gutterRefs.current[index];
            size.current = horizontal ? getWidth(elementRef.current) : getHeight(elementRef.current);

            if (!isKeyDown) {
                dragging.current = true;
                startPos.current =
                    props.layout === 'horizontal' ? (event as React.MouseEvent).pageX || (event as React.TouchEvent).changedTouches?.[0]?.pageX : (event as React.MouseEvent).pageY || (event as React.TouchEvent).changedTouches?.[0]?.pageY;
            }

            if (gutterRef.current) {
                prevPanelElement.current = gutterRef.current.previousElementSibling as HTMLElement;
                nextPanelElement.current = gutterRef.current.nextElementSibling as HTMLElement;

                if (prevPanelElement.current && nextPanelElement.current) {
                    if (isKeyDown) {
                        prevPanelSize.current = horizontal ? getOuterWidth(prevPanelElement.current, true) : getOuterHeight(prevPanelElement.current, true);
                        nextPanelSize.current = horizontal ? getOuterWidth(nextPanelElement.current, true) : getOuterHeight(nextPanelElement.current, true);
                    } else {
                        prevPanelSize.current = (100 * (horizontal ? getOuterWidth(prevPanelElement.current, true) : getOuterHeight(prevPanelElement.current, true))) / (size.current || 1);
                        nextPanelSize.current = (100 * (horizontal ? getOuterWidth(nextPanelElement.current, true) : getOuterHeight(nextPanelElement.current, true))) / (size.current || 1);
                    }

                    prevPanelIndex.current = index;
                    gutterRefs.current[index].setAttribute('data-p-gutter-resizing', 'true');
                    elementRef.current.setAttribute('data-p-resizing', 'true');
                }
            }
        };

        const onResize = (event: React.MouseEvent | React.TouchEvent | KeyboardEvent, step = 5, isKeyDown = false) => {
            if (!prevPanelElement.current || !nextPanelElement.current || size.current === null || prevPanelSize.current === null || nextPanelSize.current === null) {
                return;
            }

            let newPos: number, newPrevPanelSize: number, newNextPanelSize: number;

            if (isKeyDown) {
                if (horizontal) {
                    newPrevPanelSize = (100 * (prevPanelSize.current + step)) / size.current;
                    newNextPanelSize = (100 * (nextPanelSize.current - step)) / size.current;
                } else {
                    newPrevPanelSize = (100 * (prevPanelSize.current - step)) / size.current;
                    newNextPanelSize = (100 * (nextPanelSize.current + step)) / size.current;
                }
            } else {
                if (startPos.current === null) {
                    return;
                }

                if (horizontal) {
                    if (isRTL(elementRef.current)) {
                        newPos = ((startPos.current - (event as React.MouseEvent).pageX) * 100) / size.current;
                    } else {
                        newPos = (((event as React.MouseEvent).pageX - startPos.current) * 100) / size.current;
                    }
                } else {
                    newPos = (((event as React.MouseEvent).pageY - startPos.current) * 100) / size.current;
                }

                newPrevPanelSize = prevPanelSize.current + newPos;
                newNextPanelSize = nextPanelSize.current - newPos;
            }

            if (!validateResize(newPrevPanelSize, newNextPanelSize)) {
                newPrevPanelSize = Math.min(Math.max(prevPanelMinSize(), newPrevPanelSize), 100 - nextPanelMinSize());
                newNextPanelSize = Math.min(Math.max(nextPanelMinSize(), newNextPanelSize), 100 - prevPanelMinSize());
            }

            prevPanelElement.current.style.flexBasis = 'calc(' + newPrevPanelSize + '% - ' + (panels.length - 1) * (props.gutterSize ?? 4) + 'px)';
            nextPanelElement.current.style.flexBasis = 'calc(' + newNextPanelSize + '% - ' + (panels.length - 1) * (props.gutterSize ?? 4) + 'px)';

            if (prevPanelIndex.current !== null) {
                panelSizes[prevPanelIndex.current] = newPrevPanelSize;
                panelSizes[prevPanelIndex.current + 1] = newNextPanelSize;
            }

            setPrevSize(Number(newPrevPanelSize.toFixed(4)));
        };

        const onResizeEnd = () => {
            if (isStateful()) {
                saveState();
            }

            if (gutterRefs.current) {
                Object.keys(gutterRefs.current).forEach((key) => gutterRefs.current[key].setAttribute('data-p-gutter-resizing', 'false'));
            }

            elementRef.current.setAttribute('data-p-resizing', 'false');
            clear();
        };

        const repeat = (event: React.MouseEvent | React.TouchEvent | KeyboardEvent, index: number, step: number) => {
            onResizeStart(event, index, true);
            onResize(event, step, true);
        };

        const setTimer = (event: React.MouseEvent | React.TouchEvent | KeyboardEvent, index: number, step: number) => {
            if (!timer.current) {
                timer.current = setInterval(() => {
                    repeat(event, index, step);
                }, 40);
            }
        };

        const clearTimer = () => {
            if (timer.current) {
                clearInterval(timer.current);
                timer.current = null;
            }
        };

        const onGutterKeyUp = () => {
            clearTimer();
            onResizeEnd();
        };

        const onGutterKeyDown = (event: React.KeyboardEvent, index: number) => {
            switch (event.code) {
                case 'ArrowLeft': {
                    if (props.layout === 'horizontal') {
                        setTimer(event as unknown as KeyboardEvent, index, (props.step as number) * -1);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowRight': {
                    if (props.layout === 'horizontal') {
                        setTimer(event as unknown as KeyboardEvent, index, props.step as number);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowDown': {
                    if (props.layout === 'vertical') {
                        setTimer(event as unknown as KeyboardEvent, index, (props.step as number) * -1);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowUp': {
                    if (props.layout === 'vertical') {
                        setTimer(event as unknown as KeyboardEvent, index, props.step as number);
                    }

                    event.preventDefault();
                    break;
                }

                default:
                    //no op
                    break;
            }
        };

        const onGutterMouseDown = (event: React.MouseEvent, index: number) => {
            onResizeStart(event, index);
            bindMouseListeners();
        };

        const onGutterTouchStart = (event: React.TouchEvent, index: number) => {
            onResizeStart(event, index);
            bindTouchListeners();
            event.preventDefault();
        };

        const onGutterTouchMove = (event: React.TouchEvent) => {
            onResize(event);
            event.preventDefault();
        };

        const onGutterTouchEnd = (event: React.TouchEvent) => {
            onResizeEnd();
            unbindTouchListeners();
            event.preventDefault();
        };

        const validateResize = (newPrevPanelSize: number, newNextPanelSize: number) => {
            if (newPrevPanelSize > 100 || newPrevPanelSize < 0) return false;

            if (newNextPanelSize > 100 || newNextPanelSize < 0) return false;

            if (prevPanelMinSize() > newPrevPanelSize) {
                return false;
            }

            if (nextPanelMinSize() > newNextPanelSize) {
                return false;
            }

            return true;
        };

        const [bindDocumentMouseMoveListener, unbindDocumentMouseMoveListener] = useEventListener({
            type: 'mousemove',
            listener: (event: Event) => onResize(event as unknown as React.MouseEvent)
        });
        const [bindDocumentMouseUpListener, unbindDocumentMouseUpListener] = useEventListener({
            type: 'mouseup',
            listener: () => {
                onResizeEnd();
                unbindMouseListeners();
            }
        });

        const bindMouseListeners = () => {
            bindDocumentMouseMoveListener();
            bindDocumentMouseUpListener();
        };

        const unbindMouseListeners = () => {
            unbindDocumentMouseMoveListener();
            unbindDocumentMouseUpListener();
        };

        const [bindDocumentTouchMoveListener, unbindDocumentTouchMoveListener] = useEventListener({
            type: 'touchmove',
            listener: (event: Event) => onResize(event as unknown as React.TouchEvent)
        });
        const [bindDocumentTouchEndListener, unbindDocumentTouchEndListener] = useEventListener({
            type: 'touchend',
            listener: () => {
                onResizeEnd();
                unbindTouchListeners();
            }
        });

        const bindTouchListeners = () => {
            bindDocumentTouchMoveListener();
            bindDocumentTouchEndListener();
        };

        const unbindTouchListeners = () => {
            unbindDocumentTouchMoveListener();
            unbindDocumentTouchEndListener();
        };

        const clear = () => {
            dragging.current = false;
            size.current = null;
            startPos.current = null;
            prevPanelElement.current = null;
            nextPanelElement.current = null;
            prevPanelSize.current = null;
            nextPanelSize.current = null;
            gutterRef.current = null;
            prevPanelIndex.current = null;
        };

        const isStateful = () => {
            return props.stateKey != null;
        };

        const getStorage = React.useCallback(() => {
            switch (props.stateStorage) {
                case 'local':
                    return window.localStorage;

                case 'session':
                    return window.sessionStorage;

                default:
                    throw new Error(props.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
            }
        }, [props.stateStorage]);

        const saveState = () => {
            if (isArray(panelSizes)) {
                getStorage().setItem(props.stateKey as string, JSON.stringify(panelSizes));
            }
        };

        const restoreState = React.useCallback(() => {
            const stateString = getStorage().getItem(props.stateKey as string);

            if (stateString) {
                setPanelSizes(JSON.parse(stateString));
            }
        }, [getStorage, props.stateKey]);

        React.useEffect(() => {
            if (isStateful()) {
                restoreState();
            }
        }, [restoreState]);

        const findPanels = () => {
            const childrenArray = inProps.children ? (Array.isArray(inProps.children) ? inProps.children : [inProps.children]) : [];
            const panelsArray: React.ReactNode[] = [];

            childrenArray.forEach((child) => {
                if (child && child.type && child.type.displayName === 'PrimeReact.SplitterPanel') {
                    panelsArray.push(child);
                }
            });

            setPanels(panelsArray);
        };

        React.useEffect(() => {
            findPanels();
        }, [inProps.children]);

        React.useEffect(() => {
            if (!panels.length) return;

            const _panelSizes: number[] = [];

            panels.forEach((panel, i) => {
                const panelInitialSize = panel?.props && isNotEmpty(panel?.props?.size) ? panel.props.size : null;
                const panelSize = panelInitialSize || 100 / panels.length;

                _panelSizes[i] = panelSize;
            });

            setPrevSize(Number(_panelSizes[0].toFixed(4)));
            setPanelSizes(_panelSizes);
        }, [panels]);

        const prevPanelMinSize = () => {
            const index = prevPanelIndex.current;

            if (index !== null && typeof index === 'number' && panels[index]?.props && panels[index]?.props?.minSize) {
                return panels[index].props.minSize;
            }

            return 0;
        };

        const nextPanelMinSize = () => {
            const index = prevPanelIndex.current;

            if (index !== null && typeof index === 'number') {
                const nextIndex = index + 1;

                if (panels[nextIndex]?.props && panels[nextIndex]?.props?.minSize) {
                    return panels[nextIndex].props.minSize;
                }
            }

            return 0;
        };

        return {
            registerGutter,
            registerPanel,
            panelCounter,
            gutterRef,
            gutterRefs,
            panelSizes,
            prevSize,
            // methods
            onResizeStart,
            onResize,
            onResizeEnd,
            onGutterMouseDown,
            onGutterTouchStart,
            onGutterTouchMove,
            onGutterTouchEnd,
            onGutterKeyUp,
            onGutterKeyDown
        };
    },
    defaultProps
});
