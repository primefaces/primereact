import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { SpeedDial } from '@/components/lib/speeddial/SpeedDial';
import { Toast } from '@/components/lib/toast/Toast';
import { Tooltip } from '@/components/lib/tooltip/Tooltip';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export function TooltipDoc(props) {
    const toast = useRef(null);
    const router = useRouter();
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    const code = {
        basic: `
<Toast ref={toast} />
<Tooltip target=".speeddial-bottom-right .p-speeddial-action" position="left" />
<SpeedDial model={items} direction="up" className="speeddial-bottom-right right-0 bottom-0" buttonClassName="p-button-danger" />

<Tooltip target=".speeddial-bottom-left .p-speeddial-action" />
<SpeedDial model={items} direction="up" className="speeddial-bottom-left left-0 bottom-0" buttonClassName="p-button-help" />
        `,
        javascript: `
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';

export default function TooltipDemo() {
    const toast = useRef(null);
    const router = useRouter();
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '350px' }}>
                <Toast ref={toast} />
                <Tooltip target=".speeddial-bottom-right .p-speeddial-action" position="left" />
                <SpeedDial model={items} direction="up" className="speeddial-bottom-right right-0 bottom-0" buttonClassName="p-button-danger" />
                <Tooltip target=".speeddial-bottom-left .p-speeddial-action" />
                <SpeedDial model={items} direction="up" className="speeddial-bottom-left left-0 bottom-0" buttonClassName="p-button-help" />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/router';
import { MenuItem } from 'primereact/menuitem';

export default function TooltipDoc() {
    const toast = useRef<Toast>(null);
    const router = useRouter();
    const items: MenuItem[] = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
            }
        },
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://react.dev/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '350px' }}>
                <Toast ref={toast} />
                <Tooltip target=".speeddial-bottom-right .p-speeddial-action" position="left" />
                <SpeedDial model={items} direction="up" className="speeddial-bottom-right right-0 bottom-0" buttonClassName="p-button-danger" />
                <Tooltip target=".speeddial-bottom-left .p-speeddial-action" />
                <SpeedDial model={items} direction="up" className="speeddial-bottom-left left-0 bottom-0" buttonClassName="p-button-help" />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Items display a tooltip on hober when a standalone <Link href="/tooltip">Tooltip</Link> is present with a target that matches the items.
                </p>
            </DocSectionText>
            <div className="card">
                <div style={{ position: 'relative', height: '350px' }}>
                    <Toast ref={toast} />
                    <Tooltip target=".speeddial-bottom-right .p-speeddial-action" position="left" />
                    <SpeedDial model={items} direction="up" className="speeddial-bottom-right right-0 bottom-0" buttonClassName="p-button-danger" />
                    <Tooltip target=".speeddial-bottom-left .p-speeddial-action" />
                    <SpeedDial model={items} direction="up" className="speeddial-bottom-left left-0 bottom-0" buttonClassName="p-button-help" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
