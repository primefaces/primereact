import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { useClickOutside } from '@/components/lib/hooks/Hooks';
import { useRef, useState } from 'react';

export function BasicDoc(props) {
    const [visible, setVisible] = useState(false);
    const overlayRef = useRef(null);

    useClickOutside(overlayRef, () => {
        setVisible(false);
    });

    const code = {
        basic: `
<div className="relative">
    <Button onClick={() => setVisible(true)} label="Show" />
    {visible ? (
        <div ref={overlayRef} className="absolute border-round shadow-2 p-5 surface-overlay z-2 white-space-nowrap scalein origin-top">
            Popup Content
        </div>
    ) : null}
</div>  
        `,
        javascript: `
import React, { useState, useRef } from 'react'; 
import { Button } from 'primereact/button';
import { useClickOutside } from 'primereact/hooks';

export default function BasicDemo() {
    const [visible, setVisible] = useState(false);
    const overlayRef = useRef(null);

    useClickOutside(overlayRef, () => {
        setVisible(false);
    });

    return (
        <div className="relative">
            <Button onClick={() => setVisible(true)} label="Show" />
            {visible ? (
                <div ref={overlayRef} className="absolute border-round shadow-2 p-5 surface-overlay z-2 white-space-nowrap scalein origin-top">
                    Popup Content
                </div>
            ) : null}
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { useClickOutside } from 'primereact/hooks';

export default function BasicDemo() {
    const [visible, setVisible] = useState<boolean>(false);
    const overlayRef = useRef(null);

    useClickOutside(overlayRef, () => {
        setVisible(false);
    });

    return (
        <div className="relative">
            <Button onClick={() => setVisible(true)} label="Show" />
            {visible ? (
                <div ref={overlayRef} className="absolute border-round shadow-2 p-5 surface-overlay z-2 white-space-nowrap scalein origin-top">
                    Popup Content
                </div>
            ) : null}
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Click the button to display a popup and click outside to hide it.</p>
            </DocSectionText>

            <div className="card flex justify-content-center">
                <div className="relative">
                    <Button onClick={() => setVisible(true)} label="Show" />
                    {visible ? (
                        <div ref={overlayRef} className="absolute border-round shadow-2 p-5 surface-overlay z-2 white-space-nowrap scalein origin-top">
                            Popup Content
                        </div>
                    ) : null}
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
