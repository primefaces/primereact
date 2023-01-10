import Link from 'next/link';
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
                                <td>id</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Unique identifier of the element.</td>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Name of the request parameter to identify the files at backend.</td>
                            </tr>
                            <tr>
                                <td>url</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Remote url to upload the files.</td>
                            </tr>
                            <tr>
                                <td>mode</td>
                                <td>string</td>
                                <td>advanced</td>
                                <td>Defines the UI of the component, possible values are "advanced" and "basic".</td>
                            </tr>
                            <tr>
                                <td>multiple</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Used to select multiple files at once from file dialog.</td>
                            </tr>
                            <tr>
                                <td>accept</td>
                                <td>string</td>
                                <td>false</td>
                                <td>Pattern to restrict the allowed file types such as "image/*".</td>
                            </tr>
                            <tr>
                                <td>disabled</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Disables the upload functionality.</td>
                            </tr>
                            <tr>
                                <td>auto</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>When enabled, upload begins automatically after selection is completed.</td>
                            </tr>
                            <tr>
                                <td>maxFileSize</td>
                                <td>number</td>
                                <td>null</td>
                                <td>Maximum file size allowed in bytes.</td>
                            </tr>
                            <tr>
                                <td>invalidFileSizeMessageSummary</td>
                                <td>string</td>
                                <td>"&#123;0&#125;: Invalid file size, "</td>
                                <td>Summary message of the invalid fize size.</td>
                            </tr>
                            <tr>
                                <td>invalidFileSizeMessageDetail</td>
                                <td>string</td>
                                <td>"maximum upload size is &#123;0&#125;."</td>
                                <td>Detail message of the invalid fize size.</td>
                            </tr>
                            <tr>
                                <td>style</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the component.</td>
                            </tr>
                            <tr>
                                <td>className</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the component.</td>
                            </tr>
                            <tr>
                                <td>withCredentials</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.</td>
                            </tr>
                            <tr>
                                <td>previewWidth</td>
                                <td>number</td>
                                <td>50</td>
                                <td>Width of the image thumbnail in pixels.</td>
                            </tr>
                            <tr>
                                <td>chooseLabel</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Label of the choose button. Defaults to global value in Locale configuration.</td>
                            </tr>
                            <tr>
                                <td>uploadLabel</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Label of the upload button. Defaults to global value in Locale configuration.</td>
                            </tr>
                            <tr>
                                <td>cancelLabel</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Label of the cancel button. Defaults to global value in Locale configuration.</td>
                            </tr>
                            <tr>
                                <td>chooseOptions</td>
                                <td>object (OptionsType)</td>
                                <td>null</td>
                                <td>Options used to customize the choose button. These options have "label", "icon", "className" and "style" properties.</td>
                            </tr>
                            <tr>
                                <td>uploadOptions</td>
                                <td>object (OptionsType)</td>
                                <td>null</td>
                                <td>Options used to customize the upload button. These options have "label", "icon", "className" and "style" properties.</td>
                            </tr>
                            <tr>
                                <td>cancelOptions</td>
                                <td>object (OptionsType)</td>
                                <td>null</td>
                                <td>Options used to customize the cancel button. These options have "label", "icon", "className" and "style" properties.</td>
                            </tr>
                            <tr>
                                <td>customUpload</td>
                                <td>boolean</td>
                                <td>false</td>
                                <td>Whether to use the default upload or a manual implementation defined in uploadHandler callback.</td>
                            </tr>
                            <tr>
                                <td>emptyTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of empty content in the container.</td>
                            </tr>
                            <tr>
                                <td>progressBarTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of progressBar content in the container.</td>
                            </tr>
                            <tr>
                                <td>itemTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of each item content in the container.</td>
                            </tr>
                            <tr>
                                <td>headerTemplate</td>
                                <td>any</td>
                                <td>null</td>
                                <td>The template of the header.</td>
                            </tr>
                            <tr>
                                <td>headerStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the header.</td>
                            </tr>
                            <tr>
                                <td>headerClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the header.</td>
                            </tr>
                            <tr>
                                <td>contentStyle</td>
                                <td>object</td>
                                <td>null</td>
                                <td>Inline style of the content.</td>
                            </tr>
                            <tr>
                                <td>contentClassName</td>
                                <td>string</td>
                                <td>null</td>
                                <td>Style class of the content.</td>
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
                                <td>onBeforeUpload</td>
                                <td>
                                    event.xhr: XmlHttpRequest instance. <br />
                                    event.formData: FormData object.
                                </td>
                                <td>Callback to invoke before file upload begins to customize the request such as post parameters before the files.</td>
                            </tr>
                            <tr>
                                <td>onBeforeSend</td>
                                <td>
                                    event.xhr: XmlHttpRequest instance. <br />
                                    event.formData: FormData object.
                                </td>
                                <td>Callback to invoke before file send begins to customize the request such as adding headers.</td>
                            </tr>
                            <tr>
                                <td>onBeforeDrop</td>
                                <td>event: DragEvent instance.</td>
                                <td>Callback to invoke before files dropped. Return false from callback to prevent drop.</td>
                            </tr>
                            <tr>
                                <td>onBeforeSelect</td>
                                <td>
                                    event.originalEvent: Original browser event. <br />
                                    event.target.files: List of selected files.
                                </td>
                                <td>Callback to invoke before files are selected. Return false from callback to prevent selection.</td>
                            </tr>
                            <tr>
                                <td>onUpload</td>
                                <td>
                                    event.xhr: XmlHttpRequest instance.
                                    <br />
                                    event.files: Uploaded files.
                                </td>
                                <td>Callback to invoke when file upload is complete.</td>
                            </tr>
                            <tr>
                                <td>onError</td>
                                <td>
                                    event.xhr: XmlHttpRequest instance.
                                    <br />
                                    event.files: Files that are not uploaded.
                                </td>
                                <td>Callback to invoke if file upload fails.</td>
                            </tr>
                            <tr>
                                <td>onClear</td>
                                <td>-</td>
                                <td>Callback to invoke when files in queue are removed without uploading.</td>
                            </tr>
                            <tr>
                                <td>onSelect</td>
                                <td>
                                    event.originalEvent: Original browser event. <br />
                                    event.target.files: List of selected files.
                                </td>
                                <td>Callback to invoke when files are selected.</td>
                            </tr>
                            <tr>
                                <td>onProgress</td>
                                <td>
                                    event.originalEvent: Original browser event. <br />
                                    event.progress: Calculated progress value.
                                </td>
                                <td>Callback to invoke when files are being uploaded.</td>
                            </tr>
                            <tr>
                                <td>onValidationFail</td>
                                <td>file: Invalid file.</td>
                                <td>Callback to invoke when a validation file fails.</td>
                            </tr>
                            <tr>
                                <td>uploadHandler</td>
                                <td>
                                    event.files: List of selected files.
                                    <br />
                                    event.options: Handler options.
                                </td>
                                <td>Callback to invoke in custom upload mode to upload the files manually.</td>
                            </tr>
                            <tr>
                                <td>onRemove</td>
                                <td>
                                    event.originalEvent: Original browser event. <br />
                                    event.file: Selected file.
                                </td>
                                <td>Callback to invoke when a file is removed without uploading using clear button of a file.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>

            <DocSubSection id="methods" label="Methods">
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
                                <td>upload</td>
                                <td>-</td>
                                <td>Uploads the selected files.</td>
                            </tr>
                            <tr>
                                <td>clear</td>
                                <td>-</td>
                                <td>Clears the files list.</td>
                            </tr>
                            <tr>
                                <td>getFiles</td>
                                <td>-</td>
                                <td>Gets the current files list.</td>
                            </tr>
                            <tr>
                                <td>setFiles</td>
                                <td>File[]</td>
                                <td>Sets the current files list.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSubSection>
        </>
    );
}
