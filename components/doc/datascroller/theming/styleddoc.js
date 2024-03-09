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
                            <td>p-datascroller</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-datascroller-header</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>p-datascroller-footer</td>
                            <td>Footer section.</td>
                        </tr>
                        <tr>
                            <td>p-datascroller-content</td>
                            <td>Wrapper of item container.</td>
                        </tr>
                        <tr>
                            <td>p-datascroller-list</td>
                            <td>Item container element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
