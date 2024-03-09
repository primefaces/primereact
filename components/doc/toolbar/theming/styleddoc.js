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
                            <td>p-toolbar</td>
                            <td>Main container element.</td>
                        </tr>
                        <tr>
                            <td>p-toolbar-group-start</td>
                            <td>Left content container.</td>
                        </tr>
                        <tr>
                            <td>p-toolbar-group-center</td>
                            <td>Center content container.</td>
                        </tr>
                        <tr>
                            <td>p-toolbar-group-end</td>
                            <td>Right content container.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
