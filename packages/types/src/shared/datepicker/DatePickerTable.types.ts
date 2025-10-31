/**
 *
 * DatePickerTable is a component that displays a table.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickertable
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerTable component.
 */
export type DatePickerTablePassThroughType<E> = PassThroughType<DatePickerTableInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerTable component.
 */
export interface DatePickerTablePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerTablePassThroughType<React.HTMLAttributes<HTMLTableElement>>;
}

/**
 * Defines valid properties in DatePickerTable component.
 */
export interface DatePickerTableProps extends BaseComponentProps<DatePickerTableInstance, unknown, DatePickerTablePassThrough> {}

/**
 * Defines valid state in DatePickerTable component.
 */
export interface DatePickerTableState {}

/**
 * Defines the methods and properties exposed by DatePickerTable component.
 */
export interface DatePickerTableExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerTable component.
 */
export type DatePickerTableInstance = ComponentInstance<DatePickerTableProps, DatePickerTableState, DatePickerTableExposes>;
