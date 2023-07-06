import * as React from 'react';
import { useEventListener } from '../hooks/Hooks';
import { classNames, DomHandler, mergeProps, ObjectUtils } from '../utils/Utils';
import { SplitterBase, SplitterPanelBase } from './SplitterBase';
import { PrimeReactContext } from '../api/Api';

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
        const prevPanelSizeNew = React.useRef(null);
        const nextPanelSize = React.useRef(null);
        const nextPanelSizeNew = React.useRef(null);
        const prevPanelIndex = React.useRef(null);
        const [panelSizes, setPanelSizes] = React.useState([]);
        const isStateful = props.stateKey != null;
        const childrenLength = (props.children && props.children.length) || 1;
        const panelSize = (sizes, index) => (index in sizes ? sizes[index] : (props.children && [].concat(props.children)[index].props.size) || 100 / childrenLength);

        const metaData = {
            props,
            state: {
                panelSizes: panelSizes
            }
        };

        const { ptm, ptmo } = SplitterBase.setMetaData({
            ...metaData
        });

        const getPanelPT = (panel, key) => {
            return ptmo(getPanelProp(panel, 'pt'), key, {
                props: panel.props,
                parent: metaData
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
            getStorage().setItem(props.stateKey, JSON.stringify(sizes));
        };

        const restoreState = React.useCallback(() => {
            const stateString = getStorage().getItem(props.stateKey);

            if (stateString) setPanelSizes(JSON.parse(stateString));
        }, [getStorage, props.stateKey]);

        const onResizeStart = (event, index) => {
            gutterRef.current = gutterRefs.current[index];
            let pageX = event.type === 'touchstart' ? event.touches[0].pageX : event.pageX;
            let pageY = event.type === 'touchstart' ? event.touches[0].pageY : event.pageY;

            size.current = props.layout === 'horizontal' ? DomHandler.getWidth(elementRef.current) : DomHandler.getHeight(elementRef.current);
            dragging.current = true;
            startPos.current = props.layout === 'horizontal' ? pageX : pageY;
            prevPanelElement.current = gutterRef.current.previousElementSibling;
            nextPanelElement.current = gutterRef.current.nextElementSibling;
            prevPanelSize.current = (100 * (props.layout === 'horizontal' ? DomHandler.getOuterWidth(prevPanelElement.current, true) : DomHandler.getOuterHeight(prevPanelElement.current, true))) / size.current;
            prevPanelSizeNew.current = prevPanelSize.current;
            nextPanelSize.current = (100 * (props.layout === 'horizontal' ? DomHandler.getOuterWidth(nextPanelElement.current, true) : DomHandler.getOuterHeight(nextPanelElement.current, true))) / size.current;
            nextPanelSizeNew.current = nextPanelSize.current;
            prevPanelIndex.current = index;
            DomHandler.addClass(gutterRef.current, 'p-splitter-gutter-resizing');
            DomHandler.addClass(elementRef.current, 'p-splitter-resizing');
        };

        const onResize = (event) => {
            let newPos;
            let pageX = event.type === 'touchmove' ? event.touches[0].pageX : event.pageX;
            let pageY = event.type === 'touchmove' ? event.touches[0].pageY : event.pageY;

            if (props.layout === 'horizontal') newPos = (pageX * 100) / size.current - (startPos.current * 100) / size.current;
            else newPos = (pageY * 100) / size.current - (startPos.current * 100) / size.current;

            let newPrevPanelSize = prevPanelSize.current + newPos;
            let newNextPanelSize = nextPanelSize.current - newPos;

            if (validateResize(newPrevPanelSize, newNextPanelSize)) {
                prevPanelSizeNew.current = newPrevPanelSize;
                nextPanelSizeNew.current = newNextPanelSize;
                prevPanelElement.current.style.flexBasis = 'calc(' + newPrevPanelSize + '% - ' + (props.children.length - 1) * props.gutterSize + 'px)';
                nextPanelElement.current.style.flexBasis = 'calc(' + newNextPanelSize + '% - ' + (props.children.length - 1) * props.gutterSize + 'px)';
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

            DomHandler.removeClass(gutterRef.current, 'p-splitter-gutter-resizing');
            DomHandler.removeClass(elementRef.current, 'p-splitter-resizing');
            clear();
        };

        const onGutterMouseDown = (event, index) => {
            onResizeStart(event, index);
            bindMouseListeners();
        };

        const onGutterTouchStart = (event, index) => {
            onResizeStart(event, index);

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
            const panelElements = [...elementRef.current.children].filter((child) => DomHandler.hasClass(child, 'p-splitter-panel'));

            panelElements.map((panelElement) => {
                if (panelElement.childNodes && ObjectUtils.isNotEmpty(DomHandler.find(panelElement, '.p-splitter'))) {
                    DomHandler.addClass(panelElement, 'p-splitter-panel-nested');
                }
            });
        }, []);

        React.useEffect(() => {
            if (isStateful) restoreState();
        }, [restoreState, isStateful]);

        const createPanel = (panel, index) => {
            const panelClassName = classNames('p-splitter-panel', getPanelProp(panel, 'className'));
            const gutterStyle = props.layout === 'horizontal' ? { width: props.gutterSize + 'px' } : { height: props.gutterSize + 'px' };

            const gutterProps = mergeProps(
                {
                    ref: (el) => (gutterRefs.current[index] = el),
                    className: 'p-splitter-gutter',
                    style: gutterStyle,

                    onMouseDown: (event) => onGutterMouseDown(event, index),
                    onTouchStart: (event) => onGutterTouchStart(event, index),
                    onTouchMove: (event) => onGutterTouchMove(event),
                    onTouchEnd: (event) => onGutterTouchEnd(event)
                },
                ptm('gutter')
            );

            const gutterHandlerProps = mergeProps(
                {
                    className: 'p-splitter-gutter-handle'
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
                    className: panelClassName,
                    style: { ...getPanelProp(panel, 'style'), flexBasis },
                    role: 'presentation'
                },
                getPanelPT(panel, 'root')
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

        const className = classNames(`p-splitter p-component p-splitter-${props.layout}`, props.className);

        const rootProps = mergeProps(
            {
                id: props.id,
                ref: elementRef,
                style: props.style,
                className
            },
            SplitterBase.getOtherProps(props),
            ptm('root')
        );

        const panels = createPanels();

        return <div {...rootProps}>{panels}</div>;
    })
);

SplitterPanel.displayName = 'SplitterPanel';

Splitter.displayName = 'Splitter';
