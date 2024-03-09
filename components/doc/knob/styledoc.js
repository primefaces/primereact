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
        </>
    );
}
