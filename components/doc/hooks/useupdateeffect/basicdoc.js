import React, { useRef, useState } from 'react';
import { useUpdateEffect } from '../../../lib/hooks/Hooks';
import { InputText } from '../../../lib/inputtext/InputText';
import { Toast } from '../../../lib/toast/Toast';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

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
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <InputText type="text" defaultValue={value} onBlur={(e) => setValue(e.target.value)} />
        </div>
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
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <InputText type="text" defaultValue={value} onBlur={(e) => setValue(e.target.value)} />
        </div>
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
