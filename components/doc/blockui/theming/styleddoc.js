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
                            <td>p-blockui</td>
                            <td>Mask element.</td>
                        </tr>
                        <tr>
                            <td>p-blockui-document</td>
                            <td>Mask element in full screen mode.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
