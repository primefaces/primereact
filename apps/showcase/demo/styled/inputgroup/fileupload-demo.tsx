'use client';
import { FileUploadRootInstance } from '@primereact/types/shared/fileupload';
import { Button } from '@primereact/ui/button';
import { FileUpload } from '@primereact/ui/fileupload';
import { InputGroup } from '@primereact/ui/inputgroup';
import { InputText } from '@primereact/ui/inputtext';

export default function FileUploadDemo() {
    return (
        <div className="space-y-4 max-w-md mx-auto">
            <InputGroup.Root>
                <InputGroup.Addon>Upload</InputGroup.Addon>
                <InputGroup.Addon>
                    <FileUpload.Root name="demo1[]" accept="image/*" maxFileSize={1000000}>
                        {(instance: FileUploadRootInstance) => (
                            <Button severity="secondary" variant="outlined" onClick={instance.choose} className="flex-1 justify-start border-none">
                                <i className="pi pi-upload mr-2" />
                                {instance.hasFiles ? instance.state.files.map((file) => file.name).join(', ') : 'Choose file'}
                            </Button>
                        )}
                    </FileUpload.Root>
                </InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <FileUpload.Root name="demo2[]" accept="image/*" maxFileSize={1000000}>
                        {(instance: FileUploadRootInstance) => (
                            <Button severity="secondary" variant="outlined" onClick={instance.choose} className="flex-1 justify-start border-none">
                                <i className="pi pi-upload mr-2" />
                                {instance.hasFiles ? instance.state.files.map((file) => file.name).join(', ') : 'Choose file'}
                            </Button>
                        )}
                    </FileUpload.Root>
                </InputGroup.Addon>
                <InputGroup.Addon>
                    <Button severity="secondary" variant="text">
                        <i className="pi pi-cloud-upload" />
                    </Button>
                </InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <i className="pi pi-tag" />
                </InputGroup.Addon>
                <InputText placeholder="Label" />
                <InputGroup.Addon>
                    <FileUpload.Root name="demo3[]" accept="image/*" maxFileSize={1000000}>
                        {(instance: FileUploadRootInstance) => (
                            <Button severity="secondary" variant="outlined" onClick={instance.choose} className="border-none">
                                <i className="pi pi-upload mr-2" />
                                {instance.hasFiles ? instance.state.files.map((file) => file.name).join(', ') : 'Browse'}
                            </Button>
                        )}
                    </FileUpload.Root>
                </InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}
