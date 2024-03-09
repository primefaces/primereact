import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Menu } from '@/components/lib/menu/Menu';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef } from 'react';

export function CommandDoc(props) {
    const toast = useRef(null);
    let items = [
        {
            label: 'New',
            icon: 'pi pi-plus',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
            }
        },
        {
            label: 'Search',
            icon: 'pi pi-search',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Search Completed', detail: 'No results found', life: 3000 });
            }
        }
    ];

    const code = {
        basic: `
<Menu model={items} />
<Toast ref={toast} />
`,
        javascript: `
import React, { useRef } from 'react'; 
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

export default function CommandDemo() {
    const toast = useRef(null);
    let items = [
        {
            label: 'New',
            icon: 'pi pi-plus',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
            }
        },
        {
            label: 'Search',
            icon: 'pi pi-search',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Search Completed', detail: 'No results found', life: 3000 });
            }
        }
    ];

    return (
        <Menu model={items} />
        <Toast ref={toast} />
    )
}
        `,
        typescript: `
import React, { useRef } from 'react'; 
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';


export default function CommandDemo() {
    const toast = useRef<Toast>(null);
    let items: MenuItem[] = [
        {
            label: 'New',
            icon: 'pi pi-plus',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
            }
        },
        {
            label: 'Search',
            icon: 'pi pi-search',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Search Completed', detail: 'No results found', life: 3000 });
            }
        }
    ];

    return (
        <Menu model={items} />
        <Toast ref={toast} />
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
            <div className="card flex justify-content-center">
                <Menu model={items} />
                <Toast ref={toast} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
