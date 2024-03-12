import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AccessibilityDoc() {
    const code = {
        basic: `
<label htmlFor="address1">Address 1</label>
<InputTextarea id="address1" />

<span id="address2">Address 2</span>
<InputTextarea aria-labelledby="address2" />

<InputTextarea aria-label="Address Details"/>
    `
    };

    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                InputTextarea component renders a native textarea element that implicitly includes any passed prop. Value to describe the component can either be provided via <i>label</i> tag combined with <i>id</i> prop or using{' '}
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
                            <td>Moves focus to the input.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </DocSectionText>
    );
}
