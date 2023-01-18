import { BreadCrumb } from '../../lib/breadcrumb/BreadCrumb';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];
    const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact' };

    const code = {
        basic: `
<BreadCrumb model={items} home={home} />
        `,
        javascript: `
import React from 'react'; 
import { BreadCrumb } from 'primereact/breadcrumb';

export default function BasicDemo() {
    const items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];
    const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact' }

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
    const items: MenuItem[] = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];
    const home: MenuItem = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact' }

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
