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
                            <td>p-inputswitch</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-inputswitch-checked</td>
                            <td>Container element in active state.</td>
                        </tr>
                        <tr>
                            <td>p-inputswitch-slider</td>
                            <td>Slider element behind the handle.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
