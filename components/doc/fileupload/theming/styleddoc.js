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
                            <td>p-fileupload</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-fileupload-buttonbar</td>
                            <td>Header containing the buttons.</td>
                        </tr>
                        <tr>
                            <td>p-fileupload-content</td>
                            <td>Content section.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
