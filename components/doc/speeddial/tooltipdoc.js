import { useRef } from 'react';
import { SpeedDial } from '../../lib/speeddial/SpeedDial';
import { Toast } from '../../lib/toast/Toast';
import { Tooltip } from '../../lib/tooltip/Tooltip';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TooltipDoc(props) {
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
<Tooltip target=".speeddial-tooltip-demo .speeddial-right .p-speeddial-action" position="left" />
<SpeedDial model={items} direction="up" className="speeddial-right" buttonClassName="p-button-danger" />

<Tooltip target=".speeddial-tooltip-demo .speeddial-left .p-speeddial-action" />
<SpeedDial model={items} direction="up" className="speeddial-left" buttonClassName="p-button-help" />
        `,
        javascript: `
import { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';

export default function TooltipDoc() {
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
        <div className="speeddial-tooltip-demo" style={{ position: 'relative', height: '350px' }}>
            <Toast ref={toast} />
            <Tooltip target=".speeddial-tooltip-demo .speeddial-right .p-speeddial-action" position="left" />
            <SpeedDial model={items} direction="up" className="speeddial-right" buttonClassName="p-button-danger" />

            <Tooltip target=".speeddial-tooltip-demo .speeddial-left .p-speeddial-action" />
            <SpeedDial model={items} direction="up" className="speeddial-left" buttonClassName="p-button-help" />
        </div>
    )
}
        `,
        typescript: `
import { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';

export default function TooltipDoc() {
    const toast = useRef<Toast>(null);
    const items = [
        {
            label: 'Add',
            icon: 'pi pi-pencil',
            command: () => {
                toast.current?.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
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
        <div className="speeddial-tooltip-demo" style={{ position: 'relative', height: '350px' }}>
            <Toast ref={toast} />
            <Tooltip target=".speeddial-tooltip-demo .speeddial-right .p-speeddial-action" position="left" />
            <SpeedDial model={items} direction="up" className="speeddial-right" buttonClassName="p-button-danger" />

            <Tooltip target=".speeddial-tooltip-demo .speeddial-left .p-speeddial-action" />
            <SpeedDial model={items} direction="up" className="speeddial-left" buttonClassName="p-button-help" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Tooltip</p>
            </DocSectionText>
            <div className="card">
                <div className="speeddial-tooltip-demo" style={{ position: 'relative', height: '350px' }}>
                    <Toast ref={toast} />
                    <Tooltip target=".speeddial-tooltip-demo .speeddial-right .p-speeddial-action" position="left" />
                    <SpeedDial model={items} direction="up" className="speeddial-right" buttonClassName="p-button-danger" />
                    <Tooltip target=".speeddial-tooltip-demo .speeddial-left .p-speeddial-action" />
                    <SpeedDial model={items} direction="up" className="speeddial-left" buttonClassName="p-button-help" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
