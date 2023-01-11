import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';
import Link from 'next/link';

export function AccessibilityDoc() {
    return (
        <>
            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        MultiStateCheckbox component uses an element with <i>checkbox</i> role. Value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. Component adds an element with
                        <i>aria-live</i> attribute that is only visible to screen readers to read the value displayed. Values to read are defined with the <i>optionLabel</i> property that defaults to <i>optionValue</i> if not defined. Unchecked state
                        label on the other hand is retrieved from <i>nullLabel</i> key of the <i>aria</i> property from the <Link href="/locale">locale</Link> API. This is an example of a custom accessibility implementation as there is no one to one
                        mapping between the component design and the WCAG specification.
                    </p>
                    <CodeHighlight>
                        {`
<span id="chkbox1">Access Type</span>
<MultiStateCheckbox aria-labelledby="chkbox1" />

<TriStateCheckbox aria-label="Access Type" />
`}
                    </CodeHighlight>
                    <h4>Keyboard Support</h4>
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
                                    <td>Moves focus to the checkbox.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Toggles between the values.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
