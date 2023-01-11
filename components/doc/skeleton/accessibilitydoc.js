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
                        Skeleton uses <i>aria-hidden</i> as "true" so that it gets ignored by screen readers, any valid attribute is passed to the root element so you may customize it further if required. If multiple skeletons are grouped inside a
                        container, you may use <i>aria-busy</i> on the container element as well to indicate the loading process.
                    </p>

                    <h5>Keyboard Support</h5>
                    <p>Component does not include any interactive elements.</p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
