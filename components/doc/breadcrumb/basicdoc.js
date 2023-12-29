import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { BreadCrumb } from '@/components/lib/breadcrumb/BreadCrumb';

export function BasicDoc(props) {
    const items = [{ label: 'Electronics' }, { label: 'Computer' }, { label: 'Accessories' }, { label: 'Keyboard' }, { label: 'Wireless' }];
    const home = { icon: 'pi pi-home', url: 'https://primereact.org' };

    const code = {
        basic: `
<BreadCrumb model={items} home={home} />
        `,
        javascript: `
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

export default function BasicDemo() {
    const items = [{ label: 'Electronics' }, { label: 'Computer' }, { label: 'Accessories' }, { label: 'Keyboard' }, { label: 'Wireless' }];
    const home = { icon: 'pi pi-home', url: 'https://primereact.org' }

    return (
        <BreadCrumb model={items} home={home} />
    )
}
        `,
        typescript: `
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';

export default function BasicDemo() {
    const items: MenuItem[] = [{ label: 'Electronics' }, { label: 'Computer' }, { label: 'Accessories' }, { label: 'Keyboard' }, { label: 'Wireless' }];
    const home: MenuItem = { icon: 'pi pi-home', url: 'https://primereact.org' }

    return (
        <BreadCrumb model={items} home={home} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    BreadCrumb requires a collection of menuitems as its <i>model</i>.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <BreadCrumb model={items} home={home} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
