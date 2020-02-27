import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Calendar} from '../../components/calendar/Calendar';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

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

        let minDate = new Date();
        minDate.setMonth(prevMonth);
        minDate.setFullYear(prevYear);
        let maxDate = new Date();
        maxDate.setMonth(nextMonth);
        maxDate.setFullYear(nextYear);

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
            dates1: null,
            dates2: null,
            minDate: minDate,
            maxDate: maxDate,
            invalidDates: [today]
        };

        this.dateTemplate = this.dateTemplate.bind(this);
    }

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

    render() {
        const es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
        };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Calendar</h1>
                        <p>Calendar is a form component to work with dates.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("calendar")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation inputgrid-demo">
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <h3>Basic</h3>
                            <Calendar value={this.state.date1} onChange={(e) => this.setState({date1: e.value})} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Spanish</h3>
                            <Calendar value={this.state.date2} onChange={(e) => this.setState({date2: e.value})} locale={es} dateFormat="dd/mm/yy" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Icon</h3>
                            <Calendar value={this.state.date3} onChange={(e) => this.setState({date3: e.value})} showIcon={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Min-Max</h3>
                            <Calendar value={this.state.date4} onChange={(e) => this.setState({date4: e.value})} minDate={this.state.minDate} maxDate={this.state.maxDate} readOnlyInput={true}/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Disabled Days</h3>
                            <Calendar value={this.state.date5} onChange={(e) => this.setState({date5: e.value})} disabledDates={this.state.invalidDates} disabledDays={[0,6]} readOnlyInput={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Navigators</h3>
                            <Calendar value={this.state.date6} onChange={(e) => this.setState({date6: e.value})} monthNavigator={true} yearNavigator={true} yearRange="2010:2030"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Multiple Selection</h3>
                            <Calendar value={this.state.dates1} onChange={(e) => this.setState({dates1: e.value})} selectionMode="multiple" readOnlyInput={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Range Selection</h3>
                            <Calendar value={this.state.dates2} onChange={(e) => this.setState({dates2: e.value})} selectionMode="range" readOnlyInput={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Button Bar</h3>
                            <Calendar value={this.state.date7} onChange={(e) => this.setState({date7: e.value})} showButtonBar={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Time / 24h</h3>
                            <Calendar value={this.state.date8} onChange={(e) => this.setState({date8: e.value})} showTime={true} showSeconds={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Time Only / 12h</h3>
                            <Calendar value={this.state.date9} onChange={(e) => this.setState({date9: e.value})} timeOnly={true} hourFormat="12" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Date Template</h3>
                            <Calendar value={this.state.date10} onChange={(e) => this.setState({date10: e.value})} dateTemplate={this.dateTemplate} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Multiple Months</h3>
                            <Calendar value={this.state.date11} onChange={(e) => this.setState({date11: e.value})} numberOfMonths={3} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Month/Year Picker</h3>
                            <Calendar value={this.state.date12} onChange={(e) => this.setState({date12: e.value})} view="month" dateFormat="mm/yy" yearNavigator={true} yearRange="2010:2030"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Touch UI</h3>
                            <Calendar value={this.state.date13} onChange={(e) => this.setState({date13: e.value})} touchUI={true} />
                        </div>
                    </div>

                    <h3>Inline</h3>
                    <Calendar value={this.state.date14} onChange={(e) => this.setState({date14: e.value})} inline={true} showWeek={true} />
                </div>

                <CalendarDoc></CalendarDoc>
            </div>
        );
    }
}

export class CalendarDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {Calendar} from 'primereact/calendar';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>Calendar is used a controlled input component with <i>value</i> and <i>onChange</i> properties.</p>

<CodeHighlight className="language-jsx">
{`
<Calendar value={this.state.date} onChange={(e) => this.setState({date: e.value})}></Calendar>

`}
</CodeHighlight>

            <h3>Popup and Inline</h3>
            <p>Calendar is displayed in a popup by default whereas <i>inline</i> property needs to be enabled for inline mode.</p>

<CodeHighlight className="language-jsx">
{`
<Calendar inline={true} value={this.state.date} onChange={(e) => this.setState({date: e.value})}></Calendar>

`}
</CodeHighlight>

            <h3>View Date</h3>
            <p><i>viewDate</i> defines the date whose month and year are used to display the calendar. By default calendar uses value to render the view and falls back to today's date when value is not defined. In case you'd like
            to display a different month/year use <i>viewDate</i>. The usage of this property can either be controlled or uncontrolled. In controlled mode, <i>onViewDateChange</i> is required to manage the viewDate whereas in
            uncontrolled mode, viewDate is used only once in initial rendering and ignored in updates. If you'd like to change the displayed month/year programmatically, use the viewChange in controlled mode.</p>
            <CodeHighlight className="language-jsx">
{`
<Calendar value={this.state.dates} onChange={(e) => this.setState({date: e.value})} viewDate={this.state.viewDate} onViewDateChange={(e) => this.setState({viewDate: e.value})}></Calendar>

`}
</CodeHighlight>

            <h3>Selection Mode</h3>
            <p>Calendar offers "single" (default), "multiple" and "range" selection types controlled via the <i>selectionMode</i> property. In single, mode the bound value should be an array whereas in multiple
            case an array is required. Third alternative is the range mode that allows selecting a range based on an array of two values where first value is the start date and second value
            is the end date. Note that time picker is not currently supported in multiple and range modes.</p>
<CodeHighlight className="language-jsx">
{`
<Calendar selectionMode="multiple" value={this.state.dates} onChange={(e) => this.setState({dates: e.value})}></Calendar>

`}
</CodeHighlight>

            <h3>DateFormat</h3>
            <p>Default date format is "mm/dd/yy" which can be customized using the <i>dateFormat</i> property.</p>

<CodeHighlight className="language-jsx">
{`
<Calendar dateFormat="dd/mm/yy" value={this.state.date} onChange={(e) => this.setState({date: e.value})}></Calendar>

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
            <p>TimePicker is enabled with <i>showTime</i> property and <i>hourFormat</i> is used to select the 24 (default) or 12 hour mode. Optionally enabling <i>timeOnly</i>
                displays a calendare with time controls only.</p>

<CodeHighlight className="language-jsx">
{`
<Calendar showTime={true} hourFormat="12" value={this.state.date1} onChange={(e) => this.setState({date1: e.value})}></Calendar>
<Calendar showTime={true} hourFormat="24" value={this.state.date2} onChange={(e) => this.setState({date2: e.value})}></Calendar>
<Calendar timeOnly={true} showTime={true} hourFormat="24" value={this.state.date3} onChange={(e) => this.setState({date3: e.value})}></Calendar>

`}
</CodeHighlight>

            <h3>Date Restriction</h3>
            <p>To disable entering dates manually, set <i>readOnlyInput</i> to true and to restrict selectable date ranges use <i>minDate</i> and <i>maxDate</i> options.</p>

<CodeHighlight className="language-jsx">
{`
<Calendar minDate={minDate} maxDate={maxDate} readOnlyInput={true} value={this.state.date} onChange={(e) => this.setState({date: e.value})}></Calendar>

`}
</CodeHighlight>

            <h3>Disable specific dates and/or days</h3>
            <p>Specific dates or days can be disabled as well, in this case set <i>readOnlyInput</i> to true and to restrict selectable dates use <i>disabledDates</i> and/or <i>disabledDays</i> options. <i>disabledDates</i>
            property should be an array of dates and <i>disabledDays</i> should be an array of disabled weekdays.</p>

<CodeHighlight className="language-jsx">
{`
<Calendar disabledDates={invalidDates}" disabledDays={[0,6]} readOnlyInput={true} value={this.state.date} onChange={(e) => this.setState({date: e.value})}></Calendar>

`}
</CodeHighlight>

            <h3>Button Bar</h3>
            <p>Button bar displays today and clear buttons and activated using the <i>showButtonBar</i> property.</p>
<CodeHighlight className="language-jsx">
{`
<Calendar value={this.state.date} onChange={(e) => this.setState({date: e.value})} showButtonBar={true}></Calendar>

`}
</CodeHighlight>

            <h3>Multiple Months</h3>
            <p>Displaying multiple months is enabled by setting <i>numberOfMonths</i> property to a value greater than 1.</p>
<CodeHighlight className="language-jsx">
{`
<Calendar value={this.state.date} onChange={(e) => this.setState({date: e.value})} numberOfMonths={3}></Calendar>

`}
</CodeHighlight>

            <h3>Localization</h3>
            <p>Localization for different languages and formats is defined by binding the locale settings object to the <i>locale</i> property. Following is a Spanish calendar.</p>

<CodeHighlight className="language-jsx">
{`
<Calendar locale={es} dateFormat="dd/mm/yy" value={this.state.date} onChange={(e) => this.setState({date: e.value})}></Calendar>

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
{`
let es = {
    firstDayOfWeek: 1,
    dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
    dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
    monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
    monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
    today: 'Hoy',
    clear: 'Limpiar',
    dateFormat: 'dd/mm/yy',
    weekHeader: 'Sm'
};

`}
</CodeHighlight>

            <h3>Date Template</h3>
            <p>Date cell contents can be templated using the <i>dateTemplate</i> property that returns the content of a cell. This is a handy feature to highlight specific dates. Note that the
            variable passed to the template is not a date instance but a metadata object to represent a Date with "day", "month", "year", "otherMonth", "today" and "selectable" properties to represent the date. Example below changes the styling of dates between 10 and 15.</p>

            <CodeHighlight className="language-jsx">
{`
<Calendar value={this.state.date} onChange={(e) => this.setState({date: e.value})} dateTemplate={this.dateTemplate} />

`}
</CodeHighlight>

<CodeHighlight className="language-javascript">
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

            <h3>Header and Footer</h3>
            <p><i>headerTemplate</i> and <i>footerTemplate</i> properties are available to place custom content at these sections.</p>
<CodeHighlight className="language-jsx">
{`
<Calendar value={this.state.date} onChange={(e) => this.setState({date: e.value})} headerTemplate={<Button label="Custom Button" />} footerTemplate={<div>Footer Content</div>} />

`}
</CodeHighlight>

            <h3>Month and Year Navigator</h3>
            <p>Navigators are used to quickly change the displayed month and year using dropdowns. Enabling <i>monthNavigator</i> displays a dropdown with months whereas <i>yearNavigator</i> along with <i>yearRange</i> displays
            available years. Format of the <i>yearRange</i> is "startYear:endYear".</p>

            <CodeHighlight className="language-jsx">
{`
<Calendar value={this.state.date} onChange={(e) => this.setState({date: e.value})} monthNavigator={true} yearNavigator={true} yearRange="2010:2030" />

`}
</CodeHighlight>

            <h3>Month Picker</h3>
            <p>Month picker is used to select month and year only without the date, set <i>view</i> mode as "month" to activate month picker.</p>
            <CodeHighlight className="language-jsx">
{`
<Calendar value={this.state.date} onChange={(e) => this.setState({date: e.value})} view="month" dateFormat="mm/yy" yearNavigator={true} yearRange="2010:2030"/>

`}
</CodeHighlight>

            <h3>Touch UI</h3>
            <p>Touch UI mode displays the calendar overlay at the center of the screen as optimized for touch devices.</p>
            <CodeHighlight className="language-jsx">
{`
<Calendar value={this.state.date} onChange={(e) => this.setState({date: e.value})} touchUI={true} />

`}
</CodeHighlight>


            <h3>Properties</h3>
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
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When specified, disables the component.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
                            <td>string</td>
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
                            <td>Type of view to display, valid valids are "date" for datepicker and "month" for month picker.</td>
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
                            <td>hourFormat</td>
                            <td>string</td>
                            <td>24</td>
                            <td>Specifies 12 or 24 hour format.</td>
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
                            <td>DOM element</td>
                            <td>null</td>
                            <td>DOM element instance where the dialog should be mounted.</td>
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
                            <td>onViewChange</td>
                            <td>originalEvent: Browser event <br />
                                value: New date</td>
                            <td>Callback to invoke when the displayed month/year is changed.</td>
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

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>

            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/calendar" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Calendar} from 'primereact/calendar';

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

        let minDate = new Date();
        minDate.setMonth(prevMonth);
        minDate.setFullYear(prevYear);
        let maxDate = new Date();
        maxDate.setMonth(nextMonth);
        maxDate.setFullYear(nextYear);

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
            dates1: null,
            dates2: null,
            minDate: minDate,
            maxDate: maxDate,
            invalidDates: [today]
        };

        this.dateTemplate = this.dateTemplate.bind(this);
    }

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

    render() {
        const es = {
            firstDayOfWeek: 1,
            dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
            dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
            dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
            monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
            monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
        };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Calendar</h1>
                        <p>Calendar is an input component to select a date.</p>
                    </div>
                </div>

                <div className="content-section implementation inputgrid-demo">
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <h3>Basic</h3>
                            <Calendar value={this.state.date1} onChange={(e) => this.setState({date1: e.value})} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Spanish</h3>
                            <Calendar value={this.state.date2} onChange={(e) => this.setState({date2: e.value})} locale={es} dateFormat="dd/mm/yy" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Icon</h3>
                            <Calendar value={this.state.date3} onChange={(e) => this.setState({date3: e.value})} showIcon={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Min-Max</h3>
                            <Calendar value={this.state.date4} onChange={(e) => this.setState({date4: e.value})} minDate={this.state.minDate} maxDate={this.state.maxDate} readOnlyInput={true}/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Disabled Days</h3>
                            <Calendar value={this.state.date5} onChange={(e) => this.setState({date5: e.value})} disabledDates={this.state.invalidDates} disabledDays={[0,6]} readOnlyInput={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Navigators</h3>
                            <Calendar value={this.state.date6} onChange={(e) => this.setState({date6: e.value})} monthNavigator={true} yearNavigator={true} yearRange="2010:2030"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Multiple Selection</h3>
                            <Calendar value={this.state.dates1} onChange={(e) => this.setState({dates1: e.value})} selectionMode="multiple" readOnlyInput={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Range Selection</h3>
                            <Calendar value={this.state.dates2} onChange={(e) => this.setState({dates2: e.value})} selectionMode="range" readOnlyInput={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Button Bar</h3>
                            <Calendar value={this.state.date7} onChange={(e) => this.setState({date9: e.value})} showButtonBar={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Time / 24h</h3>
                            <Calendar value={this.state.date8} onChange={(e) => this.setState({date8: e.value})} showTime={true} showSeconds={true} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Time Only / 12h</h3>
                            <Calendar value={this.state.date9} onChange={(e) => this.setState({date9: e.value})} timeOnly={true} hourFormat="12" />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Date Template</h3>
                            <Calendar value={this.state.date10} onChange={(e) => this.setState({date10: e.value})} dateTemplate={this.dateTemplate} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Multiple Months</h3>
                            <Calendar value={this.state.date11} onChange={(e) => this.setState({date11: e.value})} numberOfMonths={3} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Month/Year Picker</h3>
                            <Calendar value={this.state.date12} onChange={(e) => this.setState({date12: e.value})} view="month" dateFormat="mm/yy" yearNavigator={true} yearRange="2010:2030"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <h3>Touch UI</h3>
                            <Calendar value={this.state.date13} onChange={(e) => this.setState({date13: e.value})} touchUI={true} />
                        </div>
                    </div>

                    <h3>Inline</h3>
                    <Calendar value={this.state.date14} onChange={(e) => this.setState({date14: e.value})} inline={true} showWeek={true} />
                </div>
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
