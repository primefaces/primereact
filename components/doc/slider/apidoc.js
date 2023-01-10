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
                                <td>0</td>
                                <td>Value of the component.</td>
                            </tr>
                            <tr>
                                <td>animate</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, displays an animation on click of the slider bar.</td>
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
                                <td>orientation</td>
                                <td>string</td>
                                <td>horizontal</td>
                                <td>Orientation of the slider, valid values are horizontal and vertical.</td>
                            </tr>
                            <tr>
                                <td>step</td>
                                <td>number</td>
                                <td>1</td>
                                <td>Step factor to increment/decrement the value.</td>
                            </tr>
                            <tr>
                                <td>range</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When speficed, allows two boundary values to be picked.</td>
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
                                <td>Style class of the element.</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When present, it specifies that the component should be disabled.</td>
                            </tr>
                            <tr>
                                <td>tabIndex</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Index of the element in tabbing order.</td>
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
                                <td>
                                    event.originalEvent: Slide event <br />
                                    event.value: New value.
                                </td>
                                <td>Callback to invoke on value change via slide.</td>
                            </tr>
                            <tr>
                                <td>onSlideEnd</td>
                                <td>
                                    event.originalEvent: Slide event <br />
                                    event.value: New value.
                                </td>
                                <td>Callback to invoke when slide ends.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
