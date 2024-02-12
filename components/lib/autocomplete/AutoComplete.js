import * as React from 'react';
import PrimeReact, { PrimeReactContext, localeOption } from '../api/Api';
import { Button } from '../button/Button';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect, useOverlayListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { SpinnerIcon } from '../icons/spinner';
import { TimesCircleIcon } from '../icons/timescircle';
import { InputText } from '../inputtext/InputText';
import { OverlayService } from '../overlayservice/OverlayService';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, ZIndexUtils, classNames } from '../utils/Utils';
import { AutoCompleteBase } from './AutoCompleteBase';
import { AutoCompletePanel } from './AutoCompletePanel';

export const AutoComplete = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = AutoCompleteBase.getProps(inProps, context);
        const [idState, setIdState] = React.useState(props.id);
        const [searchingState, setSearchingState] = React.useState(false);
        const [focusedState, setFocusedState] = React.useState(false);
        const [overlayVisibleState, setOverlayVisibleState] = React.useState(false);

        const metaData = {
            props,
            state: {
                id: idState,
                searching: searchingState,
                focused: focusedState,
                overlayVisible: overlayVisibleState
            }
        };

        const { ptm, cx, sx, isUnstyled } = AutoCompleteBase.setMetaData(metaData);

        useHandleStyle(AutoCompleteBase.css.styles, isUnstyled, { name: 'autocomplete' });
        const elementRef = React.useRef(null);
        const overlayRef = React.useRef(null);
        const inputRef = React.useRef(props.inputRef);
        const multiContainerRef = React.useRef(null);
        const virtualScrollerRef = React.useRef(null);
        const timeout = React.useRef(null);
        const selectedItem = React.useRef(null);
        const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
            target: elementRef,
            overlay: overlayRef,
            listener: (event, { type, valid }) => {
                if (valid) {
                    type === 'outside' ? !isInputClicked(event) && hide() : hide();
                }
            },
            when: overlayVisibleState
        });

        const isInputClicked = (event) => {
            return props.multiple ? event.target === multiContainerRef.current || multiContainerRef.current.contains(event.target) : event.target === inputRef.current;
        };

        const onInputChange = (event) => {
            //Cancel the search request if user types within the timeout
            if (timeout.current) {
                clearTimeout(timeout.current);
            }

            const query = event.target.value;

            if (!props.multiple) {
                updateModel(event, query);
            }

            if (ObjectUtils.isEmpty(query)) {
                hide();
                props.onClear && props.onClear(event);
            } else {
                if (query.length >= props.minLength) {
                    timeout.current = setTimeout(() => {
                        search(event, query, 'input');
                    }, props.delay);
                } else {
                    hide();
                }
            }
        };

        const search = (event, query, source) => {
            //allow empty string but not undefined or null
            if (query === undefined || query === null) {
                return;
            }

            //do not search blank values on input change
            if (source === 'input' && query.trim().length === 0) {
                return;
            }

            if (props.completeMethod) {
                setSearchingState(true);
                props.completeMethod({
                    originalEvent: event,
                    query
                });
            }
        };

        const selectItem = (event, option, preventInputFocus) => {
            if (props.multiple) {
                inputRef.current.value = '';

                // allows empty value/selectionlimit and within sectionlimit
                if (!isSelected(option) && isAllowMoreValues()) {
                    const newValue = props.value ? [...props.value, option] : [option];

                    updateModel(event, newValue);
                }
            } else {
                updateInputField(option);
                updateModel(event, option);
            }

            if (props.onSelect) {
                props.onSelect({
                    originalEvent: event,
                    value: option
                });
            }

            if (!preventInputFocus) {
                DomHandler.focus(inputRef.current);
                hide();
            }
        };

        const updateModel = (event, value) => {
            // #2176 only call change if value actually changed
            if (selectedItem && ObjectUtils.deepEquals(selectedItem.current, value)) {
                return;
            }

            if (props.onChange) {
                props.onChange({
                    originalEvent: event,
                    value,
                    stopPropagation: () => {
                        event.stopPropagation();
                    },
                    preventDefault: () => {
                        event.preventDefault();
                    },
                    target: {
                        name: props.name,
                        id: idState,
                        value
                    }
                });
            }

            selectedItem.current = ObjectUtils.isNotEmpty(value) ? value : null;
        };

        const formatValue = (value) => {
            if (ObjectUtils.isNotEmpty(value)) {
                if (typeof value === 'string') {
                    return value;
                } else if (props.selectedItemTemplate) {
                    const resolvedFieldData = ObjectUtils.getJSXElement(props.selectedItemTemplate, value);

                    return resolvedFieldData ? resolvedFieldData : value;
                } else if (props.field) {
                    const resolvedFieldData = ObjectUtils.resolveFieldData(value, props.field);

                    return resolvedFieldData !== null && resolvedFieldData !== undefined ? resolvedFieldData : value;
                } else {
                    return value;
                }
            }

            return '';
        };

        const updateInputField = (value) => {
            inputRef.current.value = formatValue(value);
        };

        const show = () => {
            setOverlayVisibleState(true);
        };

        const hide = () => {
            setOverlayVisibleState(false);
            setSearchingState(false);
        };

        const onOverlayEnter = () => {
            ZIndexUtils.set('overlay', overlayRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex['overlay']) || PrimeReact.zIndex['overlay']);
            DomHandler.addStyles(overlayRef.current, { position: 'absolute', top: '0', left: '0' });
            alignOverlay();
        };

        const onOverlayEntering = () => {
            if (props.autoHighlight && props.suggestions && props.suggestions.length) {
                const element = getScrollableElement().firstChild.firstChild;

                if (element) {
                    !isUnstyled() && DomHandler.addClass(element, 'p-highlight');
                    element.setAttribute('data-p-highlight', true);
                }
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
            const target = props.multiple ? multiContainerRef.current : inputRef.current;

            DomHandler.alignOverlay(overlayRef.current, target, props.appendTo || (context && context.appendTo) || PrimeReact.appendTo);
        };

        const onPanelClick = (event) => {
            OverlayService.emit('overlay-click', {
                originalEvent: event,
                target: elementRef.current
            });
        };

        const onDropdownClick = (event) => {
            if (props.dropdownAutoFocus) {
                DomHandler.focus(inputRef.current, props.dropdownAutoFocus);
            }

            if (props.dropdownMode === 'blank') search(event, '', 'dropdown');
            else if (props.dropdownMode === 'current') search(event, inputRef.current.value, 'dropdown');

            if (props.onDropdownClick) {
                props.onDropdownClick({
                    originalEvent: event,
                    query: inputRef.current.value
                });
            }
        };

        const removeItem = (event, index) => {
            const removedValue = props.value[index];
            const newValue = props.value.filter((_, i) => index !== i);

            updateModel(event, newValue);

            if (props.onUnselect) {
                props.onUnselect({
                    originalEvent: event,
                    value: removedValue
                });
            }
        };

        const onInputKeyDown = (event) => {
            if (overlayVisibleState) {
                let highlightItem = DomHandler.findSingle(overlayRef.current, 'li[data-p-highlight="true"]');

                switch (event.which) {
                    //down
                    case 40:
                        if (highlightItem) {
                            let nextElement = findNextItem(highlightItem);

                            if (nextElement) {
                                !isUnstyled() && DomHandler.addClass(nextElement, 'p-highlight');
                                nextElement.setAttribute('data-p-highlight', true);
                                !isUnstyled() && DomHandler.removeClass(highlightItem, 'p-highlight');
                                highlightItem.setAttribute('data-p-highlight', false);
                                DomHandler.scrollInView(getScrollableElement(), nextElement);
                            }
                        } else {
                            highlightItem = DomHandler.findSingle(overlayRef.current, 'li');

                            if (DomHandler.getAttribute(highlightItem, 'data-pc-section') === 'itemgroup') {
                                highlightItem = findNextItem(highlightItem);
                            }

                            if (highlightItem) {
                                !isUnstyled() && DomHandler.addClass(highlightItem, 'p-highlight');
                                highlightItem.setAttribute('data-p-highlight', true);
                            }
                        }

                        event.preventDefault();
                        break;

                    //up
                    case 38:
                        if (highlightItem) {
                            let previousElement = findPrevItem(highlightItem);

                            if (previousElement) {
                                !isUnstyled() && DomHandler.addClass(previousElement, 'p-highlight');
                                previousElement.setAttribute('data-p-highlight', true);
                                !isUnstyled() && DomHandler.removeClass(highlightItem, 'p-highlight');
                                highlightItem.setAttribute('data-p-highlight', false);
                                DomHandler.scrollInView(getScrollableElement(), previousElement);
                            }
                        }

                        event.preventDefault();
                        break;

                    //enter
                    case 13:
                        if (highlightItem) {
                            selectHighlightItem(event, highlightItem);
                            hide();
                            event.preventDefault();
                        }

                        break;

                    //escape
                    case 27:
                        hide();
                        event.preventDefault();
                        break;

                    //tab
                    case 9:
                        if (highlightItem) {
                            selectHighlightItem(event, highlightItem);
                        }

                        hide();
                        break;

                    default:
                        break;
                }
            }

            if (props.multiple) {
                switch (event.which) {
                    //backspace
                    case 8:
                        if (props.value && props.value.length && !inputRef.current.value) {
                            const removedValue = props.value[props.value.length - 1];
                            const newValue = props.value.slice(0, -1);

                            updateModel(event, newValue);

                            if (props.onUnselect) {
                                props.onUnselect({
                                    originalEvent: event,
                                    value: removedValue
                                });
                            }
                        }

                        break;

                    default:
                        break;
                }
            }
        };

        const selectHighlightItem = (event, item) => {
            if (props.optionGroupLabel) {
                const optionGroup = props.suggestions[item.dataset.group];

                selectItem(event, getOptionGroupChildren(optionGroup)[item.dataset.index]);
            } else {
                selectItem(event, props.suggestions[item.getAttribute('index')]);
            }
        };

        const findNextItem = (item) => {
            const nextItem = item.nextElementSibling;

            return nextItem ? (DomHandler.getAttribute(nextItem, 'data-pc-section') === 'itemgroup' ? findNextItem(nextItem) : nextItem) : null;
        };

        const findPrevItem = (item) => {
            let prevItem = item.previousElementSibling;

            return prevItem ? (DomHandler.getAttribute(prevItem, 'data-pc-section') === 'itemgroup' ? findPrevItem(prevItem) : prevItem) : null;
        };

        const onInputFocus = (event) => {
            setFocusedState(true);
            props.onFocus && props.onFocus(event);
        };

        const forceItemSelection = (event) => {
            if (props.multiple) {
                inputRef.current.value = '';

                return;
            }

            const inputValue = ObjectUtils.trim(event.target.value);
            const item = (props.suggestions || []).find((it) => {
                const value = props.field ? ObjectUtils.resolveFieldData(it, props.field) : it;

                return value && inputValue === ObjectUtils.trim(value);
            });

            if (item) {
                selectItem(event, item, true);
            } else {
                inputRef.current.value = '';
                updateModel(event, null);

                props.onClear && props.onClear(event);
            }
        };

        const onInputBlur = (event) => {
            setFocusedState(false);

            if (props.forceSelection) {
                forceItemSelection(event);
            }

            props.onBlur && props.onBlur(event);
        };

        const onMultiContainerClick = (event) => {
            DomHandler.focus(inputRef.current);

            props.onClick && props.onClick(event);
        };

        const onMultiInputFocus = (event) => {
            onInputFocus(event);
            !isUnstyled() && DomHandler.addClass(multiContainerRef.current, 'p-focus');
            multiContainerRef.current.setAttribute('data-p-focus', true);
        };

        const onMultiInputBlur = (event) => {
            onInputBlur(event);
            !isUnstyled() && DomHandler.removeClass(multiContainerRef.current, 'p-focus');
            multiContainerRef.current.setAttribute('data-p-focus', false);
        };

        const isSelected = (val) => {
            return props.value ? props.value.some((v) => ObjectUtils.equals(v, val)) : false;
        };

        const findOptionIndex = (option) => {
            return props.suggestions ? props.suggestions.findIndex((s) => ObjectUtils.equals(s, option)) : -1;
        };

        const getScrollableElement = () => {
            return overlayRef.current.firstChild;
        };

        const getOptionGroupLabel = (optionGroup) => {
            return props.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel) : optionGroup;
        };

        const getOptionGroupChildren = (optionGroup) => {
            return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupChildren);
        };

        const isAllowMoreValues = () => {
            return !props.value || !props.selectionLimit || props.value.length < props.selectionLimit;
        };

        React.useEffect(() => {
            ObjectUtils.combinedRefs(inputRef, props.inputRef);
        }, [inputRef, props.inputRef]);

        useMountEffect(() => {
            if (!idState) {
                setIdState(UniqueComponentId());
            }

            if (props.autoFocus) {
                DomHandler.focus(inputRef.current, props.autoFocus);
            }

            alignOverlay();
        });

        useUpdateEffect(() => {
            if (searchingState) {
                ObjectUtils.isNotEmpty(props.suggestions) || props.showEmptyMessage ? show() : hide();
                setSearchingState(false);
            }
        }, [props.suggestions]);

        useUpdateEffect(() => {
            if (inputRef.current && !props.multiple) {
                updateInputField(props.value);
            }

            if (overlayVisibleState) {
                alignOverlay();
            }
        });

        useUnmountEffect(() => {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }

            ZIndexUtils.clear(overlayRef.current);
        });

        React.useImperativeHandle(ref, () => ({
            props,
            search,
            show,
            hide,
            focus: () => DomHandler.focus(inputRef.current),
            getElement: () => elementRef.current,
            getOverlay: () => overlayRef.current,
            getInput: () => inputRef.current,
            getVirtualScroller: () => virtualScrollerRef.current
        }));

        const createSimpleAutoComplete = () => {
            const value = formatValue(props.value);
            const ariaControls = overlayVisibleState ? idState + '_list' : null;

            return (
                <InputText
                    ref={inputRef}
                    id={props.inputId}
                    type={props.type}
                    name={props.name}
                    defaultValue={value}
                    role="combobox"
                    aria-autocomplete="list"
                    aria-controls={ariaControls}
                    aria-haspopup="listbox"
                    aria-expanded={overlayVisibleState}
                    className={classNames(props.inputClassName, cx('input'))}
                    style={props.inputStyle}
                    autoComplete="off"
                    readOnly={props.readOnly}
                    required={props.required}
                    disabled={props.disabled}
                    placeholder={props.placeholder}
                    size={props.size}
                    maxLength={props.maxLength}
                    tabIndex={props.tabIndex}
                    onBlur={onInputBlur}
                    onFocus={onInputFocus}
                    onChange={onInputChange}
                    onMouseDown={props.onMouseDown}
                    onKeyUp={props.onKeyUp}
                    onKeyDown={onInputKeyDown}
                    onKeyPress={props.onKeyPress}
                    onContextMenu={props.onContextMenu}
                    onClick={props.onClick}
                    onDoubleClick={props.onDblClick}
                    pt={ptm('input')}
                    {...ariaProps}
                    __parentMetadata={{ parent: metaData }}
                />
            );
        };

        const createChips = () => {
            if (ObjectUtils.isNotEmpty(props.value)) {
                return props.value.map((val, index) => {
                    const key = index + 'multi-item';
                    const removeTokenIconProps = mergeProps(
                        {
                            className: cx('removeTokenIcon'),
                            onClick: (e) => removeItem(e, index)
                        },
                        ptm('removeTokenIcon')
                    );
                    const icon = props.removeTokenIcon || <TimesCircleIcon {...removeTokenIconProps} />;
                    const removeTokenIcon = !props.disabled && IconUtils.getJSXIcon(icon, { ...removeTokenIconProps }, { props });
                    const tokenProps = mergeProps(
                        {
                            className: cx('token')
                        },
                        ptm('token')
                    );
                    const tokenLabelProps = mergeProps(
                        {
                            className: cx('tokenLabel')
                        },
                        ptm('tokenLabel')
                    );

                    return (
                        <li key={key} {...tokenProps}>
                            <span {...tokenLabelProps}>{formatValue(val)}</span>
                            {removeTokenIcon}
                        </li>
                    );
                });
            }

            return null;
        };

        const createMultiInput = (allowMoreValues) => {
            const ariaControls = overlayVisibleState ? idState + '_list' : null;
            const inputTokenProps = mergeProps(
                {
                    className: cx('inputToken')
                },
                ptm('inputToken')
            );
            const inputProps = mergeProps(
                {
                    id: props.inputId,
                    ref: inputRef,
                    'aria-autocomplete': 'list',
                    'aria-controls': ariaControls,
                    'aria-expanded': overlayVisibleState,
                    'aria-haspopup': 'listbox',
                    autoComplete: 'off',
                    className: props.inputClassName,
                    disabled: props.disabled,
                    maxLength: props.maxLength,
                    name: props.name,
                    onBlur: onMultiInputBlur,
                    onChange: allowMoreValues ? onInputChange : undefined,
                    onFocus: onMultiInputFocus,
                    onKeyDown: allowMoreValues ? onInputKeyDown : undefined,
                    onKeyPress: props.onKeyPress,
                    onKeyUp: props.onKeyUp,
                    placeholder: allowMoreValues ? props.placeholder : undefined,
                    readOnly: props.readOnly || !allowMoreValues,
                    required: props.required,
                    role: 'combobox',
                    style: props.inputStyle,
                    tabIndex: props.tabIndex,
                    type: props.type,
                    ...ariaProps
                },
                ptm('input')
            );

            return (
                <li {...inputTokenProps}>
                    <input {...inputProps} />
                </li>
            );
        };

        const createMultipleAutoComplete = () => {
            const allowMoreValues = isAllowMoreValues();
            const tokens = createChips();
            const input = createMultiInput(allowMoreValues);
            const containerProps = mergeProps(
                {
                    ref: multiContainerRef,
                    className: cx('container'),
                    onClick: allowMoreValues ? onMultiContainerClick : undefined,
                    onContextMenu: props.onContextMenu,
                    onMouseDown: props.onMouseDown,
                    onDoubleClick: props.onDblClick,
                    'data-p-focus': focusedState,
                    'data-p-disabled': props.disabled
                },
                ptm('container')
            );

            return (
                <ul {...containerProps}>
                    {tokens}
                    {input}
                </ul>
            );
        };

        const createDropdown = () => {
            if (props.dropdown) {
                const ariaLabel = props.dropdownAriaLabel || props.placeholder || localeOption('choose');

                return (
                    <Button
                        type="button"
                        icon={props.dropdownIcon || <ChevronDownIcon />}
                        className={cx('dropdownButton')}
                        disabled={props.disabled}
                        onClick={onDropdownClick}
                        aria-label={ariaLabel}
                        pt={ptm('dropdownButton')}
                        __parentMetadata={{ parent: metaData }}
                    />
                );
            }

            return null;
        };

        const createLoader = () => {
            if (searchingState) {
                const loadingIconProps = mergeProps(
                    {
                        className: cx('loadingIcon')
                    },
                    ptm('loadingIcon')
                );
                const icon = props.loadingIcon || <SpinnerIcon {...loadingIconProps} spin />;
                const loaderIcon = IconUtils.getJSXIcon(icon, { ...loadingIconProps }, { props });

                return loaderIcon;
            }

            return null;
        };

        const createInput = () => {
            return props.multiple ? createMultipleAutoComplete() : createSimpleAutoComplete();
        };

        const listId = idState + '_list';
        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = AutoCompleteBase.getOtherProps(props);
        const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
        const loader = createLoader();
        const input = createInput();
        const dropdown = createDropdown();
        const rootProps = mergeProps(
            {
                id: idState,
                ref: elementRef,
                style: props.style,
                className: classNames(props.className, cx('root', { focusedState }))
            },
            otherProps,
            ptm('root')
        );

        return (
            <>
                <span {...rootProps}>
                    {input}
                    {loader}
                    {dropdown}
                    <AutoCompletePanel
                        hostName="AutoComplete"
                        ref={overlayRef}
                        virtualScrollerRef={virtualScrollerRef}
                        {...props}
                        listId={listId}
                        onItemClick={selectItem}
                        selectedItem={selectedItem}
                        onClick={onPanelClick}
                        getOptionGroupLabel={getOptionGroupLabel}
                        getOptionGroupChildren={getOptionGroupChildren}
                        in={overlayVisibleState}
                        onEnter={onOverlayEnter}
                        onEntering={onOverlayEntering}
                        onEntered={onOverlayEntered}
                        onExit={onOverlayExit}
                        onExited={onOverlayExited}
                        ptm={ptm}
                        cx={cx}
                        sx={sx}
                    />
                </span>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />}
            </>
        );
    })
);

AutoComplete.displayName = 'AutoComplete';
