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
                            <td>p-panel</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-panel-titlebar</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>p-panel-title</td>
                            <td>Title text of panel.</td>
                        </tr>
                        <tr>
                            <td>p-panel-titlebar-toggler</td>
                            <td>Toggle icon.</td>
                        </tr>
                        <tr>
                            <td>p-panel-content</td>
                            <td>Content of panel.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
