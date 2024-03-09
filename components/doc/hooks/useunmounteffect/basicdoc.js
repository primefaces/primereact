import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { useUnmountEffect } from '@/components/lib/hooks/Hooks';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef, useState } from 'react';

export function BasicDoc(props) {
    const [hidden, setHidden] = useState(false);
    const toast = useRef(null);

    const DynamicBox = () => {
        useUnmountEffect(() => {
            toast.current && toast.current.show({ severity: 'info', summary: 'Unmounted' });
        });

        return <div className="w-8rem h-8rem border-round bg-primary border-1 border-primary mb-3 flex justify-content-center align-items-center">Mounted</div>;
    };

    const code = {
        basic: `
useUnmountEffect(() => {
    toast.current && toast.current.show({ severity: 'info', summary: 'Unmounted' });
});
        `,
        javascript: `
import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { useUnmountEffect, useMountEffect } from 'primereact/hooks';

export default function BasicDemo() {
    const [hidden, setHidden] = useState(false);
    const toast = useRef(null);

    const DynamicBox = () => {
        useUnmountEffect(() => {
            toast.current && toast.current.show({ severity: 'info', summary: 'Unmounted' });
        });

        return <div className="w-8rem h-8rem border-round bg-primary border-1 border-primary mb-3 flex justify-content-center align-items-center">Mounted</div>;
    };

    return (
        <>
            <Toast ref={toast} />
            <div className="card flex flex-column align-items-center">
                {!hidden ? <DynamicBox /> : <div className="w-8rem h-8rem border-round surface-card border-1 surface-border border-dashed mb-3 flex justify-content-center align-items-center">Unmounted</div>}
                <Button label={hidden ? 'Mount' : 'Unmount'} onClick={() => setHidden(() => !hidden)} className="p-button-outlined w-10rem" />
            </div>
        </>
    )
}
        `,
        typescript: `
import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { useUnmountEffect, useMountEffect } from 'primereact/hooks';

export default function BasicDemo() {
    const [hidden, setHidden] = useState<boolean>(false);
    const toast = useRef(null);

    const DynamicBox = () => {
        useUnmountEffect(() => {
            toast.current && toast.current.show({ severity: 'info', summary: 'Unmounted' });
        });

        return <div className="w-8rem h-8rem border-round bg-primary border-1 border-primary mb-3 flex justify-content-center align-items-center">Mounted</div>;
    };

    return (
        <>
            <Toast ref={toast} />
            <div className="card flex flex-column align-items-center">
                {!hidden ? <DynamicBox /> : <div className="w-8rem h-8rem border-round surface-card border-1 surface-border border-dashed mb-3 flex justify-content-center align-items-center">Unmounted</div>}
                <Button label={hidden ? 'Mount' : 'Unmount'} onClick={() => setHidden(() => !hidden)} className="p-button-outlined w-10rem" />
            </div>
        </>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>A messages is displayed at browser console when the box is unmounted.</p>
            </DocSectionText>
            <Toast ref={toast} />
            <div className="card flex flex-column align-items-center">
                {!hidden ? <DynamicBox /> : <div className="w-8rem h-8rem border-round surface-card border-1 surface-border border-dashed mb-3 flex justify-content-center align-items-center">Unmounted</div>}
                <Button label={hidden ? 'Mount' : 'Unmount'} onClick={() => setHidden(() => !hidden)} className="p-button-outlined w-10rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
