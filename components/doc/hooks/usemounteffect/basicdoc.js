/* eslint-disable no-console */
import React, { useRef } from 'react';
import { useMountEffect } from '../../../lib/hooks/Hooks';
import { Toast } from '../../../lib/toast/Toast';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

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
