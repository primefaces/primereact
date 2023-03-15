import * as React from 'react';
import PrimeReact from '../api/Api';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useOverlayListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { InputTextarea } from '../inputtextarea/InputTextarea';
import { OverlayService } from '../overlayservice/OverlayService';
import { Portal } from '../portal/Portal';
import { Ripple } from '../ripple/Ripple';
import { classNames, DomHandler, ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { MentionBase } from './MentionBase';

export const Mention = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = MentionBase.getProps(inProps);

        const [overlayVisibleState, setOverlayVisibleState] = React.useState(false);
        const [focusedState, setFocusedState] = React.useState(false);
        const [searchingState, setSearchingState] = React.useState(false);
        const [triggerState, setTriggerState] = React.useState(null);
        const elementRef = React.useRef(null);
        const overlayRef = React.useRef(null);
        const inputRef = React.useRef(props.inputRef);
        const listRef = React.useRef(null);
        const timeout = React.useRef(null);

        const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
            target: elementRef,
            overlay: overlayRef,
            listener: (event, { valid }) => {
                valid && hide();
            },
            when: overlayVisibleState
        });

        const show = () => {
            setOverlayVisibleState(true);
        };

        const hide = () => {
            setOverlayVisibleState(false);
            setSearchingState(false);
            setTriggerState(null);
        };

        const onOverlayEnter = () => {
            ZIndexUtils.set('overlay', overlayRef.current, PrimeReact.autoZIndex, PrimeReact.zIndex['overlay']);
            alignOverlay();
        };

        const onOverlayEntering = () => {
            if (props.autoHighlight && props.suggestions && props.suggestions.length) {
                DomHandler.addClass(listRef.current.firstChild, 'p-highlight');
            }
        };

        const onOverlayEntered = () => {
            bindOverlayListener();
            props.onShow && props.onShow();
        };

        const onOverlayExit = () => {
            unbindOverlayListener();
        };

        const onOverlayExited = () => {
            ZIndexUtils.clear(overlayRef.current);

            props.onHide && props.onHide();
        };

        const alignOverlay = () => {
            const { key, index } = triggerState;
            const value = inputRef.current.value;
            const position = DomHandler.getCursorOffset(inputRef.current, value.substring(0, index - 1), value.substring(index), key);

            overlayRef.current.style.transformOrigin = 'top';
            overlayRef.current.style.left = `calc(${position.left}px + 1rem)`;
            overlayRef.current.style.top = `calc(${position.top}px + 1.2rem)`;
        };

        const onPanelClick = (event) => {
            OverlayService.emit('overlay-click', {
                originalEvent: event,
                target: elementRef.current
            });
        };

        const getTrigger = (value, key, start) => {
            if (!triggerState) {
                const triggerKey = Array.isArray(props.trigger) ? props.trigger.find((t) => t === key) : props.trigger === key ? props.trigger : null;

                if (triggerKey) {
                    return {
                        key: triggerKey,
                        index: start
                    };
                }

                const latestSpaceIndex = value.substring(0, start).lastIndexOf(' ');
                const latestTrigger = getLatestTrigger(value, start);

                if (latestTrigger.index > latestSpaceIndex) {
                    return latestTrigger;
                }
            }

            return triggerState;
        };

        const getLatestTrigger = (value, start) => {
            if (Array.isArray(props.trigger)) {
                let latestTrigger = {};

                props.trigger.forEach((t) => {
                    const index = value.substring(0, start).lastIndexOf(t);

                    if (index !== -1 && (index > latestTrigger.index || !latestTrigger.index)) {
                        latestTrigger = {
                            key: t,
                            index: index !== -1 ? index + 1 : -1
                        };
                    }
                });

                return latestTrigger;
            }

            const index = value.substring(0, start).lastIndexOf(props.trigger);

            return {
                key: props.trigger,
                index: index !== -1 ? index + 1 : -1
            };
        };

        const onSearch = (event) => {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }

            const { value, selectionStart } = event.target;
            const key = value.substring(selectionStart - 1, selectionStart);

            if (key === ' ') {
                hide();

                return;
            }

            const currentTrigger = getTrigger(value, key, selectionStart);

            if (currentTrigger && currentTrigger.index > -1) {
                const query = value.substring(currentTrigger.index, selectionStart);

                timeout.current = setTimeout(() => {
                    search(event, query, currentTrigger);
                }, props.delay);
            }
        };

        const search = (event, query, trigger) => {
            if (props.onSearch) {
                setSearchingState(true);
                setTriggerState(trigger);
                props.onSearch({
                    originalEvent: event,
                    trigger: trigger.key,
                    query
                });
            }
        };

        const selectItem = (event, suggestion) => {
            const value = inputRef.current.value;
            const selectionStart = event.target.selectionStart;
            const spaceIndex = value.indexOf(' ', triggerState.index);
            const currentText = value.substring(triggerState.index, spaceIndex > -1 ? spaceIndex : selectionStart);
            const selectedText = formatValue(suggestion).replace(/\s+/g, '');

            if (currentText.trim() !== selectedText) {
                let diff = 0;

                while (diff < selectedText.length) {
                    const s_c = selectedText.charAt(diff);
                    const c_c = currentText.charAt(diff);

                    if (s_c === c_c || c_c === ' ') diff++;
                    else break;
                }

                const prevText = value.substring(0, triggerState.index);
                const nextText = value.substring(triggerState.index + diff);

                inputRef.current.value = `${prevText}${selectedText} ${nextText}`;
                props.onChange && props.onChange(event);
            }

            const cursorStart = triggerState.index + selectedText.length + 1;

            inputRef.current.setSelectionRange(cursorStart, cursorStart);

            hide();

            props.onSelect && props.onSelect({ originalEvent: event, suggestion });
        };

        const formatValue = (value) => {
            if (value) {
                const field = Array.isArray(props.field) ? props.field[props.trigger.findIndex((f) => f === triggerState.key)] : props.field;

                return field ? ObjectUtils.resolveFieldData(value, field) : value;
            }

            return '';
        };

        const onItemClick = (event, suggestion) => {
            DomHandler.focus(inputRef.current);
            selectItem(event, suggestion);
        };

        const onFocus = (event) => {
            setFocusedState(true);
            props.onFocus && props.onFocus(event);
        };

        const onBlur = (event) => {
            setFocusedState(false);
            props.onBlur && props.onBlur(event);
        };

        const onInput = (event) => {
            props.onInput && props.onInput(event);

            if (event.target.value.length > 0) DomHandler.addClass(elementRef.current, 'p-inputwrapper-filled');
            else DomHandler.removeClass(elementRef.current, 'p-inputwrapper-filled');
        };

        const onKeyUp = (event) => {
            if (event.which === 37 || event.which === 39) {
                onSearch(event);
            }
        };

        const onChange = (event) => {
            props.onChange && props.onChange(event);

            onSearch(event);
        };

        const onKeyDown = (event) => {
            if (overlayVisibleState) {
                let highlightItem = DomHandler.findSingle(overlayRef.current, 'li.p-highlight');

                switch (event.which) {
                    //down
                    case 40:
                        if (highlightItem) {
                            let nextElement = highlightItem.nextElementSibling;

                            if (nextElement) {
                                DomHandler.addClass(nextElement, 'p-highlight');
                                DomHandler.removeClass(highlightItem, 'p-highlight');
                                DomHandler.scrollInView(overlayRef.current, nextElement);
                            }
                        } else {
                            highlightItem = DomHandler.findSingle(overlayRef.current, 'li');

                            if (highlightItem) {
                                DomHandler.addClass(highlightItem, 'p-highlight');
                            }
                        }

                        event.preventDefault();
                        break;

                    //up
                    case 38:
                        if (highlightItem) {
                            let previousElement = highlightItem.previousElementSibling;

                            if (previousElement) {
                                DomHandler.addClass(previousElement, 'p-highlight');
                                DomHandler.removeClass(highlightItem, 'p-highlight');
                                DomHandler.scrollInView(overlayRef.current, previousElement);
                            }
                        }

                        event.preventDefault();
                        break;

                    //backspace
                    case 8:
                        const { value, selectionStart } = event.target;
                        const key = value.substring(selectionStart - 1, selectionStart);

                        if (key === triggerState.key) {
                            hide();
                        }

                        break;

                    //enter
                    case 13:
                        if (highlightItem) {
                            selectItem(event, props.suggestions[DomHandler.index(highlightItem)]);
                        }

                        event.preventDefault();
                        break;

                    //escape
                    case 27:
                        hide();
                        event.preventDefault();
                        break;

                    default:
                        break;
                }
            }
        };

        const currentValue = inputRef.current && inputRef.current.value;
        const isFilled = React.useMemo(() => ObjectUtils.isNotEmpty(props.value) || ObjectUtils.isNotEmpty(props.defaultValue) || ObjectUtils.isNotEmpty(currentValue), [props.value, props.defaultValue, currentValue]);

        React.useImperativeHandle(ref, () => ({
            props,
            show,
            hide,
            focus: () => DomHandler.focus(inputRef.current),
            getElement: () => elementRef.current,
            getOverlay: () => overlayRef.current,
            getInput: () => inputRef.current
        }));

        React.useEffect(() => {
            ObjectUtils.combinedRefs(inputRef, props.inputRef);
        }, [inputRef, props.inputRef]);

        useUpdateEffect(() => {
            if (searchingState) {
                props.suggestions && props.suggestions.length ? show() : hide();
                overlayVisibleState && alignOverlay();
                setSearchingState(false);
            }
        }, [props.suggestions]);

        useUpdateEffect(() => {
            if (!isFilled && DomHandler.hasClass(elementRef.current, 'p-inputwrapper-filled')) {
                DomHandler.removeClass(elementRef.current, 'p-inputwrapper-filled');
            }
        }, [isFilled]);

        useUnmountEffect(() => {
            ZIndexUtils.clear(overlayRef.current);
        });

        const createItem = (suggestion, index) => {
            const key = index + '_item';
            const content = props.itemTemplate ? ObjectUtils.getJSXElement(props.itemTemplate, suggestion, { trigger: triggerState ? triggerState.key : '', index }) : formatValue(suggestion);

            return (
                <li key={key} className="p-mention-item" onClick={(e) => onItemClick(e, suggestion)}>
                    {content}
                    <Ripple />
                </li>
            );
        };

        const createList = () => {
            if (props.suggestions) {
                const items = props.suggestions.map(createItem);

                return (
                    <ul ref={listRef} className="p-mention-items">
                        {items}
                    </ul>
                );
            }

            return null;
        };

        const createPanel = () => {
            const panelClassName = classNames('p-mention-panel p-component', props.panelClassName);
            const panelStyle = { maxHeight: props.scrollHeight, ...props.panelStyle };
            const header = ObjectUtils.getJSXElement(props.headerTemplate, props);
            const footer = ObjectUtils.getJSXElement(props.footerTemplate, props);
            const list = createList();

            const panel = (
                <CSSTransition
                    nodeRef={overlayRef}
                    classNames="p-connected-overlay"
                    in={overlayVisibleState}
                    timeout={{ enter: 120, exit: 100 }}
                    options={props.transitionOptions}
                    unmountOnExit
                    onEnter={onOverlayEnter}
                    onEntering={onOverlayEntering}
                    onEntered={onOverlayEntered}
                    onExit={onOverlayExit}
                    onExited={onOverlayExited}
                >
                    <div ref={overlayRef} className={panelClassName} style={panelStyle} onClick={onPanelClick}>
                        {header}
                        {list}
                        {footer}
                    </div>
                </CSSTransition>
            );

            return <Portal element={panel} appendTo="self" />;
        };

        const className = classNames(
            'p-mention p-component p-inputwrapper',
            {
                'p-inputwrapper-filled': isFilled,
                'p-inputwrapper-focus': focusedState
            },
            props.className
        );
        const inputClassName = classNames('p-mention-input', props.inputClassName);
        const inputProps = MentionBase.getOtherProps(props);
        const panel = createPanel();

        return (
            <div ref={elementRef} id={props.id} className={className} style={props.style}>
                <InputTextarea ref={inputRef} id={props.inputId} className={inputClassName} style={props.inputStyle} {...inputProps} onFocus={onFocus} onBlur={onBlur} onKeyDown={onKeyDown} onInput={onInput} onKeyUp={onKeyUp} onChange={onChange} />
                {panel}
            </div>
        );
    })
);

Mention.displayName = 'Mention';
