import Link from 'next/link';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    paginator: {
        root: {
            className: classNames(
                'flex items-center justify-center flex-wrap',
                'bg-white text-gray-500 border-0 px-4 py-2 rounded-md',
                'dark:bg-gray-900 dark:text-white/60 dark:border-blue-900/40' // Dark Mode
            )
        },
        firstpagebutton: ({ context }) => ({
            className: classNames(
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500  min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            )
        }),
        previouspagebutton: ({ context }) => ({
            className: classNames(
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            )
        }),
        nextpagebutton: ({ context }) => ({
            className: classNames(
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            )
        }),
        lastpagebutton: ({ context }) => ({
            className: classNames(
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            )
        }),
        pagebutton: ({ context }) => ({
            className: classNames(
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:border-blue-300 dark:text-white', // Dark Mode
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                {
                    'bg-blue-50 border-blue-50 text-blue-700 dark:bg-blue-300': context.active
                }
            )
        }),
        rowperpagedropdown: {
            root: ({ props, state }) => ({
                className: classNames(
                    'inline-flex relative cursor-pointer user-none',
                    'bg-white border rounded-md',
                    'transition duration-200',
                    'h-12 mx-2',
                    'dark:bg-gray-950 dark:border-blue-900/40', //DarkMode
                    {
                        'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-blue-500': state.focused && !props.disabled, //Focus
                        'border-gray-300': !state.focused,
                        'hover:border-blue-500': !props.disabled //Hover
                    }
                )
            }),
            input: {
                className: classNames(
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0',
                    'focus:outline-none focus:outline-offset-0',
                    'dark:text-white' //Dark Mode
                )
            },
            trigger: {
                className: classNames('flex items-center justify-center shrink-0', 'text-gray-500 dark:text-white w-12 rounded-r-md')
            },
            panel: {
                className: classNames(
                    'bg-white text-gray-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]',
                    'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
                )
            },
            wrapper: 'overflow-auto',
            list: 'm-0 p-0 py-3 list-none',
            item: ({ context }) => ({
                className: classNames(
                    'relative font-normal cursor-pointer space-nowrap overflow-hidden',
                    'm-0 py-3 px-5 border-none text-gray-600 rounded-none',
                    'transition duration-200',
                    'dark:text-white/80', // Dark Mode
                    {
                        'text-blue-700 bg-blue-50 dark:text-white/80 dark:bg-blue-300': !context.focused && context.selected,
                        'bg-blue-300/40': context.focused && context.selected,
                        'text-gray-600 bg-gray-300 dark:text-white/80 dark:bg-blue-900/40': context.focused && !context.selected
                    }
                )
            })
        },
        jumptopageinput: {
            root: 'inline-flex mx-2',
            input: {
                className: classNames(
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border border-gray-300 pr-0',
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] focus:border-blue-300',
                    'dark:text-white dark:bg-gray-950 dark:border-blue-900/40', //Dark Mode
                    'm-0 flex-auto max-w-[3rem]'
                )
            }
        },
        jumptopagedropdown: {
            root: ({ props, state }) => ({
                className: classNames(
                    'inline-flex relative cursor-pointer user-none',
                    'bg-white border rounded-md',
                    'transition duration-200',
                    'h-12 mx-2',
                    'dark:bg-gray-950 dark:border-blue-900/40', //DarkMode
                    {
                        'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-blue-500': state.focused && !props.disabled, //Focus
                        'border-gray-300': !state.focused,
                        'hover:border-blue-500': !props.disabled //Hover
                    }
                )
            }),
            input: {
                className: classNames(
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0',
                    'focus:outline-none focus:outline-offset-0',
                    'dark:text-white' //Dark Mode
                )
            },
            trigger: {
                className: classNames('flex items-center justify-center shrink-0', 'text-gray-500 dark:text-white w-12 rounded-r-md')
            },
            panel: {
                className: classNames(
                    'bg-white text-gray-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]',
                    'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
                )
            },
            wrapper: 'overflow-auto',
            list: 'm-0 p-0 py-3 list-none',
            item: ({ context }) => ({
                className: classNames(
                    'relative font-normal cursor-pointer space-nowrap overflow-hidden',
                    'm-0 py-3 px-5 border-none text-gray-600 rounded-none',
                    'transition duration-200',
                    'dark:text-white/80', // Dark Mode
                    {
                        'text-blue-700 bg-blue-50 dark:text-white/80 dark:bg-blue-300': !context.focused && context.selected,
                        'bg-blue-300/40': context.focused && context.selected,
                        'text-gray-600 bg-gray-300 dark:text-white/80 dark:bg-blue-900/40': context.focused && !context.selected
                    }
                )
            })
        }
    }
}
        `
    };

    const code2 = {
        javascript: `
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';

export default function UnstyledDemo() {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <div className="card">
            <Paginator first={first} rows={rows} totalRecords={120} rowsPerPageOptions={[10, 20, 30]} onPageChange={onPageChange} />
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
                <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
                <p>A playground sample with the pre-built Tailwind theme.</p>
                <DocSectionCode code={code2} embedded />
            </DocSectionText>
        </>
    );
}
