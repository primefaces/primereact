'use client';

import { toast } from '@primereact/headless/toast';
import { ToastRegionInstance, ToastType } from '@primereact/types/shared/toast';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

function ActionToast() {
    return (
        <Toast.Root group="action">
            <Toast.Portal>
                <Toast.Region>
                    {({ toast }: ToastRegionInstance) =>
                        toast?.toasts.map((toast: ToastType) => (
                            <Toast.Item key={toast.id} toast={toast}>
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
        </Toast.Root>
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
                    toast.dismiss(id);
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
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button.Root onClick={handleCreateToast} variant="outlined">
                Create toast with action
            </Button.Root>
            <ActionToast />
        </div>
    );
}

export default ActionDemo;
