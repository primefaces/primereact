import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useMountEffect } from '@/components/lib/hooks/Hooks';
import { Messages } from '@/components/lib/messages/Messages';
import React, { useRef } from 'react';

export function CustomIcon(props) {
    const msgs = useRef(null);

    useMountEffect(() => {
        if (msgs.current) {
            msgs.current.clear();
            msgs.current.show([
                { sticky: true, severity: 'info', icon: 'pi pi-send', detail: 'Info message' },
                {
                    severity: 'success',
                    sticky: true,
                    content: (
                        <React.Fragment>
                            <img alt="logo" src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" width="32" />
                            <div className="ml-2">How may I help you?</div>
                        </React.Fragment>
                    )
                }
            ]);
        }
    });

    const code = {
        basic: `
msgs.current.show([
    { sticky: true, severity: 'info', icon: 'pi pi-send', detail: 'Info message' },
    {
        severity: 'success',
        sticky: true,
        content: (
            <React.Fragment>
                <img alt="logo" src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" width="32" />
                <div className="ml-2">How may I help you?</div>
            </React.Fragment>
        )
    }
]);
        `,
        javascript: `
import React, { useRef } from 'react'; 
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

export default function BasicDemo() {
    const msgs = useRef(null);

    useMountEffect(() => {
        if (msgs.current) {
            msgs.current.clear();
            msgs.current.show([
                { sticky: true, severity: 'info', icon: 'pi pi-send', detail: 'Info message' },
                {
                    severity: 'success',
                    sticky: true,
                    content: (
                        <React.Fragment>
                            <img alt="logo" src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" width="32" />
                            <div className="ml-2">How may I help you?</div>
                        </React.Fragment>
                    )
                }
            ]);
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
import React, { useRef } from 'react'; 
import { useMountEffect } from 'primereact/hooks';
import { Messages } from 'primereact/messages';

export default function BasicDemo() {
    const msgs = useRef<Messages>(null);

    useMountEffect(() => {
        msgs.current?.clear();
            msgs.current.show([
                { sticky: true, severity: 'info', icon: 'pi pi-send', detail: 'Info message' },
                {
                    severity: 'success',
                    sticky: true,
                    content: (
                        <React.Fragment>
                            <img alt="logo" src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" width="32" />
                            <div className="ml-2">How may I help you?</div>
                        </React.Fragment>
                    )
                }
            ]);
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
                    A message with custom icon can be created by simply using <i>icon</i> or <i>content</i> options.
                </p>
            </DocSectionText>
            <div className="card">
                <Messages ref={msgs} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
