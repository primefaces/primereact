import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { BreadCrumb } from '@/components/lib/breadcrumb/BreadCrumb';

export function TemplateDoc(props) {
    const iconItemTemplate = (item, options) => {
        return (
            <a className={options.className}>
                <span className={item.icon}></span>
            </a>
        );
    };

    const items = [
        { icon: 'pi pi-sitemap', template: iconItemTemplate },
        { icon: 'pi pi-book', template: iconItemTemplate },
        { icon: 'pi pi-wallet', template: iconItemTemplate },
        { icon: 'pi pi-shopping-bag', template: iconItemTemplate },
        { icon: 'pi pi-calculator', template: iconItemTemplate }
    ];

    const home = { icon: 'pi pi-home', url: 'https://www.primereact.org' };

    const code = {
        basic: `
<BreadCrumb model={items} home={home} />
        `,
        javascript: `
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

export default function TemplateDemo() {
    const iconItemTemplate = (item, options) => {
        return (
            <a className={options.className}>
                <span className={item.icon}></span>
            </a>
        );
    };

    const items = [
        { icon: 'pi pi-sitemap', template: iconItemTemplate },
        { icon: 'pi pi-book', template: iconItemTemplate },
        { icon: 'pi pi-wallet', template: iconItemTemplate },
        { icon: 'pi pi-shopping-bag', template: iconItemTemplate },
        { icon: 'pi pi-calculator', template: iconItemTemplate }
    ];

    const home = { icon: 'pi pi-home', url: 'https://www.primereact.org' };

    return (
        <BreadCrumb model={items} home={home} />
    )
}
        `,
        typescript: `
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MenuItem, MenuItemOptions } from 'primereact/menuitem';

export default function TemplateDoc() {
    const iconItemTemplate = (item: MenuItem, options: MenuItemOptions) => {
        return (
            <a className={options.className}>
                <span className={item.icon}></span>
            </a>
        );
    };

    const items: MenuItem[]  = [
        { icon: 'pi pi-sitemap', template: iconItemTemplate },
        { icon: 'pi pi-book', template: iconItemTemplate },
        { icon: 'pi pi-wallet', template: iconItemTemplate },
        { icon: 'pi pi-shopping-bag', template: iconItemTemplate },
        { icon: 'pi pi-calculator', template: iconItemTemplate }
    ];

    const home: MenuItem = { icon: 'pi pi-home', url: 'https://www.primereact.org' };

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
                    Custom content can be placed inside the menuitem using the <i>template</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <BreadCrumb model={items} home={home} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
