import React, { forwardRef, memo, useEffect, useImperativeHandle, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PrimeReact from '../api/Api';
import { AutoCompletePanel } from './AutoCompletePanel';
import { InputText } from '../inputtext/InputText';
import { Button } from '../button/Button';
import { tip } from '../tooltip/Tooltip';
import { OverlayService } from '../overlayservice/OverlayService';
import { DomHandler, ObjectUtils, classNames, UniqueComponentId, ZIndexUtils, IconUtils } from '../utils/Utils';
import { useMountEffect, useUpdateEffect, useUnmountEffect, useOverlayListener } from '../hooks/Hooks';

export const AutoComplete = memo(forwardRef((props, ref) => {
    const [idState, setIdState] = useState(props.id);
    const [searchingState, setSearchingState] = useState(false);
    const [focusedState, setFocusedState] = useState(false);
    const [overlayVisibleState, setOverlayVisibleState] = useState(false);
    const elementRef = useRef(null);
    const overlayRef = useRef(null);
    const tooltipRef = useRef(null);
    const inputRef = useRef(props.inputRef);
    const multiContainerRef = useRef(null);
    const virtualScrollerRef = useRef(null);
    const timeout = useRef(null);
    const selectedItem = useRef(null);

    const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
        target: elementRef, overlay: overlayRef, listener: (event, { type, valid }) => {
            if (valid) {
                (type === 'outside') ? !isInputClicked(event) && hide() : hide();
            }
        }, when: overlayVisibleState
    });

    const isInputClicked = (event) => {
        return props.multiple ? event.target === multiContainerRef.current || multiContainerRef.current.contains(event.target) : event.target === inputRef.current;
    }

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
        }
        else {
            if (query.length >= props.minLength) {
                timeout.current = setTimeout(() => {
                    search(event, query, 'input');
                }, props.delay);
            }
            else {
                hide();
            }
        }
    }

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
    }

    const selectItem = (event, option, preventInputFocus) => {
        if (props.multiple) {
            inputRef.current.value = '';
            if (!isSelected(option)) {
                const newValue = props.value ? [...props.value, option] : [option];
                updateModel(event, newValue);
            }
        }
        else {
            updateInputField(option);
            updateModel(event, option);
        }

        if (props.onSelect) {
            props.onSelect({
                originalEvent: event,
                value: option
            })
        }

        if (!preventInputFocus) {
            inputRef.current.focus();
            hide();
        }
    }

    const updateModel = (event, value) => {
        if (props.onChange) {
            props.onChange({
                originalEvent: event,
                value,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: props.name,
                    id: idState,
                    value
                }
            });
        }

        selectedItem.current = value;
    }

    const formatValue = (value) => {
        if (value) {
            if (props.selectedItemTemplate && (props.multiple ? isSelected(value) : findOptionIndex(value) > -1)) {
                const resolvedFieldData = ObjectUtils.getJSXElement(props.selectedItemTemplate, value);
                return resolvedFieldData ? resolvedFieldData : value;
            }
            else if (props.field) {
                const resolvedFieldData = ObjectUtils.resolveFieldData(value, props.field);
                return resolvedFieldData !== null && resolvedFieldData !== undefined ? resolvedFieldData : value;
            }
            else {
                return value;
            }
        }

        return '';
    }

    const updateInputField = (value) => {
        inputRef.current.value = formatValue(value);
    }

    const show = () => {
        setOverlayVisibleState(true);
    }

    const hide = () => {
        setOverlayVisibleState(false);
        setSearchingState(false);
    }

    const onOverlayEnter = () => {
        ZIndexUtils.set('overlay', overlayRef.current, PrimeReact.autoZIndex, PrimeReact.zIndex['overlay']);
        alignOverlay();
    }

    const onOverlayEntering = () => {
        if (props.autoHighlight && props.suggestions && props.suggestions.length) {
            DomHandler.addClass(overlayRef.current.firstChild.firstChild, 'p-highlight');
        }
    }

    const onOverlayEntered = () => {
        bindOverlayListener();
        props.onShow && props.onShow();
    }

    const onOverlayExit = () => {
        unbindOverlayListener();
    }

    const onOverlayExited = () => {
        ZIndexUtils.clear(overlayRef.current);

        props.onHide && props.onHide();
    }

    const alignOverlay = () => {
        const target = props.multiple ? multiContainerRef.current : inputRef.current;
        DomHandler.alignOverlay(overlayRef.current, target, props.appendTo || PrimeReact.appendTo);
    }

    const onPanelClick = (event) => {
        OverlayService.emit('overlay-click', {
            originalEvent: event,
            target: elementRef.current
        });
    }

    const onDropdownClick = (event) => {
        inputRef.current.focus();

        if (props.dropdownMode === 'blank')
            search(event, '', 'dropdown');
        else if (props.dropdownMode === 'current')
            search(event, inputRef.current.value, 'dropdown');

        if (props.onDropdownClick) {
            props.onDropdownClick({
                originalEvent: event,
                query: inputRef.current.value
            });
        }
    }

    const removeItem = (event, index) => {
        const removedValue = props.value[index];
        const newValue = props.value.filter((_, i) => (index !== i));
        updateModel(event, newValue);

        if (props.onUnselect) {
            props.onUnselect({
                originalEvent: event,
                value: removedValue
            });
        }
    }

    const onInputKeyDown = (event) => {
        if (overlayVisibleState) {
            let highlightItem = DomHandler.findSingle(overlayRef.current, 'li.p-highlight');

            switch (event.which) {
                //down
                case 40:
                    if (highlightItem) {
                        let nextElement = findNextItem(highlightItem);
                        if (nextElement) {
                            DomHandler.addClass(nextElement, 'p-highlight');
                            DomHandler.removeClass(highlightItem, 'p-highlight');
                            DomHandler.scrollInView(overlayRef.current, nextElement);
                        }
                    }
                    else {
                        highlightItem = DomHandler.findSingle(overlayRef.current, 'li');
                        if (DomHandler.hasClass(highlightItem, 'p-autocomplete-item-group')) {
                            highlightItem = findNextItem(highlightItem);
                        }

                        if (highlightItem) {
                            DomHandler.addClass(highlightItem, 'p-highlight');
                        }
                    }

                    event.preventDefault();
                    break;

                //up
                case 38:
                    if (highlightItem) {
                        let previousElement = findPrevItem(highlightItem);
                        if (previousElement) {
                            DomHandler.addClass(previousElement, 'p-highlight');
                            DomHandler.removeClass(highlightItem, 'p-highlight');
                            DomHandler.scrollInView(overlayRef.current, previousElement);
                        }
                    }

                    event.preventDefault();
                    break;

                //enter
                case 13:
                    if (highlightItem) {
                        selectHighlightItem(event, highlightItem);
                        hide();
                    }

                    event.preventDefault();
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
                            })
                        }
                    }
                    break;

                default:
                    break;
            }
        }
    }

    const selectHighlightItem = (event, item) => {
        if (props.optionGroupLabel) {
            const optionGroup = props.suggestions[item.dataset.group];
            selectItem(event, getOptionGroupChildren(optionGroup)[item.dataset.index]);
        }
        else {
            selectItem(event, props.suggestions[DomHandler.index(item)]);
        }
    }

    const findNextItem = (item) => {
        const nextItem = item.nextElementSibling;

        return nextItem ? (DomHandler.hasClass(nextItem, 'p-autocomplete-item-group') ? findNextItem(nextItem) : nextItem) : null;
    }

    const findPrevItem = (item) => {
        let prevItem = item.previousElementSibling;

        return prevItem ? (DomHandler.hasClass(prevItem, 'p-autocomplete-item-group') ? findPrevItem(prevItem) : prevItem) : null;
    }

    const onInputFocus = (event) => {
        setFocusedState(true);
        props.onFocus && props.onFocus(event);
    }

    const forceItemSelection = (event) => {
        const inputValue = event.target.value.trim();
        const item = (props.suggestions || []).find(it => {
            const value = props.field ? ObjectUtils.resolveFieldData(it, props.field) : it;
            return value && inputValue === value.trim();
        });

        if (item) {
            selectItem(event, item, true);
        }
        else {
            inputRef.current.value = '';
            updateModel(event, null);

            props.onClear && props.onClear(event);
        }
    }

    const onInputBlur = (event) => {
        setFocusedState(false);

        if (props.forceSelection) {
            forceItemSelection(event);
        }

        props.onBlur && props.onBlur(event);
    }

    const onMultiContainerClick = (event) => {
        inputRef.current.focus();

        props.onClick && props.onClick(event);
    }

    const onMultiInputFocus = (event) => {
        onInputFocus(event);
        DomHandler.addClass(multiContainerRef.current, 'p-focus');
    }

    const onMultiInputBlur = (event) => {
        onInputBlur(event);
        DomHandler.removeClass(multiContainerRef.current, 'p-focus');
    }

    const isSelected = (val) => {
        return props.value ? props.value.some(v => ObjectUtils.equals(v, val)) : false;
    }

    const findOptionIndex = (option) => {
        return props.suggestions ? props.suggestions.findIndex(s => ObjectUtils.equals(s, option)) : -1;
    }

    const getOptionGroupLabel = (optionGroup) => {
        return props.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel) : optionGroup;
    }

    const getOptionGroupChildren = (optionGroup) => {
        return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupChildren);
    }

    useEffect(() => {
        ObjectUtils.combinedRefs(inputRef, props.inputRef);
    }, [inputRef, props.inputRef]);

    useEffect(() => {
        if (tooltipRef.current) {
            tooltipRef.current.update({ content: props.tooltip, ...(props.tooltipOptions || {}) });
        }
        else if (props.tooltip) {
            tooltipRef.current = tip({
                target: elementRef.current,
                content: props.tooltip,
                options: props.tooltipOptions
            });
        }
    }, [props.tooltip, props.tooltipOptions]);

    useMountEffect(() => {
        if (!idState) {
            setIdState(UniqueComponentId());
        }

        if (props.autoFocus && inputRef.current) {
            inputRef.current.focus();
        }
    });

    useUpdateEffect(() => {
        if (searchingState) {
            ObjectUtils.isNotEmpty(props.suggestions) ? show() : hide();
            setSearchingState(false);
        }
    }, [props.suggestions]);

    useUpdateEffect(() => {
        if (inputRef.current && !props.multiple) {
            updateInputField(props.value);
        }
    });

    useUnmountEffect(() => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        if (tooltipRef.current) {
            tooltipRef.current.destroy();
            tooltipRef.current = null;
        }

        ZIndexUtils.clear(overlayRef.current);
    });

    useImperativeHandle(ref, () => {
        search
    });

    const createSimpleAutoComplete = () => {
        const value = formatValue(props.value);
        const ariaControls = idState + '_list';
        const className = classNames('p-autocomplete-input', props.inputClassName, {
            'p-autocomplete-dd-input': props.dropdown
        });

        return (
            <InputText ref={inputRef} id={props.inputId} type={props.type} name={props.name}
                defaultValue={value} role="searchbox" aria-autocomplete="list" aria-controls={ariaControls}
                aria-labelledby={props.ariaLabelledBy} className={className} style={props.inputStyle} autoComplete="off"
                readOnly={props.readOnly} disabled={props.disabled} placeholder={props.placeholder} size={props.size}
                maxLength={props.maxLength} tabIndex={props.tabIndex}
                onBlur={onInputBlur} onFocus={onInputFocus} onChange={onInputChange}
                onMouseDown={props.onMouseDown} onKeyUp={props.onKeyUp} onKeyDown={onInputKeyDown}
                onKeyPress={props.onKeyPress} onContextMenu={props.onContextMenu}
                onClick={props.onClick} onDoubleClick={props.onDblClick} />
        )
    }

    const createChips = () => {
        if (ObjectUtils.isNotEmpty(props.value)) {
            return props.value.map((val, index) => {
                const key = index + 'multi-item';
                return (
                    <li key={key} className="p-autocomplete-token p-highlight">
                        <span className="p-autocomplete-token-label">{formatValue(val)}</span>
                        {!props.disabled && IconUtils.getJSXIcon(props.removeIcon, { className: 'p-autocomplete-token-icon', onClick: (e) => removeItem(e, index) }, { props })}
                    </li>
                )
            })
        }

        return null;
    }

    const createMultiInput = () => {
        const ariaControls = idState + '_list';

        return (
            <li className="p-autocomplete-input-token">
                <input ref={inputRef} type={props.type} disabled={props.disabled} placeholder={props.placeholder}
                    role="searchbox" aria-autocomplete="list" aria-controls={ariaControls} aria-labelledby={props.ariaLabelledBy}
                    autoComplete="off" tabIndex={props.tabIndex} onChange={onInputChange} id={props.inputId} name={props.name}
                    style={props.inputStyle} className={props.inputClassName} maxLength={props.maxLength}
                    onKeyUp={props.onKeyUp} onKeyDown={onInputKeyDown} onKeyPress={props.onKeyPress}
                    onFocus={onMultiInputFocus} onBlur={onMultiInputBlur} />
            </li>
        )
    }

    const createMultipleAutoComplete = () => {
        const className = classNames('p-autocomplete-multiple-container p-component p-inputtext', {
            'p-disabled': props.disabled
        });
        const tokens = createChips();
        const input = createMultiInput();

        return (
            <ul ref={multiContainerRef} className={className} onContextMenu={props.onContextMenu} onMouseDown={props.onMouseDown}
                onClick={onMultiContainerClick} onDoubleClick={props.onDblClick}>
                {tokens}
                {input}
            </ul>
        )
    }

    const createDropdown = () => {
        if (props.dropdown) {
            return <Button type="button" icon={props.dropdownIcon} className="p-autocomplete-dropdown" disabled={props.disabled} onClick={onDropdownClick} />
        }

        return null;
    }

    const createLoader = () => {
        if (searchingState) {
            return <i className="p-autocomplete-loader pi pi-spinner pi-spin"></i>
        }

        return null;
    }

    const createInput = () => {
        return props.multiple ? createMultipleAutoComplete() : createSimpleAutoComplete();
    }

    const listId = idState + '_list';
    const className = classNames('p-autocomplete p-component p-inputwrapper', {
        'p-autocomplete-dd': props.dropdown,
        'p-autocomplete-multiple': props.multiple,
        'p-inputwrapper-filled': props.value,
        'p-inputwrapper-focus': focusedState
    }, props.className);
    const loader = createLoader();
    const input = createInput();
    const dropdown = createDropdown();

    return (
        <span ref={elementRef} id={idState} style={props.style} className={className} aria-haspopup="listbox" aria-expanded={overlayVisibleState} aria-owns={listId}>
            {input}
            {loader}
            {dropdown}
            <AutoCompletePanel ref={overlayRef} virtualScrollerRef={virtualScrollerRef} {...props} listId={listId} onItemClick={selectItem} selectedItem={selectedItem}
                onClick={onPanelClick} getOptionGroupLabel={getOptionGroupLabel} getOptionGroupChildren={getOptionGroupChildren}
                in={overlayVisibleState} onEnter={onOverlayEnter} onEntering={onOverlayEntering} onEntered={onOverlayEntered} onExit={onOverlayExit} onExited={onOverlayExited} />
        </span>
    )
}));

