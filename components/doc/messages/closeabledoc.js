import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useMountEffect } from '@/components/lib/hooks/Hooks';
import { Messages } from '@/components/lib/messages/Messages';
import { useRef } from 'react';

export function ClosableDoc(props) {
    const msgs = useRef(null);

    useMountEffect(() => {
        if (msgs.current) {
            msgs.current.clear();
            msgs.current.show([
                { sticky: true, severity: 'success', summary: 'Success', detail: 'Closable Message' },
                { sticky: true, severity: 'info', summary: 'Info', detail: 'Not Closable Message', closable: false }
            ]);
        }
    });

    const code = {
        basic: `
msgs.current.show([
    { sticky: true, severity: 'success', summary: 'Success', detail: 'Message is closable'},
    { sticky: true, severity: 'info', summary: 'Info', detail: 'Message is not closable', closable: false}
]);
        `,
        javascript: `
import React, { useEffect, useRef } from 'react'; 
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

export default function ClosableDemo() {
    const msgs = useRef(null);
    
    useMountEffect(() => {
        if (msgs.current) {
            msgs.current.clear();
            msgs.current.show([
                { sticky: true, severity: 'success', summary: 'Success', detail: 'Closable Message' },
                { sticky: true, severity: 'info', summary: 'Info', detail: 'Not Closable Message', closable: false }
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

export default function ClosableDemo() {
    const msgs = useRef<Messages>(null);

    useMountEffect(() => {
        msgs.current?.clear();
        msgs.current?.show([
            { sticky: true, severity: 'success', summary: 'Success', detail: 'Closable Message' },
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Not Closable Message', closable: false }
        ]);
    };

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
