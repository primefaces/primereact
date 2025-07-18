import { DialogContentInstance } from '@primereact/types/shared/dialog';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';

export default function WithoutModalDemo() {
    return (
        <div className="card flex justify-center">
            <Dialog>
                <Dialog.Trigger>Show</Dialog.Trigger>
                <Dialog.Portal style={{ width: '25rem' }}>
                    <Dialog.Header>
                        <Dialog.Title>Edit Profile</Dialog.Title>
                        <Dialog.HeaderActions>
                            <Dialog.Close />
                        </Dialog.HeaderActions>
                    </Dialog.Header>
                    <Dialog.Content>
                        {(instance: DialogContentInstance) => {
                            const { dialog } = instance;

                            return (
                                <>
                                    <span className="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
                                    <div className="flex items-center gap-4 mb-4">
                                        <Label htmlFor="username" className="font-semibold w-24">
                                            Username
                                        </Label>
                                        <InputText id="username" className="flex-auto" autoComplete="off" />
                                    </div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <Label htmlFor="email" className="font-semibold w-24">
                                            Email
                                        </Label>
                                        <InputText id="email" className="flex-auto" autoComplete="off" />
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <Button type="button" severity="secondary" onClick={dialog?.close}>
                                            Cancel
                                        </Button>
                                        <Button type="button" onClick={dialog?.close}>
                                            Save
                                        </Button>
                                    </div>
                                </>
                            );
                        }}
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog>
        </div>
    );
}
