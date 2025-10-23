/**
 *
 * DatePickerToday is a component that displays a today button.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickertoday
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerToday component.
 */
export type DatePickerTodayPassThroughType<E> = PassThroughType<DatePickerTodayInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerToday component.
 */
export interface DatePickerTodayPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerTodayPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in DatePickerToday component.
 */
export interface DatePickerTodayProps extends BaseComponentProps<DatePickerTodayInstance, unknown, DatePickerTodayPassThrough> {}

/**
 * Defines valid state in DatePickerToday component.
 */
export interface DatePickerTodayState {}

/**
 * Defines the methods and properties exposed by DatePickerToday component.
 */
export interface DatePickerTodayExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerToday component.
 */
export type DatePickerTodayInstance = ComponentInstance<DatePickerTodayProps, DatePickerTodayState, DatePickerTodayExposes>;
