import { DevelopmentSection } from '@/components/doc/common/developmentsection';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
                <p>
                    Refer to the <a href="https://support.google.com/maps/answer/6396990?hl=en&co=GENIE.Platform%3DDesktop">Google Maps documentation</a> for more information about accessibility.
                </p>
            </DocSectionText>
        </DevelopmentSection>
    );
}
