import React = require("react");

interface CalendarProps {
    id?: string;
    value?: any;
    defaultDate?: Date;
    selectionMode?: string;
    style?: string;
    className?: string;
    inputStyle?: string;
    inputClassName?: string;
    placeholder?: string;
    disabled?: boolean;
    dateFormat?: string;
    inline?: boolean;
    showOtherMonths?: boolean;
    selectOtherMonths?: boolean;
    showIcon?: boolean;
    icon?: string;
    utc?: boolean;
    showOnFocus?: boolean;
    appendTo?: object;
    readOnlyInput?: boolean;
    shortYearCutoff?: string;
    minDate?: any;
    maxDate?: any;
    monthNavigator?: boolean;
    yearNavigator?: boolean;
    maxDateCount?: number;
    yearRange?: string;
    showTime?: boolean;
    hourFormat?: string;
    timeOnly?: boolean;
    locale?: object;
    dataType?: string;
    showButtonBar?: boolean;
    todayButtonClassName?: boolean;
    clearButtonClassName?: boolean;
    required?: boolean;
    tabindex?: number;
    stepHour?: number;
    stepMinute?: number;
    stepSecond?: number;
    showSeconds?: boolean;
    disabledDates?: Array<any>;
    disabledDays?: Array<any>;
    onFocus?(event: Event): void;
    onSelect?(e: {originalEvent: Event, value: any}): void;
    onBlur?(event: Event): void;
    onChange?(e: {originalEvent: Event, value: any}): void;
    onTodayButtonClick?(event: Event): void;
    onClearButtonClick?(event: Event): void;
    onMouseDown?(event: Event): void;
    onKeyUp?(event: Event): void;
    onKeyPress?(event: Event): void;
    onContextMenu?(event: Event): void;
}

export class Calendar extends React.Component<CalendarProps,any> {}