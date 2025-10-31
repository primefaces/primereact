/**
 *
 * DatePickerSeparatorContainer is a component that displays a separatorcontainer.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerseparatorcontainer
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerSeparatorContainer component.
 */
export type DatePickerSeparatorContainerPassThroughType<E> = PassThroughType<DatePickerSeparatorContainerInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerSeparatorContainer component.
 */
export interface DatePickerSeparatorContainerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerSeparatorContainerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DatePickerSeparatorContainer component.
 */
export interface DatePickerSeparatorContainerProps extends BaseComponentProps<DatePickerSeparatorContainerInstance, unknown, DatePickerSeparatorContainerPassThrough> {}

/**
 * Defines valid state in DatePickerSeparatorContainer component.
 */
export interface DatePickerSeparatorContainerState {}

/**
 * Defines the methods and properties exposed by DatePickerSeparatorContainer component.
 */
export interface DatePickerSeparatorContainerExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerSeparatorContainer component.
 */
export type DatePickerSeparatorContainerInstance = ComponentInstance<DatePickerSeparatorContainerProps, DatePickerSeparatorContainerState, DatePickerSeparatorContainerExposes>;
