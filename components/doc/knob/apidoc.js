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
                                <td>Value of the component.</td>
                            </tr>
                            <tr>
                                <td>size</td>
                                <td>number</td>
                                <td>100</td>
                                <td>Size of the component in pixels.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the component should be disabled.</td>
                            </tr>
                            <tr>
                                <td>readOnly</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the component value cannot be edited.</td>
                            </tr>
                            <tr>
                                <td>step</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Step factor to increment/decrement the value.</td>
                            </tr>
                            <tr>
                                <td>min</td>
                                <td>number</td>
                                <td>0</td>
                                <td>Mininum boundary value.</td>
                            </tr>
                            <tr>
                                <td>max</td>
                                <td>number</td>
                                <td>100</td>
                                <td>Maximum boundary value.</td>
                            </tr>
                            <tr>
                                <td>valueColor</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Background of the value.</td>
                            </tr>
                            <tr>
                                <td>rangeColor</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Background color of the range.</td>
                            </tr>
                            <tr>
                                <td>textColor</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Color of the value text.</td>
                            </tr>
                            <tr>
                                <td>strokeWidth</td>
                                <td>number</td>
                                <td>14</td>
                                <td>Width of the knob stroke.</td>
                            </tr>
                            <tr>
                                <td>showValue</td>
                                <td>boolean</td>
                                <td>true</td>
                                <td>Whether the show the value inside the knob.</td>
                            </tr>
                            <tr>
                                <td>valueTemplate</td>
                                <td>string</td>
                                <td>&#123;value&#125;</td>
                                <td>Template string of the value.</td>
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
                                <td>onChange</td>
                                <td>value: New value</td>
                                <td>Callback to invoke when the value changes.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
