/**
 *
 * The useDatePicker manages the state and functionality of a datepicker component.
 *
 * [Live Demo](https://www.primereact.org/datepicker/)
 *
 * @module usedatepicker
 * @group headless
 *
 */
import type { HeadlessInstance } from '@primereact/types/core';

/**
 * Defines current month options.
 */
export interface useDatePickerMonthOptions {
    /**
     * Month value.
     */
    value: string;
    /**
     * Selectable state of the month.
     */
    selectable: boolean;
}

/**
 * Defines current year options.
 */
export interface useDatePickerYearOptions {
    /**
     * Year value.
     */
    value: number;
    /**
     * Selectable state of the month.
     */
    selectable: boolean;
}

/**
 * Defines the metadata for a single date in the datepicker.
 */
export interface useDatePickerDateMeta {
    /**
     * The day of the month.
     */
    day: number;
    /**
     * The month (0-11).
     */
    month: number;
    /**
     * The year.
     */
    year: number;
    /**
     * Whether this date belongs to another month.
     */
    otherMonth?: boolean;
    /**
     * Whether this date is today.
     */
    today: boolean;
    /**
     * Whether this date is selectable.
     */
    selectable: boolean;
}

/**
 * Defines the structure for a month's data in the datepicker.
 */
export interface useDatePickerMonthData {
    /**
     * The month number (0-11).
     */
    month: number;
    /**
     * The year.
     */
    year: number;
    /**
     * Array of weeks, where each week contains an array of date metadata.
     */
    dates: useDatePickerDateMeta[][];
    /**
     * Array of week numbers for this month.
     */
    weekNumbers: number[];
}

/**
 * Defines valid properties in useDatePicker.
 */
export interface useDatePickerProps {
    /**
     * The default value for the input when not controlled by `modelValue`.
     * @default null
     */
    defaultValue?: Date | string | Date[] | string[] | (Date | null)[] | (string | null)[] | null | undefined;
    /**
     * Value of the component.
     * @default null
     */
    value?: Date | string | Date[] | string[] | (Date | null)[] | (string | null)[] | null | undefined;
    /**
     * The name attribute for the element, typically used in form submissions.
     */
    name?: string | undefined;
    /**
     * Defines the quantity of the selection.
     * @default single
     */
    selectionMode?: 'single' | 'multiple' | 'range' | undefined;
    /**
     * Format of the date. Defaults to PrimeVue Locale configuration.
     */
    dateFormat?: string | undefined;
    /**
     * Type of the value to write back to modelValue.
     * @default date
     */
    updateModelType?: 'date' | 'string' | undefined;
    /**
     * When enabled, displays the datepicker as inline instead of an overlay.
     * @default false
     */
    inline?: boolean | undefined;
    /**
     * Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.
     * @default true
     */
    showOtherMonths?: boolean | undefined;
    /**
     * Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.
     * @default false
     */
    selectOtherMonths?: boolean | undefined;
    /**
     * When enabled, displays a button with icon next to input.
     * @default false
     */
    showIcon?: boolean | undefined;
    /**
     * Icon position of the component. This only applies if the showIcon option is set to true.
     * @default 'button'
     */
    iconDisplay?: 'button' | 'input' | undefined;
    /**
     * Icon of the datepicker button.
     */
    icon?: string | undefined;
    /**
     * Icon to show in the previous button.
     */
    prevIcon?: string | undefined;
    /**
     * Icon to show in the next button.
     */
    nextIcon?: string | undefined;
    /**
     * Icon to show in each of the increment buttons.
     */
    incrementIcon?: string | undefined;
    /**
     * Icon to show in each of the decrement buttons.
     */
    decrementIcon?: string | undefined;
    /**
     * Number of months to display.
     * @default 1
     */
    numberOfMonths?: number | undefined;
    /**
     * The breakpoint to define the maximum width boundary for datepicker panel.
     * @default 769px
     */
    breakpoint?: string | undefined;
    /**
     * Type of view to display.
     * @default date
     */
    view?: 'date' | 'month' | 'year' | undefined;
    /**
     * The minimum selectable date.
     */
    minDate?: Date | undefined;
    /**
     * The maximum selectable date.
     */
    maxDate?: Date | undefined;
    /**
     * Array with dates to disable.
     */
    disabledDates?: Date[] | undefined;
    /**
     * Array with disabled weekday numbers.
     */
    disabledDays?: number[] | undefined;
    /**
     * Maximum number of selectable dates in multiple mode.
     */
    maxDateCount?: number | undefined;
    /**
     * When disabled, datepicker will not be visible with input focus.
     * @default true
     */
    showOnFocus?: boolean | undefined;
    /**
     * Whether to automatically manage layering.
     * @default true
     */
    autoZIndex?: boolean | undefined;
    /**
     * Base zIndex value to use in layering.
     * @default 0
     */
    baseZIndex?: number | undefined;
    /**
     * Whether to display today and clear buttons at the footer.
     * @default false
     */
    showButtonBar?: boolean | undefined;
    /**
     * The cutoff year for determining the century for a date.
     * @default +10
     */
    shortYearCutoff?: string | undefined;
    /**
     * Whether to display timepicker.
     * @default false
     */
    showTime?: boolean | undefined;
    /**
     * Whether to display timepicker only.
     * @default false
     */
    timeOnly?: boolean | undefined;
    /**
     * Specifies hour format.
     * @default 24
     */
    hourFormat?: '12' | '24' | undefined;
    /**
     * Hours to change per step.
     * @default 1
     */
    stepHour?: number | undefined;
    /**
     * Minutes to change per step.
     * @default 1
     */
    stepMinute?: number | undefined;
    /**
     * Seconds to change per step.
     * @default 1
     */
    stepSecond?: number | undefined;
    /**
     * Whether to show the seconds in time picker.
     * @default false
     */
    showSeconds?: boolean | undefined;
    /**
     * Whether to hide the overlay on date selection when showTime is enabled.
     * @default false
     */
    hideOnDateTimeSelect?: boolean | undefined;
    /**
     * Whether to hide the overlay on date selection is completed when selectionMode is range.
     * @default false
     */
    hideOnRangeSelection?: boolean | undefined;
    /**
     * Separator of time selector.
     * @default :
     */
    timeSeparator?: string | undefined;
    /**
     * When enabled, datepicker will show week numbers.
     * @default false
     */
    showWeek?: boolean | undefined;
    /**
     * Whether to allow entering the date manually via typing.
     * @default true
     */
    manualInput?: boolean | undefined;
    /**
     * When enabled, a clear icon is displayed to clear the value.
     * @default false
     */
    showClear?: boolean | undefined;
    /**
     * Defines the size of the component.
     */
    size?: 'small' | 'large' | undefined;
    /**
     * When present, it specifies that the component should have invalid state style.
     * @default false
     */
    invalid?: boolean | undefined;
    /**
     * When present, it specifies that the component should be disabled.
     * @default false
     */
    disabled?: boolean | undefined;
    /**
     * Specifies the input variant of the component.
     * @default null
     */
    variant?: 'outlined' | 'filled' | undefined | null;
    /**
     * When present, it specifies that an input field is read-only.
     * @default false
     */
    readonly?: boolean | undefined;
    /**
     * Placeholder text for the input.
     */
    placeholder?: string | undefined;
    /*
     * When present, it specifies that the component is a required field.
     */
    required?: boolean | undefined;
    /**
     * A valid query selector or an HTMLElement to specify where the overlay gets attached.
     * @default body
     */
    appendTo?: 'body' | 'self' | undefined | HTMLElement;
    /**
     * Spans 100% width of the container when enabled.
     * @default null
     */
    fluid?: boolean | undefined;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    ariaLabelledby?: string | undefined;
    /**
     * Establishes a string value that labels the component.
     */
    ariaLabel?: string | undefined;
    /**
     * Callback to invoke when the value changes.
     * @param {object} event - Custom value change event
     */
    onValueChange?: ({ value }: { value: Date | string | Date[] | string[] | (Date | null)[] | (string | null)[] | null | undefined }) => void;
}

