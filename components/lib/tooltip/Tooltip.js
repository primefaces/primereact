import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import PrimeReact from '../api/Api';
import { Portal } from '../portal/Portal';
import { DomHandler, classNames, ZIndexUtils } from '../utils/Utils';
import { useMountEffect, useUpdateEffect, useUnmountEffect, useResizeListener, useOverlayScrollListener } from '../hooks/Hooks';

export const tip = (props) => {
    const appendTo = props.appendTo || document.body;

    const tooltipWrapper = document.createDocumentFragment();
    DomHandler.appendChild(tooltipWrapper, appendTo);

    props = { ...props, ...props.options };

    const tooltipEl = React.createElement(Tooltip, props);
    ReactDOM.render(tooltipEl, tooltipWrapper);

    const updateTooltip = (newProps) => {
        props = { ...props, ...newProps };
        ReactDOM.render(React.cloneElement(tooltipEl, props), tooltipWrapper);
    };

    return {
        destroy: () => {
            ReactDOM.unmountComponentAtNode(tooltipWrapper);
        },
        updateContent: (newContent) => {
            console.warn("The 'updateContent' method has been deprecated on Tooltip. Use update(newProps) method.");
            updateTooltip({ content: newContent });
        },
        update: (newProps) => {
            updateTooltip(newProps);
        }
    }
}

