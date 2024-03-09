import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '../../../../components/lib/button/Button';
import { useCounter } from '../../../../components/lib/hooks/Hooks';

export function BasicDoc(props) {
    const { count, increment, decrement, reset } = useCounter(0);

    const code = {
        basic: `
<span className="font-bold text-4xl mb-5">{count}</span>
<div className="flex flex-wrap gap-3">
    <Button icon="pi pi-plus" className="p-button-outlined p-button-rounded p-button-success" onClick={increment}></Button>
    <Button icon="pi pi-minus" className="p-button-outlined p-button-rounded" onClick={decrement}></Button>
    <Button icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger" onClick={reset}></Button>
</div>
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import { useCounter } from 'primereact/hooks';

export default function BasicDemo() {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div className="card flex flex-column align-items-center">
            <span className="font-bold text-4xl mb-5">{count}</span>
            <div className="flex flex-wrap gap-3">
                <Button icon="pi pi-plus" className="p-button-outlined p-button-rounded p-button-success" onClick={increment}></Button>
                <Button icon="pi pi-minus" className="p-button-outlined p-button-rounded" onClick={decrement}></Button>
                <Button icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger" onClick={reset}></Button>
            </div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import { useCounter } from 'primereact/hooks';

export default function BasicDemo() {
    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div className="card flex flex-column align-items-center">
            <span className="font-bold text-4xl mb-5">{count}</span>
            <div className="flex flex-wrap gap-3">
                <Button icon="pi pi-plus" className="p-button-outlined p-button-rounded p-button-success" onClick={increment}></Button>
                <Button icon="pi pi-minus" className="p-button-outlined p-button-rounded" onClick={decrement}></Button>
                <Button icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger" onClick={reset}></Button>
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
                    Simple counter with <i>increment</i>, <i>decrement</i> and <i>reset</i> functions.
                </p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center">
                <span className="font-bold text-4xl mb-5">{count}</span>
                <div className="flex flex-wrap gap-3">
                    <Button icon="pi pi-plus" className="p-button-outlined p-button-rounded p-button-success" onClick={increment}></Button>
                    <Button icon="pi pi-minus" className="p-button-outlined p-button-rounded" onClick={decrement}></Button>
                    <Button icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger" onClick={reset}></Button>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
