/**
 *
 * DatePickerTableBodyRow is a component that displays a tr.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickertablebodyrow
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerTableBodyRow component.
 */
export type DatePickerTableBodyRowPassThroughType<E> = PassThroughType<DatePickerTableBodyRowInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerTableBodyRow component.
 */
export interface DatePickerTableBodyRowPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerTableBodyRowPassThroughType<React.HTMLAttributes<HTMLTableRowElement>>;
}

/**
 * Defines valid properties in DatePickerTableBodyRow component.
 */
export interface DatePickerTableBodyRowProps extends BaseComponentProps<DatePickerTableBodyRowInstance, unknown, DatePickerTableBodyRowPassThrough> {}

/**
 * Defines valid state in DatePickerTableBodyRow component.
 */
export interface DatePickerTableBodyRowState {}

/**
 * Defines the methods and properties exposed by DatePickerTableBodyRow component.
 */
export interface DatePickerTableBodyRowExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerTableBodyRow component.
 */
export type DatePickerTableBodyRowInstance = ComponentInstance<DatePickerTableBodyRowProps, DatePickerTableBodyRowState, DatePickerTableBodyRowExposes>;
