/**
 *
 * Checkbox is an extension to standard checkbox element with theming.
 *
 * [Live Demo](https://www.primereact.org/checkbox/)
 *
 * @module checkboxroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CheckboxGroupInstance } from './CheckboxGroup.types';
import type { useCheckboxChangeEvent, useCheckboxExposes, useCheckboxProps, useCheckboxState } from './useCheckbox.types';

/**
 * Defines passthrough(pt) options type in CheckboxRoot component.
 */
export type CheckboxRootPassThroughType<E> = PassThroughType<CheckboxRootInstance, E>;

/**
 * Defines passthrough(pt) options of CheckboxRoot component.
 */
export interface CheckboxRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CheckboxRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    input?: CheckboxRootPassThroughType<React.InputHTMLAttributes<HTMLInputElement>>;
    /**
     * Used to pass attributes to the box's DOM element.
     */
    box?: CheckboxRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the icon's DOM element.
     */
    icon?: CheckboxRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Event fired when the checkbox's checked state changes.
 * @extends useCheckboxChangeEvent
 */
export interface CheckboxRootChangeEvent extends useCheckboxChangeEvent<React.ChangeEvent<HTMLInputElement>> {
    /**
     * Value of the checkbox.
     */
    value?: unknown | undefined;
}

/**
 * Defines valid properties in CheckboxRoot component.
 */
export interface CheckboxRootProps extends BaseComponentProps<CheckboxRootInstance, Omit<useCheckboxProps, 'onCheckedChange'>, CheckboxRootPassThrough> {
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
    onCheckedChange?: (event: CheckboxRootChangeEvent) => void;
}

/**
 * Defines valid state in CheckboxRoot component.
 * @extends useCheckboxState
 */
export interface CheckboxRootState extends useCheckboxState {}

/**
 * Defines the methods and properties exposed by CheckboxRoot component.
 * @extends useCheckboxExposes
 */
export interface CheckboxRootExposes extends useCheckboxExposes {
    /**
     * The group instance of the checkbox.
     */
    group?: CheckboxGroupInstance | undefined | null;
}

/**
 * Instance of CheckboxRoot component.
 */
export type CheckboxRootInstance = ComponentInstance<CheckboxRootProps, CheckboxRootState, CheckboxRootExposes>;
