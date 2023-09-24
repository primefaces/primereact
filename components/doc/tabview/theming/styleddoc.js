import { DocSectionText } from '../../common/docsectiontext';

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
                            <td>p-tabview</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-tabview-nav</td>
                            <td>Container of headers.</td>
                        </tr>
                        <tr>
                            <td>p-tabview-selected</td>
                            <td>Selected tab header.</td>
                        </tr>
                        <tr>
                            <td>p-tabview-panels</td>
                            <td>Container panels.</td>
                        </tr>
                        <tr>
                            <td>p-tabview-panel</td>
                            <td>Content of a tab.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
