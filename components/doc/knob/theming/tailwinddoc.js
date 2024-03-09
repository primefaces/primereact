import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    knob: {
        root: ({ props }) => ({
            className: classNames('focus:outline-none focus:outline-offset-0 focus:shadow-0', {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            })
        }),
        range: 'stroke-current transition duration-100 ease-in stroke-gray-200 dark:stroke-gray-700 fill-none',
        value: 'animate-dash-frame  stroke-blue-500 fill-none',
        label: 'text-center text-xl'
    }
}
        `
    };

    const code2 = {
        javascript: `
import React, { useState } from "react";
import { Knob } from 'primereact/knob';

export default function UnstyledDemo() {
    const [value, setValue] = useState(0);

    return (
        <div className="card flex justify-center">
            <Knob value={value} onChange={(e) => setValue(e.value)} />
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
