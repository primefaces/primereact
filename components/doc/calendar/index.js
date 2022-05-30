import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';

const CalendarDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

export class CalendarDemo extends Component {

    constructor(props) {
        super(props);

        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        let nextYear = (nextMonth === 0) ? year + 1 : year;

        this.state = {
            date1: null,
            date2: null,
            date3: null,
            date4: null,
            date5: null,
            date6: null,
            date7: null,
            date8: null,
            date9: null,
            date10: null,
            date11: null,
            date12: null,
            date13: null,
            date14: null,
            dates1: null,
            dates2: null,
        };

        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);

        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        this.invalidDates = [today];

        this.dateTemplate = this.dateTemplate.bind(this);
        this.monthNavigatorTemplate = this.monthNavigatorTemplate.bind(this);
        this.yearNavigatorTemplate = this.yearNavigatorTemplate.bind(this);
        this.onVisibleChange = this.onVisibleChange.bind(this);

        addLocale('es', {
            firstDayOfWeek: 1,
            dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
            dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
            dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
            monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
            monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
            today: 'Hoy',
            clear: 'Limpiar'
        });
    }

    dateTemplate(date) {
        if (date.day > 10 && date.day < 15) {
            return (
                <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
            );
        }

        return date.day;
    }

    render() {
        return (
            <div>
                <div className="card">
                    <h5>Popup</h5>
                    <div className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="basic">Basic</label>
                            <Calendar id="basic" value={this.state.date1} onChange={(e) => this.setState({ date1: e.value })} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="basic">Date Format</label>
                            <Calendar id="basic" value={this.state.date2} onChange={(e) => this.setState({ date2: e.value })} dateFormat="mm-dd-yy" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="icon">Icon</label>
                            <Calendar id="icon" value={this.state.date3} onChange={(e) => this.setState({ date3: e.value })} showIcon />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="minmax">Min / Max</label>
                            <Calendar id="minmax" value={this.state.date4} onChange={(e) => this.setState({ date4: e.value })} minDate={minDate} maxDate={maxDate} readOnlyInput />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="disableddays">Disabled Days</label>
                            <Calendar id="disableddays" value={this.state.date5} onChange={(e) => this.setState({ date5: e.value })} disabledDates={invalidDates} disabledDays={[0, 6]} readOnlyInput />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="multiple">Multiple</label>
                            <Calendar id="multiple" value={this.state.dates1} onChange={(e) => this.setState({ dates1: e.value })} selectionMode="multiple" readOnlyInput />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="range">Range</label>
                            <Calendar id="range" value={this.state.dates2} onChange={(e) => this.setState({ dates2: e.value })} selectionMode="range" readOnlyInput />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="buttonbar">Button Bar</label>
                            <Calendar id="buttonbar" value={this.state.date6} onChange={(e) => this.setState({ date6: e.value })} showButtonBar />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="time24">Time / 24h</label>
                            <Calendar id="time24" value={this.state.date7} onChange={(e) => this.setState({ date7: e.value })} showTime showSeconds />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="time12">Time / 12h</label>
                            <Calendar id="time12" value={this.state.date8} onChange={(e) => this.setState({ date8: e.value })} timeOnly hourFormat="12" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="monthpicker">Month Picker</label>
                            <Calendar id="monthpicker" value={this.state.date9} onChange={(e) => this.setState({ date9: e.value })} view="month" dateFormat="mm/yy" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="yearpicker">Year Picker</label>
                            <Calendar id="yearpicker" value={this.state.date10} onChange={(e) => this.setState({ date10: e.value })} view="year" dateFormat="yy" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="multiplemonths">Multiple Months</label>
                            <Calendar id="multiplemonths" value={this.statedate11} onChange={(e) => this.setState({ date11: e.value })} numberOfMonths={3}/>
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="datetemplate">Date Template</label>
                            <Calendar id="datetemplate" value={this.state.date12} onChange={(e) => this.setState({ date12: e.value })} dateTemplate={dateTemplate} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="touchUI">TouchUI</label>
                            <Calendar id="touchUI" value={this.state.date13} onChange={(e) => this.setState({ date13: e.value })} touchUI />
                        </div>
                    </div>

                    <h5>Inline</h5>
                    <Calendar value={this.state.date14} onChange={(e) => this.setState({ date14: e.value })} inline showWeek />
                </div>
            </div>
        );
    }
}
                `
        },
        'hooks': {
            tabName: 'Hooks Source',
            content: `
import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

