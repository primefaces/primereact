import { DocSectionText } from '@/components/doc/common/docsectiontext';

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
                            <td>p-rating</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-rating-item</td>
                            <td>Each item element</td>
                        </tr>
                        <tr>
                            <td>p-rating-item-active</td>
                            <td>Selected item elements.</td>
                        </tr>
                        <tr>
                            <td>p-rating-cancel-item</td>
                            <td>Cancel item element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
