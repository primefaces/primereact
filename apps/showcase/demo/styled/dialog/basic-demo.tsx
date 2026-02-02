'use client';
import { TimesIcon } from '@primereact/icons/times';
import { DialogContentInstance } from '@primereact/types/shared/dialog';
import { Avatar } from '@primereact/ui/avatar';
import { Button } from '@primereact/ui/button';
import { Dialog } from '@primereact/ui/dialog';
import { FocusTrap } from '@primereact/ui/focustrap';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function BasicDemo() {
    return (
        <div className="flex justify-center">
            <Dialog.Root modal>
                <Dialog.Trigger>Edit Profile</Dialog.Trigger>
                <Dialog.Portal style={{ width: '28rem' }}>
                    <FocusTrap>
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
                                        <div className="flex items-center gap-4">
                                            <Avatar.Root shape="circle" size="xlarge">
                                                <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                                                <Avatar.Fallback>AM</Avatar.Fallback>
                                            </Avatar.Root>
                                            <div>
                                                <p className="font-semibold text-lg mt-0 mb-1">Amanda Miller</p>
                                                <p className="text-surface-500 dark:text-surface-400 mt-0 mb-0 text-sm">amanda@example.com</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="name" className="text-sm font-semibold">
                                                Name
                                            </Label>
                                            <InputText id="name" defaultValue="Amanda Miller" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="username" className="text-sm font-semibold">
                                                Username
                                            </Label>
                                            <InputText id="username" defaultValue="@amandamiller" />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <Label htmlFor="email" className="text-sm font-semibold">
                                                Email
                                            </Label>
                                            <InputText id="email" defaultValue="amanda@example.com" />
                                        </div>
                                        <div className="flex justify-end gap-2">
                                            <Button severity="secondary" onClick={dialog?.close}>
                                                Cancel
                                            </Button>
                                            <Button onClick={dialog?.close}>Save Changes</Button>
                                        </div>
                                    </div>
                                );
                            }}
                        </Dialog.Content>
                    </FocusTrap>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}
