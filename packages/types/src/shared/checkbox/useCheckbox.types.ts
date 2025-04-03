import * as React from 'react';

export interface useCheckboxChangeEvent {
    /**
     * The original event that triggered the change.
     */
    originalEvent: React.FormEventHandler<HTMLInputElement>;
    /**
     * The value of the checkbox.
     */
    value: any;
    /**
     * The checked state of the checkbox.
     */
    checked: boolean;
}

/**
 * Props for the useCheckbox hook.
 */
export interface useCheckboxProps {
    /**
     * The type of the hook.
     */
    readonly __TYPE?: 'useCheckbox';
    /**
     * Value of the checkbox.
     */
    value?: any;
    defaultChecked?: boolean | undefined;
    checked?: boolean | undefined;
    /**
     * When present, it specifies input state as indeterminate.
     * @default false
     */
    indeterminate?: boolean | undefined;
    /**
     * When present, it specifies that an input field is read-only.
     * @default false
     */
    readOnly?: boolean | undefined;
    disabled?: boolean | undefined;
    /**
     * Value in checked state.
     * @default true
     */
    trueValue?: any;
    /**
     * Value in unchecked state.
     * @default false
     */
    falseValue?: any;
    onCheckedChange?: (event: useCheckboxChangeEvent) => void;
    onFocus?: (event: React.FocusEventHandler<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEventHandler<HTMLInputElement>) => void;
}
