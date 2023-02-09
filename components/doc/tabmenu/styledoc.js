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
                            <td>p-tabmenu</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-tabmenu-nav</td>
                            <td>List element of headers.</td>
                        </tr>
                        <tr>
                            <td>p-tabmenuitem</td>
                            <td>Menuitem element.</td>
                        </tr>
                        <tr>
                            <td>p-menuitem-link</td>
                            <td>Link inside a menuitem.</td>
                        </tr>
                        <tr>
                            <td>p-menuitem-text</td>
                            <td>Label of a menuitem.</td>
                        </tr>
                        <tr>
                            <td>p-menuitem-icon</td>
                            <td>Icon of a menuitem.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
