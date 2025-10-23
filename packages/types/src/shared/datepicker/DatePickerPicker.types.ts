/**
 *
 * DatePickerPicker is a component that displays a picker.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerpicker
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerPicker component.
 */
export type DatePickerPickerPassThroughType<E> = PassThroughType<DatePickerPickerInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerPicker component.
 */
export interface DatePickerPickerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerPickerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DatePickerPicker component.
 */
export interface DatePickerPickerProps extends BaseComponentProps<DatePickerPickerInstance, unknown, DatePickerPickerPassThrough> {}

/**
 * Defines valid state in DatePickerPicker component.
 */
export interface DatePickerPickerState {}

/**
 * Defines the methods and properties exposed by DatePickerPicker component.
 */
export interface DatePickerPickerExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerPicker component.
 */
export type DatePickerPickerInstance = ComponentInstance<DatePickerPickerProps, DatePickerPickerState, DatePickerPickerExposes>;
