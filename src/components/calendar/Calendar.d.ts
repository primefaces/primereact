import * as React from 'react';
import TooltipOptions from '../tooltip/TooltipOptions';

interface OnChangeTargetOptions {
    name: string;
    id: string;
    value: Date | Date[] | undefined | null;
}

interface OnChangeParams {
    originalEvent: Event;
    value: Date | Date[] | undefined | null;
    stopPropagation(): void;
    preventDefault(): void;
    target: OnChangeTargetOptions;
}

interface OnViewChangeParams {
    originalEvent: Event;
    value: Date;
}

interface OnSelectParams {
    originalEvent: Event;
    value: Date | Date[];
}

interface DateTemplateParams {
    day: number;
    month: number;
    year: number;
    otherMonth: boolean;
    today: boolean;
    selectable: boolean;
}

interface CalendarProps {
    id?: string;
    inputRef?: React.Ref<HTMLInputElement>;
    name?: string;
    value?: Date | Date[];
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
    keepInvalid?: boolean;
    mask?: string;
    disabled?: boolean;
    tabIndex?: number;
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
    showMillisec?: boolean;
    hourFormat?: string;
    stepHour?: number;
    stepMinute?: number;
    stepSecond?: number;
    stepMillisec?: number;
    shortYearCutoff?: string;
    hideOnDateTimeSelect?: boolean;
    showWeek?: boolean;
    locale?: string;
    dateFormat?: string;
    panelStyle?: object;
    panelClassName?: string;
    monthNavigator?: boolean;
    yearNavigator?: boolean;
    yearRange?: string;
    disabledDates?: Date[];
    disabledDays?: number[];
    minDate?: Date;
    maxDate?: Date;
    maxDateCount?: number;
    showOtherMonths?: boolean;
    selectOtherMonths?: boolean;
    showButtonBar?: boolean;
    todayButtonClassName?: string;
    clearButtonClassName?: string;
    autoZIndex?: boolean;
    baseZIndex?: number;
    appendTo?: React.HTMLElement;
    tooltip?: string;
    tooltipOptions?: TooltipOptions;
    ariaLabelledBy?: string;
    dateTemplate?(e: DateTemplateParams): React.ReactNode;
    headerTemplate?(): React.ReactNode;
    footerTemplate?(): React.ReactNode;
    onFocus?(event: React.FormEvent<HTMLInputElement>): void;
    onBlur?(event: React.FormEvent<HTMLInputElement>): void;
    onInput?(event: React.FormEvent<HTMLInputElement>): void;
    onSelect?(e: OnSelectParams): void;
    onChange?(e: OnChangeParams): void;
    onViewDateChange?(e: OnViewChangeParams): void;
    onTodayButtonClick?(event: React.MouseEvent<HTMLButtonElement>): void;
    onClearButtonClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

export class Calendar extends React.Component<CalendarProps, any> { }
