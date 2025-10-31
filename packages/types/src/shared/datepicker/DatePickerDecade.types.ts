/**
 *
 * DatePickerDecade is a component that displays a decade.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerdecade
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerDecade component.
 */
export type DatePickerDecadePassThroughType<E> = PassThroughType<DatePickerDecadeInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerDecade component.
 */
export interface DatePickerDecadePassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerDecadePassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in DatePickerDecade component.
 */
export interface DatePickerDecadeProps extends BaseComponentProps<DatePickerDecadeInstance, unknown, DatePickerDecadePassThrough> {}

/**
 * Defines valid state in DatePickerDecade component.
 */
export interface DatePickerDecadeState {}

/**
 * Defines the methods and properties exposed by DatePickerDecade component.
 */
export interface DatePickerDecadeExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerDecade component.
 */
export type DatePickerDecadeInstance = ComponentInstance<DatePickerDecadeProps, DatePickerDecadeState, DatePickerDecadeExposes>;
