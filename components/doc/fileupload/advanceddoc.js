import { useRef } from 'react';
import { FileUpload } from '../../lib/fileupload/FileUpload';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import getConfig from 'next/config';

export function AdvancedDoc(props) {
    const toast = useRef(null);
    const uploadPath = getConfig().publicRuntimeConfig.uploadPath;

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const code = {
        basic: `
<Toast ref={toast}></Toast>
<FileUpload name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
        `,
        javascript: `
import { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

export default function AdvancedDoc() {
    const toast = useRef(null);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    return (
        <Toast ref={toast}></Toast>
        <FileUpload name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />       
    )
}
        `,
        typescript: `
import { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

export default function AdvancedDoc() {
    const toast = useRef(null);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };
    
    return (
        <Toast ref={toast}></Toast>
        <FileUpload name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations.</p>
            </DocSectionText>
            <div className="card">
                <Toast ref={toast}></Toast>

                <FileUpload name="demo[]" url={uploadPath} onUpload={onUpload} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
