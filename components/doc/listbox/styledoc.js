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
                                <td>p-listbox</td>
                                <td>Main container element.</td>
                            </tr>
                            <tr>
                                <td>p-listbox-header</td>
                                <td>Header element.</td>
                            </tr>
                            <tr>
                                <td>p-listbox-list-wrapper</td>
                                <td>Container of list element.</td>
                            </tr>
                            <tr>
                                <td>p-listbox-list</td>
                                <td>List element.</td>
                            </tr>
                            <tr>
                                <td>p-listbox-item</td>
                                <td>An item in the list element.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
