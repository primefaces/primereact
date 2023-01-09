import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="messageapi" label="Message API">
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
                                <td>Unique id of the message.</td>
                            </tr>
                            <tr>
                                <td>severity</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Severity of the message.</td>
                            </tr>
                            <tr>
                                <td>content</td>
                                <td>element</td>
                                <td>null</td>
                                <td>Template of the message.</td>
                            </tr>
                            <tr>
                                <td>summary</td>
                                <td>element</td>
                                <td>null</td>
                                <td>Summary content of the message.</td>
                            </tr>
                            <tr>
                                <td>detail</td>
                                <td>element</td>
                                <td>null</td>
                                <td>Detail content of the message.</td>
                            </tr>
                            <tr>
                                <td>closable</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether the message can be closed manually using the close icon.</td>
                            </tr>
                            <tr>
                                <td>sticky</td>
                                <td>element</td>
                                <td>null</td>
                                <td>When enabled, message is not removed automatically.</td>
                            </tr>
                            <tr>
                                <td>life</td>
                                <td>number</td>
                                <td>3000</td>
                                <td>Delay in milliseconds to close the message automatically.</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>IconType</td>
                                <td>Defaults to severiy icon</td>
                                <td>Defines the icon to display.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="severitiesapi" label="Severities">
                <p>There are four possible values for the severity of a message.</p>

                <ul>
                    <li>success</li>
                    <li>info</li>
                    <li>warn</li>
                    <li>error</li>
                </ul>
            </DocSubSection>

            <DocSubSection id="messagecomponent" label="Message Component">
                <p>
                    Message component is useful in cases where a single message needs to be displayed related to an element such as forms. It has two properties, <i>severity</i> and <i>text</i> of the message.
                </p>
                <CodeHighlight>
                    {`
<h5>Inline Message CSS</h5>
<p>CSS helpers to display inline messages mostly within forms.</p>
<Message severity="info" text="PrimeNG Rocks"></Message>
<Message severity="success" text="Record Saved"></Message>
<Message severity="warn" text="Are you sure?"></Message>
<Message severity="error" text="Field is required"></Message>
`}
                </CodeHighlight>
            </DocSubSection>

            <DocSubSection id="propertiesmessage" label="Properties of Message">
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
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the element.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the element.</td>
                            </tr>
                            <tr>
                                <td>severity</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Severity level of the message.</td>
                            </tr>
                            <tr>
                                <td>text</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Text of the message.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Message text.</td>
                            </tr>
                            <tr>
                                <td>content</td>
                                <td>element</td>
                                <td>null</td>
                                <td>Template of the message.</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>string</td>
                                <td>based on severity</td>
                                <td>Icon for the message. If not set it will default to severity icon.</td>
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
                                <td>p-messages</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-messages-info</td>
                                <td>Container element when displaying info messages.</td>
                            </tr>
                            <tr>
                                <td>p-messages-warn</td>
                                <td>Container element when displaying warning messages.</td>
                            </tr>
                            <tr>
                                <td>p-messages-error</td>
                                <td>Container element when displaying error messages.</td>
                            </tr>
                            <tr>
                                <td>p-messages-success</td>
                                <td>Container element when displaying success messages.</td>
                            </tr>
                            <tr>
                                <td>p-messages-close</td>
                                <td>Close icon.</td>
                            </tr>
                            <tr>
                                <td>p-messages-icon</td>
                                <td>Severity icon.</td>
                            </tr>
                            <tr>
                                <td>p-messages-summary</td>
                                <td>Summary of a message.</td>
                            </tr>
                            <tr>
                                <td>p-messages-detail</td>
                                <td>Detail of a message.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        Message components use <i>alert</i> role that implicitly defines <i>aria-live</i> as "assertive" and <i>aria-atomic</i> as "true". Since any attribute is passed to the root element, attributes like <i>aria-labelledby</i> and{' '}
                        <i>aria-label</i> can optionally be used as well.
                    </p>

                    <p>
                        Close element is a <i>button</i> with an <i>aria-label</i> that refers to the <i>aria.close</i> property of the <Link href="/locale">locale</Link> API by default, you may use
                        <i>closeButtonProps</i> to customize the element and override the default <i>aria-label</i>.
                    </p>

                    <h4>Close Button Keyboard Support</h4>
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
                                    <td>Closes the message.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Closes the message.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
