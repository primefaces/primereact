import { withHeadless } from '@primereact/core/headless';
import { useEventListener } from '@primereact/hooks/use-event-listener';
import { find, getHeight, getOuterHeight, getOuterWidth, getWidth, isRTL } from '@primeuix/utils/dom';
import { isArray } from '@primeuix/utils/object';
import * as React from 'react';
import { defaultProps } from './useSplitter.props';

export const useSplitter = withHeadless({
    setup: ({ props, elementRef, inProps }) => {
        const gutterRef = React.useRef(null);
        const gutterRefs = React.useRef({});
        const size = React.useRef(null);
        const dragging = React.useRef(false);
        const startPos = React.useRef<number | null>(null);
        const prevPanelElement = React.useRef(null);
        const nextPanelElement = React.useRef(null);
        const prevPanelSize = React.useRef(null);
        const prevSize = React.useRef(null);
        const prevPanelSizeNew = React.useRef(null);
        const nextPanelSize = React.useRef(null);
        const nextPanelSizeNew = React.useRef(null);
        const prevPanelIndex = React.useRef(null);
        const timer = React.useRef(null);
        const [panelSizes, setPanelSizes] = React.useState([]);
        const [nested, setNested] = React.useState(false);
        const [panels, setPanels] = React.useState([]);
        const horizontal = props.layout === 'horizontal';
        const gutterCounter = React.useRef(0);

        const registerGutter = React.useCallback(() => {
            const index = gutterCounter.current;

            gutterCounter.current += 1;

            return index;
        }, []);

        React.useEffect(() => {
            gutterCounter.current = 0;

            return () => {
                gutterCounter.current = 0;
            };
        }, []);

        const onResizeStart = (event: React.MouseEvent | React.TouchEvent | KeyboardEvent, index: number, isKeyDown = false) => {
            //TODO:
            // gutterRef.current = event.currentTarget || event.target.parentElement;
            gutterRef.current = gutterRefs.current[index];
            size.current = horizontal ? getWidth(elementRef.current) : getHeight(elementRef.current);

            if (!isKeyDown) {
                dragging.current = true;
                startPos.current = props.layout === 'horizontal' ? (event as React.MouseEvent).pageX || (event as React.TouchEvent).changedTouches[0].pageX : (event as React.MouseEvent).pageY || (event as React.TouchEvent).changedTouches[0].pageY;
            }

            prevPanelElement.current = gutterRef.current.previousElementSibling;
            nextPanelElement.current = gutterRef.current.nextElementSibling;

            if (isKeyDown) {
                prevPanelSize.current = horizontal ? getOuterWidth(prevPanelElement.current, true) : getOuterHeight(prevPanelElement.current, true);
                nextPanelSize.current = horizontal ? getOuterWidth(nextPanelElement.current, true) : getOuterHeight(nextPanelElement.current, true);
            } else {
                prevPanelSize.current = (100 * (horizontal ? getOuterWidth(prevPanelElement.current, true) : getOuterHeight(prevPanelElement.current, true))) / size.current;
                nextPanelSize.current = (100 * (horizontal ? getOuterWidth(nextPanelElement.current, true) : getOuterHeight(nextPanelElement.current, true))) / size.current;
            }

            prevPanelIndex.current = index;
            //TODO:
            // this.$refs.gutter[index].setAttribute('data-p-gutter-resizing', true);
            // this.$el.setAttribute('data-p-resizing', true);
        };

        const onResize = (event: React.MouseEvent | React.TouchEvent | KeyboardEvent, step?: number, isKeyDown = false) => {
            let newPos, newPrevPanelSize, newNextPanelSize;

            if (isKeyDown) {
                if (horizontal) {
                    newPrevPanelSize = (100 * (prevPanelSize.current + step)) / size.current;
                    newNextPanelSize = (100 * (nextPanelSize.current - step)) / size.current;
                } else {
                    newPrevPanelSize = (100 * (prevPanelSize.current - step)) / size.current;
                    newNextPanelSize = (100 * (nextPanelSize.current + step)) / size.current;
                }
            } else {
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

            //TODO:
            // if (!validateResize(newPrevPanelSize, newNextPanelSize)) {
            //     newPrevPanelSize = Math.min(Math.max(prevPanelMinSize, newPrevPanelSize), 100 - this.nextPanelMinSize);
            //     newNextPanelSize = Math.min(Math.max(this.nextPanelMinSize, newNextPanelSize), 100 - prevPanelMinSize);
            // }

            prevPanelElement.current.style.flexBasis = 'calc(' + newPrevPanelSize + '% - ' + (panels.length - 1) * props.gutterSize + 'px)';
            nextPanelElement.current.style.flexBasis = 'calc(' + newNextPanelSize + '% - ' + (panels.length - 1) * props.gutterSize + 'px)';
            panelSizes[prevPanelIndex.current] = newPrevPanelSize;
            panelSizes[prevPanelIndex.current + 1] = newNextPanelSize;
            prevSize.current = parseFloat(newPrevPanelSize).toFixed(4);
        };

        const onResizeEnd = () => {
            if (isStateful()) {
                saveState();
            }

            gutterRefs.current && Object.keys(gutterRefs.current).forEach((key) => gutterRefs.current[key].setAttribute('data-p-splitter-gutter-resizing', false));
            elementRef.current.setAttribute('data-p-splitter-resizing', false);
            clear();
        };

        const repeat = (event: React.KeyboardEvent | React.MouseEvent | React.TouchEvent, index: number, step: number) => {
            onResizeStart(event, index, true);
            onResize(event, step, true);
        };

        const setTimer = (event: React.KeyboardEvent | React.MouseEvent | React.TouchEvent, index: number, step: number) => {
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
                        setTimer(event, index, (props.step as number) * -1);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowRight': {
                    if (props.layout === 'horizontal') {
                        setTimer(event, index, props.step as number);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowDown': {
                    if (props.layout === 'vertical') {
                        setTimer(event, index, (props.step as number) * -1);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowUp': {
                    if (props.layout === 'vertical') {
                        setTimer(event, index, props.step as number);
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

        const validateResize = (newPrevPanelSize, newNextPanelSize) => {
            if (newPrevPanelSize > 100 || newPrevPanelSize < 0) return false;

            if (newNextPanelSize > 100 || newNextPanelSize < 0) return false;

            //TODO:
            // if (this.prevPanelMinSize > newPrevPanelSize) {
            //     return false;
            // }

            // if (this.nextPanelMinSize > newNextPanelSize) {
            //     return false;
            // }

            return true;
        };

        const [bindDocumentMouseMoveListener, unbindDocumentMouseMoveListener] = useEventListener({ type: 'mousemove', listener: (event: React.TouchEvent) => onResize(event) });
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

        const [bindDocumentTouchMoveListener, unbindDocumentTouchMoveListener] = useEventListener({ type: 'touchmove', listener: (event: React.TouchEvent) => onResize(event) });
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

        //TODO:
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
            const panelsArray = [];

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

        console.log(panels);

        const prevPanelMinSize = () => {
            // const prevPanelMinSize = getVNodeProp(this.panels[this.prevPanelIndex], 'minSize');

            // if (this.panels[this.prevPanelIndex].props && prevPanelMinSize) {
            //     return prevPanelMinSize;
            // }

            const panel = find(elementRef.current, '[data-pc-section="panel"]')[prevPanelIndex.current];

            console.log(panel);

            return 0;
        };

        return {
            registerGutter,
            gutterRef,
            gutterRefs,
            panels,
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
