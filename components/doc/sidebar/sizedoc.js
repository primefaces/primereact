import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Sidebar } from '@/components/lib/sidebar/Sidebar';
import { useState } from 'react';

export function SizeDoc(props) {
    const [visible, setVisible] = useState(false);

    const code = {
        basic: `
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
        `,
        javascript: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function SizeDemo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} className="w-full md:w-20rem lg:w-30rem">
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function SizeDemo() {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} className="w-full md:w-20rem lg:w-30rem">
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Sidebar dimension can be defined with <i>style</i> or <i>className</i> properties which can also be responsive when used with a CSS utility library like PrimeFlex.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Sidebar visible={visible} onHide={() => setVisible(false)} className="w-full md:w-20rem lg:w-30rem">
                    <h2>Sidebar</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                </Sidebar>
                <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
