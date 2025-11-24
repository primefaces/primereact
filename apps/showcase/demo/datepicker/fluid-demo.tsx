'use client';

import {
    DatePickerTableBodyInstance,
    DatePickerTableHeadRowInstance,
    DatePickerValueChangeEvent,
    useDatePickerMonthData,
    useDatePickerMonthOptions,
    useDatePickerProps,
    useDatePickerYearOptions
} from '@primereact/types/shared/datepicker';
import { DatePicker } from 'primereact/datepicker';
import * as React from 'react';

export default function FluidDemo() {
    const [date, setDate] = React.useState<useDatePickerProps['value'] | null>(null);

    return (
        <div>
            <DatePicker value={date} fluid onValueChange={(event: DatePickerValueChangeEvent) => setDate(event.value)}>
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
                </DatePicker.Portal>
            </DatePicker>
        </div>
    );
}
