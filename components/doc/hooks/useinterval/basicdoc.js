import React, { useState } from 'react';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Button } from '../../../lib/button/Button';
import { useInterval } from '../../../lib/hooks/Hooks';
import { classNames } from '../../../lib/utils/Utils';

export function BasicDoc(props) {
    const [second, setSecond] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useInterval(
        () => {
            setSecond((prevSecond) => (prevSecond === 59 ? 0 : prevSecond + 1));
        },
        1000,
        isRunning
    );

    const code = {
        basic: `
useInterval(
    () => {
        setSecond((prevSecond) => (prevSecond === 59 ? 0 : prevSecond + 1)); //fn
    },
    1000, //delay (ms)
    isRunning //condition (when)
);
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import { useInterval } from 'primereact/hooks';

export default function BasicDemo() {
    const [second, setSecond] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(true);
    
    useInterval(
        () => {
            setSecond((prevSecond) => (prevSecond === 59 ? 0 : prevSecond + 1));
        },
        1000,
        isRunning
    );

    const secondText = \`00:\${second.toString().length === 2 ? second : '0' + second}\`;

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <div className="card flex justify-content-center align-items-center p-2 border-solid surface-border border-2 text-xl text-color">
                <i className="text-500 pi pi-clock mr-2"></i>
                <span className="px-2">{secondText}</span>
            </div>
            <Button className={classNames({ 'p-button-danger': isRunning })} onClick={() => setIsRunning((prevIsRunning) => !prevIsRunning)}>
                {isRunning ? 'Stop' : 'Run'}
            </Button>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import { useFavicon } from 'primereact/hooks';

export default function BasicDemo() {
    const [second, setSecond] = React.useState(0);
    const [isRunning, setIsRunning] = React.useState(true);
    
    useInterval(
        () => {
            setSecond((prevSecond) => (prevSecond === 59 ? 0 : prevSecond + 1));
        },
        1000,
        isRunning
    );

    const secondText = \`00:\${second.toString().length === 2 ? second : '0' + second}\`;

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <div className="card flex justify-content-center align-items-center p-2 border-solid surface-border border-2 text-xl text-color">
                <i className="text-500 pi pi-clock mr-2"></i>
                <span className="px-2">{secondText}</span>
            </div>
            <Button className={classNames({ 'p-button-danger': isRunning })} onClick={() => setIsRunning((prevIsRunning) => !prevIsRunning)}>
                {isRunning ? 'Stop' : 'Run'}
            </Button>
        </div>
    )
}
        `
    };

    const secondText = `00:${second.toString().length === 2 ? second : '0' + second}`;

    return (
        <>
            <DocSectionText {...props}>
                {/**
                 * @todo Add a description
                 */}
            </DocSectionText>
            <div className="card flex flex-column justify-content-center align-items-center">
                <div className="card flex justify-content-center align-items-center p-2 border-solid surface-border border-2 text-xl text-color">
                    <i className="text-500 pi pi-clock mr-2"></i>
                    <span className="px-2">{secondText}</span>
                </div>
                <Button className={classNames({ 'p-button-danger': isRunning })} onClick={() => setIsRunning((prevIsRunning) => !prevIsRunning)}>
                    {isRunning ? 'Stop' : 'Run'}
                </Button>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
