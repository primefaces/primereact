/**
 *
 * The useInputNumber manages the state and functionality of an input number component.
 *
 * [Live Demo](https://www.primereact.org/inputnumber/)
 *
 * @module useinputnumber
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';
import * as React from 'react';

/**
 * Custom value change event.
 */
export interface useInputNumberValueChangeEvent {
    /**
     * Original browser event.
     */
    originalEvent: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement> | null;
    /**
     * New value.
     */
    value: number;
}

/**
 * Defines valid properties in useInputNumber.
 */
export interface useInputNumberProps {
    /**
     * Specifies whether a inputnumber should be checked or not.
     * @default undefined
     */
    value?: number | undefined | null;
    /**
     * Specifies whether a inputnumber should be checked or not.
     * @default undefined
     */
    defaultValue?: number | undefined | null;
    /**
     * The name attribute for the element, typically used in form submissions.
     */
    name?: string | undefined;
    /**
     * Whether to format the value.
     * @default true
     */
    format?: boolean | undefined;
    /**
     * Layout of the buttons.
     * @default stacked
     */
    buttonLayout?: 'stacked' | 'horizontal' | 'vertical' | undefined;
    /**
     * Locale to be used in formatting.
     */
    locale?: string | undefined;
    /**
     * The locale matching algorithm to use. Possible values are 'lookup' and 'best fit'; the default is 'best fit'.
     * See [Locale Negotation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_negotiation) for details.
     * @default 'best fit'
     */
    localeMatcher?: 'lookup' | 'best fit' | undefined;
    /**
     * Defines the behavior of the component.
     * @default decimal
     */
    mode?: 'decimal' | 'currency' | undefined;
    /**
     * Text to display before the value.
     */
    prefix?: string | undefined;
    /**
     * Text to display after the value.
     */
    suffix?: string | undefined;
    /**
     * The currency to use in currency formatting. Possible values are the [ISO 4217 currency codes](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency), such as 'USD' for the US dollar, 'EUR' for the euro, or 'CNY' for the Chinese RMB.
     * There is no default value; if the style is 'currency', the currency property must be provided.
     */
    currency?: string | undefined;
    /**
     * How to display the currency in currency formatting. Possible values are 'symbol' to use a localized currency symbol such as €, 'code' to use the ISO currency code, 'name' to use a localized currency name such as 'dollar'.
     */
    currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name' | undefined;
    /**
     * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.
     * @default true
     */
    useGrouping?: boolean | undefined;
    /**
     * The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0;
     * the default for currency formatting is the number of minor unit digits provided by the [ISO 4217 currency code](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency) list (2 if the list doesn't provide that information).
     */
    minFractionDigits?: number | undefined;
    /**
     * The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3;
     * the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the [ISO 4217 currency code](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=maintenance-agency) list (2 if the list doesn't provide that information).
     */
    maxFractionDigits?: number | undefined;
    /**
     * How decimals should be rounded.
     * [further information](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode).
     */
    roundingMode?: 'ceil' | 'floor' | 'expand' | 'trunc' | 'halfCeil' | 'halfFloor' | 'halfExpand' | 'halfTrunc' | 'halfEven';
    /**
     * Minimum boundary value.
     */
    min?: number | undefined;
    /**
     * Maximum boundary value.
     */
    max?: number | undefined;
    /**
     * Step factor to increment/decrement the value.
     * @default 1
     */
    step?: number | undefined;
    /**
     * Determines whether the input field is empty.
     * @default true
     */
    allowEmpty?: boolean | undefined;
    /**
     * Highlights automatically the input value.
     * @default false
     */
    highlightOnFocus?: boolean | undefined;
    /**
     * Callback to invoke when value changes.
     * @param {useInputNumberValueChangeEvent} event - Custom value change event.
     */
    onValueChange?: (event: useInputNumberValueChangeEvent) => void;
}

/**
 * Defines valid state in useInputNumber.
 */
export interface useInputNumberState {
    /**
     * Indicates whether the input field is currently focused.
     */
    focused: boolean;
}

/**
 * Defines the methods and properties exposed by useInputNumber.
 */
export interface useInputNumberExposes {
    /**
     * State of the input number.
     */
    state: useInputNumberState;
    /**
     * Reference to the input element.
     */
    inputRef: React.RefObject<{ elementRef: React.RefObject<HTMLInputElement> } | null>;
    /**
     * Input event handler.
     */
    onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Input key down event handler.
     */
    onInputKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Input key press event handler.
     */
    onInputKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Input click event handler.
     */
    onInputClick: () => void;
    /**
     * Paste event handler.
     */
    onPaste: (event: React.ClipboardEvent<HTMLInputElement>) => void;
    /**
     * Input focus event handler.
     */
    onInputFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Input blur event handler.
     */
    onInputBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Up button mouse down event handler.
     */
    onUpButtonMouseDown: (event: React.MouseEvent<HTMLInputElement>) => void;
    /**
     * Up button mouse up event handler.
     */
    onUpButtonMouseUp: () => void;
    /**
     * Up button mouse leave event handler.
     */
    onUpButtonMouseLeave: () => void;
    /**
     * Up button key up event handler.
     */
    onUpButtonKeyUp: () => void;
    /**
     * Up button key down event handler.
     */
    onUpButtonKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Down button mouse down event handler.
     */
    onDownButtonMouseDown: (event: React.MouseEvent<HTMLInputElement>) => void;
    /**
     * Down button mouse up event handler.
     */
    onDownButtonMouseUp: () => void;
    /**
     * Down button mouse leave event handler.
     */
    onDownButtonMouseLeave: () => void;
    /**
     * Down button key up event handler.
     */
    onDownButtonKeyUp: () => void;
    /**
     * Down button key down event handler.
     */
    onDownButtonKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Checks if the maximum boundary is reached.
     * @returns True if the value has reached the maximum boundary.
     */
    maxBoundry: () => boolean;
    /**
     * Checks if the minimum boundary is reached.
     * @returns True if the value has reached the minimum boundary.
     */
    minBoundry: () => boolean;
}

/**
 * Instance of useInputNumber headless.
 */
export type useInputNumberInstance = HeadlessInstance<useInputNumberProps, useInputNumberState, useInputNumberExposes>;
