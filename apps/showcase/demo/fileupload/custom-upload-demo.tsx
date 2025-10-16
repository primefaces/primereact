import { FileUploadHandlerEvent, FileUploadInstance } from '@primereact/types/shared/fileupload';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import * as React from 'react';

export default function CustomUploadDemo() {
    const [src, setSrc] = React.useState<string | null>(null);

    const onFileSelect = (event: FileUploadHandlerEvent) => {
        const file = event.files[0];
        const reader = new FileReader();

        reader.onload = async (e) => {
            if (e.target?.result && typeof e.target.result === 'string') {
                setSrc(e.target.result);
            }
        };

        reader.readAsDataURL(file);
    };

    return (
        <div className="card flex flex-col items-center gap-6">
            <FileUpload url="/api/upload" auto customUpload uploadHandler={onFileSelect}>
                {(instance: FileUploadInstance) => {
                    return (
                        <div className="flex flex-wrap items-center gap-3">
                            <Button onClick={instance.choose} severity="secondary" variant="outlined">
                                <i className="pi pi-plus" />
                                Browse
                            </Button>
                        </div>
                    );
                }}
            </FileUpload>
            {src && <img src={src} alt="Image" className="shadow-md rounded-xl w-full sm:w-64" style={{ filter: 'grayscale(100%)' }} />}
        </div>
    );
}
