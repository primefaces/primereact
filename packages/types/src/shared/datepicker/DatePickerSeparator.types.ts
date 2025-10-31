/**
 *
 * DatePickerSeparator is a component that displays a separator.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerseparator
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerSeparator component.
 */
export type DatePickerSeparatorPassThroughType<E> = PassThroughType<DatePickerSeparatorInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerSeparator component.
 */
export interface DatePickerSeparatorPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerSeparatorPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in DatePickerSeparator component.
 */
export interface DatePickerSeparatorProps extends BaseComponentProps<DatePickerSeparatorInstance, unknown, DatePickerSeparatorPassThrough> {}

/**
 * Defines valid state in DatePickerSeparator component.
 */
export interface DatePickerSeparatorState {}

/**
 * Defines the methods and properties exposed by DatePickerSeparator component.
 */
export interface DatePickerSeparatorExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerSeparator component.
 */
export type DatePickerSeparatorInstance = ComponentInstance<DatePickerSeparatorProps, DatePickerSeparatorState, DatePickerSeparatorExposes>;
