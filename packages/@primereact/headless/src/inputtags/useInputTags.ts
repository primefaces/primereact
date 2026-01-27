import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { useListbox } from '@primereact/headless/listbox';
import type { useListboxValueChangeEvent } from '@primereact/types/shared/listbox';
import { focus, getOuterWidth } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useInputTags.props';

export const useInputTags = withHeadless({
    name: 'useInputTags',
    defaultProps,
    setup({ props, elementRef }) {
        const [focusedItemIndexState, setFocusedItemIndexState] = React.useState<number>(-1);
        const [openState, setOpenState] = useControlledState({
            value: props.open,
            defaultValue: props.defaultOpen ?? false,
            onChange: props.onOpenChange
        });
        const [searchingState, setSearchingState] = React.useState<boolean>(false);
        const [focusedState, setFocusedState] = React.useState<boolean>(false);

        const defaultValueRef = React.useRef(props.defaultValue ?? []);
        const [valueState, setValueState] = useControlledState({
            value: props.value,
            defaultValue: defaultValueRef.current,
            onChange: props.onValueChange
        });

        const [inputValueState, setInputValueState] = useControlledState({
            value: props.inputValue,
            defaultValue: props.defaultInputValue ?? '',
            onChange: props.onInputValueChange
        });

        const onListboxValueChange = React.useRef<((event: useListboxValueChangeEvent) => void) | null>(null);
        const listbox = useListbox({
            options: props.options,
            optionKey: props.optionKey,
            optionLabel: props.optionLabel,
            optionValue: props.optionValue,
            optionDisabled: props.optionDisabled,
            optionGroupLabel: props.optionGroupLabel,
            optionGroupChildren: props.optionGroupChildren,
            multiple: false,
            disabled: props.disabled,
            onValueChange: (event: useListboxValueChangeEvent) => onListboxValueChange.current?.(event)
        });

        const inputRef = React.useRef<{ elementRef: React.RefObject<HTMLInputElement> } | null>(null); //TODO:
        const portalRef = React.useRef<{ containerRef: { current: { elementRef: React.RefObject<HTMLDivElement> } } } | null>(null);
        const itemRefs = React.useRef<Map<number, HTMLElement>>(new Map());
        const searchTimeout = React.useRef<NodeJS.Timeout | null>(null);
        const focusOnShow = React.useRef<boolean>(false);

        const hasDropdown = !!props.onComplete;

        const state = {
            value: valueState ?? [],
            inputValue: inputValueState ?? '',
            focusedItemIndex: focusedItemIndexState,
            opened: openState,
            searching: searchingState,
            focused: focusedState,
            focusedOptionIndex: listbox.state.focusedOptionIndex
        };

        const search = (event: React.SyntheticEvent, query: string) => {
            //allow empty string but not undefined or null
            if (query === undefined || query === null) {
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

        const changeVisibleState = (isVisible: boolean) => {
            setOpenState([isVisible, { value: isVisible }]);
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

            const optionLabel = option ? listbox.getOptionLabel(option) : String(selectedValue);

            addItem(optionLabel);
            listbox.changeFocusedOptionIndex(new Event('select') as unknown as React.KeyboardEvent, -1);
            focus(inputRef.current?.elementRef.current as HTMLInputElement);
        };

        // Connect listbox onValueChange to onOptionSelect
        onListboxValueChange.current = onOptionSelect;

        const addItem = (tag: string) => {
            const trimmedTag = tag.trim();

            if (!trimmedTag || props.disabled) return;

            if (props.max && valueState && valueState.length >= props.max) return;

            if (!props.allowDuplicate && valueState && valueState.includes(trimmedTag)) return;

            const newValue = [...(valueState || []), trimmedTag];

            setValueState([
                newValue,
                {
                    value: newValue
                }
            ]);

            if (props.onAdd) {
                props.onAdd({
                    value: trimmedTag
                });
            }

            setInputValueState([
                '',
                {
                    query: ''
                }
            ]);
        };

        const removeItem = (index: number) => {
            if (props.disabled || !valueState) return;

            const newValue = valueState.filter((_: unknown, i: number) => i !== index);

            setValueState([
                newValue,
                {
                    value: newValue
                }
            ]);

            if (props.onRemove) {
                props.onRemove({
                    value: valueState[index],
                    index
                });
            }

            setFocusedItemIndexState(-1);
        };

        const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (searchTimeout.current) {
                clearTimeout(searchTimeout.current);
            }

            const newValue = event.target.value;

            if (focusedItemIndexState !== -1) {
                setFocusedItemIndexState(-1);
            }

            if (props.delimiter) {
                const delimiterRegex = typeof props.delimiter === 'string' ? new RegExp(props.delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) : props.delimiter;

                if (delimiterRegex.test(newValue)) {
                    const tags = newValue
                        .split(delimiterRegex)
                        .map((tag) => tag.trim())
                        .filter((tag) => tag.length > 0);

                    tags.forEach((tag) => addItem(tag));

                    return;
                }
            }

            setInputValueState([
                newValue,
                {
                    originalEvent: event,
                    query: newValue
                }
            ]);

            if (hasDropdown) {
                setSearchingState(true);

                searchTimeout.current = setTimeout(() => {
                    search(event, newValue);
                    listbox.changeFocusedOptionIndex(new Event('input') as unknown as React.KeyboardEvent, -1);
                }, props.delay);
            }
        };

        const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (props.disabled) return;

            switch (event.key) {
                case 'Tab':
                    onTabKey();
                    break;

                case 'Enter':
                    onEnterKey(event);
                    break;

                case 'ArrowDown':
                case 'ArrowUp':
                    if (hasDropdown) {
                        if (!openState && inputValueState && inputValueState.length >= (props.minLength ?? 1)) {
                            focusOnShow.current = true;
                            show();
                        }

                        listbox.onListKeyDown(event);
                        event.preventDefault();
                    }

                    break;

                case 'ArrowLeft':
                    onArrowLeftKey();

                    break;

                case 'ArrowRight':
                    onArrowRightKey();

                    break;

                case 'Backspace':
                    onBackspaceKey();

                    break;

                case 'Escape':
                    if (openState) {
                        hide();
                        event.preventDefault();
                    }

                    break;

                case 'Home':
                case 'End':
                case 'PageUp':
                case 'PageDown':
                    if (hasDropdown && openState) {
                        listbox.onListKeyDown(event);
                    }

                    break;

                default:
                    if (hasInputValue && props.delimiter && typeof props.delimiter === 'string' && event.key === props.delimiter) {
                        addItem(inputValueState!);
                    }

                    break;
            }
        };

        const onClick = () => {
            setFocusedItemIndexState(-1);

            if (inputRef.current && !props.disabled) {
                focus(inputRef.current?.elementRef.current);
            }
        };

        const onPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
            if (!props.addOnPaste) return;

            const pastedText = event.clipboardData.getData('text');

            if (props.delimiter) {
                const delimiterRegex = typeof props.delimiter === 'string' ? new RegExp(props.delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) : props.delimiter;

                const tags = pastedText
                    .split(delimiterRegex)
                    .map((tag) => tag.trim())
                    .filter((tag) => tag.length > 0);

                tags.forEach((tag) => addItem(tag));
            } else {
                addItem(pastedText);
            }

            setTimeout(() => {
                setInputValueState([
                    '',
                    {
                        query: ''
                    }
                ]);
            }, 0);
        };

        const onFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            if (props.disabled) {
                return;
            }

            setFocusedState(true);

            if (hasDropdown) {
                search(event, event.target.value);

                if (props.options && props.options.length > 0) {
                    show();
                }
            }
        };

        const onBlur = () => {
            setFocusedState(false);

            if (props.addOnBlur && hasInputValue) {
                addItem(inputValueState!);
            }

            if (focusedItemIndexState !== -1) {
                setFocusedItemIndexState(-1);
            }
        };

        const onArrowLeftKey = () => {
            let focusIndex = focusedItemIndexState;

            if (isInputEmpty && valueState && valueState.length > 0) {
                focusIndex = focusIndex === -1 ? valueState.length - 1 : focusIndex - 1;

                if (focusIndex < 0) {
                    focusIndex = 0;
                }
            }

            setFocusedItemIndexState(focusIndex);
        };

        const onArrowRightKey = () => {
            let focusIndex = focusedItemIndexState;

            if (isInputEmpty && valueState && valueState.length > 0) {
                if (focusIndex === valueState.length - 1) {
                    focusIndex = -1;

                    if (inputRef.current) {
                        focus(inputRef.current?.elementRef.current);
                    }
                } else if (focusIndex !== -1) {
                    focusIndex++;
                }
            }

            setFocusedItemIndexState(focusIndex);
        };

        const onTabKey = () => {
            if (props.addOnTab && hasInputValue) {
                addItem(inputValueState!);
            }

            if (openState) {
                hide();
            }
        };

        const onEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (hasDropdown && openState && listbox.state.focusedOptionIndex !== -1) {
                const selectedOption = listbox.getOptions()[listbox.state.focusedOptionIndex];

                if (selectedOption) {
                    onOptionSelect({
                        originalEvent: event,
                        value: listbox.getOptionValue(selectedOption)
                    });
                }

                event.preventDefault();
            } else if (hasInputValue) {
                addItem(inputValueState!);
            }
        };

        const onBackspaceKey = () => {
            if (!inputValueState && valueState && valueState.length > 0) {
                const lastIndex = valueState.length - 1;

                removeItem(lastIndex);
            }

            if (focusedItemIndexState !== -1) {
                removeItem(focusedItemIndexState);
            }
        };

        const onItemRemoveClick = (index: number) => {
            if (!valueState) return;

            const newValue = valueState.filter((_: unknown, i: number) => i !== index);

            setValueState([
                newValue,
                {
                    value: newValue
                }
            ]);

            if (inputRef.current) {
                focus(inputRef.current?.elementRef.current);
            }
        };

        const onRemoveAllItems = () => {
            if (props.disabled || !valueState) return;

            setValueState([
                [],
                {
                    value: []
                }
            ]);
        };

        const getFocusedOptionId = () => {
            return listbox.getFocusedOptionId();
        };

        // Computed
        const isInputEmpty = React.useMemo(() => !inputValueState || inputValueState.length === 0, [inputValueState]);
        const hasInputValue = React.useMemo(() => inputValueState && inputValueState.trim(), [inputValueState]);

        // Effects
        React.useEffect(() => {
            if (searchTimeout.current) {
                clearTimeout(searchTimeout.current);
                searchTimeout.current = null;
            }
        }, []);

        React.useEffect(() => {
            if (!hasDropdown) return;

            setSearchingState(false);

            const hasOptions = props.options && props.options.length > 0;

            if (hasOptions && focusedState && !openState) {
                show();
            } else if (!hasOptions && openState) {
                hide();
            }
        }, [props.options]);

        return {
            state,
            listbox,
            // refs
            inputRef,
            portalRef,
            itemRefs,
            // methods
            onClick,
            onChange,
            onKeyDown,
            onPaste,
            onBlur,
            onFocus,
            onItemRemoveClick,
            onRemoveAllItems,
            changeVisibleState,
            onOverlayEnter,
            onOverlayAfterEnter,
            getFocusedOptionId
        };
    }
});
