import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function StylingDoc() {
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
                                <td>p-chips</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-chips-token</td>
                                <td>Chip element container.</td>
                            </tr>
                            <tr>
                                <td>p-chips-token-icon</td>
                                <td>Icon of a chip.</td>
                            </tr>
                            <tr>
                                <td>p-chips-token-label</td>
                                <td>label of a chip.</td>
                            </tr>
                            <tr>
                                <td>p-chips-input-token</td>
                                <td>Container of input element.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
