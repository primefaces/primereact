import { useRef } from 'react';
import { SplitButton } from '../../lib/splitbutton/SplitButton';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SizesDoc(props) {
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: (e) => {
                toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: (e) => {
                toast.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: (e) => {
                window.location.href = 'https://facebook.github.io/react/';
            }
        },
        {
            label: 'Upload',
            icon: 'pi pi-upload',
            command: (e) => {
                window.location.hash = '/fileupload';
            }
        }
    ];

    const code = {
        basic: `
<Toast ref={toast}></Toast>
<SplitButton label="Save" icon="pi pi-plus"  onClick={save} model={items}></SplitButton>
        `,
        javascript: `
import { useRef } from 'react';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function SizesDoc() {
    const toast = useRef(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: (e) => {
                toast.current.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: (e) => {
                toast.current.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command:(e) => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command:(e) => {
                window.location.hash = "/fileupload"
            }
        }
    ]

    return (
        <div>
            <Toast ref={toast}></Toast>
            <SplitButton label="Small" model={items} className="p-button-sm mr-2 mb-2" />
            <SplitButton label="Normal" model={items} className="mr-2 mb-2" />
            <SplitButton label="Large" model={items} className="p-button-lg mr-2 mb-2" />
        </div>
    )
}
        `,
        typescript: `
import { useRef } from 'react';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function SizesDoc() {
    const toast = useRef<Toast>(null);
    const items = [
        {
            label: 'Update',
            icon: 'pi pi-refresh',
            command: (e) => {
                toast.current?.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }
        },
        {
            label: 'Delete',
            icon: 'pi pi-times',
            command: (e) => {
                toast.current?.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }
        },
        {
            label: 'React Website',
            icon: 'pi pi-external-link',
            command:(e) => {
                window.location.href = 'https://facebook.github.io/react/'
            }
        },
        {   label: 'Upload',
            icon: 'pi pi-upload',
            command:(e) => {
                window.location.hash = "/fileupload"
            }
        }
    ]

    return (
        <div>
            <Toast ref={toast}></Toast>
            <SplitButton label="Small" model={items} className="p-button-sm mr-2 mb-2" />
            <SplitButton label="Normal" model={items} className="mr-2 mb-2" />
            <SplitButton label="Large" model={items} className="p-button-lg mr-2 mb-2" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Outlined Buttons</p>
            </DocSectionText>
            <div className="card">
                <Toast ref={toast}></Toast>
                <SplitButton label="Small" model={items} className="p-button-sm mr-2 mb-2" />
                <SplitButton label="Normal" model={items} className="mr-2 mb-2" />
                <SplitButton label="Large" model={items} className="p-button-lg mr-2 mb-2" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
