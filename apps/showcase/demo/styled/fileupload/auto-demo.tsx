'use client';

import { toast } from '@primereact/headless/toast';
import { FileUploadInstance } from '@primereact/types/shared/fileupload';
import { ToastRegionInstance, ToastType } from '@primereact/types/shared/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Message } from 'primereact/message';
import { Toast } from 'primereact/toast';

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
                {(instance: FileUploadInstance) => {
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
                                <Button.Root onClick={instance.choose}>
                                    <i className="pi pi-plus" />
                                    Browse
                                </Button.Root>
                            </div>
                        </>
                    );
                }}
            </FileUpload.Root>

            <Toast.Root position="top-right" group="auto-demo">
                <Toast.Portal>
                    <Toast.Region>
                        {({ toast }: ToastRegionInstance) =>
                            toast?.toasts.map((toast: ToastType) => (
                                <Toast.Item key={toast.id} data={toast}>
                                    <div className="flex items-start gap-2">
                                        <div className="flex-1">
                                            <Toast.Title className="mb-1 -mt-0.5" />
                                            <Toast.Description />
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
                                        <i className="pi pi-times"></i>
                                    </Toast.Close>
                                </Toast.Item>
                            ))
                        }
                    </Toast.Region>
                </Toast.Portal>
            </Toast.Root>
        </div>
    );
}
