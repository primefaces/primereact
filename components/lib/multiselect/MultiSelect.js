import * as React from 'react';
import PrimeReact, { FilterService, PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useMergeProps, useMountEffect, useOverlayListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { SpinnerIcon } from '../icons/spinner';
import { TimesIcon } from '../icons/times';
import { TimesCircleIcon } from '../icons/timescircle';
import { OverlayService } from '../overlayservice/OverlayService';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, IconUtils, ObjectUtils, ZIndexUtils, classNames } from '../utils/Utils';
import { MultiSelectBase } from './MultiSelectBase';
import { MultiSelectPanel } from './MultiSelectPanel';

export const MultiSelect = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = MultiSelectBase.getProps(inProps, context);
        const [focusedOptionIndex, setFocusedOptionIndex] = React.useState(null);
        const [clicked, setClicked] = React.useState(false);
        const [filterState, setFilterState] = React.useState('');
        const [startRangeIndex, setStartRangeIndex] = React.useState(-1);
        const [focusedState, setFocusedState] = React.useState(false);
        const [overlayVisibleState, setOverlayVisibleState] = React.useState(props.inline);
        const elementRef = React.useRef(null);
        const searchValue = React.useRef(null);
        const searchTimeout = React.useRef(null);
        const firstHiddenFocusableElementOnOverlay = React.useRef(null);
        const lastHiddenFocusableElementOnOverlay = React.useRef(null);
        const inputRef = React.useRef(props.inputRef);
        const labelRef = React.useRef(null);
        const overlayRef = React.useRef(null);
        const hasFilter = filterState && filterState.trim().length > 0;
        const empty = ObjectUtils.isEmpty(props.value);
        const equalityKey = props.optionValue ? null : props.dataKey;
        const metaData = {
            props,
            state: {
                filterState: filterState,
                focused: focusedState,
                overlayVisible: overlayVisibleState
            }
        };
        const { ptm, cx, sx, isUnstyled } = MultiSelectBase.setMetaData(metaData);

        useHandleStyle(MultiSelectBase.css.styles, isUnstyled, { name: 'multiselect' });
        const [bindOverlayListener, unbindOverlayListener] = useOverlayListener({
            target: elementRef,
            overlay: overlayRef,
            listener: (event, { type, valid }) => {
                if (valid) {
                    if (type === 'outside') {
                        !isClearClicked(event) && !isSelectAllClicked(event) && hide();
                    } else {
                        hide();
                    }
                }
            },
            when: overlayVisibleState
        });

        const onFirstHiddenFocus = (event) => {
            const focusableEl = event.relatedTarget === inputRef.current ? DomHandler.getFirstFocusableElement(overlayRef.current, ':not([data-p-hidden-focusable="true"])') : inputRef.current;

            DomHandler.focus(focusableEl);
        };

        const onLastHiddenFocus = (event) => {
            const focusableEl = event.relatedTarget === inputRef.current ? DomHandler.getLastFocusableElement(overlayRef.current, ':not([data-p-hidden-focusable="true"])') : inputRef.current;

            DomHandler.focus(focusableEl);
        };

        const onPanelClick = (event) => {
            OverlayService.emit('overlay-click', {
                originalEvent: event,
                target: elementRef.current
            });
        };

        const allowOptionSelect = () => {
            return !props.selectionLimit || !props.value || (props.value && props.value.length < props.selectionLimit);
        };

        const findNextSelectedOptionIndex = (index) => {
            const matchedOptionIndex = hasSelectedOption && index < visibleOptions.length - 1 ? visibleOptions.slice(index + 1).findIndex((option) => isValidSelectedOption(option)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
        };

        const findPrevSelectedOptionIndex = (index) => {
            const matchedOptionIndex = hasSelectedOption && index > 0 ? ObjectUtils.findLastIndex(visibleOptions.slice(0, index), (option) => isValidSelectedOption(option)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
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

        const onOptionSelect = (event, option, index = -1) => {
            if (props.disabled || isOptionDisabled(option)) {
                return;
            }

            let selected = isSelected(option);
            let value = null;

            if (selected) value = props.value.filter((val) => !ObjectUtils.equals(val, getOptionValue(option), equalityKey));
            else value = [...(props.value || []), getOptionValue(option)];

            updateModel(event, value);
            index !== -1 && setFocusedOptionIndex(index);
        };

        const findNextItem = (item) => {
            const nextItem = item.nextElementSibling;

            return nextItem ? (DomHandler.getAttribute(nextItem, 'data-p-disabled') === true || DomHandler.getAttribute(nextItem, 'data-pc-section') === 'itemgroup' ? findNextItem(nextItem) : nextItem) : null;
        };

        const findPrevItem = (item) => {
            const prevItem = item.previousElementSibling;

            return prevItem ? (DomHandler.getAttribute(prevItem, 'data-p-disabled') === true || DomHandler.getAttribute(prevItem, 'data-pc-section') === 'itemgroup' ? findPrevItem(prevItem) : prevItem) : null;
        };

        const onClick = (event) => {
            if (!props.inline && !props.disabled && !props.loading && !isPanelClicked(event) && DomHandler.getAttribute(event.target, 'data-pc-section') !== 'removetokenicon' && !isClearClicked(event)) {
                overlayVisibleState ? hide() : show();
                DomHandler.focus(inputRef.current);
                event.preventDefault();
            }

            setClicked(true);
        };

        const onArrowDownKey = (event) => {
            if (!overlayVisibleState) {
                show();
                props.editable && changeFocusedOptionIndex(event, findSelectedOptionIndex());
            } else {
                const optionIndex = focusedOptionIndex !== -1 ? findNextOptionIndex(focusedOptionIndex) : clicked ? findFirstOptionIndex() : findFirstFocusedOptionIndex();

                if (event.shiftKey) {
                    onOptionSelectRange(event, startRangeIndex, optionIndex);
                }

                changeFocusedOptionIndex(event, optionIndex);
            }

            event.preventDefault();
        };

        const onArrowUpKey = (event, pressedInInputText = false) => {
            if (event.altKey && !pressedInInputText) {
                if (focusedOptionIndex !== -1) {
                    onOptionSelect(event, visibleOptions[focusedOptionIndex]);
                }

                overlayVisibleState && hide();
                event.preventDefault();
            } else {
                const optionIndex = focusedOptionIndex !== -1 ? findPrevOptionIndex(focusedOptionIndex) : clicked ? findLastOptionIndex() : findLastFocusedOptionIndex();

                changeFocusedOptionIndex(event, optionIndex);

                !overlayVisibleState && show();
                event.preventDefault();
            }
        };

        const onEnterKey = (event) => {
            if (!overlayVisibleState) {
                setFocusedOptionIndex(-1);
                onArrowDownKey(event);
            } else {
                if (focusedOptionIndex !== -1) {
                    if (event.shiftKey) onOptionSelectRange(event, focusedOptionIndex);
                    else onOptionSelect(event, visibleOptions[focusedOptionIndex]);
                }
            }

            event.preventDefault();
        };

        const onHomeKey = (event, pressedInInputText = false) => {
            const { currentTarget } = event;

            if (pressedInInputText) {
                const len = currentTarget.value.length;

                currentTarget.setSelectionRange(0, event.shiftKey ? len : 0);
                setFocusedOptionIndex(-1);
            } else {
                let metaKey = event.metaKey || event.ctrlKey;
                let optionIndex = findFirstOptionIndex();

                if (event.shiftKey && metaKey) {
                    onOptionSelectRange(event, optionIndex, startRangeIndex);
                }

                changeFocusedOptionIndex(event, optionIndex);

                !overlayVisibleState && show();
            }

            event.preventDefault();
        };

        const onEndKey = (event, pressedInInputText = false) => {
            const { currentTarget } = event;

            if (pressedInInputText) {
                const len = currentTarget.value.length;

                currentTarget.setSelectionRange(event.shiftKey ? 0 : len, len);
                focusedOptionIndex = -1;
            } else {
                let metaKey = event.metaKey || event.ctrlKey;
                let optionIndex = findLastOptionIndex();

                if (event.shiftKey && metaKey) {
                    onOptionSelectRange(event, startRangeIndex, optionIndex);
                }

                changeFocusedOptionIndex(event, optionIndex);

                !overlayVisibleState && show();
            }

            event.preventDefault();
        };

        const onPageUpKey = (event) => {
            event.preventDefault();
        };

        const onPageDownKey = (event) => {
            event.preventDefault();
        };

        const onTabKey = (event, pressedInInputText = false) => {
            if (!pressedInInputText) {
                if (overlayVisibleState && hasFocusableElements()) {
                    DomHandler.focus(event.shiftKey ? lastHiddenFocusableElementOnOverlay.current : firstHiddenFocusableElementOnOverlay.current);

                    event.preventDefault();
                } else {
                    if (focusedOptionIndex !== -1) {
                        onOptionSelect(event, visibleOptions[focusedOptionIndex]);
                    }

                    overlayVisibleState && hide(filter);
                }
            }
        };

        const onShiftKey = () => {
            setStartRangeIndex(focusedOptionIndex);
        };

        const onKeyDown = (event) => {
            const metaKey = event.metaKey || event.ctrlKey;

            switch (event.code) {
                case 'ArrowUp':
                    if (props.inline) break;
                    onArrowUpKey(event);
                    break;

                case 'ArrowDown':
                    if (props.inline) break;
                    onArrowDownKey(event);

                    break;

                case 'Space':
                case 'NumpadEnter':
                case 'Enter':
                    if (props.inline) break;
                    onEnterKey(event);
                    break;

                case 'Home':
                    if (props.inline) break;
                    onHomeKey(event);
                    event.preventDefault();
                    break;

                case 'End':
                    if (props.inline) break;
                    onEndKey(event);
                    event.preventDefault();
                    break;

                case 'PageDown':
                    onPageDownKey(event);
                    break;

                case 'PageUp':
                    onPageUpKey(event);
                    break;

                case 'Escape':
                    if (props.inline) break;
                    hide();
                    break;

                case 'Tab':
                    onTabKey(event);
                    break;

                case 'ShiftLeft':
                case 'ShiftRight':
                    onShiftKey(event);
                    break;

                default:
                    if (event.code === 'KeyA' && metaKey) {
                        const value = visibleOptions.filter((option) => isValidOption(option)).map((option) => getOptionValue(option));

                        updateModel(event, value);

                        event.preventDefault();
                        break;
                    }

                    if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
                        !overlayVisibleState && show();
                        searchOptions(event);
                        event.preventDefault();
                    }

                    break;
            }

            setClicked(false);
        };

        const onSelectAll = (event) => {
            if (props.onSelectAll) {
                props.onSelectAll(event);
            } else {
                let value = null;

                if (event.checked) {
                    value = [];

                    if (visibleOptions) {
                        const selectedOptions = visibleOptions.filter((option) => isOptionDisabled(option) && isSelected(option));

                        value = selectedOptions.map((option) => getOptionValue(option));
                    }
                } else if (visibleOptions) {
                    const options = visibleOptions.filter((option) => !isOptionDisabled(option) || isSelected(option));

                    if (props.optionGroupLabel) {
                        value = [];
                        options.forEach(
                            (optionGroup) =>
                                (value = [
                                    ...value,
                                    ...getOptionGroupChildren(optionGroup)
                                        .filter((option) => !isOptionDisabled(option))
                                        .map((option) => getOptionValue(option))
                                ])
                        );
                    } else {
                        value = options.map((option) => getOptionValue(option));
                    }
                }

                updateModel(event.originalEvent, value, value);
            }
        };

        const updateModel = (event, value, selectedOption) => {
            if (props.onChange) {
                props.onChange({
                    originalEvent: event,
                    value,
                    selectedOption,
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

        const onFilterInputChange = (event) => {
            const filter = event.query;

            setFilterState(filter);

            if (props.onFilter) {
                props.onFilter({
                    originalEvent: event,
                    filter
                });
            }
        };

        const resetFilter = () => {
            setFilterState('');
            props.onFilter && props.onFilter({ filter: '' });
        };

        const scrollInView = () => {
            const highlightItem = DomHandler.findSingle(overlayRef.current, 'li[data-p-highlight="true"]');

            if (highlightItem && highlightItem.scrollIntoView) {
                highlightItem.scrollIntoView({ block: 'nearest', inline: 'nearest' });
            }
        };

        const show = () => {
            setOverlayVisibleState(true);
            setFocusedOptionIndex(focusedOptionIndex !== -1 ? focusedOptionIndex : props.autoOptionFocus ? findFirstFocusedOptionIndex() : findSelectedOptionIndex());
            DomHandler.focus(inputRef.current);
        };

        const hide = () => {
            setFocusedOptionIndex(-1);
            setOverlayVisibleState(false);
            setClicked(false);
        };

        const onOverlayEnter = (callback) => {
            ZIndexUtils.set('overlay', overlayRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex['overlay']) || PrimeReact.zIndex['overlay']);
            DomHandler.addStyles(overlayRef.current, { position: 'absolute', top: '0', left: '0' });
            alignOverlay();
            scrollInView();
            callback && callback();
        };

        const onOverlayEntered = (callback) => {
            callback && callback();
            bindOverlayListener();
            props.onShow && props.onShow();
        };

        const onOverlayExit = () => {
            unbindOverlayListener();
        };

        const onOverlayExited = () => {
            if (props.filter && props.resetFilterOnHide) {
                resetFilter();
            }

            ZIndexUtils.clear(overlayRef.current);

            props.onHide && props.onHide();
        };

        const alignOverlay = () => {
            DomHandler.alignOverlay(overlayRef.current, labelRef.current.parentElement, props.appendTo || (context && context.appendTo) || PrimeReact.appendTo);
        };

        const isClearClicked = (event) => {
            return DomHandler.getAttribute(event.target, 'data-pc-section') === 'clearicon';
        };

        const isSelectAllClicked = (event) => {
            return DomHandler.getAttribute(event.target, 'data-pc-section') === 'headercheckboxcontainer';
        };

        const isPanelClicked = (event) => {
            return overlayRef.current && overlayRef.current.contains(event.target);
        };

        const onCloseClick = (event) => {
            hide();
            DomHandler.focus(inputRef.current);
            event.preventDefault();
            event.stopPropagation();
        };

        const getSelectedOptionIndex = () => {
            if (props.value != null && props.options) {
                if (props.optionGroupLabel) {
                    let groupIndex = 0;
                    const optionIndex = props.options.findIndex((optionGroup, i) => (groupIndex = i) && findOptionIndexInList(props.value, getOptionGroupChildren(optionGroup)) !== -1);

                    return optionIndex !== -1 ? { group: groupIndex, option: optionIndex } : -1;
                } else {
                    return findOptionIndexInList(props.value, props.options);
                }
            }

            return -1;
        };

        const findOptionIndexInList = (value, list) => {
            return list.findIndex((item) => value.some((val) => ObjectUtils.equals(val, getOptionValue(item), equalityKey)));
        };

        const isEquals = (value1, value2) => {
            return ObjectUtils.equals(value1, value2, equalityKey);
        };

        const isSelected = (option) => {
            if (props.value) {
                const optionValue = getOptionValue(option);
                const isUsed = isOptionValueUsed(option);

                return props.value.some((val) => ObjectUtils.equals(isUsed ? val : getOptionValue(val), optionValue, equalityKey));
            }

            return false;
        };

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
                } else {
                    option = findOptionByValue(val, props.options);

                    if (ObjectUtils.isEmpty(option)) {
                        option = findOptionByValue(val, props.value);
                    }
                }
            }

            return option ? getOptionLabel(option) : null;
        };

        const findOptionByValue = (val, list) => {
            return list.find((option) => ObjectUtils.equals(getOptionValue(option), val, equalityKey));
        };

        const onFocus = (event) => {
            setFocusedState(true);
            props.onFocus && props.onFocus(event);
        };

        const onBlur = (event) => {
            setFocusedState(false);
            props.onBlur && props.onBlur(event);
        };

        const isAllSelected = () => {
            if (props.onSelectAll) {
                return props.selectAll;
            } else {
                if (ObjectUtils.isEmpty(visibleOptions)) {
                    return false;
                }

                const options = visibleOptions.filter((option) => !isOptionDisabled(option));

                if (props.optionGroupLabel) {
                    let areAllSelected = true;

                    for (let optionGroup of options) {
                        const visibleOptionsGroupChildren = getOptionGroupChildren(optionGroup).filter((option) => !isOptionDisabled(option));

                        if (visibleOptionsGroupChildren.some((option) => !isSelected(option)) === true) {
                            areAllSelected = false;
                        }
                    }

                    return areAllSelected;
                } else {
                    return !options.some((option) => !isSelected(option));
                }
            }
        };

        const getOptionLabel = (option) => {
            return props.optionLabel ? ObjectUtils.resolveFieldData(option, props.optionLabel) : option && option['label'] !== undefined ? option['label'] : option;
        };

        const getOptionValue = (option) => {
            if (props.useOptionAsValue) {
                return option;
            }

            if (props.optionValue) {
                const data = ObjectUtils.resolveFieldData(option, props.optionValue);

                return data !== null ? data : option;
            }

            return option && option['value'] !== undefined ? option['value'] : option;
        };

        const getOptionRenderKey = (option) => {
            return props.dataKey ? ObjectUtils.resolveFieldData(option, props.dataKey) : getOptionLabel(option);
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

        const isOptionDisabled = (option) => {
            if (props.optionDisabled) {
                return ObjectUtils.isFunction(props.optionDisabled) ? props.optionDisabled(option) : ObjectUtils.resolveFieldData(option, props.optionDisabled);
            }

            return option && option['disabled'] !== undefined ? option['disabled'] : false;
        };

        const isOptionValueUsed = (option) => {
            return (!props.useOptionAsValue && props.optionValue) || (option && option['value'] !== undefined);
        };

        const isOptionGroup = (option) => {
            return props.optionGroupLabel && option.optionGroup && option.group;
        };

        const hasSelectedOption = () => {
            return ObjectUtils.isNotEmpty(props.value);
        };

        const hasFocusableElements = () => {
            return DomHandler.getFocusableElements(overlayRef.current, ':not([data-p-hidden-focusable="true"])').length > 0;
        };

        const isOptionMatched = (option) => {
            return isValidOption(option) && getOptionLabel(option)?.toLocaleLowerCase(props.filterLocale).startsWith(searchValue.current.toLocaleLowerCase(props.filterLocale));
        };

        const isValidOption = (option) => {
            return ObjectUtils.isNotEmpty(option) && !(isOptionDisabled(option) || isOptionGroup(option));
        };

        const isValidSelectedOption = (option) => {
            return isValidOption(option) && isSelected(option);
        };

        const checkValidity = () => {
            return inputRef.current.checkValidity();
        };

        const findSelectedOptionIndex = () => {
            if (hasSelectedOption()) {
                for (let index = props.value.length - 1; index >= 0; index--) {
                    const value = props.value[index];
                    const matchedOptionIndex = visibleOptions.findIndex((option) => isValidSelectedOption(option) && isEquals(value, getOptionValue(option)));

                    if (matchedOptionIndex > -1) return matchedOptionIndex;
                }
            }

            return -1;
        };

        const findFirstFocusedOptionIndex = () => {
            const selectedIndex = findSelectedOptionIndex();

            return selectedIndex < 0 ? findFirstOptionIndex() : selectedIndex;
        };

        const findLastFocusedOptionIndex = () => {
            const selectedIndex = findSelectedOptionIndex();

            return selectedIndex < 0 ? findLastOptionIndex() : selectedIndex;
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

        const searchOptions = (event) => {
            searchValue.current = (searchValue.current || '') + event.key;

            let optionIndex = -1;

            if (ObjectUtils.isNotEmpty(searchValue.current)) {
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
                searchValue.current = '';
                searchTimeout.current = null;
            }, 500);
        };

        const changeFocusedOptionIndex = (event, index) => {
            if (focusedOptionIndex !== index) {
                setFocusedOptionIndex(index);
                scrollInView();

                if (props.selectOnFocus) {
                    onOptionSelect(event, visibleOptions[index], false);
                }
            }
        };

        const removeChip = (event, item) => {
            const value = props.value.filter((val) => !ObjectUtils.equals(val, item, equalityKey));

            if (props.onRemove) {
                props.onRemove({
                    originalEvent: event,
                    value
                });
            }

            updateModel(event, value, item);
        };

        const getSelectedItemsLabel = () => {
            const pattern = /{(.*?)}/;

            if (pattern.test(props.selectedItemsLabel)) {
                return props.selectedItemsLabel.replace(props.selectedItemsLabel.match(pattern)[0], props.value.length + '');
            }

            return props.selectedItemsLabel;
        };

        const getLabel = () => {
            let label;

            if (!empty && !props.fixedPlaceholder) {
                if (ObjectUtils.isNotEmpty(props.maxSelectedLabels) && props.value.length > props.maxSelectedLabels) {
                    return getSelectedItemsLabel();
                } else {
                    if (ObjectUtils.isArray(props.value)) {
                        return props.value.reduce((acc, value, index) => acc + (index !== 0 ? ', ' : '') + getLabelByValue(value), '');
                    } else {
                        return '';
                    }
                }
            }

            return label;
        };

        const getLabelContent = () => {
            if (props.selectedItemTemplate) {
                if (!empty) {
                    if (ObjectUtils.isNotEmpty(props.maxSelectedLabels) && props.value.length > props.maxSelectedLabels) {
                        return getSelectedItemsLabel();
                    } else {
                        return props.value.map((val, index) => {
                            const item = ObjectUtils.getJSXElement(props.selectedItemTemplate, val);

                            return <React.Fragment key={index}>{item}</React.Fragment>;
                        });
                    }
                } else {
                    return ObjectUtils.getJSXElement(props.selectedItemTemplate);
                }
            } else {
                if (props.display === 'chip' && !empty) {
                    const value = props.value.slice(0, props.maxSelectedLabels || props.value.length);

                    return value.map((val, i) => {
                        const context = {
                            context: {
                                value: val,
                                index: i
                            }
                        };
                        const label = getLabelByValue(val);
                        const iconProps = mergeProps(
                            {
                                key: i,
                                className: cx('removeTokenIcon'),
                                onClick: (e) => removeChip(e, val)
                            },
                            ptm('removeTokenIcon', context)
                        );
                        const icon = !props.disabled && (props.removeIcon ? IconUtils.getJSXIcon(props.removeIcon, { ...iconProps }, { props }) : <TimesCircleIcon {...iconProps} />);

                        const tokenProps = mergeProps(
                            {
                                className: cx('token')
                            },
                            ptm('token', context)
                        );

                        const tokenLabelProps = mergeProps(
                            {
                                key: label + i,
                                className: cx('tokenLabel')
                            },
                            ptm('tokenLabel', context)
                        );

                        return (
                            <div {...tokenProps} key={label}>
                                <span {...tokenLabelProps}>{label}</span>
                                {icon}
                            </div>
                        );
                    });
                }

                return getLabel();
            }
        };

        const getVisibleOptions = () => {
            if (hasFilter) {
                const filterValue = filterState.trim().toLocaleLowerCase(props.filterLocale);
                const searchFields = props.filterBy ? props.filterBy.split(',') : [props.optionLabel || 'label'];

                if (props.optionGroupLabel) {
                    let filteredGroups = [];

                    for (let optgroup of props.options) {
                        let filteredSubOptions = FilterService.filter(getOptionGroupChildren(optgroup), searchFields, filterValue, props.filterMatchMode, props.filterLocale);

                        if (filteredSubOptions && filteredSubOptions.length) {
                            filteredGroups.push({ ...optgroup, ...{ [props.optionGroupChildren]: filteredSubOptions } });
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

        React.useImperativeHandle(ref, () => ({
            props,
            show,
            hide,
            focus: () => DomHandler.focus(inputRef.current),
            getElement: () => elementRef.current,
            getOverlay: () => overlayRef.current,
            getInput: () => inputRef.current
        }));

        useMountEffect(() => {
            alignOverlay();
        });

        React.useEffect(() => {
            ObjectUtils.combinedRefs(inputRef, props.inputRef);
        }, [inputRef, props.inputRef]);

        React.useEffect(() => {
            setTimeout(() => {
                props.overlayVisible ? show() : hide();
            }, 100);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [props.overlayVisible]);

        useUpdateEffect(() => {
            if (overlayVisibleState && filterState && hasFilter) {
                alignOverlay();
            }
        }, [overlayVisibleState, filterState, hasFilter]);

        useUnmountEffect(() => {
            ZIndexUtils.clear(overlayRef.current);
        });

        const createClearIcon = () => {
            const clearIconProps = mergeProps(
                {
                    className: cx('clearIcon'),
                    onClick: (e) => updateModel(e, [], [])
                },
                ptm('clearIcon')
            );

            const icon = props.clearIcon || <TimesIcon {...clearIconProps} />;
            const clearIcon = IconUtils.getJSXIcon(icon, { ...clearIconProps }, { props });

            if (!empty && props.showClear && !props.disabled) {
                return clearIcon;
            }

            return null;
        };

        const createLabel = () => {
            const content = getLabelContent();

            const labelContainerProps = mergeProps(
                {
                    ref: labelRef,
                    className: cx('labelContainer')
                },
                ptm('labelContainer')
            );

            const labelProps = mergeProps(
                {
                    className: cx('label', { empty })
                },
                ptm('label')
            );

            return (
                <div {...labelContainerProps}>
                    <div {...labelProps}>{content || props.placeholder || 'empty'}</div>
                </div>
            );
        };

        const visibleOptions = getVisibleOptions();

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = MultiSelectBase.getOtherProps(props);
        const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);

        const triggerIconProps = mergeProps(
            {
                className: cx('triggerIcon')
            },
            ptm('triggerIcon')
        );

        const triggerProps = mergeProps(
            {
                className: cx('trigger')
            },
            ptm('trigger')
        );

        const loadingIcon = props.loadingIcon ? IconUtils.getJSXIcon(props.loadingIcon, { ...triggerIconProps }, { props }) : <SpinnerIcon spin {...triggerIconProps} />;
        const dropdownIcon = props.dropdownIcon ? IconUtils.getJSXIcon(props.dropdownIcon, { ...triggerIconProps }, { props }) : <ChevronDownIcon {...triggerIconProps} />;
        const triggerIcon = <div {...triggerProps}>{props.loading ? loadingIcon : dropdownIcon}</div>;

        const label = !props.inline && createLabel();
        const clearIcon = !props.inline && createClearIcon();

        const rootProps = mergeProps(
            {
                ref: elementRef,
                id: props.id,
                style: { ...props.style, ...sx('root') },
                className: classNames(props.className, cx('root', { focusedState, overlayVisibleState })),
                ...otherProps,
                onClick: onClick
            },
            MultiSelectBase.getOtherProps(props),
            ptm('root')
        );

        const hiddenInputWrapperProps = mergeProps(
            {
                className: 'p-hidden-accessible',
                'data-p-hidden-accessible': true
            },
            ptm('hiddenInputWrapper')
        );

        const inputProps = mergeProps(
            {
                ref: inputRef,
                id: props.inputId,
                name: props.name,
                type: 'text',
                onFocus: onFocus,
                onBlur: onBlur,
                onKeyDown: onKeyDown,
                role: 'combobox',
                'aria-expanded': overlayVisibleState,
                disabled: props.disabled,
                tabIndex: !props.disabled ? props.tabIndex : -1,
                ...ariaProps
            },
            ptm('input')
        );

        return (
            <>
                <div {...rootProps}>
                    <div {...hiddenInputWrapperProps}>
                        <input {...inputProps} readOnly />
                    </div>
                    {!props.inline && (
                        <>
                            {label}
                            {clearIcon}
                            {triggerIcon}
                        </>
                    )}

                    <MultiSelectPanel
                        hostName="MultiSelect"
                        ref={overlayRef}
                        visibleOptions={visibleOptions}
                        {...props}
                        onClick={onPanelClick}
                        onOverlayHide={hide}
                        filterValue={filterState}
                        focusedOptionIndex={focusedOptionIndex}
                        onFirstHiddenFocus={onFirstHiddenFocus}
                        onLastHiddenFocus={onLastHiddenFocus}
                        firstHiddenFocusableElementOnOverlay={firstHiddenFocusableElementOnOverlay}
                        lastHiddenFocusableElementOnOverlay={lastHiddenFocusableElementOnOverlay}
                        setFocusedOptionIndex={setFocusedOptionIndex}
                        hasFilter={hasFilter}
                        onFilterInputChange={onFilterInputChange}
                        resetFilter={resetFilter}
                        onCloseClick={onCloseClick}
                        onSelectAll={onSelectAll}
                        getOptionLabel={getOptionLabel}
                        getOptionRenderKey={getOptionRenderKey}
                        isOptionDisabled={isOptionDisabled}
                        getOptionGroupChildren={getOptionGroupChildren}
                        getOptionGroupLabel={getOptionGroupLabel}
                        getOptionGroupRenderKey={getOptionGroupRenderKey}
                        isSelected={isSelected}
                        getSelectedOptionIndex={getSelectedOptionIndex}
                        isAllSelected={isAllSelected}
                        onOptionSelect={onOptionSelect}
                        allowOptionSelect={allowOptionSelect}
                        in={overlayVisibleState}
                        onEnter={onOverlayEnter}
                        onEntered={onOverlayEntered}
                        onExit={onOverlayExit}
                        onExited={onOverlayExited}
                        ptm={ptm}
                        cx={cx}
                        sx={sx}
                        isUnstyled={isUnstyled}
                        metaData={metaData}
                    />
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />}
            </>
        );
    })
);

MultiSelect.displayName = 'MultiSelect';
