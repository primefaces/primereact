/**
 *
 * DatePickerTitle is a component that displays a title.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickertitle
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerTitle component.
 */
export type DatePickerTitlePassThroughType<E> = PassThroughType<DatePickerTitleInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerTitle component.
 */
export interface DatePickerTitlePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerTitlePassThroughType<React.HTMLAttributes<HTMLTableRowElement>>;
}

/**
 * Defines valid properties in DatePickerTitle component.
 */
export interface DatePickerTitleProps extends BaseComponentProps<DatePickerTitleInstance, unknown, DatePickerTitlePassThrough> {}

/**
 * Defines valid state in DatePickerTitle component.
 */
export interface DatePickerTitleState {}

/**
 * Defines the methods and properties exposed by DatePickerTitle component.
 */
export interface DatePickerTitleExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerTitle component.
 */
export type DatePickerTitleInstance = ComponentInstance<DatePickerTitleProps, DatePickerTitleState, DatePickerTitleExposes>;
