import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Dialog } from '@/components/lib/dialog/Dialog';
import { useState } from 'react';

export function PositionDoc(props) {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState('center');
    const footerContent = (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    const show = (position) => {
        setPosition(position);
        setVisible(true);
    };

    const code = {
        basic: `
<div className="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button label="Left" icon="pi pi-arrow-right" onClick={() => show('left')} className="p-button-help" style={{ minWidth: '10rem' }} />
    <Button label="Right" icon="pi pi-arrow-left" onClick={() => show('right')} className="p-button-help" style={{ minWidth: '10rem' }} />
</div>
<div className="flex flex-wrap justify-content-center gap-2 mb-2">
    <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => show('top-left')} className="p-button-warning" style={{ minWidth: '10rem' }} />
    <Button label="Top" icon="pi pi-arrow-down" onClick={() => show('top')} className="p-button-warning" style={{ minWidth: '10rem' }} />
    <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => show('top-right')} className="p-button-warning" style={{ minWidth: '10rem' }} />
</div>
<div className="flex flex-wrap justify-content-center gap-2">
    <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => show('bottom-left')} className="p-button-success" style={{ minWidth: '10rem' }} />
    <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => show('bottom')} className="p-button-success" style={{ minWidth: '10rem' }} />
    <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => show('bottom-right')} className="p-button-success" style={{ minWidth: '10rem' }} />
</div>

<Dialog header="Header" visible={visible} position={position} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent} draggable={false} resizable={false}>
    <p className="m-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Dialog>
        `,
        javascript: `
import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function PositionDemo() {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState('center');
    const footerContent = (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    const show = (position) => {
        setPosition(position);
        setVisible(true);
    };

    return (
        <div className="card">
            <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                <Button label="Left" icon="pi pi-arrow-right" onClick={() => show('left')} className="p-button-help" style={{ minWidth: '10rem' }} />
                <Button label="Right" icon="pi pi-arrow-left" onClick={() => show('right')} className="p-button-help" style={{ minWidth: '10rem' }} />
            </div>
            <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => show('top-left')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                <Button label="Top" icon="pi pi-arrow-down" onClick={() => show('top')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => show('top-right')} className="p-button-warning" style={{ minWidth: '10rem' }} />
            </div>
            <div className="flex flex-wrap justify-content-center gap-2">
                <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => show('bottom-left')} className="p-button-success" style={{ minWidth: '10rem' }} />
                <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => show('bottom')} className="p-button-success" style={{ minWidth: '10rem' }} />
                <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => show('bottom-right')} className="p-button-success" style={{ minWidth: '10rem' }} />
            </div>

            <Dialog header="Header" visible={visible} position={position} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent} draggable={false} resizable={false}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function PositionDemo() {
    const [visible, setVisible] = useState<boolean>(false);
    const [position, setPosition] = useState<string>('center');
    const footerContent = (
        <div>
            <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    const show = (position: string) => {
        setPosition(position);
        setVisible(true);
    };

    return (
        <div className="card">
            <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                <Button label="Left" icon="pi pi-arrow-right" onClick={() => show('left')} className="p-button-help" style={{ minWidth: '10rem' }} />
                <Button label="Right" icon="pi pi-arrow-left" onClick={() => show('right')} className="p-button-help" style={{ minWidth: '10rem' }} />
            </div>
            <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => show('top-left')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                <Button label="Top" icon="pi pi-arrow-down" onClick={() => show('top')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => show('top-right')} className="p-button-warning" style={{ minWidth: '10rem' }} />
            </div>
            <div className="flex flex-wrap justify-content-center gap-2">
                <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => show('bottom-left')} className="p-button-success" style={{ minWidth: '10rem' }} />
                <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => show('bottom')} className="p-button-success" style={{ minWidth: '10rem' }} />
                <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => show('bottom-right')} className="p-button-success" style={{ minWidth: '10rem' }} />
            </div>

            <Dialog header="Header" visible={visible} position={position} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent} draggable={false} resizable={false}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The <i>position</i> property is used to display a Dialog at all edges and corners of the screen.
                </p>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                    <Button label="Left" icon="pi pi-arrow-right" onClick={() => show('left')} className="p-button-help" style={{ minWidth: '10rem' }} />
                    <Button label="Right" icon="pi pi-arrow-left" onClick={() => show('right')} className="p-button-help" style={{ minWidth: '10rem' }} />
                </div>
                <div className="flex flex-wrap justify-content-center gap-2 mb-2">
                    <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => show('top-left')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                    <Button label="Top" icon="pi pi-arrow-down" onClick={() => show('top')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                    <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => show('top-right')} className="p-button-warning" style={{ minWidth: '10rem' }} />
                </div>
                <div className="flex flex-wrap justify-content-center gap-2">
                    <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => show('bottom-left')} className="p-button-success" style={{ minWidth: '10rem' }} />
                    <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => show('bottom')} className="p-button-success" style={{ minWidth: '10rem' }} />
                    <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => show('bottom-right')} className="p-button-success" style={{ minWidth: '10rem' }} />
                </div>

                <Dialog header="Header" visible={visible} position={position} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent} draggable={false} resizable={false}>
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Dialog>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
