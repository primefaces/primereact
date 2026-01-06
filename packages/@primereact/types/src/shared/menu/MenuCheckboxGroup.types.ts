/**
 *
 * MenuCheckboxGroup is a component that groups checkbox items.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menucheckboxgroup
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';

/**
 * Defines passthrough(pt) options type in MenuCheckboxGroup component.
 */
export type MenuCheckboxGroupPassThroughType<E> = PassThroughType<MenuCheckboxGroupInstance, E>;

/**
 * Defines passthrough(pt) options of MenuCheckboxGroup component.
 */
export interface MenuCheckboxGroupPassThrough {}

/**
 * Context value shared between MenuCheckboxGroup and its child checkbox items.
 */
export interface MenuCheckboxGroupContextInterface {
    /**
     * Currently selected values in the checkbox group
     */
    value: unknown[] | undefined;
    /**
     *  Callback to update the selected values
     */
    onValueChange: (value: unknown[]) => void;
    /**
     * Optional name attribute for the checkbox group
     */
    name?: string;
}

/**
 * Event object for the onValueChange callback.
 */
export interface MenuCheckboxGroupValueChangeEvent {
    /**
     * The new selected values.
     */
    value: unknown[];
}

/**
 * Defines valid properties in MenuCheckboxGroup component.
 */
export interface MenuCheckboxGroupProps extends BaseComponentProps<MenuCheckboxGroupInstance, unknown, MenuCheckboxGroupPassThrough> {
    /**
     * Values of the selected checkbox items.
     */
    value?: unknown[];
    /**
     * Default values of the selected checkbox items.
     */
    defaultValue?: unknown[];
    /**
     * Callback to invoke when value changes.
     */
    onValueChange?: (event: MenuCheckboxGroupValueChangeEvent) => void;
}

/**
 * Defines valid state in MenuCheckboxGroup component.
 */
export interface MenuCheckboxGroupState {}

/**
 * Defines the methods and properties exposed by MenuCheckboxGroup component.
 */
export interface MenuCheckboxGroupExposes {
    /**
     * Context value for the checkbox group containing the current selection state, change handler, and optional group name.
     */
    context: MenuCheckboxGroupContextInterface;
}

/**
 * Instance of MenuCheckboxGroup component.
 */
export type MenuCheckboxGroupInstance = ComponentInstance<MenuCheckboxGroupProps, MenuCheckboxGroupState, MenuCheckboxGroupExposes>;
