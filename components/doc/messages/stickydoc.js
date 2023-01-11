import { useEffect, useRef } from 'react';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';
import { Messages } from '../../lib/messages/Messages';

export function StickyDoc(props) {
    const msgs = useRef(null);

    useEffect(() => {
        msgs.current.show([
            { sticky: true, severity: 'success', summary: 'Success', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'warn', summary: 'Warning', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'error', summary: 'Error', detail: 'Message Content', closable: false }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
useEffect(() => {
    msgs.current.show([
        { sticky: true, severity: 'success', summary: 'Success', detail: 'Message Content', closable: false },
        { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
        { sticky: true, severity: 'warn', summary: 'Warning', detail: 'Message Content', closable: false },
        { sticky: true, severity: 'error', summary: 'Error', detail: 'Message Content', closable: false }
    ]);
}, []); // eslint-disable-line react-hooks/exhaustive-deps
<Messages ref={msgs} />
        `,
        javascript: `
import React, { useEffect, useRef } from 'react'; 
import { Messages } from 'primereact/messages';

export default function StickyDoc() {
    const msgs = useRef(null);

    useEffect(() => {
        msgs.current.show([
            { sticky: true, severity: 'success', summary: 'Success', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'warn', summary: 'Warning', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'error', summary: 'Error', detail: 'Message Content', closable: false }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <Messages ref={msgs} />
        </div>
    )
}
        `,
        typescript: `
import React, { useEffect, useRef } from 'react'; 
import { Messages } from 'primereact/messages';

export default function StickyDoc() {
    const msgs = useRef(null);

    useEffect(() => {
        msgs.current?.show([
            { sticky: true, severity: 'success', summary: 'Success', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'warn', summary: 'Warning', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'error', summary: 'Error', detail: 'Message Content', closable: false }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card ">
                <Messages ref={msgs} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
