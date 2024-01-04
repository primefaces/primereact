import * as React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useEventListener } from '../hooks/Hooks';
import { DomHandler, ObjectUtils, classNames, mergeProps } from '../utils/Utils';
import { SplitterBase, SplitterPanelBase } from './SplitterBase';

export const SplitterPanel = () => {};

export const Splitter = React.memo(
    React.forwardRef((inProps, ref) => {
        const context = React.useContext(PrimeReactContext);
        const props = SplitterBase.getProps(inProps, context);

        const elementRef = React.useRef(null);
        const gutterRef = React.useRef();
        const gutterRefs = React.useRef({});
        const size = React.useRef(null);
        const dragging = React.useRef(null);
        const startPos = React.useRef(null);
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
        const isStateful = props.stateKey != null;
        const childrenLength = (props.children && props.children.length) || 1;
        const panelSize = (sizes, index) => (index in sizes ? sizes[index] : (props.children && [].concat(props.children)[index].props.size) || 100 / childrenLength);

        const metaData = {
            props,
            state: {
                panelSizes: panelSizes,
                nested: DomHandler.getAttribute(elementRef.current && elementRef.current.parentElement, 'data-p-splitter-panel-nested') === true
            }
        };

        const { ptm, cx, isUnstyled } = SplitterBase.setMetaData({
            ...metaData
        });

        useHandleStyle(SplitterBase.css.styles, isUnstyled, { name: 'splitter' });

        const getPanelPT = (key) => {
            return ptm(key, {
                context: {
                    nested
                }
            });
        };

        const [bindDocumentMouseMoveListener, unbindDocumentMouseMoveListener] = useEventListener({ type: 'mousemove', listener: (event) => onResize(event) });
        const [bindDocumentMouseUpListener, unbindDocumentMouseUpListener] = useEventListener({
            type: 'mouseup',
            listener: (event) => {
                onResizeEnd(event);
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

        const getPanelProp = (panel, name) => {
            return SplitterPanelBase.getCProp(panel, name);
        };

        const validateResize = (newPrevPanelSize, newNextPanelSize) => {
            if (newPrevPanelSize > 100 || newPrevPanelSize < 0) return false;
            if (newNextPanelSize > 100 || newNextPanelSize < 0) return false;

            if (props.children[prevPanelIndex.current].props && props.children[prevPanelIndex.current].props.minSize && props.children[prevPanelIndex.current].props.minSize > newPrevPanelSize) {
                return false;
            }

            if (props.children[prevPanelIndex.current + 1].props && props.children[prevPanelIndex.current + 1].props.minSize && props.children[prevPanelIndex.current + 1].props.minSize > newNextPanelSize) {
                return false;
            }

            return true;
        };

        const clear = () => {
            dragging.current = false;
            size.current = null;
            startPos.current = null;
            prevPanelElement.current = null;
            nextPanelElement.current = null;
            prevPanelSize.current = null;
            prevPanelSizeNew.current = null;
            nextPanelSize.current = null;
            nextPanelSizeNew.current = null;
            prevPanelIndex.current = null;
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

        const saveState = (sizes) => {
            if (ObjectUtils.isArray(sizes)) {
                getStorage().setItem(props.stateKey, JSON.stringify(sizes));
            }
        };

        const restoreState = React.useCallback(() => {
            const stateString = getStorage().getItem(props.stateKey);

            if (stateString) setPanelSizes(JSON.parse(stateString));
        }, [getStorage, props.stateKey]);

        const onResizeStart = (event, index, isKeyDown) => {
            gutterRef.current = gutterRefs.current[index];
            let pageX = event.type === 'touchstart' ? event.touches[0].pageX : event.pageX;
            let pageY = event.type === 'touchstart' ? event.touches[0].pageY : event.pageY;
            const horizontal = props.layout === 'horizontal';

            size.current = horizontal ? DomHandler.getWidth(elementRef.current) : DomHandler.getHeight(elementRef.current);
            dragging.current = true;
            startPos.current = horizontal ? pageX : pageY;
            prevPanelElement.current = gutterRef.current.previousElementSibling;
            nextPanelElement.current = gutterRef.current.nextElementSibling;

            if (isKeyDown) {
                prevPanelSize.current = horizontal ? DomHandler.getOuterWidth(prevPanelElement.current, true) : DomHandler.getOuterHeight(prevPanelElement.current, true);
                nextPanelSize.current = horizontal ? DomHandler.getOuterWidth(nextPanelElement.current, true) : DomHandler.getOuterHeight(nextPanelElement.current, true);
            } else {
                prevPanelSize.current = (100 * (horizontal ? DomHandler.getOuterWidth(prevPanelElement.current, true) : DomHandler.getOuterHeight(prevPanelElement.current, true))) / size.current;
                nextPanelSize.current = (100 * (horizontal ? DomHandler.getOuterWidth(nextPanelElement.current, true) : DomHandler.getOuterHeight(nextPanelElement.current, true))) / size.current;
            }

            prevPanelSizeNew.current = prevPanelSize.current;
            nextPanelSizeNew.current = nextPanelSize.current;
            prevPanelIndex.current = index;
            !isUnstyled() && DomHandler.addClass(gutterRef.current, 'p-splitter-gutter-resizing');
            gutterRef.current.setAttribute('data-p-splitter-gutter-resizing', true);
            !isUnstyled() && DomHandler.addClass(elementRef.current, 'p-splitter-resizing');
            elementRef.current.setAttribute('data-p-splitter-resizing', true);
        };

        const onResize = (event, step = 0, isKeyDown = false) => {
            let newPos, newNextPanelSize, newPrevPanelSize;
            let horizontal = props.layout === 'horizontal';
            let pageX = event.type === 'touchmove' ? event.touches[0].pageX : event.pageX;
            let pageY = event.type === 'touchmove' ? event.touches[0].pageY : event.pageY;

            if (isKeyDown) {
                if (horizontal) {
                    newPrevPanelSize = (100 * (prevPanelSize.current + step)) / size.current;
                    newNextPanelSize = (100 * (nextPanelSize.current - step)) / size.current;
                } else {
                    newPrevPanelSize = (100 * (prevPanelSize.current - step)) / size.current;
                    newNextPanelSize = (100 * (nextPanelSize.current + step)) / size.current;
                }
            } else {
                if (horizontal) newPos = (pageX * 100) / size.current - (startPos.current * 100) / size.current;
                else newPos = (pageY * 100) / size.current - (startPos.current * 100) / size.current;

                newPrevPanelSize = prevPanelSize.current + newPos;
                newNextPanelSize = nextPanelSize.current - newPos;
            }

            if (validateResize(newPrevPanelSize, newNextPanelSize)) {
                prevPanelSizeNew.current = newPrevPanelSize;
                nextPanelSizeNew.current = newNextPanelSize;
                prevPanelElement.current.style.flexBasis = 'calc(' + newPrevPanelSize + '% - ' + (props.children.length - 1) * props.gutterSize + 'px)';
                nextPanelElement.current.style.flexBasis = 'calc(' + newNextPanelSize + '% - ' + (props.children.length - 1) * props.gutterSize + 'px)';
                prevSize.current = parseFloat(newPrevPanelSize).toFixed(4);
            }
        };

        const onResizeEnd = (event) => {
            setPanelSizes((prev) => {
                const sizes = [];

                for (let index = 0; index < props.children.length; index++) sizes[index] = panelSize(prev, index);
                sizes[prevPanelIndex.current] = prevPanelSizeNew.current;
                sizes[prevPanelIndex.current + 1] = nextPanelSizeNew.current;

                if (props.onResizeEnd) {
                    props.onResizeEnd({
                        originalEvent: event,
                        sizes
                    });
                }

                if (isStateful) saveState(sizes);

                return sizes;
            });

            !isUnstyled() && DomHandler.removeClass(gutterRef.current, 'p-splitter-gutter-resizing');
            gutterRefs.current && Object.keys(gutterRefs.current).forEach((key) => gutterRefs.current[key].setAttribute('data-p-splitter-gutter-resizing', false));
            !isUnstyled() && DomHandler.removeClass(elementRef.current, 'p-splitter-resizing');
            elementRef.current.setAttribute('data-p-splitter-resizing', false);
            clear();
        };

        const onGutterKeyUp = () => {
            clearTimer();
            onResizeEnd();
        };

        const onGutterKeyDown = (event, index) => {
            switch (event.code) {
                case 'ArrowLeft': {
                    if (props.layout === 'horizontal') {
                        setTimer(event, index, props.step * -1);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowRight': {
                    if (props.layout === 'horizontal') {
                        setTimer(event, index, props.step);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowDown': {
                    if (props.layout === 'vertical') {
                        setTimer(event, index, props.step * -1);
                    }

                    event.preventDefault();
                    break;
                }

                case 'ArrowUp': {
                    if (props.layout === 'vertical') {
                        setTimer(event, index, props.step);
                    }

                    event.preventDefault();
                    break;
                }

                default:
                    //no op
                    break;
            }
        };

        const repeat = (event, index, step) => {
            onResizeStart(event, index, true);
            onResize(event, step, true);
        };

        const setTimer = (event, index, step) => {
            clearTimer();
            timer.current = setTimeout(() => {
                repeat(event, index, step);
            }, 40);
        };

        const clearTimer = () => {
            if (timer.current) {
                clearTimeout(timer.current);
            }
        };

        const onGutterMouseDown = (event, index) => {
            onResizeStart(event, index, false);
            bindMouseListeners();
        };

        const onGutterTouchStart = (event, index) => {
            onResizeStart(event, index, false);

            window.addEventListener('touchmove', onGutterTouchMove, { passive: false, cancelable: false });
            window.addEventListener('touchend', onGutterTouchEnd);
        };

        const onGutterTouchMove = (event) => {
            onResize(event);
        };

        const onGutterTouchEnd = (event) => {
            onResizeEnd(event);
            window.removeEventListener('touchmove', onGutterTouchMove);
            window.removeEventListener('touchend', onGutterTouchEnd);
        };

        React.useImperativeHandle(ref, () => ({
            props,
            getElement: () => elementRef.current
        }));

        React.useEffect(() => {
            const panelElements = [...elementRef.current.children].filter((child) => DomHandler.getAttribute(child, 'data-pc-section') === 'splitterpanel.root');

            panelElements.map((panelElement, i) => {
                prevSize.current = panelSize(panelSizes, 0);

                if (panelElement.childNodes && ObjectUtils.isNotEmpty(DomHandler.find(panelElement, "[data-pc-name='splitter']") && DomHandler.find(panelElement, "[data-pc-section='root']"))) {
                    !isUnstyled() && DomHandler.addClass(panelElement, 'p-splitter-panel-nested');
                    panelElement.setAttribute('data-p-splitter-panel-nested', true);
                    setNested(true);
                }
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);

        React.useEffect(() => {
            if (isStateful) restoreState();
        }, [restoreState, isStateful]);

        const createPanel = (panel, index) => {
            const panelClassName = classNames(getPanelProp(panel, 'className'), cx('panel.root'));

            const gutterProps = mergeProps(
                {
                    ref: (el) => (gutterRefs.current[index] = el),
                    className: cx('gutter'),
                    style: props.layout === 'horizontal' ? { width: props.gutterSize + 'px' } : { height: props.gutterSize + 'px' },
                    onMouseDown: (event) => onGutterMouseDown(event, index),
                    onKeyDown: (event) => onGutterKeyDown(event, index),
                    onKeyUp: onGutterKeyUp,
                    onTouchStart: (event) => onGutterTouchStart(event, index),
                    onTouchMove: (event) => onGutterTouchMove(event),
                    onTouchEnd: (event) => onGutterTouchEnd(event),
                    'data-p-splitter-gutter-resizing': false
                },
                ptm('gutter')
            );

            const gutterHandlerProps = mergeProps(
                {
                    tabIndex: 0,
                    className: cx('gutterHandler'),
                    'aria-orientation': props.layout,
                    'aria-valuenow': prevSize.current
                },
                ptm('gutterHandler')
            );

            const gutter = index !== props.children.length - 1 && (
                <div {...gutterProps}>
                    <div {...gutterHandlerProps}></div>
                </div>
            );

            const flexBasis = 'calc(' + panelSize(panelSizes, index) + '% - ' + (childrenLength - 1) * props.gutterSize + 'px)';

            const rootProps = mergeProps(
                {
                    key: index,
                    id: getPanelProp(panel, 'id'),
                    className: panelClassName,
                    style: { ...getPanelProp(panel, 'style'), flexBasis },
                    role: 'presentation',
                    'data-p-splitter-panel-nested': false
                },
                getPanelPT('splitterpanel.root')
            );

            return (
                <React.Fragment>
                    <div {...rootProps}>{getPanelProp(panel, 'children')}</div>
                    {gutter}
                </React.Fragment>
            );
        };

        const createPanels = () => {
            return React.Children.map(props.children, createPanel);
        };

        const rootProps = mergeProps(
            {
                id: props.id,
                style: props.style,
                className: classNames(props.className, cx('root')),
                'data-p-splitter-resizing': false
            },
            SplitterBase.getOtherProps(props),
            ptm('root')
        );

        const panels = createPanels();

        return (
            <div ref={elementRef} {...rootProps}>
                {panels}
            </div>
        );
    })
);

SplitterPanel.displayName = 'SplitterPanel';

Splitter.displayName = 'Splitter';
