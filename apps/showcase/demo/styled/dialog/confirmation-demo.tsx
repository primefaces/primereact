'use client';
import { TimesIcon } from '@primereact/icons/times';
import { DialogContentInstance } from '@primereact/types/shared/dialog';
import { Button } from '@primereact/ui/button';
import { Dialog } from '@primereact/ui/dialog';

export default function ConfirmationDemo() {
    return (
        <div className="flex justify-center">
            <Dialog.Root modal>
                <Dialog.Trigger severity="danger">Delete Account</Dialog.Trigger>
                <Dialog.Portal style={{ width: '26rem' }}>
                    <Dialog.Header>
                        <Dialog.Title>Confirm Deletion</Dialog.Title>
                        <Dialog.HeaderActions>
                            <Dialog.Close>
                                <TimesIcon />
                            </Dialog.Close>
                        </Dialog.HeaderActions>
                    </Dialog.Header>
                    <Dialog.Content>
                        {(instance: DialogContentInstance) => {
                            const { dialog } = instance;

                            return (
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start gap-3">
                                        <i className="pi pi-exclamation-triangle text-orange-500 text-2xl mt-0.5" />
                                        <div>
                                            <p className="font-semibold mt-0 mb-2">Are you sure you want to delete your account?</p>
                                            <p className="text-surface-500 dark:text-surface-400 text-sm mt-0 mb-0">
                                                This action cannot be undone. All of your data, including projects, files, and settings will be
                                                permanently removed.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <Button severity="secondary" onClick={dialog?.close}>
                                            Cancel
                                        </Button>
                                        <Button severity="danger" onClick={dialog?.close}>
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            );
                        }}
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}
