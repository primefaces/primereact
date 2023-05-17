import { useRef, useState } from 'react';
import { Button } from '../../../lib/button/Button';
import { ConfirmPopup } from '../../../lib/confirmpopup/ConfirmPopup';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

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
