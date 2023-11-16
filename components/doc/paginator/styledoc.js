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
                            <td>p-paginator</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-paginator-first</td>
                            <td>First page element.</td>
                        </tr>
                        <tr>
                            <td>p-paginator-prev</td>
                            <td>Previous page element.</td>
                        </tr>
                        <tr>
                            <td>p-paginator-pages</td>
                            <td>Container of page links.</td>
                        </tr>
                        <tr>
                            <td>p-paginator-page</td>
                            <td>A page link.</td>
                        </tr>
                        <tr>
                            <td>p-paginator-next</td>
                            <td>Next pge element.</td>
                        </tr>
                        <tr>
                            <td>p-paginator-last</td>
                            <td>Last page element.</td>
                        </tr>
                        <tr>
                            <td>p-paginator-rpp-options</td>
                            <td>Rows per page dropdown.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
