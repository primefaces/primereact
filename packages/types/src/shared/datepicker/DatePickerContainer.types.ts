/**
 *
 * DatePickerContainer is a component that displays a container.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickercontainer
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerContainer component.
 */
export type DatePickerContainerPassThroughType<E> = PassThroughType<DatePickerContainerInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerContainer component.
 */
export interface DatePickerContainerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerContainerPassThroughType<React.HTMLAttributes<HTMLTableRowElement>>;
}

/**
 * Defines valid properties in DatePickerContainer component.
 */
export interface DatePickerContainerProps extends BaseComponentProps<DatePickerContainerInstance, unknown, DatePickerContainerPassThrough> {}

/**
 * Defines valid state in DatePickerContainer component.
 */
export interface DatePickerContainerState {}

/**
 * Defines the methods and properties exposed by DatePickerContainer component.
 */
export interface DatePickerContainerExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerContainer component.
 */
export type DatePickerContainerInstance = ComponentInstance<DatePickerContainerProps, DatePickerContainerState, DatePickerContainerExposes>;
