import React, { useState, useRef } from 'react';
import { Toast } from '../../components/lib/toast/Toast';
import { FileUpload } from '../../components/lib/fileupload/FileUpload';
import { ProgressBar } from '../../components/lib/progressbar/ProgressBar';
import { Button } from '../../components/lib/button/Button';
import { Tooltip } from '../../components/lib/tooltip/Tooltip';
import { Tag } from '../../components/lib/tag/Tag';
import FileUploadDoc from '../../components/doc/fileupload';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const FileUploadDemo = () => {

    const [totalSize, setTotalSize] = useState(0);
    const toast = useRef(null);
    const fileUploadRef = useRef(null);
    const uploadPath = getConfig().publicRuntimeConfig.uploadPath;

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

    const onTemplateSelect = (e) => {
        let _totalSize = totalSize;
        let files = e.files;
        Object.keys(files).forEach(key => {
            _totalSize += (files[key].size || 0);
        });

        setTotalSize(_totalSize);
    }

    const onTemplateUpload = (e) => {
        let _totalSize = 0;
        e.files.forEach(file => {
            _totalSize += (file.size || 0);
        });

        setTotalSize(_totalSize);
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

    const onTemplateRemove = (file, callback) => {
        setTotalSize(totalSize - file.size);
        callback();
    }

    const onTemplateClear = () => {
        setTotalSize(0);
    }

    const onBasicUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }

    const onBasicUploadAuto = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    }

    const headerTemplate = (options) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize / 10000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {uploadButton}
                {cancelButton}
                <ProgressBar value={value} displayValueTemplate={() => `${formatedValue} / 1 MB`} style={{ width: '300px', height: '20px', marginLeft: 'auto' }}></ProgressBar>
            </div>
        );
    }

    const itemTemplate = (file, props) => {
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{ width: '40%' }}>
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
                <i className="pi pi-image mt-3 p-5" style={{ 'fontSize': '5em', borderRadius: '50%', backgroundColor: 'var(--surface-b)', color: 'var(--surface-d)' }}></i>
                <span style={{ 'fontSize': '1.2em', color: 'var(--text-color-secondary)' }} className="my-5">Drag and Drop Image Here</span>
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
            // eslint-disable-next-line no-console
            console.log(base64data);
        }
    }

    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const uploadOptions = { icon: 'pi pi-fw pi-cloud-upload', iconOnly: true, className: 'custom-upload-btn p-button-success p-button-rounded p-button-outlined' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };

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
                <Toast ref={toast}></Toast>

                <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
                <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
                <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

                <div className="card">
                    <h5>Advanced</h5>
                    <FileUpload name="demo[]" url={uploadPath} onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000}
                        emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />

                    <h5>Template</h5>
                    <FileUpload ref={fileUploadRef} name="demo[]" url={uploadPath} multiple accept="image/*" maxFileSize={1000000}
                        onUpload={onTemplateUpload} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
                        headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
                        chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions} />

                    <h5>Basic</h5>
                    <FileUpload mode="basic" name="demo[]" url={uploadPath} accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} />

                    <h5>Basic with Auto</h5>
                    <FileUpload mode="basic" name="demo[]" url={uploadPath} accept="image/*" maxFileSize={1000000} onUpload={onBasicUploadAuto} auto chooseLabel="Browse" />

                    <h5>Custom (base64 encoded)</h5>
                    <FileUpload mode="basic" name="demo[]" url={uploadPath} accept="image/*" customUpload uploadHandler={customBase64Uploader} />
                </div>
            </div>

            <FileUploadDoc />
        </div>
    )
}

export default FileUploadDemo;
