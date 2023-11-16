import { DevelopmentSection } from '@/components/doc/common/developmentsection';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
                <h6>Screen Reader</h6>
                <p>
                    Ripple element has the <i>aria-hidden</i> attribute as true so that it gets ignored by the screen readers.
                </p>

                <h6>Keyboard Support</h6>
                <p>Component does not include any interactive elements.</p>
            </DocSectionText>
        </DevelopmentSection>
    );
}
