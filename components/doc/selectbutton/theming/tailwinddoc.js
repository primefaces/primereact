import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    selectbutton: {
        root: ({ props }) => ({
            className: classNames({ 'opacity-60 select-none pointer-events-none cursor-default': props.disabled })
        }),
        button: ({ context }) => ({
            className: classNames(
                'inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative',
                'px-4 py-3',
                'transition duration-200 border border-r-0',
                'first:rounded-l-md first:rounded-tr-none first:rounded-br-none last:border-r last:rounded-tl-none last:rounded-bl-none last:rounded-r-md',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-gray-300 dark:border-blue-900/40 hover:bg-gray-50 dark:hover:bg-gray-800/80 ': !context.selected,
                    'bg-blue-500 border-blue-500 text-white hover:bg-blue-600': context.selected,
                    'opacity-60 select-none pointer-events-none cursor-default': context.disabled
                }
            )
        }),
        label: 'font-bold'
    }
}
    `
    };

    const code2 = {
        javascript: `
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function UnstyledDemo() {
    const options = ['Off', 'On'];
    const [value, setValue] = useState(options[0]);

    return (
        <div className="card flex justify-center">
            <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
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
