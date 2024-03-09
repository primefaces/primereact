import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useMountEffect } from '@/components/lib/hooks/Hooks';
import { Messages } from '@/components/lib/messages/Messages';
import React, { useRef } from 'react';

export function TemplateDoc(props) {
    const msgs = useRef(null);

    useMountEffect(() => {
        if (msgs.current) {
            msgs.current.clear();
            msgs.current.show({
                severity: 'info',
                sticky: true,
                content: (
                    <React.Fragment>
                        <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" width="32" />
                        <div className="ml-2">Always bet on Prime.</div>
                    </React.Fragment>
                )
            });
        }
    });

    const code = {
        basic: `
    msgs.current.show({
        severity: 'info',
        sticky: true,
        content: (
            <React.Fragment>
                <img alt="logo" src="/images/logo.png" width="32" />
                <div className="ml-2">Always bet on Prime.</div>
            </React.Fragment>
        )
    });
        `,
        javascript: `
import React, { useEffect, useRef } from 'react'; 
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

export default function TemplateDemo() {
    const msgs = useRef(null);

    useMountEffect(() => {
        if (msgs.current) {
            msgs.current.clear();
            msgs.current.show({
                severity: 'info',
                sticky: true,
                content: (
                    <React.Fragment>
                        <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" width="32" />
                        <div className="ml-2">Always bet on Prime.</div>
                    </React.Fragment>
                )
            });
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

export default function TemplateDemo() {
    const msgs = useRef<Messages>(null);

    useMountEffect(() => {
        msgs.current>.clear();
        msgs.current?.show({
            severity: 'info', sticky: true, content: (
                <React.Fragment>
                    <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" width="32" />
                    <div className="ml-2">Always bet on Prime.</div>
                </React.Fragment>
            )
        });
    });

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
                    Custom content inside a message is defined with the <i>content</i> option.
                </p>
            </DocSectionText>
            <div className="card">
                <Messages ref={msgs} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
