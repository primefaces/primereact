'use client';
import { ArrowDown, ArrowDownLeft, ArrowDownRight, ArrowUp, ArrowUpLeft, ArrowUpRight } from '@primeicons/react';
import { ArrowLeft } from '@primeicons/react/arrow-left';
import { ArrowRight } from '@primeicons/react/arrow-right';
import { ExclamationTriangle } from '@primeicons/react/exclamation-triangle';
import { Times } from '@primeicons/react/times';
import { ConfirmDialogRootChangeEvent, ConfirmDialogRootProps } from '@primereact/types/shared/confirmdialog';
import { Button } from '@primereact/ui/button';
import { ConfirmDialog } from '@primereact/ui/confirmdialog';
import * as React from 'react';

export default function PositionDemo() {
    const [open, setOpen] = React.useState<boolean>(false);
    const [position, setPosition] = React.useState<ConfirmDialogRootProps['position']>('center');

    const openPosition = (position: ConfirmDialogRootProps['position']) => {
        setOpen(true);
        setPosition(position);
    };

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
                <Button onClick={() => openPosition('left')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Left
                    <ArrowRight />
                </Button>
                <Button onClick={() => openPosition('right')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Right
                    <ArrowLeft />
                </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-2">
                <Button onClick={() => openPosition('topleft')} severity="secondary" style={{ minWidth: '10rem' }}>
                    TopLeft
                    <ArrowDownRight />
                </Button>
                <Button onClick={() => openPosition('top')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Top
                    <ArrowDown />
                </Button>
                <Button onClick={() => openPosition('topright')} severity="secondary" style={{ minWidth: '10rem' }}>
                    TopRight
                    <ArrowDownLeft />
                </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                <Button onClick={() => openPosition('bottomleft')} severity="secondary" style={{ minWidth: '10rem' }}>
                    BottomLeft
                    <ArrowUpRight />
                </Button>
                <Button onClick={() => openPosition('bottom')} severity="secondary" style={{ minWidth: '10rem' }}>
                    Bottom
                    <ArrowUp />
                </Button>
                <Button onClick={() => openPosition('bottomright')} severity="secondary" style={{ minWidth: '10rem' }}>
                    BottomRight
                    <ArrowUpLeft />
                </Button>
            </div>
            <ConfirmDialog.Root open={open} onOpenChange={(e: ConfirmDialogRootChangeEvent) => setOpen(e.value as boolean)} position={position}>
                <ConfirmDialog.Portal>
                    <ConfirmDialog.Header>
                        <ConfirmDialog.Title>Edit Profile</ConfirmDialog.Title>
                        <ConfirmDialog.Close>
                            <Times />
                        </ConfirmDialog.Close>
                    </ConfirmDialog.Header>
                    <ConfirmDialog.Content>
                        <ExclamationTriangle className="text-2xl" />
                        <ConfirmDialog.Message>Are you sure you want to proceed?</ConfirmDialog.Message>
                    </ConfirmDialog.Content>
                    <ConfirmDialog.Footer>
                        <ConfirmDialog.Cancel>Cancel</ConfirmDialog.Cancel>
                        <ConfirmDialog.Action>Save</ConfirmDialog.Action>
                    </ConfirmDialog.Footer>
                </ConfirmDialog.Portal>
            </ConfirmDialog.Root>
        </div>
    );
}
