/**
 *
 * DatePickerDecrement is a component that displays a decrement button.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerdecrement
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerDecrement component.
 */
export type DatePickerDecrementPassThroughType<E> = PassThroughType<DatePickerDecrementInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerDecrement component.
 */
export interface DatePickerDecrementPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerDecrementPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in DatePickerDecrement component.
 */
export interface DatePickerDecrementProps extends BaseComponentProps<DatePickerDecrementInstance, unknown, DatePickerDecrementPassThrough> {}

/**
 * Defines valid state in DatePickerDecrement component.
 */
export interface DatePickerDecrementState {}

/**
 * Defines the methods and properties exposed by DatePickerDecrement component.
 */
export interface DatePickerDecrementExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerDecrement component.
 */
export type DatePickerDecrementInstance = ComponentInstance<DatePickerDecrementProps, DatePickerDecrementState, DatePickerDecrementExposes>;
