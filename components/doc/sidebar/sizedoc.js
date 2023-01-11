import { useState } from 'react';
import { Button } from '../../lib/button/Button';
import { Sidebar } from '../../lib/sidebar/Sidebar';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SizeDoc(props) {
    const [visibleLeft, setVisibleLeft] = useState(false);

    const code = {
        basic: `
<Sidebar visible={visibleLeft} position="left" style={{ width: '30em' }} onHide={() => setVisibleLeft(false)}>
    <h3>Sidebar Size</h3>
</Sidebar>
<Button icon="pi pi-arrow-left" onClick={() => setVisibleLeft(true)} className="mr-2" />
        `,
        javascript: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function SizeDoc() {
    const [visibleLeft, setVisibleLeft] = useState(false);

    return (
        <div>
            <Sidebar visible={visibleLeft} position="left" style={{ width: '30em' }} onHide={() => setVisibleLeft(false)}>
                <h3>Sidebar Size</h3>
            </Sidebar>
            <Button icon="pi pi-arrow-left" onClick={() => setVisibleLeft(true)} className="mr-2" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function SizeDoc() {
    const [visibleLeft, setVisibleLeft] = useState(false);

    return (
        <div>
            <Sidebar visible={visibleLeft} position="left" style={{ width: '30em' }} onHide={() => setVisibleLeft(false)}>
                <h3>Sidebar Size</h3>
            </Sidebar>
            <Button icon="pi pi-arrow-left" onClick={() => setVisibleLeft(true)} className="mr-2" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Sidebar size can be changed using a fixed style value or using one of the three predefined classes <i>p-sidebar-sm</i>, <i>p-sidebar-md</i>, <i>p-sidebar-lg</i>.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Sidebar visible={visibleLeft} position="left" style={{ width: '30em' }} onHide={() => setVisibleLeft(false)}>
                    <h3>Sidebar Size</h3>
                </Sidebar>
                <Button icon="pi pi-arrow-left" onClick={() => setVisibleLeft(true)} className="mr-2" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
