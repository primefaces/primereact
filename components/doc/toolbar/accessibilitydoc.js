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
                        Toolbar uses <i>toolbar</i> role to the root element, <i>aria-orientation</i> is not included as it defaults to "horizontal". Any valid attribute is passed to the root element so you may add additional properties like{' '}
                        <i>aria-labelledby</i>
                        to define the element if required.
                    </p>

                    <CodeHighlight>
                        {`
<Card role="region">
    Content
</Card>
`}
                    </CodeHighlight>

                    <h3>Keyboard Support</h3>
                    <p>Component does not include any interactive elements. Arbitrary content can be placed with templating and elements like buttons inside should follow the page tab sequence.</p>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
