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
                        Breadcrumb uses the <i>nav</i> element and since any attribute is passed to the root implicitly <i>aria-labelledby</i> or <i>aria-label</i> can be used to describe the component. Inside an ordered list is used where the list
                        item separators have <i>aria-hidden</i> to be able to ignored by the screen readers. If the last link represents the current route, <i>aria-current</i> is added with "page" as the value.
                    </p>

                    <h4>Keyboard Support</h4>
                    <p>No special keyboard interaction is needed, all menuitems are focusable based on the page tab sequence.</p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
