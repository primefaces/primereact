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
    multiselect: {
        root: ({ props }) => ({
            className: classNames('inline-flex cursor-pointer select-none', 'bg-white dark:bg-gray-900 border border-gray-400 dark:border-blue-900/40  transition-colors duration-200 ease-in-out rounded-md', 'w-full md:w-80', {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            })
        }),
        labelContainer: 'overflow-hidden flex flex-auto cursor-pointer',
        label: ({ props }) => ({
            className: classNames('block overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis', 'text-gray-800 dark:text-white/80', 'p-3 transition duration-200', {
                '!p-3': props.display !== 'chip' && (props.value == null || props.value == undefined),
                '!py-1.5 px-3': props.display === 'chip' && props.value !== null
            })
        }),
        token: {
            className: classNames('py-1 px-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center')
        },
        removeTokenIcon: 'ml-2',
        trigger: {
            className: classNames('flex items-center justify-center shrink-0', 'bg-transparent text-gray-600 dark:text-white/70 w-12 rounded-tr-lg rounded-br-lg')
        },
        panel: {
            className: classNames('bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg')
        },
        header: {
            className: classNames('p-3 border-b border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 bg-gray-100 dark:bg-gray-800 rounded-t-lg', 'flex items-center justify-between')
        },
        headerCheckboxContainer: {
            className: classNames('inline-flex cursor-pointer select-none align-bottom relative', 'mr-2', 'w-6 h-6')
        },
        headerCheckbox: {
            root: ({ props }) => ({
                className: classNames(
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 dark:text-white/70 rounded-lg transition-colors duration-200',
                    'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                    {
                        'border-gray-300 dark:border-blue-900/40 bg-white dark:bg-gray-900': !props?.checked,
                        'border-blue-500 bg-blue-500': props?.checked
                    }
                )
            })
        },
        headerCheckboxIcon: 'w-4 h-4 transition-all duration-200 text-white text-base',
        closeButton: {
            className: classNames(
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 dark:text-white/70 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 ',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        closeIcon: 'w-4 h-4 inline-block',
        wrapper: {
            className: classNames('max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg', 'dark:bg-gray-900 dark:text-white/80')
        },
        list: 'py-3 list-none m-0',
        item: ({ context }) => ({
            className: classNames('cursor-pointer font-normal overflow-hidden relative whitespace-nowrap', 'm-0 p-3 border-0  transition-shadow duration-200 rounded-none', {
                'text-gray-700 hover:text-gray-700 hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-800': !context.focused && !context.selected,
                'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90 hover:text-gray-700 hover:bg-gray-200 dark:text-white/80 dark:hover:bg-gray-800': context.focused && !context.selected,
                'bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.selected,
                'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.selected
            })
        }),
        checkboxContainer: {
            className: classNames('inline-flex cursor-pointer select-none align-bottom relative', 'mr-2', 'w-6 h-6')
        },
        checkbox: ({ context }) => ({
            className: classNames(
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 dark:text-white/80 rounded-lg transition-colors duration-200',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'border-gray-300 dark:border-blue-900/40  bg-white dark:bg-gray-900': !context.selected,
                    'border-blue-500 bg-blue-500': context.selected
                }
            )
        }),
        checkboxIcon: 'w-4 h-4 transition-all duration-200 text-white text-base',
        itemGroup: {
            className: classNames('m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto')
        },
        filterContainer: 'relative',
        filterInput: {
            root: {
                className: classNames(
                    'pr-7 -mr-7',
                    'w-full',
                    'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300 dark:text-white/80',
                    'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
                )
            }
        },
        filterIcon: '-mt-2 absolute top-1/2',
        clearIcon: 'text-gray-500 right-12 -mt-2 absolute top-1/2',
        transition: TRANSITIONS.overlay
    }
}
    `
    };

    const code2 = {
        javascript: `
import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function UnstyledDemo() {
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-center">
            <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
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
