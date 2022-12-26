import { useState } from 'react';
import { Sidebar } from '../../lib/sidebar/Sidebar';
import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function PositionDoc(props) {
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleTop, setVisibleTop] = useState(false);
    const [visibleBottom, setVisibleBottom] = useState(false);

    const code = {
        basic: `
<Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
    <h3>Right Sidebar</h3>
</Sidebar>

<Sidebar visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
    <h3>Top Sidebar</h3>
</Sidebar>

<Sidebar visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)} modal={false} dismissable>
    <h3>Bottom Sidebar</h3>
</Sidebar>
<Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} className="mr-2" />
<Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} className="mr-2" />
<Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} className="mr-2" />
        `,
        javascript: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function PositionDoc() {
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleTop, setVisibleTop] = useState(false);
    const [visibleBottom, setVisibleBottom] = useState(false);

    return (
        <div>
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <h3>Right Sidebar</h3>
            </Sidebar>

            <Sidebar visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
                <h3>Top Sidebar</h3>
            </Sidebar>

            <Sidebar visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)} modal={false} dismissable>
                <h3>Bottom Sidebar</h3>
            </Sidebar>
            <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} className="mr-2" />
            <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} className="mr-2" />
            <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} className="mr-2" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function PositionDoc() {
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleTop, setVisibleTop] = useState(false);
    const [visibleBottom, setVisibleBottom] = useState(false);

    return (
        <div>
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <h3>Right Sidebar</h3>
            </Sidebar>

            <Sidebar visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
                <h3>Top Sidebar</h3>
            </Sidebar>

            <Sidebar visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)} modal={false} dismissable>
                <h3>Bottom Sidebar</h3>
            </Sidebar>
            <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} className="mr-2" />
            <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} className="mr-2" />
            <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} className="mr-2" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Sidebar can either be located on the left (default), right, top or bottom of the screen depending on the <i>position</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                    <h3>Right Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
                    <h3>Top Sidebar</h3>
                </Sidebar>

                <Sidebar visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)} modal={false} dismissable>
                    <h3>Bottom Sidebar</h3>
                </Sidebar>
                <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} className="mr-2" />
                <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} className="mr-2" />
                <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} className="mr-2" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
