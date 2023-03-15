import { DocSectionText } from '../common/docsectiontext';
import { DevelopmentSection } from '../common/developmentsection';

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
