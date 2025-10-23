/**
 *
 * DatePickerTableHeadCell is a component that displays a cell.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickertableheadcell
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerTableHeadCell component.
 */
export type DatePickerTableHeadCellPassThroughType<E> = PassThroughType<DatePickerTableHeadCellInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerTableHeadCell component.
 */
export interface DatePickerTableHeadCellPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerTableHeadCellPassThroughType<React.HTMLAttributes<HTMLTableCellElement>>;
}

/**
 * Defines valid properties in DatePickerTableHeadCell component.
 */
export interface DatePickerTableHeadCellProps extends BaseComponentProps<DatePickerTableHeadCellInstance, unknown, DatePickerTableHeadCellPassThrough> {}

/**
 * Defines valid state in DatePickerTableHeadCell component.
 */
export interface DatePickerTableHeadCellState {}

/**
 * Defines the methods and properties exposed by DatePickerTableHeadCell component.
 */
export interface DatePickerTableHeadCellExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerTableHeadCell component.
 */
export type DatePickerTableHeadCellInstance = ComponentInstance<DatePickerTableHeadCellProps, DatePickerTableHeadCellState, DatePickerTableHeadCellExposes>;
