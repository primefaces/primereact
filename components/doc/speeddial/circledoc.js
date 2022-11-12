import { useRef } from 'react';
import { SpeedDial } from '../../lib/speeddial/SpeedDial';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function CircleDoc(props) {
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
<SpeedDial model={items} radius={80} type="circle" buttonClassName="p-button-warning" />
<SpeedDial model={items} radius={80} direction="up" type="semi-circle" />
<SpeedDial model={items} radius={80} direction="down" type="semi-circle" />
<SpeedDial model={items} radius={80} direction="left" type="semi-circle" />
<SpeedDial model={items} radius={80} direction="right" type="semi-circle" />
<SpeedDial model={items} radius={120} direction="up-left" type="quarter-circle" buttonClassName="p-button-success" />
<SpeedDial model={items} radius={120} direction="up-right" type="quarter-circle" buttonClassName="p-button-success" />
<SpeedDial model={items} radius={120} direction="down-left" type="quarter-circle" buttonClassName="p-button-success" />
<SpeedDial model={items} radius={120} direction="down-right" type="quarter-circle" buttonClassName="p-button-success" />
        `,
        javascript: `
import { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';

export default function CircleDoc() {
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
        <div className="speeddial-circle-demo" style={{ position: 'relative', height: '500px' }}>
            <Toast ref={toast} />
            <SpeedDial model={items} radius={80} type="circle" buttonClassName="p-button-warning" />
            <SpeedDial model={items} radius={80} direction="up" type="semi-circle" />
            <SpeedDial model={items} radius={80} direction="down" type="semi-circle" />
            <SpeedDial model={items} radius={80} direction="left" type="semi-circle" />
            <SpeedDial model={items} radius={80} direction="right" type="semi-circle" />
            <SpeedDial model={items} radius={120} direction="up-left" type="quarter-circle" buttonClassName="p-button-success" />
            <SpeedDial model={items} radius={120} direction="up-right" type="quarter-circle" buttonClassName="p-button-success" />
            <SpeedDial model={items} radius={120} direction="down-left" type="quarter-circle" buttonClassName="p-button-success" />
            <SpeedDial model={items} radius={120} direction="down-right" type="quarter-circle" buttonClassName="p-button-success" />
        </div>
    )
}
        `,
        typescript: `
import { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';

export default function CircleDoc() {
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
        <div className="speeddial-circle-demo" style={{ position: 'relative', height: '500px' }}>
            <Toast ref={toast} />
            <SpeedDial model={items} radius={80} type="circle" buttonClassName="p-button-warning" />
            <SpeedDial model={items} radius={80} direction="up" type="semi-circle" />
            <SpeedDial model={items} radius={80} direction="down" type="semi-circle" />
            <SpeedDial model={items} radius={80} direction="left" type="semi-circle" />
            <SpeedDial model={items} radius={80} direction="right" type="semi-circle" />
            <SpeedDial model={items} radius={120} direction="up-left" type="quarter-circle" buttonClassName="p-button-success" />
            <SpeedDial model={items} radius={120} direction="up-right" type="quarter-circle" buttonClassName="p-button-success" />
            <SpeedDial model={items} radius={120} direction="down-left" type="quarter-circle" buttonClassName="p-button-success" />
            <SpeedDial model={items} radius={120} direction="down-right" type="quarter-circle" buttonClassName="p-button-success" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Circle, Semi-Circle and Quarter-Circle</DocSectionText>
            <div className="card">
                <div className="speeddial-circle-demo" style={{ position: 'relative', height: '500px' }}>
                    <Toast ref={toast} />
                    <SpeedDial model={items} radius={80} type="circle" buttonClassName="p-button-warning" />
                    <SpeedDial model={items} radius={80} direction="up" type="semi-circle" />
                    <SpeedDial model={items} radius={80} direction="down" type="semi-circle" />
                    <SpeedDial model={items} radius={80} direction="left" type="semi-circle" />
                    <SpeedDial model={items} radius={80} direction="right" type="semi-circle" />
                    <SpeedDial model={items} radius={120} direction="up-left" type="quarter-circle" buttonClassName="p-button-success" />
                    <SpeedDial model={items} radius={120} direction="up-right" type="quarter-circle" buttonClassName="p-button-success" />
                    <SpeedDial model={items} radius={120} direction="down-left" type="quarter-circle" buttonClassName="p-button-success" />
                    <SpeedDial model={items} radius={120} direction="down-right" type="quarter-circle" buttonClassName="p-button-success" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
