'use client';
import { TimesIcon } from '@primereact/icons/times';
import { DialogContentInstance, DialogRootChangeEvent, DialogRootProps } from '@primereact/types/shared/dialog';
import { Button } from '@primereact/ui/button';
import { Dialog } from '@primereact/ui/dialog';
import { FocusTrap } from '@primereact/ui/focustrap';
import { InputText } from '@primereact/ui/inputtext';
import { Label } from '@primereact/ui/label';
import * as React from 'react';

export default function PositionDemo() {
    const [open, setOpen] = React.useState<boolean>(false);
    const [position, setPosition] = React.useState<DialogRootProps['position']>('center');

    const openPosition = (position: DialogRootProps['position']) => {
        setOpen(true);
        setPosition(position);
    };

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
                <Button onClick={() => openPosition('left')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Left
                    <i className="pi pi-arrow-right" />
                </Button>
                <Button onClick={() => openPosition('right')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Right
                    <i className="pi pi-arrow-left" />
                </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
                <Button onClick={() => openPosition('topleft')} severity="secondary" style={{ minWidth: '10rem' }}>
                    TopLeft
                    <i className="pi pi-arrow-down-right" />
                </Button>
                <Button onClick={() => openPosition('top')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Top
                    <i className="pi pi-arrow-down" />
                </Button>
                <Button onClick={() => openPosition('topright')} severity="secondary" style={{ minWidth: '10rem' }}>
                    TopRight
                    <i className="pi pi-arrow-down-left" />
                </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                <Button onClick={() => openPosition('bottomleft')} severity="secondary" style={{ minWidth: '10rem' }}>
                    BottomLeft
                    <i className="pi pi-arrow-up-right" />
                </Button>
                <Button onClick={() => openPosition('bottom')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Bottom
                    <i className="pi pi-arrow-up" />
                </Button>
                <Button onClick={() => openPosition('bottomright')} severity="secondary" style={{ minWidth: '10rem' }}>
                    BottomRight
                    <i className="pi pi-arrow-up-left" />
                </Button>
            </div>
            <Dialog.Root
                open={open}
                onOpenChange={(e: DialogRootChangeEvent) => setOpen(e.value as boolean)}
                modal
                position={position}
                draggable={false}
            >
                <Dialog.Portal style={{ width: '25rem' }}>
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
                    </FocusTrap>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}
