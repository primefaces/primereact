import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { SplitButton } from '@/components/lib/splitbutton/SplitButton';
import { Toast } from '@/components/lib/toast/Toast';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export function RaisedTextDoc(props) {
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
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} raised text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" raised text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" raised text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" raised text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" raised text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" raised text />
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" raised text />
        `,
        javascript: `
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function RaisedTextDemo() {
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
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" raised text />
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

export default function RaisedTextDemo() {
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
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" raised text />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" raised text />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Text buttons can be displayed as raised as well for elevation.</p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <Toast ref={toast}></Toast>
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} raised text />
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" raised text />
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" raised text />
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" raised text />
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" raised text />
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" raised text />
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" raised text />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
