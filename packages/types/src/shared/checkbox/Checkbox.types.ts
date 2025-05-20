/**
 *
 * Checkbox is an extension to standard checkbox element with theming.
 *
 * [Live Demo](https://www.primereact.org/checkbox/)
 *
 * @module checkbox
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';
import type { useCheckboxChangeEvent, useCheckboxExposes, useCheckboxProps, useCheckboxState } from './useCheckbox.types';

/**
 * Defines passthrough(pt) options type in Checkbox component.
 */
export type CheckboxPassThroughOptionType<E> = PassThroughOptionType<CheckboxInstance, E>;

/**
 * Defines passthrough(pt) options of Checkbox component.
 */
export interface CheckboxPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CheckboxPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: CheckboxPassThroughOptionType<React.InputHTMLAttributes<HTMLInputElement>>;
    /**
     * Used to pass attributes to the box's DOM element.
     */
    box?: CheckboxPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: CheckboxPassThroughOptionType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Event fired when the checkbox's checked state changes.
 * @extends useCheckboxChangeEvent
 */
export interface CheckboxChangeEvent extends useCheckboxChangeEvent<React.ChangeEvent<HTMLInputElement>> {
    /**
     * Value of the checkbox.
     */
    value?: unknown | undefined;
}

/**
 * Defines valid properties in Checkbox component.
 */
export interface CheckboxProps extends BaseComponentProps<Omit<useCheckboxProps, 'onCheckedChange'>> {
    /**
     * Value of the checkbox.
     */
    value?: unknown | undefined;
    /**
     * The name of the checkbox.
     */
    name?: string | undefined;
    /**
     * Defines the size of the checkbox.
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
     * Callback fired when the checkbox's checked state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.checked The checked state of the checkbox.
     * @returns void
     */
    onCheckedChange?: (event: CheckboxChangeEvent) => void;
}

/**
 * Defines valid state in Checkbox component.
 * @extends useCheckboxState
 */
export interface CheckboxState extends useCheckboxState {}

/**
 * Defines the methods and properties exposed by Checkbox component.
 * @extends useCheckboxExposes
 */
export interface CheckboxExposes extends useCheckboxExposes {}

/**
 * Defines the CSS class names used in the Checkbox component.
 */
export const CheckboxClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-checkbox',
    /**
     * Class name of the box element
     */
    box: 'p-checkbox-box',
    /**
     * Class name of the input element
     */
    input: 'p-checkbox-input',
    /**
     * Class name of the icon element
     */
    icon: 'p-checkbox-icon'
} as const;

/**
 * Type representing the CSS class names used in the Button component.
 */
export type CheckboxClassNamesType = (typeof CheckboxClassNames)[keyof typeof CheckboxClassNames];

/**
 * Instance of Checkbox component.
 */
export type CheckboxInstance = ComponentInstance<CheckboxProps, CheckboxState, CheckboxExposes>;
