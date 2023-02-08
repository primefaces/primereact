import React, { useState, useEffect } from 'react';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { useEventListener } from '../../../lib/hooks/Hooks';
import { classNames } from '../../../lib/utils/Utils';

export function BasicDoc(props) {
    const [pressed, setPressed] = useState(false);
    const [value, setValue] = useState('');

    const onKeyDown = (e) => {
        setPressed(true);

        if (e.code == 'Space') {
            e.preventDefault();
            setValue('space');

            return;
        }

        setValue(e.key);
    };

    const [bindKeyDown, unbindKeyDown] = useEventListener({
        type: 'keydown',
        listener: (e) => {
            onKeyDown(e);
        }
    });

    const [bindKeyUp, unbindKeyUp] = useEventListener({
        type: 'keyup',
        listener: (e) => {
            setPressed(false);
        }
    });

    useEffect(() => {
        bindKeyDown();
        bindKeyUp();

        return () => {
            unbindKeyDown();
            unbindKeyUp();
        };
    }, [bindKeyDown, bindKeyUp, unbindKeyDown, unbindKeyUp]);

    const code = {
        basic: `
const [bindKeyDown, unbindKeyDown] = useEventListener({
    type: 'keydown',
    listener: (e) => {
        onKeyDown(e);
    }
});
        `,
        javascript: `
import React, { useState, useEffect } from 'react'; 
import { classNames } from 'primereact/utils';
import { useEventListener } from 'primereact/hooks';

export default function BasicDemo() {
    const [pressed, setPressed] = useState(false);
    const [value, setValue] = useState('');

    const onKeyDown = (e) => {
        setPressed(true);

        if (e.code == 'Space') {
            setValue('space');

            return;
        }

        setValue(e.key);
    };

    const [bindKeyDown, unbindKeyDown] = useEventListener({
        type: 'keydown',
        listener: (e) => {
            onKeyDown(e);
        }
    });

    const [bindKeyUp, unbindKeyUp] = useEventListener({
        type: 'keyup',
        listener: (e) => {
            setPressed(false);
        }
    });

    useEffect(() => {
        bindKeyDown();
        bindKeyUp();

        return () => {
            unbindKeyDown();
            unbindKeyUp();
        };
    }, [bindKeyDown, bindKeyUp, unbindKeyDown, unbindKeyUp]);

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <button
                className={classNames('card border-300 border-1 border-round-md py-3 px-4 text-color font-semibold text-lg', { 'shadow-1': pressed, 'shadow-5': !pressed })}
                style={{
                    background: '-webkit-linear-gradient(top, var(--surface-100) 0%, var(--surface-300) 80%, var(--surface-400) 100%)',
                    transform: pressed ? 'translateY(5px)' : 'translateY(0)'
                }}
            >
                {value.toUpperCase() || <i className="pi pi-arrow-down font-semibold"></i>}
            </button>
            {!value ? <small className="text-md font-semibold">Press a key</small> : <small className="font-semibold">&nbsp;</small>}
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react'; 
import { classNames } from 'primereact/utils';
import { useEventListener } from 'primereact/hooks';

export default function BasicDemo() {
    const [pressed, setPressed] = useState(false);
    const [value, setValue] = useState('');

    const onKeyDown = (e) => {
        setPressed(true);

        if (e.code == 'Space') {
            setValue('space');

            return;
        }

        setValue(e.key);
    };

    const [bindKeyDown, unbindKeyDown] = useEventListener({
        type: 'keydown',
        listener: (e) => {
            onKeyDown(e);
        }
    });

    const [bindKeyUp, unbindKeyUp] = useEventListener({
        type: 'keyup',
        listener: (e) => {
            setPressed(false);
        }
    });

    useEffect(() => {
        bindKeyDown();
        bindKeyUp();

        return () => {
            unbindKeyDown();
            unbindKeyUp();
        };
    }, [bindKeyDown, bindKeyUp, unbindKeyDown, unbindKeyUp]);

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <button
                className={classNames('card border-300 border-1 border-round-md py-3 px-4 text-color font-semibold text-lg', { 'shadow-1': pressed, 'shadow-5': !pressed })}
                style={{
                    background: '-webkit-linear-gradient(top, var(--surface-100) 0%, var(--surface-300) 80%, var(--surface-400) 100%)',
                    transform: pressed ? 'translateY(5px)' : 'translateY(0)'
                }}
            >
                {value.toUpperCase() || <i className="pi pi-arrow-down font-semibold"></i>}
            </button>
            {!value ? <small className="text-md font-semibold">Press a key</small> : <small className="font-semibold">&nbsp;</small>}
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
                <button
                    className={classNames('card border-300 border-1 border-round-md py-3 px-4 text-color font-semibold text-lg', { 'shadow-1': pressed, 'shadow-5': !pressed })}
                    style={{
                        background: '-webkit-linear-gradient(top, var(--surface-100) 0%, var(--surface-300) 80%, var(--surface-400) 100%)',
                        transform: pressed ? 'translateY(5px)' : 'translateY(0)'
                    }}
                >
                    {value.toUpperCase() || <i className="pi pi-arrow-down font-semibold"></i>}
                </button>
                {!value ? <small className="text-md font-semibold">Press a key</small> : <small className="font-semibold">&nbsp;</small>}
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
