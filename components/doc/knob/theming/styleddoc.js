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
                            <td>p-knob</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-knob-range</td>
                            <td>Range element.</td>
                        </tr>
                        <tr>
                            <td>p-knob-value</td>
                            <td>Value element.</td>
                        </tr>
                        <tr>
                            <td>p-knob-text</td>
                            <td>Text element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
