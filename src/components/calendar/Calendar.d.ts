import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

export interface LocaleSettings {
    firstDayOfWeek?: number;
    dayNames: string[];
    dayNamesShort: string[];
    dayNamesMin: string[];
    monthNames: string[];
    monthNamesShort: string[];
    today: string;
    clear: string;
}

export interface DateMetaData {
    day: number;
    month: number;
    year: number;
    otherMonth: boolean;
    today: boolean;
    selectable: boolean;
}

interface CalendarProps {
    id?: string;
    name?: string;
    value?: Date|Date[];
    viewDate?: Date;
    style?: object;
    className?: string;
    inline?: boolean;
    selectionMode?: string;
    inputId?: string;
    inputStyle?: object;
    inputClassName?: string;
    required?: boolean;
    readOnlyInput?: boolean;
    disabled?: boolean;
    tabIndex?: string;
    placeholder?: string;
    showIcon?: boolean;
    icon?: string;
    showOnFocus?: boolean;
    numberOfMonths?: number;
    view?: string;
    touchUI?: boolean;
    showTime?: boolean;
    timeOnly?: boolean;
    showSeconds?: boolean;
    hourFormat?: string;
    stepHour?: number;
    stepMinute?: number;
    stepSecond?: number;
    shortYearCutoff?: string;
    hideOnDateTimeSelect?: boolean;
    showWeek?: boolean;
    locale?: LocaleSettings;
    dateFormat?: string;
    panelStyle?: object;
    panelClassName?: string;
    monthNavigator?: boolean;
    yearNavigator?: boolean;
    disabledDates?: Date[];
    disabledDays?: number[];
    minDate?: Date;
    maxDate?: Date;
    maxDateCount?: number;
    showOtherMonths?: boolean;
    selectOtherMonths?: boolean;
    showButtonBar?: boolean;
    todayButtonClassName?: string;
    clearButtonStyleClass?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    appendTo?: any;
    tooltip?: any;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    yearRange?: string;
    dateTemplate?(dateMeta:DateMetaData): React.ReactNode;
    headerTemplate?(): React.ReactNode;
    footerTemplate?(): React.ReactNode;
    onFocus?(event: Event): void;
    onBlur?(event: Event): void;
    onInput?(event: Event): void;
    onSelect?(e: {originalEvent: Event, value: Date}): void;
    onChange?(e: {originalEvent: Event, value: Date|Date[]}): void;
    onTodayButtonClick?(event: Event): void;
    onClearButtonClick?(event: Event): void;
    onViewDateChange?(e: {originalEvent: Event, value: Date}): void;
}

export class Calendar extends React.Component<CalendarProps,any> {}
