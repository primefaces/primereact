import React, { useState } from 'react';
import { Sidebar } from '../../lib/sidebar/Sidebar';
import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-print" />
            </button>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-arrow-right" />
            </button>
        </React.Fragment>
    );

    const code = {
        basic: `
<Sidebar visible={visibleCustomToolbar} onHide={() => setVisibleCustomToolbar(false)} icons={customIcons}>
    <h3>Sidebar with custom icons</h3>
</Sidebar>
<Button icon="pi pi-plus" onClick={() => setVisibleCustomToolbar(true)} />
        `,
        javascript: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function TemplateDoc() {
    const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-print" />
            </button>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-arrow-right" />
            </button>
        </React.Fragment>
    );
    
    return (
        <div>
            <Sidebar visible={visibleCustomToolbar} onHide={() => setVisibleCustomToolbar(false)} icons={customIcons}>
                <h3>Sidebar with custom icons</h3>
            </Sidebar>
            <Button icon="pi pi-plus" onClick={() => setVisibleCustomToolbar(true)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function TemplateDoc() {
    const [visibleCustomToolbar, setVisibleCustomToolbar] = useState(false);

    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-print" />
            </button>
            <button className="p-sidebar-icon p-link mr-1">
                <span className="pi pi-arrow-right" />
            </button>
        </React.Fragment>
    );

    return (
        <div>
            <Sidebar visible={visibleCustomToolbar} onHide={() => setVisibleCustomToolbar(false)} icons={customIcons}>
                <h3>Sidebar with custom icons</h3>
            </Sidebar>
            <Button icon="pi pi-plus" onClick={() => setVisibleCustomToolbar(true)} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Additional content can be provided using the <i>icons</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Sidebar visible={visibleCustomToolbar} onHide={() => setVisibleCustomToolbar(false)} icons={customIcons}>
                    <h3>Sidebar with custom icons</h3>
                </Sidebar>
                <Button icon="pi pi-plus" onClick={() => setVisibleCustomToolbar(true)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
