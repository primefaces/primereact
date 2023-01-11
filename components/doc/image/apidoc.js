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
                            <tr>
                                <td>template</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Changing the default icon when the image is hovered in preview mode.</td>
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
        </>
    );
}
