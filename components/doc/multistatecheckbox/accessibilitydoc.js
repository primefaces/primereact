import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function AccessibilityDoc() {
    const code = {
        basic: `
<span id="chkbox1">Access Type</span>
<MultiStateCheckbox aria-labelledby="chkbox1" />

<TriStateCheckbox aria-label="Access Type" />
    `
    };

    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                MultiStateCheckbox component uses an element with <i>checkbox</i> role. Value to describe the component can either be provided with <i>aria-labelledby</i> or <i>aria-label</i> props. Component adds an element with
                <i>aria-live</i> attribute that is only visible to screen readers to read the value displayed. Values to read are defined with the <i>optionLabel</i> property that defaults to <i>optionValue</i> if not defined. Unchecked state label
                on the other hand is retrieved from <i>nullLabel</i> key of the <i>aria</i> property from the <Link href="/locale">locale</Link> API. This is an example of a custom accessibility implementation as there is no one to one mapping
                between the component design and the WCAG specification.
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
                            <td>Toggles between the values.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </DocSectionText>
    );
}
