import React, { useState } from 'react';
import { Sidebar } from '../../lib/sidebar/Sidebar';
import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const [visible, setVisible] = useState(false);

    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-2">
                <span className="pi pi-print" />
            </button>
            <button className="p-sidebar-icon p-link mr-2">
                <span className="pi pi-search" />
            </button>
        </React.Fragment>
    );

    const customHeader = (
        <React.Fragment>
            <h2 style={{ marginBottom: 0 }}>Sidebar</h2>
        </React.Fragment>
    );

    const code = {
        basic: `
<Sidebar visible={visible} onHide={() => setVisible(false)} icons={customIcons}>
    <h2>Sidebar</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
</Sidebar>
<Button icon="pi pi-plus" onClick={() => setVisible(true)} />
        `,
        javascript: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    const [visible, setVisible] = useState(false);

    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-2">
                <span className="pi pi-print" />
            </button>
            <button className="p-sidebar-icon p-link mr-2">
                <span className="pi pi-search" />
            </button>
        </React.Fragment>
    );

    const customHeader = (
        <React.Fragment>
            <h2 style={{ marginBottom: 0 }}>Sidebar</h2>
        </React.Fragment>
    );
    
    return (
        <div className="card flex justify-content-center">
            <Sidebar header={customHeader} visible={visible} onHide={() => setVisible(false)} icons={customIcons}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
            </Sidebar>
            <Button icon="pi pi-plus" onClick={() => setVisible(true)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function TemplateDemo() {
    const [visible, setVisible] = useState<boolean>(false);

    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-2">
                <span className="pi pi-print" />
            </button>
            <button className="p-sidebar-icon p-link mr-2">
                <span className="pi pi-search" />
            </button>
        </React.Fragment>
    );

    const customHeader = (
        <React.Fragment>
            <h2 style={{ marginBottom: 0 }}>Sidebar</h2>
        </React.Fragment>
    );

    return (
        <div className="card flex justify-content-center">
            <Sidebar header={customHeader} visible={visible} onHide={() => setVisible(false)} icons={customIcons}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
            </Sidebar>
            <Button icon="pi pi-plus" onClick={() => setVisible(true)} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Additional content at the header section is provided using the <i>icons</i> and <i>header</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Sidebar header={customHeader} visible={visible} onHide={() => setVisible(false)} icons={customIcons}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </Sidebar>
                <Button icon="pi pi-plus" onClick={() => setVisible(true)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
