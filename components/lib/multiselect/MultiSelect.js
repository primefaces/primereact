import * as React from 'react';
import PrimeReact, { FilterService, PrimeReactContext, localeOption } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { useDebounce, useMergeProps, useMountEffect, useOverlayListener, useUnmountEffect, useUpdateEffect } from '../hooks/Hooks';
import { ChevronDownIcon } from '../icons/chevrondown';
import { SpinnerIcon } from '../icons/spinner';
import { TimesIcon } from '../icons/times';
import { TimesCircleIcon } from '../icons/timescircle';
import { OverlayService } from '../overlayservice/OverlayService';
import { Tooltip } from '../tooltip/Tooltip';
import { DomHandler, IconUtils, ObjectUtils, UniqueComponentId, ZIndexUtils, classNames } from '../utils/Utils';
import { MultiSelectBase } from './MultiSelectBase';
import { MultiSelectPanel } from './MultiSelectPanel';

export const MultiSelect = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = MultiSelectBase.getProps(inProps, context);
        const [focusedOptionIndex, setFocusedOptionIndex] = React.useState(null);
        const [clicked, setClicked] = React.useState(false);
        const [filterValue, filterState, setFilterState] = useDebounce('', props.filterDelay || 0);
        const [startRangeIndex, setStartRangeIndex] = React.useState(-1);
        const [focusedState, setFocusedState] = React.useState(false);
        const [overlayVisibleState, setOverlayVisibleState] = React.useState(props.inline);
        const elementRef = React.useRef(null);
        const searchValue = React.useRef(null);
        const searchTimeout = React.useRef(null);
        const firstHiddenFocusableElementOnOverlay = React.useRef(null);
        const lastHiddenFocusableElementOnOverlay = React.useRef(null);
        const inputRef = React.useRef(props.inputRef);
        const labelContainerRef = React.useRef(null);
        const overlayRef = React.useRef(null);
        const labelRef = React.useRef(null);
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
                        if (!isClearClicked(event) && !isSelectAllClicked(event)) {
                            hide();
                        }
                    } else if (context.hideOverlaysOnDocumentScrolling) {
                        hide();
                    } else if (!DomHandler.isDocument(event.target)) {
                        alignOverlay();
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
            const matchedOptionIndex = hasSelectedOption() && index < visibleOptions.length - 1 ? visibleOptions.slice(index + 1).findIndex((option) => isValidSelectedOption(option)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
        };

        const findPrevSelectedOptionIndex = (index) => {
            const matchedOptionIndex = hasSelectedOption() && index > 0 ? ObjectUtils.findLastIndex(visibleOptions.slice(0, index), (option) => isValidSelectedOption(option)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
        };

        const findNearestSelectedOptionIndex = (index, firstCheckUp = false) => {
            let matchedOptionIndex = -1;

            if (hasSelectedOption()) {
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

                updateModel(event, value, value);
            }
        };

        const onOptionSelect = (event, option, index = -1) => {
            if (props.disabled || isOptionDisabled(option)) {
                return;
            }

            let selected = isSelected(option);
            let value = null;

            if (selected) {
                value = props.value.filter((val) => !ObjectUtils.equals(val, getOptionValue(option), equalityKey));
            } else {
                value = [...(props.value || []), getOptionValue(option)];
            }

            updateModel(event, value, option);
            index !== -1 && setFocusedOptionIndex(index);
        };

        const onClick = (event) => {
            if (!props.inline && !props.disabled && !props.loading && !isPanelClicked(event) && !isClearClicked(event)) {
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
            } else if (focusedOptionIndex !== -1) {
                if (event.shiftKey) {
                    onOptionSelectRange(event, focusedOptionIndex);
                } else {
                    onOptionSelect(event, visibleOptions[focusedOptionIndex]);
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
                    if (props.inline) {
                        break;
                    }

                    onArrowUpKey(event);
                    break;

                case 'ArrowDown':
                    if (props.inline) {
                        break;
                    }

                    onArrowDownKey(event);

                    break;

                case 'Space':
                case 'NumpadEnter':
                case 'Enter':
                    if (props.inline) {
                        break;
                    }

                    onEnterKey(event);
                    break;

                case 'Home':
                    if (props.inline) {
                        break;
                    }

                    onHomeKey(event);
                    event.preventDefault();
                    break;

                case 'End':
                    if (props.inline) {
                        break;
                    }

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
                    if (props.inline) {
                        break;
                    }

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
                    if (event.key === 'a' && metaKey) {
                        const value = visibleOptions.filter((option) => isValidOption(option)).map((option) => getOptionValue(option));

                        updateModel(event, value, value);

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

        const onFilterKeyDown = (event) => {
            switch (event.code) {
                case 'ArrowUp':
                    if (props.inline) {
                        break;
                    }

                    onArrowUpKey(event);
                    break;

                case 'ArrowDown':
                    if (props.inline) {
                        break;
                    }

                    onArrowDownKey(event);

                    break;

                case 'NumpadEnter':
                case 'Enter':
                    if (props.inline) {
                        break;
                    }

                    onEnterKey(event);
                    break;

                case 'Home':
                    if (props.inline) {
                        break;
                    }

                    onHomeKey(event);
                    event.preventDefault();
                    break;

                case 'End':
                    if (props.inline) {
                        break;
                    }

                    onEndKey(event);
                    event.preventDefault();
                    break;

                case 'Escape':
                    if (props.inline) {
                        break;
                    }

                    hide();
                    break;

                case 'Tab':
                    onTabKey(event);
                    break;
            }
        };

        const onSelectAll = (event) => {
            if (props.onSelectAll) {
                props.onSelectAll(event);
            } else {
                let value = null;

                if (event.checked) {
                    value = [];
                } else {
                    const validOptions = visibleOptions.filter((option) => isValidOption(option) && !isOptionDisabled(option));

                    if (validOptions) {
                        value = validOptions.map((option) => getOptionValue(option));
                    }
                }

                // make sure not to exceed the selection limit
                if (props.selectionLimit && value && value.length) {
                    value = value.slice(0, props.selectionLimit);
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
                        event?.stopPropagation();
                    },
                    preventDefault: () => {
                        event?.preventDefault();
                    },
                    target: {
                        name: props.name,
                        id: props.id,
                        value
                    }
                });
                DomHandler.focus(inputRef.current);
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

        const scrollInView = (event) => {
            if (!overlayVisibleState) {
                return;
            }

            let focusedItem;

            if (event) {
                focusedItem = event.currentTarget;
            } else {
                focusedItem = DomHandler.findSingle(overlayRef.current, 'li[data-p-highlight="true"]');
            }

            if (focusedItem && focusedItem.scrollIntoView) {
                focusedItem.scrollIntoView({ block: 'nearest', inline: 'nearest' });
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
            ZIndexUtils.set('overlay', overlayRef.current, (context && context.autoZIndex) || PrimeReact.autoZIndex, (context && context.zIndex.overlay) || PrimeReact.zIndex.overlay);
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
            !props.inline && DomHandler.alignOverlay(overlayRef.current, labelContainerRef.current.parentElement, props.appendTo || (context && context.appendTo) || PrimeReact.appendTo);
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
                }

                return findOptionIndexInList(props.value, props.options);
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
            }

            if (ObjectUtils.isEmpty(visibleOptions)) {
                return false;
            }

            const options = visibleOptions.filter((option) => !isOptionDisabled(option) && isValidOption(option));

            return !options.some((option) => !isSelected(option));
        };

        const getOptionLabel = (option) => {
            return props.optionLabel ? ObjectUtils.resolveFieldData(option, props.optionLabel) : option && option.label !== undefined ? option.label : option;
        };

        const getOptionValue = (option) => {
            if (props.useOptionAsValue) {
                return option;
            }

            if (props.optionValue) {
                return ObjectUtils.resolveFieldData(option, props.optionValue);
            }

            return option && option.value !== undefined ? option.value : option;
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
            // disable if we have hit our selection limit
            if (!allowOptionSelect() && !isSelected(option)) {
                return true;
            }

            // check if custom optionDisabled function is being used
            const { optionDisabled } = props;

            if (optionDisabled) {
                return ObjectUtils.isFunction(optionDisabled) ? optionDisabled(option) : ObjectUtils.resolveFieldData(option, optionDisabled);
            }

            // fallback to the option itself disabled value
            return option && (option.disabled ?? false);
        };

        const isOptionValueUsed = (option) => {
            return (!props.useOptionAsValue && props.optionValue) || (option && option.value !== undefined);
        };

        const isOptionGroup = (option) => {
            return props.optionGroupLabel && option.group;
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

        const findSelectedOptionIndex = () => {
            if (hasSelectedOption()) {
                for (let index = props.value.length - 1; index >= 0; index--) {
                    const value = props.value[index];
                    const matchedOptionIndex = visibleOptions.findIndex((option) => isValidSelectedOption(option) && isEquals(value, getOptionValue(option)));

                    if (matchedOptionIndex > -1) {
                        return matchedOptionIndex;
                    }
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
                scrollInView(event);

                if (props.selectOnFocus) {
                    onOptionSelect(event, visibleOptions[index], false);
                }
            }
        };

        const removeChip = (event, item) => {
            event.stopPropagation();

            if (!isVisible(event.currentTarget)) return;

            const value = props.value.filter((val) => !ObjectUtils.equals(val, item, equalityKey));

            if (props.onRemove) {
                props.onRemove({
                    originalEvent: event,
                    value
                });
            }

            updateModel(event, value, item);
        };

        const isVisible = (element) => {
            const parentElement = labelRef.current;
            const isOverflow = parentElement.clientWidth < parentElement.scrollWidth;

            if (!isOverflow) return true;

            const target = element.closest('[data-pc-section="token"]');
            const parentStyles = window.getComputedStyle(parentElement);
            const targetStyles = window.getComputedStyle(target);

            const parentWidth = parentElement.clientWidth - parseFloat(parentStyles.paddingLeft) - parseFloat(parentStyles.paddingRight);
            const targetRight = target.getBoundingClientRect().right + parseFloat(targetStyles.marginRight) - parentElement.getBoundingClientRect().left;

            return targetRight <= parentWidth;
        };

        const getSelectedItemsLabel = () => {
            const pattern = /{(.*?)}/;
            const selectedItemsLabel = props.selectedItemsLabel || localeOption('selectionMessage');
            const valueLength = props.value ? props.value.length : 0;

            if (pattern.test(selectedItemsLabel)) {
                return selectedItemsLabel.replace(selectedItemsLabel.match(pattern)[0], valueLength + '');
            }

            return selectedItemsLabel;
        };

        const getLabel = () => {
            if (empty || props.fixedPlaceholder) {
                return '';
            }

            if (ObjectUtils.isNotEmpty(props.maxSelectedLabels) && props.value?.length > props.maxSelectedLabels) {
                return getSelectedItemsLabel();
            }

            if (ObjectUtils.isArray(props.value)) {
                return props.value.reduce((acc, value, index) => acc + (index !== 0 ? ', ' : '') + getLabelByValue(value), '');
            }

            return '';
        };

        const getLabelContent = () => {
            const valueLength = props.value ? props.value.length : 0;

            if (ObjectUtils.isNotEmpty(props.maxSelectedLabels) && valueLength > props.maxSelectedLabels) {
                return getSelectedItemsLabel();
            }

            if (props.selectedItemTemplate) {
                if (!empty) {
                    return props.value.map((val, index) => {
                        const item = ObjectUtils.getJSXElement(props.selectedItemTemplate, val);

                        return <React.Fragment key={index}>{item}</React.Fragment>;
                    });
                }

                return ObjectUtils.getJSXElement(props.selectedItemTemplate);
            }

            if (props.display === 'chip' && !empty) {
                const value = props.value.slice(0, props.maxSelectedLabels || valueLength);

                return value.map((val, i) => {
                    const context = {
                        context: {
                            value: val,
                            index: i
                        }
                    };
                    const label = getLabelByValue(val);
                    const labelKey = label + '_' + i;
                    const iconProps = mergeProps(
                        {
                            'aria-label': localeOption('removeTokenIcon'),
                            className: cx('removeTokenIcon'),
                            onClick: (e) => removeChip(e, val),
                            onKeyDown: (e) => onRemoveTokenIconKeyDown(e, val),
                            tabIndex: props.tabIndex || '0'
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
                            className: cx('tokenLabel')
                        },
                        ptm('tokenLabel', context)
                    );

                    return (
                        <div {...tokenProps} key={labelKey}>
                            <span {...tokenLabelProps}>{label}</span>
                            {icon}
                        </div>
                    );
                });
            }

            return getLabel();
        };

        const getVisibleOptions = () => {
            const options = props.optionGroupLabel ? flatOptions(props.options) : props.options;

            if (hasFilter) {
                const filterValue = filterState.trim().toLocaleLowerCase(props.filterLocale);
                const searchFields = props.filterBy ? props.filterBy.split(',') : [props.optionLabel || 'label'];

                if (props.optionGroupLabel) {
                    const filteredGroups = [];

                    for (let optgroup of props.options) {
                        let filteredSubOptions = FilterService.filter(getOptionGroupChildren(optgroup), searchFields, filterValue, props.filterMatchMode, props.filterLocale);

                        if (filteredSubOptions && filteredSubOptions.length) {
                            filteredGroups.push({ ...optgroup, ...{ [props.optionGroupChildren]: filteredSubOptions } });
                        }
                    }

                    return flatOptions(filteredGroups);
                }

                return FilterService.filter(options, searchFields, filterValue, props.filterMatchMode, props.filterLocale);
            }

            return options;
        };

        const flatOptions = (options) => {
            return (options || []).reduce((result, option, index) => {
                result.push({ ...option, group: true, index });

                const optionGroupChildren = getOptionGroupChildren(option);

                optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));

                return result;
            }, []);
        };

        const onClearIconKeyDown = (event) => {
            switch (event.code) {
                case 'Space':
                case 'NumpadEnter':
                case 'Enter':
                    if (props.inline) {
                        break;
                    }

                    updateModel(event, [], []);
                    event.preventDefault();
                    event.stopPropagation();
                    break;
            }
        };

        const onRemoveTokenIconKeyDown = (event, val) => {
            switch (event.code) {
                case 'Space':
                case 'NumpadEnter':
                case 'Enter':
                    if (props.inline) {
                        break;
                    }

                    removeChip(event, val);
                    event.preventDefault();
                    event.stopPropagation();
                    break;
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
            if (props.overlayVisible === true) {
                show();
            } else if (props.overlayVisible === false) {
                hide();
            }
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
                    'aria-label': localeOption('clear'),
                    onClick: (e) => updateModel(e, [], []),
                    onKeyDown: (e) => onClearIconKeyDown(e),
                    tabIndex: props.tabIndex || '0'
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
                    ref: labelContainerRef,
                    className: cx('labelContainer')
                },
                ptm('labelContainer')
            );

            const labelProps = mergeProps(
                {
                    ref: labelRef,
                    className: cx('label', { empty })
                },
                ptm('label')
            );

            return (
                <div {...labelContainerProps}>
                    <div {...labelProps}>{content || props.placeholder || props.emptyMessage || 'empty'}</div>
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
                className: classNames(props.className, cx('root', { focusedState, context, overlayVisibleState })),
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
        const inputId = React.useMemo(() => {
            return props.inputId ?? UniqueComponentId();
        }, [props.inputId]);
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
                'aria-controls': `${inputId}-multi-selectbox`,
                disabled: props.disabled,
                tabIndex: !props.disabled ? props.tabIndex : -1,
                value: getLabel(),
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
                        listId={`${inputId}-multi-selectbox`}
                        onClick={onPanelClick}
                        onOverlayHide={hide}
                        filterValue={filterValue}
                        focusedOptionIndex={focusedOptionIndex}
                        onFirstHiddenFocus={onFirstHiddenFocus}
                        onLastHiddenFocus={onLastHiddenFocus}
                        firstHiddenFocusableElementOnOverlay={firstHiddenFocusableElementOnOverlay}
                        lastHiddenFocusableElementOnOverlay={lastHiddenFocusableElementOnOverlay}
                        setFocusedOptionIndex={setFocusedOptionIndex}
                        hasFilter={hasFilter}
                        isValidOption={isValidOption}
                        getOptionValue={getOptionValue}
                        updateModel={updateModel}
                        onFilterInputChange={onFilterInputChange}
                        onFilterKeyDown={onFilterKeyDown}
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
                        changeFocusedOptionIndex={changeFocusedOptionIndex}
                    />
                </div>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} pt={ptm('tooltip')} {...props.tooltipOptions} />}
            </>
        );
    })
);

MultiSelect.displayName = 'MultiSelect';
