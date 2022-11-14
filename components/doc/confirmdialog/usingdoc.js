import { useRef, useState } from 'react';
import { Button } from '../../lib/button/Button';
import { ConfirmDialog } from '../../lib/confirmdialog/ConfirmDialog';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function UsingConfirmDialogDoc(props) {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const code = {
        basic: `
<Toast ref={toast} />
<ConfirmDialog />
<ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
    header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
<Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
        `,
        javascript: `
import { useState, useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from '../../lib/button/Button';

export default function UsingConfirmDialogDoc() {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    return (
        <div>
            <Toast ref={toast} />
            <ConfirmDialog />
            <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
                header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
            <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
        </div>
    )
}
        `,
        typescript: `
import { useState, useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from '../../lib/button/Button';

export default function UsingConfirmDialogDoc() {
    const [visible, setVisible] = useState(false);
    const toast = useRef<Toast>(null);

    const accept = () => {
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    return (
        <div>
            <Toast ref={toast} />
            <ConfirmDialog />
            <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
                header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
            <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>ConfirmDialog is used as a container and visibility is managed with visible property where onHide event is required to update the visibility state.</DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast} />
                <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?" header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
