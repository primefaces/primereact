import React, { useState, useRef } from 'react';
import { Button } from '../../../lib/button/Button';
import { useClickOutside } from '../../../lib/hooks/Hooks';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function BasicDoc(props) {
    const [isOpen, setIsOpen] = useState(false);
    const btnRef = useRef(null);

    useClickOutside(btnRef, () => {
        setIsOpen(false);
    });

    const code = {
        basic: `
const [isOpen, setIsOpen] = useState(false);
const btnRef = useRef(null);

useClickOutside(btnRef, () => {
    setIsOpen(false);
});   
        `,
        javascript: `
import React, { useState, useRef } from 'react'; 
import { Button } from 'primereact/button';
import { useClickOutside } from 'primereact/hooks';

export default function BasicDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const btnRef = useRef(null);

    useClickOutside(btnRef, () => {
        setIsOpen(false);
    });

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <div>
                {isOpen ? (
                    <Button className="p-button-outlined border-dashed" ref={btnRef}>
                        Click outside of the button to change
                    </Button>
                ) : (
                    <Button onClick={() => setIsOpen(true)}>Change Button</Button>
                )}
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useRef } from 'react';
import { Button } from 'primereact/button';
import { useClickOutside } from 'primereact/hooks';

export default function BasicDemo() {
    const [isOpen, setIsOpen] = useState(false);
    const btnRef = useRef(null);

    useClickOutside(btnRef, () => {
        setIsOpen(false);
    });

    return (
        <div className="card flex flex-column justify-content-center align-items-center gap-2">
            <div>
                {isOpen ? (
                    <Button className="p-button-outlined border-dashed" ref={btnRef}>
                        Click outside of the button to change
                    </Button>
                ) : (
                    <Button onClick={() => setIsOpen(true)}>Change Button</Button>
                )}
            </div>
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
                <div>
                    {isOpen ? (
                        <Button className="p-button-outlined border-dashed" ref={btnRef}>
                            Click outside of the button to change
                        </Button>
                    ) : (
                        <Button onClick={() => setIsOpen(true)}>Change Button</Button>
                    )}
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
