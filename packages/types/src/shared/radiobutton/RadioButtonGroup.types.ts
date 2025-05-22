/**
 *
 * RadioButtonGroup is a wrapper for the RadioButton component.
 *
 * [Live Demo](https://www.primereact.org/radiobutton/)
 *
 * @module radiobuttongroup
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughOptionType } from '..';
import type { RadioButtonChangeEvent } from './RadioButton.types';

/**
 * Defines passthrough(pt) options type in RadioButtonGroup component.
 */
export type RadioButtonGroupPassThroughOptionType<E> = PassThroughOptionType<RadioButtonGroupInstance, E>;

/**
 * Defines passthrough(pt) options of RadioButtonGroup component.
 */
export interface RadioButtonGroupPassThroughOptions {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: RadioButtonGroupPassThroughOptionType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the radio button group's value changes.
 */
export interface RadioButtonGroupValueChangeEvent {
    /**
     * The value of the radio button group.
     */
    value: unknown | undefined;
}

/**
 * Used to update the radio button group value.
 * @extends RadioButtonChangeEvent
 */
export interface RadioButtonGroupUpdateChangeEvent extends RadioButtonChangeEvent {}

/**
 * Defines valid properties in RadioButtonGroup component.
 */
export interface RadioButtonGroupProps extends BaseComponentProps {
    /**
     * Value of the radio button group.
     */
    value?: unknown | undefined;
    /**
     * The default value of the radio button group.
     */
    defaultValue?: unknown | undefined;
    /**
     * The name of the radio buttons.
     */
    name?: string | undefined;
    /**
     * When present, it specifies that the radio button group should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that the radio button group is invalid.
     * @default false
     */
    invalid?: boolean | undefined;
    /**
     * Callback function that is called when the radio button group value changes.
     */
    onValueChange?: (event: RadioButtonGroupValueChangeEvent) => void;
}

/**
 * Defines valid state in RadioButtonGroup component.
 */
export interface RadioButtonGroupState {}

/**
 * Defines the methods and properties exposed by RadioButtonGroup component.
 */
export interface RadioButtonGroupExposes {
    /**
     * Updates the value of the radio button group.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The new value of the radio button group.
     * @returns void
     */
    updateChange: (event: RadioButtonGroupUpdateChangeEvent) => void;
}

/**
 * Defines the CSS class names used in the RadioButtonGroup component
 */
export const RadioButtonGroupClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-radiobutton-group'
} as const;

/**
 * Type representing the CSS class names used in the RadioButton component.
 */
export type RadioButtonGroupClassNamesType = (typeof RadioButtonGroupClassNames)[keyof typeof RadioButtonGroupClassNames];

/**
 * Instance of RadioButtonGroup component.
 */
export type RadioButtonGroupInstance = ComponentInstance<RadioButtonGroupProps, RadioButtonGroupState, RadioButtonGroupExposes>;
