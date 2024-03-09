import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { SpeedDial } from '@/components/lib/speeddial/SpeedDial';
import { Toast } from '@/components/lib/toast/Toast';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export function QuarterCircleDoc(props) {
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
<SpeedDial model={items} radius={120} type="quarter-circle" direction="up-left" style={{ right: 0, bottom: 0 }} />
<SpeedDial model={items} radius={120} type="quarter-circle" direction="up-right" style={{ left: 0, bottom: 0 }} />
<SpeedDial model={items} radius={120} type="quarter-circle" direction="down-left" style={{ right: 0, top: 0 }} />
<SpeedDial model={items} radius={120} type="quarter-circle" direction="down-right" style={{ left: 0, top: 0 }} />
        `,
        javascript: `
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { useRouter } from 'next/router';
import { Toast } from 'primereact/toast';

export default function QuarterCircleDemo() {
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
            <div style={{ position: 'relative', height: '500px' }}>
                <Toast ref={toast} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="up-left" style={{ right: 0, bottom: 0 }} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="up-right" style={{ left: 0, bottom: 0 }} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="down-left" style={{ right: 0, top: 0 }} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="down-right" style={{ left: 0, top: 0 }} />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/router';
import { MenuItem } from 'primereact/menuitem';

export default function QuarterCircleDemo() {
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
            <div style={{ position: 'relative', height: '500px' }}>
                <Toast ref={toast} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="up-left" style={{ right: 0, bottom: 0 }} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="up-right" style={{ left: 0, bottom: 0 }} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="down-left" style={{ right: 0, top: 0 }} />
                <SpeedDial model={items} radius={120} type="quarter-circle" direction="down-right" style={{ left: 0, top: 0 }} />
            </div>
        </div>
    )
}`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Setting <i>type</i> as <i>quarter-circle</i> displays the items at one of four corners of a button based on the <i>direction</i>.
                </p>
            </DocSectionText>
            <div className="card">
                <div style={{ position: 'relative', height: '500px' }}>
                    <Toast ref={toast} />
                    <SpeedDial model={items} radius={120} type="quarter-circle" direction="up-left" style={{ right: 0, bottom: 0 }} />
                    <SpeedDial model={items} radius={120} type="quarter-circle" direction="up-right" style={{ left: 0, bottom: 0 }} />
                    <SpeedDial model={items} radius={120} type="quarter-circle" direction="down-left" style={{ right: 0, top: 0 }} />
                    <SpeedDial model={items} radius={120} type="quarter-circle" direction="down-right" style={{ left: 0, top: 0 }} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
