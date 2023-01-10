import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function AccessibilityDoc() {
    return (
        <>
            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <p>
                        Refer to <Link href="/inputtext">InputText</Link> for accessibility as KeyFilter is a built-in add-on of the InputText.
                    </p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
