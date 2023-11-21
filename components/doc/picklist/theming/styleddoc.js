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
                            <td>p-picklist</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-picklist-source-controls</td>
                            <td>Container of source list buttons.</td>
                        </tr>
                        <tr>
                            <td>p-picklist-target-controls</td>
                            <td>Container of target list buttons.</td>
                        </tr>
                        <tr>
                            <td>p-picklist-buttons</td>
                            <td>Container of buttons.</td>
                        </tr>
                        <tr>
                            <td>p-picklist-listwrapper</td>
                            <td>Parent of a list element.</td>
                        </tr>
                        <tr>
                            <td>p-picklist-list</td>
                            <td>List element.</td>
                        </tr>
                        <tr>
                            <td>p-picklist-item</td>
                            <td>An item in the list.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
