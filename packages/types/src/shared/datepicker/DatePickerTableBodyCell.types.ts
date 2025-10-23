/**
 *
 * DatePickerTableBodyCell is a component that displays a cell.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickertablebodycell
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';
import type { DatePickerTableBodyInstance } from './DatePickerTableBody.types';

/**
 * Defines passthrough(pt) options type in DatePickerTableBodyCell component.
 */
export type DatePickerTableBodyCellPassThroughType<E> = PassThroughType<DatePickerTableBodyCellInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerTableBodyCell component.
 */
export interface DatePickerTableBodyCellPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerTableBodyCellPassThroughType<React.HTMLAttributes<HTMLTableCellElement>>;
}

/**
 * Defines valid properties in DatePickerTableBodyCell component.
 */
export interface DatePickerTableBodyCellProps extends BaseComponentProps<DatePickerTableBodyCellInstance, unknown, DatePickerTableBodyCellPassThrough> {}

/**
 * Defines valid state in DatePickerTableBodyCell component.
 */
export interface DatePickerTableBodyCellState {}

/**
 * Defines the methods and properties exposed by DatePickerTableBodyCell component.
 */
export interface DatePickerTableBodyCellExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
    /**
     * Instance of the DatePickerTableBody component.
     */
    datepickertablebody: DatePickerTableBodyInstance | undefined | null;
}

/**
 * Instance of DatePickerTableBodyCell component.
 */
export type DatePickerTableBodyCellInstance = ComponentInstance<DatePickerTableBodyCellProps, DatePickerTableBodyCellState, DatePickerTableBodyCellExposes>;
