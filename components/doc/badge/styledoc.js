import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function StyleDoc() {
    return (
        <>
            <DocSectionText id="style" label="Style">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming">theming</Link> page.
                </p>
            </DocSectionText>
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
                            <td>p-badge</td>
                            <td>Badge element</td>
                        </tr>
                        <tr>
                            <td>p-overlay-badge</td>
                            <td>Wrapper of a badge and its target.</td>
                        </tr>
                        <tr>
                            <td>p-badge-dot</td>
                            <td>Badge element with no value.</td>
                        </tr>
                        <tr>
                            <td>p-badge-success</td>
                            <td>Badge element with success severity.</td>
                        </tr>
                        <tr>
                            <td>p-badge-info</td>
                            <td>Badge element with info severity.</td>
                        </tr>
                        <tr>
                            <td>p-badge-warning</td>
                            <td>Badge element with warning severity.</td>
                        </tr>
                        <tr>
                            <td>p-badge-danger</td>
                            <td>Badge element with danger severity.</td>
                        </tr>
                        <tr>
                            <td>p-badge-lg</td>
                            <td>Large badge element</td>
                        </tr>
                        <tr>
                            <td>p-badge-xl</td>
                            <td>Extra large badge element</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
