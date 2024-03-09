import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { BreadCrumb } from '@/components/lib/breadcrumb/BreadCrumb';

export function PTDoc(props) {
    const items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];
    const home = { icon: 'pi pi-home', url: 'https://primereact.org' };

    const code = {
        basic: `
<BreadCrumb 
    model={items}
    home={home}
    pt={{
        root: { className: 'surface-ground' },
        label: ({ props }) => ({
            className: props.index === items.length - 1 ? 'font-italic' : undefined
        })
    }}
/>
        `,
        javascript: `
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

export default function PTDemo() {
    const items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];
    const home = { icon: 'pi pi-home', url: 'https://primereact.org' }

    return (
        <div className="card flex justify-content-center">
            <BreadCrumb
                pt={{
                    root: { className: 'surface-ground' },
                    label: ({ props }) => ({
                        className: props.index === items.length - 1 ? 'font-italic' : undefined
                    })
                }}
                model={items}
                home={home}
            />
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem } from 'primereact/menuitem';

export default function PTDemo() {
    const items: MenuItem[] = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];
    const home: MenuItem = { icon: 'pi pi-home', url: 'https://primereact.org' }

    return (
        <div className="card flex justify-content-center">
            <BreadCrumb
                pt={{
                    root: { className: 'surface-ground' },
                    label: ({ props }) => ({
                        className: props.index === items.length - 1 ? 'font-italic' : undefined
                    })
                }}
                model={items}
                home={home}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <BreadCrumb
                    pt={{
                        root: { className: 'surface-ground' },
                        label: ({ props }) => ({
                            className: props.index === items.length - 1 ? 'font-italic' : undefined
                        })
                    }}
                    model={items}
                    home={home}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
