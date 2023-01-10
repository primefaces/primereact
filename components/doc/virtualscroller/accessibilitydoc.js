import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function AccessibilityDoc() {
    return (
        <>
            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        VirtualScroller uses a semantic list element to list the items. No specific role is enforced, still you may use any aria role and attributes as any valid attribute is passed to the container element. List element can be also
                        customized for accessibility using <i>listProps</i> property.
                    </p>

                    <h5>Keyboard Support</h5>
                    <p>Component does not include any built-in interactive elements.</p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
