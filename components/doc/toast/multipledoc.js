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
            { severity: 'success', summary: 'Message 1', detail: 'Message 1 Content', life: 3000 },
            { severity: 'info', summary: 'Message 2', detail: 'Message 2 Content', life: 3000 },
            { severity: 'warn', summary: 'Message 3', detail: 'Message 3 Content', life: 3000 },
            { severity: 'error', summary: 'Message 4', detail: 'Message 4 Content', life: 3000 }
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

export default function MultipleDoc() {
    const toast = useRef(null);

    const clear = () => {
        toast.current.clear();
    }

    const showMultiple = () => {
        toast.current.show([
            { severity: 'info', summary: 'Message 1', detail: 'Message 1 Content', life: 3000 },
            { severity: 'info', summary: 'Message 2', detail: 'Message 2 Content', life: 3000 },
            { severity: 'warn', summary: 'Message 3', detail: 'Message 3 Content', life: 3000 },
            { severity: 'error', summary: 'Message 4', detail: 'Message 4 Content', life: 3000 }
        ]);
    };

    return (
        <div className="card flex justify-content-center align-items-center gap-2">
            <Toast ref={toast} />
            <Button onClick={showMultiple} label="Multiple" className="p-button-warning" />
            <Button onClick={clear} label="Clear" />
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function MultipleDoc() {
    const toast = useRef<Toast>(null);

    const clear = () => {
        toast.current?.clear();
    }

    const showMultiple = () => {
        toast.current.show([
            { severity: 'info', summary: 'Message 1', detail: 'Message 1 Content', life: 3000 },
            { severity: 'info', summary: 'Message 2', detail: 'Message 2 Content', life: 3000 },
            { severity: 'warn', summary: 'Message 3', detail: 'Message 3 Content', life: 3000 },
            { severity: 'error', summary: 'Message 4', detail: 'Message 4 Content', life: 3000 }
        ]);
    };

    return (
        <div className="card flex justify-content-center align-items-center gap-2">
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
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center align-items-center gap-2">
                <Toast ref={toast} />
                <Button onClick={showMultiple} label="Multiple" className="p-button-warning" />
                <Button onClick={clear} label="Clear" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
