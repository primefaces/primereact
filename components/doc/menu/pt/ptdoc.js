import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Menu } from '@/components/lib/menu/Menu';
import { Toast } from '@/components/lib/toast/Toast';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export function PTDoc(props) {
    const toast = useRef(null);
    const router = useRouter();
    const items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Navigate',
            items: [
                {
                    label: 'React Website',
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    command: () => {
                        router.push('/fileupload');
                    }
                }
            ]
        }
    ];

    const code = {
        basic: `
<Menu
    model={items}
    pt={{
        submenuHeader: { className: 'text-primary' }
    }}
/>
`,
        javascript: `
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';

export default function PTDemo() {
    const items = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Navigate',
            items: [
                {
                    label: 'React Website',
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    command: () => {
                        router.push('/fileupload');
                    }
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Menu
                model={items}
                pt={{
                    submenuHeader: { className: 'text-primary' }
                }}
            />
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

export default function PTDemo() {
    const items: MenuItem[] = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Update',
                    icon: 'pi pi-refresh',
                    command: () => {
                        toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
                    }
                },
                {
                    label: 'Delete',
                    icon: 'pi pi-times',
                    command: () => {
                        toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Navigate',
            items: [
                {
                    label: 'React Website',
                    icon: 'pi pi-external-link',
                    url: 'https://reactjs.org/'
                },
                {
                    label: 'Router',
                    icon: 'pi pi-upload',
                    command: () => {
                        router.push('/fileupload');
                    }
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast} />
            <Menu
                model={items}
                pt={{
                    submenuHeader: { className: 'text-primary' }
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
                <Toast ref={toast} />
                <Menu
                    model={items}
                    pt={{
                        submenuHeader: { className: 'text-primary' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
