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
                            <td>p-dataview</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-dataview-list</td>
                            <td>Container element in list layout.</td>
                        </tr>
                        <tr>
                            <td>p-dataview-grid</td>
                            <td>Container element in grid layout.</td>
                        </tr>
                        <tr>
                            <td>p-dataview-header</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>p-dataview-footer</td>
                            <td>Footer section.</td>
                        </tr>
                        <tr>
                            <td>p-dataview-content</td>
                            <td>Container of items.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
