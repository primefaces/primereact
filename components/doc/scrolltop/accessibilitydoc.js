import { DevelopmentSection } from '@/components/doc/common/developmentsection';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

import Link from 'next/link';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                ScrollTop uses a button element with an <i>aria-label</i> that refers to the <i>aria.scrollTop</i> property of the <Link href="/locale">locale</Link> API by default, you may use your own aria roles and attributes as any valid
                attribute is passed to the button element implicitly.
            </p>

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
                                <i>enter</i>
                            </td>
                            <td>Scrolls to top.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>space</i>
                            </td>
                            <td>Scrolls to top.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </DocSectionText>
    );
}
