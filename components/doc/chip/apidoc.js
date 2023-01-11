import Link from 'next/link';
import { CodeHighlight } from '../common/codehighlight';
import { DevelopmentSection } from '../common/developmentsection';
import { DocSectionText } from '../common/docsectiontext';
import { DocSubSection } from '../common/docsubsection';

export function ApiDoc(props) {
    return (
        <>
            <DocSectionText {...props}></DocSectionText>

            <DocSubSection id="properties" label="Properties">
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
                                <td>removable</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to display a remove icon.</td>
                            </tr>
                            <tr>
                                <td>removeIcon</td>
                                <td>string</td>
                                <td>pi pi-times-circle</td>
                                <td>Icon of the remove element.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Inline style of the element.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the element.</td>
                            </tr>
                            <tr>
                                <td>template</td>
                                <td>any</td>
                                <td>null</td>
                                <td>Template of an item.</td>
                            </tr>
                            <tr>
                                <td>imageAlt</td>
                                <td>any</td>
                                <td>null</td>
                                <td>It specifies an alternate text for an image, if the image cannot be displayed.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
            <DocSubSection id="events" label="Events">
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
                                <td>onRemove</td>
                                <td>event: Browser event</td>
                                <td>Callback to invoke when a chip is removed.</td>
                            </tr>
                            <tr>
                                <td>onImageError</td>
                                <td>event: Browser event</td>
                                <td>This event is triggered if an error occurs while loading an image file.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
