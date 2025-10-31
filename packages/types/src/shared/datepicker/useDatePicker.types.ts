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
 * Event fired when the datepicker's value changes.
 */
export interface useDatePickerValueChangeEvent {
    /**
     * The value of the datepicker.
     */
    value: useDatePickerProps['value'];
}

/**
 * Event fired when a date is selected.
 */
export interface useDatePickerDateSelectEvent {
    /**
     * The selected date value.
     */
    value: Date | useDatePickerProps['value'];
}

/**
 * Event fired when the month changes.
 */
export interface useDatePickerMonthChangeEvent {
    /**
     * The month number (1-12).
     */
    month: number;
    /**
     * The year.
     */
    year: number;
}

/**
 * Event fired when the year changes.
 */
export interface useDatePickerYearChangeEvent {
    /**
     * The month number (0-11).
     */
    month: number;
    /**
     * The year.
     */
    year: number;
}

/**
 * Event fired when the today button is clicked.
 */
export interface useDatePickerTodayButtonClickEvent {
    /**
     * Original browser event.
     */
    originalEvent: React.MouseEvent<HTMLButtonElement>;
    /**
     * The current date.
     */
    date: Date;
}

/**
 * Event fired when input blur occurs.
 */
export interface useDatePickerBlurEvent {
    /**
     * Original browser event.
     */
    originalEvent: React.FocusEvent<HTMLInputElement>;
    /**
     * The input value.
     */
    value: string;
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
    /**
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
     * @param event The event that triggered the change.
     * @param event.value The value of the datepicker.
     * @returns void
     */
    onValueChange?: (event: useDatePickerValueChangeEvent) => void;
    /**
     * Callback to invoke when a date is selected.
     * @param {useDatePickerDateSelectEvent} event - Custom date select event.
     * @returns void
     */
    onDateSelect?: (event: useDatePickerDateSelectEvent) => void;
    /**
     * Callback to invoke when the month changes.
     * @param {useDatePickerMonthChangeEvent} event - Custom month change event.
     * @returns void
     */
    onMonthChange?: (event: useDatePickerMonthChangeEvent) => void;
    /**
     * Callback to invoke when the year changes.
     * @param {useDatePickerYearChangeEvent} event - Custom year change event.
     * @returns void
     */
    onYearChange?: (event: useDatePickerYearChangeEvent) => void;
    /**
     * Callback to invoke when the today button is clicked.
     * @param {useDatePickerTodayButtonClickEvent} event - Custom today button click event.
     * @returns void
     */
    onTodayButtonClick?: (event: useDatePickerTodayButtonClickEvent) => void;
    /**
     * Callback to invoke when the clear button is clicked.
     * @param {React.MouseEvent<HTMLButtonElement>} event - Browser event.
     * @returns void
     */
    onClearButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Callback to invoke on input event.
     * @param {React.ChangeEvent<HTMLInputElement>} event - Browser event.
     * @returns void
     */
    onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Callback to invoke on keydown event.
     * @param {React.KeyboardEvent<HTMLInputElement | HTMLButtonElement>} event - Browser event.
     * @returns void
     */
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement | HTMLButtonElement>) => void;
    /**
     * Callback to invoke on focus event.
     * @param {React.FocusEvent<HTMLInputElement>} event - Browser event.
     * @returns void
     */
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Callback to invoke on blur event.
     * @param {useDatePickerBlurEvent} event - Custom blur event.
     * @returns void
     */
    onBlur?: (event: useDatePickerBlurEvent) => void;
}

/**
 * Defines valid state in useDatePicker.
 */
export interface useDatePickerState {
    /**
     * The current raw value of the datepicker (unformatted).
     */
    rawValue: useDatePickerProps['value'];
    /**
     * Whether the overlay is visible.
     */
    overlayVisible: boolean;
    /**
     * Current view state information.
     */
    currentView: 'date' | 'month' | 'year' | undefined;
    /**
     * Whether to show the clear icon.
     */
    showClearIcon: boolean;
    /**
     * The date currently being hovered in range selection mode.
     */
    hoveredDate: useDatePickerDateMeta | null;
}

/**
 * Defines the methods and properties exposed by useDatePicker.
 */
