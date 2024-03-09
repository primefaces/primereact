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
                            <td>p-confirm-popup</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-confirm-content</td>
                            <td>Content element.</td>
                        </tr>
                        <tr>
                            <td>p-confirm-popup-icon</td>
                            <td>Message icon.</td>
                        </tr>
                        <tr>
                            <td>p-confirm-popup-message</td>
                            <td>Message text.</td>
                        </tr>
                        <tr>
                            <td>p-confirm-popup-footer</td>
                            <td>Footer element for buttons.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
