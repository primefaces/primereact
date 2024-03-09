import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function StyledDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>List of class names used in the styled mode.</p>
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
                            <td>p-panelmenu</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-panelmenu-header</td>
                            <td>Accordion header of root submenu.</td>
                        </tr>
                        <tr>
                            <td>p-panelmenu-content</td>
                            <td>Accordion content of root submenu.</td>
                        </tr>
                        <tr>
                            <td>p-submenu-list</td>
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
                            <td>p-panelmenu-icon</td>
                            <td>Arrow icon of an accordion header.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
