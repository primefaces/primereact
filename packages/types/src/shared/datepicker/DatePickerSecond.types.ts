/**
 *
 * DatePickerSecond is a component that displays a second.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickersecond
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerSecond component.
 */
export type DatePickerSecondPassThroughType<E> = PassThroughType<DatePickerSecondInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerSecond component.
 */
export interface DatePickerSecondPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerSecondPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in DatePickerSecond component.
 */
export interface DatePickerSecondProps extends BaseComponentProps<DatePickerSecondInstance, unknown, DatePickerSecondPassThrough> {}

/**
 * Defines valid state in DatePickerSecond component.
 */
export interface DatePickerSecondState {}

/**
 * Defines the methods and properties exposed by DatePickerSecond component.
 */
export interface DatePickerSecondExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerSecond component.
 */
export type DatePickerSecondInstance = ComponentInstance<DatePickerSecondProps, DatePickerSecondState, DatePickerSecondExposes>;
