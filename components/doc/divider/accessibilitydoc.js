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
                        Divider uses a <i>separator</i> role with <i>aria-orientation</i> set to either "horizontal" or "vertical".
                    </p>

                    <h3>Keyboard Support</h3>
                    <p>Component does not include any interactive elements.</p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
