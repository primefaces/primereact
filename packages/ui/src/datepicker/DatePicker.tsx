'use client';
import { Component, withComponent } from '@primereact/core/component';
import { useDatePicker } from '@primereact/headless/datepicker';
import { styles } from '@primereact/styles/datepicker';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { DatePickerAmPm } from './ampm';
import { DatePickerButtonbar } from './buttonbar';
import { DatePickerCalendar } from './calendar';
import { DatePickerClear } from './clear';
import { DatePickerClearIcon } from './clearicon';
import { DatePickerContainer } from './container';
import { DatePickerProvider } from './DatePicker.context';
import { defaultProps } from './DatePicker.props';
import { DatePickerDecade } from './decade';
import { DatePickerDecrement } from './decrement';
import { DatePickerDropdown } from './dropdown';
import { DatePickerDropdownIcon } from './dropdownicon';
import { DatePickerFooter } from './footer';
import { DatePickerHeader } from './header';
import { DatePickerHour } from './hour';
import { DatePickerIncrement } from './increment';
import { DatePickerInput } from './input';
import { DatePickerInputIconContainer } from './inputiconcontainer';
import { DatePickerMinute } from './minute';
import { DatePickerNext } from './next';
import { DatePickerPanel } from './panel';
import { DatePickerPicker } from './picker';
import { DatePickerPortal } from './portal';
import { DatePickerPrev } from './prev';
import { DatePickerSecond } from './second';
import { DatePickerSelectMonth } from './selectmonth';
import { DatePickerSelectYear } from './selectyear';
import { DatePickerSeparator } from './separator';
import { DatePickerSeparatorContainer } from './separatorcontainer';
import { DatePickerTable } from './table';
import { DatePickerTableBody } from './tablebody';
import { DatePickerTableBodyCell } from './tablebodycell';
import { DatePickerTableBodyRow } from './tablebodyrow';
import { DatePickerTableBodyWeekCell } from './tablebodyweekcell';
import { DatePickerTableHead } from './tablehead';
import { DatePickerTableHeadCell } from './tableheadcell';
import { DatePickerTableHeadRow } from './tableheadrow';
import { DatePickerTableHeadWeekCell } from './tableheadweekcell';
import { DatePickerTime } from './time';
import { DatePickerTitle } from './title';
import { DatePickerToday } from './today';

export const DatePicker = withComponent({
    name: 'DatePicker',
    defaultProps,
    styles,
    setup(instance) {
        const datepicker = useDatePicker(instance.inProps);

        return datepicker;
    },
    render(instance) {
        const { id, props, ptmi, cx } = instance;

        const rootProps = mergeProps(
            {
                id,
                className: cx('root')
            },
            ptmi('root')
        );

        return (
            <DatePickerProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </DatePickerProvider>
        );
    },
    components: {
        AmPm: DatePickerAmPm,
        Buttonbar: DatePickerButtonbar,
        Calendar: DatePickerCalendar,
        Clear: DatePickerClear,
        ClearIcon: DatePickerClearIcon,
        Container: DatePickerContainer,
        Decade: DatePickerDecade,
        Decrement: DatePickerDecrement,
        Dropdown: DatePickerDropdown,
        DropdownIcon: DatePickerDropdownIcon,
        Footer: DatePickerFooter,
        Header: DatePickerHeader,
        Hour: DatePickerHour,
        Increment: DatePickerIncrement,
        Input: DatePickerInput,
        InputIconContainer: DatePickerInputIconContainer,
        Minute: DatePickerMinute,
        Next: DatePickerNext,
        Panel: DatePickerPanel,
        Picker: DatePickerPicker,
        Portal: DatePickerPortal,
        Prev: DatePickerPrev,
        Second: DatePickerSecond,
        SelectMonth: DatePickerSelectMonth,
        SelectYear: DatePickerSelectYear,
        Separator: DatePickerSeparator,
        SeparatorContainer: DatePickerSeparatorContainer,
        Table: DatePickerTable,
        TableBody: DatePickerTableBody,
        TableBodyCell: DatePickerTableBodyCell,
        TableBodyRow: DatePickerTableBodyRow,
        TableBodyWeekCell: DatePickerTableBodyWeekCell,
        TableHead: DatePickerTableHead,
        TableHeadCell: DatePickerTableHeadCell,
        TableHeadRow: DatePickerTableHeadRow,
        TableHeadWeekCell: DatePickerTableHeadWeekCell,
        Time: DatePickerTime,
        Title: DatePickerTitle,
        Today: DatePickerToday
    }
});
