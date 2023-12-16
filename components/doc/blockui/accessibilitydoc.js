import { DevelopmentSection } from '@/components/doc/common/developmentsection';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                BlockUI manages <i>aria-busy</i> state attribute when the UI gets blocked and unblocked. Any valid attribute is passed to the root element so additional attributes like <i>role</i> and <i>aria-live</i> can be used to define live
                regions.
            </p>

            <h4>Keyboard Support</h4>
            <p>Component does not include any interactive elements.</p>
        </DocSectionText>
    );
}
