import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {    
    breadcrumb: {
        root: {
            className: classNames('overflow-x-auto', 'bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 rounded-md p-4')
        },
        menu: 'm-0 p-0 list-none flex items-center flex-nowrap',
        action: {
            className: classNames(
                'text-decoration-none flex items-center',
                'transition-shadow duration-200 rounded-md text-gray-600 dark:text-white/70',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        icon: 'text-gray-600 dark:text-white/70',
        separator: {
            className: classNames('mx-2 text-gray-600 dark:text-white/70', 'flex items-center')
        }
    }
}
        `
    };

    const code2 = {
        javascript: `
import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

export default function UnstyledDemo() {
    const items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];
    const home = { icon: 'pi pi-home', url: 'https://primereact.org' }

    return (
        <div className="card">
            <BreadCrumb model={items} home={home} />
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
