'use client';

import { FileUploadInstance } from '@primereact/types/shared/fileupload';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Message } from 'primereact/message';

export default function FileUploadPTDemo() {
    return (
        <FileUpload.Root
            name="demo[]"
            url="/api/upload"
            multiple
            accept="image/*"
            maxFileSize={1000000}
            className="border border-surface-200 dark:border-surface-700 rounded-md"
        >
            {(instance: FileUploadInstance) => {
                return (
                    <>
                        <div className="flex items-center p-5 gap-2">
                            <Button.Root onClick={instance.choose}>
                                <i className="pi pi-plus" />
                                Choose
                            </Button.Root>
                            <Button.Root severity="secondary" disabled={!instance.hasFiles} onClick={instance.upload}>
                                <i className="pi pi-upload" />
                                Upload
                            </Button.Root>
                            <Button.Root severity="secondary" disabled={!instance.hasFiles} onClick={instance.clear}>
                                <i className="pi pi-times" />
                                Cancel
                            </Button.Root>
                        </div>

                        <FileUpload.Content>
                            {((instance.state.messages && instance.state.messages.length > 0) || instance.hasFiles) && (
                                <div className="flex flex-col gap-4">
                                    {instance.state.messages &&
                                        instance.state.messages.length > 0 &&
                                        instance.state.messages.map((msg, i) => (
                                            <Message.Root key={i} severity="error" className="mb-2">
                                                <Message.Content>
                                                    <Message.Text>{msg}</Message.Text>
                                                </Message.Content>
                                            </Message.Root>
                                        ))}
                                </div>
                            )}

                            <FileUpload.List />

                            {!instance.hasFiles && !instance.hasUploadedFiles && <div>Drag and drop files to here to upload.</div>}
                        </FileUpload.Content>
                    </>
                );
            }}
        </FileUpload.Root>
    );
}
