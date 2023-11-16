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
                            <td>p-accordion</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-accordion-header</td>
                            <td>Header of a tab.</td>
                        </tr>
                        <tr>
                            <td>p-accordion-content</td>
                            <td>Container of a tab.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
