import { ComponentBase } from '../componentbase/ComponentBase';
import { classNames } from '../utils/Utils';

const styles = `
@layer primereact {
    .p-calendar {
        position: relative;
        display: inline-flex;
        max-width: 100%;
    }

    .p-calendar .p-inputtext {
        flex: 1 1 auto;
        width: 1%;
    }

    .p-calendar-w-btn-right .p-inputtext {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .p-calendar-w-btn-right .p-datepicker-trigger {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-calendar-w-btn-left .p-inputtext {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-calendar-w-btn-left .p-datepicker-trigger {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    /* Fluid */
    .p-fluid .p-calendar {
        display: flex;
    }

    .p-fluid .p-calendar .p-inputtext {
        width: 1%;
    }

    /* Datepicker */
    .p-calendar .p-datepicker {
        min-width: 100%;
    }

    .p-datepicker {
        width: auto;
        position: absolute;
        top: 0;
        left: 0;
    }

    .p-datepicker-inline {
        display: inline-block;
        position: static;
        overflow-x: auto;
    }

    /* Header */
    .p-datepicker-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .p-datepicker-header .p-datepicker-title {
        margin: 0 auto;
    }

    .p-datepicker-prev,
    .p-datepicker-next {
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        position: relative;
    }

    /* Multiple Month DatePicker */
    .p-datepicker-multiple-month .p-datepicker-group-container {
        display: flex;
    }

    .p-datepicker-multiple-month .p-datepicker-group-container .p-datepicker-group {
        flex: 1 1 auto;
    }

    /* Multiple Month DatePicker */
    .p-datepicker-multiple-month .p-datepicker-group-container {
        display: flex;
    }

    /* DatePicker Table */
    .p-datepicker table {
        width: 100%;
        border-collapse: collapse;
    }

    .p-datepicker td > span {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
    }

    /* Month Picker */
    .p-monthpicker-month {
        width: 33.3%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    /*  Button Bar */
    .p-datepicker-buttonbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* Time Picker */
    .p-timepicker {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .p-timepicker button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }

    .p-timepicker > div {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    /* Touch UI */
    .p-datepicker-touch-ui,
    .p-calendar .p-datepicker-touch-ui {
        position: fixed;
        top: 50%;
        left: 50%;
        min-width: 80vw;
        transform: translate(-50%, -50%);
    }

    /* Year Picker */
    .p-yearpicker-year {
        width: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        overflow: hidden;
        position: relative;
    }
}
`;

const classes = {
    root: ({ props, focusedState, isFilled, panelVisible }) =>
        classNames('p-calendar p-component p-inputwrapper', {
            [`p-calendar-w-btn p-calendar-w-btn-${props.iconPos}`]: props.showIcon,
            'p-calendar-disabled': props.disabled,
            'p-calendar-timeonly': props.timeOnly,
            'p-inputwrapper-filled': props.value || isFilled,
            'p-inputwrapper-focus': focusedState,
            'p-focus': focusedState || panelVisible
        }),
    dropdownButton: 'p-datepicker-trigger',
    buttonbar: 'p-datepicker-buttonbar',
    todayButton: 'p-button-text',
    clearButton: 'p-button-text',
    footer: 'p-datepicker-footer',
    yearPicker: 'p-yearpicker',
    year: ({ isYearSelected, y, isMonthYearDisabled }) => classNames('p-yearpicker-year', { 'p-highlight': isYearSelected(y), 'p-disabled': isMonthYearDisabled(-1, y) }),
    monthPicker: 'p-monthpicker',
    month: ({ isMonthSelected, isMonthYearDisabled, i, currentYear }) => classNames('p-monthpicker-month', { 'p-highlight': isMonthSelected(i), 'p-disabled': isMonthYearDisabled(i, currentYear) }),
    hourPicker: 'p-hour-picker',
    secondPicker: 'p-second-picker',
    minutePicker: 'p-minute-picker',
    millisecondPicker: 'p-millisecond-picker',
    ampmPicker: 'p-ampm-picker',
    separatorContainer: 'p-separator',
    dayLabel: ({ className }) => className,
    day: ({ date }) => classNames({ 'p-datepicker-other-month': date.otherMonth, 'p-datepicker-today': date.today }),
    panel: ({ panelClassName }) => panelClassName,
    previousIcon: 'p-datepicker-prev-icon',
    previousButton: 'p-datepicker-prev',
    nextIcon: 'p-datepicker-next-icon',
    nextButton: 'p-datepicker-next',
    incrementButton: 'p-link',
    decrementButton: 'p-link',
    title: 'p-datepicker-title',
    timePicker: 'p-timepicker',
    monthTitle: 'p-datepicker-month p-link',
    yearTitle: 'p-datepicker-year p-link',
    decadeTitle: 'p-datepicker-decade',
    header: 'p-datepicker-header',
    groupContainer: 'p-datepicker-group-container',
    group: 'p-datepicker-group',
    select: ({ props }) => (props.monthNavigator && props.view !== 'month' ? 'p-datepicker-month' : props.yearNavigator ? 'p-datepicker-year' : undefined),
    weekHeader: 'p-datepicker-weekheader p-disabled',
    weekNumber: 'p-datepicker-weeknumber',
    weekLabelContainer: 'p-disabled',
    container: 'p-datepicker-calendar-container',
    table: 'p-datepicker-calendar',
    transition: 'p-connected-overlay'
};

