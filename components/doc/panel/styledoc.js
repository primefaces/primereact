import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function StyleDoc() {
    return (
        <>
            <DocSubSection id="style" label="Style">
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
                                <td>p-panel</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-panel-titlebar</td>
                                <td>Header section.</td>
                            </tr>
                            <tr>
                                <td>p-panel-title</td>
                                <td>Title text of panel.</td>
                            </tr>
                            <tr>
                                <td>p-panel-titlebar-toggler</td>
                                <td>Toggle icon.</td>
                            </tr>
                            <tr>
                                <td>p-panel-content</td>
                                <td>Content of panel.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
