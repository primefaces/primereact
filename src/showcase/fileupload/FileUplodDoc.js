import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabView, TabPanel } from '../../components/tabview/TabView';
import { CodeHighlight } from '../codehighlight/CodeHighlight';
import { useLiveEditorTabs }from '../liveeditor/LiveEditor';

export class FileUploadDoc extends Component {

    constructor(props) {
        super(props);

        this.sources = {
            'class': {
                tabName: 'Class Source',
                content: `
import React, { Component } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

export class FileUploadDemo extends Component {

    constructor(props) {
        super(props);

        this.onUpload = this.onUpload.bind(this);
        this.onBasicUpload = this.onBasicUpload.bind(this);
        this.onBasicUploadAuto = this.onBasicUploadAuto.bind(this);
    }

    onUpload() {
        this.toast.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    onBasicUpload() {
        this.toast.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }

    onBasicUploadAuto() {
        this.toast.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
    }

    render() {
        return (
            <div>
                <Toast ref={(el) => { this.toast = el; }}></Toast>

                <div className="card">
                    <h5>Advanced</h5>
                    <FileUpload name="demo[]" url="./upload.php" onUpload={this.onUpload} multiple accept="image/*" maxFileSize={1000000}
                        emptyTemplate={<p className="p-m-0">Drag and drop files to here to upload.</p>} />

                    <h5>Basic</h5>
                    <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={this.onBasicUpload} />

                    <h5>Basic with Auto</h5>
                    <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={this.onBasicUploadAuto} auto chooseLabel="Browse" />
                </div>
            </div>
        )
    }
}
                `
            },
            'hooks': {
                tabName: 'Hooks Source',
                content: `
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

const FileUploadDemo = () => {
    const toast = useRef(null);

    const onUpload = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    const onBasicUpload = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }

    const onBasicUploadAuto = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
    }

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <h5>Advanced</h5>
                <FileUpload name="demo[]" url="./upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000}
                    emptyTemplate={<p className="p-m-0">Drag and drop files to here to upload.</p>} />

                <h5>Basic</h5>
                <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} />

                <h5>Basic with Auto</h5>
                <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUploadAuto} auto chooseLabel="Browse" />
            </div>
        </div>
    )
}
                `
            },
            'ts': {
                tabName: 'TS Source',
                content: `
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

const FileUploadDemo = () => {
    const toast = useRef(null);

    const onUpload = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    const onBasicUpload = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }

    const onBasicUploadAuto = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
    }

    return (
        <div>
            <Toast ref={toast}></Toast>

            <div className="card">
                <h5>Advanced</h5>
                <FileUpload name="demo[]" url="./upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000}
                    emptyTemplate={<p className="p-m-0">Drag and drop files to here to upload.</p>} />

                <h5>Basic</h5>
                <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} />

                <h5>Basic with Auto</h5>
                <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUploadAuto} auto chooseLabel="Browse" />
            </div>
        </div>
    )
}
                `
            }
        };

        this.extFiles = {
            'public/upload.php': {
                content: `
<?php echo '<p>Fake Upload Process</p>'; ?>
                `
            }
        };
    }

    shouldComponentUpdate() {
        return false;
    }


    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h5>Import</h5>
<CodeHighlight lang="js">
{`
import { FileUpload } from 'primereact/fileupload';
`}
</CodeHighlight>

            <h5>Getting Started</h5>
            <p>FileUpload requires a <i>url</i> property as the upload target and a <i>name</i> to identify the files at backend.</p>
<CodeHighlight>
{`
<FileUpload name="demo" url="./upload"></FileUpload>
`}
</CodeHighlight>

            <h5>Multiple Uploads</h5>
            <p>Only one file can be selected at a time by default, to allow selecting multiple files at once enable <i>multiple</i> option.</p>

<CodeHighlight>
{`
<FileUpload name="demo[]" url="./upload" multiple />
`}
</CodeHighlight>

            <h5>DragDrop</h5>
            <p>File selection can also be done by dragging and dropping from the filesystem to the content section of the component.</p>

            <h5>Auto Uploads</h5>
            <p>When <i>auto</i> property is enabled, upload begins as soon as file selection is completed or a file is dropped on the drop area.</p>

<CodeHighlight>
{`
<FileUpload name="demo" url="./upload" auto />
`}
</CodeHighlight>

            <h5>File Types</h5>
            <p>Selectable file types can be restricted with <i>accept</i> property, example below only allows images to be uploaded. Read more about other possible values <a href="https://www.w3schools.com/tags/att_input_accept.asp"> here</a>.</p>
<CodeHighlight>
{`
<FileUpload name="demo[]" url="./upload" multiple accept="image/*" />
`}
</CodeHighlight>

