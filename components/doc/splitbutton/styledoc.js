import Link from 'next/link';

import { DocSectionText } from '../common/docsectiontext';

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
                            <td>p-splitbutton</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-splitbutton-button</td>
                            <td>Dropdown button.</td>
                        </tr>
                        <tr>
                            <td>p-menu</td>
                            <td>Overlay menu.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
