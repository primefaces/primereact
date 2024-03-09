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
                            <td>p-scrolltop</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-scrolltop-sticky</td>
                            <td>Container element when attached to its parent.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
