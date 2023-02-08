import React, { useState } from 'react';
import { useTimeout } from '../../../lib/hooks/Hooks';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';

export function BasicDoc(props) {
    const [showButton, setShowButton] = useState(true);

    const [clearTimeout] = useTimeout(() => {
        setShowButton(false);
    }, 5000);

    const code = {
        basic: `
<div>{showButton ? <Button label="I'm visible for 5000ms" /> : 'You can no longer see this button'}</div>
        `,
        javascript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';
import { useTimeout } from 'primereact/hooks';

export default function BasicDemo() {

    const [showButton, setShowButton] = useState(true);

    const [clearTimeout] = useTimeout(() => {
        setShowButton(false);
    }, 5000);

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <div>{showButton ? <Button label="I'm visible for 5000ms" /> : 'You can no longer see this button'}</div>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from 'primereact/inputtext';
import { useTimeout } from 'primereact/hooks';

export default function BasicDemo() {

    const [showButton, setShowButton] = useState(true);

    const [clearTimeout] = useTimeout(() => {
        setShowButton(false);
    }, 5000);

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <div>{showButton ? <Button label="I'm visible for 5000ms" /> : 'You can no longer see this button'}</div>
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
                <div>{showButton ? <Button label="I'm visible for 5000ms" /> : 'You can no longer see this button'}</div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
