import React, { memo } from 'react';
import Link from 'next/link';
import { TabView, TabPanel } from '../../lib/tabview/TabView';
import { useLiveEditorTabs } from '../common/liveeditor';
import { CodeHighlight } from '../common/codehighlight';

const FileUploadDoc = memo(() => {

    const sources = {
        'class': {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';

export class FileUploadDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            totalSize: 0
        };

        this.onUpload = this.onUpload.bind(this);
        this.onTemplateUpload = this.onTemplateUpload.bind(this)
        this.onTemplateSelect = this.onTemplateSelect.bind(this);
        this.onTemplateRemove = this.onTemplateRemove.bind(this);
        this.onTemplateClear = this.onTemplateClear.bind(this);
        this.onBasicUpload = this.onBasicUpload.bind(this);
        this.onBasicUploadAuto = this.onBasicUploadAuto.bind(this);
        this.headerTemplate = this.headerTemplate.bind(this);
        this.itemTemplate = this.itemTemplate.bind(this);
        this.emptyTemplate = this.emptyTemplate.bind(this);
    }

    onUpload() {
        this.toast.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    onTemplateSelect(e) {
        let totalSize = this.state.totalSize;
        e.files.forEach(file => {
            totalSize += file.size;
        });

        this.setState({
            totalSize
        });
    }

    onTemplateUpload(e) {
        let totalSize = 0;
        e.files.forEach(file => {
            totalSize += (file.size || 0);
        });

        this.setState({
            totalSize
        }, () => {
            this.toast.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
        });
    }

    onTemplateRemove(file, callback) {
        this.setState((prevState) => ({
            totalSize: prevState.totalSize - file.size
        }), callback);
    }

    onTemplateClear() {
        this.setState({ totalSize: 0 });
    }

    onBasicUpload() {
        this.toast.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }

    onBasicUploadAuto() {
        this.toast.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
    }

    headerTemplate(options) {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = this.state.totalSize/10000;
        const formatedValue = this.fileUploadRef ? this.fileUploadRef.formatSize(this.state.totalSize) : '0 B';

        return (
            <div className={className} style={{backgroundColor: 'transparent', display: 'flex', alignItems: 'center'}}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                <ProgressBar value={value} displayValueTemplate={() => \`\${formatedValue} / 1 MB\`} style={{width: '300px', height: '20px', marginLeft: 'auto'}}></ProgressBar>
            </div>
        );
    }

    itemTemplate(file, props) {
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{width: '40%'}}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => this.onTemplateRemove(file, props.onRemove)} />
            </div>
        )
    }

    emptyTemplate() {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image mt-3 p-5" style={{'fontSize': '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)'}}></i>
                <span style={{'fontSize': '1.2em', color: 'var(--text-color-secondary)'}} className="my-5">Drag and Drop Image Here</span>
            </div>
        )
    }

    async customBase64Uploader(event) {
        // convert file to base64 encoded 
        const file = event.files[0];
        const reader = new FileReader();
        let blob = await fetch(file.objectURL).then(r => r.blob()); //blob:url
        reader.readAsDataURL(blob); 
        reader.onloadend = function () {
            const base64data = reader.result;
            console.log(base64data);
        }
    }

    render() {
        const chooseOptions = {icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined'};
        const uploadOptions = {icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined'};
        const cancelOptions = {icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined'};

        return (
            <div>
                <Toast ref={(el) => { this.toast = el; }}></Toast>

                <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
                <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
                <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

                <div className="card">
                    <h5>Advanced</h5>
                    <FileUpload name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" onUpload={this.onUpload} multiple accept="image/*" maxFileSize={1000000}
                        emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />

                    <h5>Template</h5>
                    <FileUpload ref={(el) => this.fileUploadRef = el} name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" multiple accept="image/*" maxFileSize={1000000}
                        onUpload={this.onTemplateUpload} onSelect={this.onTemplateSelect} onError={this.onTemplateClear} onClear={this.onTemplateClear}
                        headerTemplate={this.headerTemplate} itemTemplate={this.itemTemplate} emptyTemplate={this.emptyTemplate}
                        chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />

                    <h5>Basic</h5>
                    <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={this.onBasicUpload} />

                    <h5>Basic with Auto</h5>
                    <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={this.onBasicUploadAuto} auto chooseLabel="Browse" />

                    <h5>Custom (base64 encoded)</h5>
                    <FileUpload mode="basic" name="demo[]" url={uploadPath} accept="image/*" customUpload uploadHandler={customBase64Uploader} />
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
import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';

export const FileUploadDemo = () => {
    const [totalSize, setTotalSize] = useState(0);
    const toast = useRef(null);
    const fileUploadRef = useRef(null);

    const onUpload = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    const onTemplateSelect = (e) => {
        let _totalSize = totalSize;
        e.files.forEach(file => {
            _totalSize += file.size;
        });

        setTotalSize(_totalSize);
    }

    const onTemplateUpload = (e) => {
        let _totalSize = 0;
        e.files.forEach(file => {
            _totalSize += (file.size || 0);
        });

        setTotalSize(_totalSize);
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    const onTemplateRemove = (file, callback) => {
        setTotalSize(totalSize - file.size);
        callback();
    }

    const onTemplateClear = () => {
        setTotalSize(0);
    }

    const onBasicUpload = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }

    const onBasicUploadAuto = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
    }

    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize/10000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{backgroundColor: 'transparent', display: 'flex', alignItems: 'center'}}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                <ProgressBar value={value} displayValueTemplate={() => \`\${formatedValue} / 1 MB\`} style={{width: '300px', height: '20px', marginLeft: 'auto'}}></ProgressBar>
            </div>
        );
    }

    const itemTemplate = (file, props) => {
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{width: '40%'}}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        )
    }

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image mt-3 p-5" style={{'fontSize': '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)'}}></i>
                <span style={{'fontSize': '1.2em', color: 'var(--text-color-secondary)'}} className="my-5">Drag and Drop Image Here</span>
            </div>
        )
    }

    const customBase64Uploader = async (event) => {
        // convert file to base64 encoded 
        const file = event.files[0];
        const reader = new FileReader();
        let blob = await fetch(file.objectURL).then(r => r.blob()); //blob:url
        reader.readAsDataURL(blob); 
        reader.onloadend = function () {
            const base64data = reader.result;
            console.log(base64data);
        }
    }

    const chooseOptions = {icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined'};
    const uploadOptions = {icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined'};
    const cancelOptions = {icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined'};

    return (
        <div>
            <Toast ref={toast}></Toast>

            <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
            <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
            <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

            <div className="card">
                <h5>Advanced</h5>
                <FileUpload name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000}
                    emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />

                <h5>Template</h5>
                <FileUpload ref={fileUploadRef} name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" multiple accept="image/*" maxFileSize={1000000}
                    onUpload={onTemplateUpload} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
                    headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                    chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />

                <h5>Basic</h5>
                <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} />

                <h5>Basic with Auto</h5>
                <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUploadAuto} auto chooseLabel="Browse" />

                <h5>Custom (base64 encoded)</h5>
                <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" customUpload uploadHandler={customBase64Uploader} />
            </div>
        </div>
    )
}
                `
        },
        'ts': {
            tabName: 'TS Source',
            content: `
import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';

export const FileUploadDemo = () => {
    const [totalSize, setTotalSize] = useState(0);
    const toast = useRef(null);
    const fileUploadRef = useRef(null);

    const onUpload = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    const onTemplateSelect = (e) => {
        let _totalSize = totalSize;
        e.files.forEach(file => {
            _totalSize += file.size;
        });

        setTotalSize(_totalSize);
    }

    const onTemplateUpload = (e) => {
        let _totalSize = 0;
        e.files.forEach(file => {
            _totalSize += (file.size || 0);
        });

        setTotalSize(_totalSize);
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    const onTemplateRemove = (file, callback) => {
        setTotalSize(totalSize - file.size);
        callback();
    }

    const onTemplateClear = () => {
        setTotalSize(0);
    }

    const onBasicUpload = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }

    const onBasicUploadAuto = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
    }

    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize/10000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{backgroundColor: 'transparent', display: 'flex', alignItems: 'center'}}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                <ProgressBar value={value} displayValueTemplate={() => \`\${formatedValue} / 1 MB\`} style={{width: '300px', height: '20px', marginLeft: 'auto'}}></ProgressBar>
            </div>
        );
    }

    const itemTemplate = (file, props) => {
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{width: '40%'}}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        )
    }

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image mt-3 p-5" style={{'fontSize': '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)'}}></i>
                <span style={{'fontSize': '1.2em', color: 'var(--text-color-secondary)'}} className="my-5">Drag and Drop Image Here</span>
            </div>
        )
    }

    const customBase64Uploader = async (event) => {
        // convert file to base64 encoded 
        const file = event.files[0];
        const reader = new FileReader();
        let blob = await fetch(file.objectURL).then(r => r.blob()); //blob:url
        reader.readAsDataURL(blob); 
        reader.onloadend = function () {
            const base64data = reader.result;
            console.log(base64data);
        }
    }

    const chooseOptions = {icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined'};
    const uploadOptions = {icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined'};
    const cancelOptions = {icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined'};

    return (
        <div>
            <Toast ref={toast}></Toast>

            <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
            <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
            <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

            <div className="card">
                <h5>Advanced</h5>
                <FileUpload name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000}
                    emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />

                <h5>Template</h5>
                <FileUpload ref={fileUploadRef} name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" multiple accept="image/*" maxFileSize={1000000}
                    onUpload={onTemplateUpload} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
                    headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                    chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />

                <h5>Basic</h5>
                <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} />

                <h5>Basic with Auto</h5>
                <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUploadAuto} auto chooseLabel="Browse" />

                <h5>Custom (base64 encoded)</h5>
                <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" customUpload uploadHandler={customBase64Uploader} />
            </div>
        </div>
    )
}
                `
        },
        'browser': {
            tabName: 'Browser Source',
            imports: `
        <script src="https://unpkg.com/primereact/core/core.min.js"></script>
        <script src="https://unpkg.com/primereact/toast/toast.min.js"></script>
        <script src="https://unpkg.com/primereact/fileupload/fileupload.min.js"></script>
        <script src="https://unpkg.com/primereact/tag/tag.min.js"></script>`,
            content: `
const { useState, useRef } = React;
const { Toast } = primereact.toast;
const { FileUpload } = primereact.fileupload;
const { ProgressBar } = primereact.progressbar;
const { Button } = primereact.button;
const { Tooltip } = primereact.tooltip;
const { Tag } = primereact.tag;

const FileUploadDemo = () => {
    const [totalSize, setTotalSize] = useState(0);
    const toast = useRef(null);
    const fileUploadRef = useRef(null);

    const onUpload = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    const onTemplateSelect = (e) => {
        let _totalSize = totalSize;
        e.files.forEach(file => {
            _totalSize += file.size;
        });

        setTotalSize(_totalSize);
    }

    const onTemplateUpload = (e) => {
        let _totalSize = 0;
        e.files.forEach(file => {
            _totalSize += (file.size || 0);
        });

        setTotalSize(_totalSize);
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    const onTemplateRemove = (file, callback) => {
        setTotalSize(totalSize - file.size);
        callback();
    }

    const onTemplateClear = () => {
        setTotalSize(0);
    }

    const onBasicUpload = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }

    const onBasicUploadAuto = () => {
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
    }

    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize/10000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{backgroundColor: 'transparent', display: 'flex', alignItems: 'center'}}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                <ProgressBar value={value} displayValueTemplate={() => \`\${formatedValue} / 1 MB\`} style={{width: '300px', height: '20px', marginLeft: 'auto'}}></ProgressBar>
            </div>
        );
    }

    const itemTemplate = (file, props) => {
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{width: '40%'}}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                        {file.name}
                        <small>{new Date().toLocaleDateString()}</small>
                    </span>
                </div>
                <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        )
    }

    const emptyTemplate = () => {
        return (
            <div className="flex align-items-center flex-column">
                <i className="pi pi-image mt-3 p-5" style={{'fontSize': '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)'}}></i>
                <span style={{'fontSize': '1.2em', color: 'var(--text-color-secondary)'}} className="my-5">Drag and Drop Image Here</span>
            </div>
        )
    }

    const customBase64Uploader = async (event) => {
        // convert file to base64 encoded 
        const file = event.files[0];
        const reader = new FileReader();
        let blob = await fetch(file.objectURL).then(r => r.blob()); //blob:url
        reader.readAsDataURL(blob); 
        reader.onloadend = function () {
            const base64data = reader.result;
            console.log(base64data);
        }
    }

    const chooseOptions = {icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined'};
    const uploadOptions = {icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined'};
    const cancelOptions = {icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined'};

    return (
        <div>
            <Toast ref={toast}></Toast>

            <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
            <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
            <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

            <div className="card">
                <h5>Advanced</h5>
                <FileUpload name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000}
                    emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />

                <h5>Template</h5>
                <FileUpload ref={fileUploadRef} name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" multiple accept="image/*" maxFileSize={1000000}
                    onUpload={onTemplateUpload} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
                    headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                    chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />

                <h5>Basic</h5>
                <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} />

                <h5>Basic with Auto</h5>
                <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUploadAuto} auto chooseLabel="Browse" />

                <h5>Custom (base64 encoded)</h5>
                <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" customUpload uploadHandler={customBase64Uploader} />
            </div>
        </div>
    )
}
                `
            }
        };

    const extFiles = {
        'public/upload.php': {
            content: `
<?php
header ("Access-Control-Allow-Origin: *");
echo '<p>Fake Upload Process</p>'; ?>

                `
        }
    }

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>
                <TabPanel header="Documentation">
                    <h5>Import via Module</h5>
<CodeHighlight lang="js">
{`
import { FileUpload } from 'primereact/fileupload';
`}
</CodeHighlight>

                    <h5>Import via CDN</h5>
<CodeHighlight>
{`
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/fileupload/fileupload.min.js"></script>
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

        <h5>ItemTemplate</h5>
        <p>Used to create custom item elements in the container.</p>
<CodeHighlight>
{`
<FileUpload name="demo[]" url="./upload" itemTemplate={customItemTemplate} uploadHandler={myUploader} />
`}
</CodeHighlight>
<CodeHighlight lang="js">
{`
const customItemTemplate = (file, props) => {
    // file: Current file object.
    // options.onRemove: Event used to remove current file in the container.
    // options.previewElement: The default preview element in the container.
    // options.fileNameElement: The default fileName element in the container.
    // options.sizeElement: The default size element in the container.
    // options.removeElement: The default remove element in the container.
    // options.formatSize: The formated size of file.
    // options.files: Current files.
    // options.index: The index of file in current files list.
    // options.element: Default element created by the component.
    // options.props: component props.
}
`}
</CodeHighlight>

        <h5>Button Options</h5>
        <p>Used to customize choose, upload and cancel buttons.</p>
<CodeHighlight lang="js">
{`
const chooseOptions = {label: 'Choose', icon: 'pi pi-fw pi-plus'};
const uploadOptions = {label: 'Uplaod', icon: 'pi pi-upload', className: 'p-button-success'};
const cancelOptions = {label: 'Cancel', icon: 'pi pi-times', className: 'p-button-danger'};
`}
</CodeHighlight>
<CodeHighlight>
{`
<FileUpload name="demo[]" url="./upload" chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} uploadHandler={myUploader} />
`}
</CodeHighlight>
<CodeHighlight lang="js">
{`
const buttonOptions = {
    // label: The label of button.
    // icon: The icon of button.
    // className: Style class of button.
    // style: Style of button.
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
                                <td>onBeforeDrop</td>
                                <td>event: DragEvent instance.</td>
                                <td>Callback to invoke before files dropped. Return false from callback to prevent drop.</td>
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
                                <td>-</td>
                                <td>Callback to invoke when files in queue are removed without uploading.</td>
                            </tr>
                            <tr>
                                <td>onSelect</td>
                                <td>event.originalEvent: Original browser event. <br />
                                    event.files: List of selected files.</td>
                                <td>Callback to invoke when files are selected.</td>
                            </tr>
                            <tr>
                                <td>onProgress</td>
                                <td>event.originalEvent: Original browser event. <br />
                                    event.progress: Calculated progress value.</td>
                                <td>Callback to invoke when files are being uploaded.</td>
                            </tr>
                            <tr>
                                <td>onValidationFail</td>
                                <td>file: Invalid file.</td>
                                <td>Callback to invoke when a validation file fails.</td>
                            </tr>
                            <tr>
                                <td>uploadHandler</td>
                                <td>event.files: List of selected files.<br />
                                    event.options: Handler options.</td>
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
                <p>Following is the list of structural style classes, for theming classes visit <Link href="/theming"> theming</Link> page.</p>
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
                    useLiveEditorTabs({ name: 'FileUploadDemo', sources: sources, extFiles: extFiles })
                }
            </TabView>
        </div>
    );
})

export default FileUploadDoc;
