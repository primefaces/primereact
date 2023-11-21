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
                            <td>p-avatar</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-avatar-image</td>
                            <td>Container element in image mode.</td>
                        </tr>
                        <tr>
                            <td>p-avatar-circle</td>
                            <td>Container element with a circle shape.</td>
                        </tr>
                        <tr>
                            <td>p-avatar-text</td>
                            <td>Text of the Avatar.</td>
                        </tr>
                        <tr>
                            <td>p-avatar-icon</td>
                            <td>Icon of the Avatar.</td>
                        </tr>
                        <tr>
                            <td>p-avatar-lg</td>
                            <td>Container element with a large size.</td>
                        </tr>
                        <tr>
                            <td>p-avatar-xl</td>
                            <td>Container element with an xlarge size.</td>
                        </tr>
                        <tr>
                            <td>p-avatar-group</td>
                            <td>Container element of the group element.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
