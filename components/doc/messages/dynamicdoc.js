import { useEffect, useRef } from 'react';
import { Button } from '../../lib/button/Button';
import { Messages } from '../../lib/messages/Messages';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DynamicDoc(props) {
    const msgs1 = useRef(null);

    useEffect(() => {
        msgs1.current.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true },
            { severity: 'info', summary: 'Info', detail: 'Message Content', sticky: true },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', sticky: true },
            { severity: 'error', summary: 'Error', detail: 'Message Content', sticky: true }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const addMessages = () => {
        msgs1.current.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true },
            { severity: 'info', summary: 'Info', detail: 'Message Content', sticky: true },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', sticky: true },
            { severity: 'error', summary: 'Error', detail: 'Message Content', sticky: true }
        ]);
    };

    const clearMessages = () => {
        msgs1.current.clear();
    };

    const code = {
        basic: `
<Button type="button" onClick={addMessages} label="Show" className="mr-2" />
<Button type="button" onClick={clearMessages} icon="pi pi-times" label="Clear" className="p-button-secondary" />
<Messages ref={msgs1} />
        `,
        javascript: `
import { useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';

export default function DynamicDoc() {
    const msgs1 = useRef(null);

    useEffect(() => {
        msgs1.current.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true },
            { severity: 'info', summary: 'Info', detail: 'Message Content', sticky: true },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', sticky: true },
            { severity: 'error', summary: 'Error', detail: 'Message Content', sticky: true }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const addMessages = () => {
        msgs1.current.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true },
            { severity: 'info', summary: 'Info', detail: 'Message Content', sticky: true },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', sticky: true },
            { severity: 'error', summary: 'Error', detail: 'Message Content', sticky: true }
        ]);
    };

    const clearMessages = () => {
        msgs1.current.clear();
    };

    return (
        <div>
            <Button type="button" onClick={addMessages} label="Show" className="mr-2" />
            <Button type="button" onClick={clearMessages} icon="pi pi-times" label="Clear" className="p-button-secondary" />

            <Messages ref={msgs1} />
        </div>
    )
}
        `,
        typescript: `
import { useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';

export default function DynamicDoc() {
    const msgs1 = useRef<Messages>(null);

    useEffect(() => {
        msgs1.current?.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true },
            { severity: 'info', summary: 'Info', detail: 'Message Content', sticky: true },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', sticky: true },
            { severity: 'error', summary: 'Error', detail: 'Message Content', sticky: true }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const addMessages = () => {
        msgs1.current?.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true },
            { severity: 'info', summary: 'Info', detail: 'Message Content', sticky: true },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', sticky: true },
            { severity: 'error', summary: 'Error', detail: 'Message Content', sticky: true }
        ]);
    };

    const clearMessages = () => {
        msgs1.current?.clear();
    };

    return (
        <div>
            <Button type="button" onClick={addMessages} label="Show" className="mr-2" />
            <Button type="button" onClick={clearMessages} icon="pi pi-times" label="Clear" className="p-button-secondary" />

            <Messages ref={msgs1} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Dynamic</p>
            </DocSectionText>
            <div className="card">
                <Button type="button" onClick={addMessages} label="Show" className="mr-2" />
                <Button type="button" onClick={clearMessages} icon="pi pi-times" label="Clear" className="p-button-secondary" />

                <Messages ref={msgs1} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