const CalendarDemo = () => {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;

    const [date1, setDate1] = useState(null);
    const [date2, setDate2] = useState(null);
    const [date3, setDate3] = useState(null);
    const [date4, setDate4] = useState(null);
    const [date5, setDate5] = useState(null);
    const [date6, setDate6] = useState(null);
    const [date7, setDate7] = useState(null);
    const [date8, setDate8] = useState(null);
    const [date9, setDate9] = useState(null);
    const [date10, setDate10] = useState(null);
    const [date11, setDate11] = useState(null);
    const [date12, setDate12] = useState(null);
    const [date13, setDate13] = useState(null);
    const [date14, setDate14] = useState(null);
    const [dates1, setDates1] = useState(null);
    const [dates2, setDates2] = useState(null);

    let minDate = new Date();
    minDate.setMonth(prevMonth);
    minDate.setFullYear(prevYear);

    let maxDate = new Date();
    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);

    let invalidDates = [today];

    addLocale('es', {
        firstDayOfWeek: 1,
        dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
        clear: 'Limpiar'
    });

    const dateTemplate = (date) => {
        if (date.day > 10 && date.day < 15) {
            return (
                <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
            );
        }

        return date.day;
    }

    return (
        <div>
            <div className="card">
                <h5>Popup</h5>
                <div className="p-fluid grid formgrid">
                    <div className="field col-12 md:col-4">
                        <label htmlFor="basic">Basic</label>
                        <Calendar id="basic" value={date1} onChange={(e) => setDate1(e.value)} />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="basic">Date Format</label>
                        <Calendar id="basic" value={date2} onChange={(e) => setDate2(e.value)} dateFormat="mm-dd-yy" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="icon">Icon</label>
                        <Calendar id="icon" value={date3} onChange={(e) => setDate3(e.value)} showIcon />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="minmax">Min / Max</label>
                        <Calendar id="minmax" value={date4} onChange={(e) => setDate4(e.value)} minDate={minDate} maxDate={maxDate} readOnlyInput />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="disableddays">Disabled Days</label>
                        <Calendar id="disableddays" value={date5} onChange={(e) => setDate5(e.value)} disabledDates={invalidDates} disabledDays={[0, 6]} readOnlyInput />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="multiple">Multiple</label>
                        <Calendar id="multiple" value={dates1} onChange={(e) => setDates1(e.value)} selectionMode="multiple" readOnlyInput />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="range">Range</label>
                        <Calendar id="range" value={dates2} onChange={(e) => setDates2(e.value)} selectionMode="range" readOnlyInput />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="buttonbar">Button Bar</label>
                        <Calendar id="buttonbar" value={date6} onChange={(e) => setDate6(e.value)} showButtonBar />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="time24">Time / 24h</label>
                        <Calendar id="time24" value={date7} onChange={(e) => setDate7(e.value)} showTime showSeconds />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="time12">Time / 12h</label>
                        <Calendar id="time12" value={date8} onChange={(e) => setDate8(e.value)} timeOnly hourFormat="12" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="monthpicker">Month Picker</label>
                        <Calendar id="monthpicker" value={date9} onChange={(e) => setDate9(e.value)} view="month" dateFormat="mm/yy" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="yearpicker">Year Picker</label>
                        <Calendar id="yearpicker" value={date10} onChange={(e) => setDate10(e.value)} view="year" dateFormat="yy" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="multiplemonths">Multiple Months</label>
                        <Calendar id="multiplemonths" value={date11} onChange={(e) => setDate11(e.value)} numberOfMonths={3}/>
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="datetemplate">Date Template</label>
                        <Calendar id="datetemplate" value={date12} onChange={(e) => setDate12(e.value)} dateTemplate={dateTemplate} />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="touchUI">TouchUI</label>
                        <Calendar id="touchUI" value={date13} onChange={(e) => setDate13(e.value)} touchUI />
                    </div>
                </div>

                <h5>Inline</h5>
                <Calendar value={date14} onChange={(e) => setDate14(e.value)} inline showWeek />
            </div>
        </div>
    );
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

