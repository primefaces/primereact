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
                            <td>p-autocomplete</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-autocomplete-panel</td>
                            <td>Overlay panel of suggestions.</td>
                        </tr>
                        <tr>
                            <td>p-autocomplete-items</td>
                            <td>List container of suggestions.</td>
                        </tr>
                        <tr>
                            <td>p-autocomplete-item</td>
                            <td>List item of a suggestion.</td>
                        </tr>
                        <tr>
                            <td>p-autocomplete-token</td>
                            <td>Element of a selected item in multiple mode.</td>
                        </tr>
                        <tr>
                            <td>p-autocomplete-token-icon</td>
                            <td>Close icon element of a selected item in multiple mode.</td>
                        </tr>
                        <tr>
                            <td>p-autocomplete-token-label</td>
                            <td>Label of a selected item in multiple mode.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
