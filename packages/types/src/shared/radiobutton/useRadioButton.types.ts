import * as React from 'react';
/**
 * Event fired when the checkbox's checked state changes.
 */
export interface useRadioButtonChangeEvent {
    /**
     * The original event that triggered the change.
     */
    originalEvent: React.FormEventHandler<HTMLInputElement>;
    /**
     * The value of the radio button.
     */
    value: unknown;
}
/**
 * Props for the useAvatar hook.
 */
export interface useRadioButtonProps {
    /**
     * The type of the hook.
     */
    readonly __TYPE?: 'useRadioButton';
    /**
     * The value of the radio button.
     */
    value?: undefined;
    /**
     * When present, it specifies that the element should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that an input field is read-only.
     * @default false
     */
    readOnly?: boolean | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
