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
import { useRadioButtonGroupExposes, useRadioButtonGroupProps, useRadioButtonGroupState } from './useRadioButtonGroup.types';

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
 * Defines valid properties in RadioButtonGroup component.
 */
export interface RadioButtonGroupProps extends BaseComponentProps<RadioButtonGroupInstance, useRadioButtonGroupProps, RadioButtonGroupPassThrough> {
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
