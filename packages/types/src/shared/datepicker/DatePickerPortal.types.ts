/**
 *
 * DatePickerPortal is a component that displays a portal.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerportal
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerPortal component.
 */
export type DatePickerPortalPassThroughType<E> = PassThroughType<DatePickerPortalInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerPortal component.
 */
export interface DatePickerPortalPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerPortalPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DatePickerPortal component.
 */
export interface DatePickerPortalProps extends BaseComponentProps<DatePickerPortalInstance, unknown, DatePickerPortalPassThrough> {}

/**
 * Defines valid state in DatePickerPortal component.
 */
export interface DatePickerPortalState {}

/**
 * Defines the methods and properties exposed by DatePickerPortal component.
 */
export interface DatePickerPortalExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerPortal component.
 */
export type DatePickerPortalInstance = ComponentInstance<DatePickerPortalProps, DatePickerPortalState, DatePickerPortalExposes>;