const CalendarDemo = () => {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;

    const [date1, setDate1] = useState<Date | Date[] | undefined>(undefined);
    const [date2, setDate2] = useState<Date | Date[] | undefined>(undefined);
    const [date3, setDate3] = useState<Date | Date[] | undefined>(undefined);
    const [date4, setDate4] = useState<Date | Date[] | undefined>(undefined);
    const [date5, setDate5] = useState<Date | Date[] | undefined>(undefined);
    const [date6, setDate6] = useState<Date | Date[] | undefined>(undefined);
    const [date7, setDate7] = useState<Date | Date[] | undefined>(undefined);
    const [date8, setDate8] = useState<Date | Date[] | undefined>(undefined);
    const [date9, setDate9] = useState<Date | Date[] | undefined>(undefined);
    const [date10, setDate10] = useState<Date | Date[] | undefined>(undefined);
    const [date11, setDate11] = useState<Date | Date[] | undefined>(undefined);
    const [date12, setDate12] = useState<Date | Date[] | undefined>(undefined);
    const [date13, setDate13] = useState<Date | Date[] | undefined>(undefined);
    const [date14, setDate14] = useState<Date | Date[] | undefined>(undefined);
    const [dates1, setDates1] = useState<Date | Date[] | undefined>(undefined);
    const [dates2, setDates2] = useState<Date | Date[] | undefined>(undefined);

    let minDate = new Date();
    minDate.setMonth(prevMonth);
    minDate.setFullYear(prevYear);

    let maxDate = new Date();
    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);

    let invalidDates = [today];

    addLocale('es', {
        firstDayOfWeek: 1,
        dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
        clear: 'Claro'
    });

    const dateTemplate = (date: any) => {
        if (date.day > 10 && date.day < 15) {
            return (
                <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
            );
        }

        return date.day;
    }

    return (
        <div>
            <div className="card">
                <h5>Popup</h5>
                <div className="p-fluid grid formgrid">
                    <div className="field col-12 md:col-4">
                        <label htmlFor="basic">Basic</label>
                        <Calendar id="basic" value={date1} onChange={(e) => setDate1(e.value)} />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="basic">Date Format</label>
                        <Calendar id="basic" value={date2} onChange={(e) => setDate2(e.value)} dateFormat="mm-dd-yy" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="icon">Icon</label>
                        <Calendar id="icon" value={date3} onChange={(e) => setDate3(e.value)} showIcon />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="minmax">Min / Max</label>
                        <Calendar id="minmax" value={date4} onChange={(e) => setDate4(e.value)} minDate={minDate} maxDate={maxDate} readOnlyInput />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="disableddays">Disabled Days</label>
                        <Calendar id="disableddays" value={date5} onChange={(e) => setDate5(e.value)} disabledDates={invalidDates} disabledDays={[0, 6]} readOnlyInput />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="multiple">Multiple</label>
                        <Calendar id="multiple" value={dates1} onChange={(e) => setDates1(e.value)} selectionMode="multiple" readOnlyInput />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="range">Range</label>
                        <Calendar id="range" value={dates2} onChange={(e) => setDates2(e.value)} selectionMode="range" readOnlyInput />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="buttonbar">Button Bar</label>
                        <Calendar id="buttonbar" value={date6} onChange={(e) => setDate6(e.value)} showButtonBar />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="time24">Time / 24h</label>
                        <Calendar id="time24" value={date7} onChange={(e) => setDate7(e.value)} showTime showSeconds />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="time12">Time / 12h</label>
                        <Calendar id="time12" value={date8} onChange={(e) => setDate8(e.value)} timeOnly hourFormat="12" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="monthpicker">Month Picker</label>
                        <Calendar id="monthpicker" value={date9} onChange={(e) => setDate9(e.value)} view="month" dateFormat="mm/yy" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="yearpicker">Year Picker</label>
                        <Calendar id="yearpicker" value={date10} onChange={(e) => setDate10(e.value)} view="year" dateFormat="yy" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="multiplemonths">Multiple Months</label>
                        <Calendar id="multiplemonths" value={date11} onChange={(e) => setDate11(e.value)} numberOfMonths={3}/>
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="datetemplate">Date Template</label>
                        <Calendar id="datetemplate" value={date12} onChange={(e) => setDate12(e.value)} dateTemplate={dateTemplate} />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="touchUI">TouchUI</label>
                        <Calendar id="touchUI" value={date13} onChange={(e) => setDate13(e.value)} touchUI />
                    </div>
                </div>

                <h5>Inline</h5>
                <Calendar value={date14} onChange={(e) => setDate14(e.value)} inline showWeek />
            </div>
        </div>
    );
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/calendar/calendar.min.js"></script>`,
            content: `
const { useState, useRef } = React;
const { Calendar } = primereact.calendar;
const { addLocale } = primereact.api;

const CalendarDemo = () => {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;

    const [date1, setDate1] = useState(null);
    const [date2, setDate2] = useState(null);
    const [date3, setDate3] = useState(null);
    const [date4, setDate4] = useState(null);
    const [date5, setDate5] = useState(null);
    const [date6, setDate6] = useState(null);
    const [date7, setDate7] = useState(null);
    const [date8, setDate8] = useState(null);
    const [date9, setDate9] = useState(null);
    const [date10, setDate10] = useState(null);
    const [date11, setDate11] = useState(null);
    const [date12, setDate12] = useState(null);
    const [date13, setDate13] = useState(null);
    const [date14, setDate14] = useState(null);
    const [dates1, setDates1] = useState(null);
    const [dates2, setDates2] = useState(null);

    let minDate = new Date();
    minDate.setMonth(prevMonth);
    minDate.setFullYear(prevYear);

    let maxDate = new Date();
    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);

    let invalidDates = [today];

    addLocale('es', {
        firstDayOfWeek: 1,
        dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
        clear: 'Claro'
    });

    const dateTemplate = (date) => {
        if (date.day > 10 && date.day < 15) {
            return (
                <strong style={{ textDecoration: 'line-through' }}>{date.day}</strong>
            );
        }

        return date.day;
    }

    return (
        <div>
            <div className="card">
                <h5>Popup</h5>
                <div className="p-fluid grid formgrid">
                    <div className="field col-12 md:col-4">
                        <label htmlFor="basic">Basic</label>
                        <Calendar id="basic" value={date1} onChange={(e) => setDate1(e.value)} />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="basic">Date Format</label>
                        <Calendar id="basic" value={date2} onChange={(e) => setDate2(e.value)} dateFormat="mm-dd-yy" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="icon">Icon</label>
                        <Calendar id="icon" value={date3} onChange={(e) => setDate3(e.value)} showIcon />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="minmax">Min / Max</label>
                        <Calendar id="minmax" value={date4} onChange={(e) => setDate4(e.value)} minDate={minDate} maxDate={maxDate} readOnlyInput />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="disableddays">Disabled Days</label>
                        <Calendar id="disableddays" value={date5} onChange={(e) => setDate5(e.value)} disabledDates={invalidDates} disabledDays={[0, 6]} readOnlyInput />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="multiple">Multiple</label>
                        <Calendar id="multiple" value={dates1} onChange={(e) => setDates1(e.value)} selectionMode="multiple" readOnlyInput />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="range">Range</label>
                        <Calendar id="range" value={dates2} onChange={(e) => setDates2(e.value)} selectionMode="range" readOnlyInput />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="buttonbar">Button Bar</label>
                        <Calendar id="buttonbar" value={date6} onChange={(e) => setDate6(e.value)} showButtonBar />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="time24">Time / 24h</label>
                        <Calendar id="time24" value={date7} onChange={(e) => setDate7(e.value)} showTime showSeconds />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="time12">Time / 12h</label>
                        <Calendar id="time12" value={date8} onChange={(e) => setDate8(e.value)} timeOnly hourFormat="12" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="monthpicker">Month Picker</label>
                        <Calendar id="monthpicker" value={date9} onChange={(e) => setDate9(e.value)} view="month" dateFormat="mm/yy" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="yearpicker">Year Picker</label>
                        <Calendar id="yearpicker" value={date10} onChange={(e) => setDate10(e.value)} view="year" dateFormat="yy" />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="multiplemonths">Multiple Months</label>
                        <Calendar id="multiplemonths" value={date11} onChange={(e) => setDate11(e.value)} numberOfMonths={3}/>
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="datetemplate">Date Template</label>
                        <Calendar id="datetemplate" value={date12} onChange={(e) => setDate12(e.value)} dateTemplate={dateTemplate} />
                    </div>
                    <div className="field col-12 md:col-4">
                        <label htmlFor="touchUI">TouchUI</label>
                        <Calendar id="touchUI" value={date13} onChange={(e) => setDate13(e.value)} touchUI />
                    </div>
                </div>

                <h5>Inline</h5>
                <Calendar value={date14} onChange={(e) => setDate14(e.value)} inline showWeek />
            </div>
        </div>
    );
}
                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
                    <CodeHighlight lang="js">
                        {`
