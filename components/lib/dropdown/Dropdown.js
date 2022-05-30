import * as React from 'react';
import PrimeReact, { FilterService } from '../api/Api';
import { useMountEffect, useOverlayListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { OverlayService } from '../overlayservice/OverlayService';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, ObjectUtils, ZIndexUtils } from '../utils/Utils';
import { DropdownPanel } from './DropdownPanel';

export const Dropdown = React.memo(React.forwardRef((props, ref) => {
    const [filterState, setFilterState] = React.useState('');
    const [focusedState, setFocusedState] = React.useState(false);
    const [overlayVisibleState, setOverlayVisibleState] = React.useState(false);
    const elementRef = React.useRef(null);
    const overlayRef = React.useRef(null);
    const inputRef = React.useRef(props.inputRef);
    const focusInputRef = React.useRef(null);
    const searchTimeout = React.useRef(null);
    const searchValue = React.useRef(null);
    const currentSearchChar = React.useRef(null);
    const isLazy = props.virtualScrollerOptions && props.virtualScrollerOptions.lazy;
    const hasFilter = ObjectUtils.isNotEmpty(filterState);
    const appendTo = props.appendTo || PrimeReact.appendTo;

    const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
        target: elementRef, overlay: overlayRef, listener: (event, { type, valid }) => {
            if (valid) {
                (type === 'outside') ? !isClearClicked(event) && hide() : hide();
            }
        }, when: overlayVisibleState
    });

    const getVisibleOptions = () => {
        if (hasFilter && !isLazy) {
            const filterValue = filterState.trim().toLocaleLowerCase(props.filterLocale)
            const searchFields = props.filterBy ? props.filterBy.split(',') : [props.optionLabel || 'label'];

            if (props.optionGroupLabel) {
                let filteredGroups = [];
                for (let optgroup of props.options) {
                    let filteredSubOptions = FilterService.filter(getOptionGroupChildren(optgroup), searchFields, filterValue, props.filterMatchMode, props.filterLocale);
                    if (filteredSubOptions && filteredSubOptions.length) {
                        filteredGroups.push({ ...optgroup, ...{ items: filteredSubOptions } });
                    }
                }
                return filteredGroups;
            }
            else {
                return FilterService.filter(props.options, searchFields, filterValue, props.filterMatchMode, props.filterLocale);
            }
        }
        else {
            return props.options;
        }
    }

    const isClearClicked = (event) => {
        return DomHandler.hasClass(event.target, 'p-dropdown-clear-icon') || DomHandler.hasClass(event.target, 'p-dropdown-filter-clear-icon');
    }

    const onClick = (event) => {
        if (props.disabled) {
            return;
        }

        if (DomHandler.hasClass(event.target, 'p-dropdown-clear-icon') || event.target.tagName === 'INPUT') {
            return;
        }
        else if (!overlayRef.current || !(overlayRef.current && overlayRef.current.contains(event.target))) {
            focusInputRef.current.focus();
            overlayVisibleState ? hide() : show();
        }
    }

    const onInputFocus = (event) => {
        if (props.showOnFocus && !overlayVisibleState) {
            show();
        }

        setFocusedState(true);
        props.onFocus && props.onFocus(event);
    }

    const onInputBlur = (event) => {
        setFocusedState(false);
        props.onBlur && props.onBlur(event);
    }

    const onPanelClick = (event) => {
        OverlayService.emit('overlay-click', {
            originalEvent: event,
            target: elementRef.current
        });
    }

    const onInputKeyDown = (event) => {
        switch (event.which) {
            //down
            case 40:
                onDownKey(event);
                break;

            //up
            case 38:
                onUpKey(event);
                break;

            //space and enter
            case 32:
            case 13:
                overlayVisibleState ? hide() : show();
                event.preventDefault();
                break;

            //escape and tab
            case 27:
            case 9:
                hide();
                break;

            default:
                search(event);
                break;
        }
    }

    const onFilterInputKeyDown = (event) => {
        switch (event.which) {
            //down
            case 40:
                onDownKey(event);
                break;

            //up
            case 38:
                onUpKey(event);
                break;

            //enter and escape
            case 13:
            case 27:
                hide();
                event.preventDefault();
                break;

            default:
                break;
        }
    }

    const onUpKey = (event) => {
        if (visibleOptions) {
            const prevOption = findPrevOption(getSelectedOptionIndex());

            if (prevOption) {
                selectItem({
                    originalEvent: event,
                    option: prevOption
                });
            }
        }

        event.preventDefault();
    }

    const onDownKey = (event) => {
        if (visibleOptions) {
            if (!overlayVisibleState && event.altKey) {
                show();
            }
            else {
                const nextOption = findNextOption(getSelectedOptionIndex());

                if (nextOption) {
                    selectItem({
                        originalEvent: event,
                        option: nextOption
                    });
                }
            }
        }

        event.preventDefault();
    }

    const findNextOption = (index) => {
        if (props.optionGroupLabel) {
            const groupIndex = index === -1 ? 0 : index.group;
            const optionIndex = index === -1 ? -1 : index.option;
            const option = findNextOptionInList(getOptionGroupChildren(visibleOptions[groupIndex]), optionIndex);

            if (option)
                return option;
            else if ((groupIndex + 1) !== visibleOptions.length)
                return findNextOption({ group: (groupIndex + 1), option: -1 });
            else
                return null;
        }

        return findNextOptionInList(visibleOptions, index);
    }

    const findNextOptionInList = (list, index) => {
        const i = index + 1;
        if (i === list.length) {
            return null;
        }

        const option = list[i];
        return isOptionDisabled(option) ? findNextOptionInList(i) : option;
    }

    const findPrevOption = (index) => {
        if (index === -1) {
            return null;
        }

        if (props.optionGroupLabel) {
            const groupIndex = index.group;
            const optionIndex = index.option;
            const option = findPrevOptionInList(getOptionGroupChildren(visibleOptions[groupIndex]), optionIndex);

            if (option)
                return option;
            else if (groupIndex > 0)
                return findPrevOption({ group: (groupIndex - 1), option: getOptionGroupChildren(visibleOptions[groupIndex - 1]).length });
            else
                return null;
        }

        return findPrevOptionInList(visibleOptions, index);
    }

    const findPrevOptionInList = (list, index) => {
        const i = index - 1;
        if (i < 0) {
            return null;
        }

        const option = list[i];
        return isOptionDisabled(option) ? findPrevOption(i) : option;
    }

    const search = (event) => {
        if (searchTimeout.current) {
            clearTimeout(searchTimeout.current);
        }

        const char = event.key;

        if (currentSearchChar.current === char)
            searchValue.current = char;
        else
            searchValue.current = searchValue.current ? searchValue.current + char : char;

        currentSearchChar.current = char;

        if (searchValue.current) {
            const searchIndex = getSelectedOptionIndex();
            const newOption = props.optionGroupLabel ? searchOptionInGroup(searchIndex) : searchOption(searchIndex + 1);
            if (newOption) {
                selectItem({
                    originalEvent: event,
                    option: newOption
                });
            }
        }

        searchTimeout.current = setTimeout(() => {
            searchValue.current = null;
        }, 250);
    }

    const searchOption = (index) => {
        if (searchValue.current) {
            return searchOptionInRange(index, visibleOptions.length) || searchOptionInRange(0, index);
        }

        return null;
    }

    const searchOptionInRange = (start, end) => {
        for (let i = start; i < end; i++) {
            const opt = visibleOptions[i];
            if (matchesSearchValue(opt)) {
                return opt;
            }
        }

        return null;
    }

    const searchOptionInGroup = (index) => {
        const searchIndex = index === -1 ? { group: 0, option: -1 } : index;

        for (let i = searchIndex.group; i < visibleOptions.length; i++) {
            let groupOptions = getOptionGroupChildren(visibleOptions[i]);
            for (let j = (searchIndex.group === i ? searchIndex.option + 1 : 0); j < groupOptions.length; j++) {
                if (matchesSearchValue(groupOptions[j])) {
                    return groupOptions[j];
                }
            }
        }

        for (let i = 0; i <= searchIndex.group; i++) {
            let groupOptions = getOptionGroupChildren(visibleOptions[i]);
            for (let j = 0; j < (searchIndex.group === i ? searchIndex.option : groupOptions.length); j++) {
                if (matchesSearchValue(groupOptions[j])) {
                    return groupOptions[j];
                }
            }
        }

        return null;
    }

    const matchesSearchValue = (option) => {
        const label = getOptionLabel(option).toLocaleLowerCase(props.filterLocale);
        return label.startsWith(searchValue.current.toLocaleLowerCase(props.filterLocale));
    }

    const onEditableInputChange = (event) => {
        if (props.onChange) {
            props.onChange({
                originalEvent: event.originalEvent,
                value: event.target.value,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: props.name,
                    id: props.id,
                    value: event.target.value,
                }
            });
        }
    }

    const onEditableInputFocus = (event) => {
        setFocusedState(true);
        hide();
        props.onFocus && props.onFocus(event);
    }

    const onOptionClick = (event) => {
        const option = event.option;

        if (!option.disabled) {
            selectItem(event);
            focusInputRef.current.focus();
        }

        hide();
    }

    const onFilterInputChange = (event) => {
        const filter = event.target.value;

        setFilterState(filter);

        if (props.onFilter) {
            props.onFilter({
                originalEvent: event,
                filter
            });
        }
    }

    const onFilterClearIconClick = (callback) => {
        resetFilter(callback);
    }

    const resetFilter = (callback) => {
        setFilterState('');
        props.onFilter && props.onFilter({ filter: '' });
        callback && callback();
    }

    const clear = (event) => {
        if (props.onChange) {
            props.onChange({
                originalEvent: event,
                value: undefined,
                stopPropagation: () => { },
                preventDefault: () => { },
                target: {
                    name: props.name,
                    id: props.id,
                    value: undefined
                }
            });
        }

        updateEditableLabel();
    }

    const selectItem = (event) => {
        if (selectedOption !== event.option) {
            updateEditableLabel(event.option);
            const optionValue = getOptionValue(event.option);

            if (props.onChange) {
                props.onChange({
                    originalEvent: event.originalEvent,
                    value: optionValue,
                    stopPropagation: () => { },
                    preventDefault: () => { },
                    target: {
                        name: props.name,
                        id: props.id,
                        value: optionValue
                    }
                });
            }
        }
    }

    const getSelectedOptionIndex = () => {
        if (props.value != null && visibleOptions) {
            if (props.optionGroupLabel) {
                for (let i = 0; i < visibleOptions.length; i++) {
                    let selectedOptionIndex = findOptionIndexInList(props.value, getOptionGroupChildren(visibleOptions[i]));
                    if (selectedOptionIndex !== -1) {
                        return { group: i, option: selectedOptionIndex };
                    }
                }
            }
            else {
                return findOptionIndexInList(props.value, visibleOptions);
            }
        }

        return -1;
    }

    const equalityKey = () => {
        return props.optionValue ? null : props.dataKey;
    }

    const findOptionIndexInList = (value, list) => {
        const key = equalityKey();
        return list.findIndex(item => ObjectUtils.equals(value, getOptionValue(item), key));
    }

    const isSelected = (option) => {
        return ObjectUtils.equals(props.value, getOptionValue(option), equalityKey());
    }

    const show = () => {
        setOverlayVisibleState(true);
    }

    const hide = () => {
        setOverlayVisibleState(false);
    }

    const onOverlayEnter = (callback) => {
        ZIndexUtils.set('overlay', overlayRef.current, PrimeReact.autoZIndex, PrimeReact.zIndex['overlay']);
        alignOverlay();
        callback && callback();
    }

    const onOverlayEntered = (callback) => {
        callback && callback();
        bindOverlayListener();

        props.onShow && props.onShow();
    }

    const onOverlayExit = () => {
        unbindOverlayListener();
    }

    const onOverlayExited = () => {
        if (props.filter && props.resetFilterOnHide) {
            resetFilter();
        }

        ZIndexUtils.clear(overlayRef.current);

        props.onHide && props.onHide();
    }

    const alignOverlay = () => {
        DomHandler.alignOverlay(overlayRef.current, inputRef.current.parentElement, props.appendTo || PrimeReact.appendTo);
    }

    const scrollInView = () => {
        const highlightItem = DomHandler.findSingle(overlayRef.current, 'li.p-highlight');
        if (highlightItem && highlightItem.scrollIntoView) {
            highlightItem.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
    }

    const updateEditableLabel = (option) => {
        if (inputRef.current) {
            inputRef.current.value = (option ? getOptionLabel(option) : props.value || '');
        }
    }

    const getOptionLabel = (option) => {
        return props.optionLabel ? ObjectUtils.resolveFieldData(option, props.optionLabel) : (option && option['label'] !== undefined ? option['label'] : option);
    }

    const getOptionValue = (option) => {
        return props.optionValue ? ObjectUtils.resolveFieldData(option, props.optionValue) : (option && option['value'] !== undefined ? option['value'] : option);
    }

    const getOptionRenderKey = (option) => {
        return props.dataKey ? ObjectUtils.resolveFieldData(option, props.dataKey) : getOptionLabel(option);
    }

    const isOptionDisabled = (option) => {
        if (props.optionDisabled) {
            return ObjectUtils.isFunction(props.optionDisabled) ? props.optionDisabled(option) : ObjectUtils.resolveFieldData(option, props.optionDisabled);
        }

        return (option && option['disabled'] !== undefined ? option['disabled'] : false);
    }

    const getOptionGroupRenderKey = (optionGroup) => {
        return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
    }

    const getOptionGroupLabel = (optionGroup) => {
        return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
    }

    const getOptionGroupChildren = (optionGroup) => {
        return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupChildren);
    }

    const updateInputField = () => {
        if (props.editable && inputRef.current) {
            const label = selectedOption ? getOptionLabel(selectedOption) : null;
            const value = label || props.value || '';
            inputRef.current.value = value;
        }
    }

    const getSelectedOption = () => {
        const index = getSelectedOptionIndex();

        return index !== -1 ? (props.optionGroupLabel ? getOptionGroupChildren(visibleOptions[index.group])[index.option] : visibleOptions[index]) : null;
    }

    React.useEffect(() => {
        ObjectUtils.combinedRefs(inputRef, props.inputRef);
    }, [inputRef, props.inputRef]);

    useMountEffect(() => {
        if (props.autoFocus && focusInputRef.current) {
            focusInputRef.current.focus();
        }
    });

    useUpdateEffect(() => {
        if (overlayVisibleState && props.value) {
            scrollInView();
        }
    }, [overlayVisibleState, props.value]);

    useUpdateEffect(() => {
        if (overlayVisibleState && props.filter) {
            alignOverlay();
        }
    }, [overlayVisibleState, props.filter]);

    useUpdateEffect(() => {
        if (filterState && (!props.options || props.options.length === 0)) {
            setFilterState('');
        }

        updateInputField();
        if (inputRef.current) {
            inputRef.current.selectedIndex = 1;
        }
    });

    useUnmountEffect(() => {
        ZIndexUtils.clear(overlayRef.current);
    });

    const createHiddenSelect = () => {
        const placeHolderOption = <option value="">{props.placeholder}</option>;
        const option = selectedOption ? <option value={selectedOption.value}>{getOptionLabel(selectedOption)}</option> : null;

        return (
            <div className="p-hidden-accessible p-dropdown-hidden-select">
                <select ref={inputRef} required={props.required} name={props.name} tabIndex={-1} aria-hidden="true">
                    {placeHolderOption}
                    {option}
                </select>
            </div>
        )
    }

    const createKeyboardHelper = () => {
        return (
            <div className="p-hidden-accessible">
                <input ref={focusInputRef} id={props.inputId} type="text" readOnly aria-haspopup="listbox"
                    onFocus={onInputFocus} onBlur={onInputBlur} onKeyDown={onInputKeyDown}
                    disabled={props.disabled} tabIndex={props.tabIndex} aria-label={props.ariaLabel} aria-labelledby={props.ariaLabelledBy} />
            </div>
        )
    }

    const createLabel = () => {
        const label = ObjectUtils.isNotEmpty(selectedOption) ? getOptionLabel(selectedOption) : null;

        if (props.editable) {
            const value = label || props.value || '';

            return (
                <input ref={inputRef} type="text" defaultValue={value} className="p-dropdown-label p-inputtext" disabled={props.disabled}
                    placeholder={props.placeholder} maxLength={props.maxLength} onInput={onEditableInputChange}
                    onFocus={onEditableInputFocus} onBlur={onInputBlur} aria-label={props.ariaLabel} aria-labelledby={props.ariaLabelledBy}
                    aria-haspopup="listbox" />
            )
        }
        else {
            const className = classNames('p-dropdown-label p-inputtext', {
                'p-placeholder': label === null && props.placeholder,
                'p-dropdown-label-empty': label === null && !props.placeholder
            });
            const content = props.valueTemplate ? ObjectUtils.getJSXElement(props.valueTemplate, selectedOption, props) : (label || props.placeholder || 'empty');

            return <span ref={inputRef} className={className}>{content}</span>
        }
    }

    const createClearIcon = () => {
        if (props.value != null && props.showClear && !props.disabled) {
            return <i className="p-dropdown-clear-icon pi pi-times" onClick={clear}></i>
        }

        return null;
    }

    const createDropdownIcon = () => {
        const iconClassName = classNames('p-dropdown-trigger-icon p-clickable', props.dropdownIcon);

        return (
            <div className="p-dropdown-trigger" role="button" aria-haspopup="listbox" aria-expanded={overlayVisibleState}>
                <span className={iconClassName}></span>
            </div>
        )
    }

    const visibleOptions = getVisibleOptions();
    const selectedOption = getSelectedOption();

    const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
    const otherProps = ObjectUtils.findDiffKeys(props, Dropdown.defaultProps);
    const className = classNames('p-dropdown p-component p-inputwrapper', {
        'p-disabled': props.disabled,
        'p-focus': focusedState,
        'p-dropdown-clearable': props.showClear && !props.disabled,
        'p-inputwrapper-filled': ObjectUtils.isNotEmpty(props.value),
        'p-inputwrapper-focus': focusedState || overlayVisibleState
    }, props.className);
    const hiddenSelect = createHiddenSelect();
    const keyboardHelper = createKeyboardHelper();
    const labelElement = createLabel();
    const dropdownIcon = createDropdownIcon();
    const clearIcon = createClearIcon();

    return (
        <>
            <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps} onClick={onClick}
                onMouseDown={props.onMouseDown} onContextMenu={props.onContextMenu}>
                {keyboardHelper}
                {hiddenSelect}
                {labelElement}
                {clearIcon}
                {dropdownIcon}
                <DropdownPanel ref={overlayRef} visibleOptions={visibleOptions} {...props} appendTo={appendTo} onClick={onPanelClick} onOptionClick={onOptionClick}
                    filterValue={filterState} hasFilter={hasFilter} onFilterClearIconClick={onFilterClearIconClick} onFilterInputKeyDown={onFilterInputKeyDown} onFilterInputChange={onFilterInputChange}
                    getOptionLabel={getOptionLabel} getOptionRenderKey={getOptionRenderKey} isOptionDisabled={isOptionDisabled}
                    getOptionGroupChildren={getOptionGroupChildren} getOptionGroupLabel={getOptionGroupLabel} getOptionGroupRenderKey={getOptionGroupRenderKey}
                    isSelected={isSelected} getSelectedOptionIndex={getSelectedOptionIndex}
                    in={overlayVisibleState} onEnter={onOverlayEnter} onEntered={onOverlayEntered} onExit={onOverlayExit} onExited={onOverlayExited} />
            </div>
            {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
        </>
    )
}));

