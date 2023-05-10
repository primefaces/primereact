import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Toast } from '../../../lib/toast/Toast';
import { Button } from '../../../lib/button/Button';
import { useRef, useState } from 'react';
import { ConfirmPopup } from '../../../lib/confirmpopup/ConfirmPopup';

export function PTDoc(props) {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    const buttonEl = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const code = {
        basic: `
<Toast ref={toast} />
<ConfirmPopup
    pt={{
        root: { className: 'surface-100' }
    }}
    target={buttonEl.current}
    visible={visible}
    onHide={() => setVisible(false)}
    message="Are you sure you want to proceed?"
    icon="pi pi-exclamation-triangle"
    accept={accept}
    reject={reject}
/>
<div className="card flex justify-content-center">
    <Button ref={buttonEl} onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
</div>
        `,
        javascript: `
import React, { useRef, useState } from 'react'; 
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { ConfirmPopup } from 'primereact/confirmpopup';

export default function PTDemo() {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    const buttonEl = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmPopup
                pt={{
                    root: { className: 'surface-100' }
                }}
                target={buttonEl.current}
                visible={visible}
                onHide={() => setVisible(false)}
                message="Are you sure you want to proceed?"
                icon="pi pi-exclamation-triangle"
                accept={accept}
                reject={reject}
            />
            <div className="card flex justify-content-center">
                <Button ref={buttonEl} onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </>
    )
}
        `,
        typescript: `
import React, { useRef, useState } from 'react'; 
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { ConfirmPopup } from 'primereact/confirmpopup';

export default function PTDemo() {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    const buttonEl = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };
    
    return (
        <>
            <Toast ref={toast} />
            <ConfirmPopup
                pt={{
                    root: { className: 'surface-100' }
                }}
                target={buttonEl.current}
                visible={visible}
                onHide={() => setVisible(false)}
                message="Are you sure you want to proceed?"
                icon="pi pi-exclamation-triangle"
                accept={accept}
                reject={reject}
            />
            <div className="card flex justify-content-center">
                <Button ref={buttonEl} onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <>
                <Toast ref={toast} />
                <ConfirmPopup
                    pt={{
                        root: { className: 'surface-100' }
                    }}
                    target={buttonEl.current}
                    visible={visible}
                    onHide={() => setVisible(false)}
                    message="Are you sure you want to proceed?"
                    icon="pi pi-exclamation-triangle"
                    accept={accept}
                    reject={reject}
                />
                <div className="card flex justify-content-center">
                    <Button ref={buttonEl} onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
                </div>
            </>
            <DocSectionCode code={code} />
        </>
    );
}
