import { useEffect, useRef } from 'react';
import { Messages } from '../../lib/messages/Messages';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function SeveritiesDoc(props) {
    const msgs1 = useRef(null);

    useEffect(() => {
        msgs1.current.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true },
            { severity: 'info', summary: 'Info', detail: 'Message Content', sticky: true },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', sticky: true },
            { severity: 'error', summary: 'Error', detail: 'Message Content', sticky: true }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<Messages ref={msgs1} />
        `,
        javascript: `
import { useEffect, useRef } from 'react';
import { Messages } from 'primereact/messages';

export default function SeveritiesDoc() {
    const msgs1 = useRef(null);

    useEffect(() => {
        msgs1.current.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true },
            { severity: 'info', summary: 'Info', detail: 'Message Content', sticky: true },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', sticky: true },
            { severity: 'error', summary: 'Error', detail: 'Message Content', sticky: true }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Messages ref={msgs1} />
    )
}
        `,
        typescript: `
import { useEffect, useRef } from 'react';
import { Messages } from 'primereact/messages';

export default function SeveritiesDoc() {
    const msgs1 = useRef(null);

    useEffect(() => {
        msgs1.current.show([
            { severity: 'success', summary: 'Success', detail: 'Message Content', sticky: true },
            { severity: 'info', summary: 'Info', detail: 'Message Content', sticky: true },
            { severity: 'warn', summary: 'Warning', detail: 'Message Content', sticky: true },
            { severity: 'error', summary: 'Error', detail: 'Message Content', sticky: true }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Messages ref={msgs1} />
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
                <Messages ref={msgs1} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
