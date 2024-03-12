import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
export const TRANSITIONS = {
    overlay: {
        timeout: 150,
        classNames: {
            enter: 'opacity-0 scale-75',
            enterActive: 'opacity-100 !scale-100 transition-transform transition-opacity duration-150 ease-in',
            exit: 'opacity-100',
            exitActive: '!opacity-0 transition-opacity duration-150 ease-linear'
        }
    }
};

const Tailwind = {
    menu: {
        root: 'py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border border-gray-300 dark:border-blue-900/40 rounded-md w-48',
        menu: {
            className: classNames('m-0 p-0 list-none', 'outline-none')
        },
        content: ({ context }) => ({
            className: classNames(
                'text-gray-700 dark:text-white/80 transition-shadow duration-200 rounded-none',
                'hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80', // Hover
                {
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused
                }
            )
        }),
        action: {
            className: classNames('text-gray-700 dark:text-white/80 py-3 px-5 select-none', 'cursor-pointer flex items-center no-underline overflow-hidden relative')
        },
        icon: 'text-gray-600 dark:text-white/70 mr-2',
        submenuheader: {
            className: classNames('m-0 p-3 text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 font-bold rounded-tl-none rounded-tr-none')
        },
        separator: 'border-t border-gray-300 dark:border-blue-900/40 my-1',
        transition: TRANSITIONS.overlay
    }
}
        `
    };

    const code2 = {
        javascript: `
import React from 'react'; 
import { Menu } from 'primereact/menu';

export default function UnstyledDemo() {
    let items = [
        {label: 'New', icon: 'pi pi-fw pi-plus'},
        {label: 'Delete', icon: 'pi pi-fw pi-trash'}
    ];

    return (
        <div className="card flex justify-center">
            <Menu model={items} />
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
