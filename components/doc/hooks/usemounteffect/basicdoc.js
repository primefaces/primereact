/* eslint-disable no-console */
import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useMountEffect } from '@/components/lib/hooks/Hooks';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef } from 'react';

export function BasicDoc(props) {
    const toast = useRef(null);

    useMountEffect(() => {
        toast.current.show({ severity: 'info', summary: 'Mounted', sticky: true });
    });

    const code = {
        basic: `
useMountEffect(() => {
    toast.current.show({ severity: 'info', summary: 'Mounted', sticky: true });
});
        `,
        javascript: `
import React from 'react'; 
import { useMountEffect } from 'primereact/hooks';
import { Toast } from 'primereact/toast';

export default function BasicDemo() {
    const toast = useRef(null);

    useMountEffect(() => {
        toast.current.show({ severity: 'info', summary: 'Mounted', sticky: true });
    });

    return (
        <>
            <Toast ref={toast} />
            <div className="card flex justify-content-center">
                <span className="text-xl">View the Toast message at top right.</span>
            </div>
        </>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { useMountEffect } from 'primereact/hooks';
import { Toast } from 'primereact/toast';

export default function BasicDemo() {
    const toast = useRef<Toast>(null);

    useMountEffect(() => {
        toast.current.show({ severity: 'info', summary: 'Mounted', sticky: true });
    });

    return (
        <>
            <Toast ref={toast} />
            <div className="card flex justify-content-center">
                <span className="text-xl">View the Toast message at top right.</span>
            </div>
        </>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>A message is displayed when the component is mounted.</p>
            </DocSectionText>
            <Toast ref={toast} />
            <div className="card flex justify-content-center">
                <span className="text-xl">View the Toast message at top right.</span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
