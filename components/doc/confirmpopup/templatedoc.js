import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { ConfirmPopup, confirmPopup } from '@/components/lib/confirmpopup/ConfirmPopup';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef } from 'react';

export function TemplateDoc(props) {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const showTemplate = (event) => {
        confirmPopup({
            target: event.currentTarget,
            group: 'templating',
            header: 'Confirmation',
            message: (
                <div className="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border">
                    <i className="pi pi-exclamation-circle text-6xl text-primary-500"></i>
                    <span>Please confirm to proceed moving forward.</span>
                </div>
            ),
            acceptIcon: 'pi pi-check',
            rejectIcon: 'pi pi-times',
            rejectClass: 'p-button-sm',
            acceptClass: 'p-button-outlined p-button-sm',
            accept,
            reject
        });
    };

    const code = {
        basic: `
<Toast ref={toast} />
<ConfirmPopup group="templating" />
<div className="card flex justify-content-center">
    <Button onClick={showTemplate} icon="pi pi-check" label="Confirm"></Button>
</div>
        `,
        javascript: `
import React, { useRef } from 'react';
import { confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const showTemplate = (event) => {
        confirmPopup({
            target: event.currentTarget,
            group: 'templating',
            header: 'Confirmation',
            message: (
                <div className="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border">
                    <i className="pi pi-exclamation-circle text-6xl text-primary-500"></i>
                    <span>Please confirm to proceed moving forward.</span>
                </div>
            ),
            acceptIcon: 'pi pi-check',
            rejectIcon: 'pi pi-times',
            rejectClass: 'p-button-sm',
            acceptClass: 'p-button-outlined p-button-sm',
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmPopup group="templating" />
            <div className="card flex justify-content-center">
                <Button onClick={showTemplate} icon="pi pi-check" label="Confirm"></Button>
            </div>
        </>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    const toast = useRef<Toast>(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const showTemplate = (event) => {
        confirmPopup({
            target: event.currentTarget,
            group: 'templating',
            header: 'Confirmation',
            message: (
                <div className="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border">
                    <i className="pi pi-exclamation-circle text-6xl text-primary-500"></i>
                    <span>Please confirm to proceed moving forward.</span>
                </div>
            ),
            acceptIcon: 'pi pi-check',
            rejectIcon: 'pi pi-times',
            rejectClass: 'p-button-sm',
            acceptClass: 'p-button-outlined p-button-sm',
            accept,
            reject
        });
    };

    return ( 
        <>
            <Toast ref={toast} />
            <ConfirmPopup group="templating" />
            <div className="card flex justify-content-center">
                <Button onClick={showTemplate} icon="pi pi-check" label="Confirm"></Button>
            </div>
        </>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Templating allows customizing the message content.</p>
            </DocSectionText>
            <Toast ref={toast} />
            <ConfirmPopup group="templating" />
            <div className="card flex justify-content-center">
                <Button onClick={showTemplate} icon="pi pi-check" label="Confirm"></Button>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
