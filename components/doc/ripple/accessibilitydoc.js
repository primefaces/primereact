import { DocSectionText } from '../common/docsectiontext';
import { DevelopmentSection } from '../common/developmentsection';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h6>Screen Reader</h6>
            <p>
                Ripple element has the <i>aria-hidden</i> attribute as true so that it gets ignored by the screen readers.
            </p>

            <h6>Keyboard Support</h6>
            <p>Component does not include any interactive elements.</p>
        </DocSectionText>
    );
}
