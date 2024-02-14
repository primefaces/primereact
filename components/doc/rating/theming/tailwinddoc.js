import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    rating: {
        root: ({ props }) => ({
            className: classNames('relative flex items-center', 'gap-2', {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            })
        }),
        cancelitem: ({ context }) => ({
            className: classNames('inline-flex items-center cursor-pointer', {
                'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': context.focused
            })
        }),
        cancelicon: {
            className: classNames('text-red-500', 'w-5 h-5', 'transition duration-200 ease-in')
        },
        item: ({ props, context }) => ({
            className: classNames(
                'inline-flex items-center',
                {
                    'cursor-pointer': !props.readOnly,
                    'cursor-default': props.readOnly
                },
                {
                    'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': context.focused
                }
            )
        }),
        officon: {
            className: classNames('text-gray-700 hover:text-blue-400', 'w-5 h-5', 'transition duration-200 ease-in')
        },
        onicon: {
            className: classNames('text-blue-500', 'w-5 h-5', 'transition duration-200 ease-in')
        }
    }
}
    `
    };

    const code2 = {
        javascript: `
import React, { useState } from "react";
import { Rating } from "primereact/rating";

export default function UnstyledDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex justify-center">
            <Rating value={value} onChange={(e) => setValue(e.value)} />
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
