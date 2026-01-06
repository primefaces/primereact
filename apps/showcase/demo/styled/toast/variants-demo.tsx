'use client';

import { toast } from '@primereact/headless/toast';
import { ToastRegionInstance, ToastType } from '@primereact/types/shared/toast';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

function VariantsToast() {
    return (
        <Toast.Root group="variants">
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
                    <h1 className="font-medium text-surface-900 dark:text-surface-0 leading-6">
                        Purchase complete!{' '}
                        <a href="/orders/123" className="!underline hover:opacity-75">
                            View receipt
                        </a>
                    </h1>
                    <p className="text-surface-500 !leading- mt-2">
                        Your order is being processed.{' '}
                        <a href="/account/orders" className="!underline hover:opacity-75">
                            Track all orders
                        </a>{' '}
                        or{' '}
                        <a href="/support/returns" className="!underline hover:opacity-75">
                            learn about returns
                        </a>
                    </p>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={() => toast.dismiss(id)}
                        className="font-medium px-3 py-1.5 rounded-sm bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/75 dark:hover:bg-indigo-950 text-indigo-500 dark:text-indigo-400"
                    >
                        Action
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
            title: 'Loading',
            description: 'This is a loading toast',
            group: 'variants'
        });

        setTimeout(() => {
            toast.success({
                id,
                title: 'Uploaded',
                description: 'This is a uploaded toast',
                group: 'variants'
            });
        }, 2000);
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            <Button.Root
                onClick={() => {
                    toast({
                        title: 'Default',
                        description: 'This is a default toast',
                        group: 'variants'
                    });
                }}
                variant="outlined"
            >
                Default
            </Button.Root>
            <Button.Root
                onClick={() => {
                    toast.info({
                        title: 'Info',
                        description: 'This is an info toast',
                        group: 'variants'
                    });
                }}
                variant="outlined"
                severity="info"
            >
                Info
            </Button.Root>
            <Button.Root
                onClick={() =>
                    toast.success({
                        title: 'Success',
                        description: 'This is a success toast',
                        group: 'variants'
                    })
                }
                variant="outlined"
                severity="success"
            >
                Success
            </Button.Root>
            <Button.Root
                onClick={() => toast.danger({ title: 'Danger', description: 'This is a danger toast', group: 'variants' })}
                variant="outlined"
                severity="danger"
            >
                Danger
            </Button.Root>
            <Button.Root
                onClick={() => toast.warn({ title: 'Warn', description: 'This is a warning toast', group: 'variants' })}
                variant="outlined"
                severity="warn"
            >
                Warn
            </Button.Root>
            <Button.Root onClick={handleLoadingToast} variant="outlined">
                Loading
            </Button.Root>
            <Button.Root onClick={handleToastPromise} variant="outlined">
                Promise
            </Button.Root>
            <Button.Root onClick={handleCustomToast} variant="outlined">
                Custom
            </Button.Root>
            <VariantsToast />
        </div>
    );
}

export default VariantsDemo;
