import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useEventListener } from '@/components/lib/hooks/Hooks';
import { classNames } from '@/components/lib/utils/Utils';
import { useEffect, useState } from 'react';

export function DocumentDoc(props) {
    const [pressed, setPressed] = useState(false);
    const [value, setValue] = useState('');

    const onKeyDown = (e) => {
        setPressed(true);

        if (e.code === 'Space') {
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

const [bindKeyUp, unbindKeyUp] = useEventListener({
    type: 'keyup',
    listener: (e) => {
        setPressed(false);
    }
});
        `,
        javascript: `
import React, { useState, useEffect } from 'react'; 
import { classNames } from 'primereact/utils';
import { useEventListener } from 'primereact/hooks';

export default function DocumentDemo() {
    const [pressed, setPressed] = useState(false);
    const [value, setValue] = useState('');

    const onKeyDown = (e) => {
        setPressed(true);

        if (e.code === 'Space') {
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
        <div className="card flex flex-column align-items-center gap-3">
            <button
                className={classNames('card border-1 surface-border border-round-md py-3 px-4 text-color font-semibold text-lg transition-all transition-duration-150', { 'shadow-1': pressed, 'shadow-5': !pressed })}
                style={{
                    background: '-webkit-linear-gradient(top, var(--surface-ground) 0%, var(--surface-card) 100%)',
                    transform: pressed ? 'translateY(5px)' : 'translateY(0)'
                }}>
                {value.toUpperCase() || 'Press a Key'}
            </button>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react'; 
import { classNames } from 'primereact/utils';
import { useEventListener } from 'primereact/hooks';

export default function DocumentDemo() {
    const [pressed, setPressed] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    const onKeyDown = (e) => {
        setPressed(true);

        if (e.code === 'Space') {
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
        <div className="card flex flex-column align-items-center gap-3">
            <button
                className={classNames('card border-1 surface-border border-round-md py-3 px-4 text-color font-semibold text-lg transition-all transition-duration-150', { 'shadow-1': pressed, 'shadow-5': !pressed })}
                style={{
                    background: '-webkit-linear-gradient(top, var(--surface-ground) 0%, var(--surface-card) 100%)',
                    transform: pressed ? 'translateY(5px)' : 'translateY(0)'
                }}>
                {value.toUpperCase() || 'Press a Key'}
            </button>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Events are attached to the document itself by default.</p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center gap-3">
                <button
                    className={classNames('card border-1 surface-border border-round-md py-3 px-4 text-color font-semibold text-lg transition-all transition-duration-150', { 'shadow-1': pressed, 'shadow-5': !pressed })}
                    style={{
                        background: '-webkit-linear-gradient(top, var(--surface-ground) 0%, var(--surface-card) 100%)',
                        transform: pressed ? 'translateY(5px)' : 'translateY(0)'
                    }}
                >
                    {value.toUpperCase() || 'Press a Key'}
                </button>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
