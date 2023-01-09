import Link from 'next/link';
import { DocSubSection } from '../common/docsubsection';

export function StylingAvatarDoc() {
    return (
        <>
            <DocSubSection id="stylingofavatar" label="Styling of Avatar">
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
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
