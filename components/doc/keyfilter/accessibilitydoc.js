import Link from 'next/link';
import { DocSectionText } from '../common/docsectiontext';
import { DevelopmentSection } from '../common/developmentsection';

export function AccessibilityDoc() {
    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
                <p>
                    Refer to <Link href="/inputtext">InputText</Link> for accessibility as KeyFilter is a built-in add-on of the InputText.
                </p>
            </DocSectionText>
        </DevelopmentSection>
    );
}