AutoComplete.defaultProps = {
    __TYPE: 'AutoComplete',
    id: null,
    inputRef: null,
    value: null,
    name: null,
    type: 'text',
    suggestions: null,
    field: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    optionGroupTemplate: null,
    forceSelection: false,
    autoHighlight: false,
    virtualScrollerOptions: null,
    scrollHeight: '200px',
    dropdown: false,
    dropdownMode: 'blank',
    multiple: false,
    minLength: 1,
    delay: 300,
    style: null,
    className: null,
    inputId: null,
    inputStyle: null,
    inputClassName: null,
    panelClassName: null,
    panelStyle: null,
    placeholder: null,
    readOnly: false,
    disabled: false,
    maxLength: null,
    size: null,
    appendTo: null,
    tabIndex: null,
    autoFocus: false,
    tooltip: null,
    tooltipOptions: null,
    ariaLabelledBy: null,
    completeMethod: null,
    itemTemplate: null,
    selectedItemTemplate: null,
    transitionOptions: null,
    dropdownIcon: 'pi pi-chevron-down',
    removeIcon: 'pi pi-times-circle',
    onChange: null,
    onFocus: null,
    onBlur: null,
    onSelect: null,
    onUnselect: null,
    onDropdownClick: null,
    onClick: null,
    onDblClick: null,
    onMouseDown: null,
    onKeyUp: null,
    onKeyPress: null,
    onContextMenu: null,
    onClear: null,
    onShow: null,
    onHide: null
}

