'use client';
import { Camera } from '@primeicons/react/camera';
import { Check } from '@primeicons/react/check';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Spinner } from '@primeicons/react/spinner';
import { Times } from '@primeicons/react/times';
import { toast } from '@primereact/headless/toaster';
import { ToasterRegionInstance, ToastType } from '@primereact/types/shared/toaster';
import { Button } from '@primereact/ui/button';
import { Toast } from '@primereact/ui/toast';
import { Toaster } from '@primereact/ui/toaster';

function ActionToast() {
    return (
        <Toaster.Root
            group="action"
            icons={{ success: <Check />, danger: <Times />, warn: <ExclamationTriangle />, info: <InfoCircle />, loading: <Spinner /> }}
        >
            <Toaster.Portal>
                <Toaster.Region>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((toast: ToastType) => (
                            <Toast.Root key={toast.id} toast={toast}>
                                <div className="grid grid-cols-[auto_1fr] items-start gap-3">
                                    <Toast.Icon className="[&>svg]:size-3.5 mt-1" />
                                    <div>
                                        <Toast.Title />
                                        <Toast.Description className="mt-1" />
                                        <Toast.Action as={Button} size="small" className="mt-3" />
                                    </div>
                                </div>
                            </Toast.Root>
                        ))
                    }
                </Toaster.Region>
            </Toaster.Portal>
        </Toaster.Root>
    );
}

function ActionDemo() {
    const handleCreateToast = () => {
        const id = toast({
            title: 'Allow camera access',
            description: 'We need access to your camera to scan QR codes.',
            icon: <Camera />,
            group: 'action',
            action: {
                children: 'Enable camera',
                onClick: () => {
                    toast.dismiss(id);
                    toast.success({
                        title: 'Camera access granted',
                        description: 'You can now scan QR codes.',
                        group: 'action'
                    });
                }
            }
        });
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button onClick={handleCreateToast} variant="outlined">
                Create toast with action
            </Button>
            <ActionToast />
        </div>
    );
}

export default ActionDemo;
