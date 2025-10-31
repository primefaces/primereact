/**
 *
 * DatePickerIncrement is a component that displays a increment button.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerincrement
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerIncrement component.
 */
export type DatePickerIncrementPassThroughType<E> = PassThroughType<DatePickerIncrementInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerIncrement component.
 */
export interface DatePickerIncrementPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerIncrementPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the increment icon's DOM element.
     */
    incrementIcon?: DatePickerIncrementPassThroughType<React.HTMLAttributes<SVGElement>>;
}

/**
 * Defines valid properties in DatePickerIncrement component.
 */
export interface DatePickerIncrementProps extends BaseComponentProps<DatePickerIncrementInstance, unknown, DatePickerIncrementPassThrough> {}

/**
 * Defines valid state in DatePickerIncrement component.
 */
export interface DatePickerIncrementState {}

/**
 * Defines the methods and properties exposed by DatePickerIncrement component.
 */
export interface DatePickerIncrementExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerIncrement component.
 */
export type DatePickerIncrementInstance = ComponentInstance<DatePickerIncrementProps, DatePickerIncrementState, DatePickerIncrementExposes>;
