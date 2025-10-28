/**
 *
 * DatePickerDropdownIcon is a component that displays a dropdownicon icon.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerdropdownicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerDropdownIcon component.
 */
export type DatePickerDropdownIconPassThroughType<E> = PassThroughType<DatePickerDropdownIconInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerDropdownIcon component.
 */
export interface DatePickerDropdownIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerDropdownIconPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in DatePickerDropdownIcon component.
 */
export interface DatePickerDropdownIconProps extends BaseComponentProps<DatePickerDropdownIconInstance, unknown, DatePickerDropdownIconPassThrough> {}

/**
 * Defines valid state in DatePickerDropdownIcon component.
 */
export interface DatePickerDropdownIconState {}

/**
 * Defines the methods and properties exposed by DatePickerDropdownIcon component.
 */
export interface DatePickerDropdownIconExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerDropdownIcon component.
 */
export type DatePickerDropdownIconInstance = ComponentInstance<DatePickerDropdownIconProps, DatePickerDropdownIconState, DatePickerDropdownIconExposes>;
