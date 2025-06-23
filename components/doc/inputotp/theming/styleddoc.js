import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function StyledDoc(props) {
    return (
        <>
            <DocSectionText {...props}>
                <p>List of class names used in the styled mode.</p>
            </DocSectionText>
            <div className="doc-tablewrapper">
                <table class="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>p-inputotp</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-inputotp-input</td>
                            <td>Input element of the component.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
