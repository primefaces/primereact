import { withHeadless } from '@primereact/core/headless';
import { useControlledState } from '@primereact/hooks/use-controlled-state';
import { isTouchDevice } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useInputOtp.props';

export const useInputOtp = withHeadless({
    name: 'useInputOtp',
    defaultProps,
    setup({ props }) {
        const [valueState, setValueState] = useControlledState({
            value: props.value,
            defaultValue: props.defaultValue,
            onChange: props.onValueChange
        });

        const tokens = React.useMemo(() => {
            const val = valueState ?? '';

            return typeof val === 'string' && val ? val.split('') : [];
        }, [valueState]);

        const textCounter = React.useRef(0);

        const state = {
            value: valueState,
            tokens
        };

        const registerText = React.useCallback(() => {
            const index = textCounter.current;

            textCounter.current += 1;

            return index;
        }, []);

        const isDigit = (key: string) => key >= '0' && key <= '9';

        const inputMode = React.useMemo(() => {
            return props.integerOnly ? 'numeric' : 'text';
        }, [props.integerOnly]);

        const inputType = React.useMemo(() => {
            return props.mask ? 'password' : 'text';
        }, [props.mask]);

        const updateTokens = (event: React.SyntheticEvent<HTMLInputElement>, currentTokens: string[]) => {
            const newValue = currentTokens.join('');

            setValueState([
                newValue,
                {
                    originalEvent: event,
                    value: newValue
                }
            ]);
        };

        const onInput = (event: React.SyntheticEvent<HTMLInputElement>, index: number) => {
            const inputEvent = event.nativeEvent as InputEvent;
            const target = event.target as HTMLInputElement;
            const currentTokens = [...tokens];

            currentTokens[index] = target.value;
            updateTokens(event, currentTokens);

            if (inputEvent.inputType === 'deleteContentBackward') {
                moveToPrev(event);
            } else if (inputEvent.inputType === 'insertText' || inputEvent.inputType === 'deleteContentForward' || (isTouchDevice() && event instanceof CustomEvent)) {
                moveToNext(event);
            }
        };

        const moveToPrev = (event: React.SyntheticEvent<HTMLInputElement>) => {
            const prevInput = findPrevInput(event.target as HTMLInputElement);

            if (prevInput) {
                prevInput.focus();
                prevInput.select();
            }
        };

        const moveToNext = (event: React.SyntheticEvent<HTMLInputElement>) => {
            const nextInput = findNextInput(event.target as HTMLInputElement);

            if (nextInput) {
                nextInput.focus();
                nextInput.select();
            }
        };

        const findNextInput = (element: HTMLInputElement): HTMLInputElement | null => {
            const nextInput = element.nextElementSibling;

            if (!nextInput) return null;

            return nextInput.nodeName === 'INPUT' ? (nextInput as HTMLInputElement) : findNextInput(nextInput as HTMLInputElement);
        };

        const findPrevInput = (element: HTMLInputElement): HTMLInputElement | null => {
            const prevInput = element.previousElementSibling;

            if (!prevInput) return null;

            return prevInput.nodeName === 'INPUT' ? (prevInput as HTMLInputElement) : findPrevInput(prevInput as HTMLInputElement);
        };

        const onClick = (event: React.MouseEvent<HTMLInputElement>) => {
            setTimeout(() => (event.target as HTMLInputElement).select(), 1);
        };

        const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.ctrlKey || event.metaKey) {
                return;
            }

            switch (event.code) {
                case 'ArrowLeft':
                    moveToPrev(event);
                    event.preventDefault();

                    break;

                case 'ArrowUp':
                case 'ArrowDown':
                    event.preventDefault();

                    break;

                case 'Backspace':
                    if ((event.target as HTMLInputElement).value.length === 0) {
                        moveToPrev(event);
                        event.preventDefault();
                    }

                    break;

                case 'ArrowRight':
                    moveToNext(event);
                    event.preventDefault();

                    break;

                case 'Enter':
                case 'NumpadEnter':
                case 'Tab':
                    break;

                default:
                    if ((props.integerOnly && (event.code === 'Space' || !isDigit(event.key))) || (tokens.length >= textCounter.current && event.code !== 'Delete')) {
                        event.preventDefault();
                    }

                    break;
            }
        };

        const onPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
            const paste = event.clipboardData.getData('text');

            if (paste.length) {
                const pastedCode = paste.substring(0, textCounter.current);

                if (!props.integerOnly || !isNaN(Number(pastedCode))) {
                    const newTokens = pastedCode.split('');

                    updateTokens(event, newTokens);
                }
            }

            event.preventDefault();
        };

        return {
            state,
            // methods
            registerText,
            inputMode,
            inputType,
            onInput,
            onClick,
            onKeyDown,
            onPaste
        };
    }
});
