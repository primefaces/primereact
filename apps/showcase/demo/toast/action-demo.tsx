import { ToastRegionInstance, ToastType } from '@primereact/types/shared/toast';
import { Button } from 'primereact/button';
import { toast, Toast } from 'primereact/toast';

function ActionToast() {
    return (
        <Toast group="action">
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
        </Toast>
    );
}

function ActionDemo() {
    const handleCreateToast = () => {
        const id = toast({
            title: 'Changes saved',
            description: 'Are you sure you would like to remove this user? This action cannot be undone.',
            group: 'action',
            action: {
                children: 'Undo',
                onClick: () => {
                    toast.remove(id);
                    toast({
                        title: 'Changes saved',
                        description: 'Are you sure you would like to remove this user? This action cannot be undone.',
                        group: 'action'
                    });
                }
            }
        });
    };

    return (
        <div className="card flex flex-wrap items-center justify-center gap-4">
            <Button onClick={handleCreateToast} variant="outlined">
                Create toast with action
            </Button>
            <ActionToast />
        </div>
    );
}

export default ActionDemo;
