import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function AccessibilityDoc() {
    return (
        <>
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
