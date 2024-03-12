import * as React from 'react';
import { FilterService, PrimeReactContext, localeOption } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect } from '../hooks/Hooks';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, ObjectUtils, UniqueComponentId } from '../utils/Utils';
import { VirtualScroller } from '../virtualscroller/VirtualScroller';
import { ListBoxBase } from './ListBoxBase';
import { ListBoxHeader } from './ListBoxHeader';
import { ListBoxItem } from './ListBoxItem';

export const ListBox = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = ListBoxBase.getProps(inProps, context);
        const [focusedOptionIndex, setFocusedOptionIndex] = React.useState(null);
        const searchTimeout = React.useRef(null);
        const firstHiddenFocusableElement = React.useRef(null);
        const lastHiddenFocusableElement = React.useRef(null);
        const [startRangeIndex, setStartRangeIndex] = React.useState(-1);
        const [filterValueState, setFilterValueState] = React.useState('');
        const elementRef = React.useRef(null);
        const virtualScrollerRef = React.useRef(null);
        const id = React.useRef(null);
        const listRef = React.useRef(null);
        const optionTouched = React.useRef(false);
        const filteredValue = (props.onFilterValueChange ? props.filterValue : filterValueState) || '';
        const hasFilter = filteredValue && filteredValue.trim().length > 0;

        const metaData = {
            props,
            state: {
                filterValue: filteredValue
            }
        };

        const ptCallbacks = ListBoxBase.setMetaData(metaData);

        useHandleStyle(ListBoxBase.css.styles, ptCallbacks.isUnstyled, { name: 'listbox' });

        const onOptionSelect = (event, option, index = -1) => {
            if (props.disabled || isOptionDisabled(option)) {
                return;
            }

            props.multiple ? onOptionSelectMultiple(event.originalEvent, option) : onOptionSelectSingle(event.originalEvent, option);
            optionTouched.current = false;
            index !== -1 && setFocusedOptionIndex(index);
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
                    stopPropagation: () => {
                        event.stopPropagation();
                    },
                    preventDefault: () => {
                        event.preventDefault();
                    },
                    target: {
                        name: props.name,
                        id: props.id,
                        value
                    }
                });
            }
        };

        const hasSelectedOption = () => {
            return ObjectUtils.isNotEmpty(props.value);
        };

        const isOptionGroup = (option) => {
            return props.optionGroupLabel && option.optionGroup && option.group;
        };

        const isValidOption = (option) => {
            return ObjectUtils.isNotEmpty(option) && !(isOptionDisabled(option) || isOptionGroup(option));
        };

        const isValidSelectedOption = (option) => {
            return isValidOption(option) && isSelected(option);
        };

        const findFirstOptionIndex = () => {
            return visibleOptions.findIndex((option) => isValidOption(option));
        };

        const findLastOptionIndex = () => {
            return ObjectUtils.findLastIndex(visibleOptions, (option) => isValidOption(option));
        };

        const findNextOptionIndex = (index) => {
            const matchedOptionIndex = index < visibleOptions.length - 1 ? visibleOptions.slice(index + 1).findIndex((option) => isValidOption(option)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
        };

        const findPrevOptionIndex = (index) => {
            const matchedOptionIndex = index > 0 ? ObjectUtils.findLastIndex(visibleOptions.slice(0, index), (option) => isValidOption(option)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex : index;
        };

        const focusedOptionId = () => {
            return focusedOptionIndex !== -1 ? `${id.current}_${focusedOptionIndex}` : null;
        };

        const findNearestSelectedOptionIndex = (index, firstCheckUp = false) => {
            let matchedOptionIndex = -1;

            if (hasSelectedOption) {
                if (firstCheckUp) {
                    matchedOptionIndex = findPrevSelectedOptionIndex(index);
                    matchedOptionIndex = matchedOptionIndex === -1 ? findNextSelectedOptionIndex(index) : matchedOptionIndex;
                } else {
                    matchedOptionIndex = findNextSelectedOptionIndex(index);
                    matchedOptionIndex = matchedOptionIndex === -1 ? findPrevSelectedOptionIndex(index) : matchedOptionIndex;
                }
            }

            return matchedOptionIndex > -1 ? matchedOptionIndex : index;
        };

        const isOptionMatched = (option) => {
            return isValidOption(option) && getOptionLabel(option)?.toLocaleLowerCase(props.filterLocale).startsWith(searchValue.toLocaleLowerCase(props.filterLocale));
        };

        const searchOptions = (event, char) => {
            searchValue = (searchValue || '') + char;

            let optionIndex = -1;

            if (ObjectUtils.isNotEmpty(searchValue)) {
                if (focusedOptionIndex !== -1) {
                    optionIndex = visibleOptions.slice(focusedOptionIndex).findIndex((option) => isOptionMatched(option));
                    optionIndex = optionIndex === -1 ? visibleOptions.slice(0, focusedOptionIndex).findIndex((option) => isOptionMatched(option)) : optionIndex + focusedOptionIndex;
                } else {
                    optionIndex = visibleOptions.findIndex((option) => isOptionMatched(option));
                }

                if (optionIndex === -1 && focusedOptionIndex === -1) {
                    optionIndex = findFirstFocusedOptionIndex();
                }

                if (optionIndex !== -1) {
                    changeFocusedOptionIndex(event, optionIndex);
                }
            }

            if (searchTimeout.current) {
                clearTimeout(searchTimeout.current);
            }

            searchTimeout.current = setTimeout(() => {
                searchValue = '';
                searchTimeout.current = null;
            }, 500);
        };

        const findNextSelectedOptionIndex = (index) => {
            const matchedOptionIndex = hasSelectedOption && index < visibleOptions.length - 1 ? visibleOptions.slice(index + 1).findIndex((option) => isValidSelectedOption(option)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
        };

        const findPrevSelectedOptionIndex = (index) => {
            const matchedOptionIndex = hasSelectedOption && index > 0 ? ObjectUtils.findLastIndex(visibleOptions.slice(0, index), (option) => isValidSelectedOption(option)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
        };

        const onOptionSelectRange = (event, start = -1, end = -1) => {
            start === -1 && (start = findNearestSelectedOptionIndex(end, true));
            end === -1 && (end = findNearestSelectedOptionIndex(start));

            if (start !== -1 && end !== -1) {
                const rangeStart = Math.min(start, end);
                const rangeEnd = Math.max(start, end);
                const value = visibleOptions
                    .slice(rangeStart, rangeEnd + 1)
                    .filter((option) => isValidOption(option))
                    .map((option) => getOptionValue(option));

                updateModel(event, value);
            }
        };

        const findFirstFocusedOptionIndex = () => {
            const selectedIndex = findFirstSelectedOptionIndex();

            return selectedIndex < 0 ? findFirstOptionIndex() : selectedIndex;
        };

        const changeFocusedOptionIndex = (event, index) => {
            if (focusedOptionIndex !== index) {
                setFocusedOptionIndex(index);
                scrollInView();

                if (event && props.selectOnFocus && !props.multiple) {
                    onOptionSelect(event, visibleOptions[index]);
                }
            }
        };

        const onArrowDownKey = (event) => {
            const optionIndex = focusedOptionIndex !== -1 ? findNextOptionIndex(focusedOptionIndex) : findFirstFocusedOptionIndex();

            if (props.multiple && event.shiftKey) {
                onOptionSelectRange(event, startRangeIndex, optionIndex);
            }

            changeFocusedOptionIndex(event, optionIndex);
            event.preventDefault();
        };

        const onArrowUpKey = (event) => {
            const optionIndex = focusedOptionIndex !== -1 ? findPrevOptionIndex(focusedOptionIndex) : findLastFocusedOptionIndex();

            if (props.multiple && event.shiftKey) {
                onOptionSelectRange(event, optionIndex, startRangeIndex);
            }

            changeFocusedOptionIndex(event, optionIndex);
            event.preventDefault();
        };

        const onEnterKey = (event) => {
            if (focusedOptionIndex !== -1) {
                if (props.multiple && event.shiftKey) onOptionSelectRange(event, focusedOptionIndex);
                else onOptionSelect(event, visibleOptions[focusedOptionIndex]);
            }

            event.preventDefault();
        };

        const onSpaceKey = (event) => {
            onEnterKey(event);
        };

        const onShiftKey = () => {
            setStartRangeIndex(focusedOptionIndex);
        };

        const onHomeKey = (event, pressedInInputText = false) => {
            if (pressedInInputText) {
                event.currentTarget.setSelectionRange(0, 0);
                setFocusedOptionIndex(-1);
            } else {
                let metaKey = event.metaKey || event.ctrlKey;
                let optionIndex = findFirstOptionIndex();

                if (props.multiple && event.shiftKey && metaKey) {
                    onOptionSelectRange(event, optionIndex, startRangeIndex);
                }

                changeFocusedOptionIndex(event, optionIndex);
            }

            event.preventDefault();
        };

        const onEndKey = (event, pressedInInputText = false) => {
            if (pressedInInputText) {
                const target = event.currentTarget;
                const len = target.value.length;

                target.setSelectionRange(len, len);
                focusedOptionIndex = -1;
            } else {
                let metaKey = event.metaKey || event.ctrlKey;
                let optionIndex = findLastOptionIndex();

                if (props.multiple && event.shiftKey && metaKey) {
                    onOptionSelectRange(event, startRangeIndex, optionIndex);
                }

                changeFocusedOptionIndex(event, optionIndex);
            }

            event.preventDefault();
        };

        const onPageUpKey = (event) => {
            scrollInView(0);
            event.preventDefault();
        };

        const onPageDownKey = (event) => {
            scrollInView(visibleOptions.length - 1);
            event.preventDefault();
        };

        const onKeyDown = (event) => {
            const metaKey = event.metaKey || event.ctrlKey;

            switch (event.code) {
                case 'ArrowDown':
                    onArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    onArrowUpKey(event);
                    break;

                case 'Home':
                    onHomeKey(event);
                    break;

                case 'End':
                    onEndKey(event);
                    break;

                case 'PageDown':
                    onPageDownKey(event);
                    break;

                case 'PageUp':
                    onPageUpKey(event);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                case 'Space':
                    onSpaceKey(event);
                    event.preventDefault();
                    break;

                case 'Tab':
                    // NOOP
                    break;

                case 'ShiftLeft':
                case 'ShiftRight':
                    onShiftKey(event);
                    break;

                default:
                    if (props.multiple && event.code === 'KeyA' && metaKey) {
                        const value = visibleOptions.filter((option) => isValidOption(option)).map((option) => getOptionValue(option));

                        updateModel(event, value);

                        event.preventDefault();
                        break;
                    }

                    if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
                        searchOptions(event, event.key);
                        event.preventDefault();
                    }

                    break;
            }
        };

        const scrollInView = (index = -1) => {
            setTimeout(() => {
                const idx = index !== -1 ? `${id.current}_${index}` : focusedOptionId();
                const element = listRef.current.querySelector(`li[id="${idx}"]`);

                if (element) {
                    element.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
                } else if (props.virtualScrollerOptions) {
                    virtualScrollerRef.current && virtualScrollerRef.current.scrollToIndex(index !== -1 ? index : props.focusedOptionIndex);
                }
            }, 0);
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
                    stopPropagation: () => {
                        event.stopPropagation();
                    },
                    preventDefault: () => {
                        event.preventDefault();
                    },
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

        const onFirstHiddenFocus = () => {
            DomHandler.focus(listRef.current);

            const firstFocusableEl = DomHandler.getFirstFocusableElement(elementRef.current, ':not([data-p-hidden-focusable="true"])');

            lastHiddenFocusableElement.current.tabIndex = DomHandler.isElement(firstFocusableEl) ? undefined : -1;
            firstHiddenFocusableElement.current.tabIndex = -1;
            changeFocusedOptionIndex(null, 0);
        };

        const onLastHiddenFocus = (event) => {
            const relatedTarget = event.relatedTarget;

            if (relatedTarget === listRef.current) {
                const firstFocusableEl = DomHandler.getFirstFocusableElement(elementRef.current, ':not([data-p-hidden-focusable="true"])');

                DomHandler.focus(firstFocusableEl);
                firstHiddenFocusableElement.current.tabIndex = undefined;
            } else {
                DomHandler.focus(firstHiddenFocusableElement.current);
            }

            lastHiddenFocusableElement.current.tabIndex = -1;
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
            id.current = UniqueComponentId();
        });

        const createHeader = () => {
            return props.filter ? (
                <ListBoxHeader
                    hostName="ListBox"
                    filter={filteredValue}
                    filterIcon={props.filterIcon}
                    onFilter={onFilter}
                    resetFilter={resetFilter}
                    filterTemplate={props.filterTemplate}
                    disabled={props.disabled}
                    filterPlaceholder={props.filterPlaceholder}
                    filterInputProps={props.filterInputProps}
                    ptCallbacks={ptCallbacks}
                    metaData={metaData}
                />
            ) : null;
        };

        const createGroupChildren = (optionGroup, style) => {
            const groupChildren = getOptionGroupChildren(optionGroup);

            return groupChildren.map((option, j) => {
                const optionLabel = getOptionLabel(option);
                const optionKey = j + '_' + getOptionRenderKey(option);
                const disabled = isOptionDisabled(option);

                return (
                    <ListBoxItem
                        id={id.current + '_' + j}
                        hostName="ListBox"
                        optionKey={optionKey}
                        key={optionKey}
                        label={optionLabel}
                        option={option}
                        style={style}
                        template={props.itemTemplate}
                        selected={isSelected(option)}
                        onClick={onOptionSelect}
                        index={j}
                        focusedOptionIndex={focusedOptionIndex}
                        onTouchEnd={onOptionTouchEnd}
                        disabled={disabled}
                        ptCallbacks={ptCallbacks}
                        metaData={metaData}
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

                const itemGroupProps = mergeProps(
                    {
                        className: ptCallbacks.cx('itemGroup'),
                        style: ptCallbacks.sx('itemGroup', { scrollerOptions }),
                        role: 'group'
                    },
                    ptCallbacks.ptm('itemGroup')
                );

                return (
                    <React.Fragment key={key}>
                        <li {...itemGroupProps}>{groupContent}</li>
                        {groupChildrenContent}
                    </React.Fragment>
                );
            } else {
                const optionLabel = getOptionLabel(option);
                const optionKey = index + '_' + getOptionRenderKey(option);
                const disabled = isOptionDisabled(option);

                return (
                    <ListBoxItem
                        id={id.current + '_' + index}
                        hostName="ListBox"
                        optionKey={optionKey}
                        key={optionKey}
                        label={optionLabel}
                        index={index}
                        focusedOptionIndex={focusedOptionIndex}
                        option={option}
                        style={style}
                        template={props.itemTemplate}
                        selected={isSelected(option)}
                        onClick={onOptionSelect}
                        onTouchEnd={onOptionTouchEnd}
                        disabled={disabled}
                        ptCallbacks={ptCallbacks}
                        metaData={metaData}
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
            const emptyMessageProps = mergeProps(
                {
                    className: ptCallbacks.cx('emptyMessage')
                },
                ptCallbacks.ptm('emptyMessage')
            );

            const message = ObjectUtils.getJSXElement(emptyMessage, props) || localeOption(isFilter ? 'emptyFilterMessage' : 'emptyMessage');

            return <li {...emptyMessageProps}>{message}</li>;
        };

        const createList = () => {
            if (props.virtualScrollerOptions) {
                const virtualScrollerProps = {
                    ...props.virtualScrollerOptions,
                    ...{
                        items: visibleOptions,
                        onLazyLoad: (event) => props.virtualScrollerOptions.onLazyLoad({ ...event, ...{ filter: visibleOptions } }),
                        itemTemplate: (item, options) => item && createItem(item, options.index, options),
                        contentTemplate: (options) => {
                            const listProps = mergeProps(
                                {
                                    ref: listRef,
                                    style: ptCallbacks.sx('list', { options }),
                                    className: ptCallbacks.cx('list', { options }),
                                    role: 'listbox',
                                    tabIndex: '-1',
                                    'aria-multiselectable': props.multiple,
                                    ...ariaProps
                                },
                                ptCallbacks.ptm('list')
                            );

                            return <ul {...listProps}>{options.children}</ul>;
                        }
                    }
                };

                return <VirtualScroller ref={virtualScrollerRef} {...virtualScrollerProps} pt={ptCallbacks.ptm('virtualScroller')} />;
            } else {
                const items = createItems();

                const listProps = mergeProps(
                    {
                        ref: listRef,
                        className: ptCallbacks.cx('list'),
                        role: 'listbox',
                        'aria-multiselectable': props.multiple,
                        tabIndex: '-1',
                        onKeyDown: onKeyDown,
                        ...ariaProps
                    },
                    ptCallbacks.ptm('list')
                );

                return <ul {...listProps}>{items}</ul>;
            }
        };

        const visibleOptions = getVisibleOptions();

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = ListBoxBase.getOtherProps(props);
        const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
        const list = createList();
        const header = createHeader();

        const wrapperProps = mergeProps(
            {
                className: ptCallbacks.cx('wrapper'),
                style: props.listStyle
            },
            ptCallbacks.ptm('wrapper')
        );

        const rootProps = mergeProps(
            {
                ref: elementRef,
                id: props.id,
                className: ptCallbacks.cx('root'),
                style: props.style
            },
            ListBoxBase.getOtherProps(props),
            ptCallbacks.ptm('root')
        );

        const hiddenFirstElement = mergeProps(
            {
                ref: firstHiddenFocusableElement,
                role: 'presentation',
                'aria-hidden': 'true',
                className: 'p-hidden-accessible p-hidden-focusable',
                tabIndex: !props.disabled ? props.tabIndex : -1,
                onFocus: onFirstHiddenFocus,
                'data-p-hidden-accessible': true,
                'data-p-hidden-focusable': true
            },
            ptCallbacks.ptm('hiddenFirstFocusableEl')
        );

        const hiddenLastElement = mergeProps(
            {
                ref: lastHiddenFocusableElement,
                role: 'presentation',
                'aria-hidden': 'true',
                className: 'p-hidden-accessible p-hidden-focusable',
                tabIndex: !props.disabled ? props.tabIndex : -1,
                onFocus: onLastHiddenFocus,
                'data-p-hidden-accessible': true,
                'data-p-hidden-focusable': true
            },
            ptCallbacks.ptm('hiddenLastFocusableEl')
        );

        return (
            <>
                <div {...rootProps}>
                    <span {...hiddenFirstElement}></span>
                    {header}
                    <div {...wrapperProps}>{list}</div>
                    <span {...hiddenLastElement}></span>
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} pt={ptCallbacks.ptm('tooltip')} {...props.tooltipOptions} />}
            </>
        );
    })
);

ListBox.displayName = 'ListBox';
