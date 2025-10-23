/**
 *
 * DatePickerButtonbar is a component that displays a buttonbar.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerbuttonbar
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerButtonbar component.
 */
export type DatePickerButtonbarPassThroughType<E> = PassThroughType<DatePickerButtonbarInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerButtonbar component.
 */
export interface DatePickerButtonbarPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerButtonbarPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DatePickerButtonbar component.
 */
export interface DatePickerButtonbarProps extends BaseComponentProps<DatePickerButtonbarInstance, unknown, DatePickerButtonbarPassThrough> {}

/**
 * Defines valid state in DatePickerButtonbar component.
 */
export interface DatePickerButtonbarState {}

/**
 * Defines the methods and properties exposed by DatePickerButtonbar component.
 */
export interface DatePickerButtonbarExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerButtonbar component.
 */
export type DatePickerButtonbarInstance = ComponentInstance<DatePickerButtonbarProps, DatePickerButtonbarState, DatePickerButtonbarExposes>;
