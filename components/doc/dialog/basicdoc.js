import { useState } from 'react';
import { Button } from '../../lib/button/Button';
import { Dialog } from '../../lib/dialog/Dialog';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [displayBasic, setDisplayBasic] = useState(false);

    const dialogFuncMap = {
        displayBasic: setDisplayBasic
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

    const code = {
        basic: `
<Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayBasic')} />
<Dialog header="Header" visible={displayBasic} style={{ width: '50vw' }} onHide={() => onHide('displayBasic')}>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
</Dialog>
        `,
        javascript: `
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function BasicDoc() {
    const [displayBasic, setDisplayBasic] = useState(false);

    const dialogFuncMap = {
        displayBasic: setDisplayBasic,
    };

    const onClick = (name, position) => {
        dialogFuncMap[\`\${name}\`](true);

        if (position) {
            setPosition(position);
        }
    };

    const onHide = (name) => {
        dialogFuncMap[\`\${name}\`](false);
    };

    return (
        <div className="card flex justify-content-center ">
            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayBasic')} className="mr-2" />
            <Dialog header="Header" visible={displayBasic} style={{ width: '50vw' }} onHide={() => onHide('displayBasic')}>
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
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function BasicDoc() {
    const [displayBasic, setDisplayBasic] = useState(false);

    const dialogFuncMap = {
        displayBasic: setDisplayBasic,
    };

    const onClick = (name, position) => {
        dialogFuncMap[\`\${name}\`](true);

        if (position) {
            setPosition(position);
        }
    };

    const onHide = (name) => {
        dialogFuncMap[\`\${name}\`](false);
    };

    return (
        <div className="card flex justify-content-center ">
            <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayBasic')} className="mr-2" />
            <Dialog header="Header" visible={displayBasic} style={{ width: '50vw' }} onHide={() => onHide('displayBasic')}>
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
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center ">
                <Button label="Show" icon="pi pi-external-link" onClick={() => onClick('displayBasic')} className="mr-2" />
                <Dialog header="Header" visible={displayBasic} style={{ width: '50vw' }} onHide={() => onHide('displayBasic')}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Dialog>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
