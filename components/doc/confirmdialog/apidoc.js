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
                <p>These properties are extended from Dialog properties.</p>
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
                                <td>visible</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Specifies the visibility of the confirm dialog.</td>
                            </tr>
                            <tr>
                                <td>message</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Message of the confirmation.</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Icon to display next to the message.</td>
                            </tr>
                            <tr>
                                <td>acceptLabel</td>
                                <td>string</td>
                                <td>Yes</td>
                                <td>Label of the accept button.</td>
                            </tr>
                            <tr>
                                <td>rejectLabel</td>
                                <td>string</td>
                                <td>No</td>
                                <td>Label of the reject button.</td>
                            </tr>
                            <tr>
                                <td>acceptIcon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Icon of the accept button.</td>
                            </tr>
                            <tr>
                                <td>rejectIcon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Icon of the reject button.</td>
                            </tr>
                            <tr>
                                <td>acceptClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the accept button.</td>
                            </tr>
                            <tr>
                                <td>rejectClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the reject button.</td>
                            </tr>
                            <tr>
                                <td>footer</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Footer content of the confirm dialog.</td>
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
                                <td>accept</td>
                                <td>null</td>
                                <td>Callback to execute when action is confirmed.</td>
                            </tr>
                            <tr>
                                <td>reject</td>
                                <td>null</td>
                                <td>Callback to execute when action is rejected.</td>
                            </tr>

                            <tr>
                                <td>onHide</td>
                                <td>
                                    result: Indicates with which selection the dialog was closed. <br />
                                    Valid values are 'accept', 'reject' and undefined (using close icon).
                                </td>
                                <td>Callback to invoke when confirm dialog is hidden.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
