import { DocSectionText } from '../common/docsectiontext';

export function StyleDoc() {
    return (
        <>
            <DocSectionText id="style" label="Style">
                <p>Following is the list of structural style classes.</p>
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
                            <td>p-slidemenu</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-slidemenu-wrapper</td>
                            <td>Wrapper of content.</td>
                        </tr>
                        <tr>
                            <td>p-slidemenu-content</td>
                            <td>Content element.</td>
                        </tr>
                        <tr>
                            <td>p-slidemenu-backward</td>
                            <td>Element to navigate to previous menu on click.</td>
                        </tr>
                        <tr>
                            <td>p-menu-list</td>
                            <td>List element.</td>
                        </tr>
                        <tr>
                            <td>p-menuitem</td>
                            <td>Menuitem element.</td>
                        </tr>
                        <tr>
                            <td>p-menuitem-text</td>
                            <td>Label of a menuitem.</td>
                        </tr>
                        <tr>
                            <td>p-menuitem-icon</td>
                            <td>Icon of a menuitem.</td>
                        </tr>
                        <tr>
                            <td>p-submenu-icon</td>
                            <td>Arrow icon of a submenu.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
