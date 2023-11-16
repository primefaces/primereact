import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

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
                            <td>p-messages</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-messages-info</td>
                            <td>Container element when displaying info messages.</td>
                        </tr>
                        <tr>
                            <td>p-messages-warn</td>
                            <td>Container element when displaying warning messages.</td>
                        </tr>
                        <tr>
                            <td>p-messages-error</td>
                            <td>Container element when displaying error messages.</td>
                        </tr>
                        <tr>
                            <td>p-messages-success</td>
                            <td>Container element when displaying success messages.</td>
                        </tr>
                        <tr>
                            <td>p-messages-close</td>
                            <td>Close icon.</td>
                        </tr>
                        <tr>
                            <td>p-messages-icon</td>
                            <td>Severity icon.</td>
                        </tr>
                        <tr>
                            <td>p-messages-summary</td>
                            <td>Summary of a message.</td>
                        </tr>
                        <tr>
                            <td>p-messages-detail</td>
                            <td>Detail of a message.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
