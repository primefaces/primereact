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
                            <td>p-panel</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-panel-titlebar</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>p-panel-title</td>
                            <td>Title text of panel.</td>
                        </tr>
                        <tr>
                            <td>p-panel-titlebar-toggler</td>
                            <td>Toggle icon.</td>
                        </tr>
                        <tr>
                            <td>p-panel-content</td>
                            <td>Content of panel.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
