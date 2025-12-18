/**
 *
 * DatePicker is a form component to work with dates.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module datepicker
 * @group components
 *
 */
import type { ComponentInstance } from '@primereact/types/core';
import type { BaseComponentProps, PassThroughType } from '..';
import type { useDatePickerExposes, useDatePickerProps, useDatePickerState, useDatePickerValueChangeEvent } from './useDatePicker.types';

/**
 * Defines passthrough(pt) options type in DatePicker component.
 */
export type DatePickerPassThroughType<E> = PassThroughType<DatePickerInstance, E>;

/**
 * Defines passthrough(pt) options of DatePicker component.
 */
export interface DatePickerPassThrough {
    /**
     * Used to pass attributes to the root's DOM element.
     */
    root?: DatePickerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the input's DOM element.
     */
    pcInputText?: DatePickerPassThroughType<React.HTMLAttributes<HTMLInputElement>>;
    /**
     * Used to pass attributes to the portal's DOM element.
     */
    portal?: DatePickerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the panel's DOM element.
     */
    panel?: DatePickerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the container's DOM element.
     */
    container?: DatePickerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the calendar's DOM element.
     */
    calendar?: DatePickerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the header's DOM element.
     */
    header?: DatePickerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the prev's DOM element.
     */
    prev?: DatePickerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the prevIcon's DOM element.
     */
    prevIcon?: DatePickerPassThroughType<React.HTMLAttributes<SVGElement>>;
    /**
     * Used to pass attributes to the title's DOM element.
     */
    title?: DatePickerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the selectMonth's DOM element.
     */
    selectMonth?: DatePickerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the selectYear's DOM element.
     */
    selectYear?: DatePickerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the decade's DOM element.
     */
    decade?: DatePickerPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the next's DOM element.
     */
    next?: DatePickerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the nextIcon's DOM element.
     */
    nextIcon?: DatePickerPassThroughType<React.HTMLAttributes<SVGElement>>;
    /**
     * Used to pass attributes to the dayView's DOM element.
     */
    dayView?: DatePickerPassThroughType<React.HTMLAttributes<HTMLTableElement>>;
    /**
     * Used to pass attributes to the monthView's DOM element.
     */
    monthView?: DatePickerPassThroughType<React.HTMLAttributes<HTMLTableElement>>;
    /**
     * Used to pass attributes to the yearView's DOM element.
     */
    yearView?: DatePickerPassThroughType<React.HTMLAttributes<HTMLTableElement>>;
    /**
     * Used to pass attributes to the tableHeader's DOM element.
     */
    tableHeader?: DatePickerPassThroughType<React.HTMLAttributes<HTMLTableSectionElement>>;
    /**
     * Used to pass attributes to the tableHeaderRow's DOM element.
     */
    tableHeaderRow?: DatePickerPassThroughType<React.HTMLAttributes<HTMLTableRowElement>>;
    /**
     * Used to pass attributes to the weekDayCell's DOM element.
     */
    weekDayCell?: DatePickerPassThroughType<React.HTMLAttributes<HTMLTableCellElement>>;
    /**
     * Used to pass attributes to the weekDay's DOM element.
     */
    weekDay?: DatePickerPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the weekHeader's DOM element.
     */
    weekHeader?: DatePickerPassThroughType<React.HTMLAttributes<HTMLTableSectionElement>>;
    /**
     * Used to pass attributes to the weekHeaderLabel's DOM element.
     */
    weekHeaderLabel?: DatePickerPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the tableBody's DOM element.
     */
    tableBody?: DatePickerPassThroughType<React.HTMLAttributes<HTMLTableSectionElement>>;
    /**
     * Used to pass attributes to the tableBodyRow's DOM element.
     */
    tableBodyRow?: DatePickerPassThroughType<React.HTMLAttributes<HTMLTableRowElement>>;
    /**
     * Used to pass attributes to the dayCell's DOM element.
     */
    dayCell?: DatePickerPassThroughType<React.HTMLAttributes<HTMLTableCellElement>>;
    /**
     * Used to pass attributes to the monthCell's DOM element.
     */
    monthCell?: DatePickerPassThroughType<React.HTMLAttributes<HTMLTableCellElement>>;
    /**
     * Used to pass attributes to the yearCell's DOM element.
     */
    yearCell?: DatePickerPassThroughType<React.HTMLAttributes<HTMLTableCellElement>>;
    /**
     * Used to pass attributes to the weekNumber's DOM element.
     */
    weekNumber?: DatePickerPassThroughType<React.HTMLAttributes<HTMLTableCellElement>>;
    /**
     * Used to pass attributes to the weekLabelContainer's DOM element.
     */
    weekLabelContainer?: DatePickerPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the buttonbar's DOM element.
     */
    buttonbar?: DatePickerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the today's DOM element.
     */
    today?: DatePickerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the clear's DOM element.
     */
    clear?: DatePickerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the timePicker's DOM element.
     */
    timePicker?: DatePickerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the hourPicker's DOM element.
     */
    hourPicker?: DatePickerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the minutePicker's DOM element.
     */
    minutePicker?: DatePickerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the secondPicker's DOM element.
     */
    secondPicker?: DatePickerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the ampmPicker's DOM element.
     */
    ampmPicker?: DatePickerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the increment's DOM element.
     */
    increment?: DatePickerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the incrementIcon's DOM element.
     */
    incrementIcon?: DatePickerPassThroughType<React.HTMLAttributes<SVGElement>>;
    /**
     * Used to pass attributes to the decrement's DOM element.
     */
    decrement?: DatePickerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the decrementIcon's DOM element.
     */
    decrementIcon?: DatePickerPassThroughType<React.HTMLAttributes<SVGElement>>;
    /**
     * Used to pass attributes to the hour's DOM element.
     */
    hour?: DatePickerPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the minute's DOM element.
     */
    minute?: DatePickerPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the second's DOM element.
     */
    second?: DatePickerPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the ampm's DOM element.
     */
    ampm?: DatePickerPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the separatorContainer's DOM element.
     */
    separatorContainer?: DatePickerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to pass attributes to the separator's DOM element.
     */
    separator?: DatePickerPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the clearIcon's DOM element.
     */
    clearIcon?: DatePickerPassThroughType<React.HTMLAttributes<SVGElement>>;
    /**
     * Used to pass attributes to the dropdown's DOM element.
     */
    dropdown?: DatePickerPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Used to pass attributes to the dropdownIcon's DOM element.
     */
    dropdownIcon?: DatePickerPassThroughType<React.HTMLAttributes<SVGElement>>;
    /**
     * Used to pass attributes to the inputIconContainer's DOM element.
     */
    inputIconContainer?: DatePickerPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Used to pass attributes to the footer's DOM element.
     */
    footer?: DatePickerPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
}

