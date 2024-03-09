import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { ContextMenu } from '@/components/lib/contextmenu/ContextMenu';
import { useRef } from 'react';

export function BasicDoc(props) {
    const cm = useRef(null);
    const items = [
        { label: 'Copy', icon: 'pi pi-copy' },
        { label: 'Rename', icon: 'pi pi-file-edit' }
    ];

    const code = {
        basic: `
<ContextMenu model={items} ref={cm} breakpoint="767px" />
<img src="/images/nature/nature3.jpg" alt="Logo" className="max-w-full" onContextMenu={(e) => cm.current.show(e)} />
`,
        javascript: `
import React, { useRef } from 'react';
import { ContextMenu } from 'primereact/contextmenu';

export default function BasicDemo() {
    const cm = useRef(null);
    const items = [
        { label: 'Copy', icon: 'pi pi-copy' },
        { label: 'Rename', icon: 'pi pi-file-edit' }
    ];

    return (
        <div className="card flex md:justify-content-center">
            <ContextMenu model={items} ref={cm} breakpoint="767px" />
            <img src="https://primefaces.org/cdn/primereact/images/nature/nature3.jpg" alt="Logo" className="max-w-full" onContextMenu={(e) => cm.current.show(e)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { ContextMenu } from 'primereact/contextmenu';
import { MenuItem } from 'primereact/menuitem';

export default function BasicDemo() {
    const cm = useRef<ContextMenu>(null);
    const items: MenuItem[] = [
        { label: 'Copy', icon: 'pi pi-copy' },
        { label: 'Rename', icon: 'pi pi-file-edit' }
    ];

    return (
        <div className="card flex md:justify-content-center">
            <ContextMenu model={items} ref={cm} breakpoint="767px" />
            <img src="https://primefaces.org/cdn/primereact/images/nature/nature3.jpg" alt="Logo" className="max-w-full" onContextMenu={(e) => cm.current?.show(e)} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    ContextMenu requires a collection of menuitems as its <i>model</i> and the <i>show</i> method needs to be called explicity using the <i>onContextMenu</i> event of the target to display the menu.
                </p>
            </DocSectionText>
            <div className="card flex md:justify-content-center">
                <ContextMenu model={items} ref={cm} breakpoint="767px" />
                <img src="https://primefaces.org/cdn/primereact/images/nature/nature3.jpg" alt="Logo" className="max-w-full" onContextMenu={(e) => cm.current.show(e)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
