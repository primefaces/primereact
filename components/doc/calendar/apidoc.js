import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="properties" label="Properties">
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
                                <td style={{ textDecoration: 'line-through' }}>monthNavigator</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>
                                    Whether the month should be rendered as a dropdown instead of text. <br /> <br /> <b> Deprecated: </b> Navigator is always on
                                </td>
                            </tr>
                            <tr>
                                <td style={{ textDecoration: 'line-through' }}>yearNavigator</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>
                                    Whether the year should be rendered as a dropdown instead of text. <br /> <br /> <b> Deprecated: </b> Navigator is always on.
                                </td>
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
                                <td>showMinMaxRange</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to allow navigation past min/max dates.</td>
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
                                <td>
                                    DOM element instance where the overlay panel should be mounted. Valid values are any DOM Element and 'self'. The <i>self</i> value is used to render a component where it is located.
                                </td>
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
                                <td>decadeTempate</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function that gets a navigator information and returns the decade selections in the panel.</td>
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
                                <td>formatDateTime</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function for overriding default behavior that formats a Date to the string representation.</td>
                            </tr>
                            <tr>
                                <td>parseDateTime</td>
                                <td>function</td>
                                <td>null</td>
                                <td>Function for overriding default behavior that parses text into the Date.</td>
                            </tr>
                            <tr>
                                <td>transitionOptions</td>
                                <td>object</td>
                                <td>null</td>
                                <td>
                                    The properties of{' '}
                                    <a href="https://reactcommunity.org/react-transition-group/css-transition" rel="noopener noreferrer" target="_blank">
                                        CSSTransition
                                    </a>{' '}
                                    can be customized, except for "nodeRef" and "in" properties.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="events" label="Events">
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
                                <td>
                                    originalEvent: Browser event <br />
                                    value: Selected date
                                </td>
                                <td>Callback to invoke when a date is selected.</td>
                            </tr>
                            <tr>
                                <td>onChange</td>
                                <td>
                                    originalEvent: Browser event <br />
                                    value: New date
                                </td>
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
                                <td>
                                    originalEvent: Browser event <br />
                                    value: New date
                                </td>
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
                                <td>
                                    event.visible: Whether the overlay is visible <br />
                                    event.type: Action type when the overlay is visible/hidden <br />
                                    event.callback: It is used to refocus the input field in some cases when the overlay is hidden.
                                </td>
                                <td>Callback to invoke when visible is changed.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
