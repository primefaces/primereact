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

    const showSubmit = () => {
        toastBC.current.show({
            severity: 'info',
            sticky: true,
            className: 'border-none',
            content: (
                <div className="flex flex-column align-items-center" style={{ flex: '1' }}>
                    <div className="text-center">
                        <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem' }}></i>
                        <h4>Are you sure?</h4>
                        <p>Submit your work</p>
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={(e) => clear(true)} type="button" label="Confirm" className="p-button-success w-6rem flex justify-content-center" />
                        <Button onClick={(e) => clear(false)} type="button" label="Cancel" className="p-button-warning w-6rem flex justify-content-center" />
                    </div>
                </div>
            )
        });
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Toast ref={toastBC} position="bottom-center" />
<Button type="button" onClick={showSubmit} label="Submit" className="ui-button-warning" />
        `,
        javascript: `
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function TemplateDoc() {
    const toast = useRef(null);
    const toastBC = useRef(null);

    const clear = (submit) => {
        toastBC.current.clear();
        submit && show();
    };

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const showSubmit = () => {
        toastBC.current.show({
            severity: 'info',
            sticky: true,
            className: 'border-none',
            content: (
                <div className="flex flex-column align-items-center" style={{ flex: '1' }}>
                    <div className="text-center">
                        <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem' }}></i>
                        <h4>Are you sure?</h4>
                        <p>Submit your work</p>
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={(e) => clear(true)} type="button" label="Confirm" className="p-button-success w-6rem flex justify-content-center" />
                        <Button onClick={(e) => clear(false)} type="button" label="Cancel" className="p-button-warning w-6rem flex justify-content-center" />
                    </div>
                </div>
            )
        });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <div>
                <Toast ref={toastBC} position="bottom-center" />
                <Button type="button" onClick={showSubmit} label="Submit" className="ui-button-warning md:w-auto md:mr-1 w-full mb-1" />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function TemplateDoc() {
    const toast = useRef<Toast>(null);
    const toastBC = useRef<Toast>(null);

    const clear = (submit) => {
        toastBC.current.clear();
        submit && show();
    };

    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Submission Received', detail: 'Thank you, we have received your submission.' });
    };

    const showSubmit = () => {
        toastBC.current?.show({
            severity: 'info',
            sticky: true,
            className: 'border-none',
            content: (
                <div className="flex flex-column align-items-center" style={{ flex: '1' }}>
                    <div className="text-center">
                        <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem' }}></i>
                        <h4>Are you sure?</h4>
                        <p>Submit your work</p>
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={(e) => clear(true)} type="button" label="Confirm" className="p-button-success w-6rem flex justify-content-center" />
                        <Button onClick={(e) => clear(false)} type="button" label="Cancel" className="p-button-warning w-6rem flex justify-content-center" />
                    </div>
                </div>
            )
        });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <div>
                <Toast ref={toastBC} position="bottom-center" />
                <Button type="button" onClick={showSubmit} label="Submit" className="ui-button-warning md:w-auto md:mr-1 w-full mb-1" />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast} />
                <div>
                    <Toast ref={toastBC} position="bottom-center" />
                    <Button type="button" onClick={showSubmit} label="Submit" className="ui-button-warning md:w-auto md:mr-1 w-full mb-1" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
