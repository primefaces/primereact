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
                            <td>p-orderlist</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-orderlist-list</td>
                            <td>List container.</td>
                        </tr>
                        <tr>
                            <td>p-orderlist-item</td>
                            <td>An item in the list</td>
                        </tr>
                        <tr>
                            <td>p-orderlist-filter-container</td>
                            <td>Container of filter input.</td>
                        </tr>
                        <tr>
                            <td>p-orderlist-filter</td>
                            <td>Filter element.</td>
                        </tr>
                        <tr>
                            <td>p-orderlist-filter-icon</td>
                            <td>Filter icon.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
