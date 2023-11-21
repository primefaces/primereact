import { DevelopmentSection } from '@/components/doc/common/developmentsection';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
                <p>
                    Refer to the{' '}
                    <a alt="Recaptcha Accessibility " href="https://support.google.com/recaptcha/answer/6175971?hl=en">
                        Recaptcha Accessibility
                    </a>{' '}
                    documentation for more information.
                </p>
            </DocSectionText>
        </DevelopmentSection>
    );
}
