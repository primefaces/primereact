import { DocSectionText } from '../common/docsectiontext';
import { DevelopmentSection } from '../common/developmentsection';

export function AccessibilityDoc() {
    return (
        <DevelopmentSection>
            <DocSectionText id="accessibility" label="Accessibility">
                <h3>Screen Reader</h3>
                <p>
                    Splitter bar defines <i>separator</i> as the role with <i>aria-orientation</i> set to either horizontal or vertical.
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
                                <td>Moves focus through the splitter bar.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>down arrow</i>
                                </td>
                                <td>Moves a vertical splitter down.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>up arrow</i>
                                </td>
                                <td>Moves a vertical splitter up.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>left arrow</i>
                                </td>
                                <td>Moves a vertical splitter to the left.</td>
                            </tr>
                            <tr>
                                <td>
                                    <i>right arrow</i>
                                </td>
                                <td>Moves a vertical splitter to the right.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSectionText>
        </DevelopmentSection>
    );
}
