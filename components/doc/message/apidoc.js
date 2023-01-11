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
        </>
    );
}
