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
                        InputSwitch component uses a hidden native checkbox element with <i>switch</i> role internally that is only visible to screen readers. Value to describe the component can either be provided via <i>label</i> tag combined with{' '}
                        <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props.
                    </p>
                    <CodeHighlight>
                        {`
<label htmlFor="switch1">Remember Me</label>
<InputSwitch inputId="switch1" />

<span id="switch2">Remember Me</span>
<InputSwitch aria-labelledby="switch2" />

<InputSwitch aria-label="Remember Me" />
`}
                    </CodeHighlight>
                    <h4>Keyboard Support</h4>
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
                                    <td>Moves focus to the switch.</td>
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