import { Calendar } from 'primereact/calendar';
`}
                    </CodeHighlight>

                    <h5>Import via CDN</h5>
                    <CodeHighlight>
                        {`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/calendar/calendar.min.js"></script>
`}
                    </CodeHighlight>

                    <h5>Getting Started</h5>
                    <p>Calendar is used a controlled input component with <i>value</i> and <i>onChange</i> properties.</p>

                    <CodeHighlight>
                        {`
<Calendar value={date} onChange={(e) => setDate(e.value)}></Calendar>
`}
                    </CodeHighlight>

                    <h5>Popup and Inline</h5>
                    <p>Calendar is displayed in a popup by default whereas <i>inline</i> property needs to be enabled for inline mode.</p>

                    <CodeHighlight>
                        {`
<Calendar inline value={date} onChange={(e) => setDate(e.value)}></Calendar>
`}
                    </CodeHighlight>

                    <h5>View Date</h5>
                    <p><i>viewDate</i> defines the date whose month and year are used to display the calendar. By default calendar uses value to render the view and falls back to today's date when value is not defined. In case you'd like
                        to display a different month/year use <i>viewDate</i>. The usage of this property can either be controlled or uncontrolled. In controlled mode, <i>onViewDateChange</i> is required to manage the viewDate whereas in
                        uncontrolled mode, viewDate is used only once in initial rendering and ignored in updates. If you'd like to change the displayed month/year programmatically, use the onViewDateChange in controlled mode.</p>
                    <CodeHighlight>
                        {`
<Calendar value={dates} onChange={(e) => setDate(e.value)} viewDate={viewDate} onViewDateChange={(e) => setViewDate(e.value)}></Calendar>
`}
                    </CodeHighlight>

                    <h5>Selection Mode</h5>
                    <p>Calendar offers "single" (default), "multiple" and "range" selection types controlled via the <i>selectionMode</i> property. In single, mode the bound value should be an array whereas in multiple
                        case an array is required. Third alternative is the range mode that allows selecting a range based on an array of two values where first value is the start date and second value
                        is the end date. <strong>Note:</strong> Time picker is supported in range mode but not in multiple mode.</p>
                    <CodeHighlight>
                        {`
<Calendar selectionMode="multiple" value={dates} onChange={(e) => setDates(e.value)}></Calendar>
`}
                    </CodeHighlight>

                    <h5>DateFormat</h5>
                    <p>Default date format is "mm/dd/yy" which can be customized using the <i>dateFormat</i> property.</p>

                    <CodeHighlight>
                        {`
<Calendar dateFormat="dd/mm/yy" value={date} onChange={(e) => setDate(e.value)}></Calendar>
`}
                    </CodeHighlight>

                    <p>Following options can be a part of the format.</p>
                    <ul>
                        <li>d - day of month (no leading zero)</li>
                        <li>dd - day of month (two digit)</li>
                        <li>o - day of the year (no leading zeros)</li>
                        <li>oo - day of the year (three digit)</li>
                        <li>D - day name short</li>
                        <li>DD - day name long</li>
                        <li>m - month of year (no leading zero)</li>
                        <li>mm - month of year (two digit)</li>
                        <li>M - month name short</li>
                        <li>MM - month name long</li>
                        <li>y - year (two digit)</li>
                        <li>yy - year (four digit)</li>
                        <li>@ - Unix timestamp (ms since 01/01/1970)</li>
                        <li> ! - Windows ticks (100ns since 01/01/0001)</li>
                        <li>'...' - literal text</li>
                        <li>'' - single quote</li>
                        <li>anything else - literal text</li>
                    </ul>

                    <h5>Locale</h5>
                    <p>Translations for the calendar are defined with the <Link href="/locale">Locale API</Link>.</p>

                    <h5>Time</h5>
                    <p>TimePicker is enabled with <i>showTime</i> property and <i>hourFormat</i> is used to select the 24 (default) or 12 hour mode. Optionally enabling <i>timeOnly</i>
                        displays a calendare with time controls only.</p>

                    <CodeHighlight>
                        {`
<Calendar showTime hourFormat="12" value={date1} onChange={(e) => setDate1(e.value)}></Calendar>
<Calendar showTime hourFormat="24" value={date2} onChange={(e) => setDate2(e.value)}></Calendar>
<Calendar timeOnly showTime hourFormat="24" value={date3} onChange={(e) => setDate3(e.value)}></Calendar>
`}
                    </CodeHighlight>

                    <h5>Date Restriction</h5>
                    <p>To disable entering dates manually, set <i>readOnlyInput</i> to true and to restrict selectable date ranges use <i>minDate</i> and <i>maxDate</i> options.</p>

                    <CodeHighlight>
                        {`
<Calendar minDate={minDate} maxDate={maxDate} readOnlyInput value={date} onChange={(e) => setDate(e.value)}></Calendar>
`}
                    </CodeHighlight>

                    <h5>Disable specific dates and/or days</h5>
                    <p>Specific dates or days can be disabled as well, in this case set <i>readOnlyInput</i> to true and to restrict selectable dates use <i>disabledDates</i> and/or <i>disabledDays</i> options. <i>disabledDates</i>
                        property should be an array of dates and <i>disabledDays</i> should be an array of disabled weekdays.</p>

                    <CodeHighlight>
                        {`
<Calendar disabledDates={invalidDates} disabledDays={[0,6]} readOnlyInput value={date} onChange={(e) => setDate(e.value)}></Calendar>
`}
                    </CodeHighlight>

                    <h5>Button Bar</h5>
                    <p>Button bar displays today and clear buttons and activated using the <i>showButtonBar</i> property.</p>
                    <CodeHighlight>
                        {`
