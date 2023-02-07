import React, { useState } from 'react';
import { usePrevious } from '../../../lib/hooks/Hooks';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';

export function CounterPreviousDoc(props) {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    const code = {
        basic: `
<p>Current count: {count}</p>
<p>Previous count: {prevCount}</p>
<Button label="Increment" onClick={() => setCount(count + 1)} />
        `,
        javascript: `
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { usePrevious } from 'primereact/hooks';

export default function CounterDemo() {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <p>Current count: {count}</p>
            <p>Previous count: {prevCount}</p>
            <Button label="Increment" onClick={() => setCount(count + 1)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { usePrevious } from 'primereact/hooks';

export default function CounterDemo() {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);
    
    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <p>Current count: {count}</p>
            <p>Previous count: {prevCount}</p>
            <Button label="Increment" onClick={() => setCount(count + 1)} />
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
                <p>Current count: {count}</p>
                <p>Previous count: {prevCount}</p>
                <Button label="Increment" onClick={() => setCount(count + 1)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
