import { DocSectionText } from '../common/docsectiontext';
import { DevelopmentSection } from '../common/developmentsection';
import { CodeHighlight } from '../common/codehighlight';

export function AccessibilityDoc() {
    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
                <h3>Screen Reader</h3>
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
                <h3>Keyboard Support</h3>
                <p>Not applicable.</p>
            </DocSectionText>
        </DevelopmentSection>
    );
}
