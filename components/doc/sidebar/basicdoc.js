import { useState } from 'react';
import { Sidebar } from '../../lib/sidebar/Sidebar';
import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [visibleLeft, setVisibleLeft] = useState(false);

    const code = {
        basic: `
<Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
    <h3>Left Sidebar</h3>
</Sidebar>
<Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} className="mr-2" />
        `,
        javascript: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function BasicDoc() {
    const [visibleLeft, setVisibleLeft] = useState(false);

    return (
        <div>
            <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
                <h3>Left Sidebar</h3>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} className="mr-2" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function BasicDoc() {
    const [visibleLeft, setVisibleLeft] = useState(false);

    return (
        <div>
            <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
                <h3>Left Sidebar</h3>
            </Sidebar>
            <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} className="mr-2" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Sidebar is used as a container and visibility is controlled with <i>visible</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
                    <h3>Left Sidebar</h3>
                </Sidebar>
                <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} className="mr-2" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
