import { useState } from 'react';
import { Sidebar } from '../../lib/sidebar/Sidebar';
import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FullScreenDoc(props) {
    const [visibleFullScreen, setVisibleFullScreen] = useState(false);

    const code = {
        basic: `
<Sidebar visible={visibleFullScreen} fullScreen onHide={() => setVisibleFullScreen(false)}>
    <h3>Full Screen Sidebar</h3>
</Sidebar>
<Button icon="pi pi-th-large" onClick={() => setVisibleFullScreen(true)} className="mr-2" />
        `,
        javascript: `
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function FullScreenDoc() {
    const [visibleFullScreen, setVisibleFullScreen] = useState(false);

    return (
        <div>
            <Sidebar visible={visibleFullScreen} fullScreen onHide={() => setVisibleFullScreen(false)}>
                <h3>Full Screen Sidebar</h3>
            </Sidebar>
            <Button icon="pi pi-th-large" onClick={() => setVisibleFullScreen(true)} className="mr-2" />
        </div>
    )
}
        `,
        typescript: `
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function FullScreenDoc() {
    const [visibleFullScreen, setVisibleFullScreen] = useState(false);

    return (
        <div>
            <Sidebar visible={visibleFullScreen} fullScreen onHide={() => setVisibleFullScreen(false)}>
                <h3>Full Screen Sidebar</h3>
            </Sidebar>
            <Button icon="pi pi-th-large" onClick={() => setVisibleFullScreen(true)} className="mr-2" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Full screen mode allows the sidebar to cover whole screen.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Sidebar visible={visibleFullScreen} fullScreen onHide={() => setVisibleFullScreen(false)}>
                    <h3>Full Screen Sidebar</h3>
                </Sidebar>
                <Button icon="pi pi-th-large" onClick={() => setVisibleFullScreen(true)} className="mr-2" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
