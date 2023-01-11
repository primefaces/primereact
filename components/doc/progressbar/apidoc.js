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
                                <td>number</td>
                                <td>null</td>
                                <td>Current value of the progress.</td>
                            </tr>
                            <tr>
                                <td>showValue</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Show or hide progress bar value.</td>
                            </tr>
                            <tr>
                                <td>unit</td>
                                <td>string</td>
                                <td>%</td>
                                <td>Unit sign appended to the value.</td>
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
                                <td>mode</td>
                                <td>string</td>
                                <td>determinate</td>
                                <td>Defines the mode of the progress, valid values are "determinate" and "indeterminate".</td>
                            </tr>
                            <tr>
                                <td>color</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Color for the background of the progress.</td>
                            </tr>
                            <tr>
                                <td>displayValueTemplate</td>
                                <td>Element</td>
                                <td>null</td>
                                <td>Custom display value template</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
