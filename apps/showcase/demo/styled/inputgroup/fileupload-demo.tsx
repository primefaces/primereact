'use client';
import { Tag as TagIcon } from '@primeicons/react';
import { CloudUpload } from '@primeicons/react/cloud-upload';
import { Upload } from '@primeicons/react/upload';
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
                                <Upload className="mr-2" />
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
                                <Upload className="mr-2" />
                                {instance.hasFiles ? instance.state.files.map((file) => file.name).join(', ') : 'Choose file'}
                            </Button>
                        )}
                    </FileUpload.Root>
                </InputGroup.Addon>
                <InputGroup.Addon>
                    <Button severity="secondary" variant="text">
                        <CloudUpload />
                    </Button>
                </InputGroup.Addon>
            </InputGroup.Root>

            <InputGroup.Root>
                <InputGroup.Addon>
                    <TagIcon />
                </InputGroup.Addon>
                <InputText placeholder="Label" />
                <InputGroup.Addon>
                    <FileUpload.Root name="demo3[]" accept="image/*" maxFileSize={1000000}>
                        {(instance: FileUploadRootInstance) => (
                            <Button severity="secondary" variant="outlined" onClick={instance.choose} className="border-none">
                                <Upload className="mr-2" />
                                {instance.hasFiles ? instance.state.files.map((file) => file.name).join(', ') : 'Browse'}
                            </Button>
                        )}
                    </FileUpload.Root>
                </InputGroup.Addon>
            </InputGroup.Root>
        </div>
    );
}
