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
                                <td>value</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Value of the component.</td>
                            </tr>
                            <tr>
                                <td>format</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to format the value.</td>
                            </tr>
                            <tr>
                                <td>showButtons</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Displays spinner buttons.</td>
                            </tr>
                            <tr>
                                <td>buttonLayout</td>
                                <td>string</td>
                                <td>stacked</td>
                                <td>Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical".</td>
                            </tr>
                            <tr>
                                <td>incrementButtonClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the increment button.</td>
                            </tr>
                            <tr>
                                <td>decrementButtonClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the decrement button.</td>
                            </tr>
                            <tr>
                                <td>incrementButtonIcon</td>
                                <td>string</td>
                                <td>pi pi-caret-up</td>
                                <td>Style class of the increment button.</td>
                            </tr>
                            <tr>
                                <td>decrementButtonIcon</td>
                                <td>string</td>
                                <td>pi pi-caret-down</td>
                                <td>Style class of the decrement button.</td>
                            </tr>
                            <tr>
                                <td>locale</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Locale to be used in formatting.</td>
                            </tr>
                            <tr>
                                <td>localeMatcher</td>
                                <td>string</td>
                                <td>best fit</td>
                                <td>
                                    The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". See{' '}
                                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation">Locale Negotation</a> for details.
                                </td>
                            </tr>
                            <tr>
                                <td>mode</td>
                                <td>string</td>
                                <td>decimal</td>
                                <td>Defines the behavior of the component, valid values are "decimal" and "currency".</td>
                            </tr>
                            <tr>
                                <td>prefix</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Text to display before the value.</td>
                            </tr>
                            <tr>
                                <td>suffix</td>
                                <td>string</td>
                                <td>decimal</td>
                                <td>Text to display after the value.</td>
                            </tr>
                            <tr>
                                <td>currency</td>
                                <td>string</td>
                                <td>null</td>
                                <td>
                                    The currency to use in currency formatting. Possible values are the <a href="https://www.currency-iso.org/en/home/tables/table-a1.html">ISO 4217 currency codes</a>, such as "USD" for the US dollar, "EUR" for the
                                    euro, or "CNY" for the Chinese RMB. There is no default value; if the style is "currency", the currency property must be provided.
                                </td>
                            </tr>
                            <tr>
                                <td>currencyDisplay</td>
                                <td>string</td>
                                <td>symbol</td>
                                <td>
                                    How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €, ü"code" to use the ISO currency code, "name" to use a localized currency name such as
                                    "dollar"; the default is "symbol".
                                </td>
                            </tr>
                            <tr>
                                <td>useGrouping</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.</td>
                            </tr>
                            <tr>
                                <td>minFractionDigits</td>
                                <td>number</td>
                                <td>null</td>
                                <td>
                                    The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits
                                    provided by the <a href="https://www.currency-iso.org/en/home/tables/table-a1.html">ISO 4217 currency code list</a> (2 if the list doesn't provide that information).
                                </td>
                            </tr>
                            <tr>
                                <td>maxFractionDigits</td>
                                <td>number</td>
                                <td>null</td>
                                <td>
                                    The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the
                                    larger of minimumFractionDigits and the number of minor unit digits provided by the <a href="https://www.currency-iso.org/en/home/tables/table-a1.html">ISO 4217 currency code list</a>
                                    (2 if the list doesn't provide that information).
                                </td>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Identifier of the element.</td>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the input element.</td>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>string</td>
                                <td>text</td>
                                <td>Type of the input element.</td>
                            </tr>
                            <tr>
                                <td>allowEmpty</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Determines whether the input field is empty.</td>
                            </tr>
                            <tr>
                                <td>step</td>
                                <td>number</td>
                                <td>1</td>
                                <td>Step factor to increment/decrement the value.</td>
                            </tr>
                            <tr>
                                <td>min</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Mininum boundary value.</td>
                            </tr>
                            <tr>
                                <td>max</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Maximum boundary value.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the element should be disabled.</td>
                            </tr>
                            <tr>
                                <td>required</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that an input field must be filled out before submitting the form.</td>
                            </tr>
                            <tr>
                                <td>tabIndex</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Index of the element in tabbing order.</td>
                            </tr>
                            <tr>
                                <td>autoFocus</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the component should automatically get focus on load.</td>
                            </tr>
                            <tr>
                                <td>pattern</td>
                                <td>string</td>
                                <td>null</td>
                                <td>The pattern attribute specifies a regular expression that the element's value is checked against on form submission.</td>
                            </tr>
                            <tr>
                                <td>inputmode</td>
                                <td>string</td>
                                <td>null</td>
                                <td>The inputmode attribute provides a hint to browsers for devices with onscreen keyboards to help them decide which keyboard to display.</td>
                            </tr>
                            <tr>
                                <td>placeholder</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Hint text for the input field.</td>
                            </tr>
                            <tr>
                                <td>readOnly</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the element should be read-only.</td>
                            </tr>
                            <tr>
                                <td>size</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Size of the input field.</td>
                            </tr>
                            <tr>
                                <td>maxLength</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Maximum number of character allows in the input field.</td>
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
                                <td>Style class of the element.</td>
                            </tr>
                            <tr>
                                <td>inputId</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Identifier of the input element.</td>
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
                                <td>Inline style of the input field.</td>
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
                                <td>onValueChange</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.value: New value
                                </td>
                                <td>Callback to invoke after validation check and value change.</td>
                            </tr>
                            <tr>
                                <td>onChange</td>
                                <td>
                                    event.originalEvent: Browser event <br />
                                    event.value: New value
                                </td>
                                <td>Callback to invoke on value change.</td>
                            </tr>
                            <tr>
                                <td>onFocus</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when input receives focus.</td>
                            </tr>
                            <tr>
                                <td>onBlur</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when input loses focus.</td>
                            </tr>
                            <tr>
                                <td>onKeyDown</td>
                                <td>event: Browser event.</td>
                                <td>Callback to invoke when the key pressed.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="styling" label="Styling">
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
                                <td>p-inputnumber</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-inputnumber-stacked</td>
                                <td>Container element with stacked buttons.</td>
                            </tr>
                            <tr>
                                <td>p-inputnumber-horizontal</td>
                                <td>Container element with horizontal buttons.</td>
                            </tr>
                            <tr>
                                <td>p-inputnumber-vertical</td>
                                <td>Container element with vertical buttons.</td>
                            </tr>
                            <tr>
                                <td>p-inputnumber-input</td>
                                <td>Input element</td>
                            </tr>
                            <tr>
                                <td>p-inputnumber-button</td>
                                <td>Input element</td>
                            </tr>
                            <tr>
                                <td>p-inputnumber-button-up</td>
                                <td>Increment button</td>
                            </tr>
                            <tr>
                                <td>p-inputnumber-button-down</td>
                                <td>Decrement button</td>
                            </tr>
                            <tr>
                                <td>p-inputnumber-button-icon</td>
                                <td>Button icon</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props. The input element uses <i>spinbutton</i> role in addition
                        to the <i>aria-valuemin</i>, <i>aria-valuemax</i> and <i>aria-valuenow</i> attributes.
                    </p>
                    <CodeHighlight>
                        {`
<label htmlFor="price">Price</label>
<InputNumber inputId="price" />

<span id="label_number">Number</span>
<InputNumber aria-labelledby="label_number" />

<InputNumber aria-label="Number" />
`}
                    </CodeHighlight>

                    <h4>Keyboard Support</h4>
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
                                        <i>tab</i>
                                    </td>
                                    <td>Moves focus to the input.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>up arrow</i>
                                    </td>
                                    <td>Increments the value.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>down arrow</i>
                                    </td>
                                    <td>Decrements the value.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>home</i>
                                    </td>
                                    <td>Set the minimum value if provided.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>end</i>
                                    </td>
                                    <td>Set the maximum value if provided.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
