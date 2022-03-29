import React, { forwardRef, memo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PrimeReact, { FilterService } from '../api/Api';
import { tip } from '../tooltip/Tooltip';
import { MultiSelectPanel } from './MultiSelectPanel';
import { OverlayService } from '../overlayservice/OverlayService';
import { DomHandler, ObjectUtils, ZIndexUtils, classNames, IconUtils } from '../utils/Utils';
import { useUpdateEffect, useUnmountEffect, useOverlayListener } from '../hooks/Hooks';

export const MultiSelect = memo(forwardRef((props, ref) => {
    const [filterState, setFilterState] = useState('');
    const [focusedState, setFocusedState] = useState(false);
    const [overlayVisibleState, setOverlayVisibleState] = useState(false);
    const elementRef = useRef(null);
    const inputRef = useRef(props.inputRef);
    const labelRef = useRef(null);
    const overlayRef = useRef(null);
    const tooltipRef = useRef(null);
    const hasFilter = filterState && filterState.trim().length > 0;
    const empty = ObjectUtils.isEmpty(props.value);
    const equalityKey = props.optionValue ? null : props.dataKey;

    const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
        target: elementRef, overlay: overlayRef, listener: (event, { type, valid }) => {
            if (valid) {
                (type === 'outside') ? !isClearClicked(event) && hide() : hide();
            }
        }, when: overlayVisibleState
    });

    const onPanelClick = (event) => {
        OverlayService.emit('overlay-click', {
            originalEvent: event,
            target: elementRef.current
        })
    }

    const allowOptionSelect = () => {
        return !props.selectionLimit || !props.value || (props.value && props.value.length < props.selectionLimit);
    }

    const onOptionSelect = (event) => {
        const { originalEvent, option } = event;

        if (props.disabled || isOptionDisabled(option)) {
            return;
        }

        const optionValue = getOptionValue(option);
        const isUsed = isOptionValueUsed(option);
        const selected = isSelected(option);
        const allowSelect = allowOptionSelect();

        if (selected)
            updateModel(originalEvent, props.value.filter(val => !ObjectUtils.equals(isUsed ? val : getOptionValue(val), optionValue, equalityKey)));
        else if (allowSelect)
            updateModel(originalEvent, [...props.value || [], optionValue]);
    }

    const onOptionKeyDown = (event) => {
        const originalEvent = event.originalEvent;
        const listItem = originalEvent.currentTarget;

        switch (originalEvent.which) {
            //down
            case 40:
                const nextItem = findNextItem(listItem);
                nextItem && nextItem.focus();
                originalEvent.preventDefault();
                break;

            //up
            case 38:
                const prevItem = findPrevItem(listItem);
                prevItem && prevItem.focus();
                originalEvent.preventDefault();
                break;

            //enter and space
            case 13:
            case 32:
                onOptionSelect(event);
                originalEvent.preventDefault();
                break;

            //escape
            case 27:
                hide();
                inputRef.current.focus();
                break;

            default:
                break;
        }
    }

    const findNextItem = (item) => {
        const nextItem = item.nextElementSibling;
        return nextItem ? (DomHandler.hasClass(nextItem, 'p-disabled') || DomHandler.hasClass(nextItem, 'p-multiselect-item-group') ? findNextItem(nextItem) : nextItem) : null;
    }

    const findPrevItem = (item) => {
        const prevItem = item.previousElementSibling;
        return prevItem ? (DomHandler.hasClass(prevItem, 'p-disabled') || DomHandler.hasClass(prevItem, 'p-multiselect-item-group') ? findPrevItem(prevItem) : prevItem) : null;
    }

    const onClick = (event) => {
        if (!props.disabled && !isPanelClicked(event) && !DomHandler.hasClass(event.target, 'p-multiselect-token-icon') && !isClearClicked(event)) {
            overlayVisibleState ? hide() : show();
            inputRef.current.focus();

            event.preventDefault();
        }
    }

    const onKeyDown = (event) => {
        switch (event.which) {
            //down
            case 40:
                if (!overlayVisibleState && event.altKey) {
                    show();
                    event.preventDefault();
                }
                break;

            //space
            case 32:
                overlayVisibleState ? hide() : show();
                event.preventDefault();
                break;

            //escape
            case 27:
                hide();
                break;

            //tab
            case 9:
                if (overlayVisibleState) {
                    const firstFocusableElement = DomHandler.getFirstFocusableElement(overlayRef.current);
                    if (firstFocusableElement) {
                        firstFocusableElement.focus();
                        event.preventDefault();
                    }
                }
                break;

            default:
                break;
        }
    }

    const onSelectAll = (event) => {
        if (props.onSelectAll) {
            props.onSelectAll(event);
        }
        else {
            let value = null;

            if (event.checked) {
                value = [];

                if (visibleOptions) {
                    const selectedOptions = visibleOptions.filter(option => isOptionDisabled(option) && isSelected(option));
                    value = selectedOptions.map(option => getOptionValue(option));
                }
            }
            else if (visibleOptions) {
                const options = visibleOptions.filter(option => !isOptionDisabled(option));

                if (props.optionGroupLabel) {
                    value = [];
                    options.forEach(optionGroup => value = [...value, ...getOptionGroupChildren(optionGroup).filter((option) => !isOptionDisabled(option)).map(option => getOptionValue(option))]);
                }
                else {
                    value = options.map(option => getOptionValue(option));
                }
            }

            updateModel(event.originalEvent, value);
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
                    id: props.id,
                    value
                }
            });
        }
    }

    const onFilterInputChange = (event) => {
        const filter = event.query;
        setFilterState(filter);

        if (props.onFilter) {
            props.onFilter({
                originalEvent: event,
                filter
            });
        }
    }

    const resetFilter = () => {
        setFilterState('');
        props.onFilter && props.onFilter({ filter: '' });
    }

    const scrollInView = () => {
        const highlightItem = DomHandler.findSingle(overlayRef.current, 'li.p-highlight');
        if (highlightItem && highlightItem.scrollIntoView) {
            highlightItem.scrollIntoView({ block: 'nearest', inline: 'start' });
        }
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
        scrollInView();
        callback && callback();
    }

    const onOverlayEntered = () => {
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
        DomHandler.alignOverlay(overlayRef.current, labelRef.current.parentElement, props.appendTo || PrimeReact.appendTo);
    }

    const isClearClicked = (event) => {
        return DomHandler.hasClass(event.target, 'p-multiselect-clear-icon');
    }

    const isPanelClicked = (event) => {
        return overlayRef.current && overlayRef.current.contains(event.target);
    }

    const onCloseClick = (event) => {
        hide();
        inputRef.current.focus();
        event.preventDefault();
        event.stopPropagation();
    }

    const getSelectedOptionIndex = () => {
        if (props.value != null && props.options) {
            if (props.optionGroupLabel) {
                let groupIndex = 0;
                const optionIndex = props.options.findIndex((optionGroup, i) => (groupIndex = i) && findOptionIndexInList(props.value, getOptionGroupChildren(optionGroup)) !== -1)
                return optionIndex !== -1 ? { group: groupIndex, option: optionIndex } : -1;
            }
            else {
                return findOptionIndexInList(props.value, props.options);
            }
        }

        return -1;
    }

    const findOptionIndexInList = (value, list) => {
        return list.findIndex(item => value.some(val => ObjectUtils.equals(val, getOptionValue(item), equalityKey)));
    }

    const isSelected = (option) => {
        if (props.value) {
            const optionValue = getOptionValue(option);
            const isUsed = isOptionValueUsed(option);

            return props.value.some(val => ObjectUtils.equals(isUsed ? val : getOptionValue(val), optionValue, equalityKey));
        }

        return false;
    }

    const getLabelByValue = (val) => {
        let option;
        if (props.options) {
            if (props.optionGroupLabel) {
                for (let optionGroup of props.options) {
                    option = findOptionByValue(val, getOptionGroupChildren(optionGroup));
                    if (option) {
                        break;
                    }
                }
            }
            else {
                option = findOptionByValue(val, props.options);
            }
        }

        return option ? getOptionLabel(option) : null;
    }

    const findOptionByValue = (val, list) => {
        return list.find((option) => ObjectUtils.equals(getOptionValue(option), val, equalityKey));
    }

    const onFocus = (event) => {
        setFocusedState(true);
        props.onFocus && props.onFocus(event);
    }

    const onBlur = (event) => {
        setFocusedState(false);
        props.onBlur && props.onBlur(event);
    }

    const isAllSelected = () => {
        if (props.onSelectAll) {
            return props.selectAll;
        }
        else {
            if (ObjectUtils.isEmpty(visibleOptions)) {
                return false;
            }

            const options = visibleOptions.filter((option) => !isOptionDisabled(option));

            if (props.optionGroupLabel) {
                for (let optionGroup of options) {
                    const visibleOptionsGroupChildren = getOptionGroupChildren(optionGroup).filter((option) => !isOptionDisabled(option));
                    return !(visibleOptionsGroupChildren.some((option) => !isSelected(option)));
                }
            }
            else {
                return !(options.some((option) => !isSelected(option)));
            }
        }

        return true;
    }

    const getOptionLabel = (option) => {
        return props.optionLabel ? ObjectUtils.resolveFieldData(option, props.optionLabel) : (option && option['label'] !== undefined ? option['label'] : option);
    }

    const getOptionValue = (option) => {
        if (props.optionValue) {
            const data = ObjectUtils.resolveFieldData(option, props.optionValue);
            return data !== null ? data : option;
        }

        return option && option['value'] !== undefined ? option['value'] : option;
    }

    const getOptionRenderKey = (option) => {
        return props.dataKey ? ObjectUtils.resolveFieldData(option, props.dataKey) : getOptionLabel(option);
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

    const isOptionDisabled = (option) => {
        if (props.optionDisabled) {
            return ObjectUtils.isFunction(props.optionDisabled) ? props.optionDisabled(option) : ObjectUtils.resolveFieldData(option, props.optionDisabled);
        }

        return (option && option['disabled'] !== undefined ? option['disabled'] : false);
    }

    const isOptionValueUsed = (option) => {
        return props.optionValue || (option && option['value'] !== undefined);
    }

    const checkValidity = () => {
        return inputRef.current.checkValidity();
    }

    const removeChip = (event, item) => {
        const value = props.value.filter(val => !ObjectUtils.equals(val, item, equalityKey));

        updateModel(event, value);
    }

    const getSelectedItemsLabel = () => {
        const pattern = /{(.*?)}/;
        if (pattern.test(props.selectedItemsLabel)) {
            return props.selectedItemsLabel.replace(props.selectedItemsLabel.match(pattern)[0], props.value.length + '');
        }

        return props.selectedItemsLabel;
    }

    const getLabel = () => {
        let label;

        if (!empty && !props.fixedPlaceholder) {
            if (props.maxSelectedLabels && props.value.length > props.maxSelectedLabels) {
                return getSelectedItemsLabel();
            }
            else {
                return props.value.reduce((acc, value, index) => (acc + (index !== 0 ? ',' : '') + getLabelByValue(value)), '');
            }
        }

        return label;
    }

    const getLabelContent = () => {
        if (props.selectedItemTemplate) {
            if (!empty) {
                if (props.maxSelectedLabels && props.value.length > props.maxSelectedLabels) {
                    return getSelectedItemsLabel();
                }
                else {
                    return props.value.map((val, index) => {
                        const item = ObjectUtils.getJSXElement(props.selectedItemTemplate, val);

                        return <React.Fragment key={index}>{item}</React.Fragment>
                    });
                }
            }
            else {
                return ObjectUtils.getJSXElement(props.selectedItemTemplate);
            }
        }
        else {
            if (props.display === 'chip' && !empty) {
                const value = props.value.slice(0, props.maxSelectedLabels || props.value.length);

                return (
                    value.map((val) => {
                        const label = getLabelByValue(val);
                        const icon = !props.disabled && IconUtils.getJSXIcon(props.removeIcon, { className: 'p-multiselect-token-icon', onClick: (e) => removeChip(e, val) }, { props });

                        return (
                            <div className="p-multiselect-token" key={label}>
                                <span className="p-multiselect-token-label">{label}</span>
                                {icon}
                            </div>
                        )
                    })
                )
            }

            return getLabel();
        }
    }

    const getVisibleOptions = () => {
        if (hasFilter) {
            const filterValue = filterState.trim().toLocaleLowerCase(props.filterLocale);
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

    useUpdateEffect(() => {
        if (overlayVisibleState && hasFilter) {
            alignOverlay();
        }
    }, [overlayVisibleState, hasFilter]);

    useUnmountEffect(() => {
        ZIndexUtils.clear(overlayRef.current);

        if (tooltipRef.current) {
            tooltipRef.current.destroy();
            tooltipRef.current = null;
        }
    });

    const createClearIcon = () => {
        if (!empty && props.showClear && !props.disabled) {
            return <i className="p-multiselect-clear-icon pi pi-times" onClick={(e) => updateModel(e, null)}></i>
        }

        return null;
    }

    const createLabel = () => {
        const content = getLabelContent();
        const className = classNames('p-multiselect-label', {
            'p-placeholder': empty && props.placeholder,
            'p-multiselect-label-empty': empty && !props.placeholder && !props.selectedItemTemplate,
            'p-multiselect-items-label': !empty && props.display !== 'chip' && props.value.length > props.maxSelectedLabels
        });

        return (
            <div ref={labelRef} className="p-multiselect-label-container">
                <div className={className}>{content || props.placeholder || 'empty'}</div>
            </div>
        )
    }

    const visibleOptions = getVisibleOptions();

    const className = classNames('p-multiselect p-component p-inputwrapper', {
        'p-multiselect-chip': props.display === 'chip',
        'p-disabled': props.disabled,
        'p-multiselect-clearable': props.showClear && !props.disabled,
        'p-focus': focusedState,
        'p-inputwrapper-filled': ObjectUtils.isNotEmpty(props.value),
        'p-inputwrapper-focus': focusedState || overlayVisibleState
    }, props.className);
    const label = createLabel();
    const clearIcon = createClearIcon();

    return (
        <div ref={elementRef} id={props.id} className={className} onClick={onClick} style={props.style}>
            <div className="p-hidden-accessible">
                <input ref={inputRef} id={props.inputId} name={props.name} readOnly type="text" onFocus={onFocus} onBlur={onBlur} onKeyDown={onKeyDown}
                    role="listbox" aria-labelledby={props.ariaLabelledBy} aria-expanded={overlayVisibleState} disabled={props.disabled} tabIndex={props.tabIndex} />
            </div>
            {label}
            {clearIcon}
            <div className="p-multiselect-trigger">
                {IconUtils.getJSXIcon(props.dropdownIcon, { className: 'p-multiselect-trigger-icon p-c' }, { props })}
            </div>
            <MultiSelectPanel ref={overlayRef} visibleOptions={visibleOptions} {...props} onClick={onPanelClick} onOverlayHide={hide}
                filterValue={filterState} hasFilter={hasFilter} onFilterInputChange={onFilterInputChange} onCloseClick={onCloseClick} onSelectAll={onSelectAll}
                getOptionLabel={getOptionLabel} getOptionRenderKey={getOptionRenderKey} isOptionDisabled={isOptionDisabled}
                getOptionGroupChildren={getOptionGroupChildren} getOptionGroupLabel={getOptionGroupLabel} getOptionGroupRenderKey={getOptionGroupRenderKey}
                isSelected={isSelected} getSelectedOptionIndex={getSelectedOptionIndex} isAllSelected={isAllSelected} onOptionSelect={onOptionSelect} allowOptionSelect={allowOptionSelect} onOptionKeyDown={onOptionKeyDown}
                in={overlayVisibleState} onEnter={onOverlayEnter} onEntered={onOverlayEntered} onExit={onOverlayExit} onExited={onOverlayExited} />
        </div>
    )
}));

