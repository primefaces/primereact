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
                            <td>p-steps</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-steps-item</td>
                            <td>Menuitem element.</td>
                        </tr>
                        <tr>
                            <td>p-steps-number</td>
                            <td>Number of menuitem.</td>
                        </tr>
                        <tr>
                            <td>p-steps-title</td>
                            <td>Label of menuitem.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
