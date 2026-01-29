import * as React from 'react';

/**
 * The options for the `useNumberFormatter` hook.
 */
export interface UseNumberFormatterOptions {
    /**
     * The numeric value to be formatted.
     */
    value?: number | string | null | undefined;
    /**
     * Locale to be used in formatting.
     */
    locale?: string;
    /**
     * The locale matching algorithm to use. Possible values are 'lookup' and 'best fit'.
     * @default 'best fit'
     */
    localeMatcher?: 'lookup' | 'best fit';
    /**
     * Defines the behavior of the component.
     * @default 'decimal'
     */
    mode?: 'decimal' | 'currency';
    /**
     * The currency to use in currency formatting (ISO 4217 currency codes).
     */
    currency?: string;
    /**
     * How to display the currency in currency formatting.
     */
    currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name';
    /**
     * Whether to use grouping separators, such as thousands separators.
     * @default true
     */
    useGrouping?: boolean;
    /**
     * The minimum number of fraction digits to use.
     */
    minFractionDigits?: number;
    /**
     * The maximum number of fraction digits to use.
     */
    maxFractionDigits?: number;
    /**
     * How decimals should be rounded.
     */
    roundingMode?: 'ceil' | 'floor' | 'expand' | 'trunc' | 'halfCeil' | 'halfFloor' | 'halfExpand' | 'halfTrunc' | 'halfEven';
    /**
     * Text to display before the value.
     */
    prefix?: string;
    /**
     * Text to display after the value.
     */
    suffix?: string;
    /**
     * Minimum boundary value (used to determine if minus sign is allowed).
     */
    min?: number;
    /**
     * Whether to format the value.
     * @default true
     */
    format?: boolean;
}

/**
 * The exposes for the `useNumberFormatter` hook.
 */
export interface UseNumberFormatterExposes {
    /**
     * The formatted value based on the provided value and options.
     */
    formattedValue: string;
    /**
     * Formats a numeric value to a localized string.
     * @param value - The value to format
     * @returns The formatted string
     */
    formatValue: (value: number | string | null | undefined) => string;
    /**
     * Parses a formatted string back to a numeric value.
     * @param text - The text to parse
     * @returns The parsed number, '-' for minus sign only, or null if invalid
     */
    parseValue: (text: string) => number | string | null;
    /**
     * Adds two numbers with floating-point precision handling.
     * @param base - The base number
     * @param increment - The increment to add
     * @returns The sum with proper precision
     */
    addWithPrecision: (base: number, increment: number) => number;
    /**
     * Checks if the mode is decimal.
     * @returns True if mode is 'decimal'
     */
    isDecimalMode: () => boolean;
    /**
     * Checks if a character is a numeral character (digit, decimal, group separator, or minus sign).
     * @param char - The character to check
     * @returns True if the character is a numeral character
     */
    isNumeralChar: (char: string) => boolean;
    /**
     * Checks if a character is a minus sign.
     * @param char - The character to check
     * @returns True if the character is a minus sign
     */
    isMinusSign: (char: string) => boolean;
    /**
     * Checks if a character is a decimal sign.
     * @param char - The character to check
     * @returns True if the character is a decimal sign
     */
    isDecimalSign: (char: string) => boolean;
    /**
     * Checks if minus sign is allowed based on min value.
     * @returns True if minus sign is allowed
     */
    allowMinusSign: () => boolean;
    /**
     * Gets the decimal character indexes in a value string.
     * @param val - The value string to analyze
     * @returns Object with decimalCharIndex and decimalCharIndexWithoutPrefix
     */
    getDecimalCharIndexes: (val: string) => { decimalCharIndex: number; decimalCharIndexWithoutPrefix: number };
    /**
     * Gets various character indexes (decimal, minus, suffix, currency) in a value string.
     * @param val - The value string to analyze
     * @returns Object with character indexes
     */
    getCharIndexes: (val: string) => { decimalCharIndex: number; minusCharIndex: number; suffixCharIndex: number; currencyCharIndex: number };
    /**
     * Gets the length of decimal part in a formatted value.
     * @param value - The formatted value string
     * @returns The decimal length
     */
    getDecimalLength: (value: string) => number;
    /**
     * Concatenates two value strings, handling decimal positions.
     * @param val1 - The first value
     * @param val2 - The second value
     * @returns The concatenated result
     */
    concatValues: (val1: string, val2: string) => string;
    /**
     * The group character used for thousands separator.
     */
    groupChar: string | null;
    /**
     * The prefix character/string.
     */
    prefixChar: string | null;
    /**
     * The suffix character/string.
     */
    suffixChar: string | null;
    /**
     * The resolved Intl.NumberFormat options.
     */
    resolvedOptions: () => Intl.ResolvedNumberFormatOptions | undefined;
    /**
     * Reinitializes the parser (call when options change).
     */
    constructParser: () => void;
}

