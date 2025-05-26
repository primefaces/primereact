/**
 *
 * ToggleButtonGroup is a component that allows users to select one or more options from a set of toggle buttons.
 *
 * [Live Demo](https://www.primereact.org/togglebutton/)
 *
 * @module ToggleButtonGroup
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { ToggleButtonChangeEvent } from './ToggleButton.types';

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
 * Used to update the ToggleButton group value.
 * @extends ToggleButtonChangeEvent
 */
export interface ToggleButtonGroupUpdateChangeEvent extends ToggleButtonChangeEvent {}

/**
 * Defines valid properties in ToggleButtonGroup component.
 */
export interface ToggleButtonGroupProps extends BaseComponentProps<ToggleButtonGroupInstance> {
    /**
     * Value of the ToggleButton group.
     */
    value?: unknown | unknown[] | undefined;
    /**
     * The default value of the ToggleButton group.
     */
    defaultValue?: unknown | unknown[] | undefined;
    /**
     * Defines the size of the ToggleButton components.
     */
    size?: 'small' | 'normal' | 'large' | undefined;
    /**
     * When present, it specifies that the ToggleButton group allows multiple selections.
     * @default false
     */
    multiple?: boolean | undefined;
    /**
     * When present, it specifies that the ToggleButton group allows empty selection.
     * @default true
     */
    allowEmpty?: boolean | undefined;
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
 */
export interface ToggleButtonGroupState {
    /**
     * Value of the ToggleButton group.
     */
    value: unknown | unknown[] | undefined;
}

/**
 * Defines the methods and properties exposed by ToggleButtonGroup component.
 */
export interface ToggleButtonGroupExposes {
    /**
     * The state of the ToggleButton group.
     */
    state: ToggleButtonGroupState;
    /**
     * Updates the value of the ToggleButton group.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The new value of the ToggleButton group.
     * @returns void
     */
    updateChange: (event: ToggleButtonGroupUpdateChangeEvent) => void;
    /**
     * Checks if a toggle button is pressed.
     * Returns true if the toggle button is pressed, false if not pressed, or undefined if the value is undefined.
     * @param value The current value of the ToggleButton group.
     * @param toggleButtonValue The value of the toggle button to check.
     * @returns boolean | undefined
     */
    isPressed: (value: unknown | unknown[] | undefined, toggleButtonValue: unknown) => boolean | undefined;
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
export type ToggleButtonGroupInstance = ComponentInstance<ToggleButtonGroupProps, ToggleButtonGroupState, ToggleButtonGroupExposes, ToggleButtonGroupPassThrough>;
