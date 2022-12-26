import { useRef } from 'react';
import { Button } from '../../lib/button/Button';
import { confirmDialog } from '../../lib/confirmdialog/ConfirmDialog';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function PositionDoc(props) {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirmPosition = (position) => {
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
<Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
<Button onClick={confirm2} icon="pi pi-times" label="Delete"></Button>
        `,
        javascript: `
import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function PositionDoc() {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirmPosition = (position) => {
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
        <div>
            <Toast ref={toast} />
            <ConfirmDialog />
            <div className="col-12">
                <Button onClick={() => confirmPosition('left')} icon="pi pi-arrow-right" label="Left" className="p-button-help mr-2"></Button>
                <Button onClick={() => confirmPosition('right')} icon="pi pi-arrow-left" label="Right" className="p-button-help"></Button>
            </div>
            <div className="col-12">
                <Button onClick={() => confirmPosition('top-left')} icon="pi pi-arrow-down-right" label="TopLeft" className="p-button-warning mr-2"></Button>
                <Button onClick={() => confirmPosition('top')} icon="pi pi-arrow-down" label="Top" className="p-button-warning mr-2"></Button>
                <Button onClick={() => confirmPosition('top-right')} icon="pi pi-arrow-down-left" label="TopRight" className="p-button-warning"></Button>
            </div>
            <div className="col-12">
                <Button onClick={() => confirmPosition('bottom-left')} icon="pi pi-arrow-up-right" label="BottomLeft" className="p-button-success mr-2"></Button>
                <Button onClick={() => confirmPosition('bottom')} icon="pi pi-arrow-up" label="Bottom" className="p-button-success mr-2"></Button>
                <Button onClick={() => confirmPosition('bottom-right')} icon="pi pi-arrow-up-left" label="BottomRight" className="p-button-success"></Button>
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

export default function PositionDoc() {
    const toast = useRef<Toast>(null);

    const accept = () => {
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirmPosition = (position) => {
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
        <div>
            <Toast ref={toast} />
            <ConfirmDialog />
            <div className="col-12">
                <Button onClick={() => confirmPosition('left')} icon="pi pi-arrow-right" label="Left" className="p-button-help mr-2"></Button>
                <Button onClick={() => confirmPosition('right')} icon="pi pi-arrow-left" label="Right" className="p-button-help"></Button>
            </div>
            <div className="col-12">
                <Button onClick={() => confirmPosition('top-left')} icon="pi pi-arrow-down-right" label="TopLeft" className="p-button-warning mr-2"></Button>
                <Button onClick={() => confirmPosition('top')} icon="pi pi-arrow-down" label="Top" className="p-button-warning mr-2"></Button>
                <Button onClick={() => confirmPosition('top-right')} icon="pi pi-arrow-down-left" label="TopRight" className="p-button-warning"></Button>
            </div>
            <div className="col-12">
                <Button onClick={() => confirmPosition('bottom-left')} icon="pi pi-arrow-up-right" label="BottomLeft" className="p-button-success mr-2"></Button>
                <Button onClick={() => confirmPosition('bottom')} icon="pi pi-arrow-up" label="Bottom" className="p-button-success mr-2"></Button>
                <Button onClick={() => confirmPosition('bottom-right')} icon="pi pi-arrow-up-left" label="BottomRight" className="p-button-success"></Button>
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
                    There are two ways to display confirm dialog. One of them is to use the confirmDialog method and the other is to use the <i>&lt;ConfirmDialog&gt;</i> tag. These independently create dialog element. It supports the same properties
                    in both.
                </p>
            </DocSectionText>

            <div className="card ">
                <div className="col-12">
                    <Button onClick={() => confirmPosition('left')} icon="pi pi-arrow-right" label="Left" className="p-button-help mr-2"></Button>
                    <Button onClick={() => confirmPosition('right')} icon="pi pi-arrow-left" label="Right" className="p-button-help"></Button>
                </div>
                <div className="col-12">
                    <Button onClick={() => confirmPosition('top-left')} icon="pi pi-arrow-down-right" label="TopLeft" className="p-button-warning mr-2"></Button>
                    <Button onClick={() => confirmPosition('top')} icon="pi pi-arrow-down" label="Top" className="p-button-warning mr-2"></Button>
                    <Button onClick={() => confirmPosition('top-right')} icon="pi pi-arrow-down-left" label="TopRight" className="p-button-warning"></Button>
                </div>
                <div className="col-12">
                    <Button onClick={() => confirmPosition('bottom-left')} icon="pi pi-arrow-up-right" label="BottomLeft" className="p-button-success mr-2"></Button>
                    <Button onClick={() => confirmPosition('bottom')} icon="pi pi-arrow-up" label="Bottom" className="p-button-success mr-2"></Button>
                    <Button onClick={() => confirmPosition('bottom-right')} icon="pi pi-arrow-up-left" label="BottomRight" className="p-button-success"></Button>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
