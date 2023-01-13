import { useEffect, useRef } from 'react';
import { Messages } from '../../lib/messages/Messages';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BasicDoc(props) {
    const msgs = useRef(null);

    useEffect(() => {
        msgs.current.show({ sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<Messages ref={msgs} />
        `,
        javascript: `
import React, { useEffect, useRef } from 'react'; 
import { Messages } from 'primereact/messages';

export default function BasicDemo() {
    const msgs = useRef(null);

    useEffect(() => {
        msgs.current.show(
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false }
        );
    }, []); 

    return (
        <div className="card flex justify-content-center">
            <Messages ref={msgs} />
        </div>
    )
}
        `,
        typescript: `
import React, { useEffect, useRef } from 'react'; 
import { Messages } from 'primereact/messages';

export default function BasicDemo() {
    const msgs = useRef(null);

    useEffect(() => {
        msgs.current.show(
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false }
        );
    }, []);

    return (
        <div className="card flex justify-content-center">
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
                    Messages are displayed by calling the <i>show</i> method provided by the component <i>ref</i>. A single message is specified by the Message interface that defines various properties such as <i>severity</i>, <i>summary</i> and{' '}
                    <i>detail</i>
                </p>
            </DocSectionText>
            <div className="card">
                <Messages ref={msgs} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
