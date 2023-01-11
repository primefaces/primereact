import { useRef } from 'react';
import { SpeedDial } from '../../lib/speeddial/SpeedDial';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function QuarterCircleDoc(props) {
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
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = '/fileupload';
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
<SpeedDial model={items} radius={120} direction="up-left" type="quarter-circle" buttonClassName="p-button-success" />
<SpeedDial model={items} radius={120} direction="up-right" type="quarter-circle" buttonClassName="p-button-success" />
<SpeedDial model={items} radius={120} direction="down-left" type="quarter-circle" buttonClassName="p-button-success" />
<SpeedDial model={items} radius={120} direction="down-right" type="quarter-circle" buttonClassName="p-button-success" />
        `,
        javascript: `
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import './SpeedDialDemo.css'

export default function QuaterCircleDoc() {
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
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = '/fileupload';
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
        <div className="card speeddial-circle-demo" style={{ position: 'relative', height: '500px' }}>
            <Toast ref={toast} />
            <SpeedDial model={items} radius={120} direction="up-left" type="quarter-circle" buttonClassName="p-button-success" />
            <SpeedDial model={items} radius={120} direction="up-right" type="quarter-circle" buttonClassName="p-button-success" />
            <SpeedDial model={items} radius={120} direction="down-left" type="quarter-circle" buttonClassName="p-button-success" />
            <SpeedDial model={items} radius={120} direction="down-right" type="quarter-circle" buttonClassName="p-button-success" />
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';
import './SpeedDialDemo.css'

export default function QuaterCircleDoc() {
    const toast = useRef<Toast>(null);
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
                toast.current?.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-trash',
            command: () => {
                toast.current?.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                window.location.hash = '/fileupload';
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
        <div className="card speeddial-circle-demo" style={{ position: 'relative', height: '500px' }}>
            <Toast ref={toast} />
            <SpeedDial model={items} radius={120} direction="up-left" type="quarter-circle" buttonClassName="p-button-success" />
            <SpeedDial model={items} radius={120} direction="up-right" type="quarter-circle" buttonClassName="p-button-success" />
            <SpeedDial model={items} radius={120} direction="down-left" type="quarter-circle" buttonClassName="p-button-success" />
            <SpeedDial model={items} radius={120} direction="down-right" type="quarter-circle" buttonClassName="p-button-success" />
        </div>
    )
}
        `,
        extFiles: {
            'SpeedDialDemo.css': `
/* SpeedDialDemo.css */

.speeddial-circle-demo .p-speeddial-circle {
    top: calc(50% - 2rem);
    left: calc(50% - 2rem);
}
.speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-up {
    left: calc(50% - 2rem);
    bottom: 0;
}
.speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-down {
    left: calc(50% - 2rem);
    top: 0;
}
.speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-left {
    right: 0;
    top: calc(50% - 2rem);
}
.speeddial-circle-demo .p-speeddial-semi-circle.p-speeddial-direction-right {
    left: 0;
    top: calc(50% - 2rem);
}
.speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-up-left {
    right: 0;
    bottom: 0;
}
.speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-up-right {
    left: 0;
    bottom: 0;
}
.speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-down-left {
    right: 0;
    top: 0;
}
.speeddial-circle-demo .p-speeddial-quarter-circle.p-speeddial-direction-down-right {
    left: 0;
    top: 0;
}
        `
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Circle, Semi-Circle and Quarter-Circle</p>
            </DocSectionText>
            <div className="card speeddial-circle-demo" style={{ position: 'relative', height: '500px' }}>
                <Toast ref={toast} />
                <SpeedDial model={items} radius={120} direction="up-left" type="quarter-circle" buttonClassName="p-button-success" />
                <SpeedDial model={items} radius={120} direction="up-right" type="quarter-circle" buttonClassName="p-button-success" />
                <SpeedDial model={items} radius={120} direction="down-left" type="quarter-circle" buttonClassName="p-button-success" />
                <SpeedDial model={items} radius={120} direction="down-right" type="quarter-circle" buttonClassName="p-button-success" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
