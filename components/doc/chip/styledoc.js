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
                            <td>p-chip</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-chip-image</td>
                            <td>Container element in image mode.</td>
                        </tr>
                        <tr>
                            <td>p-chip-text</td>
                            <td>Text of the chip.</td>
                        </tr>
                        <tr>
                            <td>pi-chip-remove-icon</td>
                            <td>Remove icon.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
