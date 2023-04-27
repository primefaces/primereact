import { useRef } from 'react';
import { SpeedDial } from '../../lib/speeddial/SpeedDial';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SemiCircleDoc(props) {
    const toast = useRef(null);
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
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/';
            }
        }
    ];

    const code = {
        basic: `
<Toast ref={toast} />
<SpeedDial model={items} radius={80} type="semi-circle" direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
<SpeedDial model={items} radius={80} type="semi-circle" direction="down" style={{ left: 'calc(50% - 2rem)', top: 0 }} />
<SpeedDial model={items} radius={80} type="semi-circle" direction="left" style={{ top: 'calc(50% - 2rem)', right: 0 }} />
<SpeedDial model={items} radius={80} type="semi-circle" direction="right" style={{ top: 'calc(50% - 2rem)', left: 0 }} />
        `,
        javascript: `
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';

export default function SemiCircleDemo() {
    const toast = useRef(null);
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
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '500px' }}>
                <Toast ref={toast} />
                <SpeedDial model={items} radius={80} type="semi-circle" direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
                <SpeedDial model={items} radius={80} type="semi-circle" direction="down" style={{ left: 'calc(50% - 2rem)', top: 0 }} />
                <SpeedDial model={items} radius={80} type="semi-circle" direction="left" style={{ top: 'calc(50% - 2rem)', right: 0 }} />
                <SpeedDial model={items} radius={80} type="semi-circle" direction="right" style={{ top: 'calc(50% - 2rem)', left: 0 }} />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import { MenuItem } from 'primereact/menuitem';

export default function SemiCircleDemo() {
    const toast = useRef<Toast>(null);
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
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '500px' }}>
                <Toast ref={toast} />
                <SpeedDial model={items} radius={80} type="semi-circle" direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
                <SpeedDial model={items} radius={80} type="semi-circle" direction="down" style={{ left: 'calc(50% - 2rem)', top: 0 }} />
                <SpeedDial model={items} radius={80} type="semi-circle" direction="left" style={{ top: 'calc(50% - 2rem)', right: 0 }} />
                <SpeedDial model={items} radius={80} type="semi-circle" direction="right" style={{ top: 'calc(50% - 2rem)', left: 0 }} />
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
                    When <i>type</i> is defined as <i>semi-circle</i>, items are displayed in a half-circle around the button.
                </p>
            </DocSectionText>
            <div className="card">
                <div style={{ position: 'relative', height: '500px' }}>
                    <Toast ref={toast} />
                    <SpeedDial model={items} radius={80} type="semi-circle" direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
                    <SpeedDial model={items} radius={80} type="semi-circle" direction="down" style={{ left: 'calc(50% - 2rem)', top: 0 }} />
                    <SpeedDial model={items} radius={80} type="semi-circle" direction="left" style={{ top: 'calc(50% - 2rem)', right: 0 }} />
                    <SpeedDial model={items} radius={80} type="semi-circle" direction="right" style={{ top: 'calc(50% - 2rem)', left: 0 }} />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
