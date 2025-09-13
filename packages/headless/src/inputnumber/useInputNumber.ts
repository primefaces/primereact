import { withHeadless } from '@primereact/core/headless';
import { useMountEffect, useUnmountEffect, useUpdateEffect } from '@primereact/hooks';
import { useInputNumberProps } from '@primereact/types/shared/inputnumber';
import { clearSelection, getSelection, isEmpty, isNotEmpty } from '@primeuix/utils';
import * as React from 'react';
import { defaultProps } from './useInputNumber.props';

export const useInputNumber = withHeadless({
    name: 'useInputNumber',
    defaultProps,
    setup({ props }) {
        const [focused, setFocused] = React.useState<boolean>(false);
        const inputRef = React.useRef<{ elementRef: React.RefObject<HTMLInputElement> } | null>(null);
        const timer = React.useRef<NodeJS.Timeout | null>(null);
        const lastValue = React.useRef<string | null>(null);
        const numberFormat = React.useRef<Intl.NumberFormat | null>(null);
        const groupChar = React.useRef<string | null>(null);
        const prefixChar = React.useRef<string | null>(null);
        const suffixChar = React.useRef<string | null>(null);
        const isSpecialChar = React.useRef<boolean | null>(null);
        const _numeral = React.useRef<RegExp | null>(null);
        const _group = React.useRef<RegExp | null>(null);
        const _minusSign = React.useRef<RegExp | null>(null);
        const _currency = React.useRef<RegExp | null>(null);
        const _decimal = React.useRef<RegExp | null>(null);
        const _suffix = React.useRef<RegExp | null>(null);
        const _prefix = React.useRef<RegExp | null>(null);
        const _index = React.useRef<((d: string) => number | undefined) | null>(null);

        const state = {
            focused
        };

        const getOptions = () => {
            return {
                localeMatcher: props.localeMatcher,
                style: props.mode,
                currency: props.currency,
                currencyDisplay: props.currencyDisplay,
                useGrouping: props.useGrouping,
                minimumFractionDigits: props.minFractionDigits ?? undefined,
                maximumFractionDigits: props.maxFractionDigits ?? undefined,
                roundingMode: props.roundingMode
            };
        };

        const constructParser = () => {
            numberFormat.current = new Intl.NumberFormat(props.locale, getOptions());
            const numerals = [...new Intl.NumberFormat(props.locale, { useGrouping: false }).format(9876543210)].reverse();
            const index = new Map(numerals.map((d, i) => [d, i]));

            _numeral.current = new RegExp(`[${numerals.join('')}]`, 'g');
            _group.current = getGroupingExpression();
            _minusSign.current = getMinusSignExpression();
            _currency.current = getCurrencyExpression();
            _decimal.current = getDecimalExpression();
            _suffix.current = getSuffixExpression();
            _prefix.current = getPrefixExpression();
            _index.current = (d) => index.get(d);
        };

        const escapeRegExp = (text: string) => {
            return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        };

        const getDecimalExpression = () => {
            const formatter = new Intl.NumberFormat(props.locale, { ...getOptions(), useGrouping: false });

            return new RegExp(
                `[${formatter
                    .format(1.1)
                    .replace(_currency.current ?? '', '')
                    .trim()
                    .replace(_numeral.current ?? '', '')}]`,
                'g'
            );
        };

        const getGroupingExpression = () => {
            const formatter = new Intl.NumberFormat(props.locale, { useGrouping: true });

            groupChar.current = formatter
                .format(1000000)
                .trim()
                .replace(_numeral.current ?? '', '')
                .charAt(0);

            return new RegExp(`[${groupChar.current}]`, 'g');
        };

        const getMinusSignExpression = () => {
            const formatter = new Intl.NumberFormat(props.locale, { useGrouping: false });

            return new RegExp(
                `[${formatter
                    .format(-1)
                    .trim()
                    .replace(_numeral.current ?? '', '')}]`,
                'g'
            );
        };

        const getCurrencyExpression = () => {
            if (props.currency) {
                const formatter = new Intl.NumberFormat(props.locale, { style: 'currency', currency: props.currency, currencyDisplay: props.currencyDisplay, minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: props.roundingMode });

                return new RegExp(
                    `[${formatter
                        .format(1)
                        .replace(/\s/g, '')
                        .replace(_numeral.current ?? '', '')
                        .replace(_group.current ?? '', '')}]`,
                    'g'
                );
            }

            return new RegExp(`[]`, 'g');
        };

        const getPrefixExpression = () => {
            if (props.prefix) {
                _prefix.current = new RegExp(escapeRegExp(props.prefix), 'g');
            } else {
                const formatter = new Intl.NumberFormat(props.locale, { style: props.mode, currency: props.currency, currencyDisplay: props.currencyDisplay });

                const prefixStr = formatter.format(1).split('1')[0];

                _prefix.current = new RegExp(escapeRegExp(prefixStr), 'g');
            }

            return _prefix.current;
        };

        const getSuffixExpression = () => {
            if (props.suffix) {
                _suffix.current = new RegExp(escapeRegExp(props.suffix), 'g');
            } else {
                const formatter = new Intl.NumberFormat(props.locale, { style: props.mode, currency: props.currency, currencyDisplay: props.currencyDisplay, minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: props.roundingMode });

                const suffixStr = formatter.format(1).split('1')[1];

                _suffix.current = new RegExp(escapeRegExp(suffixStr), 'g');
            }

            return _suffix.current;
        };

        const formatValue = (value: number | string | null | undefined) => {
            if (value != null) {
                if (typeof value === 'string' && value === '-') {
                    // Minus sign
                    return value;
                }

                if (props.format) {
                    const formatter = new Intl.NumberFormat(props.locale, getOptions());
                    const numericValue = typeof value === 'string' ? Number(value) : value;
                    let formattedValue = formatter.format(numericValue);

                    if (props.prefix) {
                        formattedValue = props.prefix + formattedValue;
                    }

                    if (props.suffix) {
                        formattedValue = formattedValue + props.suffix;
                    }

                    return formattedValue;
                }

                return value.toString();
            }

            return '';
        };

        const parseValue = (text: string) => {
            let cleanText = text
                .replace(_suffix.current || '', '')
                .replace(_prefix.current || '', '')
                .trim()
                .replace(/\s/g, '')
                .replace(_currency.current || '', '');

            if (_decimal.current && _minusSign.current && _numeral.current) {
                const validChars = new RegExp(
                    `[${[...new Intl.NumberFormat(props.locale, { useGrouping: false }).format(9876543210)].reverse().join('')}${new Intl.NumberFormat(props.locale).format(1.1).replace(/[0-9]/g, '')}${new Intl.NumberFormat(props.locale)
                        .format(-1)
                        .replace(/[0-9]/g, '')}]`,
                    'g'
                );

                cleanText = cleanText.match(validChars)?.join('') || '';
            }

            if (_group.current) {
                cleanText = cleanText.replace(_group.current, '');
            }

            if (_minusSign.current) {
                cleanText = cleanText.replace(_minusSign.current, '-');
            }

            if (_decimal.current) {
                cleanText = cleanText.replace(_decimal.current, '.');
            }

            if (_numeral.current && _index.current) {
                cleanText = cleanText.replace(_numeral.current, (d) => {
                    const res = _index.current ? _index.current(d) : undefined;

                    return res !== undefined ? res.toString() : '';
                });
            }

            if (cleanText) {
                if (cleanText === '-') return cleanText;

                const parsedValue = +cleanText;

                return isNaN(parsedValue) ? null : parsedValue;
            }

            return null;
        };

        const getInputElement = (): HTMLInputElement | null => {
            const extractHTMLInput = (ref: HTMLInputElement | { elementRef?: React.RefObject<HTMLInputElement>; inputRef?: React.RefObject<{ elementRef: React.RefObject<HTMLInputElement> }> } | null): HTMLInputElement | null => {
                if (!ref) return null;

                if ('tagName' in ref && ref.tagName === 'INPUT') {
                    return ref;
                } else {
                    if ('inputRef' in ref && ref.inputRef?.current?.elementRef?.current) {
                        return ref.inputRef.current.elementRef.current;
                    }

                    if ('elementRef' in ref && ref.elementRef?.current) {
                        return ref.elementRef.current;
                    }
                }

                return null;
            };

            let targetRef = null;

            if (props.target) {
                targetRef = 'current' in props.target ? props.target.current : props.target;
            }

            const refToUse = targetRef || inputRef.current;

            return extractHTMLInput(refToUse);
        };

        const addWithPrecision = (base: number, increment: number) => {
            const baseStr = base.toString();
            const stepStr = increment.toString();

            const baseDecimalPlaces = baseStr.includes('.') ? baseStr.split('.')[1].length : 0;
            const stepDecimalPlaces = stepStr.includes('.') ? stepStr.split('.')[1].length : 0;

            const maxDecimalPlaces = Math.max(baseDecimalPlaces, stepDecimalPlaces);
            const precision = Math.pow(10, maxDecimalPlaces);

            return Math.round((base + increment) * precision) / precision;
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

        const spin = (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement> | React.PointerEvent<HTMLButtonElement> | null, dir: number) => {
            const inputEl = getInputElement();

            if (inputEl) {
                const step = (props.step ?? 1) * dir;
                const currentValue = parseValue(inputEl.value) || 0;
                const newValue = validateValue(addWithPrecision(currentValue as number, step));

                updateInput(newValue as number, null, 'spin', String(currentValue));
                updateModel(event, newValue as useInputNumberProps['value']);
                handleOnInput(event, String(currentValue), newValue as number);
            }
        };

        const increment = (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement> | React.PointerEvent<HTMLButtonElement>, dir: number) => {
            if (!props.disabled) {
                const inputEl = getInputElement();

                if (inputEl) {
                    inputEl.focus();
                }

                repeat(event, undefined, dir ?? props.step ?? 1);
                event.preventDefault();
            }
        };

        const decrement = (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement> | React.PointerEvent<HTMLButtonElement>, dir: number) => {
            if (!props.disabled) {
                const inputEl = getInputElement();

                if (inputEl) {
                    inputEl.focus();
                }

                repeat(event, undefined, dir ?? (props.step ?? 1) * -1);
                event.preventDefault();
            }
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
                (event.target as HTMLInputElement).value = lastValue.current ?? '';
            }

            isSpecialChar.current = false;
        };

        const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (props.readOnly) {
                return;
            }

            const inputElement = event.target as HTMLInputElement;

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

                        (event.target as HTMLInputElement).setSelectionRange(cursorPosition, cursorPosition);
                    } else if (!isNumeralChar(inputValue.charAt(selectionStart - 1))) {
                        event.preventDefault();
                    }

                    break;

                case 'ArrowRight':
                    if (selectionRange > 1) {
                        const cursorPosition = selectionEnd - 1;

                        (event.target as HTMLInputElement).setSelectionRange(cursorPosition, cursorPosition);
                    } else if (!isNumeralChar(inputValue.charAt(selectionStart))) {
                        event.preventDefault();
                    }

                    break;

                case 'Tab':
                case 'Enter':
                case 'NumpadEnter':
                    newValueStr = validateValue(parseValue(inputValue)) as useInputNumberProps['value'];
                    (event.target as HTMLInputElement).value = formatValue(newValueStr);
                    (event.target as HTMLInputElement).setAttribute('aria-valuenow', newValueStr != null ? String(newValueStr) : '');
                    updateModel(event, newValueStr);
                    break;

                case 'Backspace': {
                    event.preventDefault();

                    if (selectionStart === selectionEnd) {
                        if (selectionStart >= inputValue.length && suffixChar.current !== null) {
                            selectionStart = inputValue.length - suffixChar.current.length;
                            (event.target as HTMLInputElement).setSelectionRange(selectionStart, selectionStart);
                        }

                        const deleteChar = inputValue.charAt(selectionStart - 1);
                        const { decimalCharIndex, decimalCharIndexWithoutPrefix } = getDecimalCharIndexes(inputValue);

                        if (isNumeralChar(deleteChar)) {
                            const decimalLength = getDecimalLength(inputValue);

                            if (_group.current && _group.current.test(deleteChar)) {
                                _group.current.lastIndex = 0;

                                newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
                            } else if (_decimal.current && _decimal.current.test(deleteChar)) {
                                if (_decimal.current) {
                                    _decimal.current.lastIndex = 0;
                                }

                                if (decimalLength) {
                                    (event.target as HTMLInputElement).setSelectionRange(selectionStart - 1, selectionStart - 1);
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

                            if (_group.current && _group.current.test(deleteChar)) {
                                _group.current.lastIndex = 0;
                                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
                            } else if (_decimal.current && _decimal.current.test(deleteChar)) {
                                _decimal.current.lastIndex = 0;

                                if (decimalLength) {
                                    (event.target as HTMLInputElement).setSelectionRange(selectionStart + 1, selectionStart + 1);
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

        const onPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
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

        const allowMinusSign = () => {
            return props.min === undefined || props.min === null || props.min < 0;
        };

        const isMinusSignFn = (char: string) => {
            if ((_minusSign.current && _minusSign.current.test(char)) || char === '-') {
                if (_minusSign.current) {
                    _minusSign.current.lastIndex = 0;
                }

                return true;
            }

            return false;
        };

        const isDecimalSignFn = (char: string) => {
            if ((props.locale?.includes('fr') && ['.', ','].includes(char)) || (_decimal.current && _decimal.current.test(char))) {
                if (_decimal.current) {
                    _decimal.current.lastIndex = 0;
                }

                return true;
            }

            return false;
        };

        const isDecimalMode = () => {
            return props.mode === 'decimal';
        };

        const getDecimalCharIndexes = (val: string) => {
            const decimalCharIndex = _decimal.current ? val.search(_decimal.current) : -1;

            if (_decimal.current) {
                _decimal.current.lastIndex = 0;
            }

            const filteredVal = val
                .replace(_prefix.current || '', '')
                .trim()
                .replace(/\s/g, '')
                .replace(_currency.current || '', '');
            const decimalCharIndexWithoutPrefix = _decimal.current ? filteredVal.search(_decimal.current) : -1;

            if (_decimal.current) {
                _decimal.current.lastIndex = 0;
            }

            return { decimalCharIndex, decimalCharIndexWithoutPrefix };
        };

        const getCharIndexes = (val: string) => {
            const resetRegexLastIndex = (regex: RegExp | null) => {
                if (regex) {
                    regex.lastIndex = 0;
                }
            };

            const decimalCharIndex = _decimal.current ? val.search(_decimal.current) : -1;

            resetRegexLastIndex(_decimal.current);

            const minusCharIndex = _minusSign.current ? val.search(_minusSign.current) : -1;

            resetRegexLastIndex(_minusSign.current);

            const suffixCharIndex = _suffix.current ? val.search(_suffix.current) : -1;

            resetRegexLastIndex(_suffix.current);

            const currencyCharIndex = _currency.current ? val.search(_currency.current) : -1;

            resetRegexLastIndex(_currency.current);

            return { decimalCharIndex, minusCharIndex, suffixCharIndex, currencyCharIndex };
        };

        const insert = (event: React.KeyboardEvent<HTMLInputElement> | React.ClipboardEvent<HTMLInputElement>, text: string, sign = { isDecimalSign: false, isMinusSign: false }) => {
            const minusCharIndexOnText = _minusSign.current ? text.search(_minusSign.current) : -1;

            if (_minusSign.current) {
                _minusSign.current.lastIndex = 0;
            }

            if (!allowMinusSign() && minusCharIndexOnText !== -1) {
                return;
            }

            const selectionStart = (event.target as HTMLInputElement).selectionStart ?? 0;
            const selectionEnd = (event.target as HTMLInputElement).selectionEnd ?? 0;
            const inputValue = (event.target as HTMLInputElement).value.trim();
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
                const maxFractionDigits = numberFormat.current?.resolvedOptions().maximumFractionDigits ?? 0;
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
                const decimalCharIndex = value.slice(start, end).search(_decimal.current ?? '');

                if (_decimal.current) {
                    _decimal.current.lastIndex = 0;
                }

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

        const initCursor = () => {
            const inputEl = getInputElement();

            if (!inputEl) return 0;

            let inputValue = inputEl.value;
            let selectionStart = inputEl.selectionStart ?? 0;
            const valueLength = inputValue.length;
            let index = null;

            // remove prefix
            const prefixLength = (prefixChar.current || '').length;

            inputValue = inputValue.replace(prefixChar.current || '', '');
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

        const onInputClick = () => {
            const inputEl = getInputElement();

            if (!inputEl) return;

            const currentValue = inputEl.value;

            if (!props.readOnly && currentValue !== getSelection()) {
                initCursor();
            }
        };

        const isNumeralChar = (char: string) => {
            if (char.length === 1 && ((_numeral.current && _numeral.current.test(char)) || (_decimal.current && _decimal.current.test(char)) || (_group.current && _group.current.test(char)) || (_minusSign.current && _minusSign.current.test(char)))) {
                resetRegex();

                return true;
            }

            return false;
        };

        const resetRegex = () => {
            if (_numeral.current) _numeral.current.lastIndex = 0;

            if (_decimal.current) _decimal.current.lastIndex = 0;

            if (_group.current) _group.current.lastIndex = 0;

            if (_minusSign.current) _minusSign.current.lastIndex = 0;
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
            const currentValue = (event.target as HTMLInputElement).value;
            let newValue = null;

            if (valueStr != null) {
                newValue = parseValue(valueStr);
                newValue = !newValue && !props.allowEmpty ? 0 : newValue;

                updateInput(newValue, insertedValueStr, operation, valueStr);
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

        const updateInput = (value: number | string | null, insertedValueStr: string | null, operation: string, valueStr: string) => {
            insertedValueStr = insertedValueStr || '';
            const inputEl = getInputElement();

            if (!inputEl) return;

            const inputValue = inputEl.value;

            let newValue = formatValue(value);
            const currentLength = inputValue.length;

            if (newValue !== valueStr) {
                newValue = concatValues(newValue, valueStr);
            }

            if (currentLength === 0) {
                inputEl.value = newValue;
                if (inputEl.setSelectionRange) inputEl.setSelectionRange(0, 0);

                const index = initCursor();
                const selectionEnd = index + insertedValueStr.length;

                if (inputEl.setSelectionRange) inputEl.setSelectionRange(selectionEnd, selectionEnd);
            } else {
                const selectionStart = inputEl.selectionStart ?? 0;
                let selectionEnd = inputEl.selectionEnd ?? 0;

                inputEl.value = newValue;
                const newLength = newValue.length;

                if (operation === 'range-insert') {
                    const startValue = parseValue((inputValue || '').slice(0, selectionStart));
                    const startValueStr = startValue !== null ? startValue.toString() : '';
                    const startExpr = startValueStr.split('').join(`(${groupChar.current})?`);
                    const sRegex = new RegExp(startExpr, 'g');

                    sRegex.test(newValue);

                    const tExpr = insertedValueStr.split('').join(`(${groupChar.current})?`);
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
                    const isGroupChar = _group.current ? _group.current.test(nextChar) : false;

                    if (isGroupChar && diff === 1) {
                        selectionEnd += 1;
                    } else if (!isGroupChar && isNumeralChar(prevChar)) {
                        selectionEnd += -1 * diff + 1;
                    }

                    if (_group.current) {
                        _group.current.lastIndex = 0;
                    }

                    if (inputEl.setSelectionRange) inputEl.setSelectionRange(selectionEnd, selectionEnd);
                } else if (inputValue === '-' && operation === 'insert') {
                    if (inputEl.setSelectionRange) inputEl.setSelectionRange(0, 0);

                    const index = initCursor();
                    const selectionEnd = index + insertedValueStr.length + 1;

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
            newValue = evaluateEmpty(newValue);

            const inputEl = getInputElement();

            if (!inputEl) return;

            const value = inputEl.value;
            const _formattedValue = formatValue(newValue);

            if (value !== _formattedValue) {
                inputEl.value = _formattedValue;
                inputEl.setAttribute('aria-valuenow', String(newValue));
            }
        };

        const concatValues = (val1: string, val2: string) => {
            if (val1 && val2) {
                const decimalRegex = _decimal.current;
                const decimalCharIndex = decimalRegex ? val2.search(decimalRegex) : -1;

                if (decimalRegex) {
                    decimalRegex.lastIndex = 0;
                }

                if (suffixChar.current) {
                    return decimalCharIndex !== -1 ? val1.replace(suffixChar.current, '').split(decimalRegex ?? '')[0] + val2.replace(suffixChar.current, '').slice(decimalCharIndex) + suffixChar.current : val1;
                } else if (prefixChar.current) {
                    return decimalCharIndex !== -1 ? val1.split(decimalRegex ?? '')[0] + val2.slice(decimalCharIndex) : val1;
                }
            }

            return val1;
        };

        const getDecimalLength = (value: string) => {
            if (value) {
                const valueSplit = value.split(_decimal.current ?? '');

                if (valueSplit.length === 2) {
                    return valueSplit[1]
                        .replace(_suffix.current ?? '', '')
                        .trim()
                        .replace(/\s/g, '')
                        .replace(_currency.current ?? '', '').length;
                }
            }

            return 0;
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
                    const inputEl = getInputElement();

                    originalEvent = {
                        ...({} as React.FormEvent<HTMLInputElement>),
                        target: inputEl as EventTarget & HTMLInputElement
                    };
                }

                props.onValueChange({
                    originalEvent,
                    value: value as number
                });
            }
        };

        const onInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
            setFocused(true);

            const inputEl = getInputElement();

            if (!props.disabled && !props.readOnly && inputEl?.value !== getSelection() && props.highlightOnFocus) {
                event.target.select();
            }
        };

        const onInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
            setFocused(false);

            const input = event.target as HTMLInputElement;
            const newValue = validateValue(parseValue(input.value)) as useInputNumberProps['value'];

            input.value = formatValue(newValue);
            input.setAttribute('aria-valuenow', String(newValue));
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
            constructParser();

            const initialValue = props.value ?? props.defaultValue ?? null;
            const newValue = validateValue(initialValue as number | null);
            const valueForInput = typeof newValue === 'number' ? newValue : null;

            updateInputValue(valueForInput);

            if (initialValue !== null && initialValue !== newValue) {
                updateModel(null, newValue as number);
            }
        });

        useUpdateEffect(() => {
            constructParser();
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
            inputRef,
            // methods
            onChange: onInput,
            onInput,
            onInputKeyDown,
            onInputKeyPress,
            onInputClick,
            onPaste,
            onInputFocus,
            onInputBlur,
            onValueChange: props.onValueChange,
            maxBoundry,
            minBoundry,
            increment,
            decrement,
            stopSpin
        };
    }
});
