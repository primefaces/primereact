import React from 'react';
import { Button } from '../../../../components/lib/button/Button';
import { useCounter } from '../../../../components/lib/hooks/Hooks';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function BasicDoc(props) {
    const { count, increment, decrement, reset } = useCounter(10);

    const code = {
        basic: `
<h2>Count: {count}</h2>
<div className="flex">
    <Button label="Increment" className="ml-2" onClick={increment}></Button>
    <Button label="Decrement" className="ml-2" onClick={decrement}></Button>
    <Button label="Reset" className="ml-2" onClick={reset}></Button>
</div>
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import { useCounter } from 'primereact/hooks';

export default function BasicDemo() {

    const { count, increment, decrement, reset } = useCounter(10);

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <h2>Count: {count}</h2>
            <div className="flex">
                <Button label="Increment" className="ml-2" onClick={increment}></Button>
                <Button label="Decrement" className="ml-2" onClick={decrement}></Button>
                <Button label="Reset" className="ml-2" onClick={reset}></Button>
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

    const { count, increment, decrement, reset } = useCounter(10);
    
    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <h2>Count: {count}</h2>
            <div className="flex">
                <Button label="Increment" className="ml-2" onClick={increment}></Button>
                <Button label="Decrement" className="ml-2" onClick={decrement}></Button>
                <Button label="Reset" className="ml-2" onClick={reset}></Button>
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/**
                 * @todo Add a description
                 */}
            </DocSectionText>
            <div className="card flex flex-column justify-content-center align-items-center">
                <h2>Count: {count}</h2>
                <div className="flex">
                    <Button label="Increment" className="ml-2" onClick={increment}></Button>
                    <Button label="Decrement" className="ml-2" onClick={decrement}></Button>
                    <Button label="Reset" className="ml-2" onClick={reset}></Button>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
