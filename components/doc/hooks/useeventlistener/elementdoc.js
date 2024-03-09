import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { useEventListener } from '@/components/lib/hooks/Hooks';
import { useEffect, useRef, useState } from 'react';

export function ElementDoc(props) {
    const [hover, setHover] = useState(false);
    const elementRef = useRef(null);

    const [bindMouseEnterListener, unbindMouseEnterListener] = useEventListener({
        target: elementRef,
        type: 'mouseenter',
        listener: () => {
            setHover(true);
        }
    });

    const [bindMouseLeaveListener, unbindMouseLeaveListener] = useEventListener({
        target: elementRef,
        type: 'mouseleave',
        listener: () => {
            setHover(false);
        }
    });

    useEffect(() => {
        bindMouseEnterListener();
        bindMouseLeaveListener();

        return () => {
            unbindMouseEnterListener();
            unbindMouseLeaveListener();
        };
    }, [bindMouseEnterListener, bindMouseLeaveListener, unbindMouseEnterListener, unbindMouseLeaveListener]);

    const code = {
        basic: `
const [hover, setHover] = useState(false);
const elementRef = useRef(null);

const [bindMouseEnterListener, unbindMouseEnterListener] = useEventListener({
    target: elementRef,
    type: 'mouseenter',
    listener: () => {
        setHover(true);
    }
});

const [bindMouseLeaveListener, unbindMouseLeaveListener] = useEventListener({
    target: elementRef,
    type: 'mouseleave',
    listener: () => {
        setHover(false);
    }
});
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { useEventListener } from 'primereact/hooks';

export default function ElementDemo() {
    const [hover, setHover] = useState(false);
    const elementRef = useRef(null);

    const [bindMouseEnterListener, unbindMouseEnterListener] = useEventListener({
        target: elementRef,
        type: 'mouseenter',
        listener: () => {
            setHover(true);
        }
    });

    const [bindMouseLeaveListener, unbindMouseLeaveListener] = useEventListener({
        target: elementRef,
        type: 'mouseleave',
        listener: () => {
            setHover(false);
        }
    });

    useEffect(() => {
        bindMouseEnterListener();
        bindMouseLeaveListener();

        return () => {
            unbindMouseEnterListener();
            unbindMouseLeaveListener();
        };
    }, [bindMouseEnterListener, bindMouseLeaveListener, unbindMouseEnterListener, unbindMouseLeaveListener]);

    return (
        <div className="card flex justify-content-center">
            <div ref={elementRef} className="border-round border-2 border-dashed surface-border text-xl p-5 w-15rem text-center">
                {hover ? 'Hovered' : 'Hover Me'}
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { useEventListener } from 'primereact/hooks';

export default function ElementDemo() {
    const [hover, setHover] = useState<boolean>(false);
    const elementRef = useRef<string>(null);

    const [bindMouseEnterListener, unbindMouseEnterListener] = useEventListener({
        target: elementRef,
        type: 'mouseenter',
        listener: () => {
            setHover(true);
        }
    });

    const [bindMouseLeaveListener, unbindMouseLeaveListener] = useEventListener({
        target: elementRef,
        type: 'mouseleave',
        listener: () => {
            setHover(false);
        }
    });

    useEffect(() => {
        bindMouseEnterListener();
        bindMouseLeaveListener();

        return () => {
            unbindMouseEnterListener();
            unbindMouseLeaveListener();
        };
    }, [bindMouseEnterListener, bindMouseLeaveListener, unbindMouseEnterListener, unbindMouseLeaveListener]);

    return (
        <div className="card flex justify-content-center">
            <div ref={elementRef} className="border-round border-2 border-dashed surface-border text-xl p-5 w-15rem text-center">
                {hover ? 'Hovered' : 'Hover Me'}
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The element to bind and unbind the events is defined with the <i>target</i> option.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div ref={elementRef} className="border-round border-2 border-dashed surface-border text-xl p-5 w-15rem text-center">
                    {hover ? 'Hovered' : 'Hover Me'}
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
