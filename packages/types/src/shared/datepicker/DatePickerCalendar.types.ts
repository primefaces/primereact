/**
 *
 * DatePickerCalendar is a component that displays a calendar.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickercalendar
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerCalendar component.
 */
export type DatePickerCalendarPassThroughType<E> = PassThroughType<DatePickerCalendarInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerCalendar component.
 */
export interface DatePickerCalendarPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerCalendarPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DatePickerCalendar component.
 */
export interface DatePickerCalendarProps extends BaseComponentProps<DatePickerCalendarInstance, unknown, DatePickerCalendarPassThrough> {}

/**
 * Defines valid state in DatePickerCalendar component.
 */
export interface DatePickerCalendarState {}

/**
 * Defines the methods and properties exposed by DatePickerCalendar component.
 */
export interface DatePickerCalendarExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerCalendar component.
 */
export type DatePickerCalendarInstance = ComponentInstance<DatePickerCalendarProps, DatePickerCalendarState, DatePickerCalendarExposes>;
