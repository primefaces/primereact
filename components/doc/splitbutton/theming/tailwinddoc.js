import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

const Tailwind = {  
    splitbutton: {
        root: ({ props }) => ({
            className: classNames('inline-flex relative', 'rounded-md', { 'shadow-lg': props.raised })
        }),
        button: {
            root: ({ parent }) => ({
                className: classNames('rounded-r-none border-r-0', { 'rounded-l-full': parent.props.rounded })
            }),
            icon: 'mr-2'
        },
        menu: {
            className: classNames('outline-none', 'm-0 p-0 list-none')
        },
        menulist: 'relative',
        menubutton: {
            root: ({ parent }) => ({
                className: classNames('rounded-l-none', { 'rounded-r-full': parent.props.rounded })
            }),
            label: 'hidden'
        }
    }
}
        `
    };

    const code2 = {
        javascript: `
import React, { useRef } from 'react';
//import { useRouter } from 'next/router';
import { SplitButton } from 'primereact/splitbutton';
import { Toast } from 'primereact/toast';

export default function UnstyledDemo() {
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
        <div className="card flex justify-content-center flex-wrap">
            <Toast ref={toast}></Toast>
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} className="mb-2" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="secondary" className="mb-2" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="success" className="mb-2" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="info" className="mb-2" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="warning" className="mb-2" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="help" className="mb-2" />
            <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} severity="danger" className="mb-2" />
        </div>
    )
}
    `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the{' '}
                    <Link href="/tailwind">Tailwind Customization</Link> section for an example.
                </p>
                <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
                <p>A playground sample with the pre-built Tailwind theme.</p>
                <DocSectionCode code={code2} embedded />
            </DocSectionText>
        </>
    );
}
