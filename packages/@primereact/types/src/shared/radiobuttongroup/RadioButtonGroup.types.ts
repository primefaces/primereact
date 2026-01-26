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
import type { BaseComponentProps, PassThroughType } from '..';
import { useRadioButtonGroupChangeEvent, useRadioButtonGroupExposes, useRadioButtonGroupProps, useRadioButtonGroupState } from './useRadioButtonGroup.types';

/**
 * Defines passthrough(pt) options type in RadioButtonGroup component.
 */
export type RadioButtonGroupPassThroughType<E> = PassThroughType<RadioButtonGroupInstance, E>;

/**
 * Defines passthrough(pt) options of RadioButtonGroup component.
 */
export interface RadioButtonGroupPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: RadioButtonGroupPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the radio button's checked state changes.
 * @extends useRadioButtonChangeEvent
 */
export interface RadioButtonGroupChangeEvent extends useRadioButtonGroupChangeEvent {
    /**
     * Value of the radio button.
     */
    value: unknown | undefined;
}

/**
 * Defines valid properties in RadioButtonGroup component.
 */
export interface RadioButtonGroupProps extends BaseComponentProps<RadioButtonGroupInstance, Omit<useRadioButtonGroupProps, 'onValueChange'>, RadioButtonGroupPassThrough> {
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
     * Callback fired when the checkboxgroup's value state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @returns void
     */
    onValueChange?: (event: RadioButtonGroupChangeEvent) => void;
}

/**
 * Defines valid state in RadioButtonGroup component.
 */
export interface RadioButtonGroupState extends useRadioButtonGroupState {}

/**
 * Defines the methods and properties exposed by RadioButtonGroup component.
 */
export interface RadioButtonGroupExposes extends useRadioButtonGroupExposes {}

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
 * Type representing the CSS class names used in the RadioButtonGroup component.
 */
export type RadioButtonGroupClassNamesType = (typeof RadioButtonGroupClassNames)[keyof typeof RadioButtonGroupClassNames];

/**
 * Instance of RadioButtonGroup component.
 */
export type RadioButtonGroupInstance = ComponentInstance<RadioButtonGroupProps, RadioButtonGroupState, RadioButtonGroupExposes>;
