import { CodeHighlight } from '@/components/doc/common/codehighlight';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                ProgressSpinner components uses <i>progressbar</i> role. Value to describe the component can be defined using <i>aria-labelledby</i> and <i>aria-label</i> props.
            </p>
            <CodeHighlight>
                {`
<ProgressSpinner aria-label="Loading" />
`}
            </CodeHighlight>

            <h3>Keyboard Support</h3>
            <p>Component does not include any interactive elements.</p>
        </DocSectionText>
    );
}