<Calendar value={date} onChange={(e) => setDate(e.value)} showButtonBar></Calendar>
`}
                    </CodeHighlight>

                    <h5>Multiple Months</h5>
                    <p>Displaying multiple months is enabled by setting <i>numberOfMonths</i> property to a value greater than 1.</p>
                    <CodeHighlight>
                        {`
<Calendar value={date} onChange={(e) => setDate(e.value)} numberOfMonths={3}></Calendar>
`}
                    </CodeHighlight>

                    <h5>Date Template</h5>
                    <p>Date cell contents can be templated using the <i>dateTemplate</i> property that returns the content of a cell. This is a handy feature to highlight specific dates. Note that the
                        variable passed to the template is not a date instance but a metadata object to represent a Date with "day", "month", "year", "otherMonth", "today" and "selectable" properties to represent the date. Example below changes the styling of dates between 10 and 15.</p>

                    <CodeHighlight>
                        {`
<Calendar value={date} onChange={(e) => setDate(e.value)} dateTemplate={dateTemplate} />
`}
                    </CodeHighlight>

                    <CodeHighlight lang="js">
                        {`
dateTemplate(date) {
    if (date.day > 10 && date.day < 15) {
        return (
            <div style={{backgroundColor: '#1dcbb3', color: '#ffffff', fontWeight: 'bold', borderRadius: '50%', width: '2em', height: '2em', lineHeight: '2em', padding: 0}}>{date.day}</div>
        );
    }
    else {
        return date.day;
    }
}
`}
                    </CodeHighlight>

                    <h5>Header and Footer</h5>
                    <p>The <i>headerTemplate</i> and <i>footerTemplate</i> properties are available to place custom content at these sections.</p>
                    <CodeHighlight>
                        {`
<Calendar value={date} onChange={(e) => setDate(e.value)} headerTemplate={() => <Button label="Custom Button" />} footerTemplate={() => <div>Footer Content</div>} />
`}
                    </CodeHighlight>

                    <h5>Month and Year Navigator</h5>
                    <p>Navigators are used to quickly change the displayed month and year using dropdowns. Enabling <i>monthNavigator</i> displays a dropdown with months whereas <i>yearNavigator</i> along with <i>yearRange</i> displays
                        available years. Format of the <i>yearRange</i> is "startYear:endYear".</p>

                    <CodeHighlight>
                        {`
<Calendar value={date} onChange={(e) => setDate(e.value)} monthNavigator yearNavigator yearRange="2010:2030" />
`}
                    </CodeHighlight>
                    <h5>Navigator Templates</h5>
                    <p>The <i>monthNavigatorTemplate</i> and <i>yearNavigatorTemplate</i> properties are available to place custom content at the navigator sections.</p>
                    <CodeHighlight>
                        {`
<Calendar value={date} onChange={(e) => setDate(e.value)} monthNavigator yearNavigator yearRange="2010:2030" monthNavigatorTemplate={this.monthNavigatorTemplate} />
`}
                    </CodeHighlight>

                    <CodeHighlight lang="js">
                        {`
const monthNavigatorTemplate = (options) => {
    // options.onChange: Change event for the default element.
    // options.className: Style class of the default element.
    // options.value: Selected value.
    // options.names: Names of options.
    // options.options: Options as SelectItem API.
    // options.element: Default element created by the component.
    // options.props: component props.
}
`}
                    </CodeHighlight>

                    <h5>Month Picker</h5>
                    <p>Month picker is used to select month and year only without the date, set <i>view</i> mode as "month" to activate month picker.</p>
                    <CodeHighlight>
                        {`
<Calendar value={date} onChange={(e) => setDate(e.value)} view="month" dateFormat="mm/yy" yearNavigator yearRange="2010:2030"/>
`}
                    </CodeHighlight>

                    <h5>Touch UI</h5>
                    <p>Touch UI mode displays the calendar overlay at the center of the screen as optimized for touch devices.</p>
                    <CodeHighlight>
                        {`