/**
 * Event fired when the datepicker's value changes.
 * @extends useDatePickerValueChangeEvent
 */
export interface DatePickerValueChangeEvent extends useDatePickerValueChangeEvent {}

/**
 * Defines valid properties in DatePicker component.
 */
export interface DatePickerProps extends BaseComponentProps<DatePickerInstance, Omit<useDatePickerProps, 'onValueChange'>, DatePickerPassThrough> {
    /**
     * Callback to invoke when the value changes.
     * @param event The event that triggered the change.
     * @param event.value The value of the datepicker.
     * @returns void
     */
    onValueChange?: (event: DatePickerValueChangeEvent) => void;
}

/**
 * Defines valid state in DatePicker component.
 * @extends useDatePickerState
 */
export interface DatePickerState extends useDatePickerState {}

/**
 * Defines the methods and properties exposed by DatePicker component.
 * @extends useDatePickerExposes
 */
export interface DatePickerExposes extends useDatePickerExposes {}

/**
 * Defines the CSS class names used in the DatePicker component.
 */
export const DatePickerClassNames = {
    /**
     * Class name of the root element
     */
    root: 'p-datepicker',
    /**
     * Class name of the input element
     */
    input: 'p-datepicker-input',
    /**
     * Class name of the clear icon element
     */
    clearIcon: 'p-datepicker-clear-icon',
    /**
     * Class name of the dropdown element
     */
    dropdown: 'p-datepicker-dropdown',
    /**
     * Class name of the input icon container element
     */
    inputIconContainer: 'p-datepicker-input-icon-container',
    /**
     * Class name of the input icon element
     */
    inputIcon: 'p-datepicker-input-icon',
    /**
     * Class name of the panel element
     */
    panel: 'p-datepicker-panel p-component',
    /**
     * Class name of the container element
     */
    container: 'p-datepicker-calendar-container',
    /**
     * Class name of the calendar element
     */
    calendar: 'p-datepicker-calendar',
    /**
     * Class name of the header element
     */
    header: 'p-datepicker-header',
    /**
     * Class name of the prev element
     */
    prev: 'p-datepicker-prev-button',
    /**
     * Class name of the title element
     */
    title: 'p-datepicker-title',
    /**
     * Class name of the select month element
     */
    selectMonth: 'p-datepicker-select-month',
    /**
     * Class name of the select year element
     */
    selectYear: 'p-datepicker-select-year',
    /**
     * Class name of the decade element
     */
    decade: 'p-datepicker-decade',
    /**
     * Class name of the next element
     */
    next: 'p-datepicker-next-button',
    /**
     * Class name of the day view element
     */
    dayView: 'p-datepicker-day-view',
    /**
     * Class name of the week header element
     */
    weekHeader: 'p-datepicker-weekheader p-disabled',
    /**
     * Class name of the week number element
     */
    weekNumber: 'p-datepicker-weeknumber',
    /**
     * Class name of the week label container element
     */
    weekLabelContainer: 'p-datepicker-weeklabel-container p-disabled',
    /**
     * Class name of the week day cell element
     */
    weekDayCell: 'p-datepicker-weekday-cell',
    /**
     * Class name of the week day element
     */
    weekDay: 'p-datepicker-weekday',
    /**
     * Class name of the day cell element
     */
    dayCell: 'p-datepicker-day-cell',
    /**
     * Class name of the day element
     */
    day: 'p-datepicker-day',
    /**
     * Class name of the month view element
     */
    monthView: 'p-datepicker-month-view',
    /**
     * Class name of the month cell element
     */
    monthCell: 'p-datepicker-month-cell',
    /**
     * Class name of the month element
     */
    month: 'p-datepicker-month',
    /**
     * Class name of the year view element
     */
    yearView: 'p-datepicker-year-view',
    /**
     * Class name of the year cell element
     */
    yearCell: 'p-datepicker-year-cell',
    /**
     * Class name of the year element
     */
    year: 'p-datepicker-year',
    /**
     * Class name of the time picker element
     */
    timePicker: 'p-datepicker-time-picker',
    /**
     * Class name of the hour picker element
     */
    hourPicker: 'p-datepicker-hour-picker',
    /**
     * Class name of the increment button element
     */
    pcIncrementButton: 'p-datepicker-increment-button',
    /**
     * Class name of the decrement button element
     */
    pcDecrementButton: 'p-datepicker-decrement-button',
    /**
     * Class name of the separator element
     */
    separator: 'p-datepicker-separator',
    /**
     * Class name of the minute picker element
     */
    minutePicker: 'p-datepicker-minute-picker',
    /**
     * Class name of the second picker element
     */
    secondPicker: 'p-datepicker-second-picker',
    /**
     * Class name of the ampm picker element
     */
    ampmPicker: 'p-datepicker-ampm-picker',
    /**
     * Class name of the buttonbar element
     */
    buttonbar: 'p-datepicker-buttonbar',
    /**
     * Class name of the today element
     */
    today: 'p-datepicker-today-button',
    /**
     * Class name of the clear element
     */
    clear: 'p-datepicker-clear-button'
} as const;

/**
 * Type representing the CSS class names used in the DatePicker component.
 */
export type DatePickerClassNamesType = (typeof DatePickerClassNames)[keyof typeof DatePickerClassNames];

/**
 * Instance of DatePicker component.
 */
export type DatePickerInstance = ComponentInstance<DatePickerProps, DatePickerState, DatePickerExposes>;
