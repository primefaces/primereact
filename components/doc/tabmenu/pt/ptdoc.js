import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { TabMenu } from '@/components/lib/tabmenu/TabMenu';

export function PTDoc(props) {
    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home' },
        { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
        { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
        { label: 'Documentation', icon: 'pi pi-fw pi-file' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

    const code = {
        basic: `
<TabMenu
    model={items}
    pt={{
        action: {
            className: 'surface-ground'
        }
    }}
/>
        `,
        javascript: `
import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';

export default function PTDemo() {
    const items = [
        {
            label: 'Personal'
        },
        {
            label: 'Seat'
        },
        {
            label: 'Payment'
        },
        {
            label: 'Confirmation'
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <TabMenu
                model={items}
                pt={{
                    action: {
                        className: 'surface-ground'
                    }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';

export default function PTDemo() {
    const items: MenuItem[] = [
        {
            label: 'Personal'
        },
        {
            label: 'Seat'
        },
        {
            label: 'Payment'
        },
        {
            label: 'Confirmation'
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <TabMenu
                model={items}
                pt={{
                    action: {
                        className: 'surface-ground'
                    }
                }}
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
                <TabMenu
                    model={items}
                    pt={{
                        action: {
                            className: 'surface-ground'
                        }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
