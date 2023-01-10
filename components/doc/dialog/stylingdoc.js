import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';
import Link from 'next/link';

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
                                <td>p-dialog</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-dialog-titlebar</td>
                                <td>Container of header.</td>
                            </tr>
                            <tr>
                                <td>p-dialog-title</td>
                                <td>Header element.</td>
                            </tr>
                            <tr>
                                <td>p-dialog-titlebar-icon</td>
                                <td>Icon container inside header.</td>
                            </tr>
                            <tr>
                                <td>p-dialog-titlebar-close</td>
                                <td>Close icon element.</td>
                            </tr>
                            <tr>
                                <td>p-dialog-content</td>
                                <td>Content element</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
