import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function AccessibilityDoc() {
    return (
        <>
            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>Timeline uses a semantic ordered list element to list the events. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the list element.</p>

                    <h5>Keyboard Support</h5>
                    <p>Component does not include any interactive elements.</p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
