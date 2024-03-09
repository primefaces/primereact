import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const TRANSITIONS = {
    overlay: {
        timeout: 150,
        classNames: {
            enter: 'opacity-0 scale-75',
            enterActive: 'opacity-100 !scale-100 transition-transform transition-opacity duration-150 ease-in',
            exit: 'opacity-100',
            exitActive: '!opacity-0 transition-opacity duration-150 ease-linear'
        }
    }
};

const Tailwind = {           
    autocomplete: {
        root: ({ props }) => ({
            className: classNames(
                'relative inline-flex',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                },
                { 'w-full': props.multiple }
            )
        }),
        container: {
            className: classNames(
                'm-0 list-none cursor-text overflow-hidden flex items-center flex-wrap w-full',
                'px-3 py-2 gap-2',
                'font-sans text-base text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40  transition duration-200 ease-in-out appearance-none rounded-md',
                'focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] hover:border-blue-500 focus:outline-none dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        inputToken: {
            className: classNames('py-0.375rem px-0', 'flex-1 inline-flex')
        },
        input: ({ props }) => ({
            root: {
                className: classNames(
                    'm-0',
                    'transition-colors duration-200 appearance-none rounded-lg',
                    { 'rounded-tr-none rounded-br-none': props.dropdown },
                    {
                        'font-sans text-base text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)] hover:border-blue-500 focus:outline-none':
                            !props.multiple,
                        'font-sans text-base text-gray-700 dark:text-white/80 border-0 outline-none bg-transparent m-0 p-0 shadow-none rounded-none w-full': props.multiple
                    }
                )
            }
        }),
        token: {
            className: classNames('py-1 px-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center')
        },
        dropdownButton: {
            root: 'rounded-tl-none rounded-bl-none'
        },
        panel: {
            className: classNames('bg-white text-gray-700 border-0 rounded-md shadow-lg', 'max-h-[200px] overflow-auto', 'dark:bg-gray-900 dark:text-white/80')
        },
        list: 'py-3 list-none m-0',
        item: ({ context }) => ({
            className: classNames('cursor-pointer font-normal overflow-hidden relative whitespace-nowrap', 'm-0 p-3 border-0  transition-shadow duration-200 rounded-none', {
                'text-gray-700 hover:text-gray-700 hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-800': !context.selected,
                'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90 hover:text-gray-700 hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-800': context.focused && !context.selected,
                'bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.selected,
                'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': context.selected
            })
        }),
        itemGroup: {
            className: classNames('m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto')
        },
        transition: TRANSITIONS.overlay
    }
}
        `
    };

    const code2 = {
        javascript: `
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";

export default function UnstyledDemo() {
    const [value, setValue] = useState('');
    const [items, setItems] = useState([]);

    const search = (event) => {
        setItems([...Array(10).keys()].map(item => event.query + '-' + item));
    }

    return (
        <div className="card flex justify-center">
            <AutoComplete value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)} />
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
