/**
 *
 * DatePickerTableBodyWeekCell is a component that displays a cell.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickertablebodyweekcell
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerTableBodyWeekCell component.
 */
export type DatePickerTableBodyWeekCellPassThroughType<E> = PassThroughType<DatePickerTableBodyWeekCellInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerTableBodyWeekCell component.
 */
export interface DatePickerTableBodyWeekCellPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerTableBodyWeekCellPassThroughType<React.HTMLAttributes<HTMLTableCellElement>>;
}

/**
 * Defines valid properties in DatePickerTableBodyWeekCell component.
 */
export interface DatePickerTableBodyWeekCellProps extends BaseComponentProps<DatePickerTableBodyWeekCellInstance, unknown, DatePickerTableBodyWeekCellPassThrough> {}

/**
 * Defines valid state in DatePickerTableBodyWeekCell component.
 */
export interface DatePickerTableBodyWeekCellState {}

/**
 * Defines the methods and properties exposed by DatePickerTableBodyWeekCell component.
 */
export interface DatePickerTableBodyWeekCellExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerTableBodyWeekCell component.
 */
export type DatePickerTableBodyWeekCellInstance = ComponentInstance<DatePickerTableBodyWeekCellProps, DatePickerTableBodyWeekCellState, DatePickerTableBodyWeekCellExposes>;
