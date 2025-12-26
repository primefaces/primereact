'use client';

import { DialogChangeEvent, DialogContentInstance, DialogProps } from '@primereact/types/shared/dialog';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Label } from 'primereact/label';
import * as React from 'react';

export default function PositionDemo() {
    const [open, setOpen] = React.useState<boolean>(false);
    const [position, setPosition] = React.useState<DialogProps['position']>('center');

    const openPosition = (position: DialogProps['position']) => {
        setOpen(true);
        setPosition(position);
    };

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
                <Button.Root onClick={() => openPosition('left')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Left
                    <i className="pi pi-arrow-right" />
                </Button.Root>
                <Button.Root onClick={() => openPosition('right')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Right
                    <i className="pi pi-arrow-left" />
                </Button.Root>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
                <Button.Root onClick={() => openPosition('topleft')} severity="secondary" style={{ minWidth: '10rem' }}>
                    TopLeft
                    <i className="pi pi-arrow-down-right" />
                </Button.Root>
                <Button.Root onClick={() => openPosition('top')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Top
                    <i className="pi pi-arrow-down" />
                </Button.Root>
                <Button.Root onClick={() => openPosition('topright')} severity="secondary" style={{ minWidth: '10rem' }}>
                    TopRight
                    <i className="pi pi-arrow-down-left" />
                </Button.Root>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                <Button.Root onClick={() => openPosition('bottomleft')} severity="secondary" style={{ minWidth: '10rem' }}>
                    BottomLeft
                    <i className="pi pi-arrow-up-right" />
                </Button.Root>
                <Button.Root onClick={() => openPosition('bottom')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Bottom
                    <i className="pi pi-arrow-up" />
                </Button.Root>
                <Button.Root onClick={() => openPosition('bottomright')} severity="secondary" style={{ minWidth: '10rem' }}>
                    BottomRight
                    <i className="pi pi-arrow-up-left" />
                </Button.Root>
            </div>
            <Dialog.Root open={open} onOpenChange={(e: DialogChangeEvent) => setOpen(e.value as boolean)} modal position={position} draggable={false}>
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
                                        <Label.Root htmlFor="username" className="font-semibold w-24">
                                            Username
                                        </Label.Root>
                                        <InputText id="username" className="flex-auto" autoComplete="off" />
                                    </div>
                                    <div className="flex items-center gap-4 mb-8">
                                        <Label.Root htmlFor="email" className="font-semibold w-24">
                                            Email
                                        </Label.Root>
                                        <InputText id="email" className="flex-auto" autoComplete="off" />
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <Button.Root type="button" severity="secondary" onClick={dialog?.close}>
                                            Cancel
                                        </Button.Root>
                                        <Button.Root type="button" onClick={dialog?.close}>
                                            Save
                                        </Button.Root>
                                    </div>
                                </>
                            );
                        }}
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}
