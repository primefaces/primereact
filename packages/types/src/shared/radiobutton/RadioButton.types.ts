/**
 *
 * RadioButton is an extension to standard radio button element with theming.
 *
 * [Live Demo](https://www.primereact.org/radiobutton/)
 *
 * @module radiobutton
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { RadioButtonGroupInstance } from './RadioButtonGroup.types';
import type { useRadioButtonChangeEvent, useRadioButtonExposes, useRadioButtonProps, useRadioButtonState } from './useRadioButton.types';

/**
 * Defines passthrough(pt) options type in RadioButton component.
 */
export type RadioButtonPassThroughType<E> = PassThroughType<RadioButtonInstance, E>;

/**
 * Defines passthrough(pt) options of RadioButton component.
 */
export interface RadioButtonPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: RadioButtonPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: RadioButtonPassThroughType<React.InputHTMLAttributes<HTMLInputElement>>;
    /**
     * Used to pass attributes to the box's DOM element.
     */
    box?: RadioButtonPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: RadioButtonPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Event fired when the radio button's checked state changes.
 * @extends useRadioButtonChangeEvent
 */
export interface RadioButtonChangeEvent extends useRadioButtonChangeEvent<React.ChangeEvent<HTMLInputElement>> {
    /**
     * Value of the radio button.
     */
    value?: unknown | undefined;
}

/**
 * Defines valid properties in RadioButton component.
 */
export interface RadioButtonProps extends BaseComponentProps<RadioButtonInstance, Omit<useRadioButtonProps, 'onCheckedChange'>> {
    /**
     * Value of the radio button.
     */
    value?: unknown | undefined;
    /**
     * The name of the radio button.
     */
    name?: string | undefined;
    /**
     * Defines the size of the radio button.
     */
    size?: 'small' | 'normal' | 'large' | undefined;
    /**
     * Specifies the input variant of the component.
     */
    variant?: 'outlined' | 'filled' | undefined;
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
     * When present, it specifies that the element is required.
     * @default false
     */
    required?: boolean | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @default false
     */
    invalid?: boolean | undefined;
    /**
     * Identifier of the underlying input element.
     */
    inputId?: string | undefined;
    /**
     * Inline style of the input field.
     */
    inputStyle?: React.CSSProperties | undefined;
    /**
     * Style class of the input field.
     */
    inputClassName?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Callback function that is called when the checkbox is focused.
     */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Callback function that is called when the checkbox loses focus.
     */
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Callback fired when the radio button's checked state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.checked The checked state of the radio button.
     * @returns void
     */
    onCheckedChange?: (event: RadioButtonChangeEvent) => void;
}

/**
 * Defines valid state in RadioButton component.
 * @extends useRadioButtonState
 */
export interface RadioButtonState extends useRadioButtonState {}

/**
 * Defines the methods and properties exposed by RadioButton component.
 * @extends useRadioButtonExposes
 */
export interface RadioButtonExposes extends useRadioButtonExposes {
    /**
     * The group instance of the radio button.
     */
    group?: RadioButtonGroupInstance | undefined | null;
}

/**
 * Defines the CSS class names used in the RadioButton component.
 */
export const RadioButtonClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-radiobutton',
    /**
     * Class name of the box element
     */
    box: 'p-radiobutton-box',
    /**
     * Class name of the input element
     */
    input: 'p-radiobutton-input',
    /**
     * Class name of the icon element
     */
    icon: 'p-radiobutton-icon'
} as const;

/**
 * Type representing the CSS class names used in the RadioButton component.
 */
export type RadioButtonClassNamesType = (typeof RadioButtonClassNames)[keyof typeof RadioButtonClassNames];

/**
 * Instance of RadioButton component.
 */
export type RadioButtonInstance = ComponentInstance<RadioButtonProps, RadioButtonState, RadioButtonExposes, RadioButtonPassThrough>;
