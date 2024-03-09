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
                            <td>p-chips</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-chips-token</td>
                            <td>Chip element container.</td>
                        </tr>
                        <tr>
                            <td>p-chips-token-icon</td>
                            <td>Icon of a chip.</td>
                        </tr>
                        <tr>
                            <td>p-chips-token-label</td>
                            <td>label of a chip.</td>
                        </tr>
                        <tr>
                            <td>p-chips-input-token</td>
                            <td>Container of input element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
