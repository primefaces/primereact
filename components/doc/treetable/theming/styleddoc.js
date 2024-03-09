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
                            <td>p-treetable</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-treetable-header</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>p-treetable-footer</td>
                            <td>Footer section.</td>
                        </tr>
                        <tr>
                            <td>p-column-title</td>
                            <td>Title of a column.</td>
                        </tr>
                        <tr>
                            <td>p-sortable-column</td>
                            <td>Sortable column header.</td>
                        </tr>
                        <tr>
                            <td>p-treetable-scrollable-header</td>
                            <td>Container of header in a scrollable table.</td>
                        </tr>
                        <tr>
                            <td>p-treetable-scrollable-body</td>
                            <td>Container of body in a scrollable table.</td>
                        </tr>
                        <tr>
                            <td>p-treetable-scrollable-footer</td>
                            <td>Container of footer in a scrollable table.</td>
                        </tr>
                        <tr>
                            <td>p-treetable-emptymessage</td>
                            <td>Cell containing the empty message.</td>
                        </tr>
                        <tr>
                            <td>p-treetable-toggler</td>
                            <td>Toggler icon.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
