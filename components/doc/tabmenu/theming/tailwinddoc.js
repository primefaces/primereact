import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
     tabmenu: {
        root: 'overflow-x-auto',
        menu: {
            className: classNames('flex m-0 p-0 list-none flex-nowrap', 'bg-white border-solid border-gray-300 border-b-2', 'outline-none no-underline text-base list-none')
        },
        menuitem: 'mr-0',
        action: ({ context, parent }) => ({
            className: classNames(
                'cursor-pointer select-none flex items-center relative no-underline overflow-hidden',
                'border-b-2 p-5 font-bold rounded-t-lg ',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'border-gray-300 bg-white text-gray-700 hover:bg-white hover:border-gray-400 hover:text-gray-600 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80': state.activeIndex !== context.index, // Condition-based hover styles.
                    'bg-white border-blue-500 text-blue-500 dark:bg-gray-900 dark:border-blue-300 dark:text-blue-300': parent.state.activeIndex === context.index // Condition-based active styles.
                }
            ),
            style: { top: '2px' }
        }),
        icon: 'mr-2'
    }
}
        `
    };

    const code2 = {
        javascript: `
import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';

export default function UnstyledDemo() {
    const items = [
        {label: 'Home', icon: 'pi pi-fw pi-home'},
        {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
        {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
        {label: 'Documentation', icon: 'pi pi-fw pi-file'},
        {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];

    return (
        <div className="card">
            <TabMenu model={items} />
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
