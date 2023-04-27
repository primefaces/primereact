import { useRef } from 'react';
import { Button } from '../../lib/button/Button';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const toast = useRef(null);
    const toastBC = useRef(null);

    const clear = (submit) => {
        toastBC.current.clear();
        submit && show();
    };

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const confirm = () => {
        toastBC.current.show({
            severity: 'info',
            sticky: true,
            className: 'border-none',
            content: (
                <div className="flex flex-column align-items-center" style={{ flex: '1' }}>
                    <div className="text-center">
                        <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem' }}></i>
                        <div className="font-bold text-xl my-3">Are you sure?</div>
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={(e) => clear(true)} type="button" label="Confirm" className="p-button-success w-6rem" />
                        <Button onClick={(e) => clear(false)} type="button" label="Cancel" className="p-button-warning w-6rem" />
                    </div>
                </div>
            )
        });
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Toast ref={toastBC} position="bottom-center" />
<Button type="button" onClick={confirm} label="Submit" />
        `,
        javascript: `
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function TemplateDemo() {
    const toast = useRef(null);
    const toastBC = useRef(null);

    const clear = (submit) => {
        toastBC.current.clear();
        submit && show();
    };

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const confirm = () => {
        toastBC.current.show({
            severity: 'info',
            sticky: true,
            className: 'border-none',
            content: (
                <div className="flex flex-column align-items-center" style={{ flex: '1' }}>
                    <div className="text-center">
                        <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem' }}></i>
                        <div className="font-bold text-xl my-3">Are you sure?</div>
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={(e) => clear(true)} type="button" label="Confirm" className="p-button-success w-6rem" />
                        <Button onClick={(e) => clear(false)} type="button" label="Cancel" className="p-button-warning w-6rem" />
                    </div>
                </div>
            )
        });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Toast ref={toastBC} position="bottom-center" />
            <Button type="button" onClick={confirm} label="Submit" />
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function TemplateDemo() {
    const toast = useRef<Toast>(null);
    const toastBC = useRef<Toast>(null);

    const clear = (submit) => {
        toastBC.current.clear();
        submit && show();
    };

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const confirm = () => {
        toastBC.current?.show({
            severity: 'info',
            sticky: true,
            className: 'border-none',
            content: (
                <div className="flex flex-column align-items-center" style={{ flex: '1' }}>
                    <div className="text-center">
                        <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem' }}></i>
                        <div className="font-bold text-xl my-3">Are you sure?</div>
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={(e) => clear(true)} type="button" label="Confirm" className="p-button-success w-6rem" />
                        <Button onClick={(e) => clear(false)} type="button" label="Cancel" className="p-button-warning w-6rem" />
                    </div>
                </div>
            )
        });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Toast ref={toastBC} position="bottom-center" />
            <Button type="button" onClick={confirm} label="Submit" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Custom content inside a message is defined with the <i>content</i> option.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast} />
                <Toast ref={toastBC} position="bottom-center" />
                <Button type="button" onClick={confirm} label="Submit" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
