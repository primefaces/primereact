import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { FileUpload } from '@/components/lib/fileupload/FileUpload';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef } from 'react';

export function BasicDoc(props) {
    const toast = useRef(null);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const code = {
        basic: `
<Toast ref={toast}></Toast>
<FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} />
        `,
        javascript: `
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

export default function BasicDemo() {
    const toast = useRef(null);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };
        
    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} />
        </div>  
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

export default function BasicDemo() {
    const toast = useRef<Toast>(null);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };
        
    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} />
        </div>  
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    FileUpload basic <i>mode</i> provides a simpler UI as an alternative to default advanced mode.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast}></Toast>
                <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
