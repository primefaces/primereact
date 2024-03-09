import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useMountEffect } from '@/components/lib/hooks/Hooks';
import { Messages } from '@/components/lib/messages/Messages';
import { useRef } from 'react';

export function BasicDoc(props) {
    const msgs = useRef(null);

    useMountEffect(() => {
        if (msgs.current) {
            msgs.current.clear();
            msgs.current.show({ id: '1', sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false });
        }
    });

    const code = {
        basic: `
<Messages ref={msgs} />
        `,
        javascript: `
import React, { useEffect, useRef } from 'react'; 
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

export default function BasicDemo() {
    const msgs = useRef(null);

    useMountEffect(() => {
        if (msgs.current) {
            msgs.current.clear();
            msgs.current.show({ id: '1', sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false });
        }
    }); 

    return (
        <div className="card flex justify-content-center">
            <Messages ref={msgs} />
        </div>
    )
}
        `,
        typescript: `
import React, { useEffect, useRef } from 'react'; 
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

export default function BasicDemo() {
    const msgs = useRef<Messages>(null);

    useMountEffect(() => {
        msgs.current?.clear();
        msgs.current?.show({ id: '1', sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false });
    });

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
