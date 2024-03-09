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
                            <td>p-accordion</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-accordion-header</td>
                            <td>Header of a tab.</td>
                        </tr>
                        <tr>
                            <td>p-accordion-content</td>
                            <td>Container of a tab.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
