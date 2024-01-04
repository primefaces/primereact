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
                            <td>p-chkbox</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-multistatechkbox</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-chkbox-box</td>
                            <td>Container of icon.</td>
                        </tr>
                        <tr>
                            <td>p-chkbox-icon</td>
                            <td>Icon element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
