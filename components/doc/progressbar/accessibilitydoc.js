import { CodeHighlight } from '@/components/doc/common/codehighlight';
import { DevelopmentSection } from '@/components/doc/common/developmentsection';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    return (
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
    );
}
