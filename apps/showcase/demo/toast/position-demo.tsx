import { ToastRegionInstance, ToastType } from '@primereact/types/shared/toast';
import { Button } from 'primereact/button';
import { toast, Toast } from 'primereact/toast';

function PositionToast({ position = 'bottom-right' }: { position: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center' }) {
    return (
        <Toast position={position} group={position}>
            <Toast.Portal>
                <Toast.Region>
                    {({ toast }: ToastRegionInstance) =>
                        toast?.toasts.map((toast: ToastType) => (
                            <Toast.Item key={toast.id} data={toast}>
                                <div className="flex items-start gap-2">
                                    <Toast.Icon />
                                    <div className="flex-1">
                                        <Toast.Title className="mb-1 -mt-0.5" />
                                        <Toast.Description />
                                        <Toast.Action as={Button} size="small" className="mt-4" />
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
    );
}

function PositionDemo() {
    const createToast = (group: string) => {
        toast({
            title: 'Changes saved',
            description: 'Are you sure you would like to remove this user? This action cannot be undone.',
            group
        });
    };

    return (
        <div className="card flex flex-wrap items-center justify-center gap-4">
            <Button onClick={() => createToast('top-left')} variant="outlined">
                Top Left
            </Button>
            <Button onClick={() => createToast('top-center')} variant="outlined">
                Top Center
            </Button>
            <Button onClick={() => createToast('top-right')} variant="outlined">
                Top Right
            </Button>
            <Button onClick={() => createToast('bottom-left')} variant="outlined">
                Bottom Left
            </Button>
            <Button onClick={() => createToast('bottom-center')} variant="outlined">
                Bottom Center
            </Button>
            <Button onClick={() => createToast('bottom-right')} variant="outlined">
                Bottom Right
            </Button>

            <PositionToast position="top-left" />
            <PositionToast position="top-right" />
            <PositionToast position="top-center" />
            <PositionToast position="bottom-left" />
            <PositionToast position="bottom-right" />
            <PositionToast position="bottom-center" />
        </div>
    );
}

export default PositionDemo;
