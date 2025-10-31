/**
 *
 * DatePickerInput is a component that displays a input.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerinput
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerInput component.
 */
export type DatePickerInputPassThroughType<E> = PassThroughType<DatePickerInputInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerInput component.
 */
export interface DatePickerInputPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerInputPassThroughType<React.HTMLAttributes<HTMLInputElement>>;
}

/**
 * Defines valid properties in DatePickerInput component.
 */
export interface DatePickerInputProps extends BaseComponentProps<DatePickerInputInstance, unknown, DatePickerInputPassThrough> {}

/**
 * Defines valid state in DatePickerInput component.
 */
export interface DatePickerInputState {}

/**
 * Defines the methods and properties exposed by DatePickerInput component.
 */
export interface DatePickerInputExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerInput component.
 */
export type DatePickerInputInstance = ComponentInstance<DatePickerInputProps, DatePickerInputState, DatePickerInputExposes>;