export interface useDatePickerExposes {
    /**
     * State object containing the current raw value and view information.
     */
    state: useDatePickerState;
    /**
     * Reference to the input element.
     */
    inputRef: React.RefObject<{ elementRef: React.RefObject<HTMLInputElement> } | null>;
    /**
     * Reference to the next navigation button element.
     */
    nextButtonRef: React.RefObject<{ elementRef: React.RefObject<HTMLButtonElement> } | null>;
    /**
     * Reference to the previous navigation button element.
     */
    prevButtonRef: React.RefObject<{ elementRef: React.RefObject<HTMLButtonElement> } | null>;
    /**
     * Reference to the portal element.
     */
    portalRef: React.RefObject<{ containerRef: { current: { elementRef: React.RefObject<HTMLDivElement> } } } | null>;
    /**
     * Reference to the overlay element.
     */
    overlayRef: React.RefObject<HTMLDivElement | null>;
    /**
     * Formatted value string for the input field.
     */
    inputFieldValue: string;
    /**
     * Label text for the week header.
     */
    weekHeaderLabel: string | undefined;
    /**
     * Label text for today button.
     */
    todayLabel: string | undefined;
    /**
     * Label text for clear button.
     */
    clearLabel: string | undefined;
    /**
     * Array of localized day names for the week.
     */
    weekDays: string[];
    /**
     * Array of month data objects containing dates and week numbers.
     */
    months: useDatePickerMonthData[];
    /**
     * Array of month picker values.
     */
    monthPickerValues: Array<{ value: string; selectable: boolean }>;
    /**
     * Array of year picker values.
     */
    yearPickerValues: Array<{ value: number; selectable: boolean }>;
    /**
     * Whether the switch view button is disabled.
     */
    switchViewButtonDisabled: boolean;
    /**
     * Formatted current hour value for display.
     */
    formattedCurrentHour: number | string;
    /**
     * Formatted current minute value for display.
     */
    formattedCurrentMinute: number | string;
    /**
     * Formatted current second value for display.
     */
    formattedCurrentSecond: number | string;
    /**
     * AM/PM label for 12-hour format.
     */
    ampmLabel: string | undefined;
    /**
     * Sets the visibility state of the overlay.
     * @param visible - Whether the overlay should be visible.
     * @returns void
     */
    setOverlayVisibleState: (visible: boolean) => void;
    /**
     * Returns a specific month by index.
     * @param index - The index of the month to retrieve.
     * @returns useDatePickerMonthData
     */
    getIndexedMonth: (index?: number) => useDatePickerMonthData;
    /**
     * Returns the current year.
     * @returns number
     */
    getYear: () => number;
    /**
     * Returns the name of the current month.
     * @param index - The index of the month to retrieve.
     * @returns string
     */
    getMonthName: (index?: number) => string;
    /**
     * Returns whether the selection mode is range.
     * @returns boolean
     */
    isRangeSelection: () => boolean;
    /**
     * Checks if a date is selected.
     * @param dateMeta - The date metadata to check.
     * @returns boolean
     */
    isSelected: (dateMeta: useDatePickerDateMeta) => boolean;
    /**
     * Handles previous button click event.
     * @param event - The mouse event.
     * @returns void
     */
    onPrevButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Handles next button click event.
     * @param event - The mouse event.
     * @returns void
     */
    onNextButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Switches to month view.
     * @param event - The mouse event.
     * @returns void
     */
    switchToMonthView: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Switches to year view.
     * @param event - The mouse event.
     * @returns void
     */
    switchToYearView: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Handles date selection.
     * @param event - The mouse or keyboard event.
     * @param dateMeta - The date metadata.
     * @returns void
     */
    onDateSelect: (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement> | null, dateMeta: useDatePickerDateMeta) => void;
    /**
     * Handles month selection.
     * @param event - The mouse or keyboard event.
     * @param index - The month index.
     * @returns void
     */
    onMonthSelect: (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>, index: number) => void;
    /**
     * Handles year selection.
     * @param event - The mouse or keyboard event.
     * @param year - The year object.
     * @returns void
     */
    onYearSelect: (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>, year: { value: number }) => void;
    /**
     * Handles date cell keydown event.
     * @param event - The keyboard event.
     * @param date - The date metadata.
     * @param groupIndex - The group index.
     * @returns void
     */
    onDateCellKeydown: (event: React.KeyboardEvent<HTMLSpanElement>, date: useDatePickerDateMeta, groupIndex: number) => void;
    /**
     * Handles month cell keydown event.
     * @param event - The keyboard event.
     * @param index - The month index.
     * @returns void
     */
    onMonthCellKeydown: (event: React.KeyboardEvent<HTMLSpanElement>, index: number) => void;
    /**
     * Handles year cell keydown event.
     * @param event - The keyboard event.
     * @param year - The year object.
     * @returns void
     */
    onYearCellKeydown: (event: React.KeyboardEvent<HTMLSpanElement>, year: { value: number }) => void;
    /**
     * Handles button click event.
     * @returns void
     */
    onButtonClick: () => void;
    /**
     * Handles time picker element mouse down event.
     * @param event - The mouse event.
     * @param type - The time picker type.
     * @param direction - The direction.
     * @returns void
     */
    onTimePickerElementMouseDown: (event: React.MouseEvent<HTMLButtonElement>, type: number, direction: number) => void;
    /**
     * Handles time picker element mouse up event.
     * @param event - The mouse or keyboard event.
     * @returns void
     */
    onTimePickerElementMouseUp: (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void;
    /**
     * Handles time picker element mouse leave event.
     * @returns void
     */
    onTimePickerElementMouseLeave: () => void;
    /**
     * Handles container button keydown event.
     * @param event - The keyboard event.
     * @returns void
     */
    onContainerButtonKeydown: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    /**
     * Handles time picker element keydown event.
     * @param event - The keyboard event.
     * @param type - The time picker type.
     * @param direction - The direction.
     * @returns void
     */
    onTimePickerElementKeyDown: (event: React.KeyboardEvent<HTMLButtonElement>, type: number, direction: number) => void;
    /**
     * Handles time picker element keyup event.
     * @param event - The keyboard event.
     * @returns void
     */
    onTimePickerElementKeyUp: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    /**
     * Toggles AM/PM.
     * @param event - The mouse event.
     * @returns void
     */
    toggleAMPM: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Handles today button click event.
     * @param event - The mouse event.
     * @returns void
     */
    onTodayButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Handles clear button click event.
     * @param event - The mouse event.
     * @returns void
     */
    onClearButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Handles clear click event.
     * @returns void
     */
    onClearClick: () => void;
    /**
     * Handles input event.
     * @param event - The change event.
     * @returns void
     */
    onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Handles input click event.
     * @returns void
     */
    onInputClick: () => void;
    /**
     * Handles input keydown event.
     * @param event - The keyboard event.
     * @returns void
     */
    onInputKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Handles input focus event.
     * @param event - The focus event.
     * @returns void
     */
    onInputFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Handles input blur event.
     * @param event - The focus event.
     * @returns void
     */
    onInputBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Handles overlay enter event.
     * @returns void
     */
    onOverlayEnter: () => void;
    /**
     * Parses a string value to date picker value.
     * @param text - The text to parse.
     * @returns The parsed value.
     */
    parseValue: (text: string) => useDatePickerProps['value'];
    /**
     * Checks if two dates are equal.
     * @param value - The date value.
     * @param dateMeta - The date metadata.
     * @returns boolean
     */
    isDateEquals: (value: Date | string | null | undefined, dateMeta: useDatePickerDateMeta) => boolean;
    /**
     * Checks if a month is selected.
     * @param month - The month number.
     * @returns boolean
     */
    isMonthSelected: (month: number) => boolean;
    /**
     * Checks if a year is selected.
     * @param year - The year number.
     * @returns boolean
     */
    isYearSelected: (year: number) => boolean;
    /**
     * Checks if a date is in the hover range during range selection.
     * @param dateMeta - The date metadata to check.
     * @returns boolean
     */
    isInHoverRange: (dateMeta: useDatePickerDateMeta) => boolean;
    /**
     * Handles date cell mouse enter event.
     * @param dateMeta - The date metadata.
     * @returns void
     */
    onDateCellMouseEnter: (dateMeta: useDatePickerDateMeta) => void;
}

/**
 * Instance of useDatePicker headless.
 */
export type useDatePickerInstance = HeadlessInstance<useDatePickerProps, useDatePickerState, useDatePickerExposes>;