MultiSelect.defaultProps = {
    __TYPE: 'MultiSelect',
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
    display: 'comma',
    style: null,
    className: null,
    panelClassName: null,
    panelStyle: null,
    virtualScrollerOptions: null,
    scrollHeight: '200px',
    placeholder: null,
    fixedPlaceholder: false,
    disabled: false,
    showClear: false,
    filter: false,
    filterBy: null,
    filterMatchMode: 'contains',
    filterPlaceholder: null,
    filterLocale: undefined,
    emptyFilterMessage: null,
    resetFilterOnHide: false,
    tabIndex: 0,
    dataKey: null,
    inputId: null,
    appendTo: null,
    tooltip: null,
    tooltipOptions: null,
    maxSelectedLabels: null,
    selectionLimit: null,
    selectedItemsLabel: '{0} items selected',
    ariaLabelledBy: null,
    itemTemplate: null,
    selectedItemTemplate: null,
    panelHeaderTemplate: null,
    panelFooterTemplate: null,
    transitionOptions: null,
    dropdownIcon: 'pi pi-chevron-down',
    removeIcon: 'pi pi-times-circle',
    showSelectAll: true,
    selectAll: false,
    onChange: null,
    onFocus: null,
    onBlur: null,
    onShow: null,
    onHide: null,
    onFilter: null,
    onSelectAll: null
}

