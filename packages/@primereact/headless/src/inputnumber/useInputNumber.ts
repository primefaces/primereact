import { withHeadless } from '@primereact/core/headless';
import { useControlledState, useMountEffect, useNumberFormatter, useUnmountEffect, useUpdateEffect } from '@primereact/hooks';
import { useInputNumberProps } from '@primereact/types/shared/inputnumber';
import { clearSelection, getSelection, isEmpty, isNotEmpty } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useInputNumber.props';

export const useInputNumber = withHeadless({
    name: 'useInputNumber',
    defaultProps,
    setup({ props }) {
        const [valueState, setValueState] = useControlledState({
            value: props.value,
            defaultValue: props.defaultValue,
            onChange: props.onValueChange
        });

        const formatter = useNumberFormatter({
            value: valueState,
            locale: props.locale,
            localeMatcher: props.localeMatcher,
            mode: props.mode,
            currency: props.currency,
            currencyDisplay: props.currencyDisplay,
            useGrouping: props.useGrouping,
            minFractionDigits: props.minFractionDigits,
            maxFractionDigits: props.maxFractionDigits,
            roundingMode: props.roundingMode,
            prefix: props.prefix,
            suffix: props.suffix,
            min: props.min,
            format: props.format
        });

        const {
            formattedValue,
            formatValue,
            parseValue,
            addWithPrecision,
            isDecimalMode,
            isNumeralChar,
            isMinusSign: isMinusSignFn,
            isDecimalSign: isDecimalSignFn,
            allowMinusSign,
            getDecimalCharIndexes,
            getCharIndexes,
            getDecimalLength,
            concatValues,
            groupChar,
            prefixChar,
            suffixChar,
            resolvedOptions
        } = formatter;

        const timer = React.useRef<NodeJS.Timeout | null>(null);
        const lastValue = React.useRef<string | null>(null);
        const isSpecialChar = React.useRef<boolean | null>(null);
        const valueRef = React.useRef(valueState);

        valueRef.current = valueState;

        const state = {
            value: valueState,
            formattedValue
        };

        const spin = (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement> | React.PointerEvent<HTMLButtonElement> | null, dir: number) => {
            const step = (props.step ?? 1) * dir;

            if (event) {
                const currentValue = parseValue((event.currentTarget as HTMLInputElement).value) || 0;
                const newValue = validateValue(addWithPrecision(Number(currentValue), step));

                updateInput(event, newValue as number, null, 'spin', String(currentValue));
                updateModel(event, newValue as useInputNumberProps['value']);
                handleOnInput(event, String(currentValue), newValue as number);
            } else {
                const currentValue = valueRef.current ?? 0;
                const newValue = validateValue(addWithPrecision(Number(currentValue), step));

                updateModel(null, newValue as useInputNumberProps['value']);
                handleOnInput(null, String(currentValue), newValue as number);
            }
        };

        const repeat = (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement> | React.PointerEvent<HTMLButtonElement> | null, interval: number | undefined, dir: number) => {
            if (props.readOnly) {
                return;
            }

            const i = interval || 500;

            clearTimer();
            timer.current = setTimeout(() => {
                repeat(event, 40, dir);
            }, i);

            spin(event, dir);
        };

        const increment = (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement> | React.PointerEvent<HTMLButtonElement> | null, dir: number) => {
            if (!props.disabled) {
                repeat(event, undefined, dir ?? props.step ?? 1);
                event?.preventDefault();
            }
        };

        const decrement = (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement> | React.PointerEvent<HTMLButtonElement> | null, dir: number) => {
            if (!props.disabled) {
                repeat(event, undefined, dir ?? (props.step ?? 1) * -1);
                event?.preventDefault();
            }
        };

        const stepUp = () => {
            increment(null, props.step ?? 1);
        };

        const stepDown = () => {
            decrement(null, (props.step ?? 1) * -1);
        };

        const stopSpin = () => {
            if (!props.disabled) {
                clearTimer();
            }
        };

        const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
            if (props.disabled || props.readOnly) {
                return;
            }

            if (isSpecialChar.current) {
                event.currentTarget.value = lastValue.current ?? '';
            }

            isSpecialChar.current = false;
        };

        const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (props.readOnly) {
                return;
            }

            const inputElement = event.currentTarget;

            if (event.altKey || event.ctrlKey || event.metaKey) {
                isSpecialChar.current = true;
                lastValue.current = inputElement.value;

                return;
            }

            lastValue.current = inputElement.value;

            let selectionStart = inputElement.selectionStart ?? 0;
            const selectionEnd = inputElement.selectionEnd ?? 0;
            const selectionRange = selectionEnd - selectionStart;
            const inputValue = inputElement.value;
            let newValueStr = null;
            const code = event.code || event.key;

            switch (code) {
                case 'ArrowUp':
                    spin(event, 1);
                    event.preventDefault();
                    break;

                case 'ArrowDown':
                    spin(event, -1);
                    event.preventDefault();
                    break;

                case 'ArrowLeft':
                    if (selectionRange > 1) {
                        const cursorPosition = isNumeralChar(inputValue.charAt(selectionStart)) ? selectionStart + 1 : selectionStart + 2;

                        event.currentTarget.setSelectionRange(cursorPosition, cursorPosition);
                    } else if (!isNumeralChar(inputValue.charAt(selectionStart - 1))) {
                        event.preventDefault();
                    }

                    break;

                case 'ArrowRight':
                    if (selectionRange > 1) {
                        const cursorPosition = selectionEnd - 1;

                        event.currentTarget.setSelectionRange(cursorPosition, cursorPosition);
                    } else if (!isNumeralChar(inputValue.charAt(selectionStart))) {
                        event.preventDefault();
                    }

                    break;

                case 'Tab':
                case 'Enter':
                case 'NumpadEnter':
                    newValueStr = validateValue(parseValue(inputValue)) as useInputNumberProps['value'];
                    event.currentTarget.value = formatValue(newValueStr);
                    event.currentTarget.setAttribute('aria-valuenow', newValueStr != null ? String(newValueStr) : '');
                    updateModel(event, newValueStr);
                    break;

                case 'Backspace': {
                    event.preventDefault();

                    if (selectionStart === selectionEnd) {
                        if (selectionStart >= inputValue.length && suffixChar !== null) {
                            selectionStart = inputValue.length - suffixChar.length;
                            event.currentTarget.setSelectionRange(selectionStart, selectionStart);
                        }

                        const deleteChar = inputValue.charAt(selectionStart - 1);
                        const { decimalCharIndex, decimalCharIndexWithoutPrefix } = getDecimalCharIndexes(inputValue);

                        if (isNumeralChar(deleteChar)) {
                            const decimalLength = getDecimalLength(inputValue);

                            if (groupChar && new RegExp(`[${groupChar}]`, 'g').test(deleteChar)) {
                                newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
                            } else if (isDecimalSignFn(deleteChar)) {
                                if (decimalLength) {
                                    event.currentTarget.setSelectionRange(selectionStart - 1, selectionStart - 1);
                                } else {
                                    newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                                }
                            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                                const insertedText = isDecimalMode() && (props.minFractionDigits || 0) < decimalLength ? '' : '0';

                                newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
                            } else if (decimalCharIndexWithoutPrefix === 1) {
                                newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
                                const parsed = parseValue(newValueStr);

                                newValueStr = typeof parsed === 'number' && parsed > 0 ? newValueStr : '';
                            } else {
                                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                            }
                        }

                        updateValue(event, newValueStr as string, null, 'delete-single');
                    } else {
                        newValueStr = deleteRange(inputValue, selectionStart, selectionEnd);
                        updateValue(event, newValueStr, null, 'delete-range');
                    }

                    break;
                }

                case 'Delete':
                    event.preventDefault();

                    if (selectionStart === selectionEnd) {
                        const deleteChar = inputValue.charAt(selectionStart);
                        const { decimalCharIndex, decimalCharIndexWithoutPrefix } = getDecimalCharIndexes(inputValue);

                        if (isNumeralChar(deleteChar)) {
                            const decimalLength = getDecimalLength(inputValue);

                            if (groupChar && new RegExp(`[${groupChar}]`, 'g').test(deleteChar)) {
                                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
                            } else if (isDecimalSignFn(deleteChar)) {
                                if (decimalLength) {
                                    event.currentTarget.setSelectionRange(selectionStart + 1, selectionStart + 1);
                                } else {
                                    newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                                }
                            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                                const insertedText = isDecimalMode() && (props.minFractionDigits || 0) < decimalLength ? '' : '0';

                                newValueStr = inputValue.slice(0, selectionStart) + insertedText + inputValue.slice(selectionStart + 1);
                            } else if (decimalCharIndexWithoutPrefix === 1) {
                                newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1);
                                const parsed = parseValue(newValueStr);

                                newValueStr = typeof parsed === 'number' && parsed > 0 ? newValueStr : '';
                            } else {
                                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                            }
                        }

                        updateValue(event, newValueStr as string, null, 'delete-back-single');
                    } else {
                        newValueStr = deleteRange(inputValue, selectionStart, selectionEnd);
                        updateValue(event, newValueStr, null, 'delete-range');
                    }

                    break;

                case 'Home':
                    event.preventDefault();

                    if (isNotEmpty(props.min)) {
                        updateModel(event, props.min ?? 0);
                    }

                    break;

                case 'End':
                    event.preventDefault();

                    if (isNotEmpty(props.max)) {
                        updateModel(event, props.max ?? 100);
                    }

                    break;

                default:
                    break;
            }
        };

        const onInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (props.readOnly) {
                return;
            }

            const char = event.key;
            const isDecimalSign = isDecimalSignFn(char);
            const isMinusSign = isMinusSignFn(char);

            if (event.code !== 'Enter') {
                event.preventDefault();
            }

            if ((Number(char) >= 0 && Number(char) <= 9) || isMinusSign || isDecimalSign) {
                insert(event, char, { isDecimalSign, isMinusSign });
            }
        };

        const onInputPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
            if (props.readOnly) {
                return;
            }

            event.preventDefault();
            const data = (event.clipboardData || (window as Window & { clipboardData?: DataTransfer }).clipboardData)?.getData('Text');

            if (data) {
                const filteredData = parseValue(data);

                if (filteredData != null) {
                    insert(event, filteredData.toString());
                }
            }
        };

        const insert = (event: React.KeyboardEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>, text: string, sign = { isDecimalSign: false, isMinusSign: false }) => {
            const minusCharIndexOnText = text.search(/-/);

            if (!allowMinusSign() && minusCharIndexOnText !== -1) {
                return;
            }

            const selectionStart = (event.currentTarget as HTMLInputElement).selectionStart ?? 0;
            const selectionEnd = (event.currentTarget as HTMLInputElement).selectionEnd ?? 0;
            const inputValue = (event.currentTarget as HTMLInputElement).value.trim();
            const { decimalCharIndex, minusCharIndex, suffixCharIndex, currencyCharIndex } = getCharIndexes(inputValue);
            let newValueStr;

            if (sign.isMinusSign) {
                const isNewMinusSign = minusCharIndex === -1;

                if (selectionStart === 0 || selectionStart === currencyCharIndex + 1) {
                    newValueStr = inputValue;

                    if (isNewMinusSign || selectionEnd !== 0) {
                        newValueStr = insertText(inputValue, text, 0, selectionEnd);
                    }

                    updateValue(event, newValueStr, text, 'insert');
                }
            } else if (sign.isDecimalSign) {
                if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
                    updateValue(event, inputValue, text, 'insert');
                } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
                    newValueStr = insertText(inputValue, text, selectionStart, selectionEnd);
                    updateValue(event, newValueStr, text, 'insert');
                } else if (decimalCharIndex === -1 && props.maxFractionDigits) {
                    newValueStr = insertText(inputValue, text, selectionStart, selectionEnd);
                    updateValue(event, newValueStr, text, 'insert');
                }
            } else {
                const maxFractionDigits = resolvedOptions()?.maximumFractionDigits ?? 0;
                const operation = selectionStart !== selectionEnd ? 'range-insert' : 'insert';

                if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                    if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
                        const charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;

                        newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
                        updateValue(event, newValueStr, text, operation);
                    }
                } else {
                    newValueStr = insertText(inputValue, text, selectionStart, selectionEnd);
                    updateValue(event, newValueStr, text, operation);
                }
            }
        };

        const insertText = (value: string, text: string, start: number, end: number) => {
            const textSplit = text === '.' ? text : text.split('.');

            if (textSplit.length === 2) {
                const decimalCharIndex = value.slice(start, end).search(/[.,]/);

                return decimalCharIndex > 0 ? value.slice(0, start) + formatValue(text) + value.slice(end) : formatValue(text) || value;
            } else if (end - start === value.length) {
                return formatValue(text);
            } else if (start === 0) {
                return text + value.slice(end);
            } else if (end === value.length) {
                return value.slice(0, start) + text;
            } else {
                return value.slice(0, start) + text + value.slice(end);
            }
        };

        const deleteRange = (value: string, start: number, end: number) => {
            let newValueStr;

            if (end - start === value.length) newValueStr = '';
            else if (start === 0) newValueStr = value.slice(end);
            else if (end === value.length) newValueStr = value.slice(0, start);
            else newValueStr = value.slice(0, start) + value.slice(end);

            return newValueStr;
        };

        const initCursor = (event: React.SyntheticEvent<HTMLInputElement | HTMLButtonElement>) => {
            const inputEl = event.currentTarget as HTMLInputElement;

            let inputValue = inputEl.value;
            let selectionStart = inputEl.selectionStart ?? 0;
            const valueLength = inputValue.length;
            let index = null;

            // remove prefix
            const prefixLength = (prefixChar || '').length;

            inputValue = inputValue.replace(prefixChar || '', '');
            selectionStart = selectionStart - prefixLength;

            let char = inputValue.charAt(selectionStart);

            if (isNumeralChar(char)) {
                return selectionStart + prefixLength;
            }

            //left
            let i = selectionStart - 1;

            while (i >= 0) {
                char = inputValue.charAt(i);

                if (isNumeralChar(char)) {
                    index = i + prefixLength;
                    break;
                } else {
                    i--;
                }
            }

            if (index !== null) {
                if (inputEl.setSelectionRange) inputEl.setSelectionRange(index + 1, index + 1);
            } else {
                i = selectionStart;

                while (i < valueLength) {
                    char = inputValue.charAt(i);

                    if (isNumeralChar(char)) {
                        index = i + prefixLength;
                        break;
                    } else {
                        i++;
                    }
                }

                if (index !== null) {
                    if (inputEl.setSelectionRange) inputEl.setSelectionRange(index, index);
                }
            }

            return index || 0;
        };

        const onInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
            if (!props.readOnly && (event.currentTarget as HTMLInputElement).value !== getSelection()) {
                initCursor(event);
            }
        };

        const changeValue = () => {
            const _value = props.value ?? props.defaultValue ?? null;
            const val = validateValueByLimit(_value);

            updateInputValue(val);

            const newValue = validateValue(_value);

            if (_value !== null && _value !== newValue) {
                updateModel(null, newValue as useInputNumberProps['value']);
            }
        };

        const updateValue = (event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>, valueStr: string, insertedValueStr: string | null, operation: string) => {
            const currentValue = (event.currentTarget as HTMLInputElement).value;
            let newValue = null;

            if (valueStr != null) {
                newValue = parseValue(valueStr);
                newValue = !newValue && !props.allowEmpty ? 0 : newValue;

                updateInput(event, newValue, insertedValueStr, operation, valueStr);
                handleOnInput(event, currentValue, newValue);
            }
        };

        const isValueChanged = (currentValue: string | number | null, newValue: number | string | null) => {
            if (newValue === null && currentValue !== null) {
                return true;
            }

            if (newValue != null) {
                const parsedCurrentValue = typeof currentValue === 'string' ? parseValue(currentValue) : currentValue;

                return newValue !== parsedCurrentValue;
            }

            return false;
        };

        const handleOnInput = (
            event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement> | React.PointerEvent<HTMLButtonElement> | null,
            currentValue: string,
            newValue: number | string | null
        ) => {
            if (props.onChange && isValueChanged(currentValue, newValue)) {
                props.onChange({
                    originalEvent: event,
                    value: newValue as number
                });
            }
        };

        const validateValue = (value: number | string | null) => {
            if (value === '-' || value == null) {
                return null;
            }

            if (props.min != null && typeof props.min === 'number' && typeof value === 'number' && value < props.min) {
                return props.min;
            }

            if (props.max != null && typeof props.max === 'number' && typeof value === 'number' && value > props.max) {
                return props.max;
            }

            return value;
        };

        const validateValueByLimit = (value: number | null) => {
            if (isEmpty(value)) {
                return null;
            }

            if (props.min !== undefined && props.min !== null && value !== null && value < props.min) {
                return props.min;
            }

            if (props.max !== undefined && props.max !== null && value !== null && value > props.max) {
                return props.max;
            }

            return value;
        };

        const updateInput = (
            event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement> | React.PointerEvent<HTMLButtonElement>,
            value: number | string | null,
            insertedValueStr: string | null,
            operation: string,
            valueStr: string
        ) => {
            const inputEl = event.currentTarget as HTMLInputElement;
            const inputValue = inputEl.value ?? '';

            let newValue = formatValue(value);
            const currentLength = inputValue.length;

            if (newValue !== valueStr) {
                newValue = concatValues(newValue, valueStr);
            }

            if (currentLength === 0) {
                inputEl.value = newValue;
                if (inputEl.setSelectionRange) inputEl.setSelectionRange(0, 0);

                const index = initCursor(event);
                const selectionEnd = index + (insertedValueStr ? insertedValueStr.length : 0);

                if (inputEl.setSelectionRange) inputEl.setSelectionRange(selectionEnd, selectionEnd);
            } else {
                const selectionStart = inputEl.selectionStart ?? 0;
                let selectionEnd = inputEl.selectionEnd ?? 0;

                inputEl.value = newValue;
                const newLength = newValue.length;

                if (operation === 'range-insert') {
                    const startValue = parseValue(inputValue.slice(0, selectionStart));
                    const startValueStr = startValue !== null ? startValue.toString() : '';
                    const startExpr = startValueStr.split('').join(`(${groupChar})?`);
                    const sRegex = new RegExp(startExpr, 'g');

                    sRegex.test(newValue);

                    const tExpr = (insertedValueStr ?? '').split('').join(`(${groupChar})?`);
                    const tRegex = new RegExp(tExpr, 'g');

                    tRegex.test(newValue.slice(sRegex.lastIndex));

                    selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
                    if (inputEl.setSelectionRange) inputEl.setSelectionRange(selectionEnd, selectionEnd);
                } else if (newLength === currentLength) {
                    if (operation === 'insert' || operation === 'delete-back-single') {
                        if (inputEl.setSelectionRange) inputEl.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
                    } else if (operation === 'delete-single') {
                        if (inputEl.setSelectionRange) inputEl.setSelectionRange(selectionEnd - 1, selectionEnd - 1);
                    } else if (operation === 'delete-range' || operation === 'spin') {
                        if (inputEl.setSelectionRange) inputEl.setSelectionRange(selectionEnd, selectionEnd);
                    }
                } else if (operation === 'delete-back-single') {
                    const prevChar = inputValue.charAt(selectionEnd - 1);
                    const nextChar = inputValue.charAt(selectionEnd);
                    const diff = currentLength - newLength;
                    const isGroupCharacter = groupChar ? new RegExp(`[${groupChar}]`, 'g').test(nextChar) : false;

                    if (isGroupCharacter && diff === 1) {
                        selectionEnd += 1;
                    } else if (!isGroupCharacter && isNumeralChar(prevChar)) {
                        selectionEnd += -1 * diff + 1;
                    }

                    if (inputEl.setSelectionRange) inputEl.setSelectionRange(selectionEnd, selectionEnd);
                } else if (inputValue === '-' && operation === 'insert') {
                    if (inputEl.setSelectionRange) inputEl.setSelectionRange(0, 0);

                    const index = initCursor(event);
                    const selectionEnd = index + (insertedValueStr ? insertedValueStr.length : 0) + 1;

                    if (inputEl.setSelectionRange) inputEl.setSelectionRange(selectionEnd, selectionEnd);
                } else {
                    selectionEnd = selectionEnd + (newLength - currentLength);
                    if (inputEl.setSelectionRange) inputEl.setSelectionRange(selectionEnd, selectionEnd);
                }
            }

            inputEl.setAttribute('aria-valuenow', String(value));
        };

        const evaluateEmpty = (newValue: useInputNumberProps['value']) => {
            return !newValue && !props.allowEmpty ? (props.min ?? 0) : newValue;
        };

        const updateInputValue = (newValue: useInputNumberProps['value']) => {
            const newValueEvaluated = evaluateEmpty(newValue);

            setValueState([
                newValueEvaluated,
                {
                    value: newValueEvaluated as number
                }
            ]);
        };

        const updateModel = (
            event: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement> | React.PointerEvent<HTMLButtonElement> | React.PointerEvent<HTMLButtonElement> | null,
            value: useInputNumberProps['value']
        ) => {
            if (props.onValueChange) {
                let originalEvent;

                if (event) {
                    originalEvent = event;
                } else {
                    // Create a dummy synthetic event if event is null
                    originalEvent = {
                        ...({} as React.FormEvent<HTMLInputElement>),
                        target: null as unknown as EventTarget & HTMLInputElement
                    };
                }

                props.onValueChange({
                    originalEvent,
                    value: value as number
                });
            }
        };

        const onInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            if (!props.disabled && !props.readOnly && event.currentTarget.value !== getSelection() && props.highlightOnFocus) {
                event.currentTarget.select();
            }
        };

        const onInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            const input = event.currentTarget as HTMLInputElement;
            const newValue = validateValue(parseValue(input.value)) as useInputNumberProps['value'];

            updateModel(event, newValue);

            if (!props.disabled && !props.readOnly && props.highlightOnFocus) {
                clearSelection();
            }
        };

        const clearTimer = () => {
            if (timer.current) {
                clearInterval(timer.current);
            }
        };

        const maxBoundry = () => {
            return props.max !== undefined && (props.value ?? props.defaultValue ?? 0) >= props.max;
        };

        const minBoundry = () => {
            return props.min !== undefined && (props.value ?? props.defaultValue ?? 0) <= props.min;
        };

        useUnmountEffect(() => {
            clearTimer();
        });

        useMountEffect(() => {
            const newValue = validateValue(valueState as number | null);
            const valueForInput = typeof newValue === 'number' ? newValue : null;

            updateInputValue(valueForInput);

            if (valueState !== null && valueState !== newValue) {
                updateModel(null, newValue as number);
            }
        });

        useUpdateEffect(() => {
            changeValue();
        }, [props.locale, props.localeMatcher, props.mode, props.currency, props.currencyDisplay, props.useGrouping, props.minFractionDigits, props.maxFractionDigits, props.suffix, props.prefix]);

        useUpdateEffect(() => {
            changeValue();
        }, [props.value, props.defaultValue]);

        useUpdateEffect(() => {
            if (props.disabled) {
                clearTimer();
            }
        }, [props.disabled]);

        return {
            state,
            // methods
            onChange: onInput,
            onInput,
            onInputKeyDown,
            onInputKeyPress,
            onInputClick,
            onInputPaste,
            onInputFocus,
            onInputBlur,
            maxBoundry,
            minBoundry,
            increment,
            decrement,
            stepUp,
            stepDown,
            stopSpin
        };
    }
});
