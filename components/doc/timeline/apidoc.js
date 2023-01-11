import Link from 'next/link';
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
                                <td>value</td>
                                <td>array</td>
                                <td>null</td>
                                <td>An array of events to display.</td>
                            </tr>
                            <tr>
                                <td>align</td>
                                <td>string</td>
                                <td>left</td>
                                <td>Position of the timeline bar relative to the content. Valid values are "left", "right for vertical layout and "top", "bottom" for horizontal layout.</td>
                            </tr>
                            <tr>
                                <td>layout</td>
                                <td>string</td>
                                <td>vertical</td>
                                <td>Orientation of the timeline, valid values are "vertical" and "horizontal".</td>
                            </tr>
                            <tr>
                                <td>content</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of the content.</td>
                            </tr>
                            <tr>
                                <td>marker</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template content allows placing a custom event marker instead of the default one.</td>
                            </tr>
                            <tr>
                                <td>opposite</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template content to be placed at the other side of the bar.</td>
                            </tr>
                            <tr>
                                <td>dataKey</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the field that uniquely identifies a record in the data. Should be a unique business key to prevent re-rendering.</td>
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
                                <td>Style class of the component.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
