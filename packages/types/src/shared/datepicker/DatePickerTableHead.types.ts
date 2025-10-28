/**
 *
 * DatePickerTableHead is a component that displays a thead.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickertablehead
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerTableHead component.
 */
export type DatePickerTableHeadPassThroughType<E> = PassThroughType<DatePickerTableHeadInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerTableHead component.
 */
export interface DatePickerTableHeadPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerTableHeadPassThroughType<React.HTMLAttributes<HTMLTableSectionElement>>;
}

/**
 * Defines valid properties in DatePickerTableHead component.
 */
export interface DatePickerTableHeadProps extends BaseComponentProps<DatePickerTableHeadInstance, unknown, DatePickerTableHeadPassThrough> {}

/**
 * Defines valid state in DatePickerTableHead component.
 */
export interface DatePickerTableHeadState {}

/**
 * Defines the methods and properties exposed by DatePickerTableHead component.
 */
export interface DatePickerTableHeadExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerTableHead component.
 */
export type DatePickerTableHeadInstance = ComponentInstance<DatePickerTableHeadProps, DatePickerTableHeadState, DatePickerTableHeadExposes>;
