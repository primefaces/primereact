import { DocSectionText } from '../common/docsectiontext';
import { DevelopmentSection } from '../common/developmentsection';
import { CodeHighlight } from '../common/codehighlight';

export function AccessibilityDoc() {
    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
                <h3>Screen Reader</h3>
                <p>
                    ToggleButton component uses an element with <i>button</i> role and updates <i>aria-pressed</i> state for screen readers. Value to describe the component can be defined with <i>aria-labelledby</i> or <i>aria-label</i> props, it is
                    highly suggested to use either of these props as the component changes the label displayed which will result in screen readers to read different labels when the component receives focus. To prevent this, always provide an aria
                    label that does not change related to state.
                </p>
                <CodeHighlight>
                    {`
<span id="rememberme">Remember Me</span>
<ToggleButton aria-labelledby="rememberme" />

<ToggleButton aria-label="Remember Me" />
`}
                </CodeHighlight>

                <h3>Keyboard Support</h3>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <i>tab</i>
                                </td>
                                <td>Moves focus to the button.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>space</i>
                                </td>
                                <td>Toggles the checked state.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSectionText>
        </DevelopmentSection>
    );
}
