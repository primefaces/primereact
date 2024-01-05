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
                            <td>p-orderlist</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-orderlist-list</td>
                            <td>List container.</td>
                        </tr>
                        <tr>
                            <td>p-orderlist-item</td>
                            <td>An item in the list</td>
                        </tr>
                        <tr>
                            <td>p-orderlist-filter-container</td>
                            <td>Container of filter input.</td>
                        </tr>
                        <tr>
                            <td>p-orderlist-filter</td>
                            <td>Filter element.</td>
                        </tr>
                        <tr>
                            <td>p-orderlist-filter-icon</td>
                            <td>Filter icon.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
