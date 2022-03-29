import React, { useState } from 'react';
import { Calendar } from '../../components/lib/calendar/Calendar';
import { Dropdown } from '../../components/lib/dropdown/Dropdown';
import CalendarDoc from '../../components/doc/calendar';
import { addLocale } from '../../components/lib/api/Locale';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';

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
    const [date15, setDate15] = useState(null);
    const [date16, setDate16] = useState(null);
    const [date17, setDate17] = useState(null);
    const [dates1, setDates1] = useState(null);
    const [dates2, setDates2] = useState(null);
    const [visible, setVisible] = useState(false);

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

    const monthNavigatorTemplate = (e) => {
        return <Dropdown value={e.value} options={e.options} onChange={(event) => e.onChange(event.originalEvent, event.value)} style={{ lineHeight: 1 }} />;
    }

    const yearNavigatorTemplate = (e) => {
        return <Dropdown value={e.value} options={e.options} onChange={(event) => e.onChange(event.originalEvent, event.value)} className="ml-2" style={{ lineHeight: 1 }} />;
    }

    const onVisibleChange = (e) => {
        setVisible(e.type === 'dateselect' || !visible);
        if (e.callback) {
            e.callback();
        }
    }

    return (
        <div>
            <Head>
                <title>React Calendar Component</title>
                <meta name="description" content="Calendar also known as DatePicker, is a form component to work with dates." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>Calendar</h1>
                    <p>Calendar also known as DatePicker, is a form component to work with dates.</p>
                </div>
                <DocActions github="calendar/index.js" />
            </div>

            <div className="content-section implementation">
                <div className="card">
                    <h5>Popup</h5>
                    <div className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="basic">Basic</label>
                            <Calendar id="basic" value={date1} onChange={(e) => setDate1(e.value)} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="icon">Icon</label>
                            <Calendar id="icon" value={date2} onChange={(e) => setDate2(e.value)} showIcon />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="spanish">Spanish</label>
                            <Calendar id="spanish" value={date3} onChange={(e) => setDate3(e.value)} locale="es" dateFormat="dd/mm/yy" />
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
                            <label htmlFor="navigators">Navigators</label>
                            <Calendar id="navigators" value={date6} onChange={(e) => setDate6(e.value)} monthNavigator yearNavigator yearRange="2010:2030" />
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
                            <Calendar id="buttonbar" value={date7} onChange={(e) => setDate7(e.value)} showButtonBar />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="time24">Time / 24h</label>
                            <Calendar id="time24" value={date8} onChange={(e) => setDate8(e.value)} showTime showSeconds />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="time12">Time / 12h</label>
                            <Calendar id="time12" value={date9} onChange={(e) => setDate9(e.value)} timeOnly hourFormat="12" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="monthpicker">Month Picker</label>
                            <Calendar id="monthpicker" value={date10} onChange={(e) => setDate10(e.value)} view="month" dateFormat="mm/yy" yearNavigator yearRange="2010:2030" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="multiplemonths">Multiple Months</label>
                            <Calendar id="multiplemonths" value={date11} onChange={(e) => setDate11(e.value)} numberOfMonths={3} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="datetemplate">Date Template</label>
                            <Calendar id="datetemplate" value={date12} onChange={(e) => setDate12(e.value)} dateTemplate={dateTemplate} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="touchUI">TouchUI</label>
                            <Calendar id="touchUI" value={date13} onChange={(e) => setDate13(e.value)} touchUI />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="mask">Mask</label>
                            <Calendar id="mask" value={date14} onChange={(e) => setDate14(e.value)} mask="99/99/9999" />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="controlled">Visibility Control</label>
                            <Calendar id="controlled" value={date15} onChange={(e) => setDate15(e.value)} visible={visible} onVisibleChange={onVisibleChange} />
                        </div>
                        <div className="field col-12 md:col-4">
                            <label htmlFor="navigatorstemplate">Navigators Template</label>
                            <Calendar id="navigatorstemplate" value={date16} onChange={(e) => setDate16(e.value)} monthNavigator yearNavigator yearRange="2010:2030"
                                monthNavigatorTemplate={monthNavigatorTemplate} yearNavigatorTemplate={yearNavigatorTemplate} />
                        </div>
                    </div>

                    <h5>Inline</h5>
                    <Calendar value={date17} onChange={(e) => setDate17(e.value)} inline showWeek />
                </div>
            </div>

            <CalendarDoc></CalendarDoc>
        </div>
    );
}

export default CalendarDemo;
