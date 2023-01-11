import Link from 'next/link';
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
                                <td>p-accordion</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-accordion-header</td>
                                <td>Header of a tab.</td>
                            </tr>
                            <tr>
                                <td>p-accordion-content</td>
                                <td>Container of a tab.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
