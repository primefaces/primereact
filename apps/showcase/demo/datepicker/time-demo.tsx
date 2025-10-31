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
import { Label } from 'primereact/label';
import * as React from 'react';

export default function TimeDemo() {
    const [date1, setDate1] = React.useState<useDatePickerProps['value'] | null>(null);
    const [date2, setDate2] = React.useState<useDatePickerProps['value'] | null>(null);
    const [date3, setDate3] = React.useState<useDatePickerProps['value'] | null>(null);

    return (
        <>
            <div className="card flex flex-wrap gap-4">
                <div className="flex-auto">
                    <Label htmlFor="datepicker-12h" className="font-bold block mb-2">
                        12h Format
                    </Label>
                    <DatePicker
                        value={date1}
                        showTime
                        hourFormat="12"
                        fluid
                        onValueChange={(event: DatePickerValueChangeEvent) => setDate1(event.value)}
                    >
                        <DatePicker.Input id="datepicker-12h" />
                        <DatePicker.Portal>
                            <DatePicker.Panel>
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
                                <DatePicker.Time>
                                    <DatePicker.Picker type="hour">
                                        <DatePicker.Increment />
                                        <DatePicker.Hour />
                                        <DatePicker.Decrement />
                                    </DatePicker.Picker>
                                    <DatePicker.SeparatorContainer>
                                        <DatePicker.Separator />
                                    </DatePicker.SeparatorContainer>
                                    <DatePicker.Picker type="minute">
                                        <DatePicker.Increment />
                                        <DatePicker.Minute />
                                        <DatePicker.Decrement />
                                    </DatePicker.Picker>
                                    <DatePicker.SeparatorContainer>
                                        <DatePicker.Separator />
                                    </DatePicker.SeparatorContainer>
                                    <DatePicker.Picker type="ampm">
                                        <DatePicker.Increment />
                                        <DatePicker.AmPm />
                                        <DatePicker.Decrement />
                                    </DatePicker.Picker>
                                </DatePicker.Time>
                            </DatePicker.Panel>
                        </DatePicker.Portal>
                    </DatePicker>
                </div>
                <div className="flex-auto">
                    <Label htmlFor="datepicker-24h" className="font-bold block mb-2">
                        24h Format
                    </Label>
                    <DatePicker
                        value={date2}
                        showTime
                        hourFormat="24"
                        fluid
                        onValueChange={(event: DatePickerValueChangeEvent) => setDate2(event.value)}
                    >
                        <DatePicker.Input id="datepicker-24h" />
                        <DatePicker.Portal>
                            <DatePicker.Panel>
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
                                <DatePicker.Time>
                                    <DatePicker.Picker type="hour">
                                        <DatePicker.Increment />
                                        <DatePicker.Hour />
                                        <DatePicker.Decrement />
                                    </DatePicker.Picker>
                                    <DatePicker.SeparatorContainer>
                                        <DatePicker.Separator />
                                    </DatePicker.SeparatorContainer>
                                    <DatePicker.Picker type="minute">
                                        <DatePicker.Increment />
                                        <DatePicker.Minute />
                                        <DatePicker.Decrement />
                                    </DatePicker.Picker>
                                </DatePicker.Time>
                            </DatePicker.Panel>
                        </DatePicker.Portal>
                    </DatePicker>
                </div>
                <div className="flex-auto">
                    <Label htmlFor="datepicker-timeonly" className="font-bold block mb-2">
                        Time Only
                    </Label>
                    <DatePicker value={date3} timeOnly fluid onValueChange={(event: DatePickerValueChangeEvent) => setDate3(event.value)}>
                        <DatePicker.Input id="datepicker-timeonly" />
                        <DatePicker.Portal>
                            <DatePicker.Panel>
                                <DatePicker.Time>
                                    <DatePicker.Picker type="hour">
                                        <DatePicker.Increment />
                                        <DatePicker.Hour />
                                        <DatePicker.Decrement />
                                    </DatePicker.Picker>
                                    <DatePicker.SeparatorContainer>
                                        <DatePicker.Separator />
                                    </DatePicker.SeparatorContainer>
                                    <DatePicker.Picker type="minute">
                                        <DatePicker.Increment />
                                        <DatePicker.Minute />
                                        <DatePicker.Decrement />
                                    </DatePicker.Picker>
                                </DatePicker.Time>
                            </DatePicker.Panel>
                        </DatePicker.Portal>
                    </DatePicker>
                </div>
            </div>
        </>
    );
}