export const CalendarBase = ComponentBase.extend({
    defaultProps: {
        __TYPE: 'Calendar',
        appendTo: null,
        ariaLabelledBy: null,
        ariaLabel: null,
        autoZIndex: true,
        autoFocus: false,
        baseZIndex: 0,
        className: null,
        clearButtonClassName: 'p-button-secondary',
        dateFormat: null,
        dateTemplate: null,
        decadeTemplate: null,
        decrementIcon: null,
        disabled: false,
        disabledDates: null,
        disabledDays: null,
        enabledDates: null,
        footerTemplate: null,
        formatDateTime: null,
        headerTemplate: null,
        hideOnDateTimeSelect: false,
        hideOnRangeSelection: false,
        hourFormat: '24',
        icon: null,
        iconPos: 'right',
        id: null,
        incrementIcon: null,
        inline: false,
        inputClassName: null,
        inputId: null,
        inputMode: 'none',
        inputRef: null,
        inputStyle: null,
        keepInvalid: false,
        locale: null,
        mask: null,
        maskSlotChar: '_',
        maxDate: null,
        maxDateCount: null,
        minDate: null,
        monthNavigator: false,
        monthNavigatorTemplate: null,
        name: null,
        nextIcon: null,
        numberOfMonths: 1,
        onBlur: null,
        onChange: null,
        onClearButtonClick: null,
        onFocus: null,
        onHide: null,
        onInput: null,
        onMonthChange: null,
        onSelect: null,
        onShow: null,
        onTodayButtonClick: null,
        onViewDateChange: null,
        onVisibleChange: null,
        panelClassName: null,
        panelStyle: null,
        parseDateTime: null,
        placeholder: null,
        prevIcon: null,
        readOnlyInput: false,
        required: false,
        selectOtherMonths: false,
        selectionMode: 'single',
        shortYearCutoff: '+10',
        showButtonBar: false,
        showIcon: false,
        showMillisec: false,
        showMinMaxRange: false,
        showOnFocus: true,
        showOtherMonths: true,
        showSeconds: false,
        showTime: false,
        showWeek: false,
        stepHour: 1,
        stepMillisec: 1,
        stepMinute: 1,
        stepSecond: 1,
        style: null,
        tabIndex: null,
        timeOnly: false,
        todayButtonClassName: 'p-button-secondary',
        tooltip: null,
        tooltipOptions: null,
        touchUI: false,
        transitionOptions: null,
        value: null,
        view: 'date',
        viewDate: null,
        visible: false,
        yearNavigator: false,
        yearNavigatorTemplate: null,
        yearRange: null,
        children: undefined
    },
    css: {
        classes,
        styles
    }
});
