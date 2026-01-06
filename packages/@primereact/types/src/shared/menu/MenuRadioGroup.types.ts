/**
 *
 * MenuRadioGroup is a component that groups radio items.
 *
 * [Live Demo](https://www.primereact.org/menu/)
 *
 * @module menuradiogroup
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';

/**
 * Defines passthrough(pt) options type in MenuRadioGroup component.
 */
export type MenuRadioGroupPassThroughType<E> = PassThroughType<MenuRadioGroupInstance, E>;

/**
 * Defines passthrough(pt) options of MenuRadioGroup component.
 */
export interface MenuRadioGroupPassThrough {}

/**
 * Context value shared between MenuRadioGroup and its child radio items.
 */
export interface MenuRadioGroupContextInterface {
    /**
     * Currently selected value in the radio group
     */
    value: unknown | undefined;
    /**
     *  Callback to update the selected value
     */
    onValueChange: (value: unknown) => void;
    /**
     * Optional name attribute for the radio group
     */
    name?: string;
}

/**
 * Event object for the onValueChange callback.
 */
export interface MenuRadioGroupValueChangeEvent {
    /**
     * The new selected value.
     */
    value: unknown;
}

/**
 * Defines valid properties in MenuRadioGroup component.
 */
export interface MenuRadioGroupProps extends BaseComponentProps<MenuRadioGroupInstance, unknown, MenuRadioGroupPassThrough> {
    /**
     * Value of the selected radio item.
     */
    value?: unknown;
    /**
     * Default value of the selected radio item.
     */
    defaultValue?: unknown;
    /**
     * Name for the radio group.
     */
    name?: string | undefined;
    /**
     * Callback to invoke when value changes.
     */
    onValueChange?: (event: MenuRadioGroupValueChangeEvent) => void;
}

/**
 * Defines valid state in MenuRadioGroup component.
 */
export interface MenuRadioGroupState {}

/**
 * Defines the methods and properties exposed by MenuRadioGroup component.
 */
export interface MenuRadioGroupExposes {
    /**
     * Context value for the radio group containing the current selection state, change handler, and optional group name.
     */
    context: MenuRadioGroupContextInterface;
}

/**
 * Instance of MenuRadioGroup component.
 */
export type MenuRadioGroupInstance = ComponentInstance<MenuRadioGroupProps, MenuRadioGroupState, MenuRadioGroupExposes>;
