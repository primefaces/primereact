import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const TRANSITIONS = {
    toggleable: {
        timeout: 500,
        classNames: {
            enter: 'max-h-0',
            enterActive: '!max-h-40 overflow-hidden transition-all duration-500 ease-in-out',
            exit: 'max-h-40',
            exitActive: '!max-h-0 overflow-hidden transition-all duration-500 ease-in'
        }
    },
};

const Tailwind = {
    panelmenu: {
        root: 'w-full md:w-[25rem]',
        panel: 'mb-1',
        header: {
            className: classNames(
                'outline-none',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]' // Focus
            )
        },
        headercontent: {
            className: classNames(
                'border border-solid border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 bg-gray-100 dark:bg-gray-900 rounded-md transition-shadow duration-200',
                'hover:bg-gray-200 dark:hover:bg-gray-800/80  hover:text-gray-700 dark:hover:text-white/80'
            )
        },
        headeraction: {
            className: classNames('flex items-center select-none cursor-pointer relative no-underline', 'text-gray-700 dark:text-white/80 p-5 font-bold')
        },
        submenuicon: 'mr-2',
        headericon: 'mr-2',
        menucontent: 'py-1 border border-t-0 border-gray-300 dark:border-blue-900/40 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 rounded-t-none rounded-br-md rounded-bl-md',
        menu: {
            className: classNames('outline-none', 'm-0 p-0 list-none')
        },
        menuitem: ({ context }) => ({
            className: classNames(
                'text-gray-700 dark:text-white/80 transition-shadow duration-200 border-none rounded-none',
                'hover:bg-gray-200 dark:hover:bg-gray-800/80  hover:text-gray-700 dark:hover:text-white/80', // Hover
                {
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused
                }
            )
        }),
        action: {
            className: classNames('text-gray-700 dark:text-white/80 py-3 px-5 select-none', 'flex items-center cursor-pointer no-underline relative overflow-hidden')
        },
        icon: 'mr-2',
        submenu: 'p-0 pl-4 m-0 list-none',
        transition: TRANSITIONS.toggleable
    }
}
        `
    };

    const code2 = {
        javascript: `
import React from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';

export default function UnstyledDemo() {
    const items = [
        {
            label:'File',
            icon:'pi pi-fw pi-file',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-plus',
                    items:[
                    {
                        label:'Bookmark',
                        icon:'pi pi-fw pi-bookmark'
                    },
                    {
                        label:'Video',
                        icon:'pi pi-fw pi-video'
                    }
                    ]
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            items:[
                {
                    label:'Left',
                    icon:'pi pi-fw pi-align-left'
                },
                {
                    label:'Right',
                    icon:'pi pi-fw pi-align-right'
                },
                {
                    label:'Center',
                    icon:'pi pi-fw pi-align-center'
                },
                {
                    label:'Justify',
                    icon:'pi pi-fw pi-align-justify'
                }
            ]
        },
        {
            label:'Users',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-user-plus'
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-user-minus'
                },
                {
                    label:'Search',
                    icon:'pi pi-fw pi-users',
                    items:[
                    {
                        label:'Filter',
                        icon:'pi pi-fw pi-filter',
                        items:[
                            {
                                label:'Print',
                                icon:'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon:'pi pi-fw pi-bars',
                        label:'List'
                    }
                    ]
                }
            ]
        },
        {
            label:'Events',
            icon:'pi pi-fw pi-calendar',
            items:[
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                    {
                        label:'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                },
                {
                    label:'Archive',
                    icon:'pi pi-fw pi-calendar-times',
                    items:[
                    {
                        label:'Remove',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-center">
            <PanelMenu model={items} className="w-full md:w-25rem" />
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
