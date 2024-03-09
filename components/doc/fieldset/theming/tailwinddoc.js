import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const TRANSITIONS = {
    toggleable: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-all duration-500 ease-in-out',
        enterToClass: 'max-h-40	',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-500 ease-in',
        leaveToClass: 'max-h-0'
    }
};

const Tailwind = {
    fieldset: {
        root: {
            className: classNames(
                'border border-gray-300 bg-white text-gray-700 rounded-md block mx-2 my-0.5 pl-4 pr-5 inline-size-min', // Borders, background, text color, spacing, and inline size.
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' //dark
            )
        },
        legend: ({ props }) => ({
            className: classNames(
                'border border-gray-300 text-gray-700 bg-gray-50 font-bold rounded-md',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 ', //dark
                {
                    'p-0 transition-none hover:bg-gray-100 hover:border-gray-300 hover:text-gray-900 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': props.toggleable,
                    'p-5': !props.toggleable
                }
            )
        }),
        toggler: ({ props }) => ({
            className: classNames('flex items-center justify-center', {
                'p-5 text-gray-700 rounded-md transition-none cursor-pointer overflow-hidden relative select-none hover:text-gray-900 focus:focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:text-white/80 dark:hover:text-white/80 dark:hover:bg-gray-800/60 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]':
                    props.toggleable
            })
        }),
        togglerIcon: 'mr-2 inline-block', // Margin and display style.
        legendTitle: 'flex items-center justify-center leading-none', // alignments, and leading style.
        content: 'p-5', // Padding.
        transition: TRANSITIONS.toggleable
    }
}
        `
    };

    const code2 = {
        javascript: `
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';

export default function UnstyledDemo() {
    return (
        <div className="card">
            <Fieldset legend="Header" toggleable>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Fieldset>
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
