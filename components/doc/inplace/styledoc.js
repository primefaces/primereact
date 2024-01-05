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
                            <td>p-inplace</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-inplace-display</td>
                            <td>Display container</td>
                        </tr>
                        <tr>
                            <td>p-inplace-content</td>
                            <td>Content container</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
