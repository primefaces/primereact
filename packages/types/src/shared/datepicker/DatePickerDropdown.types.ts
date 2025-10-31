/**
 *
 * DatePickerDropdown is a component that displays a dropdown button.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerdropdown
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerDropdown component.
 */
export type DatePickerDropdownPassThroughType<E> = PassThroughType<DatePickerDropdownInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerDropdown component.
 */
export interface DatePickerDropdownPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerDropdownPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in DatePickerDropdown component.
 */
export interface DatePickerDropdownProps extends BaseComponentProps<DatePickerDropdownInstance, unknown, DatePickerDropdownPassThrough> {}

/**
 * Defines valid state in DatePickerDropdown component.
 */
export interface DatePickerDropdownState {}

/**
 * Defines the methods and properties exposed by DatePickerDropdown component.
 */
export interface DatePickerDropdownExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerDropdown component.
 */
export type DatePickerDropdownInstance = ComponentInstance<DatePickerDropdownProps, DatePickerDropdownState, DatePickerDropdownExposes>;
