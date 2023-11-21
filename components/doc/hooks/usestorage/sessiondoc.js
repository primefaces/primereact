import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { useSessionStorage } from '@/components/lib/hooks/Hooks';

export function SessionDoc(props) {
    const [count, setCount] = useSessionStorage(0, 'count');

    const code = {
        basic: `
const [count, setCount] = useSessionStorage(0, 'count');
        `,
        javascript: `
import React from 'react';
import { Button } from 'primereact/button';
import { useSessionStorage } from 'primereact/hooks';

export default function SessionDoc() {
    const [count, setCount] = useSessionStorage(0, 'count');
    
    return (
        <div className="card flex flex-column align-items-center">
            <span className="font-bold text-4xl mb-5">{count}</span>
            <div className="flex flex-wrap gap-3">
                <Button icon="pi pi-plus" className="p-button-outlined p-button-rounded p-button-success" onClick={() => setCount(count + 1)}></Button>
                <Button icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger" onClick={() => setCount(0)}></Button>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { Button } from 'primereact/button';
import { useSessionStorage } from 'primereact/hooks';

export default function SessionDoc() {
    const [count, setCount] = useSessionStorage(0, 'count');
    
    return (
        <div className="card flex flex-column align-items-center">
            <span className="font-bold text-4xl mb-5">{count}</span>
            <div className="flex flex-wrap gap-3">
                <Button icon="pi pi-plus" className="p-button-outlined p-button-rounded p-button-success" onClick={() => setCount(count + 1)}></Button>
                <Button icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger" onClick={() => setCount(0)}></Button>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Close the browser and visit this page again to view the persisted value.</p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center">
                <span className="font-bold text-4xl mb-5">{count}</span>
                <div className="flex flex-wrap gap-3">
                    <Button icon="pi pi-plus" className="p-button-outlined p-button-rounded p-button-success" onClick={() => setCount(count + 1)}></Button>
                    <Button icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger" onClick={() => setCount(0)}></Button>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
