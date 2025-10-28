/**
 *
 * DatePickerPrev is a component that displays a prev button.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerprev
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerPrev component.
 */
export type DatePickerPrevPassThroughType<E> = PassThroughType<DatePickerPrevInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerPrev component.
 */
export interface DatePickerPrevPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerPrevPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the prev icon's DOM element.
     */
    prevIcon?: DatePickerPrevPassThroughType<React.HTMLAttributes<SVGElement>>;
}

/**
 * Defines valid properties in DatePickerPrev component.
 */
export interface DatePickerPrevProps extends BaseComponentProps<DatePickerPrevInstance, unknown, DatePickerPrevPassThrough> {}

/**
 * Defines valid state in DatePickerPrev component.
 */
export interface DatePickerPrevState {}

/**
 * Defines the methods and properties exposed by DatePickerPrev component.
 */
export interface DatePickerPrevExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerPrev component.
 */
export type DatePickerPrevInstance = ComponentInstance<DatePickerPrevProps, DatePickerPrevState, DatePickerPrevExposes>;
