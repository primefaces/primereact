import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {         
    speeddial: {
        root: 'absolute flex',
        button: {
            root: ({ state }) => ({
                className: classNames('w-16 !h-16 !rounded-full justify-center z-10', {
                    'rotate-45': state.visible
                })
            }),
            label: {
                className: 'hidden'
            }
        },
        menu: 'm-0 p-0 list-none flex items-center justify-center transition delay-200 z-20',
        menuitem: ({ props, state }) => ({
            className: classNames(
                'transform transition-transform duration-200 ease-out transition-opacity duration-800',
                !state.visible ? 'opacity-0 scale-0' : 'opacity-1 scale-100',
                {
                    'my-1 first:mb-2': props.direction == 'up' && props.type == 'linear',
                    'my-1 first:mt-2': props.direction == 'down' && props.type == 'linear',
                    'mx-1 first:mr-2': props.direction == 'left' && props.type == 'linear',
                    'mx-1 first:ml-2': props.direction == 'right' && props.type == 'linear'
                },
                { absolute: props.type !== 'linear' }
            )
        }),
        action: {
            className: classNames('flex items-center justify-center rounded-full relative overflow-hidden', 'w-12 h-12 bg-gray-700 hover:bg-gray-800 text-white')
        },
        mask: ({ state }) => ({
            className: classNames('absolute left-0 top-0 w-full h-full transition-opacity duration-250 ease-in-out bg-black/40 z-0', {
                'opacity-0': !state.visible,
                'pointer-events-none opacity-100 transition-opacity duration-400 ease-in-out': state.visible
            })
        })
    }
}
        `
    };

    const code2 = {
        javascript: `
import React, { useRef } from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { Toast } from 'primereact/toast';

export default function UnstyledDemo() {
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
            label: 'React Website',
            icon: 'pi pi-external-link',
            command: () => {
                window.location.href = 'https://facebook.github.io/react/';
            }
        }
    ];

    return (
        <div className="card">
            <div style={{ position: 'relative', height: '500px' }}>
                <Toast ref={toast} />
                <SpeedDial model={items} direction="up" style={{ left: 'calc(50% - 2rem)', bottom: 0 }} />
                <SpeedDial model={items} direction="down" style={{ left: 'calc(50% - 2rem)', top: 0 }} />
                <SpeedDial model={items} direction="left" style={{ top: 'calc(50% - 2rem)', right: 0 }} />
                <SpeedDial model={items} direction="right" style={{ top: 'calc(50% - 2rem)', left: 0 }} />
            </div>
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
