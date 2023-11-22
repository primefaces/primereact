import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useTimeout } from '@/components/lib/hooks/Hooks';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef } from 'react';

export function BasicDoc(props) {
    const toast = useRef(null);

    const [clearTimeout] = useTimeout(() => {
        toast.current.show({ severity: 'info', summary: 'Loaded' });
    }, 3000);

    const code = {
        basic: `
const [clearTimeout] = useTimeout(() => {
    toast.current.show({ severity: 'info', summary: 'Loaded' });
}, 3000);
        `,
        javascript: `
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { useTimeout } from 'primereact/hooks';
import { Toast } from 'primereact/toast';

export default function BasicDemo() {
    const toast = useRef(null);

    const [clearTimeout] = useTimeout(() => {
        toast.current.show({ severity: 'info', summary: 'Loaded' });
    }, 3000);

    return (
        <>
            <Toast ref={toast} />
            <div className="card flex justify-content-center">
                <span className="text-xl">A message will be displayed in 3 seconds after mount.</span>
            </div>
        </>
    )
}
        `,
        typescript: `
import React from 'react';
import { InputText } from 'primereact/inputtext';
import { useTimeout } from 'primereact/hooks';
import { Toast } from 'primereact/toast';

export default function BasicDemo() {
    const toast = useRef<Toast>(null);

    const [clearTimeout] = useTimeout(() => {
        toast.current.show({ severity: 'info', summary: 'Loaded' });
    }, 3000);

    return (
        <>
            <Toast ref={toast} />
            <div className="card flex justify-content-center">
                <span className="text-xl">A message will be displayed in 3 seconds after mount.</span>
            </div>
        </>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Wait for 3 seconds to view the Toast message.</p>
            </DocSectionText>
            <Toast ref={toast} />
            <div className="card flex justify-content-center">
                <span className="text-xl">A message will be displayed in 3 seconds after mount.</span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
