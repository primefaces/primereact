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
                            <td>p-fieldset</td>
                            <td>Fieldset element.</td>
                        </tr>
                        <tr>
                            <td>p-fieldset-toggleable</td>
                            <td>Toggleable fieldset element.</td>
                        </tr>
                        <tr>
                            <td>p-fieldset-legend</td>
                            <td>Legend element.</td>
                        </tr>
                        <tr>
                            <td>p-fieldset-content</td>
                            <td>Content element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
