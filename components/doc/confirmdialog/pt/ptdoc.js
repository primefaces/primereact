import React, { useState, useRef } from 'react';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Toast } from '../../../lib/toast/Toast';
import { ConfirmDialog } from '../../../lib/confirmdialog/ConfirmDialog';
import { Button } from '../../../lib/button/Button';

export function PTDoc(props) {
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
<ConfirmDialog
    pt={{ headerTitle: { className: 'text-primary' } }}
    visible={visible}
    onHide={() => setVisible(false)}
    message="Are you sure you want to proceed?"
    header="Confirmation"
    icon="pi pi-exclamation-triangle"
    accept={accept}
    reject={reject}
/>
<div className="card flex justify-content-center">
    <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
</div>
        `,
        javascript: `
import React, { useRef, useState } from 'react'; 
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';

export default function PTDemo() {
    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog
                pt={{ headerTitle: { className: 'text-primary' } }}
                visible={visible}
                onHide={() => setVisible(false)}
                message="Are you sure you want to proceed?"
                header="Confirmation"
                icon="pi pi-exclamation-triangle"
                accept={accept}
                reject={reject}
            />
            <div className="card flex justify-content-center">
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </>
    )
}
        `,
        typescript: `
import React, { useRef, useState } from 'react'; 
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';

export default function PTDemo() {
    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog
                pt={{ headerTitle: { className: 'text-primary' } }}
                visible={visible}
                onHide={() => setVisible(false)}
                message="Are you sure you want to proceed?"
                header="Confirmation"
                icon="pi pi-exclamation-triangle"
                accept={accept}
                reject={reject}
            />
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
            <DocSectionText {...props}></DocSectionText>
            <Toast ref={toast} />
            <ConfirmDialog
                pt={{ headerTitle: { className: 'text-primary' } }}
                visible={visible}
                onHide={() => setVisible(false)}
                message="Are you sure you want to proceed?"
                header="Confirmation"
                icon="pi pi-exclamation-triangle"
                accept={accept}
                reject={reject}
            />
            <div className="card flex justify-content-center">
                <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
