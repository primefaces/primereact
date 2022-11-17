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
                                <td>p-knob</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-knob-range</td>
                                <td>Range element.</td>
                            </tr>
                            <tr>
                                <td>p-knob-value</td>
                                <td>Value element.</td>
                            </tr>
                            <tr>
                                <td>p-knob-text</td>
                                <td>Text element.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>
                        Knob element component uses <i>slider</i> role in addition to the <i>aria-valuemin</i>, <i>aria-valuemax</i> and <i>aria-valuenow</i> attributes. Value to describe the component can be defined using
                        <i>aria-labelledby</i> and <i>aria-label</i> props.
                    </p>
                    <CodeHighlight>
                        {`
<span id="label_number">Number</span>
<Knob aria-labelledby="label_number" />

<Knob aria-label="Number" />
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
                                    <td>Moves focus to the slider.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="inline-flex flex-column">
                                            <i className="mb-1">left arrow</i>
                                            <i>down arrow</i>
                                        </span>
                                    </td>
                                    <td>Decrements the value.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="inline-flex flex-column">
                                            <i className="mb-1">right arrow</i>
                                            <i>up arrow</i>
                                        </span>
                                    </td>
                                    <td>Increments the value.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>home</i>
                                    </td>
                                    <td>Set the minimum value.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>end</i>
                                    </td>
                                    <td>Set the maximum value.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>page up</i>
                                    </td>
                                    <td>Increments the value by 10 steps.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>page down</i>
                                    </td>
                                    <td>Decrements the value by 10 steps.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
