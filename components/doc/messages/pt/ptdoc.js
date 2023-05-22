import { useRef } from 'react';
import { useMountEffect } from '../../../lib/hooks/Hooks';
import { Messages } from '../../../lib/messages/Messages';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function PTDoc(props) {
    const msgs = useRef(null);

    useMountEffect(() => {
        msgs.current && msgs.current.show([
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false }
        ]);
    });

    const code = {
        basic: `
<Messages
    ref={msgs}
    pt={{
        wrapper: ({ index }) => ({ className: \`bg-yellow-\${((index + 1 > 5 && 5) || index + 1 || 1) * 100} my-4\` })
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
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false }
        ]);
    });

    return (
        <div className="card">
            <Messages
                ref={msgs}
                pt={{
                    wrapper: ({ index }) => ({ className: \`bg-yellow-\${((index + 1 > 5 && 5) || index + 1 || 1) * 100} my-4\` })
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
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false },
            { sticky: true, severity: 'info', summary: 'Info', detail: 'Message Content', closable: false }
        ]);
    });

    return (
        <div className="card">
            <Messages
                ref={msgs}
                pt={{
                    wrapper: ({ index }) => ({ className: \`bg-yellow-\${((index + 1 > 5 && 5) || index + 1 || 1) * 100} my-4\` })
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
                        wrapper: ({ index }) => ({ className: `bg-yellow-${((index + 1 > 5 && 5) || index + 1 || 1) * 100} my-4` })
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
