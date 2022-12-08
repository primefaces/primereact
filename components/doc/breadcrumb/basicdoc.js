import { useState } from 'react';
import { BreadCrumb } from '../../lib/breadcrumb/BreadCrumb';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DefaultDoc(props) {
    const items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];

    const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact/showcase' };

    const code = {
        basic: `
<BreadCrumb model={items} home={home} />
        `,
        javascript: `
import { BreadCrumb } from 'primereact/breadcrumb';

export default function DefaultDoc() {
    const items = [
        {label: 'Computer'},
        {label: 'Notebook'},
        {label: 'Accessories'},
        {label: 'Backpacks'},
        {label: 'Item'}
    ];

    const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact/showcase' }

    return (
        <BreadCrumb model={items} home={home} />
    )
}
        `,
        typescript: `
import { BreadCrumb } from 'primereact/breadcrumb';

export default function DefaultDoc() {
    const items = [
        {label: 'Computer'},
        {label: 'Notebook'},
        {label: 'Accessories'},
        {label: 'Backpacks'},
        {label: 'Item'}
    ];

    const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact/showcase' }

    return (
        <BreadCrumb model={items} home={home} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>BreadCrumb requires a collection of menuitems as its model. </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <BreadCrumb model={items} home={home} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
