'use client';
import { useDatePicker } from '@primereact/headless/datepicker';
import { styles } from '@primereact/styles/datepicker';
// import { DatePickerProps } from '@primereact/types/shared/datepicker';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
// import { Popover } from 'primereact/popover';
import { Component } from '@primereact/core/component';
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
import { DatePickerFooter } from './footer';
import { DatePickerHeader } from './header';
import { DatePickerHour } from './hour';
import { DatePickerIncrement } from './increment';
import { DatePickerInput } from './input';
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

        // return (
        //     <DatePickerProvider value={instance}>
        //         <Popover {...(props as DatePickerProps)} {...rootProps}>
        //             {resolve(props.children, instance)}
        //         </Popover>
        //     </DatePickerProvider>
        // );

        return (
            <DatePickerProvider value={instance}>
                <Component instance={instance} attrs={rootProps} children={props.children} />
            </DatePickerProvider>
        );
    },
    components: {
        Input: DatePickerInput,
        Portal: DatePickerPortal,
        Panel: DatePickerPanel,
        Container: DatePickerContainer,
        Calendar: DatePickerCalendar,
        Table: DatePickerTable,
        TableHead: DatePickerTableHead,
        TableHeadCell: DatePickerTableHeadCell,
        TableHeadRow: DatePickerTableHeadRow,
        TableHeadWeekCell: DatePickerTableHeadWeekCell,
        TableBody: DatePickerTableBody,
        TableBodyRow: DatePickerTableBodyRow,
        TableBodyCell: DatePickerTableBodyCell,
        TableBodyWeekCell: DatePickerTableBodyWeekCell,
        Header: DatePickerHeader,
        Prev: DatePickerPrev,
        Next: DatePickerNext,
        Title: DatePickerTitle,
        SelectYear: DatePickerSelectYear,
        SelectMonth: DatePickerSelectMonth,
        Decade: DatePickerDecade,
        Time: DatePickerTime,
        Picker: DatePickerPicker,
        Increment: DatePickerIncrement,
        Decrement: DatePickerDecrement,
        Hour: DatePickerHour,
        Minute: DatePickerMinute,
        Second: DatePickerSecond,
        SeparatorContainer: DatePickerSeparatorContainer,
        Separator: DatePickerSeparator,
        AmPm: DatePickerAmPm,
        Footer: DatePickerFooter,
        Buttonbar: DatePickerButtonbar,
        Today: DatePickerToday,
        Clear: DatePickerClear,
        ClearIcon: DatePickerClearIcon
    }
});