<Calendar value={date} onChange={(e) => setDate(e.value)} touchUI />
`}
                    </CodeHighlight>


                    <h5>Properties</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>id</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Unique identifier of the element.</td>
                                </tr>
                                <tr>
                                    <td>name</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Name of the input element.</td>
                                </tr>
                                <tr>
                                    <td>value</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Value of the component.</td>
                                </tr>
                                <tr>
                                    <td>visible</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Specifies the visibility of the overlay.</td>
                                </tr>
                                <tr>
                                    <td>viewDate</td>
                                    <td>date</td>
                                    <td>null</td>
                                    <td>Date instance whose month and year are used to display the calendar.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Inline style of the element.</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the element.</td>
                                </tr>
                                <tr>
                                    <td>inline</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When enabled, displays the calendar as inline instead of an overlay.</td>
                                </tr>
                                <tr>
                                    <td>inputId</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Identifier of the input element.</td>
                                </tr>
                                <tr>
                                    <td>inputStyle</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the input element.</td>

                                </tr>
                                <tr>
                                    <td>inputClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the input element.</td>
                                </tr>
                                <tr>
                                    <td>inputMode</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>HTML inputmode attribute of input.</td>
                                </tr>
                                <tr>
                                    <td>required</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When present, it specifies that an input field must be filled out before submitting the form.</td>
                                </tr>
                                <tr>
                                    <td>readOnlyInput</td>
                                    <td>boolean</td>
                                    <td>null</td>
                                    <td>When specified, prevents entering the date manually with keyboard.</td>
                                </tr>
                                <tr>
                                    <td>keepInvalid</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Keep invalid value when input blur.</td>
                                </tr>
                                <tr>
                                    <td>mask</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Mask pattern for input element.</td>
                                </tr>
                                <tr>
                                    <td>disabled</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When specified, disables the component.</td>
                                </tr>
                                <tr>
                                    <td>tabIndex</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Index of the element in tabbing order.</td>
                                </tr>
                                <tr>
                                    <td>placeholder</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Placeholder text for the input.</td>
                                </tr>
                                <tr>
                                    <td>showIcon</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When enabled, displays a button with icon next to input.</td>
                                </tr>
                                <tr>
                                    <td>icon</td>
                                    <td>string</td>
                                    <td>pi pi-calendar</td>
                                    <td>Icon of the calendar button.</td>
                                </tr>
                                <tr>
                                    <td>iconPos</td>
                                    <td>string</td>
                                    <td>right</td>
                                    <td>Icon position of the calendar button. Valid values is 'left' and 'right'.</td>
                                </tr>
                                <tr>
                                    <td>showOnFocus</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>When disabled, datepicker will not be visible with input focus.</td>
                                </tr>
                                <tr>
                                    <td>numberOfMonths</td>
                                    <td>number</td>
                                    <td>1</td>
                                    <td>Number of months to display.</td>
                                </tr>
                                <tr>
                                    <td>view</td>
                                    <td>string</td>
                                    <td>date</td>
                                    <td>Type of view to display, valid values are "date" for datepicker and "month" for month picker.</td>
                                </tr>
                                <tr>
                                    <td>touchUI</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When enabled, calendar overlay is displayed as optimized for touch devices.</td>
                                </tr>
                                <tr>
                                    <td>showTime</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether to display timepicker.</td>
                                </tr>
                                <tr>
                                    <td>timeOnly</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether to display timepicker only.</td>
                                </tr>
                                <tr>
                                    <td>showSeconds</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether to show the seconds in time picker.</td>
                                </tr>
                                <tr>
                                    <td>showMillisec</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether to show the milliseconds in time picker.</td>
                                </tr>
                                <tr>
                                    <td>hourFormat</td>
                                    <td>string</td>
                                    <td>24</td>
                                    <td>Specifies 12 or 24 hour format.</td>
                                </tr>
                                <tr>
                                    <td>locale</td>
                                    <td>string</td>
                                    <td>en</td>
                                    <td>Used to display the values ​​of the locale object defined in the Locale API</td>
                                </tr>
                                <tr>
                                    <td>stepHour</td>
                                    <td>number</td>
                                    <td>1</td>
                                    <td>Hours to change per step.</td>
                                </tr>
                                <tr>
                                    <td>stepMinute</td>
                                    <td>number</td>
                                    <td>1</td>
                                    <td>Minutes to change per step.</td>
                                </tr>
                                <tr>
                                    <td>stepSecond</td>
                                    <td>number</td>
                                    <td>1</td>
                                    <td>Seconds to change per step.</td>
                                </tr>
                                <tr>
                                    <td>stepMillisec</td>
                                    <td>number</td>
                                    <td>1</td>
                                    <td>Milliseconds to change per step.</td>
                                </tr>
                                <tr>
                                    <td>shortYearCutoff</td>
                                    <td>string</td>
                                    <td>+10</td>
                                    <td>The cutoff year for determining the century for a date.</td>
                                </tr>
                                <tr>
                                    <td>hideOnDateTimeSelect</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether to hide the overlay on date selection when showTime is enabled.</td>
                                </tr>
                                <tr>
                                    <td>showWeek</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>When enabled, calendar will show week numbers.</td>
                                </tr>
                                <tr>
                                    <td>dateFormat</td>
                                    <td>string</td>
                                    <td>mm/dd/yy</td>
                                    <td>Format of the date.</td>
                                </tr>
                                <tr>
                                    <td>panelStyle</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the datetimepicker panel.</td>
                                </tr>
                                <tr>
                                    <td>panelClassName</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the datetimepicker panel.</td>
                                </tr>
                                <tr>
                                    <td style={{textDecoration: 'line-through'}}>monthNavigator</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether the month should be rendered as a dropdown instead of text. <br /> <br />  <b> Deprecated: </b> Navigator is always on</td>
                                </tr>
                                <tr>
                                    <td style={{textDecoration: 'line-through'}}>yearNavigator</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether the year should be rendered as a dropdown instead of text. <br /> <br /> <b> Deprecated: </b> Navigator is always on.</td>
                                </tr>
                                <tr>
                                    <td>disabledDates</td>
                                    <td>array;</td>
                                    <td>null</td>
                                    <td>Array with dates to disable.</td>
                                </tr>
                                <tr>
                                    <td>disabledDays</td>
                                    <td>array</td>
                                    <td>null</td>
                                    <td>Array with disabled weekday numbers.</td>
                                </tr>
                                <tr>
                                    <td>minDate</td>
                                    <td>Date</td>
                                    <td>null</td>
                                    <td>The minimum selectable date.</td>
                                </tr>
                                <tr>
                                    <td>maxDate</td>
                                    <td>Date</td>
                                    <td>null</td>
                                    <td>The maximum selectable date.</td>
                                </tr>
                                <tr>
                                    <td>maxDateCount</td>
                                    <td>number</td>
                                    <td>null</td>
                                    <td>Maximum number of selectable dates in multiple mode.</td>
                                </tr>
                                <tr>
                                    <td>showOtherMonths</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.</td>
                                </tr>
                                <tr>
                                    <td>selectOtherMonths</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.</td>
                                </tr>
                                <tr>
                                    <td>showButtonBar</td>
                                    <td>boolean</td>
                                    <td>false</td>
                                    <td>Whether to display today and clear buttons at the footer</td>
                                </tr>
                                <tr>
                                    <td>todayButtonClassName</td>
                                    <td>string</td>
                                    <td>p-secondary-button</td>
                                    <td>Style class of the today button.</td>
                                </tr>
                                <tr>
                                    <td>clearButtonClassName</td>
                                    <td>string</td>
                                    <td>p-secondary-button</td>
                                    <td>Style class of the clear button.</td>
                                </tr>
                                <tr>
                                    <td>baseZIndex</td>
                                    <td>number</td>
                                    <td>0</td>
                                    <td>Base zIndex value to use in layering.</td>
                                </tr>
                                <tr>
                                    <td>autoZIndex</td>
                                    <td>boolean</td>
                                    <td>true</td>
                                    <td>Whether to automatically manage layering.</td>
                                </tr>
                                <tr>
                                    <td>appendTo</td>
                                    <td>DOM element | string</td>
                                    <td>document.body</td>
                                    <td>DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.</td>
                                </tr>
                                <tr>
                                    <td>tooltip</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Content of the tooltip.</td>
                                </tr>
                                <tr>
                                    <td>tooltipOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Configuration of the tooltip, refer to the tooltip documentation for more information.</td>
                                </tr>
                                <tr>
                                    <td>ariaLabelledBy</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Establishes relationships between the component and label(s) where its value should be one or more element IDs.</td>
                                </tr>
                                <tr>
                                    <td>dateTemplate</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Function that gets a date information and returns the cell content in datepicker.</td>
                                </tr>
                                <tr>
                                    <td>monthNavigatorTemplate</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Function that gets a navigator information and returns the navigator element in header.</td>
                                </tr>
                                <tr>
                                    <td>yearNavigatorTemplate</td>
                                    <td>function</td>
                                    <td>null</td>
                                    <td>Function that gets a navigator information and returns the novigator in header.</td>
                                </tr>
                                <tr>
                                    <td>transitionOptions</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>The properties of <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">CSSTransition</a> can be customized, except for "nodeRef" and "in" properties.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Events</h5>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Parameters</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>onFocus</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke on focus event of input field.</td>
                                </tr>
                                <tr>
                                    <td>onBlur</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke on blur event of input field.</td>
                                </tr>
                                <tr>
                                    <td>onInput</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke on input event of input field.</td>
                                </tr>
                                <tr>
                                    <td>onSelect</td>
                                    <td>originalEvent: Browser event <br />
                                        value: Selected date</td>
                                    <td>Callback to invoke when a date is selected.</td>
                                </tr>
                                <tr>
                                    <td>onChange</td>
                                    <td>originalEvent: Browser event <br />
                                        value: New date</td>
                                    <td>Callback to invoke when value changes.</td>
                                </tr>
                                <tr>
                                    <td>onTodayButtonClick</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke when today button is clicked.</td>
                                </tr>
                                <tr>
                                    <td>onClearButtonClick</td>
                                    <td>event: Browser event</td>
                                    <td>Callback to invoke when clear button is clicked.</td>
                                </tr>
                                <tr>
                                    <td>onViewDateChange</td>
                                    <td>originalEvent: Browser event <br />
                                        value: New date</td>
                                    <td>Callback to invoke when the displayed month/year is changed.</td>
                                </tr>
                                <tr>
                                    <td>onShow</td>
                                    <td>-</td>
                                    <td>Callback to invoke when overlay panel or modal becomes visible.</td>
                                </tr>
                                <tr>
                                    <td>onHide</td>
                                    <td>-</td>
                                    <td>Callback to invoke when overlay panel or modal becomes hidden.</td>
                                </tr>
                                <tr>
                                    <td>onVisibleChange</td>
                                    <td>event.visible: Whether the overlay is visible  <br />
                                        event.type: Action type when the overlay is visible/hidden <br />
                                        event.callback: It is used to refocus the input field in some cases when the overlay is hidden.
                                    </td>
                                    <td>Callback to invoke when visible is changed.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5>Styling</h5>
                    <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.</p>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Element</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>p-calendar</td>
                                    <td>Main container element</td>
                                </tr>
                                <tr>
                                    <td>p-calendar-w-btn</td>
                                    <td>Main container element when button is enabled.</td>
                                </tr>
                                <tr>
                                    <td>p-calendar-timeonly</td>
                                    <td>Main container element in time picker only mode.</td>
                                </tr>
                                <tr>
                                    <td>p-inputtext</td>
                                    <td>Input element</td>
                                </tr>
                                <tr>
                                    <td>p-datepicker</td>
                                    <td>Datepicker element</td>
                                </tr>
                                <tr>
                                    <td>p-datepicker-inline</td>
                                    <td>Datepicker element in inline mode</td>
                                </tr>
                                <tr>
                                    <td>p-monthpicker</td>
                                    <td>Datepicker element in month view.</td>
                                </tr>
                                <tr>
                                    <td>p-monthpicker-month</td>
                                    <td>Month cell in month view mode.</td>
                                </tr>
                                <tr>
                                    <td>p-datepicker-touch-ui</td>
                                    <td>Datepicker element in touch ui mode.</td>
                                </tr>
                                <tr>
                                    <td>p-datepicker-calendar</td>
                                    <td>Table containing dates of a month.</td>
                                </tr>
                                <tr>
                                    <td>p-datepicker-current-day</td>
                                    <td>Cell of selected date.</td>
                                </tr>
                                <tr>
                                    <td>p-datepicker-today</td>
                                    <td>Cell of today's date.</td>
                                </tr>
                            </tbody>
                        </table>

                        <h5>Accessibility</h5>
                    <DevelopmentSection>
                        <h6>Screen Reader</h6>
                        <p>Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props. The input element has <i>combobox</i> role
                        in addition to <i>aria-autocomplete</i> as "none", <i>aria-haspopup</i> as "dialog" and <i>aria-expanded</i> attributes. The relation between the input and the popup is created with <i>aria-controls</i> attribute that refers to the id of the popup.</p>
                        <p>The optional calendar button requires includes <i>aria-haspopup</i>, <i>aria-expanded</i> for states along with <i>aria-controls</i> to define the relation between the popup and the button. The value to read is retrieved from the <i>chooseDate</i>
                        key of the aria property from the <Link href="/locale">locale</Link> API. This label is also used for the <i>aria-label</i> of the popup as well. When there is a value selected, it is formatted and appended to the label to be able to notify users
                        about the current value.</p>

                        <p>Popup has a <i>dialog</i> role along with <i>aria-modal</i> and <i>aria-label</i>. The navigation buttons at the header has an <i>aria-label</i> retrieved from the <i>prevYear</i>, <i>nextYear</i>, <i>prevMonth</i>, <i>nextMonth</i>,
                        <i>prevDecade</i> and <i>nextDecade</i> keys of the locale aria API. Similarly month picker button uses the <i>chooseMonth</i> and year picker button uses the <i>chooseYear</i> keys.</p>

                        <p>Main date table uses <i>grid</i> role that contains th elements with <i>col</i> as the scope along with <i>abbr</i> tag resolving to the full name of the month. Each date cell has an <i>aria-label</i> referring to the full date value.
                        Buttons at the footer utilize their readable labels as <i>aria-label</i> as well. Selected date also receives the <i>aria-selected</i> attribute.</p>

                        <p>Timepicker spinner buttons get their labels for <i>aria-label</i> from the aria locale API using the <i>prevHour</i>, <i>nextHour</i>, <i>prevMinute</i>, <i>nextMinute</i>, <i>prevSecond</i>, <i>nextSecond</i>, <i>am</i> and <i>pm</i> keys.</p>

                        <p>Calendar also includes a hidden section that is only available to screen readers with <i>aria-live</i> as "polite". This element is updated when the selected date changes to instruct the user about the current date selected.</p>
<CodeHighlight>
{`
<label htmlFor="date1">Date</label>
<Calendar inputId="date1" />

