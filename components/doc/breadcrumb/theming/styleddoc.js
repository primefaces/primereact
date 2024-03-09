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
                            <td>p-breadcrumb</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-menuitem</td>
                            <td>Menuitem element.</td>
                        </tr>
                        <tr>
                            <td>p-menuitem-text</td>
                            <td>Label of a menuitem.</td>
                        </tr>
                        <tr>
                            <td>p-breadcrumb-chevron</td>
                            <td>Chevron element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
