import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function StyleDoc() {
    return (
        <>
            <DocSectionText id="style" label="Style">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.
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
                            <td>p-tag</td>
                            <td>Tag element</td>
                        </tr>
                        <tr>
                            <td>p-tag-rounded</td>
                            <td>Rounded element</td>
                        </tr>
                        <tr>
                            <td>p-tag-icon</td>
                            <td>Icon of the tag</td>
                        </tr>
                        <tr>
                            <td>p-tag-value</td>
                            <td>Value of the tag</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
