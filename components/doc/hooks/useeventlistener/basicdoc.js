import React, { useState, useEffect, useRef } from 'react';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { useEventListener } from '../../../lib/hooks/Hooks';
import { classNames } from '../../../lib/utils/Utils';
import { Button } from '../../../lib/button/Button';

export function BasicDoc(props) {
    const [isClicked, setIsClicked] = useState(false);
    const btnRef = useRef(null);

    const [bindMouseUpListener, unbindMouseUpListener] = useEventListener({
        target: btnRef,
        type: 'mouseup',
        listener: () => {
            setIsClicked(false);
        }
    });

    const [bindMouseDownListener, unbindMouseDownListener] = useEventListener({
        target: btnRef,
        type: 'mousedown',
        listener: () => {
            setIsClicked(true);
        }
    });

    useEffect(() => {
        bindMouseUpListener();
        bindMouseDownListener();

        return () => {
            unbindMouseUpListener();
            unbindMouseDownListener();
        };
    }, [bindMouseDownListener, bindMouseUpListener, unbindMouseDownListener, unbindMouseUpListener]);

    const code = {
        basic: `
const btnRef = useRef(null); //Target element reference
const [bindMouseUpListener, unbindMouseUpListener] = useEventListener({
    target: btnRef,
    type: 'mouseup',
    listener: () => {
        setIsClicked(false);
    }
});

const [bindMouseDownListener, unbindMouseDownListener] = useEventListener({
    target: btnRef,
    type: 'mousedown',
    listener: () => {
        setIsClicked(true);
    }
});
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react'; 
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { useEventListener } from 'primereact/hooks';

export default function BasicDemo() {
    const [isClicked, setIsClicked] = useState(false);
    const btnRef = useRef(null);

    const [bindMouseUpListener, unbindMouseUpListener] = useEventListener({
        target: btnRef,
        type: 'mouseup',
        listener: () => {
            setIsClicked(false);
        }
    });

    const [bindMouseDownListener, unbindMouseDownListener] = useEventListener({
        target: btnRef,
        type: 'mousedown',
        listener: () => {
            setIsClicked(true);
        }
    });

    useEffect(() => {
        bindMouseUpListener();
        bindMouseDownListener();

        return () => {
            unbindMouseUpListener();
            unbindMouseDownListener();
        };
    }, [bindMouseDownListener, bindMouseUpListener, unbindMouseDownListener, unbindMouseUpListener]);

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <Button ref={btnRef} label="Click Me!" className={classNames('border-round mb-2 cursor-pointer', { ' p-button-success': isClicked, 'p-button-primary': !isClicked })} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { useEventListener } from 'primereact/hooks';

export default function BasicDemo() {
    const [isClicked, setIsClicked] = useState(false);
    const btnRef = useRef(null);

    const [bindMouseUpListener, unbindMouseUpListener] = useEventListener({
        target: btnRef,
        type: 'mouseup',
        listener: () => {
            setIsClicked(false);
        }
    });

    const [bindMouseDownListener, unbindMouseDownListener] = useEventListener({
        target: btnRef,
        type: 'mousedown',
        listener: () => {
            setIsClicked(true);
        }
    });

    useEffect(() => {
        bindMouseUpListener();
        bindMouseDownListener();

        return () => {
            unbindMouseUpListener();
            unbindMouseDownListener();
        };
    }, [bindMouseDownListener, bindMouseUpListener, unbindMouseDownListener, unbindMouseUpListener]);

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <Button ref={btnRef} label="Click Me!" className={classNames('border-round mb-2 cursor-pointer', { ' p-button-success': isClicked, 'p-button-primary': !isClicked })} />
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
                <Button ref={btnRef} label="Click Me!" className={classNames('border-round mb-2 cursor-pointer', { ' p-button-success': isClicked, 'p-button-primary': !isClicked })} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
