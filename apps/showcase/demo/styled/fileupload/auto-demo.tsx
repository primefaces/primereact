'use client';
import { Plus } from '@primeicons/react/plus';
import { Times } from '@primeicons/react/times';
import { toast } from '@primereact/headless/toaster';
import { FileUploadRootInstance } from '@primereact/types/shared/fileupload';
import { ToasterRegionInstance, ToastType } from '@primereact/types/shared/toaster';
import { Button } from '@primereact/ui/button';
import { FileUpload } from '@primereact/ui/fileupload';
import { Message } from '@primereact/ui/message';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';

export default function AutoDemo() {
    const onUpload = () => {
        toast({
            title: 'Success',
            description: 'File Uploaded',
            group: 'auto-demo'
        });
    };

    return (
        <div className="flex justify-center">
            <FileUpload.Root name="demo[]" url="/api/upload" auto accept="image/*" maxFileSize={1000000} onUpload={onUpload}>
                {(instance: FileUploadRootInstance) => {
                    return (
                        <>
                            {instance.state.messages &&
                                instance.state.messages.length > 0 &&
                                instance.state.messages.map((msg, i) => (
                                    <Message.Root key={i} severity="error" className="mb-2">
                                        <Message.Content>
                                            <Message.Text>{msg}</Message.Text>
                                        </Message.Content>
                                    </Message.Root>
                                ))}

                            <div className="flex flex-wrap items-center gap-3">
                                <Button onClick={instance.choose}>
                                    <Plus />
                                    Browse
                                </Button>
                            </div>
                        </>
                    );
                }}
            </FileUpload.Root>

            <Toaster.Root position="top-right" group="auto-demo">
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
