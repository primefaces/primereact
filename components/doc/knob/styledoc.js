import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function StyleDoc() {
    return (
        <>
            <DocSubSection id="styling" label="Styling">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.
                </p>
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
            </DocSubSection>
        </>
    );
}
