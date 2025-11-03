import { createStyles } from '@primereact/styles/utils';
import type { DatePickerInstance, useDatePickerDateMeta, useDatePickerMonthOptions, useDatePickerYearOptions } from '@primereact/types/shared/datepicker';
import { style } from '@primeuix/styles/datepicker';

const theme = `
${style}

.p-datepicker {
    position: relative;
}

.p-datepicker-month-view {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    margin: dt('datepicker.day.view.margin');
}

.p-datepicker-month {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: dt('datepicker.date.height');
}

.p-datepicker-month-cell {
    padding: dt('datepicker.date.padding');
}

.p-datepicker-year-view {
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    margin: dt('datepicker.day.view.margin');
}

.p-datepicker-year {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: dt('datepicker.date.height');
}

.p-datepicker-year-cell {
    padding: dt('datepicker.date.padding');
}

.p-datepicker-day-hover-range:not(.p-datepicker-day-selected) {
    background: dt('datepicker.date.hover.background');
    color: dt('datepicker.date.hover.color');
}
`;

export const styles = createStyles<DatePickerInstance>({
    name: 'datepicker',
    style: theme,
    classes: {
        root: ({ props, instance }) => [
            'p-datepicker p-component p-inputwrapper',
            {
                'p-invalid': props.invalid,
                'p-inputwrapper-filled': props.value != null || props.defaultValue != null,
                'p-inputwrapper-focus': instance.state.focused || instance.state.overlayVisible,
                'p-focus': instance.state.focused || instance.state.overlayVisible,
                'p-datepicker-fluid': props.fluid
            }
        ],
        input: 'p-datepicker-input',
        clearIcon: 'p-datepicker-clear-icon',
        dropdown: 'p-datepicker-dropdown',
        inputIconContainer: 'p-datepicker-input-icon-container',
        inputIcon: 'p-datepicker-input-icon',
        panel: ({ props }) => [
            'p-datepicker-panel p-component',
            {
                'p-disabled': props.disabled,
                'p-datepicker-timeonly': props.timeOnly
            }
        ],
        container: 'p-datepicker-calendar-container',
        calendar: 'p-datepicker-calendar',
        header: 'p-datepicker-header',
        prev: 'p-datepicker-prev-button',
        title: 'p-datepicker-title',
        selectMonth: 'p-datepicker-select-month',
        selectYear: 'p-datepicker-select-year',
        decade: 'p-datepicker-decade',
        next: 'p-datepicker-next-button',
        dayView: 'p-datepicker-day-view',
        weekHeader: 'p-datepicker-weekheader p-disabled',
        weekNumber: 'p-datepicker-weeknumber',
        weekLabelContainer: 'p-datepicker-weeklabel-container p-disabled',
        weekDayCell: 'p-datepicker-weekday-cell',
        weekDay: 'p-datepicker-weekday',
        dayCell: ({ context }) => [
            'p-datepicker-day-cell',
            {
                'p-datepicker-other-month': (context.date as useDatePickerDateMeta).otherMonth,
                'p-datepicker-today': (context.date as useDatePickerDateMeta).today
            }
        ],
        day: ({ instance, props, context }) => {
            let selectedDayClass = '';
            let hoverRangeClass = '';

            if (context.date && instance.state.rawValue !== null && instance.state.rawValue !== undefined) {
                if (instance.isRangeSelection() && instance.isSelected(context.date as useDatePickerDateMeta) && (context.date as useDatePickerDateMeta).selectable) {
                    const rawValue = instance.state.rawValue;

                    if (Array.isArray(rawValue)) {
                        let start: Date | string | null | undefined;
                        let end: Date | string | null | undefined;

                        if (typeof rawValue[0] === 'string') {
                            const parsed = instance.parseValue(rawValue[0]);

                            start = Array.isArray(parsed) ? parsed[0] : parsed;
                        } else {
                            start = rawValue[0];
                        }

                        if (typeof rawValue[1] === 'string') {
                            const parsed = instance.parseValue(rawValue[1]);

                            end = Array.isArray(parsed) ? parsed[0] : parsed;
                        } else {
                            end = rawValue[1];
                        }

                        selectedDayClass = instance.isDateEquals(start, context.date as useDatePickerDateMeta) || instance.isDateEquals(end, context.date as useDatePickerDateMeta) ? 'p-datepicker-day-selected' : 'p-datepicker-day-selected-range';
                    }
                }

                if (instance.isRangeSelection() && instance.isInHoverRange(context.date as useDatePickerDateMeta) && (context.date as useDatePickerDateMeta).selectable) {
                    hoverRangeClass = 'p-datepicker-day-hover-range';
                }
            }

            return [
                'p-datepicker-day',
                {
                    'p-datepicker-day-selected': context.date && !instance.isRangeSelection() && instance.isSelected(context.date as useDatePickerDateMeta) && (context.date as useDatePickerDateMeta).selectable,
                    'p-disabled': props.disabled || (context.date && !(context.date as useDatePickerDateMeta).selectable)
                },
                selectedDayClass,
                hoverRangeClass
            ];
        },
        monthView: 'p-datepicker-month-view',
        monthCell: 'p-datepicker-month-cell',
        month: ({ instance, props, context }) => [
            'p-datepicker-month',

            {
                'p-datepicker-month-selected': context.index && instance.isMonthSelected(context.index as number),
                'p-disabled': props.disabled || (context.month && !(context.month as useDatePickerMonthOptions).selectable)
            }
        ],
        yearView: 'p-datepicker-year-view',
        yearCell: 'p-datepicker-year-cell',
        year: ({ instance, props, context }) => [
            'p-datepicker-year',
            {
                'p-datepicker-year-selected': context.year && instance.isYearSelected((context.year as useDatePickerYearOptions).value),
                'p-disabled': props.disabled || (context.year && !(context.year as useDatePickerYearOptions).selectable)
            }
        ],
        timePicker: 'p-datepicker-time-picker',
        hourPicker: 'p-datepicker-hour-picker',
        pcIncrementButton: 'p-datepicker-increment-button',
        pcDecrementButton: 'p-datepicker-decrement-button',
        separator: 'p-datepicker-separator',
        minutePicker: 'p-datepicker-minute-picker',
        secondPicker: 'p-datepicker-second-picker',
        ampmPicker: 'p-datepicker-ampm-picker',
        buttonbar: 'p-datepicker-buttonbar',
        today: 'p-datepicker-today-button',
        clear: 'p-datepicker-clear-button'
    }
});
