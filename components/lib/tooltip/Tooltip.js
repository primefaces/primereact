import * as React from 'react';
import PrimeReact from '../api/Api';
import { useMountEffect, useOverlayScrollListener, useResizeListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { Portal } from '../portal/Portal';
import { classNames, DomHandler, ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { TooltipBase } from './TooltipBase';

export const Tooltip = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = TooltipBase.getProps(inProps);

        const [visibleState, setVisibleState] = React.useState(false);
        const [positionState, setPositionState] = React.useState(props.position);
        const [classNameState, setClassNameState] = React.useState('');
        const elementRef = React.useRef(null);
        const textRef = React.useRef(null);
        const currentTargetRef = React.useRef(null);
        const containerSize = React.useRef(null);
        const allowHide = React.useRef(true);
        const timeouts = React.useRef({});
        const currentMouseEvent = React.useRef(null);

        const [bindWindowResizeListener, unbindWindowResizeListener] = useResizeListener({
            listener: (event) => {
                !DomHandler.isTouchDevice() && hide(event);
            }
        });

        const [bindOverlayScrollListener, unbindOverlayScrollListener] = useOverlayScrollListener({
            target: currentTargetRef.current,
            listener: (event) => {
                hide(event);
            },
            when: visibleState
        });

        const isTargetContentEmpty = (target) => {
            return !(props.content || getTargetOption(target, 'tooltip'));
        };

        const isContentEmpty = (target) => {
            return !(props.content || getTargetOption(target, 'tooltip') || props.children);
        };

        const isMouseTrack = (target) => {
            return getTargetOption(target, 'mousetrack') || props.mouseTrack;
        };

        const isDisabled = (target) => {
            return getTargetOption(target, 'disabled') === 'true' || hasTargetOption(target, 'disabled') || props.disabled;
        };

        const isShowOnDisabled = (target) => {
            return getTargetOption(target, 'showondisabled') || props.showOnDisabled;
        };

        const isAutoHide = () => {
            return getTargetOption(currentTargetRef.current, 'autohide') || props.autoHide;
        };

        const getTargetOption = (target, option) => {
            return hasTargetOption(target, `data-pr-${option}`) ? target.getAttribute(`data-pr-${option}`) : null;
        };

        const hasTargetOption = (target, option) => {
            return target && target.hasAttribute(option);
        };

        const getEvents = (target) => {
            let showEvents = [getTargetOption(target, 'showevent') || props.showEvent];
            let hideEvents = [getTargetOption(target, 'hideevent') || props.hideEvent];

            if (isMouseTrack(target)) {
                showEvents = ['mousemove'];
                hideEvents = ['mouseleave'];
            } else {
                const event = getTargetOption(target, 'event') || props.event;

                if (event === 'focus') {
                    showEvents = ['focus'];
                    hideEvents = ['blur'];
                }

                if (event === 'both') {
                    showEvents = ['focus', 'mouseenter'];
                    hideEvents = ['blur', 'mouseleave'];
                }
            }

            return { showEvents, hideEvents };
        };

        const getPosition = (target) => {
            return getTargetOption(target, 'position') || positionState;
        };

        const getMouseTrackPosition = (target) => {
            const top = getTargetOption(target, 'mousetracktop') || props.mouseTrackTop;
            const left = getTargetOption(target, 'mousetrackleft') || props.mouseTrackLeft;

            return { top, left };
        };

        const updateText = (target, callback) => {
            if (textRef.current) {
                const content = getTargetOption(target, 'tooltip') || props.content;

                if (content) {
                    textRef.current.innerHTML = ''; // remove children
                    textRef.current.appendChild(document.createTextNode(content));
                    callback();
                } else if (props.children) {
                    callback();
                }
            }
        };

        const updateTooltipState = (position) => {
            updateText(currentTargetRef.current, () => {
                const { pageX: x, pageY: y } = currentMouseEvent.current;

                if (props.autoZIndex && !ZIndexUtils.get(elementRef.current)) {
                    ZIndexUtils.set('tooltip', elementRef.current, PrimeReact.autoZIndex, props.baseZIndex || PrimeReact.zIndex['tooltip']);
                }

                elementRef.current.style.left = '';
                elementRef.current.style.top = '';

                // GitHub #2695 disable pointer events when autohiding
                if (isAutoHide()) {
                    elementRef.current.style.pointerEvents = 'none';
                }

                if ((isMouseTrack(currentTargetRef.current) || position == 'mouse') && !containerSize.current) {
                    containerSize.current = {
                        width: DomHandler.getOuterWidth(elementRef.current),
                        height: DomHandler.getOuterHeight(elementRef.current)
                    };
                }

                align(currentTargetRef.current, { x, y }, position);
            });
        };

        const show = (e) => {
            currentTargetRef.current = e.currentTarget;
            const disabled = isDisabled(currentTargetRef.current);
            const empty = isContentEmpty(isShowOnDisabled(currentTargetRef.current) && disabled ? currentTargetRef.current.firstChild : currentTargetRef.current);

            if (empty || disabled) {
                return;
            }

            currentMouseEvent.current = e;

            if (visibleState) {
                applyDelay('updateDelay', updateTooltipState);
            } else {
                // #2653 give the callback a chance to return false and not continue with display
                const success = sendCallback(props.onBeforeShow, { originalEvent: e, target: currentTargetRef.current });

                if (success) {
                    applyDelay('showDelay', () => {
                        setVisibleState(true);
                        sendCallback(props.onShow, { originalEvent: e, target: currentTargetRef.current });
                    });
                }
            }
        };

        const hide = (e) => {
            clearTimeouts();

            if (visibleState) {
                const success = sendCallback(props.onBeforeHide, { originalEvent: e, target: currentTargetRef.current });

                if (success) {
                    applyDelay('hideDelay', () => {
                        if (!isAutoHide() && allowHide.current === false) {
                            return;
                        }

                        ZIndexUtils.clear(elementRef.current);
                        DomHandler.removeClass(elementRef.current, 'p-tooltip-active');

                        setVisibleState(false);
                        sendCallback(props.onHide, { originalEvent: e, target: currentTargetRef.current });
                    });
                }
            }
        };

        const align = (target, coordinate, position) => {
            let left = 0,
                top = 0,
                currentPosition = position || positionState;

            if ((isMouseTrack(target) || currentPosition == 'mouse') && coordinate) {
                const _containerSize = {
                    width: DomHandler.getOuterWidth(elementRef.current),
                    height: DomHandler.getOuterHeight(elementRef.current)
                };

                left = coordinate.x;
                top = coordinate.y;

                let { top: mouseTrackTop, left: mouseTrackLeft } = getMouseTrackPosition(target);

                switch (currentPosition) {
                    case 'left':
                        left -= _containerSize.width + mouseTrackLeft;
                        top -= _containerSize.height / 2 - mouseTrackTop;
                        break;
                    case 'right':
                    case 'mouse':
                        left += mouseTrackLeft;
                        top -= _containerSize.height / 2 - mouseTrackTop;
                        break;
                    case 'top':
                        left -= _containerSize.width / 2 - mouseTrackLeft;
                        top -= _containerSize.height + mouseTrackTop;
                        break;
                    case 'bottom':
                        left -= _containerSize.width / 2 - mouseTrackLeft;
                        top += mouseTrackTop;
                        break;
                    default:
                        break;
                }

                if (left <= 0 || containerSize.current.width > _containerSize.width) {
                    elementRef.current.style.left = '0px';
                    elementRef.current.style.right = window.innerWidth - _containerSize.width - left + 'px';
                } else {
                    elementRef.current.style.right = '';
                    elementRef.current.style.left = left + 'px';
                }

                elementRef.current.style.top = top + 'px';
                DomHandler.addClass(elementRef.current, 'p-tooltip-active');
            } else {
                const pos = DomHandler.findCollisionPosition(currentPosition);
                const my = getTargetOption(target, 'my') || props.my || pos.my;
                const at = getTargetOption(target, 'at') || props.at || pos.at;

                elementRef.current.style.padding = '0px';

                DomHandler.flipfitCollision(elementRef.current, target, my, at, (calculatedPosition) => {
                    const { x: atX, y: atY } = calculatedPosition.at;
                    const { x: myX } = calculatedPosition.my;
                    const newPosition = props.at ? (atX !== 'center' && atX !== myX ? atX : atY) : calculatedPosition.at[`${pos.axis}`];

                    elementRef.current.style.padding = '';

                    setPositionState(newPosition);
                    updateContainerPosition(newPosition);
                    DomHandler.addClass(elementRef.current, 'p-tooltip-active');
                });
            }
        };

        const updateContainerPosition = (position) => {
            if (elementRef.current) {
                const style = getComputedStyle(elementRef.current);

                if (position === 'left') elementRef.current.style.left = parseFloat(style.left) - parseFloat(style.paddingLeft) * 2 + 'px';
                else if (position === 'top') elementRef.current.style.top = parseFloat(style.top) - parseFloat(style.paddingTop) * 2 + 'px';
            }
        };

        const onMouseEnter = () => {
            if (!isAutoHide()) {
                allowHide.current = false;
            }
        };

        const onMouseLeave = (e) => {
            if (!isAutoHide()) {
                allowHide.current = true;
                hide(e);
            }
        };

        const bindTargetEvent = (target) => {
            if (target) {
                const { showEvents, hideEvents } = getEvents(target);
                const currentTarget = getTarget(target);

                showEvents.forEach((event) => currentTarget.addEventListener(event, show));
                hideEvents.forEach((event) => currentTarget.addEventListener(event, hide));
            }
        };

        const unbindTargetEvent = (target) => {
            if (target) {
                const { showEvents, hideEvents } = getEvents(target);
                const currentTarget = getTarget(target);

                showEvents.forEach((event) => currentTarget.removeEventListener(event, show));
                hideEvents.forEach((event) => currentTarget.removeEventListener(event, hide));
            }
        };

        const applyDelay = (delayProp, callback) => {
            clearTimeouts();

            const delay = getTargetOption(currentTargetRef.current, delayProp.toLowerCase()) || props[delayProp];

            !!delay ? (timeouts.current[`${delayProp}`] = setTimeout(() => callback(), delay)) : callback();
        };

        const sendCallback = (callback, ...params) => {
            if (callback) {
                let result = callback(...params);

                if (result === undefined) {
                    result = true;
                }

                return result;
            }

            return true;
        };

        const clearTimeouts = () => {
            Object.values(timeouts.current).forEach((t) => clearTimeout(t));
        };

        const getTarget = (target) => {
            if (target) {
                if (isShowOnDisabled(target)) {
                    if (!target.hasWrapper) {
                        const wrapper = document.createElement('span');

                        target.parentNode.insertBefore(wrapper, target);
                        wrapper.appendChild(target);
                        target.hasWrapper = true;

                        return wrapper;
                    } else {
                        return target.parentElement;
                    }
                } else if (target.hasWrapper) {
                    target.parentElement.replaceWith(...target.parentElement.childNodes);
                    delete target.hasWrapper;
                }

                return target;
            }

            return null;
        };

        const updateTargetEvents = (target) => {
            unloadTargetEvents(target);
            loadTargetEvents(target);
        };

        const loadTargetEvents = (target) => {
            setTargetEventOperations(target || props.target, bindTargetEvent);
        };

        const unloadTargetEvents = (target) => {
            setTargetEventOperations(target || props.target, unbindTargetEvent);
        };

        const setTargetEventOperations = (target, operation) => {
            target = ObjectUtils.getRefElement(target);

            if (target) {
                if (DomHandler.isElement(target)) {
                    operation(target);
                } else {
                    const setEvent = (target) => {
                        let element = DomHandler.find(document, target);

                        element.forEach((el) => {
                            operation(el);
                        });
                    };

                    if (target instanceof Array) {
                        target.forEach((t) => {
                            setEvent(t);
                        });
                    } else {
                        setEvent(target);
                    }
                }
            }
        };

        useMountEffect(() => {
            loadTargetEvents();

            if (visibleState && currentTargetRef.current && isDisabled(currentTargetRef.current)) {
                hide();
            }
        });

        useUpdateEffect(() => {
            loadTargetEvents();

            return () => {
                unloadTargetEvents();
            };
        }, [show, hide, props.target]);

        useUpdateEffect(() => {
            if (visibleState) {
                const position = getPosition(currentTargetRef.current);
                const classname = getTargetOption(currentTargetRef.current, 'classname');

                setPositionState(position);
                setClassNameState(classname);
                updateTooltipState(position);

                bindWindowResizeListener();
                bindOverlayScrollListener();
            } else {
                setPositionState(props.position);
                setClassNameState('');
                currentTargetRef.current = null;
                containerSize.current = null;
                allowHide.current = true;
            }

            return () => {
                unbindWindowResizeListener();
                unbindOverlayScrollListener();
            };
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

        React.useImperativeHandle(ref, () => ({
            props,
            updateTargetEvents,
            loadTargetEvents,
            unloadTargetEvents,
            show,
            hide,
            getElement: () => elementRef.current,
            getTarget: () => currentTargetRef.current
        }));

        const createElement = () => {
            const otherProps = TooltipBase.getOtherProps(props);
            const tooltipClassName = classNames(
                'p-tooltip p-component',
                {
                    [`p-tooltip-${positionState}`]: true
                },
                props.className,
                classNameState
            );
            const empty = isTargetContentEmpty(currentTargetRef.current);

            return (
                <div id={props.id} ref={elementRef} className={tooltipClassName} style={props.style} role="tooltip" aria-hidden={visibleState} {...otherProps} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <div className="p-tooltip-arrow"></div>
                    <div ref={textRef} className="p-tooltip-text">
                        {empty && props.children}
                    </div>
                </div>
            );
        };

        if (visibleState) {
            const element = createElement();

            return <Portal element={element} appendTo={props.appendTo} visible />;
        }

        return null;
    })
);

Tooltip.displayName = 'Tooltip';
