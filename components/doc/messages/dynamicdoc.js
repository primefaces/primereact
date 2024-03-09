import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Messages } from '@/components/lib/messages/Messages';
import { useRef } from 'react';

export function DynamicDoc(props) {
    const msgs = useRef(null);

    const addMessages = () => {
        msgs.current.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true, closable: false },
            { severity: 'info', summary: 'Info', detail: 'Message Content', sticky: true, closable: false },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', sticky: true, closable: false },
            { severity: 'error', summary: 'Error', detail: 'Message Content', sticky: true, closable: false }
        ]);
    };

    const clearMessages = () => {
        msgs.current.clear();
    };

    const code = {
        basic: `
<Button type="button" onClick={addMessages} label="Show" className="mr-2" />
<Button type="button" onClick={clearMessages} label="Clear" className="p-button-secondary" />

<Messages ref={msgs} />
        `,
        javascript: `
import React, { useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';

export default function DynamicDemo() {
    const msgs = useRef(null);

    const addMessages = () => {
        msgs.current.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true, closable: false },
            { severity: 'info', summary: 'Info', detail: 'Message Content', sticky: true, closable: false },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', sticky: true, closable: false },
            { severity: 'error', summary: 'Error', detail: 'Message Content', sticky: true, closable: false }
        ]);
    };

    const clearMessages = () => {
        msgs.current.clear();
    };

    return (
        <div className="card">
            <Button type="button" onClick={addMessages} label="Show" className="mr-2" />
            <Button type="button" onClick={clearMessages} label="Clear" className="p-button-secondary" />

            <Messages ref={msgs} />
        </div>
    )
}
        `,
        typescript: `
import React, { useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Messages } from 'primereact/messages';

export default function DynamicDemo() {
    const msgs = useRef(null);

    const addMessages = () => {
        msgs.current.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true, closable: false },
            { severity: 'info', summary: 'Info', detail: 'Message Content', sticky: true, closable: false },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', sticky: true, closable: false },
            { severity: 'error', summary: 'Error', detail: 'Message Content', sticky: true, closable: false }
        ]);
    };

    const clearMessages = () => {
        msgs.current?.clear();
    };

    return (
        <div className="card">
            <Button type="button" onClick={addMessages} label="Show" className="mr-2" />
            <Button type="button" onClick={clearMessages} label="Clear" className="p-button-secondary" />

            <Messages ref={msgs} />
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
            <div className="card">
                <Button type="button" onClick={addMessages} label="Show" className="mr-2" />
                <Button type="button" onClick={clearMessages} label="Clear" className="p-button-secondary" />

                <Messages ref={msgs} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
