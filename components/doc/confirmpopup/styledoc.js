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
                            <td>p-confirm-popup</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-confirm-content</td>
                            <td>Content element.</td>
                        </tr>
                        <tr>
                            <td>p-confirm-popup-icon</td>
                            <td>Message icon.</td>
                        </tr>
                        <tr>
                            <td>p-confirm-popup-message</td>
                            <td>Message text.</td>
                        </tr>
                        <tr>
                            <td>p-confirm-popup-footer</td>
                            <td>Footer element for buttons.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
