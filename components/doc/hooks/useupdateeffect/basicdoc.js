import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useUpdateEffect } from '@/components/lib/hooks/Hooks';
import { InputText } from '@/components/lib/inputtext/InputText';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef, useState } from 'react';

export function BasicDoc(props) {
    const toast = useRef(null);
    const [value, setValue] = useState('');

    useUpdateEffect(() => {
        toast.current.show({ severity: 'info', summary: 'Updated' });
    }, [value]);

    const code = {
        basic: `
const toast = useRef(null);
const [value, setValue] = useState('');

useUpdateEffect(() => {
    toast.current.show({ severity: 'info', summary: 'Updated' });
}, [value]);
        `,
        javascript: `
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { useUpdateEffect } from 'primereact/hooks';

export default function BasicDemo() {
    const toast = useRef(null);
    const [value, setValue] = useState('');

    useUpdateEffect(() => {
        toast.current.show({ severity: 'info', summary: 'Updated' });
    }, [value]);

    return (
        <>
            <Toast ref={toast} />
            <div className="card flex justify-content-center">
                <InputText type="text" defaultValue={value} onBlur={(e) => setValue(e.target.value)} />
            </div>
        </>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { useUpdateEffect } from 'primereact/hooks';

export default function BasicDemo() {
    const toast = useRef(null);
    const [value, setValue] = useState<string>('');

    useUpdateEffect(() => {
        toast.current.show({ severity: 'info', summary: 'Updated' });
    }, [value]);

    return (
        <>
            <Toast ref={toast} />
            <div className="card flex justify-content-center">
                <InputText type="text" defaultValue={value} onBlur={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
            </div>
        </>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Updating the value at blur event triggers a message.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast} />
                <InputText type="text" defaultValue={value} onBlur={(e) => setValue(e.target.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
