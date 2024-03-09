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
                            <td>p-inputnumber</td>
                            <td>Container element</td>
                        </tr>
                        <tr>
                            <td>p-inputnumber-stacked</td>
                            <td>Container element with stacked buttons.</td>
                        </tr>
                        <tr>
                            <td>p-inputnumber-horizontal</td>
                            <td>Container element with horizontal buttons.</td>
                        </tr>
                        <tr>
                            <td>p-inputnumber-vertical</td>
                            <td>Container element with vertical buttons.</td>
                        </tr>
                        <tr>
                            <td>p-inputnumber-input</td>
                            <td>Input element</td>
                        </tr>
                        <tr>
                            <td>p-inputnumber-button</td>
                            <td>Input element</td>
                        </tr>
                        <tr>
                            <td>p-inputnumber-button-up</td>
                            <td>Increment button</td>
                        </tr>
                        <tr>
                            <td>p-inputnumber-button-down</td>
                            <td>Decrement button</td>
                        </tr>
                        <tr>
                            <td>p-inputnumber-button-icon</td>
                            <td>Button icon</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
