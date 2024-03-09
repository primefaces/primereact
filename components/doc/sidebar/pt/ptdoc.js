import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Sidebar } from '@/components/lib/sidebar/Sidebar';
import { useState } from 'react';

export function PTDoc(props) {
    const [visible, setVisible] = useState(false);
    const code = {
        basic: `
<Sidebar
    pt={{
        root: { className: 'w-25rem' }
    }}
    visible={visible}
    onHide={() => setVisible(false)}
>
    <h2>Sidebar</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
    </p>
</Sidebar>
        `,
        javascript: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function PTDemo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar
                pt={{
                    root: { className: 'w-25rem' }
                }}
                visible={visible}
                onHide={() => setVisible(false)}
            >
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function PTDemo() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar
                pt={{
                    root: { className: 'w-25rem' }
                }}
                visible={visible}
                onHide={() => setVisible(false)}
            >
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </p>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <Sidebar
                    pt={{
                        root: { className: 'w-25rem' }
                    }}
                    visible={visible}
                    onHide={() => setVisible(false)}
                >
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
