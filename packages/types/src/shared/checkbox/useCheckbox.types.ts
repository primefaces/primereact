import * as React from 'react';

/**
 * Event fired when the checkbox's checked state changes.
 */
export interface useCheckboxChangeEvent {
    /**
     * The original event that triggered the change.
     */
    originalEvent: React.FormEventHandler<HTMLInputElement>;
    /**
     * The value of the checkbox.
     */
    value: unknown;
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
    value?: unknown;
    /**
     * The default value for the input when not controlled by `checked` and `onCheckedChange`.
     */
    defaultChecked?: boolean | undefined;
    /**
     * When present, it specifies the input's checked state.
     */
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
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Value in checked state.
     * @default true
     */
    trueValue?: boolean | string | number | undefined;
    /**
     * Value in unchecked state.
     * @default false
     */
    falseValue?: boolean | string | number | undefined;
    /**
     * Callback fired when the checkbox's checked state changes.
     */
    onCheckedChange?: (event: useCheckboxChangeEvent) => void;
}
