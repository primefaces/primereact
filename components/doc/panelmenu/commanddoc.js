import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { PanelMenu } from '@/components/lib/panelmenu/PanelMenu';
import { useRef } from 'react';
import { Toast } from '@/components/lib/toast/Toast';

export function CommandDoc(props) {
    const toast = useRef(null);

    const items = [
        {
            label: 'Files',
            icon: 'pi pi-file',
            items: [
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
                        toast.current.show({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
                    }
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print',
                    command: () => {
                        toast.current.show({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Sync',
            icon: 'pi pi-cloud',
            items: [
                {
                    label: 'Import',
                    icon: 'pi pi-cloud-download',
                    command: () => {
                        toast.current.show({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
                    }
                },
                {
                    label: 'Export',
                    icon: 'pi pi-cloud-upload',
                    command: () => {
                        toast.current.show({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Sign Out',
            icon: 'pi pi-sign-out',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Signed out', detail: 'User logged out', life: 3000 });
            }
        }
    ];
    const code = {
        basic: `
<PanelMenu model={items} className="w-full md:w-20rem" />   
<Toast ref={toast} />
`,
        javascript: `
import React, { useRef } from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { Toast } from 'primereact/toast';

export default function CommandDemo() {
    const toast = useRef(null);

    const items = [
        {
            label: 'Files',
            icon: 'pi pi-file',
            items: [
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
                        toast.current.show({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
                    }
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print',
                    command: () => {
                        toast.current.show({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Sync',
            icon: 'pi pi-cloud',
            items: [
                {
                    label: 'Import',
                    icon: 'pi pi-cloud-download',
                    command: () => {
                        toast.current.show({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
                    }
                },
                {
                    label: 'Export',
                    icon: 'pi pi-cloud-upload',
                    command: () => {
                        toast.current.show({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Sign Out',
            icon: 'pi pi-sign-out',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Signed out', detail: 'User logged out', life: 3000 });
            }
        }
    ];
    return (
        <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-20rem" />
            <Toast ref={toast} />
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function CommandDemo() {
    const toast = useRef<Toast>(null);

    const items: MenuItem[] = [
        {
            label: 'Files',
            icon: 'pi pi-file',
            items: [
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
                        toast.current.show({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
                    }
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print',
                    command: () => {
                        toast.current.show({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Sync',
            icon: 'pi pi-cloud',
            items: [
                {
                    label: 'Import',
                    icon: 'pi pi-cloud-download',
                    command: () => {
                        toast.current.show({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
                    }
                },
                {
                    label: 'Export',
                    icon: 'pi pi-cloud-upload',
                    command: () => {
                        toast.current.show({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
                    }
                }
            ]
        },
        {
            label: 'Sign Out',
            icon: 'pi pi-sign-out',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Signed out', detail: 'User logged out', life: 3000 });
            }
        }
    ];
    return (
        <div className="card flex justify-content-center">
            <PanelMenu model={items} className="w-full md:w-20rem" />
            <Toast ref={toast} />
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
            <div className="card flex justify-content-center">
                <PanelMenu model={items} className="w-full md:w-20rem" />
                <Toast ref={toast} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
