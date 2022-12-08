import { useRef } from 'react';
import { Button } from '../../lib/button/Button';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SeveritiesDoc(props) {
    const toast = useRef(null);

    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
    };

    const showInfo = () => {
        toast.current.show({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
    };

    const showWarn = () => {
        toast.current.show({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
    };

    const showError = () => {
        toast.current.show({ severity: 'error', summary: 'Error Message', detail: 'Message Content', life: 3000 });
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Button label="Success" className="p-button-success" onClick={showSuccess} />
<Button label="Info" className="p-button-info" onClick={showInfo} />
<Button label="Warn" className="p-button-warning" onClick={showWarn} />
<Button label="Error" className="p-button-danger" onClick={showError} />
        `,
        javascript: `
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function SeveritiesDoc() {
    const toast = useRef(null);

    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
    }

    const showInfo = () => {
        toast.current.show({severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000});
    }

    const showWarn = () => {
        toast.current.show({severity:'warn', summary: 'Warn Message', detail:'Message Content', life: 3000});
    }

    const showError = () => {
        toast.current.show({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});
    }

    return (
        <div>
            <Toast ref={toast} />
            <Button label="Success" className="p-button-success" onClick={showSuccess} />
            <Button label="Info" className="p-button-info" onClick={showInfo} />
            <Button label="Warn" className="p-button-warning" onClick={showWarn} />
            <Button label="Error" className="p-button-danger" onClick={showError} />
        </div>
    )
}
        `,
        typescript: `
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function SeveritiesDoc() {
    const toast = useRef<Toast>(null);

    const showSuccess = () => {
        toast.current?.show({severity:'success', summary: 'Success Message', detail:'Message Content', life: 3000});
    }

    const showInfo = () => {
        toast.current?.show({severity:'info', summary: 'Info Message', detail:'Message Content', life: 3000});
    }

    const showWarn = () => {
        toast.current?.show({severity:'warn', summary: 'Warn Message', detail:'Message Content', life: 3000});
    }

    const showError = () => {
        toast.current?.show({severity:'error', summary: 'Error Message', detail:'Message Content', life: 3000});
    }

    return (
        <div>
            <Toast ref={toast} />
            <Button label="Success" className="p-button-success" onClick={showSuccess} />
            <Button label="Info" className="p-button-info" onClick={showInfo} />
            <Button label="Warn" className="p-button-warning" onClick={showWarn} />
            <Button label="Error" className="p-button-danger" onClick={showError} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A single message is represented by the Message interface in PrimeReact that defines various properties such as severity, summary and detail. Messages are displayed by using the show method on the ref of the Toast instance. Note
                    that for animations, toast requires react-transition-group package.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast} />
                <div className="toast-demo">
                    <Button label="Success" className="p-button-success" onClick={showSuccess} />
                    <Button label="Info" className="p-button-info" onClick={showInfo} />
                    <Button label="Warn" className="p-button-warning" onClick={showWarn} />
                    <Button label="Error" className="p-button-danger" onClick={showError} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
