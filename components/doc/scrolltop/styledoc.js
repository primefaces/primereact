import { DocSubSection } from '../common/docsubsection';
import Link from 'next/link';

export function StyleDoc() {
    return (
        <>
            <DocSubSection id="style" label="Style">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.
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
                                <td>p-scrolltop</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-scrolltop-sticky</td>
                                <td>Container element when attached to its parent.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
