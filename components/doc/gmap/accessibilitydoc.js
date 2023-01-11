import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function AccessibilityDoc() {
    return (
        <>
            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <p>
                        Refer to the <a href="https://support.google.com/maps/answer/6396990?hl=en&co=GENIE.Platform%3DDesktop">Google Maps documentation</a> for more information about accessibility.
                    </p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
