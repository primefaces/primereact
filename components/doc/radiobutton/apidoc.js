import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <h3>Properties</h3>
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
                            <td>inputId</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Unique identifier of the inner native radiobutton.</td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Name of the checkbox element .</td>
                        </tr>
                        <tr>
                            <td>value</td>
                            <td>any</td>
                            <td>null</td>
                            <td>Value of the radiobutton.</td>
                        </tr>
                        <tr>
                            <td>checked</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Specifies whether a radiobutton should be checked or not.</td>
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
                            <td>required</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When present, it specifies that an input field must be filled out before submitting the form.</td>
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
                            <td>onChange</td>
                            <td>
                                event.originalEvent: Original event <br />
                                event.value: Value of the radiobutton <br />
                                event.checked: Checked state as a boolean.
                            </td>
                            <td>Callback to invoke on radio button click.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
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
                            <td>p-radiobutton</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-radiobutton-box</td>
                            <td>Container of icon.</td>
                        </tr>
                        <tr>
                            <td>p-radiobutton-icon</td>
                            <td>Icon element.</td>
                        </tr>
                        <tr>
                            <td>p-radiobutton-label</td>
                            <td>Label element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Accessibility</h5>
            <DevelopmentSection>
                <h4>Screen Reader</h4>
                <p>
                    RadioButton component uses a hidden native radio button element internally that is only visible to screen readers. Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or
                    using <i>aria-labelledby</i>, <i>aria-label</i> props.
                </p>
                <CodeHighlight>
                    {`
<label htmlFor="rb1">One</label>
<RadioButton inputId="rb1" />

<span id="rb2">Two</span>
<RadioButton aria-labelledby="rb2" />

<RadioButton aria-label="Three" />
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
                                <td>Moves focus to the checked radio button, if there is none within the group then first radio button receives the focus.</td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="inline-flex flex-column">
                                        <i className="mb-1">left arrow</i>
                                        <i>up arrow</i>
                                    </span>
                                </td>
                                <td>Moves focus to the previous radio button, if there is none then last radio button receives the focus.</td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="inline-flex flex-column">
                                        <i className="mb-1">right arrow</i>
                                        <i>down arrow</i>
                                    </span>
                                </td>
                                <td>Moves focus to the next radio button, if there is none then first radio button receives the focus.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>If the focused radio button is unchecked, changes the state to checked.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DevelopmentSection>
            <h4>Dependencies</h4>
            <p>None.</p>
        </>
    );
}
