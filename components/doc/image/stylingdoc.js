import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSubSection } from '../common/docsubsection';

export function StylingDoc() {
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
                                <td>p-image</td>
                                <td>Container element</td>
                            </tr>
                            <tr>
                                <td>p-image-preview-container</td>
                                <td>Container element with preview enabled.</td>
                            </tr>
                            <tr>
                                <td>p-image-preview-indicator</td>
                                <td>Mask layer over the image when hovered.</td>
                            </tr>
                            <tr>
                                <td>p-image-preview-icon</td>
                                <td>Icon of the preview indicator.</td>
                            </tr>
                            <tr>
                                <td>p-image-mask</td>
                                <td>Preview overlay container.</td>
                            </tr>
                            <tr>
                                <td>p-image-toolbar</td>
                                <td>Transformation options container.</td>
                            </tr>
                            <tr>
                                <td>p-image-action</td>
                                <td>An element inside the toolbar.</td>
                            </tr>
                            <tr>
                                <td>p-image-preview</td>
                                <td>Image element inside the preview overlay.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
