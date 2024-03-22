import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>FloatLabel does not require any roles and attributes.</p>

            <h3>Keyboard Support</h3>
            <p>Component does not include any interactive elements.</p>
        </DocSectionText>
    );
}
