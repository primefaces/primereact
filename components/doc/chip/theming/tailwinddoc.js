import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {          
    chip: {
        root: {
            className: classNames('inline-flex items-center', 'bg-gray-200 text-gray-800 rounded-[16px] px-3 dark:text-white/80 dark:bg-gray-900')
        },
        label: 'leading-6 mt-1.5 mb-1.5',
        icon: 'leading-6 mr-2',
        image: {
            className: classNames('w-9 h-9 ml-[-0.75rem] mr-2', 'rounded-full')
        },
        removeIcon: {
            className: classNames('ml-2 rounded-md transition duration-200 ease-in-out', 'cursor-pointer leading-6')
        }
    }
}
    `
    };

    const code2 = {
        javascript: `
import React from 'react';
import { Chip } from 'primereact/chip';

export default function UnstyledDemo() {
    return (
        <div className="card flex flex-wrap gap-2">
            <Chip label="Apple" icon="pi pi-apple" />
            <Chip label="Facebook" icon="pi pi-facebook" />
            <Chip label="Google" icon="pi pi-google" />
            <Chip label="Microsoft" icon="pi pi-microsoft" removable />
        </div>
    );
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
