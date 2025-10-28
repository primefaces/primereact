/**
 *
 * DatePickerTableHeadWeekCell is a component that displays a cell.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickertableheadweekcell
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerTableHeadWeekCell component.
 */
export type DatePickerTableHeadWeekCellPassThroughType<E> = PassThroughType<DatePickerTableHeadWeekCellInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerTableHeadWeekCell component.
 */
export interface DatePickerTableHeadWeekCellPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerTableHeadWeekCellPassThroughType<React.HTMLAttributes<HTMLTableCellElement>>;
    /**
     * Used to pass attributes to the week header label's DOM element.
     */
    weekHeaderLabel?: DatePickerTableHeadWeekCellPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in DatePickerTableHeadWeekCell component.
 */
export interface DatePickerTableHeadWeekCellProps extends BaseComponentProps<DatePickerTableHeadWeekCellInstance, unknown, DatePickerTableHeadWeekCellPassThrough> {}

/**
 * Defines valid state in DatePickerTableHeadWeekCell component.
 */
export interface DatePickerTableHeadWeekCellState {}

/**
 * Defines the methods and properties exposed by DatePickerTableHeadWeekCell component.
 */
export interface DatePickerTableHeadWeekCellExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerTableHeadWeekCell component.
 */
export type DatePickerTableHeadWeekCellInstance = ComponentInstance<DatePickerTableHeadWeekCellProps, DatePickerTableHeadWeekCellState, DatePickerTableHeadWeekCellExposes>;
