import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Toast } from '../../../lib/toast/Toast';
import { Button } from '../../../lib/button/Button';
import { useRef, useState } from 'react';
import { ConfirmPopup } from '../../../lib/confirmpopup/ConfirmPopup';

export function PTDoc(props) {
    const [visible, setVisible] = useState(false);
    const buttonEl = useRef(null);

    const code = {
        basic: `
<ConfirmPopup
    pt={{
        root: { className: 'surface-100' }
    }}
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
