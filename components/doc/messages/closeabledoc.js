import { useEffect, useRef } from 'react';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';
import { Messages } from '../../lib/messages/Messages';

export function ClosableDoc(props) {
    const msgs = useRef(null);

    useEffect(() => {
        msgs.current.show([
            { sticky: true, severity: 'success', summary: 'Success', detail: 'Closable Message' },
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Not Closable Message', closable: false }
        ]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
msgs.current.show([
    { sticky: true, severity: 'success', summary: 'Success', detail: 'Message is closable'},
    { sticky: true, severity: 'info', summary: 'Info', detail: 'Message is not closable', closable: false}
]);
        `,
        javascript: `
import React, { useEffect, useRef } from 'react'; 
import { Messages } from 'primereact/messages';

export default function ClosableDemo() {
    const msgs = useRef(null);
    
    useEffect(() => {
        msgs.current.show([
            { sticky: true, severity: 'success', summary: 'Success', detail: 'Closable Message'},
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Not Closable Message', closable: false}
        ]);
    }, []);

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

export default function ClosableDemo() {
    const msgs = useRef(null);

    useEffect(() => {
        msgs.current?.show([
            msgs.current.show([
                { sticky: true, severity: 'success', summary: 'Success', detail: 'Closable Message'},
                { sticky: true, severity: 'info', summary: 'Info', detail: 'Not Closable Message', closable: false}
            ]);
    }, []);

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
                    A message displays a close icon by default, <i>closable</i> option is used to control this behavior.
                </p>
            </DocSectionText>
            <div className="card">
                <Messages ref={msgs} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
