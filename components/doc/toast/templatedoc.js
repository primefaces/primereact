import { useRef, useState } from 'react';
import { Button } from '../../lib/button/Button';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    const toastBC = useRef(null);

    const clear = () => {
        toastBC.current.clear();
        setVisible(false);
    };

    const confirm = () => {
        if (!visible) {
            setVisible(true);
            toastBC.current.clear();
            toastBC.current.show({
                severity: 'warn',
                sticky: true,
                content: (
                    <div className="flex flex-column align-items-center" style={{ flex: '1' }}>
                        <div className="text-center">
                            <i className="pi pi-exclamation-triangle" onClick={(e) => setVisible(false)} style={{ fontSize: '3rem' }}></i>
                            <div className="font-bold text-xl my-3">Are you sure?</div>
                        </div>
                        <div className="flex gap-2">
                            <Button severity="success" label="Yes" onClick={(e) => clear(true)}></Button>
                            <Button severity="secondary" label="No" onClick={(e) => clear(false)}></Button>
                        </div>
                    </div>
                )
            });
        }
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Toast ref={toastBC} position="bottom-center" />
<Button onClick={confirm} label="Confirm" />
        `,
        javascript: `
import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function TemplateDemo() {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    const toastBC = useRef(null);

    const clear = () => {
        toastBC.current.clear();
        setVisible(false);
    };

    const confirm = () => {
        if (!visible) {
            setVisible(true);
            toastBC.current.clear();
            toastBC.current.show({
                severity: 'warn',
                sticky: true,
                content: (
                    <div className="flex flex-column align-items-center" style={{ flex: '1' }}>
                        <div className="text-center">
                            <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem' }}></i>
                            <div className="font-bold text-xl my-3">Are you sure?</div>
                        </div>
                        <div className="flex gap-2">
                            <Button severity="success" label="Yes" onClick={(e) => clear(true)}></Button>
                            <Button severity="secondary" label="No" onClick={(e) => clear(false)}></Button>
                        </div>
                    </div>
                )
            });
        }
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Toast ref={toastBC} position="bottom-center" />
            <Button onClick={confirm} label="Confirm" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function TemplateDemo() {
    const [visible, setVisible] = useState(false);
    const toast = useRef<Toast>(null);
    const toastBC = useRef<Toast>(null);

    const clear = () => {
        toastBC.current?.clear();
        setVisible(false);
    };

    const confirm = () => {
        if (!visible) {
            setVisible(true);
            toastBC.current?.clear();
            toastBC.current?.show({
                severity: 'warn',
                sticky: true,
                content: (
                    <div className="flex flex-column align-items-center" style={{ flex: '1' }}>
                        <div className="text-center">
                            <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem' }}></i>
                            <div className="font-bold text-xl my-3">Are you sure?</div>
                        </div>
                        <div className="flex gap-2">
                            <Button severity="success" label="Yes" onClick={(e) => clear(true)}></Button>
                            <Button severity="secondary" label="No" onClick={(e) => clear(false)}></Button>
                        </div>
                    </div>
                )
            });
        }
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Toast ref={toastBC} position="bottom-center" />
            <Button onClick={confirm} label="Confirm" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Custom content inside a message is defined with the <i>content</i> option.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast} />
                <Toast ref={toastBC} position="bottom-center" />
                <Button onClick={confirm} label="Confirm" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
