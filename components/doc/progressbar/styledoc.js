import Link from 'next/link';

import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function StyleDoc() {
    return (
        <>
            <DocSectionText id="style" label="Style">
                <p>
                    Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.
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
                            <td>p-progressbar</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-progressbar-determinate</td>
                            <td>Container element of a determinate progressbar.</td>
                        </tr>
                        <tr>
                            <td>p-progressbar-indeterminate</td>
                            <td>Container element of an indeterminate progressbar.</td>
                        </tr>
                        <tr>
                            <td>p-progressbar-value</td>
                            <td>Element whose width changes according to value.</td>
                        </tr>
                        <tr>
                            <td>p-progressbar-label</td>
                            <td>Label element that displays the current value.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
