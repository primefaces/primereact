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
                            <td>p-button</td>
                            <td>Button element</td>
                        </tr>
                        <tr>
                            <td>p-button-icon</td>
                            <td>Icon element</td>
                        </tr>
                        <tr>
                            <td>p-button-text</td>
                            <td>Label element of the button</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
