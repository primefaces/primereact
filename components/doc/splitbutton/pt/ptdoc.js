import React, { useRef } from 'react';
import { DocSectionText } from '../../common/docsectiontext';
import { DocSectionCode } from '../../common/docsectioncode';
import { Toast } from '../../../lib/toast/Toast';
import { SplitButton } from '../../../lib/splitbutton/SplitButton';

export function PTDoc(props) {
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

    const code = {
        basic: `
<Toast ref={toast} />
<SplitButton
    pt={{
        menuButton: {
            root: { className: 'surface-ground text-primary' }
        }
    }}
    label="Save"
    icon="pi pi-plus"
    onClick={save}
    model={items}
/>
        `,
        javascript: `
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { SplitButton } from 'primereact/splitbutton';

export default function PTDemo() {
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
            <Toast ref={toast} />
            <SplitButton
                pt={{
                    menuButton: {
                        root: { className: 'surface-ground text-primary' }
                    }
                }}
                label="Save"
                icon="pi pi-plus"
                onClick={save}
                model={items}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { SplitButton } from 'primereact/splitbutton';

export default function PTDemo() {
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
        <Toast ref={toast} />
        <SplitButton
            pt={{
                menuButton: {
                    root: { className: 'surface-ground text-primary' }
                }
            }}
            label="Save"
            icon="pi pi-plus"
            onClick={save}
            model={items}
        />
    </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <Toast ref={toast} />
                <SplitButton
                    pt={{
                        menuButton: {
                            root: { className: 'surface-ground text-primary' }
                        }
                    }}
                    label="Save"
                    icon="pi pi-plus"
                    onClick={save}
                    model={items}
                />
            </div>

            <DocSectionCode code={code} />
        </>
    );
}
