import React, {Component} from 'react';
import {Link} from 'react-router';
import {Calendar} from '../../components/calendar/Calendar';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class CalendarDemo extends Component {

    constructor() {
        super();
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
            dates1: null,
            dates2: null
        };
    }

    render() {
        let es = {
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
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        
        let minDate = new Date();
        minDate.setMonth(prevMonth);
        minDate.setFullYear(prevYear);
        let maxDate = new Date();
        maxDate.setMonth(nextMonth);
        maxDate.setFullYear(nextYear);

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Calendar</h1>
                        <p>Calendar is an input component to select a date.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="ui-g">
                        <div className="ui-g-12 ui-md-4">
                            <h3>Basic</h3>
                            <Calendar value={this.state.date1} onChange={(e) => this.setState({date1: e.value})}></Calendar>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <h3>Spanish</h3>
                            <Calendar value={this.state.date2} locale={es} dateFormat="dd/mm/yy" onChange={(e) => this.setState({date2: e.value})}></Calendar>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <h3>Icon</h3>
                            <Calendar value={this.state.date3} showIcon="true" onChange={(e) => this.setState({date3: e.value})}></Calendar>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <h3>Restrict</h3>
                            <Calendar value={this.state.date4} minDate={this.minDate} maxDate={this.maxDate} readOnlyInput="true" onChange={(e) => this.setState({date4: e.value})}></Calendar>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <h3>Navigators</h3>
                            <Calendar value={this.state.date5} monthNavigator="true" yearNavigator="true" yearRange="2000:2030" onChange={(e) => this.setState({date5: e.value})}></Calendar>
                        </div>
                        
                        <div className="ui-g-12 ui-md-4">
                            <h3>Multiple</h3>
                            <Calendar value={this.state.dates1} selectionMode="multiple" onChange={(e) => this.setState({dates1: e.value})}></Calendar>
                        </div>
                        
                        <div className="ui-g-12 ui-md-4">
                            <h3>Range</h3>
                            <Calendar value={this.state.dates2} selectionMode="range" onChange={(e) => this.setState({dates2: e.value})}></Calendar>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <h3>Time</h3>
                            <Calendar value={this.state.date6} showTime="true" onChange={(e) => this.setState({date6: e.value})}></Calendar>
                        </div>

                        <div className="ui-g-12 ui-md-4">
                            <h3>Time Only</h3>
                            <Calendar value={this.state.date7} timeOnly="true" onChange={(e) => this.setState({date7: e.value})}></Calendar>
                        </div>
                        
                        <div className="ui-g-12 ui-md-4">
                            <h3>ButtonBar</h3>
                            <Calendar value={this.state.date8} showButtonBar={true} onChange={(e) => this.setState({date8: e.value})}></Calendar>
                        </div>
                                                
                        <div className="ui-g-12 ui-md-4">
                            <h3>Inline</h3>
                            <Calendar value={this.state.date9} inline="true" onChange={(e) => this.setState({date9: e.value})}></Calendar>
                        </div>
                    </div>
                </div>
                
                <CalendarDoc></CalendarDoc>
            </div>
        );
    }
}

