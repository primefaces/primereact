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
                            <td>p-card</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-card-title</td>
                            <td>Title element.</td>
                        </tr>
                        <tr>
                            <td>p-card-subtitle</td>
                            <td>Subtitle element.</td>
                        </tr>
                        <tr>
                            <td>p-card-content</td>
                            <td>Content of the card.</td>
                        </tr>
                        <tr>
                            <td>p-card-footer</td>
                            <td>Footer of the card.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