Dropdown.displayName = 'Dropdown';
Dropdown.defaultProps = {
    __TYPE: 'Dropdown',
    id: null,
    inputRef: null,
    name: null,
    value: null,
    options: null,
    optionLabel: null,
    optionValue: null,
    optionDisabled: null,
    optionGroupLabel: null,
    optionGroupChildren: null,
    optionGroupTemplate: null,
    valueTemplate: null,
    itemTemplate: null,
    style: null,
    className: null,
    virtualScrollerOptions: null,
    scrollHeight: '200px',
    filter: false,
    filterBy: null,
    filterMatchMode: 'contains',
    filterPlaceholder: null,
    filterLocale: undefined,
    emptyMessage: null,
    emptyFilterMessage: null,
    editable: false,
    placeholder: null,
    required: false,
    disabled: false,
    appendTo: null,
    tabIndex: null,
    autoFocus: false,
    filterInputAutoFocus: true,
    resetFilterOnHide: false,
    showFilterClear: false,
    panelClassName: null,
    panelStyle: null,
    dataKey: null,
    inputId: null,
    showClear: false,
    maxLength: null,
    tooltip: null,
    tooltipOptions: null,
    ariaLabel: null,
    ariaLabelledBy: null,
    transitionOptions: null,
    dropdownIcon: 'pi pi-chevron-down',
    showOnFocus: false,
    onChange: null,
    onFocus: null,
    onBlur: null,
    onMouseDown: null,
    onContextMenu: null,
    onShow: null,
    onHide: null,
    onFilter: null
}
