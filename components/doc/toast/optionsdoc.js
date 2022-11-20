import { useRef } from 'react';
import { Toast } from '../../lib/toast/Toast';
import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function OptionsDoc(props) {
    const toast = useRef(null);

    const showSticky = () => {
        toast.current.show({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content', sticky: true });
    };

    const showMultiple = () => {
        toast.current.show([
            { severity: 'info', summary: 'Message 1', detail: 'Message 1 Content', life: 3000 },
            { severity: 'info', summary: 'Message 2', detail: 'Message 2 Content', life: 3000 },
            { severity: 'info', summary: 'Message 3', detail: 'Message 3 Content', life: 3000 }
        ]);
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Button onClick={showMultiple} label="Multiple" className="p-button-warning" />
<Button onClick={showSticky} label="Sticky" />
        `,
        javascript: `
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function OptionsDoc() {
    const toast = useRef(null);

    const showSticky = () => {
        toast.current.show({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content', sticky: true });
    };

    const showMultiple = () => {
        toast.current.show([
            { severity: 'info', summary: 'Message 1', detail: 'Message 1 Content', life: 3000 },
            { severity: 'info', summary: 'Message 2', detail: 'Message 2 Content', life: 3000 },
            { severity: 'info', summary: 'Message 3', detail: 'Message 3 Content', life: 3000 }
        ]);
    };

    return (
        <div>
            <Toast ref={toast} />
            <Button onClick={showMultiple} label="Multiple" className="p-button-warning" />
            <Button onClick={showSticky} label="Sticky" />
        </div>
    )
}
        `,
        typescript: `
import { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function OptionsDoc() {
    const toast = useRef(null);

    const showSticky = () => {
        toast.current.show({ severity: 'info', summary: 'Sticky Message', detail: 'Message Content', sticky: true });
    };

    const showMultiple = () => {
        toast.current.show([
            { severity: 'info', summary: 'Message 1', detail: 'Message 1 Content', life: 3000 },
            { severity: 'info', summary: 'Message 2', detail: 'Message 2 Content', life: 3000 },
            { severity: 'info', summary: 'Message 3', detail: 'Message 3 Content', life: 3000 }
        ]);
    };
    
    return (
        <div>
            <Toast ref={toast} />
            <Button onClick={showMultiple} label="Multiple" className="p-button-warning" />
            <Button onClick={showSticky} label="Sticky" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Options</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast} />
                <div className=" toast-demo">
                    <Button onClick={showMultiple} label="Multiple" className="p-button-warning" />
                    <Button onClick={showSticky} label="Sticky" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
