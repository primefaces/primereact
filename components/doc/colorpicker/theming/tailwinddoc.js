import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const TRANSITIONS = {
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

const Tailwind = {        
    colorpicker: {
        root: ({ props }) => ({
            className: classNames('inline-block', {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            })
        }),
        input: {
            className: classNames(
                'm-0',
                'font-sans text-base text-gray-600 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 rounded-lg cursor-pointer',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                'w-8 h-8'
            )
        },
        panel: ({ props }) => ({
            className: classNames('shadow-md', 'bg-gray-800 border-gray-900', {
                'relative h-48 w-52': props.inline,
                'absolute h-48 w-52': !props.inline
            })
        }),
        selector: 'absolute h-44 w-40 top-2 left-2',
        color: {
            className: 'h-44 w-40',
            style: { background: 'linear-gradient(to top, #000 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, #fff 0%, rgb(255 255 255 / 0) 100%)' }
        },
        colorhandle: {
            className: classNames('rounded-full border border-solid cursor-pointer h-3 w-3 absolute  opacity-85', 'border-white')
        },
        hue: {
            className: 'h-44 w-6 absolute top-2 left-44 opacity-85',
            style: { background: 'linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)' }
        },
        huehandle: 'border-solid border-2 cursor-pointer h-2 w-8 left-0 -ml-1 -mt-1 opacity-85 absolute',
        transition: TRANSITIONS.overlay
    }
}
        `
    };

    const code2 = {
        javascript: `
import React, { useState } from "react";
import { ColorPicker } from 'primereact/colorpicker';

export default function UnstyledDemo() {
    const [color, setColor] = useState(null);

    return (
        <div className="card flex justify-center">
            <ColorPicker value={color} onChange={(e) => setColor(e.value)} />
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
