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
                            <td>p-speeddial</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-speeddial-button</td>
                            <td>Button element of speeddial.</td>
                        </tr>
                        <tr>
                            <td>p-speeddial-mask</td>
                            <td>Mask element of speeddial.</td>
                        </tr>
                        <tr>
                            <td>p-speeddial-list</td>
                            <td>List of the actions.</td>
                        </tr>
                        <tr>
                            <td>p-speeddial-item</td>
                            <td>Each action item of list.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
