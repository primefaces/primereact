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

function VariantsToast() {
    return (
        <Toaster.Root
            group="variants"
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

function VariantsDemo() {
    function handleToastPromise() {
        function fakeApiCall(): Promise<string> {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const random = Math.random();

                    if (random < 0.5) {
                        resolve('Success!');
                    } else {
                        reject(new Error('Something went wrong'));
                    }
                }, 2000); // 2 saniye beklet
            });
        }

        toast.promise(fakeApiCall(), {
            loading: {
                title: 'Please wait...',
                description: 'Your request is being processed. This may take a moment.',
                group: 'variants'
            },
            success: (result) => ({
                title: 'Success!',
                description: `${result}. Everything went smoothly. Thank you for your patience.`,
                group: 'variants'
            }),
            error: (error: unknown) => ({
                title: 'Oops, something went wrong',
                description: `Error: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again or contact support if the problem persists.`,
                group: 'variants'
            })
        });
    }

    function handleCustomToast() {
        const id = toast.custom(
            <div className="space-y-2">
                <div>
                    <h1 className="text-sm font-medium text-surface-900 dark:text-surface-0 leading-6">
                        Purchase complete!{' '}
                        <a href="/orders/123" className="underline! hover:opacity-75">
                            View receipt
                        </a>
                    </h1>
                    <p className="text-surface-500 mt-1 text-sm">
                        Your order is being processed. Track all orders or{' '}
                        <a href="/support/returns" className="underline! hover:opacity-75">
                            learn about returns
                        </a>
                    </p>
                </div>
                <div className="flex items-center mt-2 gap-2">
                    <button
                        onClick={() => toast.dismiss(id)}
                        className="font-medium px-2 py-1.5 text-xs rounded-md border border-surface-200 dark:border-surface-700 hover:bg-surface-50 active:bg-surface-100 dark:hover:bg-surface-800 dark:active:bg-surface-700 text-surface-500 dark:text-surface-400"
                    >
                        Dismiss
                    </button>
                    <button
                        onClick={() => toast.dismiss(id)}
                        className="font-medium px-2 py-1.5 text-xs rounded-md border border-indigo-500/25 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/75 dark:hover:bg-indigo-950 text-indigo-500 dark:text-indigo-400"
                    >
                        Track all orders
                    </button>
                </div>
            </div>,
            {
                group: 'variants'
            }
        );
    }

    const handleLoadingToast = () => {
        const id = toast.loading({
            title: 'Loading...',
            description: 'Please wait while we process your request.',
            group: 'variants'
        });

        setTimeout(() => {
            toast.success({
                id,
                title: 'Completed',
                description: 'Your request has been processed successfully.',
                group: 'variants'
            });
        }, 2000);
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
                onClick={() => {
                    toast({
                        title: 'Update available',
                        description: 'A new version is ready to use.',
                        group: 'variants'
                    });
                }}
                variant="outlined"
            >
                Default
            </Button>

            <Button
                onClick={() => {
                    toast.info({
                        title: 'Heads up',
                        description: 'There’s something you might want to check.',
                        group: 'variants'
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
                        group: 'variants'
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
                        group: 'variants'
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
                        group: 'variants'
                    })
                }
                variant="outlined"
                severity="warn"
            >
                Warn
            </Button>
            <Button onClick={handleLoadingToast} variant="outlined">
                Loading
            </Button>
            <Button onClick={handleToastPromise} variant="outlined">
                Promise
            </Button>
            <Button onClick={handleCustomToast} variant="outlined">
                Custom
            </Button>
            <VariantsToast />
        </div>
    );
}

export default VariantsDemo;
