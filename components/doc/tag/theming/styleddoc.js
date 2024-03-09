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
                            <td>p-tag</td>
                            <td>Tag element</td>
                        </tr>
                        <tr>
                            <td>p-tag-rounded</td>
                            <td>Rounded element</td>
                        </tr>
                        <tr>
                            <td>p-tag-icon</td>
                            <td>Icon of the tag</td>
                        </tr>
                        <tr>
                            <td>p-tag-value</td>
                            <td>Value of the tag</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
