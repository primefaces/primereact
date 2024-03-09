import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    const code = {
        basic: `
<label htmlFor="chkbox1">Remember Me</label>
<Checkbox inputId="chkbox1" />

<span id="chkbox2">Remember Me</span>
<Checkbox aria-labelledby="chkbox2" />

<Checkbox aria-label="Remember Me" />
        `
    };

    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                Checkbox component uses a hidden native checkbox element internally that is only visible to screen readers. Value to describe the component can either be provided via <i>label</i> tag combined with <i>inputId</i> prop or using{' '}
                <i>aria-labelledby</i>, <i>aria-label</i> props.
            </p>

            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />

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
                            <td>Moves focus to the checkbox.</td>
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
    );
}
