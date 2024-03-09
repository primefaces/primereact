import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useMountEffect } from '@/components/lib/hooks/Hooks';
import { Messages } from '@/components/lib/messages/Messages';
import { useRef } from 'react';

export function SeverityDoc(props) {
    const msgs = useRef(null);

    useMountEffect(() => {
        if (msgs.current) {
            msgs.current.clear();
            msgs.current.show([
                { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
                { sticky: true, severity: 'success', summary: 'Success', detail: 'Message Content', closable: false },
                { sticky: true, severity: 'warn', summary: 'Warning', detail: 'Message Content', closable: false },
                { sticky: true, severity: 'error', summary: 'Error', detail: 'Message Content', closable: false }
            ]);
        }
    });

    const code = {
        basic: `
msgs.current.show([
    {sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false},
    {sticky: true, severity: 'success', summary: 'Success', detail: 'Message Content', closable: false},
    {sticky: true, severity: 'warn', summary: 'Warning', detail: 'Message Content', closable: false},
    {sticky: true, severity: 'error', summary: 'Error', detail: 'Message Content', closable: false}
]);
        `,
        javascript: `
import React, { useEffect, useRef } from 'react'; 
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

export default function SeverityDemo() {
    const msgs = useRef(null);

    useMountEffect(() => {
        if (msgs.current) {
            msgs.current.clear();
            msgs.current.show([
                { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
                { sticky: true, severity: 'success', summary: 'Success', detail: 'Message Content', closable: false },
                { sticky: true, severity: 'warn', summary: 'Warning', detail: 'Message Content', closable: false },
                { sticky: true, severity: 'error', summary: 'Error', detail: 'Message Content', closable: false }
            ]);
        }
    });

    return (
        <Messages ref={msgs} />
    )
}
        `,
        typescript: `
import React, { useEffect, useRef } from 'react'; 
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

export default function SeverityDemo() {
    const msgs = useRef<Messages>(null);

    useMountEffect(() => {
        msgs.current?.clear();
        msgs.current?.show([
            {sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content'},
            {sticky: true, severity: 'success', summary: 'Success', detail: 'Message Content'},
            {sticky: true, severity: 'warn', summary: 'Warning', detail: 'Message Content'},
            {sticky: true, severity: 'error', summary: 'Error', detail: 'Message Content'}
        ]);
    });

    return (
        <Messages ref={msgs} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The <i>severity</i> option specifies the type of the message.
                </p>
            </DocSectionText>
            <div className="card">
                <Messages ref={msgs} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
