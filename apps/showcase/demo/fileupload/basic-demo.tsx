import { FileUploadInstance } from '@primereact/types/shared/fileupload';
import { ToastRegionInstance, ToastType } from '@primereact/types/shared/toast';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Message } from 'primereact/message';
import { Toast, toast } from 'primereact/toast';

const onUpload = () => {
    toast({
        title: 'Success',
        description: 'File Uploaded',
        group: 'basic-demo'
    });
};

export default function BasicDemo() {
    return (
        <div className="card">
            <FileUpload name="demo[]" url="/api/upload" accept="image/*" multiple maxFileSize={1000000} onUpload={onUpload}>
                {(instance: FileUploadInstance) => {
                    return (
                        <>
                            {instance.state.messages &&
                                instance.state.messages.length > 0 &&
                                instance.state.messages.map((msg, i) => (
                                    <Message key={i} severity="error" className="mb-2">
                                        <Message.Content>
                                            <Message.Text>{msg}</Message.Text>
                                        </Message.Content>
                                    </Message>
                                ))}

                            <div className="flex justify-between">
                                <div className="flex flex-wrap items-center gap-3">
                                    <Button onClick={instance.choose}>
                                        <i className="pi pi-plus" />
                                        Choose
                                    </Button>
                                    <span>{instance.hasFiles ? instance.state.files.map((file) => file.name).join(', ') : 'No file chosen'}</span>
                                </div>
                                <Button severity="secondary" onClick={instance.upload}>
                                    Upload
                                </Button>
                            </div>
                        </>
                    );
                }}
            </FileUpload>

            <Toast position="top-right" group="basic-demo">
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
                                    <Toast.Close as={Button} iconOnly severity={'secondary'} variant="text" size="small" className={'absolute top-2 right-2'}>
                                        <i className="pi pi-times"></i>
                                    </Toast.Close>
                                </Toast.Item>
                            ))
                        }
                    </Toast.Region>
                </Toast.Portal>
            </Toast>
        </div>
    );
}
