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
                            <td>p-listbox</td>
                            <td>Main container element.</td>
                        </tr>
                        <tr>
                            <td>p-listbox-header</td>
                            <td>Header element.</td>
                        </tr>
                        <tr>
                            <td>p-listbox-list-wrapper</td>
                            <td>Container of list element.</td>
                        </tr>
                        <tr>
                            <td>p-listbox-list</td>
                            <td>List element.</td>
                        </tr>
                        <tr>
                            <td>p-listbox-item</td>
                            <td>An item in the list element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
