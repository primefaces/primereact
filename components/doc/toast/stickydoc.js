import { useRef } from 'react';
import { Button } from '../../lib/button/Button';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function StickyDoc(props) {
    const toast = useRef(null);

    const showSticky = () => {
        toast.current.show({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content', sticky: true });
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Button onClick={showSticky} label="Sticky" />
        `,
        javascript: `
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function StickyDoc() {
    const toast = useRef(null);

    const showSticky = () => {
        toast.current.show({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content', sticky: true });
    };

    return (
        <div>
            <Toast ref={toast} />
            <Button onClick={showSticky} label="Sticky" />
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function StickyDoc() {
    const toast = useRef<Toast>(null);

    const showSticky = () => {
        toast.current?.show({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content', sticky: true });
    };

    return (
        <div>
            <Toast ref={toast} />
            <Button onClick={showSticky} label="Sticky" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast} />
                <div>
                    <Button onClick={showSticky} label="Sticky" className="md:w-auto md:mr-1 w-full mb-1" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
