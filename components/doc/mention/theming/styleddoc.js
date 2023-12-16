import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function StyledDoc() {
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
                            <td>p-mention</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-mention-panel</td>
                            <td>Overlay panel of suggestions.</td>
                        </tr>
                        <tr>
                            <td>p-mention-items</td>
                            <td>List container of suggestions.</td>
                        </tr>
                        <tr>
                            <td>p-mention-item</td>
                            <td>List item of a suggestion.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