/**
 * useNumberFormatter hook is used to format and parse numbers using Intl.NumberFormat.
 *
 * @param {UseNumberFormatterOptions} options - The options for the number formatter.
 * @returns {UseNumberFormatterExposes} - The exposed methods for the number formatter.
 *
 * @example
 * ```tsx
 * const formatter = useNumberFormatter({
 *     value: 1234.56,
 *     locale: 'en-US',
 *     mode: 'currency',
 *     currency: 'USD'
 * });
 *
 * const formatted = formatter.formatValue(1234.56); // "$1,234.56"
 * const parsed = formatter.parseValue("$1,234.56"); // 1234.56
 * ```
 */
export function useNumberFormatter(options: UseNumberFormatterOptions = {}): UseNumberFormatterExposes {
    const { value, locale, localeMatcher, mode = 'decimal', currency, currencyDisplay, useGrouping = true, minFractionDigits, maxFractionDigits, roundingMode, prefix, suffix, min, format = true } = options;

    // Internal refs for regex patterns
    const numberFormat = React.useRef<Intl.NumberFormat | null>(null);
    const groupCharRef = React.useRef<string | null>(null);
    const prefixCharRef = React.useRef<string | null>(null);
    const suffixCharRef = React.useRef<string | null>(null);
    const _numeral = React.useRef<RegExp | null>(null);
    const _group = React.useRef<RegExp | null>(null);
    const _minusSign = React.useRef<RegExp | null>(null);
    const _currency = React.useRef<RegExp | null>(null);
    const _decimal = React.useRef<RegExp | null>(null);
    const _suffix = React.useRef<RegExp | null>(null);
    const _prefix = React.useRef<RegExp | null>(null);
    const _index = React.useRef<((d: string) => number | undefined) | null>(null);

    const getOptions = () => {
        return {
            localeMatcher: localeMatcher,
            style: mode,
            currency: currency,
            currencyDisplay: currencyDisplay,
            useGrouping: useGrouping,
            minimumFractionDigits: minFractionDigits ?? undefined,
            maximumFractionDigits: maxFractionDigits ?? undefined,
            roundingMode: roundingMode
        };
    };

    const escapeRegExp = (text: string) => {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    };

    const getDecimalExpression = () => {
        const formatter = new Intl.NumberFormat(locale, { ...getOptions(), useGrouping: false });

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
        const formatter = new Intl.NumberFormat(locale, { useGrouping: true });

        groupCharRef.current = formatter
            .format(1000000)
            .trim()
            .replace(_numeral.current ?? '', '')
            .charAt(0);

        return new RegExp(`[${groupCharRef.current}]`, 'g');
    };

    const getMinusSignExpression = () => {
        const formatter = new Intl.NumberFormat(locale, { useGrouping: false });

        return new RegExp(
            `[${formatter
                .format(-1)
                .trim()
                .replace(_numeral.current ?? '', '')}]`,
            'g'
        );
    };

    const getCurrencyExpression = () => {
        if (currency) {
            const formatter = new Intl.NumberFormat(locale, { style: 'currency', currency: currency, currencyDisplay: currencyDisplay, minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: roundingMode });

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
        if (prefix) {
            _prefix.current = new RegExp(escapeRegExp(prefix), 'g');
        } else {
            const formatter = new Intl.NumberFormat(locale, { style: mode, currency: currency, currencyDisplay: currencyDisplay });

            const prefixStr = formatter.format(1).split('1')[0];

            _prefix.current = new RegExp(escapeRegExp(prefixStr), 'g');
        }

        return _prefix.current;
    };

    const getSuffixExpression = () => {
        if (suffix) {
            _suffix.current = new RegExp(escapeRegExp(suffix), 'g');
        } else {
            const formatter = new Intl.NumberFormat(locale, { style: mode, currency: currency, currencyDisplay: currencyDisplay, minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: roundingMode });

            const suffixStr = formatter.format(1).split('1')[1];

            _suffix.current = new RegExp(escapeRegExp(suffixStr), 'g');
        }

        return _suffix.current;
    };

    const constructParser = () => {
        numberFormat.current = new Intl.NumberFormat(locale, getOptions());
        const numerals = [...new Intl.NumberFormat(locale, { useGrouping: false }).format(9876543210)].reverse();
        const index = new Map(numerals.map((d, i) => [d, i]));

        _numeral.current = new RegExp(`[${numerals.join('')}]`, 'g');
        _group.current = getGroupingExpression();
        _minusSign.current = getMinusSignExpression();
        _currency.current = getCurrencyExpression();
        _decimal.current = getDecimalExpression();
        _suffix.current = getSuffixExpression();
        _prefix.current = getPrefixExpression();
        _index.current = (d) => index.get(d);

        // Set prefix and suffix chars
        if (prefix) {
            prefixCharRef.current = prefix;
        } else {
            const formatter = new Intl.NumberFormat(locale, { style: mode, currency: currency, currencyDisplay: currencyDisplay });

            prefixCharRef.current = formatter.format(1).split('1')[0];
        }

        if (suffix) {
            suffixCharRef.current = suffix;
        } else {
            const formatter = new Intl.NumberFormat(locale, { style: mode, currency: currency, currencyDisplay: currencyDisplay, minimumFractionDigits: 0, maximumFractionDigits: 0, roundingMode: roundingMode });

            suffixCharRef.current = formatter.format(1).split('1')[1];
        }
    };

    const formatValue = (value: number | string | null | undefined) => {
        if (value != null) {
            if (typeof value === 'string' && value === '-') {
                // Minus sign
                return value;
            }

            if (format) {
                const formatter = new Intl.NumberFormat(locale, getOptions());
                const numericValue = typeof value === 'string' ? Number(value) : value;
                let formattedValue = formatter.format(numericValue);

                if (prefix) {
                    formattedValue = prefix + formattedValue;
                }

                if (suffix) {
                    formattedValue = formattedValue + suffix;
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
                `[${[...new Intl.NumberFormat(locale, { useGrouping: false }).format(9876543210)].reverse().join('')}${new Intl.NumberFormat(locale).format(1.1).replace(/[0-9]/g, '')}${new Intl.NumberFormat(locale)
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

    const addWithPrecision = (base: number, increment: number) => {
        const baseStr = base.toString();
        const stepStr = increment.toString();

        const baseDecimalPlaces = baseStr.includes('.') ? baseStr.split('.')[1].length : 0;
        const stepDecimalPlaces = stepStr.includes('.') ? stepStr.split('.')[1].length : 0;

        const maxDecimalPlaces = Math.max(baseDecimalPlaces, stepDecimalPlaces);
        const precision = Math.pow(10, maxDecimalPlaces);

        return Math.round((base + increment) * precision) / precision;
    };

    const isDecimalMode = () => {
        return mode === 'decimal';
    };

    const resetRegex = () => {
        if (_numeral.current) _numeral.current.lastIndex = 0;

        if (_decimal.current) _decimal.current.lastIndex = 0;

        if (_group.current) _group.current.lastIndex = 0;

        if (_minusSign.current) _minusSign.current.lastIndex = 0;
    };

    const isNumeralChar = (char: string) => {
        if (char.length === 1 && ((_numeral.current && _numeral.current.test(char)) || (_decimal.current && _decimal.current.test(char)) || (_group.current && _group.current.test(char)) || (_minusSign.current && _minusSign.current.test(char)))) {
            resetRegex();

            return true;
        }

        return false;
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
        if ((locale?.includes('fr') && ['.', ','].includes(char)) || (_decimal.current && _decimal.current.test(char))) {
            if (_decimal.current) {
                _decimal.current.lastIndex = 0;
            }

            return true;
        }

        return false;
    };

    const allowMinusSign = () => {
        return min === undefined || min === null || min < 0;
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

    const concatValues = (val1: string, val2: string) => {
        if (val1 && val2) {
            const decimalRegex = _decimal.current;
            const decimalCharIndex = decimalRegex ? val2.search(decimalRegex) : -1;

            if (decimalRegex) {
                decimalRegex.lastIndex = 0;
            }

            if (suffixCharRef.current) {
                return decimalCharIndex !== -1 ? val1.replace(suffixCharRef.current, '').split(decimalRegex ?? '')[0] + val2.replace(suffixCharRef.current, '').slice(decimalCharIndex) + suffixCharRef.current : val1;
            } else if (prefixCharRef.current) {
                return decimalCharIndex !== -1 ? val1.split(decimalRegex ?? '')[0] + val2.slice(decimalCharIndex) : val1;
            }
        }

        return val1;
    };

    React.useEffect(() => {
        constructParser();
    }, [locale, localeMatcher, mode, currency, currencyDisplay, useGrouping, minFractionDigits, maxFractionDigits, roundingMode, prefix, suffix]);

    return {
        formattedValue: formatValue(value),
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
        groupChar: groupCharRef.current,
        prefixChar: prefixCharRef.current,
        suffixChar: suffixCharRef.current,
        resolvedOptions: () => numberFormat.current?.resolvedOptions(),
        constructParser
    };
}
