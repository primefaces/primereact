import { DevelopmentSection } from '@/components/doc/common/developmentsection';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

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
