import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { confirmDialog } from '@/components/lib/confirmdialog/ConfirmDialog';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef } from 'react';

export function PositionDoc(props) {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm = (position) => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            position,
            accept,
            reject
        });
    };

    const code = {
        basic: `
<Toast ref={toast} />
<ConfirmDialog />
<div className="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button label="Left" icon="pi pi-arrow-right" onClick={() => confirm('left')} className="p-button-help" style={{ minWidth: '10rem' }} />
    <Button label="Right" icon="pi pi-arrow-left" onClick={() => confirm('right')} className="p-button-help" style={{ minWidth: '10rem' }} />
</div>
<div className="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => confirm('top-left')} className="p-button-warning" style={{ minWidth: '10rem' }} />
    <Button label="Top" icon="pi pi-arrow-down" onClick={() => confirm('top')} className="p-button-warning" style={{ minWidth: '10rem' }} />
    <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => confirm('top-right')} className="p-button-warning" style={{ minWidth: '10rem' }} />
</div>
<div className="flex flex-wrap justify-content-center gap-2">
    <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => confirm('bottom-left')} className="p-button-success" style={{ minWidth: '10rem' }} />
    <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => confirm('bottom')} className="p-button-success" style={{ minWidth: '10rem' }} />
    <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => confirm('bottom-right')} className="p-button-success" style={{ minWidth: '10rem' }} />
</div>
        `,
        javascript: `
import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function PositionDemo() {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm = (position) => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            position,
            accept,
            reject
        });
    };

    return (
        <div className="card">
            <Toast ref={toast} />
            <ConfirmDialog />
            <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                <Button label="Left" icon="pi pi-arrow-right" onClick={() => confirm('left')} className="p-button-help" style={{ minWidth: '10rem' }} />
                <Button label="Right" icon="pi pi-arrow-left" onClick={() => confirm('right')} className="p-button-help" style={{ minWidth: '10rem' }} />
            </div>
            <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => confirm('top-left')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                <Button label="Top" icon="pi pi-arrow-down" onClick={() => confirm('top')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => confirm('top-right')} className="p-button-warning" style={{ minWidth: '10rem' }} />
            </div>
            <div className="flex flex-wrap justify-content-center gap-2">
                <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => confirm('bottom-left')} className="p-button-success" style={{ minWidth: '10rem' }} />
                <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => confirm('bottom')} className="p-button-success" style={{ minWidth: '10rem' }} />
                <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => confirm('bottom-right')} className="p-button-success" style={{ minWidth: '10rem' }} />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function PositionDemo() {
    const toast = useRef<Toast>(null);

    const accept = () => {
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm = (position) => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            position,
            accept,
            reject
        });
    };

    return (
        <div className="card">
            <Toast ref={toast} />
            <ConfirmDialog />
            <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                <Button label="Left" icon="pi pi-arrow-right" onClick={() => confirm('left')} className="p-button-help" style={{ minWidth: '10rem' }} />
                <Button label="Right" icon="pi pi-arrow-left" onClick={() => confirm('right')} className="p-button-help" style={{ minWidth: '10rem' }} />
            </div>
            <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => confirm('top-left')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                <Button label="Top" icon="pi pi-arrow-down" onClick={() => confirm('top')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => confirm('top-right')} className="p-button-warning" style={{ minWidth: '10rem' }} />
            </div>
            <div className="flex flex-wrap justify-content-center gap-2">
                <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => confirm('bottom-left')} className="p-button-success" style={{ minWidth: '10rem' }} />
                <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => confirm('bottom')} className="p-button-success" style={{ minWidth: '10rem' }} />
                <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => confirm('bottom-right')} className="p-button-success" style={{ minWidth: '10rem' }} />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <Toast ref={toast} />
            <DocSectionText {...props}>
                <p>
                    The <i>position</i> property of the confirm options is used to display a Dialog at all edges and corners of the screen.
                </p>
            </DocSectionText>

            <div className="card">
                <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                    <Button label="Left" icon="pi pi-arrow-right" onClick={() => confirm('left')} className="p-button-help" style={{ minWidth: '10rem' }} />
                    <Button label="Right" icon="pi pi-arrow-left" onClick={() => confirm('right')} className="p-button-help" style={{ minWidth: '10rem' }} />
                </div>
                <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                    <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => confirm('top-left')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                    <Button label="Top" icon="pi pi-arrow-down" onClick={() => confirm('top')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                    <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => confirm('top-right')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                </div>
                <div className="flex flex-wrap justify-content-center gap-2">
                    <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => confirm('bottom-left')} className="p-button-success" style={{ minWidth: '10rem' }} />
                    <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => confirm('bottom')} className="p-button-success" style={{ minWidth: '10rem' }} />
                    <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => confirm('bottom-right')} className="p-button-success" style={{ minWidth: '10rem' }} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
