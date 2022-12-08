import { useRef } from 'react';
import { FileUpload } from '../../lib/fileupload/FileUpload';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import getConfig from 'next/config';

export function BasicWithAuto(props) {
    const toast = useRef(null);
    const uploadPath = getConfig().publicRuntimeConfig.uploadPath;

    const onBasicUploadAuto = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    };

    const code = {
        basic: `
<Toast ref={toast}></Toast>
<FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUploadAuto} auto chooseLabel="Browse" />

        `,
        javascript: `
import { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

export default function BasicWithAuto() {
    const toast = useRef(null);

    const onBasicUploadAuto = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    };
    
    return (
        <Toast ref={toast}></Toast>
        <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUploadAuto} auto chooseLabel="Browse" />
    )
}
        `,
        typescript: `
import { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

export default function BasicWithAuto() {
    const toast = useRef(null);

    const onBasicUploadAuto = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
    };
    
    return (
        <Toast ref={toast}></Toast>
        <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUploadAuto} auto chooseLabel="Browse" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>FileUpload basic mode provides a simpler UI as an alternative to advanced mode.</p>
            </DocSectionText>
            <div className="card">
                <Toast ref={toast}></Toast>
                <FileUpload mode="basic" name="demo[]" url={uploadPath} accept="image/*" maxFileSize={1000000} onUpload={onBasicUploadAuto} auto chooseLabel="Browse" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
