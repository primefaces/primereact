import { useRef } from 'react';
import { Button } from '../../../lib/button/Button';
import { Toast } from '../../../lib/toast/Toast';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function PTDoc(props) {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({
            severity: 'info',
            summary: 'Info',
            detail: 'Message Content',
            pt: {
                root: ({ index }) => ({ className: `bg-yellow-${((index > 5 && 5) || index || 1) * 100}` })
            }
        });
    };

    const code = {
        basic: `
<Toast 
    ref={toast} 
    pt={{ 
        message: ({ index }) => ({ className: \`bg-yellow-\${((index > 5 && 5) || index || 1) * 100}\` }) 
        }} 
    />
<Button onClick={show} label="Show" />
        `,
        javascript: `
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function PTDemo() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast 
            ref={toast} 
            pt={{ 
                message: ({ index }) => ({ className: \`bg-yellow-\${((index > 5 && 5) || index || 1) * 100}\` }) 
                }} 
            />
            <Button onClick={show} label="Show" />
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export default function PTDemo() {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({ severity: 'info', summary: 'Info', detail: 'Message Content' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast 
            ref={toast} 
            pt={{ 
                message: ({ index }) => ({ className: \`bg-yellow-\${((index > 5 && 5) || index || 1) * 100}\` }) 
                }} 
            />
            <Button onClick={show} label="Show" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <Toast
                    ref={toast}
                    pt={{
                        message: ({ index }) => ({ className: `bg-yellow-${((index > 5 && 5) || index || 1) * 100}` })
                    }}
                />
                <Button onClick={show} label="Show" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
