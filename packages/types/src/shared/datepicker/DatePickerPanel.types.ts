/**
 *
 * DatePickerPanel is a component that displays a panel.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerpanel
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { DatePickerInstance } from './DatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePickerPanel component.
 */
export type DatePickerPanelPassThroughType<E> = PassThroughType<DatePickerPanelInstance, E>;

/**
 * Defines passthrough(pt) options of DatePickerPanel component.
 */
export interface DatePickerPanelPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerPanelPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Defines valid properties in DatePickerPanel component.
 */
export interface DatePickerPanelProps extends BaseComponentProps<DatePickerPanelInstance, unknown, DatePickerPanelPassThrough> {}

/**
 * Defines valid state in DatePickerPanel component.
 */
export interface DatePickerPanelState {}

/**
 * Defines the methods and properties exposed by DatePickerPanel component.
 */
export interface DatePickerPanelExposes {
    /**
     * Instance of the DatePicker component.
     */
    datepicker: DatePickerInstance | undefined | null;
}

/**
 * Instance of DatePickerPanel component.
 */
export type DatePickerPanelInstance = ComponentInstance<DatePickerPanelProps, DatePickerPanelState, DatePickerPanelExposes>;
