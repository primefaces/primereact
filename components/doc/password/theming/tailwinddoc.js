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
    password: {
        root: ({ props }) => ({
            className: classNames('inline-flex relative', {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            })
        }),
        panel: 'p-5 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 shadow-md rounded-md',
        meter: 'mb-2 bg-gray-300 dark:bg-gray-700 h-3',
        meterlabel: ({ state, props }) => ({
            className: classNames(
                'transition-width duration-1000 ease-in-out h-full',
                {
                    'bg-red-500': state.meter?.strength == 'weak',
                    'bg-orange-500': state.meter?.strength == 'medium',
                    'bg-green-500': state.meter?.strength == 'strong'
                },
                { 'pr-[2.5rem] ': props.toggleMask }
            )
        }),
        showicon: {
            className: classNames('absolute top-1/2 -mt-2', 'right-3 text-gray-600 dark:text-white/70')
        },
        hideicon: {
            className: classNames('absolute top-1/2 -mt-2', 'right-3 text-gray-600 dark:text-white/70')
        },
        transition: TRANSITIONS.overlay
    }
}
    `
    };

    const code2 = {
        javascript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function UnstyledDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)} />
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
