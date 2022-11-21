import Link from 'next/link';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="properties" label="Properties">
                <p>Image passes any valid attribute to the underlying img element, additional attribute is the following.</p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>src</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Specifies the path to the image.</td>
                            </tr>
                            <tr>
                                <td>preview</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Controls the preview functionality.</td>
                            </tr>
                            <tr>
                                <td>zoomSrc</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Zoomed image that may be different than "src" image.</td>
                            </tr>
                            <tr>
                                <td>downloadable</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Adds a download button to the preview control menu.</td>
                            </tr>
                            <tr>
                                <td>imageStyle</td>
                                <td>React.CSSProperties</td>
                                <td>null</td>
                                <td>Inline style of the image element.</td>
                            </tr>
                            <tr>
                                <td>imageClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the image element.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="events" label="Events">
                <p>Any valid event like click and mouseover are passed to the underlying input element. Events below are the additional ones related to the preview functionality.</p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Parameters</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>onShow</td>
                                <td>-</td>
                                <td>Triggered when the preview overlay is shown.</td>
                            </tr>
                            <tr>
                                <td>onHide</td>
                                <td>-</td>
                                <td>Triggered when the preview overlay is hidden.</td>
                            </tr>
                            <tr>
                                <td>onError</td>
                                <td>event: Browser event</td>
                                <td>Triggered when the image fails to load.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

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

            <DocSubSection id="accessibility" label="Accessibility">
                <DevelopmentSection>
                    <h4>Screen Reader</h4>
                    <p>
                        The preview button is a native <i>button</i> element with an <i>aria-label</i> that refers to the <i>aria.zoomImage</i> property of the <Link href="/locale">locale</Link> API by default, with <i>previewButtonProps</i>
                        you may use your own aria roles and attributes as any valid attribute is passed to the button element implicitly.
                    </p>

                    <p>
                        When preview is active, <i>dialog</i> role with <i>aria-modal</i> is applied to the overlay image container.
                    </p>

                    <p>
                        Button controls use <i>aria.rotateRight</i>, <i>aria.rotateLeft</i>, <i>aria.zoomIn</i>, <i>aria.zoomOut</i> and <i>aria.close</i> from the <Link href="/locale">locale</Link> API as <i>aria-label</i>.
                    </p>

                    <h4>ButtonBar Keyboard Support</h4>
                    <p>When preview is activated, close button receives the initial focus.</p>
                    <div className="doc-tablewrapper">
                        <table className="doc-table">
                            <thead>
                                <tr>
                                    <th>Key</th>
                                    <th>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <i>tab</i>
                                    </td>
                                    <td>Moves focus through button bar.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>enter</i>
                                    </td>
                                    <td>Activates the button.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>space</i>
                                    </td>
                                    <td>Activates the button.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>esc</i>
                                    </td>
                                    <td>Closes the image preview.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </DevelopmentSection>
            </DocSubSection>
        </>
    );
}
