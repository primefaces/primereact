import { useRef } from 'react';
import { SplitButton } from '../../lib/splitbutton/SplitButton';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function OutlinedButtonsDoc(props) {
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

export default function OutlinedButtonsDoc() {
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
            <SplitButton label="Primary" model={items} className="p-button-outlined mr-2 mb-2"></SplitButton>
            <SplitButton label="Secondary" model={items} className="p-button-outlined p-button-secondary mr-2 mb-2"></SplitButton>
            <SplitButton label="Success" model={items} className="p-button-outlined p-button-success mr-2 mb-2"></SplitButton>
            <SplitButton label="Info" model={items} className="p-button-outlined p-button-info mr-2 mb-2"></SplitButton>
            <SplitButton label="Warning" model={items} className="p-button-outlined p-button-warning mr-2 mb-2"></SplitButton>
            <SplitButton label="Help" model={items} className="p-button-outlined p-button-help mr-2 mb-2"></SplitButton>
            <SplitButton label="Danger" model={items} className="p-button-outlined p-button-danger mr-2 mb-2"></SplitButton>
        </div>
    )
}
        `,
        typescript: `
import { useRef } from 'react';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function OutlinedButtonsDoc() {
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
            <SplitButton label="Primary" model={items} className="p-button-outlined mr-2 mb-2"></SplitButton>
            <SplitButton label="Secondary" model={items} className="p-button-outlined p-button-secondary mr-2 mb-2"></SplitButton>
            <SplitButton label="Success" model={items} className="p-button-outlined p-button-success mr-2 mb-2"></SplitButton>
            <SplitButton label="Info" model={items} className="p-button-outlined p-button-info mr-2 mb-2"></SplitButton>
            <SplitButton label="Warning" model={items} className="p-button-outlined p-button-warning mr-2 mb-2"></SplitButton>
            <SplitButton label="Help" model={items} className="p-button-outlined p-button-help mr-2 mb-2"></SplitButton>
            <SplitButton label="Danger" model={items} className="p-button-outlined p-button-danger mr-2 mb-2"></SplitButton>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Outlined Buttons</DocSectionText>
            <div className="card">
                <Toast ref={toast}></Toast>
                <SplitButton label="Primary" model={items} className="p-button-outlined mr-2 mb-2"></SplitButton>
                <SplitButton label="Secondary" model={items} className="p-button-outlined p-button-secondary mr-2 mb-2"></SplitButton>
                <SplitButton label="Success" model={items} className="p-button-outlined p-button-success mr-2 mb-2"></SplitButton>
                <SplitButton label="Info" model={items} className="p-button-outlined p-button-info mr-2 mb-2"></SplitButton>
                <SplitButton label="Warning" model={items} className="p-button-outlined p-button-warning mr-2 mb-2"></SplitButton>
                <SplitButton label="Help" model={items} className="p-button-outlined p-button-help mr-2 mb-2"></SplitButton>
                <SplitButton label="Danger" model={items} className="p-button-outlined p-button-danger mr-2 mb-2"></SplitButton>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
