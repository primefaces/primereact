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
                            <td>p-carousel</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-carousel-header</td>
                            <td>Header section.</td>
                        </tr>
                        <tr>
                            <td>p-carousel-footer</td>
                            <td>Footer section.</td>
                        </tr>
                        <tr>
                            <td>p-carousel-content</td>
                            <td>Main content element. It contains the container of the viewport.</td>
                        </tr>
                        <tr>
                            <td>p-carousel-container</td>
                            <td>Container of the viewport. It contains navigation buttons and viewport.</td>
                        </tr>
                        <tr>
                            <td>p-carousel-items-content</td>
                            <td>Viewport.</td>
                        </tr>
                        <tr>
                            <td>p-carousel-indicators</td>
                            <td>Container of the indicators.</td>
                        </tr>
                        <tr>
                            <td>p-carousel-indicator</td>
                            <td>Indicator element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
