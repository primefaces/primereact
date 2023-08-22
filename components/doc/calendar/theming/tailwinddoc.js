import Link from 'next/link';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function TailwindDoc(props) {
    const code = {
        basic: `
calendar: {
    root: ({ props }) => ({
        className: classNames('inline-flex max-w-full relative', {
            'opacity-60 select-none pointer-events-none cursor-default': props.disabled
        })
    }),
    input: {
        root: {
            className: classNames(
                'font-sans text-base text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500' //Hover
            )
        }
    },
    panel: ({ props }) => ({
        className: classNames('bg-white dark:bg-gray-900', 'min-w-[350px]', {
            'shadow-md border-0 absolute': !props.inline,
            'inline-block overflow-x-auto border border-gray-300 dark:border-blue-900/40 p-2 rounded-lg': props.inline
        })
    }),
    header: {
        className: classNames('flex items-center justify-between', 'p-2 text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 font-semibold m-0 border-b border-gray-300 dark:border-blue-900/40 rounded-t-lg')
    },
    previousbutton: {
        className: classNames(
            'flex items-center justify-center cursor-pointer overflow-hidden relative',
            'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
            'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
        )
    },
    title: 'leading-8 mx-auto',
    monthTitle: {
        className: classNames('text-gray-700 dark:text-white/80 transition duration-200 font-semibold p-2', 'mr-2', 'hover:text-blue-500')
    },
    yearTitle: {
        className: classNames('text-gray-700 dark:text-white/80 transition duration-200 font-semibold p-2', 'hover:text-blue-500')
    },
    nextbutton: {
        className: classNames(
            'flex items-center justify-center cursor-pointer overflow-hidden relative',
            'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
            'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
        )
    },
    table: {
        className: classNames('border-collapse w-full', 'my-2')
    },
    tableheadercell: 'p-2',
    weekday: 'text-gray-600 dark:text-white/70',
    day: 'p-2',
    daylabel: ({ context }) => ({
        className: classNames(
            'w-10 h-10 rounded-full transition-shadow duration-200 border-transparent border',
            'flex items-center justify-center mx-auto overflow-hidden relative',
            'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
            {
                'opacity-60 cursor-default': context.disabled,
                'cursor-pointer': !context.disabled
            },
            {
                'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled,
                'text-blue-700 bg-blue-100 hover:bg-blue-200': context.selected && !context.disabled
            }
        )
    }),
    monthpicker: 'my-2',
    month: ({ context }) => ({
        className: classNames(
            'w-1/3 inline-flex items-center justify-center cursor-pointer overflow-hidden relative',
            'p-2 transition-shadow duration-200 rounded-lg',
            'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
            { 'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled, 'text-blue-700 bg-blue-100 hover:bg-blue-200': context.selected && !context.disabled }
        )
    }),
    yearpicker: {
        className: classNames('my-2')
    },
    year: ({ context }) => ({
        className:
            ('w-1/2 inline-flex items-center justify-center cursor-pointer overflow-hidden relative',
            'p-2 transition-shadow duration-200 rounded-lg',
            'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
            {
                'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled,
                'text-blue-700 bg-blue-100 hover:bg-blue-200': context.selected && !context.disabled
            })
    }),
    timepicker: {
        className: classNames('flex justify-center items-center', 'border-t-1 border-solid border-gray-300 p-2')
    },
    separatorcontainer: 'flex items-center flex-col px-2',
    separator: 'text-xl',
    hourpicker: 'flex items-center flex-col px-2',
    minutepicker: 'flex items-center flex-col px-2',
    ampmpicker: 'flex items-center flex-col px-2',
    incrementbutton: {
        className: classNames(
            'flex items-center justify-center cursor-pointer overflow-hidden relative',
            'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
            'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
        )
    },
    decrementbutton: {
        className: classNames(
            'flex items-center justify-center cursor-pointer overflow-hidden relative',
            'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
            'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
        )
    },
    groupcontainer: 'flex',
    group: {
        className: classNames('flex-1', 'border-l border-gray-300 pr-0.5 pl-0.5 pt-0 pb-0', 'first:pl-0 first:border-l-0')
    },
    transition: TRANSITIONS.overlay
}
        `
    };

    const code2 = {
        javascript: `
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';

export default function BasicDemo() {
    const [date, setDate] = useState(null);

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} />
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
                <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
                <p>A playground sample with the pre-built Tailwind theme.</p>
                <DocSectionCode code={code2} embedded />
            </DocSectionText>
        </>
    );
}
