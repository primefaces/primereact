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
                            <td>p-tree</td>
                            <td>Main container element</td>
                        </tr>
                        <tr>
                            <td>p-tree-horizontal</td>
                            <td>Main container element in horizontal mode</td>
                        </tr>
                        <tr>
                            <td>p-tree-container</td>
                            <td>Container of nodes</td>
                        </tr>
                        <tr>
                            <td>p-treenode</td>
                            <td>A treenode element</td>
                        </tr>
                        <tr>
                            <td>p-treenode-content</td>
                            <td>Content of a treenode</td>
                        </tr>
                        <tr>
                            <td>p-treenode-toggler</td>
                            <td>Toggle element</td>
                        </tr>
                        <tr>
                            <td>p-treenode-toggler-icon</td>
                            <td>Toggle icon</td>
                        </tr>
                        <tr>
                            <td>p-treenode-icon</td>
                            <td>Icon of a treenode</td>
                        </tr>
                        <tr>
                            <td>p-treenode-label</td>
                            <td>Label of a treenode</td>
                        </tr>
                        <tr>
                            <td>p-treenode-children</td>
                            <td>Container element for node children</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
