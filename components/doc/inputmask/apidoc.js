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
                <p>InputMask passes any valid attribute to the underlying React HTMLInputElement element. Extended properties are as follows;</p>
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
                                <td>value</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Value of the component.</td>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>string</td>
                                <td>text</td>
                                <td>HTML5 input type</td>
                            </tr>
                            <tr>
                                <td>mask</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Mask pattern.</td>
                            </tr>
                            <tr>
                                <td>slotChar</td>
                                <td>string</td>
                                <td>-</td>
                                <td>Placeholder character in mask, default is underscore.</td>
                            </tr>
                            <tr>
                                <td>autoClear</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Clears the incomplete value on blur.</td>
                            </tr>
                            <tr>
                                <td>unmask</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Defines if model sets the raw unmasked value to bound value or the formatted mask value.</td>
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
                                <td>placeholder</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Advisory information to display on input.</td>
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
                                <td>tabIndex</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Specifies tab order of the element.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the element value cannot be altered.</td>
                            </tr>
                            <tr>
                                <td>readOnly</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that an input field is read-only.</td>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the input field.</td>
                            </tr>
                            <tr>
                                <td>required</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the element must be filled out before submitting the form.</td>
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
                                <td>Callback to invoke when input receives focus.</td>
                            </tr>
                            <tr>
                                <td>onBlur</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when input loses focus.</td>
                            </tr>
                            <tr>
                                <td>onComplete</td>
                                <td>
                                    event: Browser event
                                    <br />
                                    value: New value of the component
                                </td>
                                <td>Callback to invoke on when user completes the mask pattern.</td>
                            </tr>
                            <tr>
                                <td>onChange</td>
                                <td>
                                    originalEvent: Browser event <br />
                                    value: New value of the component
                                </td>
                                <td>Callback to invoke on value change.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="styling" label="Styling">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.
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
                                <td>p-inputtext</td>
                                <td>Input element</td>
                            </tr>
                            <tr>
                                <td>p-inputmask</td>
                                <td>Input element</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        InputMask component renders a native input element that implicitly includes any passed prop. Value to describe the component can either be provided via <i>label</i> tag combined with <i>id</i> prop or using{' '}
                        <i>aria-labelledby</i>, <i>aria-label</i> props.
                    </p>
                    <CodeHighlight>
                        {`
<label htmlFor="date">Date</label>
<InputMask id="date" />

<span id="phone">Phone</span>
<InputMask aria-labelledby="phone" />

<InputMask aria-label="Age" />
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
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
