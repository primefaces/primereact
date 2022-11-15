import { useState } from 'react';
import { Button } from '../../lib/button/Button';
import { Dialog } from '../../lib/dialog/Dialog';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function PositionDoc(props) {
    const [displayPosition, setDisplayPosition] = useState(false);
    const [position, setPosition] = useState('center');

    const dialogFuncMap = {
        displayPosition: setDisplayPosition
    };

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    };

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
    };

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    };

    const code = {
        basic: `
<div className="grid flex-column">
    <div className="col">
        <Button label="Left" icon="pi pi-arrow-right" onClick={() => onClick('displayPosition', 'left')} className="p-button-help" />
        <Button label="Right" icon="pi pi-arrow-left" onClick={() => onClick('displayPosition', 'right')} className="p-button-help" />
    </div>
    <div className="col">
        <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => onClick('displayPosition', 'top-left')} className="p-button-warning" />
        <Button label="Top" icon="pi pi-arrow-down" onClick={() => onClick('displayPosition', 'top')} className="p-button-warning" />
        <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => onClick('displayPosition', 'top-right')} className="p-button-warning" />
    </div>
    <div className="col">
        <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => onClick('displayPosition', 'bottom-left')} className="p-button-success" />
        <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => onClick('displayPosition', 'bottom')} className="p-button-success" />
        <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => onClick('displayPosition', 'bottom-right')} className="p-button-success" />
    </div>
</div>

<Dialog header="Header" visible={displayPosition} position={position} modal style={{ width: '50vw' }} footer={renderFooter('displayPosition')} onHide={() => onHide('displayPosition')} draggable={false} resizable={false}>
    <p className="m-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
</Dialog>
        `,
        javascript: `
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function PositionDoc() {
    const [displayPosition, setDisplayPosition] = useState(false);
    const [position, setPosition] = useState('center');

    const dialogFuncMap = {
        displayPosition: setDisplayPosition
    };

    const onClick = (name, position) => {
        dialogFuncMap[\`\${name}\`](true);

        if (position) {
            setPosition(position);
        }
    };

    const onHide = (name) => {
        dialogFuncMap[\`\${name}\`](true);
    };

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    };

    return (
        <div className="grid flex-column">
            <div className="col">
                <Button label="Left" icon="pi pi-arrow-right" onClick={() => onClick('displayPosition', 'left')} className="p-button-help" />
                <Button label="Right" icon="pi pi-arrow-left" onClick={() => onClick('displayPosition', 'right')} className="p-button-help" />
            </div>
            <div className="col">
                <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => onClick('displayPosition', 'top-left')} className="p-button-warning" />
                <Button label="Top" icon="pi pi-arrow-down" onClick={() => onClick('displayPosition', 'top')} className="p-button-warning" />
                <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => onClick('displayPosition', 'top-right')} className="p-button-warning" />
            </div>
            <div className="col">
                <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => onClick('displayPosition', 'bottom-left')} className="p-button-success" />
                <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => onClick('displayPosition', 'bottom')} className="p-button-success" />
                <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => onClick('displayPosition', 'bottom-right')} className="p-button-success" />
            </div>
        </div>

        <Dialog header="Header" visible={displayPosition} position={position} modal style={{ width: '50vw' }} footer={renderFooter('displayPosition')} onHide={() => onHide('displayPosition')} draggable={false} resizable={false}>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function PositionDoc() {
    const [displayPosition, setDisplayPosition] = useState<boolean>(false);
    const [position, setPosition] = useState<string>('center');

    const dialogFuncMap = {
        displayPosition: setDisplayPosition
    };

    const onClick = (name, position) => {
        dialogFuncMap[\`\${name}\`](true);

        if (position) {
            setPosition(position);
        }
    };

    const onHide = (name) => {
        dialogFuncMap[\`\${name}\`](true);
    };

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

    return (
        <div className="grid flex-column">
            <div className="col">
                <Button label="Left" icon="pi pi-arrow-right" onClick={() => onClick('displayPosition', 'left')} className="p-button-help" />
                <Button label="Right" icon="pi pi-arrow-left" onClick={() => onClick('displayPosition', 'right')} className="p-button-help" />
            </div>
            <div className="col">
                <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => onClick('displayPosition', 'top-left')} className="p-button-warning" />
                <Button label="Top" icon="pi pi-arrow-down" onClick={() => onClick('displayPosition', 'top')} className="p-button-warning" />
                <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => onClick('displayPosition', 'top-right')} className="p-button-warning" />
            </div>
            <div className="col">
                <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => onClick('displayPosition', 'bottom-left')} className="p-button-success" />
                <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => onClick('displayPosition', 'bottom')} className="p-button-success" />
                <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => onClick('displayPosition', 'bottom-right')} className="p-button-success" />
            </div>
        </div>

        <Dialog header="Header" visible={displayPosition} position={position} modal style={{ width: '50vw' }} footer={renderFooter('displayPosition')} onHide={() => onHide('displayPosition')} draggable={false} resizable={false}>
            <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Dialog>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Position </DocSectionText>
            <div className="card flex justify-content-center dialog-demo">
                <div className="grid flex-column">
                    <div className="col">
                        <Button label="Left" icon="pi pi-arrow-right" onClick={() => onClick('displayPosition', 'left')} className="p-button-help" />
                        <Button label="Right" icon="pi pi-arrow-left" onClick={() => onClick('displayPosition', 'right')} className="p-button-help" />
                    </div>
                    <div className="col">
                        <Button label="TopLeft" icon="pi pi-arrow-down-right" onClick={() => onClick('displayPosition', 'top-left')} className="p-button-warning" />
                        <Button label="Top" icon="pi pi-arrow-down" onClick={() => onClick('displayPosition', 'top')} className="p-button-warning" />
                        <Button label="TopRight" icon="pi pi-arrow-down-left" onClick={() => onClick('displayPosition', 'top-right')} className="p-button-warning" />
                    </div>
                    <div className="col">
                        <Button label="BottomLeft" icon="pi pi-arrow-up-right" onClick={() => onClick('displayPosition', 'bottom-left')} className="p-button-success" />
                        <Button label="Bottom" icon="pi pi-arrow-up" onClick={() => onClick('displayPosition', 'bottom')} className="p-button-success" />
                        <Button label="BottomRight" icon="pi pi-arrow-up-left" onClick={() => onClick('displayPosition', 'bottom-right')} className="p-button-success" />
                    </div>
                </div>

                <Dialog header="Header" visible={displayPosition} position={position} modal style={{ width: '50vw' }} footer={renderFooter('displayPosition')} onHide={() => onHide('displayPosition')} draggable={false} resizable={false}>
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
