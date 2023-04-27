import { useEffect, useRef } from 'react';
import { Messages } from '../../lib/messages/Messages';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SeverityDoc(props) {
    const msgs = useRef(null);

    useEffect(() => {
        msgs.current.show([
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'success', summary: 'Success', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'warn', summary: 'Warning', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'error', summary: 'Error', detail: 'Message Content', closable: false }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
import { Messages } from 'primereact/messages';

export default function SeverityDemo() {
    const msgs = useRef(null);

    useEffect(() => {
        msgs.current.show([
            {sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false},
            {sticky: true, severity: 'success', summary: 'Success', detail: 'Message Content', closable: false},
            {sticky: true, severity: 'warn', summary: 'Warning', detail: 'Message Content', closable: false},
            {sticky: true, severity: 'error', summary: 'Error', detail: 'Message Content', closable: false}
        ]);
    }, []);

    return (
        <Messages ref={msgs} />
    )
}
        `,
        typescript: `
import React, { useEffect, useRef } from 'react';
import { Messages } from 'primereact/messages';

export default function SeverityDemo() {
    const msgs = useRef<Messages>(null);

    useEffect(() => {
        msgs.current?.show([
            {sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content'},
            {sticky: true, severity: 'success', summary: 'Success', detail: 'Message Content'},
            {sticky: true, severity: 'warn', summary: 'Warning', detail: 'Message Content'},
            {sticky: true, severity: 'error', summary: 'Error', detail: 'Message Content'}
        ]);
    }, []);

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
