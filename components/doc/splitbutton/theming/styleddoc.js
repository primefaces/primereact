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
                            <td>p-splitbutton</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-splitbutton-button</td>
                            <td>Dropdown button.</td>
                        </tr>
                        <tr>
                            <td>p-menu</td>
                            <td>Overlay menu.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
