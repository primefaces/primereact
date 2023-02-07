/* eslint-disable no-console */
import React, { useState } from 'react';
import { useUpdateEffect } from '../../../lib/hooks/Hooks';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';

export function BasicDoc(props) {
    const [count, setCount] = useState(0);

    useUpdateEffect(() => {
        console.log('Update effect triggered! count: ', count);
    }, [count]);

    const code = {
        basic: `
<h3>Count: {count}</h3>
<Button label="Click" onClick={() => setCount(count + 1)} />
        `,
        javascript: `
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { useUpdateEffect } from 'primereact/hooks';

export default function BasicDemo() {
    const [count, setCount] = useState(0);

    useUpdateEffect(() => {
        console.log('Update effect triggered! count: ', count);
    }, [count]);

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <h3>Count: {count}</h3>
            <Button label="Click" onClick={() => setCount(count + 1)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { useUpdateEffect } from 'primereact/hooks';

export default function BasicDemo() {
    const [count, setCount] = useState(0);

    useUpdateEffect(() => {
        console.log('Update effect triggered! count: ', count);
    }, [count]);

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <h3>Count: {count}</h3>
            <Button label="Click" onClick={() => setCount(count + 1)} />
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
                <h3>Count: {count}</h3>
                <Button label="Click" onClick={() => setCount(count + 1)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
