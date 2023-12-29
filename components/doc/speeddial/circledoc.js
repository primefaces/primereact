import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { SpeedDial } from '@/components/lib/speeddial/SpeedDial';
import { Toast } from '@/components/lib/toast/Toast';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export function CircleDoc(props) {
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
<SpeedDial model={items} radius={80} type="circle" buttonClassName="p-button-warning" />
        `,
        javascript: `
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';

export default function CircleDemo() {
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
            <div style={{ height: '500px' }} className="flex align-items-center justify-content-center">
                <Toast ref={toast} />
                <SpeedDial model={items} radius={80} type="circle" buttonClassName="p-button-warning" />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';
import { MenuItem } from 'primereact/menuitem';

export default function CircleDemo() {
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
            <div style={{ height: '500px' }} className="flex align-items-center justify-content-center">
                <Toast ref={toast} />
                <SpeedDial model={items} radius={80} type="circle" buttonClassName="p-button-warning" />
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
                    Items can be displayed around the button when <i>type</i> is set to <i>circle</i>. Additional <i>radius</i> property defines the radius of the circle.
                </p>
            </DocSectionText>
            <div className="card">
                <div style={{ height: '500px' }} className="flex align-items-center justify-content-center">
                    <Toast ref={toast} />
                    <SpeedDial model={items} radius={80} type="circle" buttonClassName="p-button-warning" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
