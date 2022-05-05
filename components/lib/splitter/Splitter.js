import * as React from 'react';
import { DomHandler, classNames, ObjectUtils } from '../utils/Utils';
import { useMountEffect, useEventListener } from '../hooks/Hooks';

export const SplitterPanel = () => { }

export const Splitter = React.memo(React.forwardRef((props, ref) => {
    const elementRef = React.useRef(null);
    const gutterRef = React.useRef();
    const gutterRefs = React.useRef({});
    const size = React.useRef(null);
    const dragging = React.useRef(null);
    const startPos = React.useRef(null);
    const prevPanelElement = React.useRef(null);
    const nextPanelElement = React.useRef(null);
    const prevPanelSize = React.useRef(null);
    const nextPanelSize = React.useRef(null);
    const prevPanelIndex = React.useRef(null);
    const panelSizes = React.useRef(null);
    const isStateful = props.stateKey != null;

    const [bindDocumentMouseMoveListener, unbindDocumentMouseMoveListener] = useEventListener({ type: 'mousemove', listener: (event) => onResize(event) });
    const [bindDocumentMouseUpListener, unbindDocumentMouseUpListener] = useEventListener({
        type: 'mouseup', listener: event => {
            onResizeEnd(event);
            unbindMouseListeners();
        }
    });

    const bindMouseListeners = () => {
        bindDocumentMouseMoveListener();
        bindDocumentMouseUpListener();
    }

    const unbindMouseListeners = () => {
        unbindDocumentMouseMoveListener();
        unbindDocumentMouseUpListener();
    }

    const validateResize = (newPrevPanelSize, newNextPanelSize) => {
        if (props.children[prevPanelIndex.current].props && props.children[prevPanelIndex.current].props.minSize && props.children[prevPanelIndex.current].props.minSize > newPrevPanelSize) {
            return false;
        }

        if (props.children[prevPanelIndex.current + 1].props && props.children[prevPanelIndex.current + 1].props.minSize && props.children[prevPanelIndex.current + 1].props.minSize > newNextPanelSize) {
            return false;
        }

        return true;
    }

    const clear = () => {
        dragging.current = false;
        size.current = null;
        startPos.current = null;
        prevPanelElement.current = null;
        nextPanelElement.current = null;
        prevPanelSize.current = null;
        nextPanelSize.current = null;
        prevPanelIndex.current = null;
    }

    const getStorage = () => {
        switch (props.stateStorage) {
            case 'local':
                return window.localStorage;

            case 'session':
                return window.sessionStorage;

            default:
                throw new Error(props.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
        }
    }

    const saveState = () => {
        getStorage().setItem(props.stateKey, JSON.stringify(panelSizes));
    }

    const restoreState = () => {
        const storage = getStorage();
        const stateString = storage.getItem(props.stateKey);

        if (stateString) {
            panelSizes.current = JSON.parse(stateString);
            let children = [...elementRef.current.children].filter(child => DomHandler.hasClass(child, 'p-splitter-panel'));
            children.forEach((child, i) => {
                child.style.flexBasis = 'calc(' + panelSizes[i] + '% - ' + ((props.children.length - 1) * props.gutterSize) + 'px)';
            });

            return true;
        }

        return false;
    }

    const onResizeStart = (event, index) => {
        gutterRef.current = gutterRefs.current[index];
        let pageX = event.type === 'touchstart' ? event.touches[0].pageX : event.pageX;
        let pageY = event.type === 'touchstart' ? event.touches[0].pageY : event.pageY;
        size.current = props.layout === 'horizontal' ? DomHandler.getWidth(elementRef.current) : DomHandler.getHeight(elementRef.current);
        dragging.current = true;
        startPos.current = props.layout === 'horizontal' ? pageX : pageY;
        prevPanelElement.current = gutterRef.current.previousElementSibling;
        nextPanelElement.current = gutterRef.current.nextElementSibling;
        prevPanelSize.current = 100 * (props.layout === 'horizontal' ? DomHandler.getOuterWidth(prevPanelElement.current, true) : DomHandler.getOuterHeight(prevPanelElement.current, true)) / size.current;
        nextPanelSize.current = 100 * (props.layout === 'horizontal' ? DomHandler.getOuterWidth(nextPanelElement.current, true) : DomHandler.getOuterHeight(nextPanelElement.current, true)) / size.current;
        prevPanelIndex.current = index;
        DomHandler.addClass(gutterRef.current, 'p-splitter-gutter-resizing');
        DomHandler.addClass(elementRef.current, 'p-splitter-resizing');
    }

    const onResize = (event) => {
        let newPos;
        let pageX = event.type === 'touchmove' ? event.touches[0].pageX : event.pageX;
        let pageY = event.type === 'touchmove' ? event.touches[0].pageY : event.pageY;

        if (props.layout === 'horizontal')
            newPos = (pageX * 100 / size.current) - (startPos.current * 100 / size.current);
        else
            newPos = (pageY * 100 / size.current) - (startPos.current * 100 / size.current);

        let newPrevPanelSize = prevPanelSize.current + newPos;
        let newNextPanelSize = nextPanelSize.current - newPos;

        if (validateResize(newPrevPanelSize, newNextPanelSize)) {
            prevPanelElement.current.style.flexBasis = 'calc(' + newPrevPanelSize + '% - ' + ((props.children.length - 1) * props.gutterSize) + 'px)';
            nextPanelElement.current.style.flexBasis = 'calc(' + newNextPanelSize + '% - ' + ((props.children.length - 1) * props.gutterSize) + 'px)';
            panelSizes.current[prevPanelIndex.current] = newPrevPanelSize;
            panelSizes.current[prevPanelIndex.current + 1] = newNextPanelSize;
        }
    }

    const onResizeEnd = (event) => {
        if (isStateful) {
            saveState();
        }

        if (props.onResizeEnd) {
            props.onResizeEnd({
                originalEvent: event,
                sizes: panelSizes
            })
        }

        DomHandler.removeClass(gutterRef.current, 'p-splitter-gutter-resizing');
        DomHandler.removeClass(elementRef.current, 'p-splitter-resizing');
        clear();
    }

    const onGutterMouseDown = (event, index) => {
        onResizeStart(event, index);
        bindMouseListeners();
    }

    const onGutterTouchStart = (event, index) => {
        onResizeStart(event, index);

        window.addEventListener('touchmove', onGutterTouchMove, { passive: false, cancelable: false });
        window.addEventListener('touchend', onGutterTouchEnd);
    }

    const onGutterTouchMove = (event) => {
        onResize(event);
    }

    const onGutterTouchEnd = (event) => {
        onResizeEnd(event);
        window.removeEventListener('touchmove', onGutterTouchMove);
        window.removeEventListener('touchend', onGutterTouchEnd);
    }

    useMountEffect(() => {
        let panelElements = [...elementRef.current.children].filter(child => DomHandler.hasClass(child, 'p-splitter-panel'));
        panelElements.map(panelElement => {
            if (panelElement.childNodes && ObjectUtils.isNotEmpty(DomHandler.find(panelElement, '.p-splitter'))) {
                DomHandler.addClass(panelElement, 'p-splitter-panel-nested');
            }
        });

        if (props.children && props.children.length) {
            let initialized = false;
            if (isStateful) {
                initialized = restoreState();
            }

            if (!initialized) {
                let _panelSizes = [];

                props.children.map((panel, i) => {
                    let panelInitialSize = panel.props && panel.props.size ? panel.props.size : null;
                    let panelSize = panelInitialSize || (100 / props.children.length);
                    _panelSizes[i] = panelSize;
                    panelElements[i].style.flexBasis = 'calc(' + panelSize + '% - ' + ((props.children.length - 1) * props.gutterSize) + 'px)';
                    return _panelSizes;
                });

                panelSizes.current = _panelSizes;
            }
        }
    });

    const createPanel = (panel, index) => {
        const otherProps = ObjectUtils.findDiffKeys(panel.props, SplitterPanel.defaultProps);
        const panelClassName = classNames('p-splitter-panel', panel.props.className);
        const gutterStyle = props.layout === 'horizontal' ? { width: props.gutterSize + 'px' } : { height: props.gutterSize + 'px' }
        const gutter = (index !== props.children.length - 1) && (
            <div ref={(el) => gutterRefs.current[index] = el} className="p-splitter-gutter" style={gutterStyle} onMouseDown={event => onGutterMouseDown(event, index)}
                onTouchStart={event => onGutterTouchStart(event, index)} onTouchMove={event => onGutterTouchMove(event)} onTouchEnd={event => onGutterTouchEnd(event)}>
                <div className="p-splitter-gutter-handle"></div>
            </div>
        );

        return (
            <React.Fragment>
                <div key={index} className={panelClassName} style={panel.props.style} {...otherProps}>
                    {panel.props.children}
                </div>
                {gutter}
            </React.Fragment>
        )
    }


    const createPanels = () => {
        return React.Children.map(props.children, createPanel);
    }

    const otherProps = ObjectUtils.findDiffKeys(props, Splitter.defaultProps);
    const className = classNames(`p-splitter p-component p-splitter-${props.layout}`, props.className);
    const panels = createPanels();

    return (
        <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps}>
            {panels}
        </div>
    )
}));

SplitterPanel.displayName = 'SplitterPanel';
SplitterPanel.defaultProps = {
    __TYPE: 'SplitterPanel',
    size: null,
    minSize: null,
    style: null,
    className: null
}

Splitter.displayName = 'Splitter';
Splitter.defaultProps = {
    __TYPE: 'Splitter',
    id: null,
    className: null,
    style: null,
    layout: 'horizontal',
    gutterSize: 4,
    stateKey: null,
    stateStorage: 'session',
    onResizeEnd: null
}
