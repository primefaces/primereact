import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';
import Link from 'next/link';

export function AccessibilityDoc() {
    return (
        <>
            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        Rating component internally uses radio buttons that are only visible to screen readers. The value to read for item is retrieved from the <Link href="/locale">locale</Link> API via <i>star</i> and <i>stars</i> of the{' '}
                        <i>aria</i> property.
                    </p>

                    <h4>Keyboard Support</h4>
                    <p>Keyboard interaction is derived from the native browser handling of radio buttons in a group.</p>
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
                                    <td>Moves focus to the star representing the value, if there is none then first star receives the focus.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="inline-flex flex-column">
                                            <i className="mb-1">left arrow</i>
                                            <i>up arrow</i>
                                        </span>
                                    </td>
                                    <td>Moves focus to the previous star, if there is none then last radio button receives the focus.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <span className="inline-flex flex-column">
                                            <i className="mb-1">right arrow</i>
                                            <i>down arrow</i>
                                        </span>
                                    </td>
                                    <td>Moves focus to the next star, if there is none then first star receives the focus.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>If the focused star does not represent the value, changes the value to the star value.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
