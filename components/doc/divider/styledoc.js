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
                                <td>p-divider</td>
                                <td>Container element.</td>
                            </tr>
                            <tr>
                                <td>p-divider-horizontal</td>
                                <td>Container element in horizontal layout.</td>
                            </tr>
                            <tr>
                                <td>p-divider-vertical</td>
                                <td>Container element in vertical layout.</td>
                            </tr>
                            <tr>
                                <td>p-divider-solid</td>
                                <td>Container element with solid border.</td>
                            </tr>
                            <tr>
                                <td>p-divider-dashed</td>
                                <td>Container element with dashed border.</td>
                            </tr>
                            <tr>
                                <td>p-divider-dotted</td>
                                <td>Container element with dotted border.</td>
                            </tr>
                            <tr>
                                <td>p-divider-left</td>
                                <td>Container element with content aligned to left.</td>
                            </tr>
                            <tr>
                                <td>p-divider-right</td>
                                <td>Container element with content aligned to right.</td>
                            </tr>
                            <tr>
                                <td>p-divider-center</td>
                                <td>Container element with content aligned to center.</td>
                            </tr>
                            <tr>
                                <td>p-divider-bottom</td>
                                <td>Container element with content aligned to bottom.</td>
                            </tr>
                            <tr>
                                <td>p-divider-top</td>
                                <td>Container element with content aligned to top.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
