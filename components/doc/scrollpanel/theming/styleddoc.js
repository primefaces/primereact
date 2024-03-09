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
                            <td>p-scrollpanel</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-scrollpanel-wrapper</td>
                            <td>Wrapper of content section.</td>
                        </tr>
                        <tr>
                            <td>p-scrollpanel-content</td>
                            <td>Content section.</td>
                        </tr>
                        <tr>
                            <td>p-scrollpanel-bar</td>
                            <td>Scrollbar handle.</td>
                        </tr>
                        <tr>
                            <td>p-scrollpanel-bar-x</td>
                            <td>Scrollbar handle of a horizontal bar.</td>
                        </tr>
                        <tr>
                            <td>p-scrollpanel-bar-y</td>
                            <td>Scrollbar handle of a vertical bar</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
