import { DocSectionText } from '../common/docsectiontext';
import { DevelopmentSection } from '../common/developmentsection';

export function AccessibilityDoc() {
    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
                <h3>Screen Reader</h3>
                <p>
                    Terminal component has an input element that can be described with <i>aria-label</i> or <i>aria-labelledby</i> props. The element that lists the previous commands has <i>aria-live</i> so that changes are received by the screen
                    reader.
                </p>

                <h3>Keyboard Support</h3>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Key</th>
                                <th>Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <i>tab</i>
                                </td>
                                <td>Moves focus through the input element.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>enter</i>
                                </td>
                                <td>Executes the command when focus in on the input element.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSectionText>
        </DevelopmentSection>
    );
}
