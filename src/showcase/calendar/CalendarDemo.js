import React, { Component } from 'react';
import { Calendar } from '../../components/calendar/Calendar';
import AppContentContext from '../../AppContentContext';
import { CalendarDoc } from './CalendarDoc';

export class CalendarDemo extends Component {

    constructor() {
        super();

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
            dates2: null
        };

        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);

        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

        this.invalidDates = [today];

        this.dateTemplate = this.dateTemplate.bind(this);
    }

    dateTemplate(date) {
        if (date.day > 10 && date.day < 15) {
            return (
                <div style={{ backgroundColor: '#1dcbb3', color: '#ffffff', fontWeight: 'bold', borderRadius: '50%', width: '2em', height: '2em', lineHeight: '2em', padding: 0 }}>{date.day}</div>
            );
        }
        else {
            return date.day;
        }
    }

    render() {
        const es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
            today: "Hoy",
            clear: "Claro"
        };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Calendar</h1>
                        <p>Calendar is a form component to work with dates.</p>

                        <AppContentContext.Consumer>
                            {context => <button onClick={() => context.onChangelogBtnClick("calendar")} className="layout-changelog-button">{context.changelogText}</button>}
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation inputgrid-demo">
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <h3>Basic</h3>
                            <Calendar value={this.state.date1} onChange={(e) => this.setState({ date1: e.value })} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Spanish</h3>
                            <Calendar value={this.state.date2} onChange={(e) => this.setState({ date2: e.value })} locale={es} dateFormat="dd/mm/yy" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Icon</h3>
                            <Calendar value={this.state.date3} onChange={(e) => this.setState({ date3: e.value })} showIcon={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Min-Max</h3>
                            <Calendar value={this.state.date4} onChange={(e) => this.setState({ date4: e.value })} minDate={this.minDate} maxDate={this.maxDate} readOnlyInput={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Disabled Days</h3>
                            <Calendar value={this.state.date5} onChange={(e) => this.setState({ date5: e.value })} disabledDates={this.invalidDates} disabledDays={[0, 6]} readOnlyInput={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Navigators</h3>
                            <Calendar value={this.state.date6} onChange={(e) => this.setState({ date6: e.value })} monthNavigator={true} yearNavigator={true} yearRange="2010:2030" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Multiple Selection</h3>
                            <Calendar value={this.state.dates1} onChange={(e) => this.setState({ dates1: e.value })} selectionMode="multiple" readOnlyInput={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Range Selection</h3>
                            <Calendar value={this.state.dates2} onChange={(e) => this.setState({ dates2: e.value })} selectionMode="range" readOnlyInput={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Button Bar</h3>
                            <Calendar value={this.state.date7} onChange={(e) => this.setState({ date7: e.value })} showButtonBar={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Time / 24h</h3>
                            <Calendar value={this.state.date8} onChange={(e) => this.setState({ date8: e.value })} showTime={true} showSeconds={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Time Only / 12h</h3>
                            <Calendar value={this.state.date9} onChange={(e) => this.setState({ date9: e.value })} timeOnly={true} hourFormat="12" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Date Template</h3>
                            <Calendar value={this.state.date10} onChange={(e) => this.setState({ date10: e.value })} dateTemplate={this.dateTemplate} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Multiple Months</h3>
                            <Calendar value={this.state.date11} onChange={(e) => this.setState({ date11: e.value })} numberOfMonths={3} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Month/Year Picker</h3>
                            <Calendar value={this.state.date12} onChange={(e) => this.setState({ date12: e.value })} view="month" dateFormat="mm/yy" yearNavigator={true} yearRange="2010:2030" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Touch UI</h3>
                            <Calendar value={this.state.date13} onChange={(e) => this.setState({ date13: e.value })} touchUI={true} />
                        </div>
                    </div>

                    <h3>Inline</h3>
                    <Calendar value={this.state.date14} onChange={(e) => this.setState({ date14: e.value })} inline={true} showWeek={true} />
                </div>

                <CalendarDoc></CalendarDoc>
            </div>
        );
    }
}
