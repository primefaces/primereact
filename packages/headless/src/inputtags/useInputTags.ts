import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { focus } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useInputTags.props';

export const useInputTags = withHeadless({
    name: 'useInputTags',
    defaultProps,
    setup({ props }) {
        const [inputValueState, setInputValueState] = React.useState('');
        const [focusedItemIndexState, setFocusedItemIndexState] = React.useState<number>(-1);

        const defaultValueRef = React.useRef(props.defaultValue ?? []);
        const [valueState, setValueState] = useControlledState({
            value: props.value,
            defaultValue: defaultValueRef.current,
            onChange: props.onValueChange
        });

        const controlRef = React.useRef<HTMLDivElement>(null);
        const inputRef = React.useRef<{ elementRef: React.RefObject<HTMLInputElement> } | null>(null);
        const itemRefs = React.useRef<Map<number, HTMLElement>>(new Map());

        const state = {
            value: valueState ?? [],
            inputValue: inputValueState,
            focusedItemIndex: focusedItemIndexState
        };

        // methods
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

            setInputValueState('');
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

        const onArrowLeft = () => {
            let focusIndex = focusedItemIndexState;

            if (inputValueState.length === 0 && valueState && valueState.length > 0) {
                focusIndex = focusIndex === -1 ? valueState.length - 1 : focusIndex - 1;

                if (focusIndex < 0) {
                    focusIndex = 0;
                }
            }

            setFocusedItemIndexState(focusIndex);
        };

        const onArrowRight = () => {
            let focusIndex = focusedItemIndexState;

            if (inputValueState.length === 0 && valueState && valueState.length > 0) {
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

        const onBackspace = () => {
            if (!inputValueState && valueState && valueState.length > 0) {
                const lastIndex = valueState.length - 1;

                removeItem(lastIndex);
            }

            if (focusedItemIndexState !== -1) {
                removeItem(focusedItemIndexState);
            }
        };

        const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.value;

            if (focusedItemIndexState !== -1) {
                setFocusedItemIndexState(-1);
            }

            if (!props.delimiter) {
                setInputValueState(newValue);

                return;
            }

            const delimiterRegex = typeof props.delimiter === 'string' ? new RegExp(props.delimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')) : props.delimiter;

            if (delimiterRegex.test(newValue)) {
                const tags = newValue
                    .split(delimiterRegex)
                    .map((tag) => tag.trim())
                    .filter((tag) => tag.length > 0);

                tags.forEach((tag) => addItem(tag));
            } else {
                setInputValueState(newValue);
            }
        };

        const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (props.disabled) return;

            switch (event.key) {
                case 'Tab':
                    if (props.addOnTab && inputValueState.trim()) {
                        addItem(inputValueState);
                    }

                    break;

                case 'Enter':
                    if (inputValueState.trim()) {
                        addItem(inputValueState);
                    }

                    break;

                case 'ArrowLeft':
                    onArrowLeft();

                    break;

                case 'ArrowRight':
                    onArrowRight();

                    break;

                case 'Backspace':
                    onBackspace();

                    break;

                default:
                    if (inputValueState.trim() && props.delimiter && typeof props.delimiter === 'string' && event.key === props.delimiter) {
                        addItem(inputValueState);
                    }

                    break;
            }
        };

        const onClick = () => {
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
                setInputValueState('');
            }, 0);
        };

        const onBlur = () => {
            if (props.addOnBlur && inputValueState.trim()) {
                addItem(inputValueState);
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

        return {
            state,
            // refs
            controlRef,
            inputRef,
            itemRefs,
            // methods
            onClick,
            onChange,
            onKeyDown,
            onPaste,
            onBlur,
            onItemRemoveClick,
            onRemoveAllItems
        };
    }
});
