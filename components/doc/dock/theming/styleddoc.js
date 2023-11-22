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
                            <td>p-dock</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-dock-list</td>
                            <td>List of items.</td>
                        </tr>
                        <tr>
                            <td>p-dock-item</td>
                            <td>Each items in list.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
