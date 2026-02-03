/**
 *
 * ToggleButtonGroup is a component that allows users to select one or more options from a set of toggle buttons.
 *
 * [Live Demo](https://www.primereact.org/togglebutton/)
 *
 * @module togglebuttongroup
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import { useToggleButtonGroupExposes, useToggleButtonGroupProps, useToggleButtonGroupState } from './useToggleButtonGroup.types';

/**
 * Defines passthrough(pt) options type in ToggleButton component.
 */
export type ToggleButtonGroupPassThroughType<E> = PassThroughType<ToggleButtonGroupInstance, E>;

/**
 * Defines passthrough(pt) options of ToggleButton component.
 */
export interface ToggleButtonGroupPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: ToggleButtonGroupPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the ToggleButton group's value changes.
 */
export interface ToggleButtonGroupValueChangeEvent {
    /**
     * The value of the ToggleButton group.
     */
    value: unknown | unknown[] | undefined;
}

/**
 * Defines valid properties in ToggleButtonGroup component.
 * @extends useToggleButtonGroupProps
 */
export interface ToggleButtonGroupProps extends BaseComponentProps<ToggleButtonGroupInstance, useToggleButtonGroupProps, ToggleButtonGroupPassThrough> {
    /**
     * Defines the size of the ToggleButton components.
     */
    size?: 'small' | 'normal' | 'large' | undefined;

    /**
     * When present, it specifies that the ToggleButton group should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that the ToggleButton group is invalid.
     * @default false
     */
    invalid?: boolean | undefined;
    /**
     * Callback function that is called when the ToggleButton group value changes.
     */
    onValueChange?: (event: ToggleButtonGroupValueChangeEvent) => void;
}

/**
 * Defines valid state in ToggleButtonGroup component.
 * @extends useToggleButtonGroupState
 */
export interface ToggleButtonGroupState extends useToggleButtonGroupState {}

/**
 * Defines the methods and properties exposed by ToggleButtonGroup component.
 * @extends useToggleButtonGroupExposes
 */
export interface ToggleButtonGroupExposes extends useToggleButtonGroupExposes {
    /**
     * The state of the ToggleButton group.
     */
    state: ToggleButtonGroupState;
}

/**
 * Defines the CSS class names used in the ToggleButtonGroup component.
 */
export const ToggleButtonGroupClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-togglebutton-group'
} as const;

/**
 * Type representing the CSS class names used in the ToggleButtonGroup component.
 */
export type ToggleButtonGroupClassNamesType = (typeof ToggleButtonGroupClassNames)[keyof typeof ToggleButtonGroupClassNames];

/**
 * Instance of ToggleButtonGroup component.
 */
export type ToggleButtonGroupInstance = ComponentInstance<ToggleButtonGroupProps, ToggleButtonGroupState, ToggleButtonGroupExposes>;
