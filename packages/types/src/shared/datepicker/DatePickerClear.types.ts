/**
 *
 * DatePickerClear is a component that displays a clear button.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerclear
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerClear component.
 */
export type DatePickerClearPassThroughType<E> = PassThroughType<DatePickerClearInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerClear component.
 */
export interface DatePickerClearPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerClearPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in DatePickerClear component.
 */
export interface DatePickerClearProps extends BaseComponentProps<DatePickerClearInstance, unknown, DatePickerClearPassThrough> {}

/**
 * Defines valid state in DatePickerClear component.
 */
export interface DatePickerClearState {}

/**
 * Defines the methods and properties exposed by DatePickerClear component.
 */
export interface DatePickerClearExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerClear component.
 */
export type DatePickerClearInstance = ComponentInstance<DatePickerClearProps, DatePickerClearState, DatePickerClearExposes>;
