import { useRef } from 'react';
import { Button } from '../../lib/button/Button';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show([{ severity: 'info', summary: 'Basic', detail: 'Basic Content' }]);
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

export default function BasicDoc() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show([{ severity: 'info', summary: 'Basic', detail: 'Basic Content' }]);
    };

    return (
        <div>
            <Toast ref={toast} />
            <Button onClick={show} label="Basic" />
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function BasicDoc() {
    const toast = useRef<Toast>(null);

    const show = () => {
        toast.current?.show([{ severity: 'info', summary: 'Basic', detail: 'Basic Content' }]);
    };

    return (
        <div>
            <Toast ref={toast} />
            <Button onClick={show} label="Basic" />
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
                    <Button onClick={show} label="Basic" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
