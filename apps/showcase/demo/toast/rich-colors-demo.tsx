'use client';

import { toast } from '@primereact/headless/toast';
import { ToastRegionInstance, ToastType } from '@primereact/types/shared/toast';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

function RichColorsToast() {
    return (
        <Toast richColors group="rich-colors">
            <Toast.Portal>
                <Toast.Region>
                    {({ toast }: ToastRegionInstance) =>
                        toast?.toasts.map((toastItem: ToastType) => (
                            <Toast.Item key={toastItem.id} toast={toastItem}>
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
                                    severity={toastItem.variant ?? 'secondary'}
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

function RichColorsDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
                variant="outlined"
                severity="info"
                onClick={() => toast.info({ title: 'Info', description: 'This is an info toast', group: 'rich-colors' })}
            >
                Info
            </Button>
            <Button
                variant="outlined"
                severity="success"
                onClick={() =>
                    toast.success({
                        title: 'Success',
                        description: 'This is a success toast',
                        group: 'rich-colors'
                    })
                }
            >
                Success
            </Button>
            <Button
                variant="outlined"
                severity="danger"
                onClick={() => toast.danger({ title: 'Error', description: 'This is an error toast', group: 'rich-colors' })}
            >
                Danger
            </Button>
            <Button
                variant="outlined"
                severity="warn"
                onClick={() => toast.warn({ title: 'Warning', description: 'This is a warning toast', group: 'rich-colors' })}
            >
                Warn
            </Button>
            <RichColorsToast />
        </div>
    );
}

export default RichColorsDemo;
