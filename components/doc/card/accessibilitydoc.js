import { DocSectionText } from '../common/docsectiontext';
import { DevelopmentSection } from '../common/developmentsection';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                A card can be utilized in many use cases as a result no role is enforced, in fact a role may not be necessary if the card is used for presentational purposes only. Any valid attribute is passed to the container element so if you
                require to use one of the{' '}
                <a href="https://www.w3.org/TR/wai-aria/#landmark" alt="Landmark Roles">
                    landmark
                </a>
                roles like <i>region</i>, you may use the <i>role</i> property.
            </p>

            {`
<Card role="region">
    Content
</Card>
`}

            <h3>Keyboard Support</h3>
            <p>Component does not include any interactive elements.</p>
        </DocSectionText>
    );
}
