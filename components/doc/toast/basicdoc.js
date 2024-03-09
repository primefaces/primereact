import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef } from 'react';

export function BasicDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Button onClick={show} label="Basic" />
        `,
        javascript: `
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function BasicDemo() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Button onClick={show} label="Show" />
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function BasicDemo() {
    const toast = useRef<Toast>(null);

    const show = () => {
        toast.current?.show({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Button onClick={show} label="Show" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Messages are displayed by calling the <i>show</i> method provided by the component ref. A single message is specified by the Message interface that defines various properties such as <i>severity</i>, <i>summary</i> and{' '}
                    <i>detail</i>.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast} />
                <Button onClick={show} label="Show" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
