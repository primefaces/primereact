import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Dialog } from '@/components/lib/dialog/Dialog';
import { useState } from 'react';
import { Avatar } from '@/components/lib/avatar/Avatar';

export function TemplateDoc(props) {
    const [visible, setVisible] = useState(false);

    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            <span className="font-bold white-space-nowrap">Amy Elsner</span>
        </div>
    );

    const footerContent = (
        <div>
            <Button label="Ok" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    const code = {
        basic: `
<Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
<Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
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
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Avatar } from '@/components/lib/avatar/Avatar';

export default function TemplateDemo() {
    const [visible, setVisible] = useState(false);

    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            <span className="font-bold white-space-nowrap">Amy Elsner</span>
        </div>
    );

    const footerContent = (
        <div>
            <Button label="Ok" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog visible={visible} modal header={headerElement} footer={footerContent} style={{ width: '50rem' }} onHide={() => setVisible(false)}>
                <p className="m-0">
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
import { Avatar } from '@/components/lib/avatar/Avatar';

export default function TemplateDemo() {
    const [visible, setVisible] = useState<boolean>(false);

    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
            <span className="font-bold white-space-nowrap">Amy Elsner</span>
        </div>
    );

    const footerContent = (
        <div>
            <Button label="Ok" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog visible={visible} modal header={headerElement} footer={footerContent} style={{ width: '50rem' }} onHide={() => setVisible(false)}>
                <p className="m-0">
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
                <p>Header and Footer sections allow customization via templating.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Button label="Show" icon="pi pi-external-link" onClick={() => setVisible(true)} />
                <Dialog visible={visible} modal header={headerElement} footer={footerContent} style={{ width: '50rem' }} onHide={() => setVisible(false)}>
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
