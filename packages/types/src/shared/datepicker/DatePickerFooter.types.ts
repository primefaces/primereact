/**
 *
 * DatePickerFooter is a component that displays a footer.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerfooter
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerFooter component.
 */
export type DatePickerFooterPassThroughType<E> = PassThroughType<DatePickerFooterInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerFooter component.
 */
export interface DatePickerFooterPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerFooterPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DatePickerFooter component.
 */
export interface DatePickerFooterProps extends BaseComponentProps<DatePickerFooterInstance, unknown, DatePickerFooterPassThrough> {}

/**
 * Defines valid state in DatePickerFooter component.
 */
export interface DatePickerFooterState {}

/**
 * Defines the methods and properties exposed by DatePickerFooter component.
 */
export interface DatePickerFooterExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerFooter component.
 */
export type DatePickerFooterInstance = ComponentInstance<DatePickerFooterProps, DatePickerFooterState, DatePickerFooterExposes>;