/**
 * Defines valid state in useDatePicker.
 */
export interface useDatePickerState {
    /**
     * The current raw value of the datepicker (unformatted).
     */
    rawValue: Date | string | Date[] | string[] | (Date | null)[] | (string | null)[] | null | undefined;
    /**
     * Current view state information.
     */
    current: {
        /**
         * The current view mode of the datepicker.
         */
        view: 'date' | 'month' | 'year' | undefined;
    };
}

/**
 * Defines the methods and properties exposed by useDatePicker.
 */
export interface useDatePickerExposes {
    /**
     * State object containing the current raw value and view information.
     */
    state?: useDatePickerState;
    /**
     * Reference to the input element.
     */
    inputRef?: React.RefObject<{ elementRef: React.RefObject<HTMLInputElement> } | null>;
    /**
     * Reference to the overlay element.
     */
    overlayRef?: React.RefObject<HTMLDivElement | null>;
    /**
     * Formatted value string for the input field.
     */
    inputFieldValue?: string;
    /**
     * Label text for the week header.
     */
    weekHeaderLabel?: string | undefined;
    /**
     * Label text for today button.
     */
    todayLabel?: string | undefined;
    /**
     * Label text for clear button.
     */
    clearLabel?: string | undefined;
    /**
     * Array of localized day names for the week.
     */
    weekDays?: string[];
    /**
     * Array of month data objects containing dates and week numbers.
     */
    months?: useDatePickerMonthData[];
    /**
     * Returns a specific month by index.
     * @param index - The index of the month to retrieve.
     */
    getIndexedMonth?: (index?: number) => useDatePickerMonthData;
    /**
     * Returns the current year.
     */
    getYear?: () => number;
    /**
     * Returns the name of the current month.
     */
    getMonthName?: (index?: number) => string;
    /**
     * Handles click on previous button.
     * @param event - The mouse event.
     */
    onPrevButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Handles click on next button.
     * @param event - The mouse event.
     */
    onNextButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Array of month picker values.
     */
    monthPickerValues?: Array<{ value: string; selectable: boolean }>;
    /**
     * Array of year picker values.
     */
    yearPickerValues?: Array<{ value: number; selectable: boolean }>;
    /**
     * Switches the view to month view.
     * @param event - The mouse event.
     */
    switchToMonthView?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Switches the view to year view.
     * @param event - The mouse event.
     */
    switchToYearView?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Whether the switch view button is disabled.
     */
    switchViewButtonDisabled?: boolean;
    /**
     * Formatted current hour value for display.
     */
    formattedCurrentHour?: number | string;
    /**
     * Formatted current minute value for display.
     */
    formattedCurrentMinute?: number | string;
    /**
     * Formatted current second value for display.
     */
    formattedCurrentSecond?: number | string;
    /**
     * AM/PM label for 12-hour format.
     */
    ampmLabel?: string | undefined;
    /**
     * Returns whether the selection mode is range.
     */
    isRangeSelection?: () => boolean;
    /**
     * Checks if a date is selected.
     * @param dateMeta - The date metadata to check.
     */
    isSelected?: (dateMeta: useDatePickerDateMeta) => boolean;
    /**
     * Parses a text value into a Date or array of Dates.
     * @param text - The text value to parse.
     */
    parseValue?: (text: string) => Date | Date[] | (Date | null)[] | null | undefined;
    /**
     * Checks if two dates are equal.
     * @param value - The date value to compare.
     * @param dateMeta - The date metadata to compare against.
     */
    isDateEquals?: (value: Date | null | undefined, dateMeta: useDatePickerDateMeta) => boolean;
    /**
     * Checks if a month is selected.
     * @param month - The month index to check (0-11).
     */
    isMonthSelected?: (month: number) => boolean;
    /**
     * Checks if a year is selected.
     * @param year - The year to check.
     */
    isYearSelected?: (year: number) => boolean;
    /**
     * Handles mouse down on time picker elements.
     * @param event - The mouse event.
     * @param type - The time picker type (0: hour, 1: minute, 2: second).
     * @param direction - The direction (1: increment, -1: decrement).
     */
    onTimePickerElementMouseDown?: (event: React.MouseEvent<HTMLButtonElement>, type: number, direction: number) => void;
    /**
     * Handles mouse up on time picker elements.
     * @param event - The mouse or keyboard event.
     */
    onTimePickerElementMouseUp?: (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
    /**
     * Handles mouse leave on time picker elements.
     */
    onTimePickerElementMouseLeave?: () => void;
    /**
     * Handles key down on container button.
     * @param event - The keyboard event.
     */
    onContainerButtonKeydown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    /**
     * Handles key down on time picker elements.
     * @param event - The keyboard event.
     * @param type - The time picker type (0: hour, 1: minute, 2: second).
     * @param direction - The direction (1: increment, -1: decrement).
     */
    onTimePickerElementKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>, type: number, direction: number) => void;
    /**
     * Handles key up on time picker elements.
     * @param event - The keyboard event.
     */
    onTimePickerElementKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    /**
     * Toggles AM/PM in 12-hour format.
     * @param event - The mouse event.
     */
    toggleAMPM?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Handles click on today button.
     * @param event - The mouse event.
     */
    onTodayButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Handles click on clear button.
     * @param event - The mouse event.
     */
    onClearButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Handles input change event for manual date entry.
     * @param event - The input change event.
     */
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Handles date selection.
     * @param event - The event object.
     * @param dateMeta - The date metadata.
     */
    onDateSelect?: (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>, dateMeta: useDatePickerDateMeta) => void;
    /**
     * Handles month selection.
     * @param event - The event object.
     * @param month - The month index (0-11).
     */
    onMonthSelect?: (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>, month: number) => void;
    /**
     * Handles year selection.
     * @param event - The event object.
     * @param year - The year object with value property.
     */
    onYearSelect?: (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>, year: { value: number }) => void;
    /**
     * Handles keyboard navigation on date cells.
     * @param event - The keyboard event.
     * @param date - The date metadata.
     * @param groupIndex - The group index.
     */
    onDateCellKeydown?: (event: React.KeyboardEvent<HTMLSpanElement>, date: useDatePickerDateMeta, groupIndex: number) => void;
    /**
     * Handles keyboard navigation on month cells.
     * @param event - The keyboard event.
     * @param index - The month index (0-11).
     */
    onMonthCellKeydown?: (event: React.KeyboardEvent<HTMLSpanElement>, index: number) => void;
    /**
     * Handles keyboard navigation on year cells.
     * @param event - The keyboard event.
     * @param year - The year object with value property.
     */
    onYearCellKeydown?: (event: React.KeyboardEvent<HTMLSpanElement>, year: { value: number }) => void;
}

/**
 * Instance of useDatePicker headless.
 */
export type useDatePickerInstance = HeadlessInstance<useDatePickerProps, useDatePickerState, useDatePickerExposes>;
