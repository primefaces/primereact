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
                            <td>p-editor-container</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-editor-toolbar</td>
                            <td>Toolbar of the editor</td>
                        </tr>
                        <tr>
                            <td>p-editor-content</td>
                            <td>Editable area</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
