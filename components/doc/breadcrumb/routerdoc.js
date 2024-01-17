import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { BreadCrumb } from '@/components/lib/breadcrumb/BreadCrumb';
import Link from 'next/link';

export function RouterDoc(props) {
    const items = [
        { label: 'Components' },
        { label: 'Form' },
        {
            label: 'InputText',
            template: () => (
                <Link href="/inputtext">
                    <a className="text-primary font-semibold">InputText</a>
                </Link>
            )
        }
    ];
    const home = { icon: 'pi pi-home', url: 'https://primereact.org' };

    const code = {
        basic: `
<BreadCrumb model={items} home={home} />
        `,
        javascript: `
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import Link from 'next/link';

export default function RouterDemo() {
    const items = [
        { label: 'Components' },
        { label: 'Form' },
        {
            label: 'InputText',
            template: () => <Link href="/inputtext"><a className="text-primary font-semibold">InputText</a></Link>
        }
    ];
    const home = { icon: 'pi pi-home', url: 'https://primereact.org' };


    return (
        <BreadCrumb model={items} home={home} />
    )
}
        `,
        typescript: `
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';
import Link from 'next/link';

export default function RouterDemo() {
    const items: MenuItem[] = [
        { label: 'Components' },
        { label: 'Form' },
        {
            label: 'InputText',
            template: () => <Link href="/inputtext"><a className="text-primary font-semibold">InputText</a></Link>
        }
    ];
    const home: MenuItem = { icon: 'pi pi-home', url: 'https://primereact.org' };

    return (
        <BreadCrumb model={items} home={home} />
    )
}`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Items with navigation are defined with templating to be able to use a router link component, an external link or programmatic navigation.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <BreadCrumb home={home} model={items} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
