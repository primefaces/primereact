/**
 *
 * DatePickerInputIconContainer is a component that displays a input icon container.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerinputiconcontainer
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerInputIconContainer component.
 */
export type DatePickerInputIconContainerPassThroughType<E> = PassThroughType<DatePickerInputIconContainerInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerInputIconContainer component.
 */
export interface DatePickerInputIconContainerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerInputIconContainerPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
}

/**
 * Defines valid properties in DatePickerInputIconContainer component.
 */
export interface DatePickerInputIconContainerProps extends BaseComponentProps<DatePickerInputIconContainerInstance, unknown, DatePickerInputIconContainerPassThrough> {}

/**
 * Defines valid state in DatePickerInputIconContainer component.
 */
export interface DatePickerInputIconContainerState {}

/**
 * Defines the methods and properties exposed by DatePickerInputIconContainer component.
 */
export interface DatePickerInputIconContainerExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerInputIconContainer component.
 */
export type DatePickerInputIconContainerInstance = ComponentInstance<DatePickerInputIconContainerProps, DatePickerInputIconContainerState, DatePickerInputIconContainerExposes>;
