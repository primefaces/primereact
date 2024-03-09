import { DevelopmentSection } from '@/components/doc/common/developmentsection';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                Avatar does not include any roles and attributes by default. Any attribute is passed to the root element so you may add a role like <i>img</i> along with <i>aria-labelledby</i> or <i>aria-label</i> to describe the component. In case
                avatars need to be tabbable, <i>tabIndex</i> can be added as well to implement custom key handlers.
            </p>

            <h4>Keyboard Support</h4>
            <p>Component does not include any interactive elements.</p>
        </DocSectionText>
    );
}
