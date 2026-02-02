'use client';
import { TimesIcon } from '@primereact/icons/times';
import { DialogContentInstance } from '@primereact/types/shared/dialog';
import { Button } from '@primereact/ui/button';
import { Dialog } from '@primereact/ui/dialog';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function WithoutModalDemo() {
    return (
        <div className="flex justify-center">
            <Dialog.Root>
                <Dialog.Trigger>Show</Dialog.Trigger>
                <Dialog.Portal style={{ width: '25rem' }}>
                    <Dialog.Header>
                        <Dialog.Title>Edit Profile</Dialog.Title>
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
                                <div className="flex flex-col gap-6">
                                    <span className="text-surface-500 dark:text-surface-400">Update your information.</span>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="username" className="font-semibold">
                                            Username
                                        </Label>
                                        <InputText id="username" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="email" className="font-semibold">
                                            Email
                                        </Label>
                                        <InputText id="email" />
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <Button type="button" severity="secondary" onClick={dialog?.close}>
                                            Cancel
                                        </Button>
                                        <Button type="button" onClick={dialog?.close}>
                                            Save
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
