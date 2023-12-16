import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useMountEffect } from '@/components/lib/hooks/Hooks';
import { Messages } from '@/components/lib/messages/Messages';
import { useRef } from 'react';

export function StickyDoc(props) {
    const msgs = useRef(null);

    useMountEffect(() => {
        if (msgs.current) {
            msgs.current.clear();
            msgs.current.show([
                { sticky: true, life: 1000, severity: 'success', summary: 'Success', detail: 'Message Content', closable: false },
                { sticky: true, life: 2000, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
                { sticky: true, life: 3000, severity: 'warn', summary: 'Warning', detail: 'Message Content', closable: false },
                { sticky: true, life: 4000, severity: 'error', summary: 'Error', detail: 'Message Content', closable: false }
            ]);
        }
    });

    const code = {
        basic: `
msgs.current.show([
    { sticky: true, life: 1000, severity: 'success', summary: 'Success', detail: 'Message Content', closable: false },
    { sticky: true, life: 2000, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
    { sticky: true, life: 3000, severity: 'warn', summary: 'Warning', detail: 'Message Content', closable: false },
    { sticky: true, life: 4000, severity: 'error', summary: 'Error', detail: 'Message Content', closable: false }
]);
        `,
        javascript: `
import React, { useEffect, useRef } from 'react'; 
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

export default function StickyDemo() {
    const msgs = useRef(null);

    useMountEffect(() => {
        if (msgs.current) {
            msgs.current.clear();
            msgs.current.show([
                { sticky: true, life: 1000, severity: 'success', summary: 'Success', detail: 'Message Content', closable: false },
                { sticky: true, life: 2000, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
                { sticky: true, life: 3000, severity: 'warn', summary: 'Warning', detail: 'Message Content', closable: false },
                { sticky: true, life: 4000, severity: 'error', summary: 'Error', detail: 'Message Content', closable: false }
            ]);
        }
    });

    return (
        <div className="card">
            <Messages ref={msgs} />
        </div>
    )
}
        `,
        typescript: `
import React, { useEffect, useRef } from 'react'; 
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

export default function StickyDemo() {
    const msgs = useRef<Messages>(null);

    useMountEffect(() => {
        msgs.current?.clear();
        msgs.current?.show([
            { sticky: true, life: 1000, severity: 'success', summary: 'Success', detail: 'Message Content', closable: false },
            { sticky: true, life: 2000, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
            { sticky: true, life: 3000, severity: 'warn', summary: 'Warning', detail: 'Message Content', closable: false },
            { sticky: true, life: 4000, severity: 'error', summary: 'Error', detail: 'Message Content', closable: false }
        ]);
    });

    return (
        <div className="card">
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
                    A message disappears after 3000ms defined the <i>life</i> option, set <i>sticky</i> option to displays message that do not hide automatically.
                </p>
            </DocSectionText>
            <div className="card ">
                <Messages ref={msgs} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
