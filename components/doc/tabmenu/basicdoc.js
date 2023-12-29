import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { TabMenu } from '@/components/lib/tabmenu/TabMenu';

export function BasicDoc(props) {
    const items = [
        { label: 'Dashboard', icon: 'pi pi-home' },
        { label: 'Transactions', icon: 'pi pi-chart-line' },
        { label: 'Products', icon: 'pi pi-list' },
        { label: 'Messages', icon: 'pi pi-inbox' }
    ];

    const code = {
        basic: `
<TabMenu model={items} />
        `,
        javascript: `
import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';

export default function BasicDemo() {
    const items = [
        { label: 'Dashboard', icon: 'pi pi-home' },
        { label: 'Transactions', icon: 'pi pi-chart-line' },
        { label: 'Products', icon: 'pi pi-list' },
        { label: 'Messages', icon: 'pi pi-inbox' }
    ];

    return (
        <div className="card">
            <TabMenu model={items} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';

export default function BasicDemo() {
    const items: MenuItem[] = [
        { label: 'Dashboard', icon: 'pi pi-home' },
        { label: 'Transactions', icon: 'pi pi-chart-line' },
        { label: 'Products', icon: 'pi pi-list' },
        { label: 'Messages', icon: 'pi pi-inbox' }
    ];

    return (
        <div className="card">
            <TabMenu model={items} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Steps requires a collection of menuitems as its <i>model</i>.
                </p>
            </DocSectionText>
            <div className="card">
                <TabMenu model={items} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
