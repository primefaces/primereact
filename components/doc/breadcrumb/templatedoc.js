import { BreadCrumb } from '../../lib/breadcrumb/BreadCrumb';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const items = [{ className: ' pi pi-sitemap' }, { className: 'pi pi-book' }, { className: 'pi pi-wallet' }, { className: 'pi pi-shopping-bag' }, { className: 'pi pi-calculator' }];

    const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact/showcase' };

    const code = {
        basic: `
<BreadCrumb model={items} home={home} />
        `,
        javascript: `
import React from 'react'; 
import { BreadCrumb } from 'primereact/breadcrumb';

export default function TemplateDoc() {
    const items = [{ className: ' pi pi-sitemap' }, { className: 'pi pi-book' }, { className: 'pi pi-wallet' }, { className: 'pi pi-shopping-bag' }, { className: 'pi pi-calculator' }];

    const home = { icon: 'pi pi-home', url: 'https://www.primefaces.org/primereact/showcase' }

    return (
        <BreadCrumb model={items} home={home} />
    )
}
        `,
        typescript: `
import React from 'react'; 
import { BreadCrumb } from 'primereact/breadcrumb';

export default function TemplateDoc() {
    const items = [{ className: ' pi pi-sitemap' }, { className: 'pi pi-book' }, { className: 'pi pi-wallet' }, { className: 'pi pi-shopping-bag' }, { className: 'pi pi-calculator' }];

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
