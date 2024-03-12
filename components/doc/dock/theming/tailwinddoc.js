import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    dock: {
        root: ({ props }) => ({
            className: classNames('absolute z-1 flex justify-center items-center pointer-events-none', {
                'left-0 bottom-0 w-full': props.position == 'bottom',
                'left-0 top-0 w-full': props.position == 'top',
                'left-0 top-0 h-full': props.position == 'left',
                'right-0 top-0 h-full': props.position == 'right'
            })
        }),
        container: {
            className: classNames('flex pointer-events-auto', 'bg-white/10 border-white/20 p-2 border rounded-md')
        },
        menu: ({ props }) => ({
            className: classNames('m-0 p-0 list-none flex items-center justify-center', 'outline-none', {
                'flex-col': props.position == 'left' || props.position == 'right'
            })
        }),
        menuitem: ({ props, context, state }) => ({
            className: classNames(
                'p-2 rounded-md',
                'transition-all duration-200 ease-cubic-bezier-will-change-transform transform ',
                {
                    'origin-bottom hover:mx-6': props.position == 'bottom',
                    'origin-top hover:mx-6': props.position == 'top',
                    'origin-left hover:my-6': props.position == 'left',
                    'origin-right hover:my-6': props.position == 'right'
                },
                {
                    'hover:scale-150': state.currentIndex === context.index,
                    'scale-125': state.currentIndex - 1 === context.index || state.currentIndex + 1 === context.index,
                    'scale-110': state.currentIndex - 2 === context.index || state.currentIndex + 2 === context.index
                }
            )
        }),
        action: {
            className: classNames('flex flex-col items-center justify-center relative overflow-hidden cursor-default', 'w-16 h-16')
        }
    }
}
    `
    };

    const code2 = {
        javascript: `
import React, { useState } from 'react';
import { Dock } from 'primereact/dock';
import { RadioButton } from 'primereact/radiobutton';
import './DockDemo.css';

export default function BasicDemo() {
    const [position, setPosition] = useState('bottom');    
    const items = [
        {
            label: 'Finder',
            icon: () => <img alt="Finder" src="https://primefaces.org/cdn/primereact/images/dock/finder.svg" width="100%" />,
        },
        {
            label: 'App Store',
            icon: () => <img alt="App Store" src="https://primefaces.org/cdn/primereact/images/dock/appstore.svg" width="100%" />,
        },
        {
            label: 'Photos',
            icon: () => <img alt="Photos" src="https://primefaces.org/cdn/primereact/images/dock/photos.svg" width="100%" />,
        },
        {
            label: 'Trash',
            icon: () => <img alt="trash" src="https://primefaces.org/cdn/primereact/images/dock/trash.png" width="100%" />,
        }
    ];

    const positions = [
        {
            label: 'Bottom',
            value: 'bottom'
        },
        {
            label: 'Top',
            value: 'top'
        },
        {
            label: 'Left',
            value: 'left'
        },
        {
            label: 'Right',
            value: 'right'
        }
    ];

    return (
        <div className="card dock-demo">
            <div className="flex flex-wrap gap-3 mb-5">
                {positions.map((option) => {
                    const { value, label } = option;

                    return (
                        <div className="flex items-center" key={label}>
                            <RadioButton value={label} onChange={() => setPosition(option.value)} checked={position === value} />
                            <label htmlFor={label} className="ml-2">
                                {label}
                            </label>
                        </div>
                    );
                })}
            </div>
            <div className="dock-window" style={{ backgroundImage: 'url(https://primefaces.org/cdn/primereact/images/dock/window.jpg)' }}>
                <Dock model={items} position={position} />
            </div>
        </div>
    )
}`,
        extFiles: {
            'DockDemo.css': `
/* DockDemo.css */
.dock-demo .dock-window {
    width: 100%;
    height: 450px;
    position: relative;
    background-image: url('https://primefaces.org/cdn/primereact/images/dock/window.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    }
.dock-demo .p-dock {
    z-index: 1000;
}`
        }
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
