import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function AccessibilityDoc() {
    const code = {
        basic: `
<label htmlFor="switch1">Remember Me</label>
<InputSwitch inputId="switch1" />

<span id="switch2">Remember Me</span>
<InputSwitch aria-labelledby="switch2" />

<InputSwitch aria-label="Remember Me" />
    `
    };

    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
                <h3>Screen Reader</h3>
                <p>
                    InputSwitch component uses a hidden native checkbox element with <i>switch</i> role internally that is only visible to screen readers. Value to describe the component can either be provided via <i>label</i> tag combined with{' '}
                    <i>inputId</i> prop or using <i>aria-labelledby</i>, <i>aria-label</i> props.
                </p>

                <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />

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
            </DocSectionText>
        </DevelopmentSection>
    );
}
