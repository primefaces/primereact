import { withHeadless } from '@primereact/core/headless';
import { useInputOtpProps } from '@primereact/types/shared/inputotp';
import { isTouchDevice } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useInputOtp.props';

export const useInputOtp = withHeadless({
    name: 'useInputOtp',
    defaultProps,
    setup({ props }) {
        const [valueState, setValueState] = React.useState<useInputOtpProps['value']>(props.value ?? props.defaultValue ?? null);
        const [tokens, setTokens] = React.useState<string[]>(() => {
            const initialValue = props.value ?? props.defaultValue ?? '';

            return initialValue && typeof initialValue === 'string' ? initialValue.split('') : [];
        });
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

        // React.useEffect(() => {
        //     textCounter.current = 0;

        //     return () => {
        //         textCounter.current = 0;
        //     };
        // }, []);

        const inputMode = React.useCallback(() => {
            return props.integerOnly ? 'numeric' : 'text';
        }, [props.integerOnly]);

        const inputType = React.useCallback(() => {
            return props.mask ? 'password' : 'text';
        }, [props.maks]);

        const updateValue = (event: React.FormEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>) => {
            const newValue = tokens.join('');

            setValueState(newValue);

            props.onValueChange?.({
                originalEvent: event,
                value: newValue
            });
        };

        const onInput = (event: React.FormEvent<HTMLInputElement>, index: number) => {
            const inputEvent = event.nativeEvent as InputEvent;
            const target = event.target as HTMLInputElement;
            const currentTokens = [...tokens];

            currentTokens[index] = target.value;
            setTokens(currentTokens);
            updateValue(event);

            if (inputEvent.inputType === 'deleteContentBackward') {
                moveToPrev(event);
            } else if (inputEvent.inputType === 'insertText' || inputEvent.inputType === 'deleteContentForward' || (isTouchDevice() && event instanceof CustomEvent)) {
                moveToNext(event);
            }
        };

        const moveToPrev = (event: React.FormEvent<HTMLInputElement>) => {
            const prevInput = findPrevInput(event.target as HTMLInputElement);

            if (prevInput) {
                prevInput.focus();
                prevInput.select();
            }
        };

        const moveToNext = (event: React.FormEvent<HTMLInputElement>) => {
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
                    if ((props.integerOnly && !(event.code !== 'Space' && Number(event.key) >= 0 && Number(event.key) <= 9)) || (tokens.join('').length >= textCounter.current && event.code !== 'Delete')) {
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

                    setTokens(newTokens);
                    updateValue(event);
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
