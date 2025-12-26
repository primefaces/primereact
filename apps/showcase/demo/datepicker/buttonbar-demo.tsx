'use client';

import {
    DatePickerButtonbarInstance,
    DatePickerTableBodyInstance,
    DatePickerTableHeadRowInstance,
    DatePickerValueChangeEvent,
    useDatePickerMonthData,
    useDatePickerMonthOptions,
    useDatePickerProps,
    useDatePickerYearOptions
} from '@primereact/types/shared/datepicker';
import { Button } from 'primereact/button';
import { DatePicker } from 'primereact/datepicker';
import * as React from 'react';

export default function ButtonbarDemo() {
    const [date, setDate] = React.useState<useDatePickerProps['value'] | null>(null);
    const [date2, setDate2] = React.useState<useDatePickerProps['value'] | null>(null);

    return (
        <div className="flex justify-center gap-4 flex-wrap">
            <DatePicker.Root value={date} placeholder="Basic" onValueChange={(event: DatePickerValueChangeEvent) => setDate(event.value)}>
                <DatePicker.Input />
                <DatePicker.Portal>
                    <DatePicker.Container>
                        <DatePicker.Calendar>
                            <DatePicker.Header>
                                <DatePicker.Prev />
                                <DatePicker.Title>
                                    <DatePicker.SelectMonth />
                                    <DatePicker.SelectYear />
                                    <DatePicker.Decade />
                                </DatePicker.Title>
                                <DatePicker.Next />
                            </DatePicker.Header>
                            <DatePicker.Table>
                                <DatePicker.TableHead>
                                    <DatePicker.TableHeadRow>
                                        {(instance: DatePickerTableHeadRowInstance) => {
                                            const { datepicker } = instance;
                                            const weekDays = datepicker?.weekDays as string[];

                                            return (
                                                <>
                                                    {weekDays.map((day, index) => (
                                                        <DatePicker.TableHeadCell key={index} abbr={day}>
                                                            {day}
                                                        </DatePicker.TableHeadCell>
                                                    ))}
                                                </>
                                            );
                                        }}
                                    </DatePicker.TableHeadRow>
                                </DatePicker.TableHead>
                                <DatePicker.TableBody>
                                    {(instance: DatePickerTableBodyInstance) => {
                                        const { datepicker } = instance;
                                        const month = datepicker?.getIndexedMonth?.() as useDatePickerMonthData;

                                        return (
                                            <>
                                                {month.dates?.map((week) => (
                                                    <DatePicker.TableBodyRow key={week[0].day + '' + week[0].month}>
                                                        <>
                                                            {week.map((date) => (
                                                                <DatePicker.TableBodyCell key={date.day + '' + date.month} date={date}>
                                                                    {date.day}
                                                                </DatePicker.TableBodyCell>
                                                            ))}
                                                        </>
                                                    </DatePicker.TableBodyRow>
                                                ))}
                                            </>
                                        );
                                    }}
                                </DatePicker.TableBody>
                                <DatePicker.TableBody view="month">
                                    {(instance: DatePickerTableBodyInstance) => {
                                        const { datepicker } = instance;
                                        const months = datepicker?.monthPickerValues as useDatePickerMonthOptions[];

                                        return (
                                            <>
                                                {Array.from({ length: 4 }).map((_, rowIndex) => (
                                                    <DatePicker.TableBodyRow key={`month-row-${rowIndex}`}>
                                                        {months.slice(rowIndex * 3, (rowIndex + 1) * 3).map((month, colIndex) => {
                                                            const monthIndex = rowIndex * 3 + colIndex;

                                                            return (
                                                                <DatePicker.TableBodyCell key={monthIndex} month={month} index={monthIndex}>
                                                                    {month.value}
                                                                </DatePicker.TableBodyCell>
                                                            );
                                                        })}
                                                    </DatePicker.TableBodyRow>
                                                ))}
                                            </>
                                        );
                                    }}
                                </DatePicker.TableBody>
                                <DatePicker.TableBody view="year">
                                    {(instance: DatePickerTableBodyInstance) => {
                                        const { datepicker } = instance;
                                        const years = datepicker?.yearPickerValues as useDatePickerYearOptions[];

                                        return (
                                            <>
                                                {Array.from({ length: 5 }).map((_, rowIndex) => (
                                                    <DatePicker.TableBodyRow key={`year-row-${rowIndex}`}>
                                                        {years.slice(rowIndex * 2, (rowIndex + 1) * 2).map((year, colIndex) => {
                                                            const yearIndex = rowIndex * 2 + colIndex;

                                                            return (
                                                                <DatePicker.TableBodyCell key={yearIndex} year={year}>
                                                                    {year.value}
                                                                </DatePicker.TableBodyCell>
                                                            );
                                                        })}
                                                    </DatePicker.TableBodyRow>
                                                ))}
                                            </>
                                        );
                                    }}
                                </DatePicker.TableBody>
                            </DatePicker.Table>
                        </DatePicker.Calendar>
                    </DatePicker.Container>
                    <DatePicker.Buttonbar>
                        <DatePicker.Today />
                        <DatePicker.Clear />
                    </DatePicker.Buttonbar>
                </DatePicker.Portal>
            </DatePicker.Root>
            <DatePicker.Root
                value={date2}
                placeholder="Customized"
                selectionMode="range"
                manualInput={false}
                onValueChange={(event: DatePickerValueChangeEvent) => setDate2(event.value)}
            >
                <DatePicker.Input />
                <DatePicker.Portal>
                    <DatePicker.Container>
                        <DatePicker.Calendar>
                            <DatePicker.Header>
                                <DatePicker.Prev />
                                <DatePicker.Title>
                                    <DatePicker.SelectMonth />
                                    <DatePicker.SelectYear />
                                    <DatePicker.Decade />
                                </DatePicker.Title>
                                <DatePicker.Next />
                            </DatePicker.Header>
                            <DatePicker.Table>
                                <DatePicker.TableHead>
                                    <DatePicker.TableHeadRow>
                                        {(instance: DatePickerTableHeadRowInstance) => {
                                            const { datepicker } = instance;
                                            const weekDays = datepicker?.weekDays as string[];

                                            return (
                                                <>
                                                    {weekDays.map((day, index) => (
                                                        <DatePicker.TableHeadCell key={index} abbr={day}>
                                                            {day}
                                                        </DatePicker.TableHeadCell>
                                                    ))}
                                                </>
                                            );
                                        }}
                                    </DatePicker.TableHeadRow>
                                </DatePicker.TableHead>
                                <DatePicker.TableBody>
                                    {(instance: DatePickerTableBodyInstance) => {
                                        const { datepicker } = instance;
                                        const month = datepicker?.getIndexedMonth?.() as useDatePickerMonthData;

                                        return (
                                            <>
                                                {month.dates?.map((week) => (
                                                    <DatePicker.TableBodyRow key={week[0].day + '' + week[0].month}>
                                                        <>
                                                            {week.map((date) => (
                                                                <DatePicker.TableBodyCell key={date.day + '' + date.month} date={date}>
                                                                    {date.day}
                                                                </DatePicker.TableBodyCell>
                                                            ))}
                                                        </>
                                                    </DatePicker.TableBodyRow>
                                                ))}
                                            </>
                                        );
                                    }}
                                </DatePicker.TableBody>
                                <DatePicker.TableBody view="month">
                                    {(instance: DatePickerTableBodyInstance) => {
                                        const { datepicker } = instance;
                                        const months = datepicker?.monthPickerValues as useDatePickerMonthOptions[];

                                        return (
                                            <>
                                                {Array.from({ length: 4 }).map((_, rowIndex) => (
                                                    <DatePicker.TableBodyRow key={`month-row-${rowIndex}`}>
                                                        {months.slice(rowIndex * 3, (rowIndex + 1) * 3).map((month, colIndex) => {
                                                            const monthIndex = rowIndex * 3 + colIndex;

                                                            return (
                                                                <DatePicker.TableBodyCell key={monthIndex} month={month} index={monthIndex}>
                                                                    {month.value}
                                                                </DatePicker.TableBodyCell>
                                                            );
                                                        })}
                                                    </DatePicker.TableBodyRow>
                                                ))}
                                            </>
                                        );
                                    }}
                                </DatePicker.TableBody>
                                <DatePicker.TableBody view="year">
                                    {(instance: DatePickerTableBodyInstance) => {
                                        const { datepicker } = instance;
                                        const years = datepicker?.yearPickerValues as useDatePickerYearOptions[];

                                        return (
                                            <>
                                                {Array.from({ length: 5 }).map((_, rowIndex) => (
                                                    <DatePicker.TableBodyRow key={`year-row-${rowIndex}`}>
                                                        {years.slice(rowIndex * 2, (rowIndex + 1) * 2).map((year, colIndex) => {
                                                            const yearIndex = rowIndex * 2 + colIndex;

                                                            return (
                                                                <DatePicker.TableBodyCell key={yearIndex} year={year}>
                                                                    {year.value}
                                                                </DatePicker.TableBodyCell>
                                                            );
                                                        })}
                                                    </DatePicker.TableBodyRow>
                                                ))}
                                            </>
                                        );
                                    }}
                                </DatePicker.TableBody>
                            </DatePicker.Table>
                        </DatePicker.Calendar>
                    </DatePicker.Container>
                    <DatePicker.Buttonbar>
                        {(instance: DatePickerButtonbarInstance) => {
                            const { datepicker } = instance;

                            return (
                                <div className="flex justify-between w-full">
                                    <div className="flex gap-2">
                                        <Button.Root size="small" severity="secondary">
                                            Exact
                                        </Button.Root>
                                        <Button.Root size="small" severity="secondary">
                                            Flexible
                                        </Button.Root>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button.Root size="small" label="Today" onClick={datepicker?.onTodayButtonClick} variant="outlined">
                                            Today
                                        </Button.Root>
                                        <Button.Root size="small" severity="danger" variant="outlined" onClick={datepicker?.onClearButtonClick}>
                                            <i className="pi pi-times" />
                                        </Button.Root>
                                    </div>
                                </div>
                            );
                        }}
                    </DatePicker.Buttonbar>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}
