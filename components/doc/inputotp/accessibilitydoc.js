import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function AccessibilityDoc() {
    return (
        <DocSectionText id="accessibility" label="Accessibility">
            <h3>Screen Reader</h3>
            <p>
                Input OTP uses a set of InputText components, refer to the <Link href="/inputtext">InputText</Link> component for more information about the screen reader support.
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
                                <i>tab</i>
                            </td>
                            <td>Moves focus to the input otp.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>right arrow</i>
                            </td>
                            <td>Moves focus to the next input element.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>left arrow</i>
                            </td>
                            <td>Moves focus to the previous input element.</td>
                        </tr>
                        <tr>
                            <td>
                                <i>backspace</i>
                            </td>
                            <td>Deletes the input and moves focus to the previous input element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </DocSectionText>
    );
}
