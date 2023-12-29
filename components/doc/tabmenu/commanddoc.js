import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { TabMenu } from '@/components/lib/tabmenu/TabMenu';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef } from 'react';

export function CommandDoc(props) {
    const toast = useRef(null);

    const items = [
        {
            label: 'Dashboard',
            icon: 'pi pi-home',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Dashboard', life: 3000 });
            }
        },
        {
            label: 'Transactions',
            icon: 'pi pi-chart-line',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Transactions', life: 3000 });
            }
        },
        {
            label: 'Products',
            icon: 'pi pi-list',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Products', life: 3000 });
            }
        },
        {
            label: 'Messages',
            icon: 'pi pi-inbox',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Messages', life: 3000 });
            }
        }
    ];

    const code = {
        basic: `
<Toast ref={toast} />
<TabMenu model={items} />
        `,
        javascript: `
import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';

export default function CommandDemo() {
    const toast = useRef(null);
    const items = [
        {
            label: 'Dashboard',
            icon: 'pi pi-home',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Dashboard', life: 3000 });
            }
        },
        {
            label: 'Transactions',
            icon: 'pi pi-chart-line',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Transactions', life: 3000 });
            }
        },
        {
            label: 'Products',
            icon: 'pi pi-list',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Products', life: 3000 });
            }
        },
        {
            label: 'Messages',
            icon: 'pi pi-inbox',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Messages', life: 3000 });
            }
        }
    ];

    return (
        <div className="card">
            <Toast ref={toast} />
            <TabMenu model={items} />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import { MenuItem } from 'primereact/menuitem';

export default function CommandDemo() {
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Dashboard',
            icon: 'pi pi-home',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Dashboard', life: 3000 });
            }
        },
        {
            label: 'Transactions',
            icon: 'pi pi-chart-line',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Transactions', life: 3000 });
            }
        },
        {
            label: 'Products',
            icon: 'pi pi-list',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Products', life: 3000 });
            }
        },
        {
            label: 'Messages',
            icon: 'pi pi-inbox',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Selected', detail: 'Messages', life: 3000 });
            }
        }
    ];

    return (
        <div className="card">
            <Toast ref={toast} />
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
                    The <i>command</i> property defines the callback to run when an item is activated by click or a key event.
                </p>
            </DocSectionText>
            <div className="card">
                <Toast ref={toast} />
                <TabMenu model={items} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
