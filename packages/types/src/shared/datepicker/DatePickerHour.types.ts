/**
 *
 * DatePickerHour is a component that displays a hour.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerhour
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerHour component.
 */
export type DatePickerHourPassThroughType<E> = PassThroughType<DatePickerHourInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerHour component.
 */
export interface DatePickerHourPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerHourPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in DatePickerHour component.
 */
export interface DatePickerHourProps extends BaseComponentProps<DatePickerHourInstance, unknown, DatePickerHourPassThrough> {}

/**
 * Defines valid state in DatePickerHour component.
 */
export interface DatePickerHourState {}

/**
 * Defines the methods and properties exposed by DatePickerHour component.
 */
export interface DatePickerHourExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerHour component.
 */
export type DatePickerHourInstance = ComponentInstance<DatePickerHourProps, DatePickerHourState, DatePickerHourExposes>;
