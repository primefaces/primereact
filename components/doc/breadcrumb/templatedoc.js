import { BreadCrumb } from '../../lib/breadcrumb/BreadCrumb';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const iconItemTemplate = (item) => {
        return (
            <a className="p-menuitem-link">
                <span className={item.item}></span>
            </a>
        );
    };

    const items = [
        { item: ' pi pi-sitemap', template: iconItemTemplate },
        { item: 'pi pi-book', template: iconItemTemplate },
        { item: 'pi pi-wallet', template: iconItemTemplate },
        { item: 'pi pi-shopping-bag', template: iconItemTemplate },
        { item: 'pi pi-calculator', template: iconItemTemplate }
    ];

    const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact/showcase' };

    const code = {
        basic: `
<BreadCrumb model={items} home={home} />
        `,
        javascript: `
import React from 'react'; 
import { BreadCrumb } from 'primereact/breadcrumb';

export default function TemplateDoc() {
    const iconItemTemplate = (item) => {
        return (
            <a className="p-menuitem-link">
                <span className={item.item}></span>
            </a>
        );
    };

    const items = [
        { item: ' pi pi-sitemap', template: iconItemTemplate },
        { item: 'pi pi-book', template: iconItemTemplate },
        { item: 'pi pi-wallet', template: iconItemTemplate },
        { item: 'pi pi-shopping-bag', template: iconItemTemplate },
        { item: 'pi pi-calculator', template: iconItemTemplate }
    ];

    const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact/showcase' };

    return (
        <BreadCrumb model={items} home={home} />
    )
}
        `,
        typescript: `
import React from 'react'; 
import { BreadCrumb } from 'primereact/breadcrumb';

export default function TemplateDoc() {
    const iconItemTemplate = (item) => {
        return (
            <a className="p-menuitem-link">
                <span className={item.item}></span>
            </a>
        );
    };

    const items = [
        { item: ' pi pi-sitemap', template: iconItemTemplate },
        { item: 'pi pi-book', template: iconItemTemplate },
        { item: 'pi pi-wallet', template: iconItemTemplate },
        { item: 'pi pi-shopping-bag', template: iconItemTemplate },
        { item: 'pi pi-calculator', template: iconItemTemplate }
    ];

    const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact/showcase' };
    
    return (
        <BreadCrumb model={items} home={home} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <BreadCrumb model={items} home={home} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
