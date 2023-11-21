import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { SplitButton } from '@/components/lib/splitbutton/SplitButton';
import { Toast } from '@/components/lib/toast/Toast';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

export function LoadingDoc(props) {
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
    const [loading, setLoading] = useState(false);

    const save = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
        }, 2000);
    };

    const code = {
        basic: `
<Toast ref={toast}></Toast>
<SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} loading={loading} />
        `,
        javascript: `
import React, { useRef, useState } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function LoadingDemo() {
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

    const [loading, setLoading] = useState(false);

    const save = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
        }, 2000);
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} loading={loading} />
        </div>
    )
}
        `,
        typescript: `
import React, { useRef, useState } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { MenuItem } from 'primereact/menuitem';
import { Toast } from 'primereact/toast';

export default function LoadingDemo() {
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

    const [loading, setLoading] = useState<boolean>(false);

    const save = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
        }, 2000);
    };

    return (
        <div className="card flex justify-content-center">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} loading={loading} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    SplitButton has a default action button and a collection of additional options defined by the <i>model</i> property based on MenuModel API.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast}></Toast>
                <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} loading={loading} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
