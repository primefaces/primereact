import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {        
    chips: {
        root: ({ props }) => ({
            className: classNames('flex', {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            })
        }),
        container: {
            className: classNames(
                'm-0 py-1.5 px-3 list-none cursor-text overflow-hidden flex items-center flex-wrap',
                'w-full',
                'font-sans text-base text-gray-600 dark:text-white/70 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        inputToken: {
            className: classNames('py-1.5 px-0', 'flex flex-1 inline-flex')
        },
        input: {
            className: classNames('font-sans text-base text-gray-700 dark:text-white/80 p-0 m-0', 'border-0 outline-none bg-transparent shadow-none rounded-none w-full')
        },
        token: {
            className: classNames('py-1 px-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center')
        },
        removeTokenIcon: 'ml-2'
    }
}
        `
    };

    const code2 = {
        javascript: `
import React, { useState } from "react";
import { Chips } from "primereact/chips";

export default function UnstyledDemo() {
    const [value, setValue] = useState([]);

    return (
        <div className="card">
            <Chips value={value} onChange={(e) => setValue(e.value)} />
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
