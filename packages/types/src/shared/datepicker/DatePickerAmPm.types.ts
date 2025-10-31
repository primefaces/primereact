/**
 *
 * DatePickerAmPm is a component that displays a ampm.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerampm
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerAmPm component.
 */
export type DatePickerAmPmPassThroughType<E> = PassThroughType<DatePickerAmPmInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerAmPm component.
 */
export interface DatePickerAmPmPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerAmPmPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in DatePickerAmPm component.
 */
export interface DatePickerAmPmProps extends BaseComponentProps<DatePickerAmPmInstance, unknown, DatePickerAmPmPassThrough> {}

/**
 * Defines valid state in DatePickerAmPm component.
 */
export interface DatePickerAmPmState {}

/**
 * Defines the methods and properties exposed by DatePickerAmPm component.
 */
export interface DatePickerAmPmExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerAmPm component.
 */
export type DatePickerAmPmInstance = ComponentInstance<DatePickerAmPmProps, DatePickerAmPmState, DatePickerAmPmExposes>;
