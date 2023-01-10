import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function AccessibilityDoc() {
    return (
        <>
            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <p>
                        Refer to the{' '}
                        <a alt="Recaptcha Accessibility " href="https://support.google.com/recaptcha/answer/6175971?hl=en">
                            Recaptcha Accessibility
                        </a>{' '}
                        documentation for more information.
                    </p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
