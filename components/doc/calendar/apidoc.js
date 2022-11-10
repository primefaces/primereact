import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
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

            <h3>Styling</h3>
            <p>
                Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.
            </p>
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
            </div>

            <h3>Accessibility</h3>
            <DevelopmentSection>
                <h4>Screen Reader</h4>
                <p>
                    Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props. The input element has <i>combobox</i> role in addition to{' '}
                    <i>aria-autocomplete</i> as "none", <i>aria-haspopup</i> as "dialog" and <i>aria-expanded</i> attributes. The relation between the input and the popup is created with <i>aria-controls</i> attribute that refers to the id of the
                    popup.
                </p>
                <p>
                    The optional calendar button requires includes <i>aria-haspopup</i>, <i>aria-expanded</i> for states along with <i>aria-controls</i> to define the relation between the popup and the button. The value to read is retrieved from the{' '}
                    <i>chooseDate</i>
                    key of the aria property from the <Link href="/locale">locale</Link> API. This label is also used for the <i>aria-label</i> of the popup as well. When there is a value selected, it is formatted and appended to the label to be able
                    to notify users about the current value.
                </p>

                <p>
                    Popup has a <i>dialog</i> role along with <i>aria-modal</i> and <i>aria-label</i>. The navigation buttons at the header has an <i>aria-label</i> retrieved from the <i>prevYear</i>, <i>nextYear</i>, <i>prevMonth</i>,{' '}
                    <i>nextMonth</i>,<i>prevDecade</i> and <i>nextDecade</i> keys of the locale aria API. Similarly month picker button uses the <i>chooseMonth</i> and year picker button uses the <i>chooseYear</i> keys.
                </p>

                <p>
                    Main date table uses <i>grid</i> role that contains th elements with <i>col</i> as the scope along with <i>abbr</i> tag resolving to the full name of the month. Each date cell has an <i>aria-label</i> referring to the full date
                    value. Buttons at the footer utilize their readable labels as <i>aria-label</i> as well. Selected date also receives the <i>aria-selected</i> attribute.
                </p>

                <p>
                    Timepicker spinner buttons get their labels for <i>aria-label</i> from the aria locale API using the <i>prevHour</i>, <i>nextHour</i>, <i>prevMinute</i>, <i>nextMinute</i>, <i>prevSecond</i>, <i>nextSecond</i>, <i>am</i> and{' '}
                    <i>pm</i> keys.
                </p>

                <p>
                    Calendar also includes a hidden section that is only available to screen readers with <i>aria-live</i> as "polite". This element is updated when the selected date changes to instruct the user about the current date selected.
                </p>
                <CodeHighlight>
                    {`
<label htmlFor="date1">Date</label>
<Calendar inputId="date1" />

<span id="date2">Date</span>
<Calendar aria-labelledby="date2" />

<Calendar aria-label="Date" />
`}
                </CodeHighlight>
                <h4>Choose Date Button Keyboard Support</h4>
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
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Opens popup and moves focus to the selected date, if there is none focuses on today.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>enter</i>
                                </td>
                                <td>Opens popup and moves focus to the selected date, if there is none focuses on today.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Popup Keyboard Support</h4>
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
                                <td>
                                    <i>escape</i>
                                </td>
                                <td>Closes the popup and moves focus to the input element.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>tab</i>
                                </td>
                                <td>Moves focus to the next focusable element within the popup.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>shift</i> + <i>tab</i>
                                </td>
                                <td>Moves focus to the next focusable element within the popup.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Header Buttons Keyboard Support</h4>
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
                                <td>
                                    <i>enter</i>
                                </td>
                                <td>Triggers the button action.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Triggers the button action.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Date Grid Keyboard Support</h4>
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
                                <td>
                                    <i>enter</i>
                                </td>
                                <td>Selects the date, closes the popup and moves focus to the input element.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Selects the date, closes the popup and moves focus to the input element.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>up arrow</i>
                                </td>
                                <td>Moves focus to the same day of the previous week.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>down arrow</i>
                                </td>
                                <td>Moves focus to the same day of the next week.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>right arrow</i>
                                </td>
                                <td>Moves focus to the next day.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>left arrow</i>
                                </td>
                                <td>Moves focus to the previous day.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>home</i>
                                </td>
                                <td>Moves focus to the first day of the current week.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>end</i>
                                </td>
                                <td>Moves focus to the last day of the current week.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>page up</i>
                                </td>
                                <td>Changes the date to previous month in date picker mode. Moves to previous year in month picker mode and previous decade in year picker.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>shift</i> + <i>page up</i>
                                </td>
                                <td>Changes the date to previous year in date picker mode. Has no effect in month or year picker</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>page down</i>
                                </td>
                                <td>Changes the date to next month in date picker mode. Moves to next year in month picker mode and next decade in year picker.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>shift</i> + <i>page down</i>
                                </td>
                                <td>Changes the date to next year in date picker mode. Has no effect in month or year picker</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4>Footer Buttons Keyboard Support</h4>
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
                                <td>
                                    <i>enter</i>
                                </td>
                                <td>Triggers the button action.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Triggers the button action.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DevelopmentSection>

            <h3>Dependencies</h3>
            <p>None.</p>
        </>
    );
}
