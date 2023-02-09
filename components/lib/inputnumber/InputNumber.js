import * as React from 'react';
import { useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { InputText } from '../inputtext/InputText';
import { Ripple } from '../ripple/Ripple';
import { Tooltip } from '../tooltip/Tooltip';
import { classNames, DomHandler, ObjectUtils } from '../utils/Utils';
import { InputNumberBase } from './InputNumberBase';

export const InputNumber = React.memo(
    React.forwardRef((inProps, ref) => {
        const props = InputNumberBase.getProps(inProps);

        const [focusedState, setFocusedState] = React.useState(false);
        const elementRef = React.useRef(null);
        const inputRef = React.useRef(null);
        const timer = React.useRef(null);
        const lastValue = React.useRef(null);

        const numberFormat = React.useRef(null);
        const groupChar = React.useRef(null);
        const prefixChar = React.useRef(null);
        const suffixChar = React.useRef(null);
        const isSpecialChar = React.useRef(null);
        const _numeral = React.useRef(null);
        const _group = React.useRef(null);
        const _minusSign = React.useRef(null);
        const _currency = React.useRef(null);
        const _decimal = React.useRef(null);
        const _suffix = React.useRef(null);
        const _prefix = React.useRef(null);
        const _index = React.useRef(null);

        const stacked = props.showButtons && props.buttonLayout === 'stacked';
        const horizontal = props.showButtons && props.buttonLayout === 'horizontal';
        const vertical = props.showButtons && props.buttonLayout === 'vertical';
        const inputMode = props.inputMode || (props.mode === 'decimal' && !props.minFractionDigits ? 'numeric' : 'decimal');

        const getOptions = () => {
            return {
                localeMatcher: props.localeMatcher,
                style: props.mode,
                currency: props.currency,
                currencyDisplay: props.currencyDisplay,
                useGrouping: props.useGrouping,
                minimumFractionDigits: props.minFractionDigits,
                maximumFractionDigits: props.maxFractionDigits
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

        const escapeRegExp = (text) => {
            return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
        };

        const getDecimalExpression = () => {
            const formatter = new Intl.NumberFormat(props.locale, { ...getOptions(), useGrouping: false });

            return new RegExp(`[${formatter.format(1.1).replace(_currency.current, '').trim().replace(_numeral.current, '')}]`, 'g');
        };

        const getGroupingExpression = () => {
            const formatter = new Intl.NumberFormat(props.locale, { useGrouping: true });

            groupChar.current = formatter.format(1000000).trim().replace(_numeral.current, '').charAt(0);

            return new RegExp(`[${groupChar.current}]`, 'g');
        };

        const getMinusSignExpression = () => {
            const formatter = new Intl.NumberFormat(props.locale, { useGrouping: false });

            return new RegExp(`[${formatter.format(-1).trim().replace(_numeral.current, '')}]`, 'g');
        };

        const getCurrencyExpression = () => {
            if (props.currency) {
                const formatter = new Intl.NumberFormat(props.locale, {
                    style: 'currency',
                    currency: props.currency,
                    currencyDisplay: props.currencyDisplay,
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                });

                return new RegExp(`[${formatter.format(1).replace(/\s/g, '').replace(_numeral.current, '').replace(_group.current, '')}]`, 'g');
            }

            return new RegExp(`[]`, 'g');
        };

        const getPrefixExpression = () => {
            if (props.prefix) {
                prefixChar.current = props.prefix;
            } else {
                const formatter = new Intl.NumberFormat(props.locale, { style: props.mode, currency: props.currency, currencyDisplay: props.currencyDisplay });

                prefixChar.current = formatter.format(1).split('1')[0];
            }

            return new RegExp(`${escapeRegExp(prefixChar.current || '')}`, 'g');
        };

        const getSuffixExpression = () => {
            if (props.suffix) {
                suffixChar.current = props.suffix;
            } else {
                const formatter = new Intl.NumberFormat(props.locale, {
                    style: props.mode,
                    currency: props.currency,
                    currencyDisplay: props.currencyDisplay,
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                });

                suffixChar.current = formatter.format(1).split('1')[1];
            }

            return new RegExp(`${escapeRegExp(suffixChar.current || '')}`, 'g');
        };

        const formatValue = (value) => {
            if (value != null) {
                if (value === '-') {
                    // Minus sign
                    return value;
                }

                if (props.format) {
                    let formatter = new Intl.NumberFormat(props.locale, getOptions());
                    let _formattedValue = formatter.format(value);

                    if (props.prefix) {
                        _formattedValue = props.prefix + _formattedValue;
                    }

                    if (props.suffix) {
                        _formattedValue = _formattedValue + props.suffix;
                    }

                    return _formattedValue;
                }

                return value.toString();
            }

            return '';
        };

        const parseValue = (text) => {
            let filteredText = text
                .replace(_suffix.current, '')
                .replace(_prefix.current, '')
                .trim()
                .replace(/\s/g, '')
                .replace(_currency.current, '')
                .replace(_group.current, '')
                .replace(_minusSign.current, '-')
                .replace(_decimal.current, '.')
                .replace(_numeral.current, _index.current);

            if (filteredText) {
                if (filteredText === '-')
                    // Minus sign
                    return filteredText;

                let parsedValue = +filteredText;

                return isNaN(parsedValue) ? null : parsedValue;
            }

            return null;
        };

        const repeat = (event, interval, dir) => {
            let i = interval || 500;

            clearTimer();
            timer.current = setTimeout(() => {
                repeat(event, 40, dir);
            }, i);

            spin(event, dir);
        };

        const spin = (event, dir) => {
            if (inputRef.current) {
                let step = props.step * dir;
                let currentValue = parseValue(inputRef.current.value) || 0;
                let newValue = validateValue(currentValue + step);

                if (props.maxLength && props.maxLength < formatValue(newValue).length) {
                    return;
                }

                // #3913 onChange should be called before onValueChange
                handleOnChange(event, currentValue, newValue);
                // touch devices trigger the keyboard to display because of setSelectionRange
                !DomHandler.isTouchDevice() && updateInput(newValue, null, 'spin');
                updateModel(event, newValue);
            }
        };

        const onUpButtonMouseDown = (event) => {
            if (!props.disabled && !props.readOnly) {
                props.autoFocus && DomHandler.focus(inputRef.current, props.autoFocus);
                repeat(event, null, 1);
                event.preventDefault();
            }
        };

        const onUpButtonMouseUp = () => {
            if (!props.disabled && !props.readOnly) {
                clearTimer();
            }
        };

        const onUpButtonMouseLeave = () => {
            if (!props.disabled && !props.readOnly) {
                clearTimer();
            }
        };

        const onUpButtonKeyUp = () => {
            if (!props.disabled && !props.readOnly) {
                clearTimer();
            }
        };

        const onUpButtonKeyDown = (event) => {
            if (!props.disabled && !props.readOnly && (event.keyCode === 32 || event.keyCode === 13)) {
                repeat(event, null, 1);
            }
        };

        const onDownButtonMouseDown = (event) => {
            if (!props.disabled && !props.readOnly) {
                props.autoFocus && DomHandler.focus(inputRef.current, props.autoFocus);
                repeat(event, null, -1);

                event.preventDefault();
            }
        };

        const onDownButtonMouseUp = () => {
            if (!props.disabled && !props.readOnly) {
                clearTimer();
            }
        };

        const onDownButtonMouseLeave = () => {
            if (!props.disabled && !props.readOnly) {
                clearTimer();
            }
        };

        const onDownButtonKeyUp = () => {
            if (!props.disabled && !props.readOnly) {
                clearTimer();
            }
        };

        const onDownButtonKeyDown = (event) => {
            if (!props.disabled && !props.readOnly && (event.keyCode === 32 || event.keyCode === 13)) {
                repeat(event, null, -1);
            }
        };

        const onInput = (event) => {
            if (props.disabled || props.readOnly) {
                return;
            }

            if (isSpecialChar.current) {
                event.target.value = lastValue.current;
            }

            isSpecialChar.current = false;
        };

        const onInputKeyDown = (event) => {
            if (props.disabled || props.readOnly) {
                return;
            }

            lastValue.current = event.target.value;

            if (event.shiftKey || event.altKey) {
                isSpecialChar.current = true;

                return;
            }

            let selectionStart = event.target.selectionStart;
            let selectionEnd = event.target.selectionEnd;
            let inputValue = event.target.value;
            let newValueStr = null;

            if (event.altKey) {
                event.preventDefault();
            }

            switch (event.which) {
                //up
                case 38:
                    spin(event, 1);
                    event.preventDefault();
                    break;

                //down
                case 40:
                    spin(event, -1);
                    event.preventDefault();
                    break;

                //left
                case 37:
                    if (!isNumeralChar(inputValue.charAt(selectionStart - 1))) {
                        event.preventDefault();
                    }

                    break;

                //right
                case 39:
                    if (!isNumeralChar(inputValue.charAt(selectionStart))) {
                        event.preventDefault();
                    }

                    break;

                //enter and tab
                case 13:
                case 9:
                    newValueStr = validateValue(parseValue(inputValue));
                    inputRef.current.value = formatValue(newValueStr);
                    inputRef.current.setAttribute('aria-valuenow', newValueStr);
                    updateModel(event, newValueStr);
                    break;

                //backspace
                case 8:
                    event.preventDefault();

                    if (selectionStart === selectionEnd) {
                        const deleteChar = inputValue.charAt(selectionStart - 1);
                        const { decimalCharIndex, decimalCharIndexWithoutPrefix } = getDecimalCharIndexes(inputValue);

                        if (isNumeralChar(deleteChar)) {
                            const decimalLength = getDecimalLength(inputValue);

                            if (_group.current.test(deleteChar)) {
                                _group.current.lastIndex = 0;
                                newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
                            } else if (_decimal.current.test(deleteChar)) {
                                _decimal.current.lastIndex = 0;

                                if (decimalLength) {
                                    inputRef.current.setSelectionRange(selectionStart - 1, selectionStart - 1);
                                } else {
                                    newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                                }
                            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                                const insertedText = isDecimalMode() && (props.minFractionDigits || 0) < decimalLength ? '' : '0';

                                newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
                            } else if (decimalCharIndexWithoutPrefix === 1) {
                                newValueStr = inputValue.slice(0, selectionStart - 1) + '0' + inputValue.slice(selectionStart);
                                newValueStr = parseValue(newValueStr) > 0 ? newValueStr : '';
                            } else {
                                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                            }
                        }

                        updateValue(event, newValueStr, null, 'delete-single');
                    } else {
                        newValueStr = deleteRange(inputValue, selectionStart, selectionEnd);
                        updateValue(event, newValueStr, null, 'delete-range');
                    }

                    break;

                // del
                case 46:
                    event.preventDefault();

                    if (selectionStart === selectionEnd) {
                        const deleteChar = inputValue.charAt(selectionStart);
                        const { decimalCharIndex, decimalCharIndexWithoutPrefix } = getDecimalCharIndexes(inputValue);

                        if (isNumeralChar(deleteChar)) {
                            const decimalLength = getDecimalLength(inputValue);

                            if (_group.current.test(deleteChar)) {
                                _group.current.lastIndex = 0;
                                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
                            } else if (_decimal.current.test(deleteChar)) {
                                _decimal.current.lastIndex = 0;

                                if (decimalLength) {
                                    inputRef.current.setSelectionRange(selectionStart + 1, selectionStart + 1);
                                } else {
                                    newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                                }
                            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                                const insertedText = isDecimalMode() && (props.minFractionDigits || 0) < decimalLength ? '' : '0';

                                newValueStr = inputValue.slice(0, selectionStart) + insertedText + inputValue.slice(selectionStart + 1);
                            } else if (decimalCharIndexWithoutPrefix === 1) {
                                newValueStr = inputValue.slice(0, selectionStart) + '0' + inputValue.slice(selectionStart + 1);
                                newValueStr = parseValue(newValueStr) > 0 ? newValueStr : '';
                            } else {
                                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                            }
                        }

                        updateValue(event, newValueStr, null, 'delete-back-single');
                    } else {
                        newValueStr = deleteRange(inputValue, selectionStart, selectionEnd);
                        updateValue(event, newValueStr, null, 'delete-range');
                    }

                    break;

                default:
                    break;
            }

            if (props.onKeyDown) {
                props.onKeyDown(event);
            }
        };

        const onInputKeyPress = (event) => {
            if (props.disabled || props.readOnly) {
                return;
            }

            const code = event.which || event.keyCode;

            if (code !== 13) {
                // to submit a form
                event.preventDefault();
            }

            const char = String.fromCharCode(code);
            const _isDecimalSign = isDecimalSign(char);
            const _isMinusSign = isMinusSign(char);

            if ((48 <= code && code <= 57) || _isMinusSign || _isDecimalSign) {
                insert(event, char, { isDecimalSign: _isDecimalSign, isMinusSign: _isMinusSign });
            }
        };

        const onPaste = (event) => {
            event.preventDefault();

            if (props.disabled || props.readOnly) {
                return;
            }

            let data = (event.clipboardData || window['clipboardData']).getData('Text');

            if (data) {
                let filteredData = parseValue(data);

                if (filteredData != null) {
                    insert(event, filteredData.toString());
                }
            }
        };

        const allowMinusSign = () => {
            return props.min === null || props.min < 0;
        };

        const isMinusSign = (char) => {
            if (_minusSign.current.test(char) || char === '-') {
                _minusSign.current.lastIndex = 0;

                return true;
            }

            return false;
        };

        const isDecimalSign = (char) => {
            if (_decimal.current.test(char)) {
                _decimal.current.lastIndex = 0;

                return true;
            }

            return false;
        };

        const isDecimalMode = () => {
            return props.mode === 'decimal';
        };

        const getDecimalCharIndexes = (val) => {
            const decimalCharIndex = val.search(_decimal.current);

            _decimal.current.lastIndex = 0;

            const filteredVal = val.replace(_prefix.current, '').trim().replace(/\s/g, '').replace(_currency.current, '');
            const decimalCharIndexWithoutPrefix = filteredVal.search(_decimal.current);

            _decimal.current.lastIndex = 0;

            return { decimalCharIndex, decimalCharIndexWithoutPrefix };
        };

        const getCharIndexes = (val) => {
            const decimalCharIndex = val.search(_decimal.current);

            _decimal.current.lastIndex = 0;
            const minusCharIndex = val.search(_minusSign.current);

            _minusSign.current.lastIndex = 0;
            const suffixCharIndex = val.search(_suffix.current);

            _suffix.current.lastIndex = 0;
            const currencyCharIndex = val.search(_currency.current);

            _currency.current.lastIndex = 0;

            return { decimalCharIndex, minusCharIndex, suffixCharIndex, currencyCharIndex };
        };

        const insert = (event, text, sign = { isDecimalSign: false, isMinusSign: false }) => {
            const minusCharIndexOnText = text.search(_minusSign.current);

            _minusSign.current.lastIndex = 0;

            if (!allowMinusSign() && minusCharIndexOnText !== -1) {
                return;
            }

            const selectionStart = inputRef.current.selectionStart;
            const selectionEnd = inputRef.current.selectionEnd;
            let inputValue = inputRef.current.value.trim();
            const { decimalCharIndex, minusCharIndex, suffixCharIndex, currencyCharIndex } = getCharIndexes(inputValue);
            let newValueStr;

            if (sign.isMinusSign) {
                if (selectionStart === 0) {
                    newValueStr = inputValue;

                    if (minusCharIndex === -1 || selectionEnd !== 0) {
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
                const maxFractionDigits = numberFormat.current.resolvedOptions().maximumFractionDigits;
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

        const insertText = (value, text, start, end) => {
            let textSplit = text === '.' ? text : text.split('.');

            if (textSplit.length === 2) {
                const decimalCharIndex = value.slice(start, end).search(_decimal.current);

                _decimal.current.lastIndex = 0;

                return decimalCharIndex > 0 ? value.slice(0, start) + formatValue(text) + value.slice(end) : value || formatValue(text);
            } else if (end - start === value.length) {
                return formatValue(text);
            } else if (start === 0) {
                const suffix = ObjectUtils.isLetter(value[end]) ? end - 1 : end;

                return text + value.slice(suffix);
            } else if (end === value.length) {
                return value.slice(0, start) + text;
            } else {
                return value.slice(0, start) + text + value.slice(end);
            }
        };

        const deleteRange = (value, start, end) => {
            let newValueStr;

            if (end - start === value.length) newValueStr = '';
            else if (start === 0) newValueStr = value.slice(end);
            else if (end === value.length) newValueStr = value.slice(0, start);
            else newValueStr = value.slice(0, start) + value.slice(end);

            return newValueStr;
        };

        const initCursor = () => {
            let selectionStart = inputRef.current.selectionStart;
            let inputValue = inputRef.current.value;
            let valueLength = inputValue.length;
            let index = null;

            // remove prefix
            let prefixLength = (prefixChar.current || '').length;

            inputValue = inputValue.replace(_prefix.current, '');
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
                inputRef.current.setSelectionRange(index + 1, index + 1);
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
                    inputRef.current.setSelectionRange(index, index);
                }
            }

            return index || 0;
        };

        const onInputClick = () => {
            initCursor();
        };

        const isNumeralChar = (char) => {
            if (char.length === 1 && (_numeral.current.test(char) || _decimal.current.test(char) || _group.current.test(char) || _minusSign.current.test(char))) {
                resetRegex();

                return true;
            } else {
                return false;
            }
        };

        const resetRegex = () => {
            _numeral.current.lastIndex = 0;
            _decimal.current.lastIndex = 0;
            _group.current.lastIndex = 0;
            _minusSign.current.lastIndex = 0;
        };

        const updateValue = (event, valueStr, insertedValueStr, operation) => {
            let currentValue = inputRef.current.value;
            let newValue = null;

            if (valueStr != null) {
                newValue = evaluateEmpty(parseValue(valueStr));
                updateInput(newValue, insertedValueStr, operation, valueStr);

                handleOnChange(event, currentValue, newValue);
            }
        };

        const evaluateEmpty = (newValue) => {
            return !newValue && !props.allowEmpty ? props.min || 0 : newValue;
        };

        const handleOnChange = (event, currentValue, newValue) => {
            if (props.onChange && isValueChanged(currentValue, newValue)) {
                props.onChange({
                    originalEvent: event,
                    value: newValue
                });
            }
        };

        const isValueChanged = (currentValue, newValue) => {
            if (newValue === null && currentValue !== null) {
                return true;
            }

            if (newValue != null) {
                let parsedCurrentValue = typeof currentValue === 'string' ? parseValue(currentValue) : currentValue;

                return newValue !== parsedCurrentValue;
            }

            return false;
        };

        const validateValue = (value) => {
            if (value === '-') {
                return null;
            }

            return validateValueByLimit(value);
        };

        const validateValueByLimit = (value) => {
            if (ObjectUtils.isEmpty(value)) {
                return null;
            }

            if (props.min !== null && value < props.min) {
                return props.min;
            }

            if (props.max !== null && value > props.max) {
                return props.max;
            }

            return value;
        };

        const updateInput = (value, insertedValueStr, operation, valueStr) => {
            insertedValueStr = insertedValueStr || '';

            let inputEl = inputRef.current;
            let inputValue = inputEl.value;
            let newValue = formatValue(value);
            let currentLength = inputValue.length;

            if (newValue !== valueStr) {
                newValue = concatValues(newValue, valueStr);
            }

            if (currentLength === 0) {
                inputEl.value = newValue;
                inputEl.setSelectionRange(0, 0);
                const index = initCursor();
                const selectionEnd = index + insertedValueStr.length;

                inputEl.setSelectionRange(selectionEnd, selectionEnd);
            } else {
                let selectionStart = inputEl.selectionStart;
                let selectionEnd = inputEl.selectionEnd;

                if (props.maxLength && props.maxLength < newValue.length) {
                    return;
                }

                inputEl.value = newValue;
                let newLength = newValue.length;

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
                    inputEl.setSelectionRange(selectionEnd, selectionEnd);
                } else if (newLength === currentLength) {
                    if (operation === 'insert' || operation === 'delete-back-single') inputEl.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
                    else if (operation === 'delete-single') inputEl.setSelectionRange(selectionEnd - 1, selectionEnd - 1);
                    else if (operation === 'delete-range' || operation === 'spin') inputEl.setSelectionRange(selectionEnd, selectionEnd);
                } else if (operation === 'delete-back-single') {
                    let prevChar = inputValue.charAt(selectionEnd - 1);
                    let nextChar = inputValue.charAt(selectionEnd);
                    let diff = currentLength - newLength;
                    let isGroupChar = _group.current.test(nextChar);

                    if (isGroupChar && diff === 1) {
                        selectionEnd += 1;
                    } else if (!isGroupChar && isNumeralChar(prevChar)) {
                        selectionEnd += -1 * diff + 1;
                    }

                    _group.current.lastIndex = 0;
                    inputEl.setSelectionRange(selectionEnd, selectionEnd);
                } else if (inputValue === '-' && operation === 'insert') {
                    inputEl.setSelectionRange(0, 0);
                    const index = initCursor();
                    const selectionEnd = index + insertedValueStr.length + 1;

                    inputEl.setSelectionRange(selectionEnd, selectionEnd);
                } else {
                    selectionEnd = selectionEnd + (newLength - currentLength);
                    inputEl.setSelectionRange(selectionEnd, selectionEnd);
                }
            }

            inputEl.setAttribute('aria-valuenow', value);
        };

        const updateInputValue = (newValue) => {
            newValue = evaluateEmpty(newValue);

            const inputEl = inputRef.current;
            const value = inputEl.value;
            const _formattedValue = formattedValue(newValue);

            if (value !== _formattedValue) {
                inputEl.value = _formattedValue;
                inputEl.setAttribute('aria-valuenow', newValue);
            }
        };

        const formattedValue = (val) => {
            return formatValue(evaluateEmpty(val));
        };

        const concatValues = (val1, val2) => {
            if (val1 && val2) {
                let decimalCharIndex = val2.search(_decimal.current);

                _decimal.current.lastIndex = 0;

                return decimalCharIndex !== -1 ? val1.split(_decimal.current)[0] + val2.slice(decimalCharIndex) : val1;
            }

            return val1;
        };

        const getDecimalLength = (value) => {
            if (value) {
                const valueSplit = value.split(_decimal.current);

                if (valueSplit.length === 2) {
                    return valueSplit[1].replace(_suffix.current, '').trim().replace(/\s/g, '').replace(_currency.current, '').length;
                }
            }

            return 0;
        };

        const updateModel = (event, value) => {
            if (props.onValueChange) {
                props.onValueChange({
                    originalEvent: event,
                    value: value,
                    stopPropagation: () => {},
                    preventDefault: () => {},
                    target: {
                        name: props.name,
                        id: props.id,
                        value: value
                    }
                });
            }
        };

        const onInputFocus = (event) => {
            setFocusedState(true);
            props.onFocus && props.onFocus(event);

            if ((props.suffix || props.currency || props.prefix) && inputRef.current) {
                // GitHub #1866 Cursor must be placed before/after symbol or arrow keys don't work
                const selectionEnd = initCursor();

                inputRef.current.setSelectionRange(selectionEnd, selectionEnd);
            }
        };

        const onInputBlur = (event) => {
            setFocusedState(false);

            if (inputRef.current) {
                let currentValue = inputRef.current.value;

                if (isValueChanged(currentValue, props.value)) {
                    let newValue = validateValue(parseValue(currentValue));

                    updateInputValue(newValue);
                    updateModel(event, newValue);
                }
            }

            props.onBlur && props.onBlur(event);
        };

        const clearTimer = () => {
            if (timer.current) {
                clearInterval(timer.current);
            }
        };

        const changeValue = () => {
            updateInputValue(validateValueByLimit(props.value));

            const newValue = validateValue(props.value);

            if (props.value !== null && props.value !== newValue) {
                updateModel(null, newValue);
            }
        };

        const getFormatter = () => {
            return numberFormat.current;
        };

        React.useImperativeHandle(ref, () => ({
            props,
            focus: () => DomHandler.focus(inputRef.current),
            getFormatter,
            getElement: () => elementRef.current,
            getInput: () => inputRef.current
        }));

        React.useEffect(() => {
            ObjectUtils.combinedRefs(inputRef, props.inputRef);
        }, [inputRef, props.inputRef]);

        useMountEffect(() => {
            constructParser();

            const newValue = validateValue(props.value);

            if (props.value !== null && props.value !== newValue) {
                updateModel(null, newValue);
            }
        });

        useUpdateEffect(() => {
            constructParser();
            changeValue();
        }, [props.locale, props.localeMatcher, props.mode, props.currency, props.currencyDisplay, props.useGrouping, props.minFractionDigits, props.maxFractionDigits, props.suffix, props.prefix]);

        useUpdateEffect(() => {
            changeValue();
        }, [props.value]);

        const createInputElement = () => {
            const className = classNames('p-inputnumber-input', props.inputClassName);
            const valueToRender = formattedValue(props.value);

            return (
                <InputText
                    ref={inputRef}
                    id={props.inputId}
                    style={props.inputStyle}
                    role="spinbutton"
                    className={className}
                    defaultValue={valueToRender}
                    type={props.type}
                    size={props.size}
                    tabIndex={props.tabIndex}
                    inputMode={inputMode}
                    maxLength={props.maxLength}
                    disabled={props.disabled}
                    required={props.required}
                    pattern={props.pattern}
                    placeholder={props.placeholder}
                    readOnly={props.readOnly}
                    name={props.name}
                    autoFocus={props.autoFocus}
                    onKeyDown={onInputKeyDown}
                    onKeyPress={onInputKeyPress}
                    onInput={onInput}
                    onClick={onInputClick}
                    onBlur={onInputBlur}
                    onFocus={onInputFocus}
                    onPaste={onPaste}
                    min={props.min}
                    max={props.max}
                    aria-valuemin={props.min}
                    aria-valuemax={props.max}
                    aria-valuenow={props.value}
                    {...ariaProps}
                    {...dataProps}
                />
            );
        };

        const createUpButton = () => {
            const className = classNames(
                'p-inputnumber-button p-inputnumber-button-up p-button p-button-icon-only p-component',
                {
                    'p-disabled': props.disabled
                },
                props.incrementButtonClassName
            );
            const icon = classNames('p-button-icon', props.incrementButtonIcon);

            return (
                <button
                    type="button"
                    className={className}
                    onPointerLeave={onUpButtonMouseLeave}
                    onPointerDown={onUpButtonMouseDown}
                    onPointerUp={onUpButtonMouseUp}
                    onKeyDown={onUpButtonKeyDown}
                    onKeyUp={onUpButtonKeyUp}
                    disabled={props.disabled}
                    tabIndex={-1}
                >
                    <span className={icon}></span>
                    <Ripple />
                </button>
            );
        };

        const createDownButton = () => {
            const className = classNames(
                'p-inputnumber-button p-inputnumber-button-down p-button p-button-icon-only p-component',
                {
                    'p-disabled': props.disabled
                },
                props.decrementButtonClassName
            );
            const icon = classNames('p-button-icon', props.decrementButtonIcon);

            return (
                <button
                    type="button"
                    className={className}
                    onPointerLeave={onDownButtonMouseLeave}
                    onPointerDown={onDownButtonMouseDown}
                    onPointerUp={onDownButtonMouseUp}
                    onKeyDown={onDownButtonKeyDown}
                    onKeyUp={onDownButtonKeyUp}
                    disabled={props.disabled}
                    tabIndex={-1}
                >
                    <span className={icon}></span>
                    <Ripple />
                </button>
            );
        };

        const createButtonGroup = () => {
            const upButton = props.showButtons && createUpButton();
            const downButton = props.showButtons && createDownButton();

            if (stacked) {
                return (
                    <span className="p-inputnumber-button-group">
                        {upButton}
                        {downButton}
                    </span>
                );
            }

            return (
                <>
                    {upButton}
                    {downButton}
                </>
            );
        };

        const hasTooltip = ObjectUtils.isNotEmpty(props.tooltip);
        const otherProps = InputNumberBase.getOtherProps(props);
        const dataProps = ObjectUtils.reduceKeys(otherProps, DomHandler.DATA_PROPS);
        const ariaProps = ObjectUtils.reduceKeys(otherProps, DomHandler.ARIA_PROPS);
        const className = classNames(
            'p-inputnumber p-component p-inputwrapper',
            {
                'p-inputwrapper-filled': props.value != null && props.value.toString().length > 0,
                'p-inputwrapper-focus': focusedState,
                'p-inputnumber-buttons-stacked': stacked,
                'p-inputnumber-buttons-horizontal': horizontal,
                'p-inputnumber-buttons-vertical': vertical
            },
            props.className
        );
        const inputElement = createInputElement();
        const buttonGroup = createButtonGroup();

        return (
            <>
                <span ref={elementRef} id={props.id} className={className} style={props.style} {...otherProps}>
                    {inputElement}
                    {buttonGroup}
                </span>
                {hasTooltip && <Tooltip target={elementRef} content={props.tooltip} {...props.tooltipOptions} />}
            </>
        );
    })
);

InputNumber.displayName = 'InputNumber';
