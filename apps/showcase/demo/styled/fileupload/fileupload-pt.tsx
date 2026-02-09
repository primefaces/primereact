'use client';
import { FileUploadRootInstance } from '@primereact/types/shared/fileupload';
import { Button } from '@primereact/ui/button';
import { FileUpload } from '@primereact/ui/fileupload';
import { Message } from '@primereact/ui/message';
import { Plus } from '@primeicons/react/plus';
import { Times } from '@primeicons/react/times';
import { Upload } from '@primeicons/react/upload';

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
            {(instance: FileUploadRootInstance) => {
                return (
                    <>
                        <div className="flex items-center p-5 gap-2">
                            <Button onClick={instance.choose}>
                                <Plus />
                                Choose
                            </Button>
                            <Button severity="secondary" disabled={!instance.hasFiles} onClick={instance.upload}>
                                <Upload />
                                Upload
                            </Button>
                            <Button severity="secondary" disabled={!instance.hasFiles} onClick={instance.clear}>
                                <Times />
                                Cancel
                            </Button>
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
