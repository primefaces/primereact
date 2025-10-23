/**
 *
 * DatePickerNext is a component that displays a next button.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickernext
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerNext component.
 */
export type DatePickerNextPassThroughType<E> = PassThroughType<DatePickerNextInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerNext component.
 */
export interface DatePickerNextPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerNextPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
}

/**
 * Defines valid properties in DatePickerNext component.
 */
export interface DatePickerNextProps extends BaseComponentProps<DatePickerNextInstance, unknown, DatePickerNextPassThrough> {}

/**
 * Defines valid state in DatePickerNext component.
 */
export interface DatePickerNextState {}

/**
 * Defines the methods and properties exposed by DatePickerNext component.
 */
export interface DatePickerNextExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerNext component.
 */
export type DatePickerNextInstance = ComponentInstance<DatePickerNextProps, DatePickerNextState, DatePickerNextExposes>;
