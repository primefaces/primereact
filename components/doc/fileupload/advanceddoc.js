import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { FileUpload } from '@/components/lib/fileupload/FileUpload';

export function AdvancedDoc(props) {
    const code = {
        basic: `
<FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
        `,
        javascript: `
import React from 'react';
import { FileUpload } from 'primereact/fileupload';

export default function AdvanceDemo() {
        
    return (
        <div className="card">
            <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';

export default function AdvanceDemo() {
        
    return (
        <div className="card">
            <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
        </div>
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
                <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
