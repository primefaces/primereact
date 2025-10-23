/**
 *
 * DatePicker is a form component to work with dates.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepicker
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useDatePickerExposes, useDatePickerProps, useDatePickerState } from './useDatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePicker component.
 */
export type DatePickerPassThroughType<E> = PassThroughType<DatePickerInstance, E>;

/**
 * Defines passthrough(pt) options of DatePicker component.
 */
export interface DatePickerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DatePicker component.
 */
export interface DatePickerProps extends BaseComponentProps<DatePickerInstance, useDatePickerProps, DatePickerPassThrough> {}

/**
 * Defines valid state in DatePicker component.
 * @extends useDatePickerState
 */
export interface DatePickerState extends useDatePickerState {}

/**
 * Defines the methods and properties exposed by DatePicker component.
 * @extends useDatePickerExposes
 */
export interface DatePickerExposes extends useDatePickerExposes {}

/**
 * Defines the CSS class names used in the DatePicker component.
 */
export const DatePickerClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-datepicker'
} as const;

/**
 * Type representing the CSS class names used in the DatePicker component.
 */
export type DatePickerClassNamesType = (typeof DatePickerClassNames)[keyof typeof DatePickerClassNames];

/**
 * Instance of DatePicker component.
 */
export type DatePickerInstance = ComponentInstance<DatePickerProps, DatePickerState, DatePickerExposes>;
