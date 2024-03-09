import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { ConfirmDialog } from '@/components/lib/confirmdialog/ConfirmDialog';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef, useState } from 'react';

export function DeclarativeDoc(props) {
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
<ConfirmDialog group="declarative"  visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?" 
    header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
<Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
        `,
        javascript: `
import React, { useState, useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function DeclarativeDemo() {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog group="declarative"  visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?" 
                header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
            <div className="card flex justify-content-center">
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </>
    )
}
        `,
        typescript: `
import React, { useState, useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primefaces/button';

export default function DeclarativeDemo() {
    const [visible, setVisible] = useState<boolean>(false);
    const toast = useRef<Toast>(null);

    const accept = () => {
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog group="declarative"  visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?" 
                header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
            <div className="card flex justify-content-center">
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
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
                    Declarative is an alternative to the programmatic approach where ConfirmDialog is controlled with a binding to <i>visible</i> and <i>onHide</i> event callback.
                </p>
            </DocSectionText>
            <Toast ref={toast} />
            <ConfirmDialog group="declarative" visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?" header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
            <div className="card flex justify-content-center">
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
