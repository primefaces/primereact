import { useRef } from 'react';
import { Button } from '../../lib/button/Button';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function PositionDoc(props) {
    const toastTL = useRef(null);
    const toastBL = useRef(null);
    const toastBR = useRef(null);

    const showTopLeft = () => {
        toastTL.current.show({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
    };

    const showBottomLeft = () => {
        toastBL.current.show({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
    };

    const showBottomRight = () => {
        toastBR.current.show({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
    };

    const code = {
        basic: `
<Toast ref={toastTL} position="top-left" />
<Toast ref={toastBL} position="bottom-left" />
<Toast ref={toastBR} position="bottom-right" />
<Button label="Top Left" className="mr-2" onClick={showTopLeft} />
<Button label="Bottom Left" className="p-button-warning" onClick={showBottomLeft} />
<Button label="Bottom Right" className="p-button-success" onClick={showBottomRight} />
        `,
        javascript: `
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function PositionDoc() {
    const toastTL = useRef(null);
    const toastBL = useRef(null);
    const toastBR = useRef(null);

    const showTopLeft = () => {
        toastTL.current.show({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
    };

    const showBottomLeft = () => {
        toastBL.current.show({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
    };

    const showBottomRight = () => {
        toastBR.current.show({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
    };

    return (
        <div>
            <Toast ref={toastTL} position="top-left" />
            <Toast ref={toastBL} position="bottom-left" />
            <Toast ref={toastBR} position="bottom-right" />
            <Button label="Top Left" className="mr-2" onClick={showTopLeft} />
            <Button label="Bottom Left" className="p-button-warning" onClick={showBottomLeft} />
            <Button label="Bottom Right" className="p-button-success" onClick={showBottomRight} />
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function PositionDoc() {
    const toastTL = useRef<Toast>(null);
    const toastBL = useRef<Toast>(null);
    const toastBR = useRef<Toast>(null);

    const showTopLeft = () => {
        toastTL.current?.show({ severity: 'info', summary: 'Info Message', detail: 'Message Content', life: 3000 });
    };

    const showBottomLeft = () => {
        toastBL.current?.show({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', life: 3000 });
    };

    const showBottomRight = () => {
        toastBR.current?.show({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
    };

    return (
        <div>
            <Toast ref={toastTL} position="top-left" />
            <Toast ref={toastBL} position="bottom-left" />
            <Toast ref={toastBR} position="bottom-right" />
            <Button label="Top Left" className="mr-2" onClick={showTopLeft} />
            <Button label="Bottom Left" className="p-button-warning" onClick={showBottomLeft} />
            <Button label="Bottom Right" className="p-button-success" onClick={showBottomRight} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Position</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toastTL} position="top-left" />
                <Toast ref={toastBL} position="bottom-left" />
                <Toast ref={toastBR} position="bottom-right" />
                <div>
                    <Button label="Top Left" className="mr-2 md:w-auto md:mr-1 w-full mb-1" onClick={showTopLeft} />
                    <Button label="Bottom Left" className="p-button-warning md:w-auto md:mr-1 w-full mb-1" onClick={showBottomLeft} />
                    <Button label="Bottom Right" className="p-button-success md:w-auto md:mr-1 w-full mb-1" onClick={showBottomRight} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
