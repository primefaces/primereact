import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <h5>Properties</h5>
            <p>Any valid attribute is passed to the root element implicitly, extended properties are as follows;</p>
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
                            <td>any</td>
                            <td>null</td>
                            <td>Value of the TriStateCheckbox.</td>
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
                            <td>disabled</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the element value cannot be altered.</td>
                        </tr>
                        <tr>
                            <td>readOnly</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that the value cannot be changed.</td>
                        </tr>
                        <tr>
                            <td>tabIndex</td>
                            <td>number</td>
                            <td>null</td>
                            <td>Index of the element in tabbing order.</td>
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
                            <td>onChange</td>
                            <td>
                                event.originalEvent: Browser event <br />
                                event.value: Current Value
                            </td>
                            <td>Callback to invoke on value change</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Styling</h5>
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
                            <td>p-chkbox</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-tristatechkbox</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-chkbox-box</td>
                            <td>Container of icon.</td>
                        </tr>
                        <tr>
                            <td>p-chkbox-icon</td>
                            <td>Icon element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Accessibility</h5>
            <DevelopmentSection>
                <h6>Screen Reader</h6>
                <p>
                    TriStateCheckbox component uses an element with <i>checkbox</i> role. Value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. Component adds an element with
                    <i>aria-live</i> attribute that is only visible to screen readers to read the value displayed. Values to read are defined with the <i>trueLabel</i>, <i>falseLabel</i> and <i>nullLabel</i> keys of the <i>aria</i>
                    property from the <Link href="/locale">locale</Link> API. This is an example of a custom accessibility implementation as there is no one to one mapping between the component design and the WCAG specification.
                </p>
                <CodeHighlight>
                    {`
<span id="chkbox1">Remember Me</span>
<TriStateCheckbox aria-labelledby="chkbox1" />

<TriStateCheckbox aria-label="Remember Me" />
`}
                </CodeHighlight>
                <h6>Keyboard Support</h6>
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
                                <td>Moves focus to the checkbox.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Toggles between the values.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>enter</i>
                                </td>
                                <td>Toggles between the values.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DevelopmentSection>
            <h5>Dependencies</h5>
            <p>None.</p>
        </>
    );
}
