import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef } from 'react';

export function StickyDoc(props) {
    const toast = useRef(null);

    const showSticky = () => {
        toast.current.show({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
    };

    const clear = () => {
        toast.current.clear();
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Button onClick={showSticky} label="Sticky" severity="success" />
<Button onClick={clear} label="Clear" />
        `,
        javascript: `
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function StickyDemo() {
    const toast = useRef(null);

    const showSticky = () => {
        toast.current.show({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
    };

    const clear = () => {
        toast.current.clear();
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <div className="flex flex-wrap gap-2">
                <Button onClick={showSticky} label="Sticky" severity="success" />
                <Button onClick={clear} label="Clear" />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function StickyDemo() {
    const toast = useRef<Toast>(null);

    const showSticky = () => {
        toast.current?.show({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
    };

    const clear = () => {
        toast.current?.clear();
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <div className="flex flex-wrap gap-2">
                <Button onClick={showSticky} label="Sticky" severity="success" />
                <Button onClick={clear} label="Clear" />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A message disappears after 3000ms defined the <i>life</i> option, set <i>sticky</i> option to display messages that do not hide automatically.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast} />
                <div className="flex flex-wrap gap-2">
                    <Button onClick={showSticky} label="Sticky" />
                    <Button onClick={clear} label="Clear" severity="secondary" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
