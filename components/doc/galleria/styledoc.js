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
                            <td>p-galleria</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-galleria-header</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>p-galleria-footer</td>
                            <td>Footer section.</td>
                        </tr>
                        <tr>
                            <td>p-galleria-item-wrapper</td>
                            <td>Item wrapper element. It contains item container and indicators.</td>
                        </tr>
                        <tr>
                            <td>p-galleria-item-container</td>
                            <td>Container of the item wrapper. It contains navigation buttons, items and caption content.</td>
                        </tr>
                        <tr>
                            <td>p-galleria-indicators</td>
                            <td>Container of the indicators. It contains indicator items.</td>
                        </tr>
                        <tr>
                            <td>p-galleria-thumbnail-content</td>
                            <td>Thumbnail content element.</td>
                        </tr>
                        <tr>
                            <td>p-galleria-thumbnail-container</td>
                            <td>Container of the thumbnail content. It contains navigation buttons and thumbnail items.</td>
                        </tr>
                        <tr>
                            <td>p-galleria-caption</td>
                            <td>Content of the item caption.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
