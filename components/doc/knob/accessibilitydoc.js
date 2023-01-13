import { DocSectionText } from '../common/docsectiontext';
import { DevelopmentSection } from '../common/developmentsection';
import { CodeHighlight } from '../common/codehighlight';

export function AccessibilityDoc() {
    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
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
            </DocSectionText>
        </DevelopmentSection>
    );
}
