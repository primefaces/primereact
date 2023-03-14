import { useRouter } from 'next/router';
import { useRef } from 'react';
import { SplitButton } from '../../lib/splitbutton/SplitButton';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RoundedDoc(props) {
    const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    const code = {
        basic: `
<Toast ref={toast}></Toast>
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} rounded />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" rounded />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" rounded />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" rounded />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" rounded />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" rounded />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" rounded />
        `,
        javascript: `
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function RoundedDemo() {
    //const router = useRouter();
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" rounded />
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function RoundedDemo() {
    //const router = useRouter();
    const toast = useRef<Toast>(null);
    const items: MenuItem[] = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: () => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
                toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://reactjs.org/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: () => {
                //router.push('/fileupload');
            }
        }
    ];

    const save = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" rounded />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" rounded />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Rounded buttons have a circular border radius.</p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <Toast ref={toast}></Toast>
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} rounded />
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" rounded />
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" rounded />
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" rounded />
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" rounded />
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" rounded />
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" rounded />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
