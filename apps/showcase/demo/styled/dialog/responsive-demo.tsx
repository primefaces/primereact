'use client';
import { TimesIcon } from '@primereact/icons/times';
import { DialogContentInstance } from '@primereact/types/shared/dialog';
import { Button } from '@primereact/ui/button';
import { Dialog } from '@primereact/ui/dialog';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';

export default function ResponsiveDemo() {
    return (
        <div className="flex justify-center">
            <Dialog.Root modal>
                <Dialog.Trigger>New Event</Dialog.Trigger>
                <Dialog.Portal className="w-[90vw] md:w-[75vw] lg:w-[50vw]">
                    <Dialog.Header>
                        <Dialog.Title>Create Event</Dialog.Title>
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
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="eventName" className="text-sm font-semibold">
                                            Event Name
                                        </Label>
                                        <InputText id="eventName" placeholder="e.g. Team Standup" />
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4">
                                        <div className="flex flex-col gap-1 flex-1">
                                            <Label htmlFor="organizer" className="text-sm font-semibold">
                                                Organizer
                                            </Label>
                                            <InputText id="organizer" placeholder="Name" />
                                        </div>
                                        <div className="flex flex-col gap-1 flex-1">
                                            <Label htmlFor="email" className="text-sm font-semibold">
                                                Email
                                            </Label>
                                            <InputText id="email" placeholder="organizer@example.com" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="location" className="text-sm font-semibold">
                                            Location
                                        </Label>
                                        <InputText id="location" placeholder="Add a location or video link" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <Label htmlFor="description" className="text-sm font-semibold">
                                            Description
                                        </Label>
                                        <InputText id="description" placeholder="Event details" />
                                    </div>
                                    <div className="flex flex-col sm:flex-row justify-end gap-2 mt-2">
                                        <Button severity="secondary" onClick={dialog?.close}>
                                            Cancel
                                        </Button>
                                        <Button onClick={dialog?.close}>Create Event</Button>
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
