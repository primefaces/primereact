import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { ConfirmPopup } from '@/components/lib/confirmpopup/ConfirmPopup';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef, useState } from 'react';

export function DeclarativeDoc(props) {
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
<ConfirmPopup target={buttonEl.current} visible={visible} onHide={() => setVisible(false)} 
    message="Are you sure you want to proceed?" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
<Button ref={buttonEl} onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
        `,
        javascript: `
import React, { useRef, useState } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function DeclarativeDemo() {
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
            <ConfirmPopup target={buttonEl.current} visible={visible} onHide={() => setVisible(false)} 
                message="Are you sure you want to proceed?" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
            <div className="card flex justify-content-center">
                <Button ref={buttonEl} onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </>
    )
}
        `,
        typescript: `
import React, { useRef, useState } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function DeclarativeDemo() {
    const [visible, setVisible] = useState<boolean>(false);
    const toast = useRef<Toast>(null);
    const buttonEl = useRef(null);

    const accept = () => {
        toast.current?.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current?.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmPopup target={buttonEl.current} visible={visible} onHide={() => setVisible(false)} 
                message="Are you sure you want to proceed?" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
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
            <DocSectionText {...props}>
                <p>
                    Declarative is an alternative to the programmatic approach where ConfirmDialog is controlled with a binding to <i>visible</i> and <i>onHide</i> event callback along with the <i>target</i> property to refer to the source element.
                </p>
            </DocSectionText>
            <Toast ref={toast} />
            <ConfirmPopup target={buttonEl.current} visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
            <div className="card flex justify-content-center">
                <Button ref={buttonEl} onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
