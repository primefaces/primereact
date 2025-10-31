/**
 *
 * DatePickerSelectMonth is a component that displays a selectmonth.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerselectmonth
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerSelectMonth component.
 */
export type DatePickerSelectMonthPassThroughType<E> = PassThroughType<DatePickerSelectMonthInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerSelectMonth component.
 */
export interface DatePickerSelectMonthPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerSelectMonthPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in DatePickerSelectMonth component.
 */
export interface DatePickerSelectMonthProps extends BaseComponentProps<DatePickerSelectMonthInstance, unknown, DatePickerSelectMonthPassThrough> {}

/**
 * Defines valid state in DatePickerSelectMonth component.
 */
export interface DatePickerSelectMonthState {}

/**
 * Defines the methods and properties exposed by DatePickerSelectMonth component.
 */
export interface DatePickerSelectMonthExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerSelectMonth component.
 */
export type DatePickerSelectMonthInstance = ComponentInstance<DatePickerSelectMonthProps, DatePickerSelectMonthState, DatePickerSelectMonthExposes>;
