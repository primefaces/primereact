import { useState } from 'react';
import { Button } from '../../lib/button/Button';
import { Dialog } from '../../lib/dialog/Dialog';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function WithoutModalDoc(props) {
    const [displayModal, setDisplayModal] = useState(false);

    const onClick = (name, position) => {
        setDisplayModal(true);

        if (position) {
            setPosition(position);
        }
    };

    const onHide = (name) => {
        setDisplayModal(false);
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
<Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayModal')} />
<Dialog header="Header" visible={displayModal} modal={false} style={{ width: '50vw' }} footer={renderFooter('displayModal')} onHide={() => onHide('displayModal')}>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Dialog>
        `,
        javascript: `
import { useState } from "react";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function WithoutModalDoc() {
    const [displayModal, setDisplayModal] = useState<boolean>(false);

    const onClick = (name, position) => {
        setDisplayModal(true);

        if (position) {
            setPosition(position);
        }
    };

    const onHide = (name) => {
        setDisplayModal(false);
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
        <div>
            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayModal')} />
            <Dialog header="Header" visible={displayModal} modal={false} style={{ width: '50vw' }} footer={renderFooter('displayModal')} onHide={() => onHide('displayModal')}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Dialog, DialogPositionType } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function WithoutModalDoc() {
    const [displayModal, setDisplayModal] = useState(false);

    const onClick = (name: string, position: DialogPositionType) => {
        setDisplayModal(true);

        if (position) {
            setPosition(position);
        }
    };

    const onHide = (name: string) => {
        setDisplayModal(false);
    };

    const renderFooter = (name: string) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    };

    return (
        <div>
            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayModal')} />
            <Dialog header="Header" visible={displayModal} modal={false} style={{ width: '50vw' }} footer={renderFooter('displayModal')} onHide={() => onHide('displayModal')}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                The confirmPopup method returns an object incudes <i>hide</i> and <i>show</i> methods. The component can be shown or hidden by using this object at any time.
            </DocSectionText>
            <div className="card flex justify-content-center dialog-demo">
                <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayModal')} />
                <Dialog header="Header" visible={displayModal} modal={false} style={{ width: '50vw' }} footer={renderFooter('displayModal')} onHide={() => onHide('displayModal')}>
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
