import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { confirmDialog } from '@/components/lib/confirmdialog/ConfirmDialog';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef } from 'react';

export function BasicDoc(props) {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm1 = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    const confirm2 = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            defaultFocus: 'reject',
            accept,
            reject
        });
    };

    const code = {
        basic: `
<Toast ref={toast} />
<ConfirmDialog />
<Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
<Button onClick={confirm2} icon="pi pi-times" label="Delete"></Button>
        `,
        javascript: `
import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm1 = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    const confirm2 = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete"></Button>
            </div>
        </>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const toast = useRef<Toast>(null);

    const accept = () => {
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    const confirm1 = () => {
        confirmDialog({
            message: 'Are you sure you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    const confirm2 = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            defaultFocus: 'reject',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete"></Button>
            </div>
        </>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A ConfirmDialog component needs to be present on the page that is interacted with the <i>confirmDialog</i> function that takes a configuration object for customization.
                </p>
            </DocSectionText>
            <Toast ref={toast} />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger p-button-outlined"></Button>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
