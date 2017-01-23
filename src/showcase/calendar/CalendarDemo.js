import React, { Component } from 'react';
import { Calendar } from '../../components/calendar/Calendar';

export class CalendarDemo extends Component {

    constructor() {
        super();
        this.state = {};
        this.onChangeBasic = this.onChangeBasic.bind(this);
        this.onChangeSpanish = this.onChangeSpanish.bind(this);
        this.onChangeIcon = this.onChangeIcon.bind(this);
        this.onChangeRestrict = this.onChangeRestrict.bind(this);
        this.onChangeNavigators = this.onChangeNavigators.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeTimeOnly = this.onChangeTimeOnly.bind(this);
        this.onChangeInline = this.onChangeInline.bind(this);
    }

    onChangeBasic(e) {
        this.setState({ date1: e.value });
    }

    onChangeSpanish(e) {
        this.setState({ date2: e.value });
    }

    onChangeIcon(e) {
        this.setState({ date3: e.value });
    }

    onChangeRestrict(e) {
        this.setState({ date4: e.value });
    }

    onChangeNavigators(e) {
        this.setState({ date5: e.value });
    }

    onChangeTime(e) {
        this.setState({ date6: e.value });
    }

    onChangeTimeOnly(e) {
        this.setState({ date7: e.value });
    }

    onChangeInline(e) {
        this.setState({ date8: e.value });
    }

    parseLocalDateString(date) {
        var options = { year: 'numeric', month: 'long', day: 'numeric'};
        return date ? new Date(date).toLocaleDateString("en-US", options) : "";
    }

    render() {
        var es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
        };

        let today = new Date();
        let month = today.getMonth();
        let year = today.getFullYear();
        let prevMonth = (month === 0) ? 11 : month - 1;
        let prevYear = (prevMonth === 11) ? year - 1 : year;
        let nextMonth = (month === 11) ? 0 : month + 1;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);

        return (
            <div>
                <div className="content-section">
                    <div className="feature-intro">
                        <h1>Calendar</h1>
                        <p>Calendar is an input component to select a date.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-4">
                            <h3>Basic</h3>
                            <Calendar tabindex="0" onChange={this.onChangeBasic}></Calendar>{this.parseLocalDateString(this.state.date1)}
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <h3>Spanish</h3>
                            <Calendar locale={es} dateFormat="dd/mm/yy" onChange={this.onChangeSpanish}></Calendar>{this.parseLocalDateString(this.state.date2)}
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <h3>Icon</h3>
                            <Calendar showIcon="true" onChange={this.onChangeIcon}></Calendar><span style={{marginLeft:'35px'}}>{this.parseLocalDateString(this.state.date3)}</span>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <h3>Restrict</h3>
                            <Calendar minDate={this.minDate} maxDate={this.maxDate} readonlyInput="true" onChange={this.onChangeRestrict}></Calendar>{this.parseLocalDateString(this.state.date4)}
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <h3>Navigators</h3>
                            <Calendar monthNavigator="true" yearNavigator="true" yearRange="2000:2030" onChange={this.onChangeNavigators}></Calendar>{this.parseLocalDateString(this.state.date5)}
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <h3>Time</h3>
                            <Calendar showTime="true" onChange={this.onChangeTime}></Calendar>{this.state.date6 && new Date(this.state.date6).toString()}
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <h3>Time Only</h3>
                            <Calendar timeOnly="true" onChange={this.onChangeTimeOnly}></Calendar>
                        </div>
                    </div>

                    <h3>Inline {this.parseLocalDateString(this.state.date8)}</h3>
                    <Calendar inline="true" onChange={this.onChangeInline}></Calendar>
                </div>
            </div>
        );
    }
}