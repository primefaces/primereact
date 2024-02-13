import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {  
    slider: {
        root: ({ props }) => ({
            className: classNames(
                'relative',
                'bg-gray-100 dark:bg-gray-800 border-0 rounded-6',
                { 'h-1 w-56': props.orientation == 'horizontal', 'w-1 h-56': props.orientation == 'vertical' },
                { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
            )
        }),
        range: ({ props }) => ({
            className: classNames('bg-blue-500', 'block absolute', {
                'top-0 left-0 h-full': props.orientation == 'horizontal',
                'bottom-0 left-0 w-full': props.orientation == 'vertical'
            })
        }),
        handle: ({ props }) => ({
            className: classNames(
                'h-4 w-4 bg-white dark:bg-gray-600 border-2 border-blue-500 rounded-full transition duration-200',
                'cursor-grab touch-action-none block',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                'hover:bg-blue-500 hover:border hover:border-blue-500',
                {
                    'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal',
                    'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation == 'vertical'
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
import { Slider } from "primereact/slider";

export default function UnstyledDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-center">
            <Slider value={value} onChange={(e) => setValue(e.value)} className="w-14rem" />
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
