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
                            <td>p-dataview</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-dataview-list</td>
                            <td>Container element in list layout.</td>
                        </tr>
                        <tr>
                            <td>p-dataview-grid</td>
                            <td>Container element in grid layout.</td>
                        </tr>
                        <tr>
                            <td>p-dataview-header</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>p-dataview-footer</td>
                            <td>Footer section.</td>
                        </tr>
                        <tr>
                            <td>p-dataview-content</td>
                            <td>Container of items.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
