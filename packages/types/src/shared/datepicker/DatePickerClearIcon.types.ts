/**
 *
 * DatePickerClearIcon component is a part of the DatePicker component.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerclearicon
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerClearIcon component.
 */
export type DatePickerClearIconPassThroughType<E> = PassThroughType<DatePickerClearIconInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerClearIcon component.
 */
export interface DatePickerClearIconPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerClearIconPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in DatePickerClearIcon component.
 */
export interface DatePickerClearIconProps extends BaseComponentProps<DatePickerClearIconInstance, unknown, DatePickerClearIconPassThrough> {}

/**
 * Defines valid state in DatePickerClearIcon component.
 */
export interface DatePickerClearIconState {}

/**
 * Defines the methods and properties exposed by DatePickerClearIcon component.
 */
export interface DatePickerClearIconExposes {
    /**
     * The DatePicker component instance.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerClearIcon component.
 */
export type DatePickerClearIconInstance = ComponentInstance<DatePickerClearIconProps, DatePickerClearIconState, DatePickerClearIconExposes>;
