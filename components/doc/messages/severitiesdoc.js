import { useEffect, useRef } from 'react';
import { Messages } from '../../lib/messages/Messages';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SeveritiesDoc(props) {
    const msgs = useRef(null);

    useEffect(() => {
        msgs.current.show([
            { sticky: true, severity: 'success', summary: 'Success', detail: 'Message Content' },
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content' },
            { sticky: true, severity: 'warn', summary: 'Warning', detail: 'Message Content' },
            { sticky: true, severity: 'error', summary: 'Error', detail: 'Message Content' }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
msgs.current.show([
    {sticky: true, severity: 'success', summary: 'Success', detail: 'Message Content'},
    {sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content'},
    {sticky: true, severity: 'warn', summary: 'Warning', detail: 'Message Content'},
    {sticky: true, severity: 'error', summary: 'Error', detail: 'Message Content'}
]);
<Messages ref={msgs} />
        `,
        javascript: `
import React, { useEffect, useRef } from 'react';
import { Messages } from 'primereact/messages';

export default function SeveritiesDoc() {
    const msgs = useRef(null);

    useEffect(() => {
        msgs.current.show([
            {sticky: true, severity: 'success', summary: 'Success', detail: 'Message Content'},
            {sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content'},
            {sticky: true, severity: 'warn', summary: 'Warning', detail: 'Message Content'},
            {sticky: true, severity: 'error', summary: 'Error', detail: 'Message Content'}
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Messages ref={msgs} />
    )
}
        `,
        typescript: `
import React, { useEffect, useRef } from 'react';
import { Messages } from 'primereact/messages';

export default function SeveritiesDoc() {
    const msgs = useRef<Messages>(null);

    useEffect(() => {
        msgs.current?.show([
            {sticky: true, severity: 'success', summary: 'Success', detail: 'Message Content'},
            {sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content'},
            {sticky: true, severity: 'warn', summary: 'Warning', detail: 'Message Content'},
            {sticky: true, severity: 'error', summary: 'Error', detail: 'Message Content'}
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                    A single message is specified by the Message interface in PrimeReact that defines various properties such as severity, summary and detail. Messages are displayed by using the show method on the ref of the Messages instance. Note
                    that for animations, messages requires react-transition-group package.
                </p>
            </DocSectionText>
            <div className="card">
                <Messages ref={msgs} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
