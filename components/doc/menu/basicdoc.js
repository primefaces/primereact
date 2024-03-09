import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Menu } from '@/components/lib/menu/Menu';

export function BasicDoc(props) {
    let items = [
        { label: 'New', icon: 'pi pi-plus' },
        { label: 'Search', icon: 'pi pi-search' }
    ];

    const code = {
        basic: `
<Menu model={items} />
`,
        javascript: `
import React from 'react'; 
import { Menu } from 'primereact/menu';

export default function BasicDemo() {
    let items = [
        { label: 'New', icon: 'pi pi-plus' },
        { label: 'Search', icon: 'pi pi-search' }
    ];

    return (
        <Menu model={items} />
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';

export default function BasicDemo() {
    let items: MenuItem[] = [
        { label: 'New', icon: 'pi pi-plus' },
        { label: 'Search', icon: 'pi pi-search' }
    ];

    return (
        <Menu model={items} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Menu requires a collection of menuitems as its <i>model</i>.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Menu model={items} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