export const Tooltip = forwardRef((props, ref) => {
    const [visibleState, setVisibleState] = useState(false);
    const [positionState, setPositionState] = useState(props.position);
    const elementRef = useRef(null);
    const textRef = useRef(null);
    const currentTargetRef = useRef(null);
    const containerSize = useRef(null);
    const allowHide = useRef(true);
    const timeouts = useRef({});

    const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
        listener: (event) => {
            !DomHandler.isTouchDevice() && hide(event);
        }
    });

    const [bindOverlayScrollListener, unbindOverlayScrollListener] = useOverlayScrollListener({
        target: currentTargetRef.current, listener: (event) => {
            hide(event);
        }, when: visibleState
    });

    const isTargetContentEmpty = (target) => {
        return !(props.content || getTargetOption(target, 'tooltip'));
    }

    const isContentEmpty = (target) => {
        return !(props.content || getTargetOption(target, 'tooltip') || props.children);
    }

    const isMouseTrack = (target) => {
        return getTargetOption(target, 'mousetrack') || props.mouseTrack;
    }

    const isDisabled = (target) => {
        return getTargetOption(target, 'disabled') === 'true' || hasTargetOption(target, 'disabled') || props.disabled;
    }

    const isShowOnDisabled = (target) => {
        return getTargetOption(target, 'showondisabled') || props.showOnDisabled;
    }

    const isAutoHide = () => {
        return getTargetOption(currentTargetRef.current, 'autohide') || props.autoHide;
    }

    const getTargetOption = (target, option) => {
        return hasTargetOption(target, `data-pr-${option}`) ? target.getAttribute(`data-pr-${option}`) : null;
    }

    const hasTargetOption = (target, option) => {
        return target && target.hasAttribute(option);
    }

    const getEvents = (target) => {
        let showEvent = getTargetOption(target, 'showevent') || props.showEvent;
        let hideEvent = getTargetOption(target, 'hideevent') || props.hideEvent;

        if (isMouseTrack(target)) {
            showEvent = 'mousemove';
            hideEvent = 'mouseleave';
        }
        else {
            const event = getTargetOption(target, 'event') || props.event;
            if (event === 'focus') {
                showEvent = 'focus';
                hideEvent = 'blur';
            }
        }

        return { showEvent, hideEvent };
    }

    const getPosition = (target) => {
        return getTargetOption(target, 'position') || positionState;
    }

    const getMouseTrackPosition = (target) => {
        const top = getTargetOption(target, 'mousetracktop') || props.mouseTrackTop;
        const left = getTargetOption(target, 'mousetrackleft') || props.mouseTrackLeft;

        return { top, left };
    }

    const updateText = (target, callback) => {
        if (textRef.current) {
            const content = getTargetOption(target, 'tooltip') || props.content;

            if (content) {
                textRef.current.innerHTML = ''; // remove children
                textRef.current.appendChild(document.createTextNode(content));
                callback();
            }
            else if (props.children) {
                callback();
            }
        }
    }

    const show = (e) => {
        currentTargetRef.current = e.currentTarget;
        const disabled = isDisabled(currentTargetRef.current);
        const empty = isContentEmpty((isShowOnDisabled(currentTargetRef.current) && disabled) ? currentTargetRef.current.firstChild : currentTargetRef.current);

        if (empty || disabled) {
            return;
        }

        const updateTooltipState = () => {
            updateText(currentTargetRef.current, () => {
                if (props.autoZIndex && !ZIndexUtils.get(elementRef.current)) {
                    ZIndexUtils.set('tooltip', elementRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex['tooltip']);
                }

                elementRef.current.style.left = '';
                elementRef.current.style.top = '';

                if (isMouseTrack(currentTargetRef.current) && !containerSize.current) {
                    containerSize.current = {
                        width: DomHandler.getOuterWidth(elementRef.current),
                        height: DomHandler.getOuterHeight(elementRef.current)
                    };
                }

                align(currentTargetRef.current, { x: e.pageX, y: e.pageY });
            });
        }

        if (visibleState) {
            applyDelay('updateDelay', updateTooltipState);
        }
        else {
            sendCallback(props.onBeforeShow, { originalEvent: e, target: currentTargetRef.current });
            applyDelay('showDelay', () => {
                setVisibleState(true);
                setPositionState(getPosition(currentTargetRef.current));
                updateTooltipState();
                sendCallback(props.onShow, { originalEvent: e, target: currentTargetRef.current });
                DomHandler.addClass(currentTargetRef.current, getTargetOption(currentTargetRef.current, 'classname'));
            });
        }
    }

    const hide = (e) => {
        clearTimeouts();

        if (visibleState) {
            DomHandler.removeClass(currentTargetRef.current, getTargetOption(currentTargetRef.current, 'classname'));

            sendCallback(props.onBeforeHide, { originalEvent: e, target: currentTargetRef.current });
            applyDelay('hideDelay', () => {
                ZIndexUtils.clear(elementRef.current);
                DomHandler.removeClass(elementRef.current, 'p-tooltip-active');

                if (!isAutoHide() && allowHide.current === false) {
                    return;
                }

                setVisibleState(false);
                setPositionState(props.position);
                currentTargetRef.current = null;
                containerSize.current = null;
                allowHide.current = true;
                sendCallback(props.onHide, { originalEvent: e, target: currentTargetRef.current });
            });
        }
    }

    const align = (target, coordinate) => {
        let left = 0, top = 0;

        if (isMouseTrack(target) && coordinate) {
            const _containerSize = {
                width: DomHandler.getOuterWidth(elementRef.current),
                height: DomHandler.getOuterHeight(elementRef.current)
            };

            left = coordinate.x;
            top = coordinate.y;

            let { top: mouseTrackTop, left: mouseTrackLeft } = getMouseTrackPosition(target);

            switch (positionState) {
                case 'left':
                    left -= (_containerSize.width + mouseTrackLeft);
                    top -= (_containerSize.height / 2) - mouseTrackTop;
                    break;
                case 'right':
                    left += mouseTrackLeft;
                    top -= (_containerSize.height / 2) - mouseTrackTop;
                    break;
                case 'top':
                    left -= (_containerSize.width / 2) - mouseTrackLeft;
                    top -= (_containerSize.height + mouseTrackTop);
                    break;
                case 'bottom':
                    left -= (_containerSize.width / 2) - mouseTrackLeft;
                    top += mouseTrackTop;
                    break;
                default:
                    break;
            }

            if (left <= 0 || containerSize.current.width > _containerSize.width) {
                elementRef.current.style.left = '0px';
                elementRef.current.style.right = window.innerWidth - _containerSize.width - left + 'px';
            }
            else {
                elementRef.current.style.right = '';
                elementRef.current.style.left = left + 'px';
            }

            elementRef.current.style.top = top + 'px';
            DomHandler.addClass(elementRef.current, 'p-tooltip-active');
        }
        else {
            const pos = DomHandler.findCollisionPosition(positionState);
            const my = (getTargetOption(target, 'my') || props.my || pos.my);
            const at = (getTargetOption(target, 'at') || props.at || pos.at);

            elementRef.current.style.padding = '0px';

            DomHandler.flipfitCollision(elementRef.current, target, my, at, (currentPosition) => {
                const { x: atX, y: atY } = currentPosition.at;
                const { x: myX } = currentPosition.my;
                const newPosition = props.at ? (atX !== 'center' && atX !== myX ? atX : atY) : currentPosition.at[`${pos.axis}`];

                elementRef.current.style.padding = '';

                setPositionState(newPosition);
                updateContainerPosition();
                DomHandler.addClass(elementRef.current, 'p-tooltip-active');
            });
        }
    }

    const updateContainerPosition = () => {
        if (elementRef.current) {
            const style = getComputedStyle(elementRef.current);

            if (positionState === 'left')
                elementRef.current.style.left = (parseFloat(style.left) - (parseFloat(style.paddingLeft) * 2)) + 'px';
            else if (positionState === 'top')
                elementRef.current.style.top = (parseFloat(style.top) - (parseFloat(style.paddingTop) * 2)) + 'px';
        }
    }

    const onMouseEnter = () => {
        if (!isAutoHide()) {
            allowHide.current = false;
        }
    }

    const onMouseLeave = (e) => {
        if (!isAutoHide()) {
            allowHide.current = true;
            hide(e);
        }
    }

    const bindTargetEvent = (target) => {
        if (target) {
            const { showEvent, hideEvent } = getEvents(target);
            const currentTarget = getTarget(target);
            currentTarget.addEventListener(showEvent, show);
            currentTarget.addEventListener(hideEvent, hide);
        }
    }

    const unbindTargetEvent = (target) => {
        if (target) {
            const { showEvent, hideEvent } = getEvents(target);
            const currentTarget = getTarget(target);
            currentTarget.removeEventListener(showEvent, show);
            currentTarget.removeEventListener(hideEvent, hide);
        }
    }

    const applyDelay = (delayProp, callback) => {
        clearTimeouts();

        const delay = getTargetOption(currentTargetRef.current, delayProp.toLowerCase()) || props[delayProp];
        !!delay ? timeouts.current[`${delayProp}`] = setTimeout(() => callback(), delay) : callback();
    }

    const sendCallback = (callback, ...params) => {
        callback && callback(...params);
    }

    const clearTimeouts = () => {
        Object.keys(timeouts.current).forEach((t) => clearTimeout(t));
    }

    const getTarget = (target) => {
        if (target) {
            if (isShowOnDisabled(target)) {
                if (!target.hasWrapper) {
                    const wrapper = document.createElement('span');
                    target.parentNode.insertBefore(wrapper, target);
                    wrapper.appendChild(target);
                    target.hasWrapper = true;
                    return wrapper;
                }
                else {
                    return target.parentElement;
                }
            }
            else if (target.hasWrapper) {
                target.parentElement.replaceWith(...target.parentElement.childNodes);
                delete target.hasWrapper;
            }

            return target;
        }

        return null;
    }

    const updateTargetEvents = (target) => {
        unloadTargetEvents(target);
        loadTargetEvents(target);
    }

    const loadTargetEvents = (target) => {
        setTargetEventOperations(target || props.target, bindTargetEvent);
    }

    const unloadTargetEvents = (target) => {
        setTargetEventOperations(target || props.target, unbindTargetEvent);
    }

    const setTargetEventOperations = (target, operation) => {
        if (target) {
            if (DomHandler.isElement(target)) {
                operation(target);
            }
            else {
                const setEvent = (target) => {
                    let element = DomHandler.find(document, target);
                    element.forEach((el) => {
                        operation(el);
                    });
                }

                if (target instanceof Array) {
                    target.forEach(t => {
                        setEvent(t);
                    });
                }
                else {
                    setEvent(target);
                }
            }
        }
    }

    useEffect(() => {
        if (visibleState && currentTargetRef.current && isDisabled(currentTargetRef.current)) {
            hide();
        }
    });

    useMountEffect(() => {
        loadTargetEvents();
    });

    useUpdateEffect(() => {
        visibleState && loadTargetEvents();
    }, [show, hide, props.target]);

    useUpdateEffect(() => {
        if (visibleState) {
            bindWindowResizeListener();
            bindOverlayScrollListener();
        }
        else {
            textRef.current && ReactDOM.unmountComponentAtNode(textRef.current);
        }

        return () => {
            unbindWindowResizeListener();
            unbindOverlayScrollListener();
        }
    }, [visibleState]);

    useUpdateEffect(() => {
        if (visibleState) {
            applyDelay('updateDelay', () => {
                updateText(currentTargetRef.current, () => {
                    align(currentTargetRef.current);
                });
            });
        }
    }, [props.content]);

    useUnmountEffect(() => {
        clearTimeouts();
        unloadTargetEvents();

        ZIndexUtils.clear(elementRef.current);
    });

    useImperativeHandle(ref, () => ({
        updateTargetEvents,
        loadTargetEvents,
        unloadTargetEvents
    }));

    const createElement = () => {
        const tooltipClassName = classNames('p-tooltip p-component', {
            [`p-tooltip-${positionState}`]: true
        }, props.className);
        const empty = isTargetContentEmpty(currentTargetRef.current);

        return (
            <div id={props.id} ref={elementRef} className={tooltipClassName} style={props.style} role="tooltip" aria-hidden={visibleState}
                onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <div className="p-tooltip-arrow"></div>
                <div ref={textRef} className="p-tooltip-text">
                    {empty && props.children}
                </div>
            </div>
        )
    }

    if (visibleState) {
        const element = createElement();

        return <Portal element={element} appendTo={props.appendTo} visible />;
    }

    return null;
});