export class CalendarDoc extends Component {
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="javascript">
{`
import {Calendar} from 'primereact/components/calendar/Calendar';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Calendar requires an onChange event to provide the selected value.</p>
<CodeHighlight className="html">
{`
<Calendar tabindex="0" onChange={this.onChangeBasic}></Calendar>

`}
</CodeHighlight>
<CodeHighlight className="javascript">
{`
constructor() {
    super();
    this.state = {};
    this.onChangeBasic = this.onChangeBasic.bind(this);
}

onChangeBasic(e) {
    this.setState({ date1: e.value });
}

`}
</CodeHighlight>

            <h3>Popup and Inline</h3>
            <p>Calendar is displayed in a popup by default and inline property needs to be enabled for inline mode.</p>
               
<CodeHighlight className="html jsx">
{`
<Calendar inline="true" onChange={this.onChangeInline}></Calendar>

`}
</CodeHighlight>

            <h3>DateFormat</h3>
            <p>Default date format is mm/dd/yy, to customize this use dateFormat property.</p>

<CodeHighlight className="html jsx">
{`
<Calendar dateFormat="dd/mm/yy" onChange={this.onChange}></Calendar>

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

            <h3>Time</h3>
            <p>TimePicker is enabled with showTime property and 24 (default) or 12 hour mode is configured using hourFormat option.</p>

<CodeHighlight className="html jsx">
{`
<Calendar showTime="true" hourFormat="12" onChange={this.onChangeTime}></Calendar>
<Calendar showTime="true" hourFormat="24" onChange={this.onChangeTime}></Calendar>

`}
</CodeHighlight>

            <h3>Date Restriction</h3>
            <p>To disable entering dates manually, set readOnlyInput to true and to restrict selectable dates use minDate
                and maxDate options.</p>

<CodeHighlight className="html jsx">
{`
<Calendar minDate={this.minDate} maxDate={this.maxDate} readOnlyInput="true" onChange={this.onChangeRestrict}>

`}
</CodeHighlight>

            <h3>Localization</h3>
            <p>Localization for different languages and formats is defined by binding the locale settings object to the locale property. Following is the default values for English.</p>

<CodeHighlight className="html jsx">
{`
<Calendar locale={es} dateFormat="dd/mm/yy" onChange={this.onChangeSpanish}></Calendar>

`}
</CodeHighlight>

<CodeHighlight className="jsx">
{`
var es = {
    firstDayOfWeek: 1,
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
};

`}
</CodeHighlight>

            <h3>Attributes</h3>
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
                            <td>defaultDate</td>
                            <td>Date</td>
                            <td>null</td>
                            <td>Set the date to highlight on first opening if the field is blank.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the component.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the component.</td>
                        </tr>
                        <tr>
                            <td>inputStyle</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the input field.</td>
                        </tr>
                        <tr>
                            <td>inputClassName</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the input field.</td>
                        </tr>
                        <tr>
                            <td>placeholder</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Placeholder text for the input.</td>
                        </tr>
                        <tr>
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, disables the component.</td>
                        </tr>
                        <tr>
                            <td>dateFormat</td>
                            <td>string</td>
                            <td>mm/dd/yy</td>
                            <td>Format of the date.</td>
                        </tr>
                        <tr>
                            <td>inline</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, displays the calendar as inline. Default is false for popup mode.</td>
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
                            <td>showIcon</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled, displays a button with icon next to input.</td>
                        </tr>
                         <tr>
                            <td>showOnFocus</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>When disabled, datepicker will not be visible with input focus.</td>
                        </tr>
                        <tr>
                            <td>icon</td>
                            <td>string</td>
                            <td>fa-calendar</td>
                            <td>Icon of the calendar button.</td>
                        </tr>
                        <tr>
                            <td>appendTo</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Target element to attach the overlay, valid values are "body" or a local template variable of another element.</td>
                        </tr>
                        <tr>
                            <td>readOnlyInput</td>
                            <td>boolean</td>
                            <td>null</td>
                            <td>When specified, prevents entering the date manually with keyboard.</td>
                        </tr>
                        <tr>
                            <td>shortYearCutoff</td>
                            <td>string</td>
                            <td>+10</td>
                            <td>The cutoff year for determining the century for a date.</td>
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
                            <td>monthNavigator</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether the month should be rendered as a dropdown instead of text.</td>
                        </tr>
                        <tr>
                            <td>yearNavigator</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether the year should be rendered as a dropdown instead of text.</td>
                        </tr>                        
                        <tr>
                            <td>yearRange</td>
                            <td>string</td>
                            <td>null</td>
                            <td>The range of years displayed in the year drop-down in (nnnn:nnnn) format such as (2000:2020).</td>
                        </tr>
                        <tr>
                            <td>showTime</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether to display timepicker.</td>
                        </tr>
                        <tr>
                            <td>hourFormat</td>
                            <td>string</td>
                            <td>24</td>
                            <td>Specifies 12 or 24 hour format.</td>
                        </tr>
                        <tr>
                            <td>locale</td>
                            <td>object</td>
                            <td>null</td>
                            <td>An object having regional configuration properties for the calendar.</td>
                        </tr>
                        <tr>
                            <td>timeOnly</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether to display timepicker only.</td>
                        </tr>
                        <tr>
                            <td>dataType</td>
                            <td>string</td>
                            <td>date</td>
                            <td>Type of the value to write back to ngModel, default is date and alternative is string.</td>
                        </tr>
                        <tr>
                            <td>required</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that an input field must be filled out before submitting the form.</td>
                        </tr>
                        <tr>
                            <td>tabindex</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Index of the element in tabbing order.</td>
                        </tr>
                        <tr>
                            <td>showSeconds</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether to show the seconds in time picker.</td>
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
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
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
                            <td>onSelect</td>
                            <td>value: Selected value
                            </td>
                            <td>Callback to invoke when a date is selected.</td>
                        </tr>
                        <tr>
                            <td>onBlur</td>
                            <td>event: Blur event
                            </td>
                            <td>Callback to invoke on blur of input field.</td>
                        </tr>
                        <tr>
                            <td>onFocus</td>
                            <td>event: Focus event
                            </td>
                            <td>Callback to invoke on focus of input field.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
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
                            <td>ui-calendar</td>
                            <td>Wrapper of input element</td>
                        </tr>
                        <tr>
                            <td>ui-inputtext</td>
                            <td>Input element</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/calendar" className="btn-viewsource" target="_blank">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="javascript">
{`
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
        let nextYear = (nextMonth === 0) ? year + 1 : year;
        this.minDate = new Date();
        this.minDate.setMonth(prevMonth);
        this.minDate.setFullYear(prevYear);
        this.maxDate = new Date();
        this.maxDate.setMonth(nextMonth);
        this.maxDate.setFullYear(nextYear);

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
                            <Calendar minDate={this.minDate} maxDate={this.maxDate} readOnlyInput="true" onChange={this.onChangeRestrict}></Calendar>{this.parseLocalDateString(this.state.date4)}
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
                <CalendarDoc></CalendarDoc>
            </div>
        );
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}