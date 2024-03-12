import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    togglebutton: {
        root: ({ props, state }) => ({
            className: classNames(
                'inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative',
                'px-4 py-3 rounded-md text-base w-36',
                'border transition duration-200 ease-in-out',
                {
                    'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': state.focused
                },
                {
                    'bg-white dark:bg-gray-900 border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-gray-800/80 hover:border-gray-300 dark:hover:bg-gray-800/70 hover:text-gray-700 dark:hover:text-white/80':
                        !props.checked,
                    'bg-blue-500 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600': props.checked
                },
                { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
            )
        }),
        label: 'font-bold text-center w-full',
        icon: ({ props }) => ({
            className: classNames(' mr-2', {
                'text-gray-600 dark:text-white/70': !props.checked,
                'text-white': props.checked
            })
        })
    }
}
    `
    };

    const code2 = {
        javascript: `
import React, { useState } from "react";
import { ToggleButton } from 'primereact/togglebutton';

export default function UnstyledDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-center">
            <ToggleButton checked={checked} onChange={(e) => setChecked(e.value)} className="w-8rem" />
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
