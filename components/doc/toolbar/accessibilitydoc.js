import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AccessibilityDoc() {
    const code = {
        basic: `
<Toolbar aria-label="Actions">
    Content
</Toolbar>
    `
    };

    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
                <h3>Screen Reader</h3>
                <p>
                    Toolbar uses <i>toolbar</i> role for the root element, <i>aria-orientation</i> is not included as it defaults to <i>horizontal</i>. Any valid attribute is passed to the root element so you may add additional properties like{' '}
                    <i>aria-labelledby</i> and <i>aria-labelled</i> to define the element if required.
                </p>

                <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />

                <h3>Keyboard Support</h3>
                <p>Component does not include any interactive elements. Arbitrary content can be placed with templating and elements like buttons inside should follow the page tab sequence.</p>
            </DocSectionText>
        </DevelopmentSection>
    );
}
