import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function StyledDoc() {
    return (
        <>
            <DocSectionText id="styled" label="Styled">
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
                            <td>p-stepper</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-stepper-horizontal</td>
                            <td>Container element with horizontal layout.</td>
                        </tr>
                        <tr>
                            <td>p-stepper-vertical</td>
                            <td>Container element with vertical layout.</td>
                        </tr>
                        <tr>
                            <td>p-stepper-nav</td>
                            <td>Container element of navigator.</td>
                        </tr>
                        <tr>
                            <td>p-stepper-panels</td>
                            <td>Container element of stepper panel elements.</td>
                        </tr>
                        <tr>
                            <td>p-stepper-panel</td>
                            <td>Container element of stepper panel element.</td>
                        </tr>
                        <tr>
                            <td>p-stepper-header</td>
                            <td>Container element of stepper header.</td>
                        </tr>
                        <tr>
                            <td>p-stepper-action</td>
                            <td>Container element of stepper action.</td>
                        </tr>
                        <tr>
                            <td>p-stepper-number</td>
                            <td>Container element of stepper number.</td>
                        </tr>
                        <tr>
                            <td>p-stepper-title</td>
                            <td>Container element of stepper title.</td>
                        </tr>
                        <tr>
                            <td>p-stepper-separator</td>
                            <td>Container element of stepper separator.</td>
                        </tr>
                        <tr>
                            <td>p-stepper-toggleable-content</td>
                            <td>Container element of stepper toggleable content.</td>
                        </tr>
                        <tr>
                            <td>p-stepper-content</td>
                            <td>Container element of stepper content.</td>
                        </tr>
                        <tr>
                            <td>p-stepper-start</td>
                            <td>Start content container.</td>
                        </tr>
                        <tr>
                            <td>p-stepper-end</td>
                            <td>End content container.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
