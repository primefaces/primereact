import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { ConfirmPopup } from '@/components/lib/confirmpopup/ConfirmPopup';
import { useRef, useState } from 'react';

export function PTDoc(props) {
    const [visible, setVisible] = useState(false);
    const buttonEl = useRef(null);

    const code = {
        basic: `
<ConfirmPopup
    pt={{
        root: { className: 'surface-100' }
    }}
    target={buttonEl.current}
    visible={visible}
    onHide={() => setVisible(false)}
    message="Are you sure you want to proceed?"
    icon="pi pi-exclamation-triangle"
/>
        `,
        javascript: `
import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { ConfirmPopup } from 'primereact/confirmpopup';

export default function PTDemo() {
    const [visible, setVisible] = useState(false);
    const buttonEl = useRef(null);

    return (
        <>
            <ConfirmPopup
                pt={{
                    root: { className: 'surface-100' }
                }}
                target={buttonEl.current}
                visible={visible}
                onHide={() => setVisible(false)}
                message="Are you sure you want to proceed?"
                icon="pi pi-exclamation-triangle"
            />
            <div className="card flex justify-content-center">
                <Button ref={buttonEl} onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </>
    )
}
        `,
        typescript: `
import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { ConfirmPopup } from 'primereact/confirmpopup';

export default function PTDemo() {
    const [visible, setVisible] = useState<boolean>(false);
    const buttonEl = useRef(null);

    return (
        <>
            <ConfirmPopup
                pt={{
                    root: { className: 'surface-100' }
                }}
                target={buttonEl.current}
                visible={visible}
                onHide={() => setVisible(false)}
                message="Are you sure you want to proceed?"
                icon="pi pi-exclamation-triangle"
            />
            <div className="card flex justify-content-center">
                <Button ref={buttonEl} onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <>
                <ConfirmPopup
                    pt={{
                        root: { className: 'surface-100' }
                    }}
                    target={buttonEl.current}
                    visible={visible}
                    onHide={() => setVisible(false)}
                    message="Are you sure you want to proceed?"
                    icon="pi pi-exclamation-triangle"
                />
                <div className="card flex justify-content-center">
                    <Button ref={buttonEl} onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
                </div>
            </>
            <DocSectionCode code={code} />
        </>
    );
}
