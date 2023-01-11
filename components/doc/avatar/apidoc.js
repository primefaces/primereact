import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSubSection id="propertiesofavatar" label="Properties of Avatar">
                <p>Any valid attribute is passed to the root element implicitly, extended properties are as follows;</p>
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
                                <td>label</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines the text to display.</td>
                            </tr>
                            <tr>
                                <td>icon</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines the icon to display.</td>
                            </tr>
                            <tr>
                                <td>image</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Defines the image to display.</td>
                            </tr>
                            <tr>
                                <td>imageAlt</td>
                                <td>any</td>
                                <td>null</td>
                                <td>It specifies an alternate text for an image, if the image cannot be displayed.</td>
                            </tr>
                            <tr>
                                <td>imageFallback</td>
                                <td>string</td>
                                <td>default</td>
                                <td>Defines a fallback image or URL if the main image fails to load. If "default" will fallback to label then icon.</td>
                            </tr>
                            <tr>
                                <td>size</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Size of the element, valid options are "large" and "xlarge".</td>
                            </tr>
                            <tr>
                                <td>shape</td>
                                <td>string</td>
                                <td>square</td>
                                <td>Shape of the element, valid options are "square" and "circle".</td>
                            </tr>
                            <tr>
                                <td>template</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of the content.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="propertiesofavatargroup" label="Properties of AvatarGroup">
                <p>Any property as style and class are passed to the main container element. There are no additional properties.</p>
            </DocSubSection>
            <DocSubSection id="events" label="Events">
                <h5>Events</h5>
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
                                <td>onImageError</td>
                                <td>event: Browser event</td>
                                <td>This event is triggered if an error occurs while loading an image file.</td>
                            </tr>
                            <tr>
                                <td>onClick</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke on click.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
