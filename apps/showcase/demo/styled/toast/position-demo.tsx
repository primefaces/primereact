'use client';

import { toast } from '@primereact/headless/toast';
import { ToastRegionInstance, ToastType } from '@primereact/types/shared/toast';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

function PositionToast({
    position = 'bottom-right'
}: {
    position: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
}) {
    return (
        <Toast.Root position={position} group={position}>
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

function PositionDemo() {
    const createToast = (group: string) => {
        toast({
            title: 'Changes saved',
            description: 'Are you sure you would like to remove this user? This action cannot be undone.',
            group
        });
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button.Root onClick={() => createToast('top-left')} variant="outlined">
                Top Left
            </Button.Root>
            <Button.Root onClick={() => createToast('top-center')} variant="outlined">
                Top Center
            </Button.Root>
            <Button.Root onClick={() => createToast('top-right')} variant="outlined">
                Top Right
            </Button.Root>
            <Button.Root onClick={() => createToast('bottom-left')} variant="outlined">
                Bottom Left
            </Button.Root>
            <Button.Root onClick={() => createToast('bottom-center')} variant="outlined">
                Bottom Center
            </Button.Root>
            <Button.Root onClick={() => createToast('bottom-right')} variant="outlined">
                Bottom Right
            </Button.Root>

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
