import { DocSectionText } from '../common/docsectiontext';

export function StyleDoc() {
    return (
        <>
            <DocSectionText id="style" label="Style">
                <p>Following is the list of structural style classes</p>
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
                            <td>p-mention</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-mention-panel</td>
                            <td>Overlay panel of suggestions.</td>
                        </tr>
                        <tr>
                            <td>p-mention-items</td>
                            <td>List container of suggestions.</td>
                        </tr>
                        <tr>
                            <td>p-mention-item</td>
                            <td>List item of a suggestion.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
