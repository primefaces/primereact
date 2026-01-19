import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { focus, getOuterWidth, isEmpty, isNotEmpty } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useAutoComplete.props';
import { useListbox } from '@primereact/headless/listbox';
import type { useListboxValueChangeEvent } from '@primereact/types/shared/listbox';

export const useAutoComplete = withHeadless({
    name: 'useAutoComplete',
    defaultProps,
    setup({ props, elementRef }) {
        const onListboxValueChange = React.useRef<((event: useListboxValueChangeEvent) => void) | null>(null);
        const listbox = useListbox({
            value: props.value,
            defaultValue: props.defaultValue,
            options: props.options,
            optionKey: props.optionKey,
            optionLabel: props.optionLabel,
            optionValue: props.optionValue,
            optionDisabled: props.optionDisabled,
            optionGroupLabel: props.optionGroupLabel,
            optionGroupChildren: props.optionGroupChildren,
            disabled: props.disabled,
            locale: props.locale,
            autoOptionFocus: props.autoOptionFocus,
            selectOnFocus: props.selectOnFocus,
            focusOnHover: props.focusOnHover,
            multiple: false,
            metaKeySelection: false,
            onValueChange: (event: useListboxValueChangeEvent) => onListboxValueChange.current?.(event)
        });

        const inputRef = React.useRef<{ elementRef: React.RefObject<HTMLInputElement> } | null>(null);
        const portalRef = React.useRef<{ containerRef: { current: { elementRef: React.RefObject<HTMLDivElement> } } } | null>(null);
        const searchTimeout = React.useRef<NodeJS.Timeout | null>(null);
        const focusOnShow = React.useRef<boolean>(false);

        const [valueState, setValueState] = useControlledState({
            value: props.value,
            defaultValue: props.defaultValue,
            onChange: props.onValueChange
        });

        const [inputValueState, setInputValueState] = useControlledState({
            value: props.inputValue,
            defaultValue: props.defaultInputValue ?? '',
            onChange: props.onInputValueChange
        });

        const [overlayVisibleState, setOverlayVisibleState] = React.useState<boolean>(false);
        const [showClearIcon, setShowClearIcon] = React.useState(true);
        const [focusedState, setFocusedState] = React.useState(false);
        const [searchingState, setSearchingState] = React.useState<boolean>(false);

        const state = {
            value: valueState,
            inputValue: inputValueState,
            overlayVisible: overlayVisibleState,
            showClearIcon,
            focused: focusedState,
            focusedOptionIndex: listbox.state.focusedOptionIndex,
            searching: searchingState
        };

        const search = (event: React.SyntheticEvent, query: string, source: string) => {
            //allow empty string but not undefined or null
            if (query === undefined || query === null) {
                return;
            }

            //do not search blank values on input change
            if (source === 'input' && query.trim().length === 0) {
                return;
            }

            if (props.onComplete) {
                props.onComplete({
                    originalEvent: event,
                    query
                });
            }
        };

        const show = () => {
            setOverlayVisibleState(true);
        };

        const hide = () => {
            setOverlayVisibleState(false);
            setSearchingState(false);
            listbox.changeFocusedOptionIndex(new Event('blur') as unknown as React.KeyboardEvent, -1);
        };

        const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (searchTimeout.current) {
                clearTimeout(searchTimeout.current);
            }

            const inputValue = event.target.value;

            setShowClearIcon(!isEmpty(inputValue));

            if (hasValue()) {
                const selectedOptionIndex = listbox.findSelectedOptionIndex();
                const selectedOption = selectedOptionIndex !== -1 ? listbox.getOptions()[selectedOptionIndex] : null;
                const selectedLabel = selectedOption ? listbox.getOptionLabel(selectedOption) : '';

                if (inputValue !== selectedLabel) {
                    setValueState([
                        null,
                        {
                            originalEvent: event,
                            value: null,
                            option: null
                        }
                    ]);

                    listbox.updateModel(event, null);
                }
            }

            if (inputValue.length === 0) {
                hide();
            } else {
                if (inputValue.length >= (props.minLength ?? 1)) {
                    setSearchingState(true);

                    searchTimeout.current = setTimeout(() => {
                        search(event, inputValue, 'input');
                        show();

                        listbox.changeFocusedOptionIndex(new Event('input') as unknown as React.KeyboardEvent, -1);
                    }, props.delay);
                } else {
                    hide();
                }
            }

            setInputValueState([
                inputValue,
                {
                    originalEvent: event,
                    query: inputValue
                }
            ]);
        };

        const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            if (props.disabled) {
                return;
            }

            if (props.completeOnFocus) {
                search(event, event.target.value, 'focus');
            }

            setFocusedState(true);
        };

        const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            setFocusedState(false);
            listbox.changeFocusedOptionIndex(new Event('blur') as unknown as React.KeyboardEvent, -1);

            if (props.forceSelection) {
                applyForceSelection(event);
            }
        };

        const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            switch (event.code) {
                case 'ArrowDown':
                    onArrowDownKey(event);
                    break;

                case 'ArrowUp':
                    onArrowUpKey(event);
                    break;

                case 'ArrowLeft':
                case 'ArrowRight':
                    listbox.onArrowLeftKey(event, true);
                    break;

                case 'Enter':
                case 'NumpadEnter':
                    onEnterKey(event);
                    break;

                case 'Space':
                    if (!props.autoOptionFocus && listbox.state.focusedOptionIndex !== -1) {
                        listbox.onEnterKey(event);
                    }

                    break;

                case 'Home':
                case 'End':
                case 'PageUp':
                case 'PageDown':
                    if (overlayVisibleState) {
                        listbox.onListKeyDown(event);
                    }

                    break;

                case 'Escape':
                case 'Tab':
                    if (overlayVisibleState) {
                        hide();
                    }

                    break;

                default:
                    break;
            }
        };

        const onArrowDownKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (!overlayVisibleState && inputValueState && inputValueState?.length >= (props.minLength ?? 1)) {
                focusOnShow.current = true;
                show();
            }

            listbox.onArrowDownKey(event);

            event.preventDefault();
        };

        const onArrowUpKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (!overlayVisibleState && inputValueState && inputValueState?.length >= (props.minLength ?? 1)) {
                focusOnShow.current = true;
                show();
            }

            if (event.altKey) {
                const focusedOptionIndex = listbox.state.focusedOptionIndex;

                if (focusedOptionIndex !== -1) {
                    onOptionSelect({
                        originalEvent: event,
                        value: listbox.getOptions()[focusedOptionIndex]
                    });
                }

                if (overlayVisibleState) {
                    hide();
                }
            } else {
                listbox.onArrowUpKey(event);
            }

            event.preventDefault();
        };

        const onEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
            const focusedOptionIndex = listbox.state.focusedOptionIndex;

            if (overlayVisibleState && focusedOptionIndex !== -1) {
                listbox.onEnterKey(event);

                const selectedOption = listbox.getOptions()[focusedOptionIndex];

                if (selectedOption) {
                    onOptionSelect({
                        originalEvent: event,
                        value: listbox.getOptionValue(selectedOption)
                    });
                }
            }

            event.preventDefault();
        };

        const onTriggerClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            if (!props.disabled) {
                if (!overlayVisibleState) {
                    focus(inputRef.current?.elementRef.current as HTMLInputElement);
                    setSearchingState(true);

                    if (props.dropdownMode === 'blank') {
                        search(event, '', 'dropdown');
                    } else if (props.dropdownMode === 'current') {
                        search(event, inputRef.current?.elementRef.current?.value ?? '', 'dropdown');
                    }

                    setOverlayVisibleState(true);

                    listbox.onListFocus();
                } else {
                    setOverlayVisibleState(false);
                    setSearchingState(false);
                }
            }
        };

        const onClearClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setInputValueState([
                null,
                {
                    originalEvent: event,
                    query: ''
                }
            ]);
            setShowClearIcon(false);

            if (overlayVisibleState) {
                setOverlayVisibleState(false);
            }

            if (inputRef.current?.elementRef?.current) {
                inputRef.current.elementRef.current.value = '';
            }
        };

        const onOverlayEnter = () => {
            if (portalRef?.current?.containerRef?.current?.elementRef?.current) {
                const element = portalRef.current.containerRef.current.elementRef.current;

                if (elementRef?.current) {
                    element.style.minWidth = getOuterWidth(elementRef.current) + 'px';
                }
            }
        };

        const onOverlayAfterEnter = () => {
            if (focusOnShow.current) {
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        const focusedOptionIndex = listbox.state.focusedOptionIndex;
                        const indexToFocus = focusedOptionIndex !== -1 ? focusedOptionIndex : listbox.findFirstFocusedOptionIndex();

                        listbox.changeFocusedOptionIndex(new Event('focus') as unknown as React.KeyboardEvent, indexToFocus);
                        focusOnShow.current = false;
                    });
                });
            }
        };

        const onOptionSelect = (event: { originalEvent: React.SyntheticEvent; value: unknown }) => {
            const selectedValue = event.value;

            const option = listbox.getOptions().find((opt: unknown) => {
                const optValue = listbox.getOptionValue(opt);

                return listbox.isEquals(optValue, selectedValue);
            });

            const optionLabel = option ? listbox.getOptionLabel(option) : '';

            setValueState([
                selectedValue,
                {
                    originalEvent: event.originalEvent,
                    value: selectedValue,
                    option
                }
            ]);

            setInputValueState([
                optionLabel,
                {
                    originalEvent: event.originalEvent,
                    query: optionLabel
                }
            ]);

            hide();

            focus(inputRef.current?.elementRef.current as HTMLInputElement);
        };

        // Connect listbox onValueChange to onOptionSelect
        onListboxValueChange.current = onOptionSelect;

        const isOptionMatched = (option: unknown, value: string) => {
            return listbox.isValidOption(option) && listbox.getOptionLabel(option)?.toLocaleLowerCase(props.locale) === value.toLocaleLowerCase(props.locale);
        };

        const applyForceSelection = (event: React.FocusEvent<HTMLInputElement>) => {
            if (props.options && props.options.length > 0) {
                const matchedValue = listbox.getOptions().find((option) => isOptionMatched(option, inputValueState || ''));

                if (matchedValue !== undefined) {
                    const matchedOption = listbox.getOptions().find((opt: unknown) => listbox.getOptionValue(opt) === matchedValue);
                    const matchedLabel = matchedOption ? listbox.getOptionLabel(matchedOption) : '';

                    setValueState([
                        matchedValue,
                        {
                            originalEvent: event,
                            value: matchedValue,
                            option: matchedOption
                        }
                    ]);

                    setInputValueState([
                        matchedLabel,
                        {
                            originalEvent: event as unknown as React.ChangeEvent<HTMLInputElement>,
                            query: matchedLabel
                        }
                    ]);
                } else {
                    setInputValueState([
                        '',
                        {
                            originalEvent: event as unknown as React.ChangeEvent<HTMLInputElement>,
                            query: ''
                        }
                    ]);

                    setValueState([
                        null,
                        {
                            originalEvent: event,
                            value: null,
                            option: null
                        }
                    ]);

                    if (inputRef.current?.elementRef?.current) {
                        inputRef.current.elementRef.current.value = '';
                    }

                    setShowClearIcon(false);
                }
            }
        };

        const changeVisibleState = (isVisible: boolean) => {
            setOverlayVisibleState(isVisible);
        };

        const getFocusedOptionId = () => {
            return listbox.getFocusedOptionId();
        };

        const hasValue = () => {
            return isNotEmpty(valueState);
        };

        // effects
        React.useEffect(() => {
            if (searchTimeout.current) {
                clearTimeout(searchTimeout.current);
                searchTimeout.current = null;
            }
        }, []);

        React.useEffect(() => {
            if (isEmpty(valueState)) {
                setShowClearIcon(false);
            }
        }, [valueState]);

        React.useEffect(() => {
            setSearchingState(false);
        }, [props.options]);

        return {
            state,
            listbox,
            // refs
            inputRef,
            portalRef,
            // methods
            onChange,
            onFocus,
            onBlur,
            onKeyDown,
            onTriggerClick,
            onClearClick,
            onOverlayEnter,
            onOverlayAfterEnter,
            onOptionSelect,
            changeVisibleState,
            getFocusedOptionId
        };
    }
});
