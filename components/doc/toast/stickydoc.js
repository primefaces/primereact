import { useRef } from 'react';
import { Button } from '../../lib/button/Button';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function StickyDoc(props) {
    const toast = useRef(null);

    const showSticky = () => {
        toast.current.show({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
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

export default function StickyDemo() {
    const toast = useRef(null);

    const showSticky = () => {
        toast.current.show({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
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

export default function StickyDemo() {
    const toast = useRef<Toast>(null);

    const showSticky = () => {
        toast.current?.show({ severity: 'info', summary: 'Sticky', detail: 'Message Content', sticky: true });
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
                <p>
                    A message disappears after 3000ms defined the <i>life</i> option, set <i>sticky</i> option to display messages that do not hide automatically.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast} />
                <div>
                    <Button onClick={showSticky} label="Sticky" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
