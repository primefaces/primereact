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
                            <td>p-multiselect</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-label-container</td>
                            <td>Container of the label to display selected items.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-label-container</td>
                            <td>Label to display selected items.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-trigger</td>
                            <td>Dropdown button.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-filter-container</td>
                            <td>Container of filter input.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-panel</td>
                            <td>Overlay panel for items.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-items</td>
                            <td>List container of items.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-item</td>
                            <td>An item in the list.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-token</td>
                            <td>A selected item element container on display='chip' mode.</td>
                        </tr>
                        <tr>
                            <td>p-chips-token-icon</td>
                            <td>Icon of a selected item element on display='chip' mode.</td>
                        </tr>
                        <tr>
                            <td>p-chips-token-label</td>
                            <td>Label of a selected item element on display='chip' mode.</td>
                        </tr>
                        <tr>
                            <td>p-multiselect-select-all-label</td>
                            <td>Label to display when selectAllLabel is defined.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
