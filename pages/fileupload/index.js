import React, { Component } from 'react';
import { Toast } from '../../components/lib/toast/Toast';
import { FileUpload } from '../../components/lib/fileupload/FileUpload';
import { ProgressBar } from '../../components/lib/progressbar/ProgressBar';
import { Button } from '../../components/lib/button/Button';
import { Tooltip } from '../../components/lib/tooltip/Tooltip';
import { Tag } from '../../components/lib/tag/Tag';
import { FileUploadDoc } from '../../components/doc/fileupload';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

export default class FileUploadDemo extends Component {

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
        this.uploadPath = getConfig().publicRuntimeConfig.uploadPath;
    }

    onUpload() {
        this.toast.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    onTemplateSelect(e) {
        let totalSize = this.state.totalSize;
        let files = e.files;
        Object.keys(files).forEach(key => {
            totalSize += (files[key].size || 0);
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
                <ProgressBar value={value} displayValueTemplate={() => `${formatedValue} / 1 MB`} style={{width: '300px', height: '20px', marginLeft: 'auto'}}></ProgressBar>
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

    render() {
        const chooseOptions = {icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined'};
        const uploadOptions = {icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined'};
        const cancelOptions = {icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined'};

        return (
            <div>
                <Head>
                    <title>React Upload Component</title>
                    <meta name="description" content="FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations." />
                </Head>
                <div className="content-section introduction">
                    <div>
                        <h1>FileUpload</h1>
                        <p>FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.</p>
                    </div> 
                    <DocActions github="fileupload/index.js" />
                </div>

                <div className="content-section implementation">
                    <Toast ref={(el) => { this.toast = el; }}></Toast>

                    <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
                    <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
                    <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

                    <div className="card">
                        <h5>Advanced</h5>
                        <FileUpload name="demo[]" url={this.uploadPath} onUpload={this.onUpload} multiple accept="image/*" maxFileSize={1000000}
                            emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />

                        <h5>Template</h5>
                        <FileUpload ref={(el) => this.fileUploadRef = el} name="demo[]" url={this.uploadPath} multiple accept="image/*" maxFileSize={1000000}
                            onUpload={this.onTemplateUpload} onSelect={this.onTemplateSelect} onError={this.onTemplateClear} onClear={this.onTemplateClear}
                            headerTemplate={this.headerTemplate} itemTemplate={this.itemTemplate} emptyTemplate={this.emptyTemplate}
                            chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />

                        <h5>Basic</h5>
                        <FileUpload mode="basic" name="demo[]" url={this.uploadPath} accept="image/*" maxFileSize={1000000} onUpload={this.onBasicUpload} />

                        <h5>Basic with Auto</h5>
                        <FileUpload mode="basic" name="demo[]" url={this.uploadPath} accept="image/*" maxFileSize={1000000} onUpload={this.onBasicUploadAuto} auto chooseLabel="Browse" />
                    </div>
                </div>

                <FileUploadDoc />
            </div>
        )
    }
}
