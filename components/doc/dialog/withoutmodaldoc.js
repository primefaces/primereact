import { useState } from 'react';
import { Button } from '../../lib/button/Button';
import { Dialog } from '../../lib/dialog/Dialog';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function WithoutModalDoc(props) {
    const [visible, setVisible] = useState(false);

    const onClick = () => {
        setVisible(true);
    };

    const onHide = () => {
        setVisible(false);
    };

    const renderFooter = () => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide()} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide()} autoFocus />
            </div>
        );
    };

    const code = {
        basic: `
<Button label="Show" icon="pi pi-external-link" onClick={() => onClick()} className="mr-2 mb-2 line-height-3" style={{ minWidth: "10rem" }}/>
<Dialog header="Header" visible={visible} modal={false} style={{ width: '50vw' }} footer={renderFooter()} onHide={() => onHide()}>
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
    const [visible, setVisible] = useState<boolean>(false);

    const onClick = () => {
        setVisible(true);
    };

    const onHide = () => {
        setVisible(false);
    };

    const renderFooter = () => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide()} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide()} autoFocus />
            </div>
        );
    };

    return (
        <div>
            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayModal')} className="mr-2 mb-2 line-height-3" style={{ minWidth: "10rem" }}/>
            <Dialog header="Header" visible={visible} modal={false} style={{ width: '50vw' }} footer={renderFooter('displayModal')} onHide={() => onHide('displayModal')}>
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
    const [visible, setVisible] = useState<boolean>(false);

    const onClick = () => {
        setVisible(true);
    };

    const onHide = () => {
        setVisible(false);
    };

    const renderFooter = () => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={() => onHide()} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={() => onHide()} autoFocus />
            </div>
        );
    };

    return (
        <div>
            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayModal')} className="mr-2 mb-2 line-height-3" style={{ minWidth: "10rem" }}/>
            <Dialog header="Header" visible={visible} modal={false} style={{ width: '50vw' }} footer={renderFooter('displayModal')} onHide={() => onHide('displayModal')}>
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
                <p>
                    The confirmPopup method returns an object incudes <i>hide</i> and <i>show</i> methods. The component can be shown or hidden by using this object at any time.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Button label="Show" icon="pi pi-external-link" onClick={() => onClick()} className="mr-2 mb-2 line-height-3" style={{ minWidth: '10rem' }} />
                <Dialog header="Header" visible={visible} modal={false} style={{ width: '50vw' }} footer={renderFooter()} onHide={() => onHide()}>
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
