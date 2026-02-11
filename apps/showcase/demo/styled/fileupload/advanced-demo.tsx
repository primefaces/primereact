'use client';
import { Plus } from '@primeicons/react/plus';
import { Times } from '@primeicons/react/times';
import { Upload } from '@primeicons/react/upload';
import { toast } from '@primereact/headless/toaster';
import { FileUploadRootInstance } from '@primereact/types/shared/fileupload';
import { ToasterRegionInstance, ToastType } from '@primereact/types/shared/toaster';
import { Button } from '@primereact/ui/button';
import { FileUpload } from '@primereact/ui/fileupload';
import { Message } from '@primereact/ui/message';
import { ProgressBar } from '@primereact/ui/progressbar';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';

export default function AdvancedDemo() {
    const onUpload = () => {
        toast({
            title: 'Success',
            description: 'File Uploaded',
            group: 'advanced-demo'
        });
    };

    return (
        <div>
            <FileUpload.Root
                name="demo[]"
                url="/api/upload"
                multiple
                accept="image/*"
                maxFileSize={1000000}
                className="border border-surface-200 dark:border-surface-700 rounded-md"
                onUpload={onUpload}
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

                                        {instance.hasFiles && (
                                            <ProgressBar.Root value={instance.state.progress}>
                                                <ProgressBar.Track style={{ height: '0.25rem' }}>
                                                    <ProgressBar.Indicator>
                                                        <ProgressBar.Label />
                                                    </ProgressBar.Indicator>
                                                </ProgressBar.Track>
                                            </ProgressBar.Root>
                                        )}
                                    </div>
                                )}

                                <FileUpload.List />

                                {!instance.hasFiles && !instance.hasUploadedFiles && <div>Drag and drop files to here to upload.</div>}
                            </FileUpload.Content>
                        </>
                    );
                }}
            </FileUpload.Root>

            <Toaster.Root position="top-right" group="advanced-demo">
                <Toaster.Portal>
                    <Toaster.Region>
                        {({ toaster }: ToasterRegionInstance) =>
                            toaster?.toasts.map((toast: ToastType) => (
                                <Toast.Root key={toast.id} toast={toast}>
                                    <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                                        <Toast.Icon className="[&>svg]:size-3.5 mt-1 " />
                                        <div>
                                            <Toast.Title />
                                            <Toast.Description className="mt-1" />
                                            <Toast.Action as={Button} size="small" className="mt-3" />
                                        </div>
                                    </div>
                                    <Toast.Close
                                        as={Button}
                                        iconOnly
                                        severity={'secondary'}
                                        variant="text"
                                        size="small"
                                        className={'absolute top-2 right-2'}
                                    >
                                        <Times />
                                    </Toast.Close>
                                </Toast.Root>
                            ))
                        }
                    </Toaster.Region>
                </Toaster.Portal>
            </Toaster.Root>
        </div>
    );
}
