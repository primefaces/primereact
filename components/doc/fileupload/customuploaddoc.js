import { FileUpload } from '../../lib/fileupload/FileUpload';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import getConfig from 'next/config';

export function CustomUploadDoc(props) {
    const uploadPath = getConfig().publicRuntimeConfig.uploadPath;

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
<FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" customUpload uploadHandler={customBase64Uploader} />
        `,
        javascript: `
import React from 'react'; 
import { FileUpload } from 'primereact/fileupload';

export default function CustomUploadDoc() {

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
        <div className="card">
            <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" customUpload uploadHandler={customBase64Uploader} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { FileUpload } from 'primereact/fileupload';

export default function CustomUploadDoc() {

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
        <div className="card">
            <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" customUpload uploadHandler={customBase64Uploader} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Uploading implementation can be overriden by enabling customUpload property and defining a custom upload handler event.</p>
            </DocSectionText>
            <div className="card">
                <FileUpload mode="basic" name="demo[]" url={uploadPath} accept="image/*" customUpload uploadHandler={customBase64Uploader} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
