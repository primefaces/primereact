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

import type { useCheckboxGroupChangeEvent, useCheckboxGroupExposes, useCheckboxGroupProps, useCheckboxGroupState } from './useCheckboxGroup.types';

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
 * Event fired when the checkbox's checked state changes.
 * @extends useCheckboxGroupChangeEvent
 */
export interface CheckboxGroupChangeEvent extends useCheckboxGroupChangeEvent {
    value: unknown[] | undefined;
}

/**
 * Defines valid properties in CheckboxGroup component.
 * @extends useCheckboxGroupProps
 */

export interface CheckboxGroupProps extends BaseComponentProps<CheckboxGroupInstance, Omit<useCheckboxGroupProps, 'onValueChange'>, CheckboxGroupPassThrough> {
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
     * Callback fired when the checkboxgroup's value state changes.
     * @param event The event that triggered the change.
     * @param event.originalEvent The original event that triggered the change.
     * @param event.value The value state of the checkbox.
     * @returns void
     */
    onValueChange?: (event: CheckboxGroupChangeEvent) => void;
}

/**
 * Defines valid state in CheckboxGroup component.
 * @extends useCheckboxGroupState
 */
export interface CheckboxGroupState extends useCheckboxGroupState {}

/**
 * Defines the methods and properties exposed by CheckboxGroup component.
 * @extends useCheckboxGroupExposes
 */
export interface CheckboxGroupExposes extends useCheckboxGroupExposes {}

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
export type CheckboxGroupInstance = ComponentInstance<CheckboxGroupProps, CheckboxGroupState, CheckboxGroupExposes>;
