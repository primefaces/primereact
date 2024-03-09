import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    tristatecheckbox: {
        root: {
            className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6')
        },
        checkbox: ({ props }) => ({
            className: classNames(
                'flex items-center justify-center',
                'border-2 w-6 h-6 rounded-lg transition-colors duration-200',
                {
                    'border-blue-500 bg-blue-500 text-white dark:border-blue-400 dark:bg-blue-400': props.value || !props.value,
                    'border-gray-300 text-gray-600 bg-white dark:border-blue-900/40 dark:bg-gray-900': props.value == null
                },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            )
        })
    }
}
    `
    };

    const code2 = {
        javascript: `
import React, { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export default function UnstyledDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex flex-col items-center gap-3">
            <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
            <label>{String(value)}</label>
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