<span id="date2">Date</span>
<Calendar aria-labelledby="date2" />

<Calendar aria-label="Date" />
`}
</CodeHighlight>
                        <h6>Choose Date Button Keyboard Support</h6>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Key</th>
                                        <th>Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i>space</i></td>
                                        <td>Opens popup and moves focus to the selected date, if there is none focuses on today.</td>
                                    </tr>
                                    <tr>
                                        <td><i>enter</i></td>
                                        <td>Opens popup and moves focus to the selected date, if there is none focuses on today.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h6>Popup Keyboard Support</h6>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Key</th>
                                        <th>Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i>escape</i></td>
                                        <td>Closes the popup and moves focus to the input element.</td>
                                    </tr>
                                    <tr>
                                        <td><i>tab</i></td>
                                        <td>Moves focus to the next focusable element within the popup.</td>
                                    </tr>
                                    <tr>
                                        <td><i>shift</i> + <i>tab</i></td>
                                        <td>Moves focus to the next focusable element within the popup.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h6>Header Buttons Keyboard Support</h6>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Key</th>
                                        <th>Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i>enter</i></td>
                                        <td>Triggers the button action.</td>
                                    </tr>
                                    <tr>
                                        <td><i>space</i></td>
                                        <td>Triggers the button action.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h6>Date Grid Keyboard Support</h6>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Key</th>
                                        <th>Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i>enter</i></td>
                                        <td>Selects the date, closes the popup and moves focus to the input element.</td>
                                    </tr>
                                    <tr>
                                        <td><i>space</i></td>
                                        <td>Selects the date, closes the popup and moves focus to the input element.</td>
                                    </tr>
                                    <tr>
                                        <td><i>up arrow</i></td>
                                        <td>Moves focus to the same day of the previous week.</td>
                                    </tr>
                                    <tr>
                                        <td><i>down arrow</i></td>
                                        <td>Moves focus to the same day of the next week.</td>
                                    </tr>
                                    <tr>
                                        <td><i>right arrow</i></td>
                                        <td>Moves focus to the next day.</td>
                                    </tr>
                                    <tr>
                                        <td><i>left arrow</i></td>
                                        <td>Moves focus to the previous day.</td>
                                    </tr>
                                    <tr>
                                        <td><i>home</i></td>
                                        <td>Moves focus to the first day of the current week.</td>
                                    </tr>
                                    <tr>
                                        <td><i>end</i></td>
                                        <td>Moves focus to the last day of the current week.</td>
                                    </tr>
                                    <tr>
                                        <td><i>page up</i></td>
                                        <td>Changes the date to previous month in date picker mode. Moves to previous year in month picker mode and previous decade in year picker.</td>
                                    </tr>
                                    <tr>
                                        <td><i>shift</i> + <i>page up</i></td>
                                        <td>Changes the date to previous year in date picker mode. Has no effect in month or year picker</td>
                                    </tr>
                                    <tr>
                                        <td><i>page down</i></td>
                                        <td>Changes the date to next month in date picker mode. Moves to next year in month picker mode and next decade in year picker.</td>
                                    </tr>
                                    <tr>
                                        <td><i>shift</i> + <i>page down</i></td>
                                        <td>Changes the date to next year in date picker mode. Has no effect in month or year picker</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h6>Footer Buttons Keyboard Support</h6>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                    <tr>
                                        <th>Key</th>
                                        <th>Function</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i>enter</i></td>
                                        <td>Triggers the button action.</td>
                                    </tr>
                                    <tr>
                                        <td><i>space</i></td>
                                        <td>Triggers the button action.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </DevelopmentSection>
                        <h5>Dependencies</h5>
                        <p>None.</p>
                    </div>

                </TabPanel>

                {
                    useLiveEditorTabs({ name: 'CalendarDemo', sources: sources })
                }
            </TabView>
        </div>
    );
})

export default CalendarDoc;
