/**
 *
 * DatePickerTableBody is a component that displays a tbody.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickertablebody
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerTableBody component.
 */
export type DatePickerTableBodyPassThroughType<E> = PassThroughType<DatePickerTableBodyInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerTableBody component.
 */
export interface DatePickerTableBodyPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerTableBodyPassThroughType<React.HTMLAttributes<HTMLTableRowElement>>;
}

/**
 * Defines valid properties in DatePickerTableBody component.
 */
export interface DatePickerTableBodyProps extends BaseComponentProps<DatePickerTableBodyInstance, unknown, DatePickerTableBodyPassThrough> {
    view?: 'date' | 'month' | 'year' | undefined;
}

/**
 * Defines valid state in DatePickerTableBody component.
 */
export interface DatePickerTableBodyState {}

/**
 * Defines the methods and properties exposed by DatePickerTableBody component.
 */
export interface DatePickerTableBodyExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerTableBody component.
 */
export type DatePickerTableBodyInstance = ComponentInstance<DatePickerTableBodyProps, DatePickerTableBodyState, DatePickerTableBodyExposes>;
