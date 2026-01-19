/**
 *
 * SelectDropdown is the dropdown button for the Select component.
 *
 * [Live Demo](https://www.primereact.org/select/)
 *
 * @module selectdropdown
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { SelectRootInstance } from './SelectRoot.types';

/**
 * Defines passthrough(pt) options type in SelectDropdown component.
 */
export type SelectDropdownPassThroughType<E> = PassThroughType<SelectDropdownInstance, E>;

/**
 * Defines passthrough(pt) options of SelectDropdown component.
 */
export interface SelectDropdownPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: SelectDropdownPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in SelectDropdown component.
 */
export interface SelectDropdownProps extends BaseComponentProps<SelectDropdownInstance, unknown, SelectDropdownPassThrough> {}

/**
 * Defines valid state in SelectDropdown component.
 */
export interface SelectDropdownState {}

/**
 * Defines the methods and properties exposed by SelectDropdown component.
 */
export interface SelectDropdownExposes {
    /**
     * The Select component instance.
     */
    select: SelectRootInstance | undefined | null;
}

/**
 * Instance of SelectDropdown component.
 */
export type SelectDropdownInstance = ComponentInstance<SelectDropdownProps, SelectDropdownState, SelectDropdownExposes>;