AutoComplete.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    inputRef: PropTypes.any,
    value: PropTypes.any,
    name: PropTypes.string,
    type: PropTypes.string,
    suggestions: PropTypes.array,
    field: PropTypes.string,
    optionGroupLabel: PropTypes.string,
    optionGroupChildren: PropTypes.string,
    optionGroupTemplate: PropTypes.any,
    forceSelection: PropTypes.bool,
    autoHighlight: PropTypes.bool,
    virtualScrollerOptions: PropTypes.object,
    scrollHeight: PropTypes.string,
    dropdown: PropTypes.bool,
    dropdownMode: PropTypes.string,
    multiple: PropTypes.bool,
    minLength: PropTypes.number,
    delay: PropTypes.number,
    style: PropTypes.object,
    className: PropTypes.string,
    inputId: PropTypes.string,
    inputStyle: PropTypes.object,
    inputClassName: PropTypes.string,
    panelClassName: PropTypes.string,
    panelStyle: PropTypes.object,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    maxLength: PropTypes.number,
    size: PropTypes.number,
    appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    tabIndex: PropTypes.number,
    autoFocus: PropTypes.bool,
    tooltip: PropTypes.string,
    tooltipOptions: PropTypes.object,
    ariaLabelledBy: PropTypes.string,
    completeMethod: PropTypes.func,
    itemTemplate: PropTypes.any,
    selectedItemTemplate: PropTypes.any,
    transitionOptions: PropTypes.object,
    dropdownIcon: PropTypes.any,
    removeIcon: PropTypes.any,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onSelect: PropTypes.func,
    onUnselect: PropTypes.func,
    onDropdownClick: PropTypes.func,
    onClick: PropTypes.func,
    onDblClick: PropTypes.func,
    onMouseDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    onKeyPress: PropTypes.func,
    onContextMenu: PropTypes.func,
    onClear: PropTypes.func,
    onShow: PropTypes.func,
    onHide: PropTypes.func
}
