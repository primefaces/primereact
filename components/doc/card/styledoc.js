import { DocSectionText } from '../common/docsectiontext';
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
                            <td>p-card</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-card-title</td>
                            <td>Title element.</td>
                        </tr>
                        <tr>
                            <td>p-card-subtitle</td>
                            <td>Subtitle element.</td>
                        </tr>
                        <tr>
                            <td>p-card-content</td>
                            <td>Content of the card.</td>
                        </tr>
                        <tr>
                            <td>p-card-footer</td>
                            <td>Footer of the card.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
