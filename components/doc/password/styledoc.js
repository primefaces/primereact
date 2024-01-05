import Link from 'next/link';

import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function StyleDoc() {
    return (
        <>
            <DocSectionText id="style" label="Style">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.
                </p>
            </DocSectionText>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p-password</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-password-input</td>
                            <td>Input Element</td>
                        </tr>
                        <tr>
                            <td>p-password-panel</td>
                            <td>Container of password panel</td>
                        </tr>
                        <tr>
                            <td>p-password-meter</td>
                            <td>Meter element of password strength</td>
                        </tr>
                        <tr>
                            <td>p-password-info</td>
                            <td>Text to display strength</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
