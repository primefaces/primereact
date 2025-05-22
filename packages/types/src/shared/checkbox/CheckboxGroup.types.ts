/**
 *
 * CheckboxGroup allows to select multiple options from a set of choices.
 *
 * [Live Demo](https://www.primereact.org/checkbox/)
 *
 * @module checkboxgroup
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { CheckboxChangeEvent } from './Checkbox.types';

/**
 * Defines passthrough(pt) options type in Checkbox component.
 */
export type CheckboxGroupPassThroughType<E> = PassThroughType<CheckboxGroupInstance, E>;

/**
 * Defines passthrough(pt) options of Checkbox component.
 */
export interface CheckboxGroupPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: CheckboxGroupPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the checkbox group's value changes.
 */
export interface CheckboxGroupValueChangeEvent {
    /**
     * The value of the checkbox group.
     */
    value: unknown[] | undefined;
}

/**
 * Used to update the checkbox group value.
 * @extends CheckboxChangeEvent
 */
export interface CheckboxGroupUpdateChangeEvent extends CheckboxChangeEvent {}

/**
 * Defines valid properties in CheckboxGroup component.
 */
export interface CheckboxGroupProps extends BaseComponentProps<CheckboxGroupInstance> {
    /**
     * Value of the checkbox group.
     */
    value?: unknown[] | undefined;
    /**
     * The default value of the checkbox group.
     */
    defaultValue?: unknown[] | undefined;
    /**
     * The name of the checkboxes.
     */
    name?: string | undefined;
    /**
     * When present, it specifies that the checkbox group should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * When present, it specifies that the checkbox group is invalid.
     * @default false
     */
    invalid?: boolean | undefined;
    /**
     * Callback function that is called when the checkbox group value changes.
     */
    onValueChange?: (event: CheckboxGroupValueChangeEvent) => void;
}

/**
 * Defines valid state in CheckboxGroup component.
 */
export interface CheckboxGroupState {}

/**
 * Defines the methods and properties exposed by CheckboxGroup component.
 */
export interface CheckboxGroupExposes {
    /**
     * Updates the value of the checkbox group.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The new value of the checkbox group.
     * @returns void
     */
    updateChange: (event: CheckboxGroupUpdateChangeEvent) => void;
}

/**
 * Defines the CSS class names used in the CheckboxGroup component.
 */
export const CheckboxGroupClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-checkbox-group'
} as const;

/**
 * Type representing the CSS class names used in the CheckboxGroup component.
 */
export type CheckboxGroupClassNamesType = (typeof CheckboxGroupClassNames)[keyof typeof CheckboxGroupClassNames];

/**
 * Instance of CheckboxGroup component.
 */
export type CheckboxGroupInstance = ComponentInstance<CheckboxGroupProps, CheckboxGroupState, CheckboxGroupExposes, CheckboxGroupPassThrough>;
