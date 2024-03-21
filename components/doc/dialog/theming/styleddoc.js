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
                            <td>p-dialog</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-dialog-header</td>
                            <td>Container of header.</td>
                        </tr>
                        <tr>
                            <td>p-dialog-title</td>
                            <td>Header element.</td>
                        </tr>
                        <tr>
                            <td>p-dialog-header-icons</td>
                            <td>Icon container inside header.</td>
                        </tr>
                        <tr>
                            <td>p-dialog-header-close</td>
                            <td>Close icon element.</td>
                        </tr>
                        <tr>
                            <td>p-dialog-header-maximize</td>
                            <td>Maximize icon element.</td>
                        </tr>
                        <tr>
                            <td>p-dialog-content</td>
                            <td>Content element</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
