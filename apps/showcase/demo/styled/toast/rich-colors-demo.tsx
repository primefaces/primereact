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

function RichColorsToast() {
    return (
        <Toaster.Root
            richColors
            group="rich-colors"
            icons={{ success: <Check />, danger: <Times />, warn: <ExclamationTriangle />, info: <InfoCircle />, loading: <Spinner /> }}
        >
            <Toaster.Portal>
                <Toaster.Region>
                    {({ toaster }: ToasterRegionInstance) =>
                        toaster?.toasts.map((toastItem: ToastType) => (
                            <Toast.Root key={toastItem.id} toast={toastItem}>
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
                                    severity={toastItem.variant ?? 'secondary'}
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

function RichColorsDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
                onClick={() => {
                    toast.info({
                        title: 'Heads up',
                        description: 'There’s something you might want to check.',
                        group: 'rich-colors'
                    });
                }}
                variant="outlined"
                severity="info"
            >
                Info
            </Button>

            <Button
                onClick={() =>
                    toast.success({
                        title: 'Saved successfully',
                        description: 'Your changes have been saved.',
                        group: 'rich-colors'
                    })
                }
                variant="outlined"
                severity="success"
            >
                Success
            </Button>

            <Button
                onClick={() =>
                    toast.danger({
                        title: 'Something went wrong',
                        description: 'We couldn’t complete the action. Please try again.',
                        group: 'rich-colors'
                    })
                }
                variant="outlined"
                severity="danger"
            >
                Danger
            </Button>

            <Button
                onClick={() =>
                    toast.warn({
                        title: 'Check this',
                        description: 'Some fields may need your attention.',
                        group: 'rich-colors'
                    })
                }
                variant="outlined"
                severity="warn"
            >
                Warn
            </Button>
            <RichColorsToast />
        </div>
    );
}

export default RichColorsDemo;
