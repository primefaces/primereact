import { DocSectionText } from '../common/docsectiontext';
import { DevelopmentSection } from '../common/developmentsection';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h6>Screen Reader</h6>
            <p>
                ProgressSpinner components uses <i>progressbar</i> role. Value to describe the component can be defined using <i>aria-labelledby</i> and <i>aria-label</i> props.
            </p>

            {`
<ProgressSpinner aria-label="Loading" />
`}

            <h6>Keyboard Support</h6>
            <p>Component does not include any interactive elements.</p>
        </DocSectionText>
    );
}