MultiSelect.propTypes /* remove-proptypes */ = {
    __TYPE: PropTypes.string,
    id: PropTypes.string,
    inputRef: PropTypes.any,
    name: PropTypes.string,
    value: PropTypes.any,
    options: PropTypes.array,
    optionLabel: PropTypes.string,
    optionValue: PropTypes.string,
    optionDisabled: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    optionGroupLabel: PropTypes.string,
    optionGroupChildren: PropTypes.string,
    optionGroupTemplate: PropTypes.any,
    display: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    panelClassName: PropTypes.string,
    panelStyle: PropTypes.object,
    virtualScrollerOptions: PropTypes.object,
    scrollHeight: PropTypes.string,
    placeholder: PropTypes.string,
    fixedPlaceholder: PropTypes.bool,
    disabled: PropTypes.bool,
    showClear: PropTypes.bool,
    filter: PropTypes.bool,
    filterBy: PropTypes.string,
    filterMatchMode: PropTypes.string,
    filterPlaceholder: PropTypes.string,
    filterLocale: PropTypes.string,
    emptyFilterMessage: PropTypes.any,
    resetFilterOnHide: PropTypes.bool,
    tabIndex: PropTypes.number,
    dataKey: PropTypes.string,
    inputId: PropTypes.string,
    appendTo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    tooltip: PropTypes.string,
    tooltipOptions: PropTypes.object,
    maxSelectedLabels: PropTypes.number,
    selectionLimit: PropTypes.number,
    selectedItemsLabel: PropTypes.string,
    ariaLabelledBy: PropTypes.string,
    itemTemplate: PropTypes.any,
    selectedItemTemplate: PropTypes.any,
    panelHeaderTemplate: PropTypes.any,
    panelFooterTemplate: PropTypes.any,
    transitionOptions: PropTypes.object,
    dropdownIcon: PropTypes.string,
    removeIcon: PropTypes.any,
    showSelectAll: PropTypes.bool,
    selectAll: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    onFilter: PropTypes.func,
    onSelectAll: PropTypes.func
}
