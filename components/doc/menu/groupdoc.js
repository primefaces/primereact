import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Menu } from '@/components/lib/menu/Menu';
import { Toast } from '@/components/lib/toast/Toast';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export function GroupDoc(props) {
    const toast = useRef(null);
    const router = useRouter();
    const items = [
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search'
                }
            ]
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog'
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out'
                }
            ]
        }
    ];

    const code = {
        basic: `
<Toast ref={toast} />
<Menu model={items} />
`,
        javascript: `
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

export default function GroupDemo() {
    const toast = useRef(null);
    const router = useRouter();
    const items = [
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search'
                }
            ]
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog'
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out'
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Menu model={items} />
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function GroupDemo() {
    const toast = useRef<Toast>(null);
    const router = useRouter();
    const items: MenuItem[] = [
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search'
                }
            ]
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog'
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out'
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Menu model={items} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast} />
                <Menu model={items} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
