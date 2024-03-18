import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { ConfirmPopup, confirmPopup } from '@/components/lib/confirmpopup/ConfirmPopup';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef } from 'react';

export function HeadlessDoc(props) {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm1 = (event) => {
        confirmPopup({
            group: 'headless',
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    const confirm2 = (event) => {
        confirmPopup({
            group: 'headless',
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
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
<ConfirmPopup
    group="headless"
    content={({message, acceptBtnRef, rejectBtnRef, hide}) => 
        <div className="bg-gray-900 text-white border-round p-3">
            <span>{message}</span>
            <div className="flex align-items-center gap-2 mt-3">
                <Button ref={acceptBtnRef} label="Save" onClick={() => {accept(); hide();}} className="p-button-sm p-button-outlined"></Button>
                <Button ref={rejectBtnRef} label="Cancel" outlined onClick={() => {reject(); hide();}}className="p-button-sm p-button-text"></Button>
            </div>
        </div>
    }
/>
<div className="card flex flex-wrap gap-2 justify-content-center">
    <Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
    <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger"></Button>
</div>
        `,
        javascript: `
import React, { useRef } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function HeadlessDemo() {
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm1 = (event) => {
        confirmPopup({
            group: 'headless',
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?', 
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    const confirm2 = (event) => {
        confirmPopup({
            group: 'headless',
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            defaultFocus: 'reject',
            accept,
            reject
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmPopup
                group="headless"
                content={({message, acceptBtnRef, rejectBtnRef, hide}) => 
                    <div className="bg-gray-900 text-white border-round p-3">
                        <span>{message}</span>
                        <div className="flex align-items-center gap-2 mt-3">
                            <Button ref={acceptBtnRef} label="Save" onClick={() => {accept(); hide();}} className="p-button-sm p-button-outlined"></Button>
                            <Button ref={rejectBtnRef} label="Cancel" outlined onClick={() => {reject(); hide();}}className="p-button-sm p-button-text"></Button>
                        </div>
                    </div>
                }
            />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger"></Button>
            </div>
        </>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

export default function HeadlessDemo() {
    const toast = useRef<Toast>(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm1 = (event) => {
        confirmPopup({
            group: 'headless',
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?', 
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
            accept,
            reject
        });
    };

    const confirm2 = (event) => {
        confirmPopup({
            group: 'headless',
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            defaultFocus: 'reject',
            accept,
            reject
        });
    };

    return ( 
        <>
            <Toast ref={toast} />
            <ConfirmPopup
                group="headless"
                content={({message, acceptBtnRef, rejectBtnRef, hide}) => 
                    <div className="bg-gray-900 text-white border-round p-3">
                        <span>{message}</span>
                        <div className="flex align-items-center gap-2 mt-3">
                            <Button ref={acceptBtnRef} label="Save" onClick={() => {accept(); hide();}} className="p-button-sm p-button-outlined"></Button>
                            <Button ref={rejectBtnRef} label="Cancel" outlined onClick={() => {reject(); hide();}}className="p-button-sm p-button-text"></Button>
                        </div>
                    </div>
                }
            />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger"></Button>
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
                    Headless mode is enabled by defining a <i>content</i> prop that lets you implement entire confirmation UI instead of the default elements.
                </p>
            </DocSectionText>
            <Toast ref={toast} />
            <ConfirmPopup
                group="headless"
                content={({ message, acceptBtnRef, rejectBtnRef, hide }) => (
                    <div className="bg-gray-900 text-white border-round p-3">
                        <span>{message}</span>
                        <div className="flex align-items-center gap-2 mt-3">
                            <Button
                                ref={acceptBtnRef}
                                label="Save"
                                onClick={() => {
                                    accept();
                                    hide();
                                }}
                                className="p-button-sm p-button-outlined"
                            ></Button>
                            <Button
                                ref={rejectBtnRef}
                                label="Cancel"
                                outlined
                                onClick={() => {
                                    reject();
                                    hide();
                                }}
                                className="p-button-sm p-button-text"
                            ></Button>
                        </div>
                    </div>
                )}
            />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger"></Button>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
