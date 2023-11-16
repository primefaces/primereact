import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { useInterval } from '@/components/lib/hooks/Hooks';
import { classNames } from '@/components/lib/utils/Utils';
import { useState } from 'react';

export function BasicDoc(props) {
    const [seconds, setSeconds] = useState(0);
    const [active, setActive] = useState(true);

    useInterval(
        () => {
            setSeconds((prevSecond) => (prevSecond === 59 ? 0 : prevSecond + 1));
        },
        1000,
        active
    );

    const code = {
        basic: `
useInterval(
    () => {
        setSeconds((prevSecond) => (prevSecond === 59 ? 0 : prevSecond + 1)); //fn
    },
    1000,   //delay (ms)
    active  //condition (when)
);
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import { useInterval } from 'primereact/hooks';
import { classNames } from 'primereact/utils';

export default function BasicDemo() {
    const [seconds, setSeconds] = useState(0);
    const [active, setActive] = useState(true);

    useInterval(
        () => {
            setSeconds((prevSecond) => (prevSecond === 59 ? 0 : prevSecond + 1));
        },
        1000,
        active
    );

    return (
        <div className="card flex flex-column align-items-center">
            <div className="mb-3 font-bold text-4xl">{seconds}</div>
            <Button className={classNames('w-8rem p-button-outlined', { 'p-button-danger': active })}
                onClick={() => setActive(!active)} label={active ? 'Stop' : 'Resume'} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import { useInterval } from 'primereact/hooks';
import { classNames } from 'primereact/utils';

export default function BasicDemo() {
    const [seconds, setSeconds] = useState<number>(0);
    const [active, setActive] = useState<boolean>(true);

    useInterval(
        () => {
            setSeconds((prevSecond) => (prevSecond === 59 ? 0 : prevSecond + 1));
        },
        1000,
        active
    );

    return (
        <div className="card flex flex-column align-items-center">
            <div className="mb-3 font-bold text-4xl">{seconds}</div>
            <Button className={classNames('w-8rem p-button-outlined', { 'p-button-danger': active })}
                onClick={() => setActive(!active)} label={active ? 'Stop' : 'Resume'} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Simple timer that is updated every second.</p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center">
                <div className="mb-3 font-bold text-4xl">{seconds}</div>
                <Button className={classNames('w-8rem p-button-outlined', { 'p-button-danger': active })} onClick={() => setActive(!active)} label={active ? 'Stop' : 'Resume'} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
