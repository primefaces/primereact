/**
 *
 * DatePicker is a form component to work with dates.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepickerroot
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useDatePickerExposes, useDatePickerProps, useDatePickerState, useDatePickerValueChangeEvent } from './useDatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePicker component.
 */
export type DatePickerRootPassThroughType<E> = PassThroughType<DatePickerRootInstance, E>;

/**
 * Defines passthrough(pt) options of DatePicker component.
 */
export interface DatePickerRootPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    pcInputText?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLInputElement>>;
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    portal?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the container's DOM element.
     */
    container?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the calendar's DOM element.
     */
    calendar?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the prev's DOM element.
     */
    prev?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the prevIcon's DOM element.
     */
    prevIcon?: DatePickerRootPassThroughType<React.HTMLAttributes<SVGElement>>;
    /**
     * Used to pass attributes to the title's DOM element.
     */
    title?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the selectMonth's DOM element.
     */
    selectMonth?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the selectYear's DOM element.
     */
    selectYear?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the decade's DOM element.
     */
    decade?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the next's DOM element.
     */
    next?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the nextIcon's DOM element.
     */
    nextIcon?: DatePickerRootPassThroughType<React.HTMLAttributes<SVGElement>>;
    /**
     * Used to pass attributes to the dayView's DOM element.
     */
    dayView?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLTableElement>>;
    /**
     * Used to pass attributes to the monthView's DOM element.
     */
    monthView?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLTableElement>>;
    /**
     * Used to pass attributes to the yearView's DOM element.
     */
    yearView?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLTableElement>>;
    /**
     * Used to pass attributes to the tableHeader's DOM element.
     */
    tableHeader?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLTableSectionElement>>;
    /**
     * Used to pass attributes to the tableHeaderRow's DOM element.
     */
    tableHeaderRow?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLTableRowElement>>;
    /**
     * Used to pass attributes to the weekDayCell's DOM element.
     */
    weekDayCell?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLTableCellElement>>;
    /**
     * Used to pass attributes to the weekDay's DOM element.
     */
    weekDay?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the weekHeader's DOM element.
     */
    weekHeader?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLTableSectionElement>>;
    /**
     * Used to pass attributes to the weekHeaderLabel's DOM element.
     */
    weekHeaderLabel?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the tableBody's DOM element.
     */
    tableBody?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLTableSectionElement>>;
    /**
     * Used to pass attributes to the tableBodyRow's DOM element.
     */
    tableBodyRow?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLTableRowElement>>;
    /**
     * Used to pass attributes to the dayCell's DOM element.
     */
    dayCell?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLTableCellElement>>;
    /**
     * Used to pass attributes to the monthCell's DOM element.
     */
    monthCell?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLTableCellElement>>;
    /**
     * Used to pass attributes to the yearCell's DOM element.
     */
    yearCell?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLTableCellElement>>;
    /**
     * Used to pass attributes to the weekNumber's DOM element.
     */
    weekNumber?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLTableCellElement>>;
    /**
     * Used to pass attributes to the weekLabelContainer's DOM element.
     */
    weekLabelContainer?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the buttonbar's DOM element.
     */
    buttonbar?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the today's DOM element.
     */
    today?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the clear's DOM element.
     */
    clear?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the timePicker's DOM element.
     */
    timePicker?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the hourPicker's DOM element.
     */
    hourPicker?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the minutePicker's DOM element.
     */
    minutePicker?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the secondPicker's DOM element.
     */
    secondPicker?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the ampmPicker's DOM element.
     */
    ampmPicker?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the increment's DOM element.
     */
    increment?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the incrementIcon's DOM element.
     */
    incrementIcon?: DatePickerRootPassThroughType<React.HTMLAttributes<SVGElement>>;
    /**
     * Used to pass attributes to the decrement's DOM element.
     */
    decrement?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the decrementIcon's DOM element.
     */
    decrementIcon?: DatePickerRootPassThroughType<React.HTMLAttributes<SVGElement>>;
    /**
     * Used to pass attributes to the hour's DOM element.
     */
    hour?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the minute's DOM element.
     */
    minute?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the second's DOM element.
     */
    second?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the ampm's DOM element.
     */
    ampm?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the separatorContainer's DOM element.
     */
    separatorContainer?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the clearIcon's DOM element.
     */
    clearIcon?: DatePickerRootPassThroughType<React.HTMLAttributes<SVGElement>>;
    /**
     * Used to pass attributes to the dropdown's DOM element.
     */
    dropdown?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the dropdownIcon's DOM element.
     */
    dropdownIcon?: DatePickerRootPassThroughType<React.HTMLAttributes<SVGElement>>;
    /**
     * Used to pass attributes to the inputIconContainer's DOM element.
     */
    inputIconContainer?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: DatePickerRootPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the datepicker's value changes.
 * @extends useDatePickerValueChangeEvent
 */
export interface DatePickerRootValueChangeEvent extends useDatePickerValueChangeEvent {}

/**
 * Defines valid properties in DatePicker component.
 */
export interface DatePickerRootProps extends BaseComponentProps<DatePickerRootInstance, Omit<useDatePickerProps, 'onValueChange'>, DatePickerRootPassThrough> {
    /**
     * Callback to invoke when the value changes.
     * @param event The event that triggered the change.
     * @param event.value The value of the datepicker.
     * @returns void
     */
    onValueChange?: (event: DatePickerRootValueChangeEvent) => void;
}

/**
 * Defines valid state in DatePicker component.
 * @extends useDatePickerState
 */
export interface DatePickerRootState extends useDatePickerState {}

/**
 * Defines the methods and properties exposed by DatePicker component.
 * @extends useDatePickerExposes
 */
export interface DatePickerRootExposes extends useDatePickerExposes {}

/**
 * Instance of DatePicker component.
 */
export type DatePickerRootInstance = ComponentInstance<DatePickerRootProps, DatePickerRootState, DatePickerRootExposes>;
