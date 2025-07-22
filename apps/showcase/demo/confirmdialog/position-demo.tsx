import { ConfirmDialogChangeEvent, ConfirmDialogProps } from '@primereact/types/shared/confirmdialog';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';
import * as React from 'react';

export default function PositionDemo() {
    const [open, setOpen] = React.useState<boolean>(false);
    const [position, setPosition] = React.useState<ConfirmDialogProps['position']>('center');

    const openPosition = (position: ConfirmDialogProps['position']) => {
        setOpen(true);
        setPosition(position);
    };

    return (
        <div className="card">
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
            <ConfirmDialog open={open} onOpenChange={(e: ConfirmDialogChangeEvent) => setOpen(e.value as boolean)} position={position}>
                <ConfirmDialog.Portal>
                    <ConfirmDialog.Header>
                        <ConfirmDialog.Title>Edit Profile</ConfirmDialog.Title>
                        <ConfirmDialog.Close />
                    </ConfirmDialog.Header>
                    <ConfirmDialog.Content>
                        <ConfirmDialog.Icon className="pi pi-exclamation-triangle" />
                        <ConfirmDialog.Message>Are you sure you want to proceed?</ConfirmDialog.Message>
                    </ConfirmDialog.Content>
                    <ConfirmDialog.Footer>
                        <ConfirmDialog.Cancel>Cancel</ConfirmDialog.Cancel>
                        <ConfirmDialog.Action>Save</ConfirmDialog.Action>
                    </ConfirmDialog.Footer>
                </ConfirmDialog.Portal>
            </ConfirmDialog>
        </div>
    );
}
