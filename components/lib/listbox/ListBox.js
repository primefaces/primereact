import * as React from 'react';
import { FilterService, localeOption } from '../api/Api';
import { useMountEffect } from '../hooks/Hooks';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { VirtualScroller } from '../virtualscroller/VirtualScroller';
import { ListBoxBase } from './ListBoxBase';
import { ListBoxHeader } from './ListBoxHeader';
import { ListBoxItem } from './ListBoxItem';

export const ListBox = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = ListBoxBase.getProps(inProps);

        const [filterValueState, setFilterValueState] = React.useState('');
        const elementRef = React.useRef(null);
        const virtualScrollerRef = React.useRef(null);
        const optionTouched = React.useRef(false);
        const filteredValue = (props.onFilterValueChange ? props.filterValue : filterValueState) || '';
        const hasFilter = filteredValue && filteredValue.trim().length > 0;

        const onOptionSelect = (event) => {
            const option = event.option;

            if (props.disabled || isOptionDisabled(option)) {
                return;
            }

            props.multiple ? onOptionSelectMultiple(event.originalEvent, option) : onOptionSelectSingle(event.originalEvent, option);
            optionTouched.current = false;
        };

        const onOptionTouchEnd = () => {
            if (props.disabled) {
                return;
            }

            optionTouched.current = true;
        };

        const onOptionSelectSingle = (event, option) => {
            let selected = isSelected(option);
            let valueChanged = false;
            let value = null;
            let metaSelection = optionTouched.current ? false : props.metaKeySelection;

            if (metaSelection) {
                let metaKey = event.metaKey || event.ctrlKey;

                if (selected) {
                    if (metaKey) {
                        value = null;
                        valueChanged = true;
                    }
                } else {
                    value = getOptionValue(option);
                    valueChanged = true;
                }
            } else {
                value = selected ? null : getOptionValue(option);
                valueChanged = true;
            }

            if (valueChanged) {
                updateModel(event, value);
            }
        };

        const onOptionSelectMultiple = (event, option) => {
            let selected = isSelected(option);
            let valueChanged = false;
            let value = null;
            let metaSelection = optionTouched ? false : props.metaKeySelection;

            if (metaSelection) {
                let metaKey = event.metaKey || event.ctrlKey;

                if (selected) {
                    if (metaKey) value = removeOption(option);
                    else value = [getOptionValue(option)];

                    valueChanged = true;
                } else {
                    value = metaKey ? props.value || [] : [];
                    value = [...value, getOptionValue(option)];
                    valueChanged = true;
                }
            } else {
                if (selected) value = removeOption(option);
                else value = [...(props.value || []), getOptionValue(option)];

                valueChanged = true;
            }

            if (valueChanged) {
                props.onChange({
                    originalEvent: event,
                    value,
                    stopPropagation: () => {},
                    preventDefault: () => {},
                    target: {
                        name: props.name,
                        id: props.id,
                        value
                    }
                });
            }
        };

        const onFilter = (event) => {
            virtualScrollerRef.current && virtualScrollerRef.current.scrollToIndex(0);

            const { originalEvent, value } = event;

            if (props.onFilterValueChange) {
                props.onFilterValueChange({
                    originalEvent,
                    value
                });
            } else {
                setFilterValueState(value);
            }
        };

        const resetFilter = () => {
            setFilterValueState('');
            props.onFilter && props.onFilter({ filter: '' });
        };

        const updateModel = (event, value) => {
            if (props.onChange) {
                props.onChange({
                    originalEvent: event,
                    value,
                    stopPropagation: () => {},
                    preventDefault: () => {},
                    target: {
                        name: props.name,
                        id: props.id,
                        value
                    }
                });
            }
        };

        const removeOption = (option) => {
            return props.value.filter((val) => !ObjectUtils.equals(val, getOptionValue(option), props.dataKey));
        };

        const getSelectedOptionIndex = () => {
            if (props.value != null && visibleOptions) {
                if (props.optionGroupLabel) {
                    for (let i = 0; i < visibleOptions.length; i++) {
                        let selectedOptionIndex = findOptionIndexInList(props.value, getOptionGroupChildren(visibleOptions[i]));

                        if (selectedOptionIndex !== -1) {
                            return { group: i, option: selectedOptionIndex };
                        }
                    }
                } else {
                    return findOptionIndexInList(props.value, visibleOptions);
                }
            }

            return -1;
        };

        const equalityKey = () => {
            return props.optionValue ? null : props.dataKey;
        };

        const findOptionIndexInList = (value, list) => {
            const key = equalityKey();

            return list.findIndex((item) => ObjectUtils.equals(value, getOptionValue(item), key));
        };

        const isSelected = (option) => {
            const optionValue = getOptionValue(option);
            const key = equalityKey();

            return props.multiple && props.value ? props.value.some((val) => ObjectUtils.equals(val, optionValue, key)) : ObjectUtils.equals(props.value, optionValue, key);
        };

        const filter = (option) => {
            const filterValue = filteredValue.trim().toLocaleLowerCase(props.filterLocale);
            const optionLabel = getOptionLabel(option).toLocaleLowerCase(props.filterLocale);

            return optionLabel.indexOf(filterValue) > -1;
        };

        const getOptionLabel = (option) => {
            return props.optionLabel ? ObjectUtils.resolveFieldData(option, props.optionLabel) : option && option['label'] !== undefined ? option['label'] : option;
        };

        const getOptionValue = (option) => {
            return props.optionValue ? ObjectUtils.resolveFieldData(option, props.optionValue) : option && option['value'] !== undefined ? option['value'] : option;
        };

        const getOptionRenderKey = (option) => {
            return props.dataKey ? ObjectUtils.resolveFieldData(option, props.dataKey) : getOptionLabel(option);
        };

        const isOptionDisabled = (option) => {
            if (props.optionDisabled) {
                return ObjectUtils.isFunction(props.optionDisabled) ? props.optionDisabled(option) : ObjectUtils.resolveFieldData(option, props.optionDisabled);
            }

            return option && option['disabled'] !== undefined ? option['disabled'] : false;
        };

        const getOptionGroupRenderKey = (optionGroup) => {
            return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
        };

        const getOptionGroupLabel = (optionGroup) => {
            return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupLabel);
        };

        const getOptionGroupChildren = (optionGroup) => {
            return ObjectUtils.resolveFieldData(optionGroup, props.optionGroupChildren);
        };

        const getVisibleOptions = () => {
            if (hasFilter) {
                const filterValue = filteredValue.trim().toLocaleLowerCase(props.filterLocale);
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
                } else {
                    return FilterService.filter(props.options, searchFields, filterValue, props.filterMatchMode, props.filterLocale);
                }
            } else {
                return props.options;
            }
        };

        const scrollToSelectedIndex = () => {
            if (virtualScrollerRef.current) {
                const selectedIndex = getSelectedOptionIndex();

                if (selectedIndex !== -1) {
                    setTimeout(() => virtualScrollerRef.current.scrollToIndex(selectedIndex), 0);
                }
            }
        };

        React.useImperativeHandle(ref, () => ({
            props,
            focus: () => DomHandler.focusFirstElement(elementRef.current),
            getElement: () => elementRef.current,
            getVirtualScroller: () => virtualScrollerRef.current
        }));

        useMountEffect(() => {
            scrollToSelectedIndex();
        });

        const createHeader = () => {
            return props.filter ? (
                <ListBoxHeader
                    filter={filteredValue}
                    onFilter={onFilter}
                    resetFilter={resetFilter}
                    filterTemplate={props.filterTemplate}
                    disabled={props.disabled}
                    filterPlaceholder={props.filterPlaceholder}
                    filterInputProps={props.filterInputProps}
                />
            ) : null;
        };

        const createGroupChildren = (optionGroup, style) => {
            const groupChildren = getOptionGroupChildren(optionGroup);

            return groupChildren.map((option, j) => {
                const optionLabel = getOptionLabel(option);
                const optionKey = j + '_' + getOptionRenderKey(option);
                const disabled = isOptionDisabled(option);
                const tabIndex = disabled ? null : props.tabIndex || 0;

                return (
                    <ListBoxItem
                        key={optionKey}
                        label={optionLabel}
                        option={option}
                        style={style}
                        template={props.itemTemplate}
                        selected={isSelected(option)}
                        onClick={onOptionSelect}
                        onTouchEnd={onOptionTouchEnd}
                        tabIndex={tabIndex}
                        disabled={disabled}
                    />
                );
            });
        };

        const createItem = (option, index, scrollerOptions = {}) => {
            const style = { height: scrollerOptions.props ? scrollerOptions.props.itemSize : undefined };

            if (props.optionGroupLabel) {
                const groupContent = props.optionGroupTemplate ? ObjectUtils.getJSXElement(props.optionGroupTemplate, option, index) : getOptionGroupLabel(option);
                const groupChildrenContent = createGroupChildren(option, style);
                const key = index + '_' + getOptionGroupRenderKey(option);

                return (
                    <React.Fragment key={key}>
                        <li className="p-listbox-item-group" style={style} role="group">
                            {groupContent}
                        </li>
                        {groupChildrenContent}
                    </React.Fragment>
                );
            } else {
                const optionLabel = getOptionLabel(option);
                const optionKey = index + '_' + getOptionRenderKey(option);
                const disabled = isOptionDisabled(option);
                const tabIndex = disabled ? null : props.tabIndex || 0;

                return (
                    <ListBoxItem
                        key={optionKey}
                        label={optionLabel}
                        option={option}
                        style={style}
                        template={props.itemTemplate}
                        selected={isSelected(option)}
                        onClick={onOptionSelect}
                        onTouchEnd={onOptionTouchEnd}
                        tabIndex={tabIndex}
                        disabled={disabled}
                    />
                );
            }
        };

        const createItems = () => {
            if (ObjectUtils.isNotEmpty(visibleOptions)) {
                return visibleOptions.map(createItem);
            } else if (hasFilter) {
                return createEmptyMessage(props.emptyFilterMessage, true);
            }

            return createEmptyMessage(props.emptyMessage);
        };

        const createEmptyMessage = (emptyMessage, isFilter) => {
            const message = ObjectUtils.getJSXElement(emptyMessage, props) || localeOption(isFilter ? 'emptyFilterMessage' : 'emptyMessage');

            return <li className="p-listbox-empty-message">{message}</li>;
        };

        const createList = () => {
            if (props.virtualScrollerOptions) {
                const virtualScrollerProps = {
                    ...props.virtualScrollerOptions,
                    ...{
                        items: visibleOptions,
                        onLazyLoad: (event) => props.virtualScrollerOptions.onLazyLoad({ ...event, ...{ filter: visibleOptions } }),
                        itemTemplate: (item, options) => item && createItem(item, options.index, options),
                        contentTemplate: (option) => {
                            const className = classNames('p-listbox-list', option.className);

                            return (
                                <ul ref={option.contentRef} className={className} role="listbox" aria-multiselectable={props.multiple} {...ariaProps}>
                                    {option.children}
                                </ul>
                            );
                        }
                    }
                };

                return <VirtualScroller ref={virtualScrollerRef} {...virtualScrollerProps} />;
            } else {
                const items = createItems();

                return (
                    <ul className="p-listbox-list" role="listbox" aria-multiselectable={props.multiple} {...ariaProps}>
                        {items}
                    </ul>
                );
            }
        };

        const visibleOptions = getVisibleOptions();

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = ListBoxBase.getOtherProps(props);
        const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
        const className = classNames(
            'p-listbox p-component',
            {
                'p-disabled': props.disabled
            },
            props.className
        );
        const listClassName = classNames('p-listbox-list-wrapper', props.listClassName);
        const list = createList();
        const header = createHeader();

        return (
            <>
                <div ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps}>
                    {header}
                    <div className={listClassName} style={props.listStyle}>
                        {list}
                    </div>
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
            </>
        );
    })
);

ListBox.displayName = 'ListBox';
