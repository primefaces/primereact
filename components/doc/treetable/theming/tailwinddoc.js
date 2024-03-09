import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    treetable: {
        root: ({ props }) => ({
            className: classNames('relative', {
                'flex flex-col h-full': props.scrollHeight
            })
        }),
        loadingoverlay: {
            className: classNames(
                'fixed w-full h-full t-0 l-0 bg-gray-100/40',
                'transition duration-200',
                'absolute flex items-center justify-center z-2',
                'dark:bg-gray-950/40' // Dark Mode
            )
        },
        loadingicon: 'w-8 h-8',
        header: {
            className: classNames(
                'bg-slate-50 text-slate-700 border border-x-0 border-t-0 border-gray-300 p-4 font-bold',
                'dark:bg-gray-900 dark:text-white/70 dark:border-blue-900/40' // Dark Mode
            )
        },
        scrollablewrapper: ({ props }) => ({
            className: classNames({
                'relative overflow-auto': props.scrollable,
                'overflow-x-auto': props.resizableColumns
            })
        }),
        wrapper: ({ props }) => ({
            className: classNames({
                'relative overflow-auto': props.scrollable,
                'overflow-x-auto': props.resizableColumns
            })
        }),
        footer: {
            className: classNames(
                'bg-slate-50 text-slate-700 border border-x-0 border-t-0 border-gray-300 p-4 font-bold',
                'dark:bg-gray-900 dark:text-white/70 dark:border-blue-900/40' // Dark Mode
            )
        },
        table: 'border-collapse table-fixed w-full',
        thead: ({ props }) => ({
            className: classNames({
                'block sticky top-0 z-[1]': props.scrollable
            })
        }),
        tbody: ({ props }) => ({
            className: classNames({
                block: props.scrollable
            })
        }),
        tfoot: ({ props }) => ({
            className: classNames({
                block: props.scrollable
            })
        }),
        headerrow: ({ props }) => ({
            className: classNames({
                'flex flex-nowrap w-full': props.scrollable
            })
        }),
        row: ({ context }) => ({
            className: classNames(
                'transition duration-200',
                'focus:outline focus:outline-[0.15rem] focus:outline-blue-200 focus:outline-offset-[-0.15rem]', // Focus
                context.selected ? 'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80' : 'bg-white text-gray-600 dark:bg-gray-900 dark:text-white/80',
                {
                    'hover:bg-gray-300/20 hover:text-gray-600 dark:hover:bg-gray-950': context.selectable && !context.selected, // Hover
                    'flex flex-nowrap w-full': context.scrollable
                }
            )
        }),
        column: {
            headercell: ({ context }) => ({
                className: classNames(
                    'text-left border-gray-300 border font-bold',
                    'transition duration-200 p-4',
                    'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900', //Dark Mode
                    {
                        'bg-blue-50 text-blue-700': context.sorted,
                        'bg-slate-50': !context.sorted,
                        'flex flex-1 items-center': context.scrollable,
                        'flex-initial shrink-0': context.scrollable && !context.frozen,
                        'sticky z-[1]': context.scrollable && context.frozen,
                        'border-x-0 border-l-0 border-t-0': !context.showGridlines,
                        'overflow-hidden relative bg-clip-padding': !context.frozen
                    }
                )
            }),
            bodycell: ({ context }) => ({
                className: classNames(
                    'text-left border-gray-300 border',
                    'transition duration-200 p-4',
                    'dark:border-blue-900/40', //Dark Mode
                    {
                        'cursor-pointer': context.selectable,
                        'flex flex-1 items-center': context.scrollable,
                        'flex-initial shrink-0': context.scrollable && !context.frozen,
                        sticky: context.scrollable && context.frozen,
                        'border-x-0 border-l-0': !context.showGridlines
                    }
                )
            }),
            rowtoggler: ({ context }) => ({
                className: classNames(
                    'relative inline-flex items-center justify-center align-center cursor-pointer select-none overflow-hidden bg-transparent',
                    'w-8 h-8 border-0 rounded mr-0.5',
                    {
                        'text-blue-700': context.selected,
                        'text-gray-500': !context.selected
                    },
                    'dark:text-white/70' //Dark Mode
                )
            }),
            sorticon: ({ context }) => ({
                className: classNames('ml-2', {
                    'text-blue-700 dark:text-white/80': context.sorted,
                    'text-slate-700 dark:text-white/70': !context.sorted
                })
            }),
            sortbadge: {
                className: classNames(
                    'h-[1.143rem] min-w-[1.143rem] leading-[1.143rem] text-blue-700 bg-blue-50 ml-2 rounded-[50%]',
                    'dark:text-white/80 dark:bg-blue-500/40' // Dark Mode
                )
            },
            columnresizer: 'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent',
            checkboxwrapper: {
                className: classNames('cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6 mr-2')
            },
            checkbox: ({ context }) => ({
                className: classNames(
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    {
                        'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400': context.checked,
                        'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900': !context.checked
                    },
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled
                    }
                )
            }),
            checkboxicon: ({ context }) => ({
                className: classNames('w-4 h-4 transition-all duration-200 text-base dark:text-gray-900', {
                    'text-white': context.checked
                })
            })
        },
        resizehelper: 'absolute hidden w-px z-10 bg-blue-500 dark:bg-blue-300'
    }
}
        `
    };

    const code2 = {
        javascript: `
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { NodeService } from './service/NodeService';

export default function UnstyledDemo() {
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        NodeService.getTreeTableNodes().then(data => {
            setNodes(data);
        });
    }, []);

    return (
        <div className="card">
            <TreeTable value={nodes} tableStyle={{ minWidth: '50rem' }}>
                <Column field="name" header="Name" expander sortable></Column>
                <Column field="size" header="Size" sortable></Column>
                <Column field="type" header="Type" sortable></Column>
            </TreeTable>
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
                <DocSectionCode code={code2} embedded service={['NodeService']} />
            </DocSectionText>
        </>
    );
}
