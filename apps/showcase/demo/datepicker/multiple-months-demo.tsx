'use client';

import type {
    DatePickerContainerInstance,
    DatePickerValueChangeEvent,
    useDatePickerMonthData,
    useDatePickerMonthOptions,
    useDatePickerProps,
    useDatePickerYearOptions
} from '@primereact/types/shared/datepicker';
import { DatePicker } from 'primereact/datepicker';
import * as React from 'react';

export default function MultipleMonthsDemo() {
    const [date, setDate] = React.useState<useDatePickerProps['value'] | null>(null);

    return (
        <div className="flex justify-center">
            <DatePicker.Root value={date} numberOfMonths={2} onValueChange={(event: DatePickerValueChangeEvent) => setDate(event.value)}>
                <DatePicker.Input />
                <DatePicker.Portal>
                    <DatePicker.Container>
                        {(instance: DatePickerContainerInstance) => {
                            const { datepicker } = instance;
                            const months = datepicker?.months as useDatePickerMonthData[];

                            return (
                                <>
                                    {months?.map((_, groupIndex) => {
                                        const month = datepicker?.getIndexedMonth?.(groupIndex) as useDatePickerMonthData;

                                        return (
                                            <DatePicker.Calendar key={groupIndex}>
                                                {groupIndex === 0 && (
                                                    <>
                                                        <DatePicker.Header>
                                                            <DatePicker.Prev />
                                                            <DatePicker.Title>
                                                                <DatePicker.SelectMonth>
                                                                    {datepicker?.getMonthName?.(month.month)}
                                                                </DatePicker.SelectMonth>
                                                                <DatePicker.SelectYear>{month.year}</DatePicker.SelectYear>
                                                                <DatePicker.Decade />
                                                            </DatePicker.Title>
                                                        </DatePicker.Header>
                                                    </>
                                                )}
                                                {groupIndex === 1 && (
                                                    <>
                                                        <DatePicker.Header>
                                                            <DatePicker.Title>
                                                                <DatePicker.SelectMonth>
                                                                    {datepicker?.getMonthName?.(month.month)}
                                                                </DatePicker.SelectMonth>
                                                                <DatePicker.SelectYear>{month.year}</DatePicker.SelectYear>
                                                                <DatePicker.Decade />
                                                            </DatePicker.Title>
                                                            <DatePicker.Next />
                                                        </DatePicker.Header>
                                                    </>
                                                )}
                                                <DatePicker.Table>
                                                    <DatePicker.TableHead>
                                                        <DatePicker.TableHeadRow>
                                                            {() => {
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
                                                        {() => {
                                                            return (
                                                                <>
                                                                    {month.dates?.map((week) => (
                                                                        <DatePicker.TableBodyRow key={week[0].day + '' + week[0].month}>
                                                                            <>
                                                                                {week.map((date) => (
                                                                                    <DatePicker.TableBodyCell
                                                                                        key={date.day + '' + date.month}
                                                                                        date={date}
                                                                                    >
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
                                                        {() => {
                                                            const months = datepicker?.monthPickerValues as useDatePickerMonthOptions[];

                                                            return (
                                                                <>
                                                                    {Array.from({ length: 4 }).map((_, rowIndex) => (
                                                                        <DatePicker.TableBodyRow key={`month-row-${rowIndex}`}>
                                                                            {months.slice(rowIndex * 3, (rowIndex + 1) * 3).map((month, colIndex) => {
                                                                                const monthIndex = rowIndex * 3 + colIndex;

                                                                                return (
                                                                                    <DatePicker.TableBodyCell
                                                                                        key={monthIndex}
                                                                                        month={month}
                                                                                        index={monthIndex}
                                                                                    >
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
                                                        {() => {
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
                                        );
                                    })}
                                </>
                            );
                        }}
                    </DatePicker.Container>
                </DatePicker.Portal>
            </DatePicker.Root>
        </div>
    );
}
