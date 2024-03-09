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
                            <td>p-message</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-message-info</td>
                            <td>Container element when displaying info messages.</td>
                        </tr>
                        <tr>
                            <td>p-message-warn</td>
                            <td>Container element when displaying warning messages.</td>
                        </tr>
                        <tr>
                            <td>p-message-error</td>
                            <td>Container element when displaying error messages.</td>
                        </tr>
                        <tr>
                            <td>p-message-success</td>
                            <td>Container element when displaying success messages.</td>
                        </tr>
                        <tr>
                            <td>p-message-close</td>
                            <td>Close icon.</td>
                        </tr>
                        <tr>
                            <td>p-message-icon</td>
                            <td>Severity icon.</td>
                        </tr>
                        <tr>
                            <td>p-message-summary</td>
                            <td>Summary of a message.</td>
                        </tr>
                        <tr>
                            <td>p-message-detail</td>
                            <td>Detail of a message.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
