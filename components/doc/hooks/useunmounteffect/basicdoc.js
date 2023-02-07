/* eslint-disable no-console */
import React, { useState } from 'react';
import { useUnmountEffect, useMountEffect } from '../../../lib/hooks/Hooks';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';

export function BasicDoc(props) {
    const [isHidden, setIsHidden] = useState(false);

    const BlueBox = () => {
        useMountEffect(() => {
            console.log('Mounted');
        });

        useUnmountEffect(() => {
            console.log('Unmounted');
        });

        return <div className="w-2rem h-2rem border-round bg-blue-500 mb-2"></div>;
    };

    const code = {
        basic: `
<div className="card flex flex-column justify-content-center align-items-center gap-2">
    {!isHidden ? <BlueBox /> : <div className="w-2rem h-2rem mb-2">&nbsp;</div>}
    <Button label={isHidden ? 'Mount' : 'Unmount'} onClick={() => setIsHidden((prevIsHidden) => !prevIsHidden)} />
</div>
        `,
        javascript: `
import React, { useState } from 'react'; 
import { Button } from 'primereact/button';
import { useUnmountEffect, useMountEffect } from 'primereact/hooks';

export default function BasicDemo() {
    const [isHidden, setIsHidden] = useState(false);

    const BlueBox = () => {
        useMountEffect(() => {
            console.log('Mounted');
        });

        useUnmountEffect(() => {
            console.log('Unmounted');
        });

        return <div className="w-2rem h-2rem border-round bg-blue-500 mb-2"></div>;
    };

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            {!isHidden ? <BlueBox /> : <div className="w-2rem h-2rem mb-2">&nbsp;</div>}
            <Button label={isHidden ? 'Mount' : 'Unmount'} onClick={() => setIsHidden((prevIsHidden) => !prevIsHidden)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react'; 
import { Button } from 'primereact/button';
import { useUnmountEffect, useMountEffect } from 'primereact/hooks';

export default function BasicDemo() {
    const [isHidden, setIsHidden] = useState(false);

    const BlueBox = () => {
        useMountEffect(() => {
            console.log('Mounted');
        });

        useUnmountEffect(() => {
            console.log('Unmounted');
        });

        return <div className="w-2rem h-2rem border-round bg-blue-500 mb-2"></div>;
    };

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            {!isHidden ? <BlueBox /> : <div className="w-2rem h-2rem mb-2">&nbsp;</div>}
            <Button label={isHidden ? 'Mount' : 'Unmount'} onClick={() => setIsHidden((prevIsHidden) => !prevIsHidden)} />
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
            <div className="card flex flex-column justify-content-center align-items-center gap-2">
                {!isHidden ? <BlueBox /> : <div className="w-2rem h-2rem mb-2">&nbsp;</div>}
                <Button label={isHidden ? 'Mount' : 'Unmount'} onClick={() => setIsHidden((prevIsHidden) => !prevIsHidden)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