            <h5>File Size</h5>
            <p>Maximium file size can be restricted using <i>maxFileSize</i> property defined in bytes.</p>

<CodeHighlight>
{`
<FileUpload name="demo" url="./upload" maxFileSize="1000000" />
`}
</CodeHighlight>

            <p>In order to customize the default messages use <i>invalidFileSizeMessageSummary</i> and <i>invalidFileSizeMessageDetail</i> options. In summary messages, {0} placeholder refers to the filename and in detail message, the file size.</p>
            <ul>
                <li>
                    invalidFileSizeMessageSummary: '{0}: Invalid file size, '
                </li>
                <li>
                    invalidFileSizeMessageDetail: string = 'maximum upload size is {0}.'
                </li>
            </ul>

            <h5>Request Customization</h5>
            <p>XHR request to upload the files can be customized using the onBeforeUpload callback that passes the xhr instance and FormData object as event parameters.</p>

            <h5>Basic UI</h5>
            <p>FileUpload basic mode provides a simpler UI as an alternative to advanced mode.</p>

<CodeHighlight>
{`
<FileUpload name="demo" url="./upload" mode="basic" />
`}
</CodeHighlight>

            <h5>Custom Upload</h5>
            <p>Uploading implementation can be overriden by enabling customUpload property and defining a custom upload handler event.</p>
<CodeHighlight>
{`
<FileUpload name="demo[]" url="./upload" customUpload uploadHandler={myUploader} />
`}
</CodeHighlight>
<CodeHighlight lang="js">
{`
const myUploader = (event) => {
    //event.files == files to upload
}
`}
</CodeHighlight>

            <h5>Properties</h5>
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
                            <td>string</td>
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
                            <td>customUpload</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether to use the default upload or a manual implementation defined in uploadHandler callback.</td>
                        </tr>
                        <tr>
                            <td>emptyTemplate</td>
                            <td>any</td>
                            <td>null</td>
                            <td>The template of empty content in container.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

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
                            <td>onBeforeUpload</td>
                            <td>event.xhr: XmlHttpRequest instance. <br/>
                                event.formData: FormData object.</td>
                            <td>Callback to invoke before file upload begins to customize the request
                                such as post parameters before the files.</td>
                        </tr>
						<tr>
                            <td>onBeforeSend</td>
                            <td>event.xhr: XmlHttpRequest instance. <br/>
                                event.formData: FormData object.</td>
                            <td>Callback to invoke before file send begins to customize the request
                                such as adding headers.</td>
                        </tr>
                        <tr>
                            <td>onUpload</td>
                            <td>event.xhr: XmlHttpRequest instance.<br />
                                event.files: Uploaded files.</td>
                            <td>Callback to invoke when file upload is complete.</td>
                        </tr>
                        <tr>
                            <td>onError</td>
                            <td>event.xhr: XmlHttpRequest instance.<br />
                                event.files: Files that are not uploaded.</td>
                            <td>Callback to invoke if file upload fails.</td>
                        </tr>
                        <tr>
                            <td>onClear</td>
                            <td>-.</td>
                            <td>Callback to invoke when files in queue are removed without uploading.</td>
                        </tr>
                        <tr>
                            <td>onSelect</td>
                            <td>event.originalEvent: Original browser event. <br />
                                event.files: List of selected files.</td>
                            <td>Callback to invoke when file upload is complete.</td>
                        </tr>
                        <tr>
                            <td>onProgress</td>
                            <td>event.originalEvent: Original browser event. <br />
                                event.progress: Calculated progress value.</td>
                            <td>Callback to invoke when files are selected.</td>
                        </tr>
                        <tr>
                            <td>onValidationFail</td>
                            <td>file: Invalid file.</td>
                            <td>Callback to invoke when a validation file fails.</td>
                        </tr>
                        <tr>
                            <td>uploadHandler</td>
                            <td>event.files: List of selected files.</td>
                            <td>Callback to invoke in custom upload mode to upload the files manually.</td>
                        </tr>
                        <tr>
                            <td>onRemove</td>
                            <td>event.originalEvent: Original browser event. <br />
                                event.file: Selected file.</td>
                            <td>Callback to invoke when a file is removed without uploading using clear button of a file.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Methods</h5>
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
                    </tbody>
                </table>
            </div>

            <h5>Styling</h5>
            <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
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
                            <td>p-fileupload</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>p-fileupload-buttonbar</td>
                            <td>Header containing the buttons.</td>
                        </tr>
                        <tr>
                            <td>p-fileupload-content</td>
                            <td>Content section.</td>
                        </tr>
                    </tbody>
                </table>

                <h5>Dependencies</h5>
                <p>None.</p>
            </div>

            </TabPanel>

            {
                useLiveEditorTabs({ name: 'FileUploadDemo', sources: this.sources, extFiles: this.extFiles })
            }
        </TabView>
    </div>
        );
    }
}
