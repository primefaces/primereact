import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                DataScroller uses a semantic list element to list the items. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the container element. List element can be also customized
                for accessibility using <i>listProps</i> property.
            </p>

            <h4>Keyboard Support</h4>
            <p>Component does not include any built-in interactive elements.</p>
        </DocSectionText>
    );
}
