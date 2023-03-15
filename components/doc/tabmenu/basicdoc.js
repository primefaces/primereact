import { TabMenu } from '../../lib/tabmenu/TabMenu';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
        { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
        { label: 'Documentation', icon: 'pi pi-fw pi-file' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog' }
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
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
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
    const items: MenuItem = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
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
