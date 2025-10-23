/**
 *
 * DatePickerMinute is a component that displays a minute.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerminute
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerMinute component.
 */
export type DatePickerMinutePassThroughType<E> = PassThroughType<DatePickerMinuteInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerMinute component.
 */
export interface DatePickerMinutePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerMinutePassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in DatePickerMinute component.
 */
export interface DatePickerMinuteProps extends BaseComponentProps<DatePickerMinuteInstance, unknown, DatePickerMinutePassThrough> {}

/**
 * Defines valid state in DatePickerMinute component.
 */
export interface DatePickerMinuteState {}

/**
 * Defines the methods and properties exposed by DatePickerMinute component.
 */
export interface DatePickerMinuteExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerMinute component.
 */
export type DatePickerMinuteInstance = ComponentInstance<DatePickerMinuteProps, DatePickerMinuteState, DatePickerMinuteExposes>;
