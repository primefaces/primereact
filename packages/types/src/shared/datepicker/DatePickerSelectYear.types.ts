/**
 *
 * DatePickerSelectYear is a component that displays a selectyear.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerselectyear
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerSelectYear component.
 */
export type DatePickerSelectYearPassThroughType<E> = PassThroughType<DatePickerSelectYearInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerSelectYear component.
 */
export interface DatePickerSelectYearPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerSelectYearPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in DatePickerSelectYear component.
 */
export interface DatePickerSelectYearProps extends BaseComponentProps<DatePickerSelectYearInstance, unknown, DatePickerSelectYearPassThrough> {}

/**
 * Defines valid state in DatePickerSelectYear component.
 */
export interface DatePickerSelectYearState {}

/**
 * Defines the methods and properties exposed by DatePickerSelectYear component.
 */
export interface DatePickerSelectYearExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerSelectYear component.
 */
export type DatePickerSelectYearInstance = ComponentInstance<DatePickerSelectYearProps, DatePickerSelectYearState, DatePickerSelectYearExposes>;
