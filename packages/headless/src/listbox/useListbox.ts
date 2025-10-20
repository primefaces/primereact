import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import {
    equals,
    findLastIndex,
    findSingle,
    focus,
    getFirstFocusableElement,
    isElement,
    isNotEmpty,
    isPrintableCharacter,
    isString,
    resolveFieldData
} from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useListbox.props';

export const useListbox = withHeadless({
    name: 'useListbox',
    defaultProps,
    setup({ id, props, elementRef }) {
        const [focusedState, setFocusedState] = React.useState<boolean>(false);
        const [focusedOptionIndexState, setFocusedOptionIndexState] = React.useState<number>(-1);
        const [filterValueState, setFilterValueState] = React.useState<string>('');
        const [valueState, setValueState] = useControlledState({
            value: props.value,
            defaultValue: props.defaultValue ?? null,
            onChange: props.onValueChange
        });

        const state = {
            value: valueState,
            focused: focusedState,
            focusedOptionIndex: focusedOptionIndexState,
            filterValue: filterValueState
        };

        // element refs
        const listRef = React.useRef<HTMLElement>(null);
        const firstHiddenFocusableRef = React.useRef<HTMLElement>(null);
        const lastHiddenFocusableRef = React.useRef<HTMLElement>(null);

        // refs
        const optionTouched = React.useRef<boolean>(false);
        const startRangeIndex = React.useRef<number>(-1);
        const searchTimeout = React.useRef<NodeJS.Timeout | null>(null);
        const searchValue = React.useRef<string>('');

        const getOptions = () => {
            return visibleOptions || [];
        };

        const getOptionId = (index: number) => {
            return `${id}_${index}`;
        };

        const getOptionLabel = (option: unknown) => {
            return props.optionLabel ? resolveFieldData(option, props.optionLabel) : isString(option) ? option : null;
        };

        const getOptionValue = (option: unknown) => {
            return props.optionValue ? resolveFieldData(option, props.optionValue) : option;
        };

        const isOptionDisabled = (option: unknown) => {
            return props.optionDisabled ? resolveFieldData(option, props.optionDisabled) : false;
        };

        const isOptionGroup = (option: unknown) => {
            return props.optionGroupLabel && (option as any)?.optionGroup && (option as any)?.group;
        };

        const getOptionGroupLabel = (optionGroup: unknown) => {
            return props.optionGroupLabel ? resolveFieldData(optionGroup, props.optionGroupLabel) : isString(optionGroup) ? optionGroup : null;
        };

        const getOptionGroupChildren = (optionGroup: unknown) => {
            return props.optionGroupChildren ? resolveFieldData(optionGroup, props.optionGroupChildren) : null;
        };

        const getFocusedOptionId = () => {
            return focusedOptionIndexState !== -1 ? getOptionId(focusedOptionIndexState!) : null;
        };

        const getAriaSetSize = () => {
            return getOptions().filter((option: any) => !isOptionGroup(option)).length;
        };

        const getAriaPosInset = (index: number) => {
            return (
                (props.optionGroupLabel
                    ? index -
                      (getOptions()
                          .slice(0, index)
                          .filter((option: any) => isOptionGroup(option)).length || 0)
                    : index) + 1
            );
        };

        const onFirstHiddenFocus = () => {
            focus(listRef.current!);

            const firstFocusableEl = getFirstFocusableElement(elementRef.current!, ':not([data-p-hidden-focusable="true"])');

            (lastHiddenFocusableRef.current! as any).tabIndex = isElement(firstFocusableEl) ? undefined : -1;
            (firstHiddenFocusableRef.current! as any).tabIndex = -1;
        };

        const onLastHiddenFocus = (event: FocusEvent) => {
            const relatedTarget = event.relatedTarget;

            if (relatedTarget === listRef.current) {
                const firstFocusableEl = getFirstFocusableElement(elementRef.current!, ':not([data-p-hidden-focusable="true"])');

                focus(firstFocusableEl as any);
                (firstHiddenFocusableRef.current! as any).tabIndex = undefined;
            } else {
                focus(firstHiddenFocusableRef.current! as any);
            }

            (lastHiddenFocusableRef.current! as any).tabIndex = -1;
        };

        const onFocusOut = (event: FocusEvent) => {
            if (!(elementRef.current! as any).contains(event.relatedTarget) && lastHiddenFocusableRef.current && firstHiddenFocusableRef.current) {
                (lastHiddenFocusableRef.current! as any).tabIndex = (firstHiddenFocusableRef.current! as any).tabIndex = undefined;
            }
        };

        const onListFocus = () => {
            const focusedOptionIndex =
                focusedOptionIndexState !== -1
                    ? focusedOptionIndexState
                    : props.autoOptionFocus
                      ? findFirstFocusedOptionIndex()
                      : findSelectedOptionIndex();

            setFocusedState(true);
            setFocusedOptionIndexState(focusedOptionIndex);

            autoUpdateModel();
            scrollInView(focusedOptionIndex);
        };

        const onListBlur = (event: FocusEvent) => {
            setFocusedState(false);
            setFocusedOptionIndexState(-1);

            startRangeIndex.current = -1;
            searchValue.current = '';
        };

        const onListKeyDown = (event: KeyboardEvent) => {
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
                    break;

                case 'Tab':
                    //NOOP
                    break;

                case 'ShiftLeft':
                case 'ShiftRight':
                    onShiftKey();
                    break;

                default:
                    if (props.multiple && event.code === 'KeyA' && metaKey) {
                        const value = getOptions()
                            .filter((option: any) => isValidOption(option))
                            .map((option: any) => getOptionValue(option));

                        updateModel(event, value);

                        event.preventDefault();
                        break;
                    }

                    if (!metaKey && isPrintableCharacter(event.key)) {
                        searchOptions(event, event.key);
                        event.preventDefault();
                    }

                    break;
            }
        };

        const onOptionSelect = (event: MouseEvent | KeyboardEvent, option: unknown, index = -1) => {
            if (props.disabled || isOptionDisabled(option)) {
                return;
            }

            if (props.multiple) {
                onOptionSelectMultiple(event, option);
            } else {
                onOptionSelectSingle(event, option);
            }

            optionTouched.current = false;

            if (index !== -1) {
                setFocusedOptionIndexState(index);
            }
        };

        const onOptionMouseDown = (event: MouseEvent, index: number) => {
            changeFocusedOptionIndex(event, index);
        };

        const onOptionMouseMove = (event: MouseEvent, index: number) => {
            if (props.focusOnHover && focusedState) {
                changeFocusedOptionIndex(event, index);
            }
        };

        const onOptionTouchEnd = () => {
            if (props.disabled) {
                return;
            }

            optionTouched.current = true;
        };

        const onOptionSelectSingle = (event: MouseEvent | KeyboardEvent, option: unknown) => {
            const selected = isSelected(option);
            const metaSelection = optionTouched.current ? false : props.metaKeySelection;
            let valueChanged = false;
            let value = null;

            if (metaSelection) {
                const metaKey = event && (event.metaKey || event.ctrlKey);

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

        const onOptionSelectMultiple = (event: MouseEvent | KeyboardEvent, option: unknown) => {
            const selected = isSelected(option);
            const metaSelection = optionTouched.current ? false : props.metaKeySelection;
            let value = null;

            if (metaSelection) {
                const metaKey = event.metaKey || event.ctrlKey;

                if (selected) {
                    value = metaKey ? removeOption(option) : [getOptionValue(option)];
                } else {
                    value = metaKey ? valueState || [] : [];
                    value = [...(value as unknown[]), getOptionValue(option)];
                }
            } else {
                value = selected ? removeOption(option) : [...(valueState || []), getOptionValue(option)];
            }

            updateModel(event, value);
        };

        const onOptionSelectRange = (event: MouseEvent | KeyboardEvent, start = -1, end = -1) => {
            start = start === -1 ? findNearestSelectedOptionIndex(end, true) : start;
            end = end === -1 ? findNearestSelectedOptionIndex(start) : end;

            if (start !== -1 && end !== -1) {
                const rangeStart = Math.min(start, end);
                const rangeEnd = Math.max(start, end);
                const value = getOptions()
                    .slice(rangeStart, rangeEnd + 1)
                    .filter((option: any) => isValidOption(option))
                    .map((option: any) => getOptionValue(option));

                updateModel(event, value);
            }
        };

        const onFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setFilterValueState(event.target.value);
            setFocusedOptionIndexState(-1);
            startRangeIndex.current = -1;
        };

        const onFilterBlur = () => {
            setFocusedOptionIndexState(-1);
            startRangeIndex.current = -1;
        };

        const onFilterKeyDown = (event: KeyboardEvent) => {
            switch (event.code) {
                case 'ArrowDown':
                    onArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    onArrowUpKey(event);
                    break;

                case 'ArrowLeft':
                case 'ArrowRight':
                    onArrowLeftKey(event, true);
                    break;

                case 'Home':
                    onHomeKey(event, true);
                    break;

                case 'End':
                    onEndKey(event, true);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                    onEnterKey(event);
                    break;

                case 'ShiftLeft':
                case 'ShiftRight':
                    onShiftKey();
                    break;

                default:
                    break;
            }
        };

        const onArrowDownKey = (event: KeyboardEvent) => {
            const optionIndex = focusedOptionIndexState !== -1 ? findNextOptionIndex(focusedOptionIndexState) : findFirstFocusedOptionIndex();

            if (props.multiple && event.shiftKey) {
                onOptionSelectRange(event, startRangeIndex.current, optionIndex);
            }

            changeFocusedOptionIndex(event, optionIndex);
            event.preventDefault();
        };

        const onArrowUpKey = (event: KeyboardEvent) => {
            const optionIndex = focusedOptionIndexState !== -1 ? findPrevOptionIndex(focusedOptionIndexState) : findLastFocusedOptionIndex();

            if (props.multiple && event.shiftKey) {
                onOptionSelectRange(event, optionIndex, startRangeIndex.current);
            }

            changeFocusedOptionIndex(event, optionIndex);
            event.preventDefault();
        };

        const onArrowLeftKey = (event: KeyboardEvent, pressedInInputText = false) => {
            if (pressedInInputText) {
                setFocusedOptionIndexState(-1);
            }
        };

        const onHomeKey = (event: KeyboardEvent, pressedInInputText = false) => {
            if (pressedInInputText) {
                const target = event.currentTarget as HTMLInputElement;

                if (event.shiftKey) {
                    target?.setSelectionRange(0, target.selectionStart);
                } else {
                    target?.setSelectionRange(0, 0);
                    setFocusedOptionIndexState(-1);
                }
            } else {
                const metaKey = event.metaKey || event.ctrlKey;
                const optionIndex = findFirstOptionIndex();

                if (props.multiple && event.shiftKey && metaKey) {
                    onOptionSelectRange(event, optionIndex, startRangeIndex.current);
                }

                changeFocusedOptionIndex(event, optionIndex);
            }

            event.preventDefault();
        };

        const onEndKey = (event: KeyboardEvent, pressedInInputText = false) => {
            if (pressedInInputText) {
                const target = event.currentTarget as HTMLInputElement;
                const length = target.value.length;

                if (event.shiftKey) {
                    target.setSelectionRange(target.selectionStart, length);
                } else {
                    target.setSelectionRange(length, length);
                    setFocusedOptionIndexState(-1);
                }
            } else {
                const metaKey = event.metaKey || event.ctrlKey;
                const optionIndex = findLastOptionIndex();

                if (props.multiple && event.shiftKey && metaKey) {
                    onOptionSelectRange(event, startRangeIndex.current, optionIndex);
                }

                changeFocusedOptionIndex(event, optionIndex);
            }

            event.preventDefault();
        };

        const onPageUpKey = (event: KeyboardEvent) => {
            scrollInView(0);
            event.preventDefault();
        };

        const onPageDownKey = (event: KeyboardEvent) => {
            scrollInView(getOptions().length - 1);
            event.preventDefault();
        };

        const onEnterKey = (event: KeyboardEvent) => {
            if (focusedOptionIndexState !== -1) {
                if (props.multiple && event.shiftKey) onOptionSelectRange(event, focusedOptionIndexState);
                else onOptionSelect(event, getOptions()[focusedOptionIndexState!]);
            }
        };

        const onSpaceKey = (event: KeyboardEvent) => {
            event.preventDefault();
            onEnterKey(event);
        };

        const onShiftKey = () => {
            startRangeIndex.current = focusedOptionIndexState!;
        };

        const isOptionMatched = (option: unknown) => {
            return isValidOption(option) && getOptionLabel(option)?.toLocaleLowerCase().startsWith(searchValue.current?.toLocaleLowerCase());
        };

        const isValidOption = (option: unknown) => {
            return isNotEmpty(option) && !isOptionDisabled(option) && !isOptionGroup(option);
        };

        const isValidSelectedOption = (option: unknown) => {
            return isValidOption(option) && isSelected(option);
        };

        const isEquals = (value1: unknown, value2: unknown) => {
            return equals(value1, value2, equalityKey);
        };

        const isSelected = (option: unknown) => {
            const optionValue = getOptionValue(option);

            if (props.multiple) return (valueState || []).some((value: unknown) => isEquals(value, optionValue));
            else return isEquals(valueState, optionValue);
        };

        const findFirstOptionIndex = () => {
            return getOptions().findIndex((option: any) => isValidOption(option));
        };

        const findLastOptionIndex = () => {
            return findLastIndex(getOptions(), (option: any) => isValidOption(option));
        };

        const findNextOptionIndex = (index: number) => {
            const matchedOptionIndex =
                index < getOptions().length - 1
                    ? getOptions()
                          .slice(index + 1)
                          .findIndex((option: any) => isValidOption(option))
                    : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
        };

        const findPrevOptionIndex = (index: number) => {
            const matchedOptionIndex = index > 0 ? findLastIndex(getOptions().slice(0, index), (option) => isValidOption(option)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex : index;
        };

        const findSelectedOptionIndex = () => {
            if (hasValue()) {
                if (props.multiple) {
                    for (let index = (valueState as unknown[]).length - 1; index >= 0; index--) {
                        const value = (valueState as unknown[])[index];
                        const matchedOptionIndex = getOptions().findIndex(
                            (option: any) => isValidSelectedOption(option) && isEquals(value, getOptionValue(option))
                        );

                        if (matchedOptionIndex > -1) return matchedOptionIndex;
                    }
                } else {
                    return getOptions().findIndex((option: any) => isValidSelectedOption(option));
                }
            }

            return -1;
        };

        const findFirstSelectedOptionIndex = () => {
            return hasValue() ? getOptions().findIndex((option) => isValidSelectedOption(option)) : -1;
        };

        const findLastSelectedOptionIndex = () => {
            return hasValue() ? findLastIndex(getOptions(), (option) => isValidSelectedOption(option)) : -1;
        };

        const findNextSelectedOptionIndex = (index: number) => {
            const matchedOptionIndex =
                hasValue() && index < getOptions().length - 1
                    ? getOptions()
                          .slice(index + 1)
                          .findIndex((option) => isValidSelectedOption(option))
                    : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : -1;
        };

        const findPrevSelectedOptionIndex = (index: number) => {
            const matchedOptionIndex =
                hasValue() && index > 0 ? findLastIndex(getOptions().slice(0, index), (option) => isValidSelectedOption(option)) : -1;

            return matchedOptionIndex > -1 ? matchedOptionIndex : -1;
        };

        const findNearestSelectedOptionIndex = (index: number, firstCheckUp = false) => {
            let matchedOptionIndex = -1;

            if (hasValue()) {
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

        const findFirstFocusedOptionIndex = () => {
            const selectedIndex = findFirstSelectedOptionIndex();

            return selectedIndex < 0 ? findFirstOptionIndex() : selectedIndex;
        };

        const findLastFocusedOptionIndex = () => {
            const selectedIndex = findLastSelectedOptionIndex();

            return selectedIndex < 0 ? findLastOptionIndex() : selectedIndex;
        };

        const searchOptions = (event: KeyboardEvent, char: string) => {
            searchValue.current = (searchValue.current || '') + char;

            let optionIndex = -1;

            if (isNotEmpty(searchValue.current)) {
                if (focusedOptionIndexState !== -1) {
                    optionIndex = getOptions()
                        .slice(focusedOptionIndexState)
                        .findIndex((option: any) => isOptionMatched(option));
                    optionIndex =
                        optionIndex === -1
                            ? getOptions()
                                  .slice(0, focusedOptionIndexState)
                                  .findIndex((option: any) => isOptionMatched(option))
                            : optionIndex + focusedOptionIndexState;
                } else {
                    optionIndex = getOptions().findIndex((option: any) => isOptionMatched(option));
                }

                if (optionIndex === -1 && focusedOptionIndexState === -1) {
                    optionIndex = findFirstFocusedOptionIndex() ?? -1;
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

        const removeOption = (option: any) => {
            return (valueState as unknown[]).filter((val: unknown) => !isEquals(val, getOptionValue(option)));
        };

        const changeFocusedOptionIndex = (event: MouseEvent | KeyboardEvent, index: number = -1) => {
            if (focusedOptionIndexState !== index) {
                setFocusedOptionIndexState(index);

                scrollInView();

                if (props.selectOnFocus && !props.multiple) {
                    onOptionSelect(event, getOptions()[index]);
                }
            }
        };

        const nextFrame = (): Promise<void> => {
            return new Promise((resolve) => {
                requestAnimationFrame(() => {
                    requestAnimationFrame(resolve as () => void);
                });
            });
        };

        const scrollInView = (index = -1) => {
            nextFrame().then(() => {
                const id = index !== -1 ? getOptionId(index) : getFocusedOptionId();
                const element = findSingle(listRef.current!, `[id="${id}"]`);

                element?.scrollIntoView?.({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
            });
        };

        const autoUpdateModel = () => {
            if (props.selectOnFocus && props.autoOptionFocus && !hasValue() && !props.multiple && focusedState) {
                const focusedOptionIndex = findFirstFocusedOptionIndex();

                setFocusedOptionIndexState(focusedOptionIndex);
                onOptionSelect(null as any, getOptions()[focusedOptionIndex!]);
            }
        };

        const updateModel = (event: Event, value: any) => {
            setValueState([
                value,
                {
                    originalEvent: event,
                    value: value
                }
            ]);
        };

        const hasValue = () => {
            return isNotEmpty(valueState);
        };

        // effects
        React.useEffect(() => {
            autoUpdateModel();

            return () => {
                if (searchTimeout.current) {
                    clearTimeout(searchTimeout.current);
                    searchTimeout.current = null;
                }
            };
        }, []);

        // computed
        const optionsListFlat = React.useMemo(() => {
            //return this.filterValue ? FilterService.filter(this.options, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale) : this.options;
            return props.options;
        }, [props.options]);

        const optionsListGroup = React.useMemo(() => {
            const filteredOptions = [];

            (props.options || []).forEach((optionGroup) => {
                const optionGroupChildren = getOptionGroupChildren(optionGroup) || [];
                const filteredChildren = optionGroupChildren; //this.filterValue ? FilterService.filter(optionGroupChildren, this.searchFields, this.filterValue, this.filterMatchMode, this.filterLocale) : optionGroupChildren;

                if (filteredChildren?.length) {
                    filteredOptions.push({ optionGroup, group: true }, ...filteredChildren);
                }
            });

            return filteredOptions;
        }, [props.options]);

        const visibleOptions = props.optionGroupLabel ? optionsListGroup : optionsListFlat;
        const equalityKey = props.optionValue ? undefined : props.optionKey;

        return {
            state,
            // element refs
            listRef,
            firstHiddenFocusableRef,
            lastHiddenFocusableRef,
            // methods
            getOptions,
            getOptionId,
            getOptionLabel,
            getOptionValue,
            isOptionDisabled,
            isOptionGroup,
            getOptionGroupLabel,
            getOptionGroupChildren,
            getFocusedOptionId,
            getAriaSetSize,
            getAriaPosInset,
            onFirstHiddenFocus,
            onLastHiddenFocus,
            onFocusOut,
            onListFocus,
            onListBlur,
            onListKeyDown,
            onOptionSelect,
            onOptionMouseDown,
            onOptionMouseMove,
            onOptionTouchEnd,
            onFilterChange,
            onFilterBlur,
            onFilterKeyDown,
            isOptionMatched,
            isValidOption,
            isValidSelectedOption,
            isSelected,
            changeFocusedOptionIndex,
            scrollInView,
            updateModel,
            autoUpdateModel,
            equalityKey,
            hasValue
        };
    }
});
