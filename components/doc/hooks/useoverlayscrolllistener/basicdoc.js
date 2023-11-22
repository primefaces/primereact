import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { useOverlayScrollListener } from '@/components/lib/hooks/Hooks';
import { useEffect, useRef, useState } from 'react';

export function BasicDoc(props) {
    const [visible, setVisible] = useState(false);
    const buttonRef = useRef(null);

    const handleScroll = () => {
        setVisible(false);
    };

    const [bindOverlayScrollListener, unbindOverlayScrollListener] = useOverlayScrollListener({
        target: buttonRef.current,
        listener: handleScroll,
        options: { passive: true },
        when: visible
    });

    useEffect(() => {
        bindOverlayScrollListener();

        return () => {
            unbindOverlayScrollListener();
        };
    }, [bindOverlayScrollListener, unbindOverlayScrollListener]);

    const code = {
        basic: `
const [bindOverlayScrollListener, unbindOverlayScrollListener] = useOverlayScrollListener({
    target: buttonRef.current,
    listener: handleScroll,
    options: { passive: true },
    when: visible
});
        `,
        javascript: `
import React, { useState, useRef, useEffect } from 'react'; 
import { Button } from 'primereact/button';
import { useOverlayScrollListener } from 'primereact/hooks';

export default function BasicDemo() {
    const [visible, setVisible] = useState(false);
    const buttonRef = useRef(null);

    const handleScroll = () => {
        setVisible(false);
    };

    const [bindOverlayScrollListener, unbindOverlayScrollListener] = useOverlayScrollListener({
        target: buttonRef.current,
        listener: handleScroll,
        options: { passive: true },
        when: visible
    });

    useEffect(() => {
        bindOverlayScrollListener();

        return () => {
            unbindOverlayScrollListener();
        };
    }, [bindOverlayScrollListener, unbindOverlayScrollListener]);

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
                <div className="w-20rem h-15rem p-3 surface-border border-round border-1 overflow-auto">
                    <div className="h-30rem">
                        <div className="relative">
                            <Button ref={buttonRef} onClick={() => setVisible(true)} label="Show" />
                            {visible ? <div className="absolute border-round shadow-2 p-5 surface-overlay z-2 white-space-nowrap scalein origin-top">Popup Content</div> : null}
                        </div>
                    </div>
                </div>
            </div>
    )
}
        `,
        typescript: `
import React, { useState, useRef, useEffect } from 'react'; 
import { Button } from 'primereact/button';
import { useOverlayScrollListener } from 'primereact/hooks';

export default function BasicDemo() {
    const [visible, setVisible] = useState(false);
    const buttonRef = useRef(null);

    const handleScroll = () => {
        setVisible(false);
    };

    const [bindOverlayScrollListener, unbindOverlayScrollListener] = useOverlayScrollListener({
        target: buttonRef.current,
        listener: handleScroll,
        options: { passive: true },
        when: visible
    });

    useEffect(() => {
        bindOverlayScrollListener();

        return () => {
            unbindOverlayScrollListener();
        };
    }, [bindOverlayScrollListener, unbindOverlayScrollListener]);

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
                <div className="w-20rem h-15rem p-3 surface-border border-round border-1 overflow-auto">
                    <div className="h-30rem">
                        <div className="relative">
                            <Button ref={buttonRef} onClick={() => setVisible(true)} label="Show" />
                            {visible ? <div className="absolute border-round shadow-2 p-5 surface-overlay z-2 white-space-nowrap scalein origin-top">Popup Content</div> : null}
                        </div>
                    </div>
                </div>
            </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>When any ancestor component of the button is scrolled, the overlay gets hidden. This is especially useful to avoid alignment issues when the overlay is attached to the document body via a Portal.</p>
            </DocSectionText>
            <div className="card flex flex-column justify-content-center align-items-center gap-2">
                <div className="w-20rem h-15rem p-3 surface-border border-round border-1 overflow-auto">
                    <div className="h-30rem">
                        <div className="relative">
                            <Button ref={buttonRef} onClick={() => setVisible(true)} label="Show" />
                            {visible ? <div className="absolute border-round shadow-2 p-5 surface-overlay z-2 white-space-nowrap scalein origin-top">Popup Content</div> : null}
                        </div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
