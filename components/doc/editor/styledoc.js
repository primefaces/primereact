import { DocSectionText } from '../common/docsectiontext';
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
                            <td>p-editor-container</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-editor-toolbar</td>
                            <td>Toolbar of the editor</td>
                        </tr>
                        <tr>
                            <td>p-editor-content</td>
                            <td>Editable area</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
