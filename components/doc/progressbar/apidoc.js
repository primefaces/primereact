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
                                <td>p-progressbar</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-progressbar-determinate</td>
                                <td>Container element of a determinate progressbar.</td>
                            </tr>
                            <tr>
                                <td>p-progressbar-indeterminate</td>
                                <td>Container element of an indeterminate progressbar.</td>
                            </tr>
                            <tr>
                                <td>p-progressbar-value</td>
                                <td>Element whose width changes according to value.</td>
                            </tr>
                            <tr>
                                <td>p-progressbar-label</td>
                                <td>Label element that displays the current value.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        ProgressBar components uses <i>progressbar</i> role along with <i>aria-valuemin</i>, <i>aria-valuemax</i> and <i>aria-valuenow</i> attributes. Value to describe the component can be defined using
                        <i>aria-labelledby</i> and <i>aria-label</i> props.
                    </p>
                    <CodeHighlight>
                        {`
<span id="label_status">Status</span>
<ProgressBar aria-labelledby="label_status" />

<ProgressBar aria-label="Status" />
`}
                    </CodeHighlight>

                    <h6>Keyboard Support</h6>
                    <p>Not applicable.</p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
