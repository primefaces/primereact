'use client';
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

function PositionToast({
    position = 'bottom-right'
}: {
    position: 'top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center';
}) {
    return (
        <Toaster.Root
            position={position}
            group={position}
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
    );
}

function PositionDemo() {
    const createToast = (group: string) => {
        toast({
            title: 'Successfully completed',
            description: 'The task was completed successfully. You can now view the details.',
            group
        });
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
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