Tooltip.defaultProps = {
    __TYPE: 'Tooltip',
    id: null,
    target: null,
    content: null,
    disabled: false,
    className: null,
    style: null,
    appendTo: null,
    position: 'right',
    my: null,
    at: null,
    event: null,
    showEvent: 'mouseenter',
    hideEvent: 'mouseleave',
    autoZIndex: true,
    baseZIndex: 0,
    mouseTrack: false,
    mouseTrackTop: 5,
    mouseTrackLeft: 5,
    showDelay: 0,
    updateDelay: 0,
    hideDelay: 0,
    autoHide: true,
    showOnDisabled: false,
    onBeforeShow: null,
    onBeforeHide: null,
    onShow: null,
    onHide: null
}

Tooltip.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    target: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
    content: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    position: PropTypes.string,
    my: PropTypes.string,
    at: PropTypes.string,
    event: PropTypes.string,
    showEvent: PropTypes.string,
    hideEvent: PropTypes.string,
    autoZIndex: PropTypes.bool,
    baseZIndex: PropTypes.number,
    mouseTrack: PropTypes.bool,
    mouseTrackTop: PropTypes.number,
    mouseTrackLeft: PropTypes.number,
    showDelay: PropTypes.number,
    updateDelay: PropTypes.number,
    hideDelay: PropTypes.number,
    autoHide: PropTypes.bool,
    showOnDisabled: PropTypes.bool,
    onBeforeShow: PropTypes.func,
    onBeforeHide: PropTypes.func,
    onShow: PropTypes.func,
    onHide: PropTypes.func
}
