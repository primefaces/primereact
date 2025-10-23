/**
 *
 * DatePickerTableHeadRow is a component that displays a head row.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickertableheadrow
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerTableHeadRow component.
 */
export type DatePickerTableHeadRowPassThroughType<E> = PassThroughType<DatePickerTableHeadRowInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerTableHeadRow component.
 */
export interface DatePickerTableHeadRowPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerTableHeadRowPassThroughType<React.HTMLAttributes<HTMLTableRowElement>>;
}

/**
 * Defines valid properties in DatePickerTableHeadRow component.
 */
export interface DatePickerTableHeadRowProps extends BaseComponentProps<DatePickerTableHeadRowInstance, unknown, DatePickerTableHeadRowPassThrough> {}

/**
 * Defines valid state in DatePickerTableHeadRow component.
 */
export interface DatePickerTableHeadRowState {}

/**
 * Defines the methods and properties exposed by DatePickerTableHeadRow component.
 */
export interface DatePickerTableHeadRowExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerTableHeadRow component.
 */
export type DatePickerTableHeadRowInstance = ComponentInstance<DatePickerTableHeadRowProps, DatePickerTableHeadRowState, DatePickerTableHeadRowExposes>;
