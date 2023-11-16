import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useMountEffect } from '@/components/lib/hooks/Hooks';
import { Messages } from '@/components/lib/messages/Messages';
import { useRef } from 'react';

export function PTDoc(props) {
    const msgs = useRef(null);

    useMountEffect(() => {
        msgs.current && msgs.current.show([{ sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false }]);
    });

    const code = {
        basic: `
<Messages
    ref={msgs}
    pt={{
        wrapper: { className: 'bg-yellow-100' }
    }}
/>
        `,
        javascript: `
import React, { useEffect, useRef } from 'react'; 
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

export default function PTDemo() {
    const msgs = useRef(null);

    useMountEffect(() => {
        msgs.current && msgs.current.show([
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false }
        ]);
    });

    return (
        <div className="card">
            <Messages
                ref={msgs}
                pt={{
                    wrapper: { className: 'bg-yellow-100' }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useEffect, useRef } from 'react'; 
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

export default function PTDemo() {
    const msgs = useRef(null);

    useMountEffect(() => {
        msgs.current && msgs.current.show([
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false }
        ]);
    });

    return (
        <div className="card">
            <Messages
                ref={msgs}
                pt={{
                    wrapper: { className: 'bg-yellow-100' }
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <Messages
                    ref={msgs}
                    pt={{
                        wrapper: { className: 'bg-yellow-100' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
