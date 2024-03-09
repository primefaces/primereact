import { CodeHighlight } from '@/components/doc/common/codehighlight';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                DeferredContent can be utilized in many use cases as a result no role is enforced, in fact a role may not be necessary if the card is used for presentational purposes only. Any valid attribute is passed to the container element so you
                have full control over the roles like{' '}
                <a href="https://www.w3.org/TR/wai-aria/#landmark" alt="Landmark Roles">
                    landmark
                </a>{' '}
                and attributes like <i>aria-live</i>.
            </p>
            <CodeHighlight>
                {`
<DeferredContent role="region" aria-live="polite" aria-label="Content loaded after page scrolled down">
Content
</DeferredContent>
`}
            </CodeHighlight>

            <h3>Keyboard Support</h3>
            <p>Component does not include any interactive elements.</p>
        </DocSectionText>
    );
}
