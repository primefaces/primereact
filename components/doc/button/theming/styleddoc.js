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
                            <td>p-button</td>
                            <td>Button element</td>
                        </tr>
                        <tr>
                            <td>p-button-icon</td>
                            <td>Icon element</td>
                        </tr>
                        <tr>
                            <td>p-button-text</td>
                            <td>Label element of the button</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
