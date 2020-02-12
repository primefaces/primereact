import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Growl} from '../../components/growl/Growl';
import {FileUpload} from '../../components/fileupload/FileUpload';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';
import AppContentContext from '../../AppContentContext';

export class FileUploadDemo extends Component {

    constructor() {
        super();

        this.onUpload = this.onUpload.bind(this);
        this.onBasicUpload = this.onBasicUpload.bind(this);
        this.onBasicUploadAuto = this.onBasicUploadAuto.bind(this);
    }

    onUpload(event) {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    onBasicUpload(event) {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }

    onBasicUploadAuto(event) {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>FileUpload</h1>
                        <p>FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.</p>

                        <AppContentContext.Consumer>
                            { context => <button onClick={() => context.onChangelogBtnClick("fileUpload")} className="layout-changelog-button">{context.changelogText}</button> }
                        </AppContentContext.Consumer>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Advanced</h3>
                    <FileUpload name="demo[]" url="./upload.php" onUpload={this.onUpload}
                                multiple={true} accept="image/*" maxFileSize={1000000} />

                    <h3>Basic</h3>
                    <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={this.onBasicUpload} />

                    <h3>Basic with Auto</h3>
                    <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={this.onBasicUploadAuto} auto={true} chooseLabel="Browse" />

                    <Growl ref={(el) => { this.growl = el; }}></Growl>
                </div>

                <FileUploadDoc></FileUploadDoc>
            </div>
        )
    }
}

export class FileUploadDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section documentation">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="language-javascript">
{`
import {FileUpload} from 'primereact/fileupload';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>FileUpload requires a <i>url</i> property as the upload target and a <i>name</i> to identify the files at backend.</p>
<CodeHighlight className="language-jsx">
{`
<FileUpload name="demo" url="./upload"></FileUpload>

`}
</CodeHighlight>

            <h3>Multiple Uploads</h3>
            <p>Only one file can be selected at a time by default, to allow selecting multiple files at once enable <i>multiple</i> option.</p>

<CodeHighlight className="language-jsx">
{`
<FileUpload name="demo[]" url="./upload" multiple={true} />

`}
</CodeHighlight>

            <h3>DragDrop</h3>
            <p>File selection can also be done by dragging and dropping from the filesystem to the content section of the component.</p>

            <h3>Auto Uploads</h3>
            <p>When <i>auto</i> property is enabled, upload begins as soon as file selection is completed or a file is dropped on the drop area.</p>

<CodeHighlight className="language-jsx">
{`
<FileUpload name="demo" url="./upload" auto={true} />

`}
</CodeHighlight>

            <h3>File Types</h3>
            <p>Selectable file types can be restricted with <i>accept</i> property, example below only allows images to be uploaded. Read more about other possible values <a href="https://www.w3schools.com/tags/att_input_accept.asp"> here</a>.</p>
<CodeHighlight className="language-jsx">
{`
<FileUpload name="demo[]" url="./upload" multiple={true} accept="image/*" />

`}
</CodeHighlight>

            <h3>File Size</h3>
            <p>Maximium file size can be restricted using <i>maxFileSize</i> property defined in bytes.</p>

<CodeHighlight className="language-jsx">
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

            <h3>Request Customization</h3>
            <p>XHR request to upload the files can be customized using the onBeforeUpload callback that passes the xhr instance and FormData object as event parameters.</p>

            <h3>Basic UI</h3>
            <p>FileUpload basic mode provides a simpler UI as an alternative to advanced mode.</p>

<CodeHighlight className="language-jsx">
{`
<FileUpload name="demo" url="./upload" mode="basic" />

`}
</CodeHighlight>

            <h3>Custom Upload</h3>
            <p>Uploading implementation can be overriden by enabling customUpload property and defining a custom upload handler event.</p>
<CodeHighlight className="language-jsx">
{`
<FileUpload name="demo[]" url="./upload" customUpload={true} uploadHandler={this.myUploader} />

`}
</CodeHighlight>
<CodeHighlight className="language-javascript">
{`
myUploader(event) {
    //event.files == files to upload
}

`}
</CodeHighlight>

            <h3>Properties</h3>
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
                            <td>Choose</td>
                            <td>Label of the choose button.</td>
                        </tr>
                        <tr>
                            <td>uploadLabel</td>
                            <td>string</td>
                            <td>Upload</td>
                            <td>Label of the upload button.</td>
                        </tr>
                        <tr>
                            <td>cancelLabel</td>
                            <td>string</td>
                            <td>Cancel</td>
                            <td>Label of the cancel button.</td>
                        </tr>
                        <tr>
                            <td>customUpload</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>Whether to use the default upload or a manual implementation defined in uploadHandler callback.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
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

            <h3>Methods</h3>
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

            <h3>Styling</h3>
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

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>

            </TabPanel>

            <TabPanel header="Source">
                 <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/fileupload" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                     <span>View on GitHub</span>
                 </a>
<CodeHighlight className="language-javascript">
{`
import React, {Component} from 'react';
import {Growl} from 'primereact/growl';
import {FileUpload} from 'primereact/fileupload';;

export class FileUploadDemo extends Component {

    constructor() {
        super();

        this.onUpload = this.onUpload.bind(this);
        this.onBasicUpload = this.onBasicUpload.bind(this);
        this.onBasicUploadAuto = this.onBasicUploadAuto.bind(this);
    }

    onUpload(event) {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    onBasicUpload(event) {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }

    onBasicUploadAuto(event) {
        this.growl.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>FileUpload</h1>
                        <p>FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Advanced</h3>
                    <FileUpload name="demo[]" url="./upload.php" onUpload={this.onUpload}
                                multiple={true} accept="image/*" maxFileSize={1000000} />

                    <h3>Basic</h3>
                    <FileUpload mode="basic" name="demo[]" url="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={this.onBasicUpload} />

                    <h3>Basic with Auto</h3>
                    <FileUpload mode="basic" name="demo[]" uurl="./upload.php" accept="image/*" maxFileSize={1000000} onUpload={this.onBasicUploadAuto} auto={true} chooseLabel="Browse" />

                    <Growl ref={(el) => { this.growl = el; }}></Growl>
                </div>
            </div>
        )
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}
