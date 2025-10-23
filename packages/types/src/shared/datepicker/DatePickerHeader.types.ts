/**
 *
 * DatePickerHeader is a component that displays a header.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerheader
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerHeader component.
 */
export type DatePickerHeaderPassThroughType<E> = PassThroughType<DatePickerHeaderInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerHeader component.
 */
export interface DatePickerHeaderPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerHeaderPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DatePickerHeader component.
 */
export interface DatePickerHeaderProps extends BaseComponentProps<DatePickerHeaderInstance, unknown, DatePickerHeaderPassThrough> {}

/**
 * Defines valid state in DatePickerHeader component.
 */
export interface DatePickerHeaderState {}

/**
 * Defines the methods and properties exposed by DatePickerHeader component.
 */
export interface DatePickerHeaderExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerHeader component.
 */
export type DatePickerHeaderInstance = ComponentInstance<DatePickerHeaderProps, DatePickerHeaderState, DatePickerHeaderExposes>;
