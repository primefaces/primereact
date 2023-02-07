import React from 'react';
import { useStorage } from '../../../lib/hooks/Hooks';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';

export function CounterDoc(props) {
    const [count, setCount] = useStorage(0, 'count');

    const handleCounter = () => {
        const newCount = count++;

        setCount(newCount);
    };

    const code = {
        basic: `
<span className='text-lg field '>{count}</span>
<Button label="Click Me!" onClick={handleCounter}></Button>
        `,
        javascript: `
import React from 'react';
import { Button } from 'primereact/button';
import { useStorage } from 'primereact/hooks';

export default function CounterDemo() {
    const [count, setCount] = useStorage(0, 'count');

    const handleCounter = () => {
        const newCount = count++;

        setCount(newCount);
    };

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <span className='text-lg field '>{count}</span>
            <Button label="Click Me!" onClick={handleCounter}></Button>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { useStorage } from 'primereact/hooks';

export default function CounterDemo() {
    const [count, setCount] = useStorage(0, 'count');

    const handleCounter = () => {
        const newCount = count++;

        setCount(newCount);
    };
    
    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <span className='text-lg field '>{count}</span>
            <Button label="Click Me!" onClick={handleCounter}></Button>
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
                <span className="text-lg field ">{count}</span>
                <Button label="Click Me!" onClick={handleCounter}></Button>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
