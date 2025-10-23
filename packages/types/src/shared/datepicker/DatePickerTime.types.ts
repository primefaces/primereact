/**
 *
 * DatePickerTime is a component that displays a time.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickertime
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerTime component.
 */
export type DatePickerTimePassThroughType<E> = PassThroughType<DatePickerTimeInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerTime component.
 */
export interface DatePickerTimePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerTimePassThroughType<React.HTMLAttributes<HTMLTableRowElement>>;
}

/**
 * Defines valid properties in DatePickerTime component.
 */
export interface DatePickerTimeProps extends BaseComponentProps<DatePickerTimeInstance, unknown, DatePickerTimePassThrough> {}

/**
 * Defines valid state in DatePickerTime component.
 */
export interface DatePickerTimeState {}

/**
 * Defines the methods and properties exposed by DatePickerTime component.
 */
export interface DatePickerTimeExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerTime component.
 */
export type DatePickerTimeInstance = ComponentInstance<DatePickerTimeProps, DatePickerTimeState, DatePickerTimeExposes>;
