'use client';

import type {
    DatePickerContainerInstance,
    DatePickerTableBodyInstance,
    DatePickerValueChangeEvent,
    useDatePickerMonthData
} from '@primereact/types/shared/datepicker';
import { DatePicker } from 'primereact/datepicker';
import * as React from 'react';

const getRandomNumber = (min: number = 30, max: number = 100): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function InlineTemplateDemo() {
    const [value, setValue] = React.useState<Date | null>(null);
    const priceMapRef = React.useRef(new Map<string, number>());

    const getPrice = React.useCallback((year: number, month: number, day: number) => {
        const key = `${year}-${month}-${day}`;

        if (!priceMapRef.current.has(key)) {
            priceMapRef.current.set(key, getRandomNumber());
        }

        return priceMapRef.current.get(key)!;
    }, []);

    return (
        <div className="flex justify-center">
            <DatePicker value={value} numberOfMonths={2} onValueChange={(event: DatePickerValueChangeEvent) => setValue(event.value as Date)}>
                <DatePicker.Panel>
                    <DatePicker.Container>
                        {(instance: DatePickerContainerInstance) => {
                            const { datepicker } = instance;
                            const months = datepicker?.months as useDatePickerMonthData[];

                            return (
                                <>
                                    {months?.map((month, groupIndex) => {
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
                                                        {(instance: DatePickerTableBodyInstance) => {
                                                            const { datepicker } = instance;
                                                            const month = datepicker?.getIndexedMonth?.(groupIndex) as useDatePickerMonthData;

                                                            return (
                                                                <>
                                                                    {month.dates?.map((week) => (
                                                                        <DatePicker.TableBodyRow key={week[0].day + '' + week[0].month}>
                                                                            <>
                                                                                {week.map((date) => {
                                                                                    const today = new Date();

                                                                                    today.setHours(0, 0, 0, 0);
                                                                                    const currentDate = new Date(date.year, date.month, date.day);
                                                                                    const price =
                                                                                        currentDate >= today
                                                                                            ? getPrice(date.year, date.month, date.day)
                                                                                            : null;
                                                                                    const isLowPrice = price !== null && price < 50;
                                                                                    const selected = value && datepicker?.isDateEquals(value, date);

                                                                                    return (
                                                                                        <DatePicker.TableBodyCell
                                                                                            key={date.day + '' + date.month}
                                                                                            date={date}
                                                                                            className={`p-2 ${date.otherMonth ? 'invisible' : ''}`}
                                                                                            pt={{
                                                                                                day: `w-12 h-12 rounded-lg ${selected ? 'bg-primary' : !value && date.today ? 'bg-primary' : ''}`
                                                                                            }}
                                                                                        >
                                                                                            <div
                                                                                                className={`flex flex-col items-center gap-1 min-w-[50px]`}
                                                                                            >
                                                                                                <span
                                                                                                    className={`font-semibold text-base ${selected || (!value && date.today) ? 'text-white dark:text-surface-900' : ''}`}
                                                                                                >
                                                                                                    {date.day}
                                                                                                </span>
                                                                                                {price !== null && (
                                                                                                    <span
                                                                                                        className={`text-sm font-medium ${
                                                                                                            selected || (!value && date.today)
                                                                                                                ? 'text-white dark:text-surface-800'
                                                                                                                : isLowPrice
                                                                                                                  ? 'text-green-600'
                                                                                                                  : 'text-surface-600 dark:text-surface-400'
                                                                                                        }`}
                                                                                                    >
                                                                                                        ${price}
                                                                                                    </span>
                                                                                                )}
                                                                                            </div>
                                                                                        </DatePicker.TableBodyCell>
                                                                                    );
                                                                                })}
                                                                            </>
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
                </DatePicker.Panel>
            </DatePicker>
        </div>
    );
}
