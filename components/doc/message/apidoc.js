import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
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
