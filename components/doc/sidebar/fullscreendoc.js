import { useState } from 'react';
import { Sidebar } from '../../lib/sidebar/Sidebar';
import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FullScreenDoc(props) {
    const [visible, setVisible] = useState(false);

    const code = {
        basic: `
<div className="card flex justify-content-center">
    <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h2>Sidebar</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </Sidebar>
    <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
</div>
        `,
        javascript: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function FullScreenDemo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
            <Button icon="pi pi-th-large" onClick={() => setVisible(true)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function FullScreenDemo() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
            <Button icon="pi pi-th-large" onClick={() => setVisible(true)} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Sidebar can cover the whole page when <i>fullScreen</i> property is enabled.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
                    <h2>Sidebar</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </Sidebar>
                <Button icon="pi pi-th-large" onClick={() => setVisible(true)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}

