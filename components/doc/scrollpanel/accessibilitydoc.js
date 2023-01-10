import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function AccessibilityDoc() {
    return (
        <>
            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        Scrollbars of the ScrollPanel has a <i>scrollbar</i> role along with the <i>aria-controls</i> attribute that refers to the id of the scrollable content container and the <i>aria-orientation</i> to indicate the orientation of
                        scrolling.
                    </p>

                    <h4>Header Keyboard Support</h4>
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
                                        <i>down arrow</i>
                                    </td>
                                    <td>Scrolls content down when vertical scrolling is available.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>up arrow</i>
                                    </td>
                                    <td>Scrolls content up when vertical scrolling is available.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>left</i>
                                    </td>
                                    <td>Scrolls content left when horizontal scrolling is available.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>right</i>
                                    </td>
                                    <td>Scrolls content right when horizontal scrolling is available.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
