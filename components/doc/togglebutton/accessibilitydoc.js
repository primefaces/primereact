import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function AccessibilityDoc() {
    return (
        <>
            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h6>Screen Reader</h6>
                    <p>
                        ToggleButton component uses an element with <i>button</i> role and updates <i>aria-pressed</i> state for screen readers. Value to describe the component can be defined with <i>aria-labelledby</i> or <i>aria-label</i> props, it
                        is highly suggested to use either of these props as the component changes the label displayed which will result in screen readers to read different labels when the component receives focus. To prevent this, always provide an
                        aria label that does not change related to state.
                    </p>
                    <CodeHighlight>
                        {`
<span id="rememberme">Remember Me</span>
<ToggleButton aria-labelledby="rememberme" />

<ToggleButton aria-label="Remember Me" />
`}
                    </CodeHighlight>
                    <h6>Keyboard Support</h6>
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
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
