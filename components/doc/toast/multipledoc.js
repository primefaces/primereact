import { useRef } from 'react';
import { Button } from '../../lib/button/Button';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function MultipleDoc(props) {
    const toast = useRef(null);

    const clear = () => {
        toast.current.clear();
    };

    const showMultiple = () => {
        toast.current.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 },
            { severity: 'info', summary: 'Info', detail: 'Message Content', life: 3050 },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', life: 3100 },
            { severity: 'error', summary: 'Error', detail: 'Message Content', life: 3150 }
        ]);
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Button onClick={showMultiple} label="Multiple" className="p-button-warning" />
<Button onClick={clear} label="Clear" />
        `,
        javascript: `
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function MultipleDemo() {
    const toast = useRef(null);

    const clear = () => {
        toast.current.clear();
    }

    const showMultiple = () => {
        toast.current.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 },
            { severity: 'info', summary: 'Info', detail: 'Message Content', life: 3050 },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', life: 3100 },
            { severity: 'error', summary: 'Error', detail: 'Message Content', life: 3150 }
        ]);
    };

    return (
        <div className="card flex justify-content-center gap-2">
            <Toast ref={toast} />
            <Button onClick={showMultiple} label="Multiple" className="p-button-warning" />
            <Button onClick={clear} label="Clear" />
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { flushSync } from 'react-dom';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function MultipleDemo() {
    const toast = useRef<Toast>(null);

    const clear = () => {
        toast.current?.clear();
    }

    const showMultiple = () => {
        toast.current?.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 },
            { severity: 'info', summary: 'Info', detail: 'Message Content', life: 3050 },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', life: 3100 },
            { severity: 'error', summary: 'Error', detail: 'Message Content', life: 3150 }
        ]);
    };

    return (
        <div className="card flex justify-content-center gap-2">
            <Toast ref={toast} />
            <Button onClick={showMultiple} label="Multiple" className="p-button-warning" />
            <Button onClick={clear} label="Clear" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Multiple messages are displayed by passing an array to the <i>show</i> method.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center gap-2">
                <Toast ref={toast} />
                <Button onClick={showMultiple} label="Multiple" className="p-button-warning" />
                <Button onClick={clear} label="Clear" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
