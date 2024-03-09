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
                            <td>p-listbox</td>
                            <td>Main container element.</td>
                        </tr>
                        <tr>
                            <td>p-listbox-header</td>
                            <td>Header element.</td>
                        </tr>
                        <tr>
                            <td>p-listbox-list-wrapper</td>
                            <td>Container of list element.</td>
                        </tr>
                        <tr>
                            <td>p-listbox-list</td>
                            <td>List element.</td>
                        </tr>
                        <tr>
                            <td>p-listbox-item</td>
                            <td>An item in the list element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
