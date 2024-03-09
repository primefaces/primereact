import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { FileUpload } from '@/components/lib/fileupload/FileUpload';

export function CustomUploadDoc(props) {
    const customBase64Uploader = async (event) => {
        // convert file to base64 encoded
        const file = event.files[0];
        const reader = new FileReader();
        let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

        reader.readAsDataURL(blob);

        reader.onloadend = function () {
            const base64data = reader.result;

            // eslint-disable-next-line no-console
            console.log(base64data);
        };
    };

    const code = {
        basic: `
<FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload uploadHandler={customBase64Uploader} />
        `,
        javascript: `
import React from 'react'; 
import { FileUpload } from 'primereact/fileupload';

export default function CustomUploadDemo() {
    const customBase64Uploader = async (event) => {
        // convert file to base64 encoded
        const file = event.files[0];
        const reader = new FileReader();
        let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

        reader.readAsDataURL(blob);

        reader.onloadend = function () {
            const base64data = reader.result;
        };
    };

    return (
        <div className="card flex justify-content-center">
            <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload uploadHandler={customBase64Uploader} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { FileUpload, FileUploadHandlerEvent } from 'primereact/fileupload';

export default function CustomUploadDemo() {
    const customBase64Uploader = async (event: FileUploadHandlerEvent) => {
        // convert file to base64 encoded
        const file = event.files[0];
        const reader = new FileReader();
        let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

        reader.readAsDataURL(blob);

        reader.onloadend = function () {
            const base64data = reader.result;
        };
    };

    return (
        <div className="card flex justify-content-center">
            <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload uploadHandler={customBase64Uploader} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Uploading implementation can be overriden with <i>customUpload</i> property and defining a custom <i>uploadHandler</i> function.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload uploadHandler={customBase64Uploader} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
