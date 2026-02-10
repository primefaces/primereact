import { withHeadless } from '@primereact/core/headless';
import { useListbox } from '@primereact/headless/listbox';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { useEventListener } from '@primereact/hooks/use-event-listener';
import { usePresence } from '@primereact/hooks/use-presence';
import type { useListboxValueChangeEvent } from '@primereact/types/shared/listbox';
import { focus, getOuterWidth, isNotEmpty } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useAutoComplete.props';

export const useAutoComplete = withHeadless({
    name: 'useAutoComplete',
    defaultProps,
    setup({ props }) {
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

        const [openState, setOpenState] = useControlledState({
            value: props.open,
            defaultValue: props.defaultOpen ?? false,
            onChange: props.onOpenChange
        });

        const presence = usePresence(!!openState);

        const [focusedState, setFocusedState] = React.useState(false);
        const [searchingState, setSearchingState] = React.useState<boolean>(false);
        const searchTimeout = React.useRef<NodeJS.Timeout | null>(null);
        const focusOnShow = React.useRef<boolean>(false);

        const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
        const [positionerEl, setPositionerEl] = React.useState<HTMLDivElement | null>(null);

        const inputRef = React.useRef<{ elementRef: React.RefObject<HTMLInputElement> } | null>(null);
        const anchorRef = React.useRef<HTMLElement>(null);
        const positionerRef = React.useRef<HTMLDivElement>(null);

        const setAnchorRef = React.useCallback((node: HTMLElement | null) => {
            anchorRef.current = node;
            setAnchorEl(node);
        }, []);

        const setPositionerRef = React.useCallback((node: HTMLDivElement | null) => {
            positionerRef.current = node;
            setPositionerEl(node);
        }, []);

        const state = {
            value: valueState,
            inputValue: inputValueState,
            opened: openState,
            focused: focusedState,
            focusedOptionIndex: listbox.state.focusedOptionIndex,
            searching: searchingState,
            anchorEl,
            positionerEl
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
            setOpenState([true, { value: true }]);
        };

        const hide = () => {
            setOpenState([false, { value: false }]);
            setSearchingState(false);
            listbox.changeFocusedOptionIndex(new Event('blur') as unknown as React.KeyboardEvent, -1);
        };

        const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (searchTimeout.current) {
                clearTimeout(searchTimeout.current);
            }

            const inputValue = event.target.value;

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
                    if (openState) {
                        listbox.onListKeyDown(event);
                    }

                    break;

                case 'Escape':
                case 'Tab':
                    if (openState) {
                        hide();
                    }

                    break;

                default:
                    break;
            }
        };

        const onArrowDownKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (!openState && inputValueState && inputValueState?.length >= (props.minLength ?? 1)) {
                focusOnShow.current = true;
                search(event, inputValueState ?? '', 'input');
                show();
            }

            listbox.onArrowDownKey(event);

            event.preventDefault();
        };

        const onArrowUpKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (!openState && inputValueState && inputValueState?.length >= (props.minLength ?? 1)) {
                focusOnShow.current = true;
                search(event, inputValueState ?? '', 'input');
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

                if (openState) {
                    hide();
                }
            } else {
                listbox.onArrowUpKey(event);
            }

            event.preventDefault();
        };

        const onEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
            const focusedOptionIndex = listbox.state.focusedOptionIndex;

            if (openState && focusedOptionIndex !== -1) {
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
                if (!openState) {
                    focus(inputRef.current?.elementRef.current as HTMLInputElement);
                    setSearchingState(true);

                    if (props.dropdownMode === 'blank') {
                        search(event, '', 'dropdown');
                    } else if (props.dropdownMode === 'current') {
                        search(event, inputValueState ?? '', 'dropdown');
                    }

                    setOpenState([true, { value: true }]);

                    listbox.onListFocus();
                } else {
                    setOpenState([false, { value: false }]);
                    setSearchingState(false);
                }
            }
        };

        const onClearClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            event.preventDefault();
            event.stopPropagation();

            setValueState([
                null,
                {
                    originalEvent: event,
                    value: null,
                    option: null
                }
            ]);

            setInputValueState([
                '',
                {
                    originalEvent: event,
                    query: ''
                }
            ]);

            listbox.updateModel(event, null);

            if (openState) {
                hide();
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
                }
            }
        };

        const getFocusedOptionId = () => {
            return listbox.getFocusedOptionId();
        };

        const hasValue = () => {
            return isNotEmpty(valueState);
        };

        // Event listeners
        const [bindOutsideClickListener, unbindOutsideClickListener] = useEventListener({
            type: 'click',
            listener: (event: Event) => {
                const positionerElement = positionerRef.current;
                const anchorElement = anchorRef.current;

                if (openState && positionerElement && !positionerElement.contains(event.target as Node) && anchorElement && !anchorElement.contains(event.target as Node)) {
                    hide();
                }
            }
        });

        const [bindResizeListener, unbindResizeListener] = useEventListener({
            target: 'window',
            type: 'resize',
            listener: () => {
                if (openState) {
                    hide();
                }
            }
        });

        // effects
        React.useEffect(() => {
            if (searchTimeout.current) {
                clearTimeout(searchTimeout.current);
                searchTimeout.current = null;
            }
        }, []);

        React.useEffect(() => {
            setSearchingState(false);
        }, [props.options]);

        React.useEffect(() => {
            if (openState) {
                bindOutsideClickListener();
                bindResizeListener();
            } else {
                unbindOutsideClickListener();
                unbindResizeListener();
            }
        }, [openState, bindOutsideClickListener, unbindOutsideClickListener, bindResizeListener, unbindResizeListener]);

        React.useEffect(() => {
            if (openState && positionerEl) {
                if (anchorRef.current) {
                    positionerEl.style.minWidth = getOuterWidth(anchorRef.current) + 'px';
                }

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
            }
        }, [openState, positionerEl]);

        return {
            state,
            listbox,
            presence,
            // refs
            inputRef,
            setAnchorRef,
            setPositionerRef,
            // methods
            onChange,
            onFocus,
            onBlur,
            onKeyDown,
            onTriggerClick,
            onClearClick,
            onOptionSelect,
            getFocusedOptionId,
            hasValue
        };
    }
});
