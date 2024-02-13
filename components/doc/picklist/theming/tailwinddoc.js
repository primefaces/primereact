import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {    
    picklist: {
        root: 'flex flex-col xl:flex-row',
        controls: 'flex flex-row xl:flex-col justify-center p-5',
        moveUpButton: {
            root: {
                className: classNames(
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mr-2 xl:mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' //Dark Mode
                )
            },
            label: 'flex-initial w-0'
        },
        moveTopButton: {
            root: {
                className: classNames(
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mr-2 xl:mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' //Dark Mode
                )
            },
            label: 'flex-initial w-0'
        },
        moveDownButton: {
            root: {
                className: classNames(
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mr-2 xl:mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' //Dark Mode
                )
            },
            label: 'flex-initial w-0'
        },
        moveBottomButton: {
            root: {
                className: classNames(
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mr-2 xl:mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' //Dark Mode
                )
            },
            label: 'flex-initial w-0'
        },
        listWrapper: 'grow shrink basis-2/4',
        header: {
            className: classNames(
                'bg-slate-50 text-slate-700 border border-gray-300 p-5 font-bold border-b-0 rounded-t-md',
                'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
            )
        },
        list: {
            className: classNames(
                'list-none m-0 p-0 overflow-auto min-h-[12rem] max-h-[24rem]',
                'border border-gray-300 bg-white text-gray-600 py-3 px-0 rounded-b-md outline-none',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' //Dark Mode
            )
        },
        item: ({ context }) => ({
            className: classNames('relative cursor-pointer overflow-hidden', 'py-3 px-5 m-0 border-none text-gray-600 dark:text-white/80', 'transition duration-200', {
                'text-blue-700 bg-blue-500/20 dark:bg-blue-300/20': context.selected,
                'text-gray-600 dark:bg-blue-900/40': !context.selected
            })
        }),
        buttons: 'flex flex-row xl:flex-col justify-center p-5',
        movetotargetbutton: {
            root: {
                className: classNames(
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mr-2 xl:mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' //Dark Mode
                )
            },
            label: 'flex-initial w-0'
        },
        movealltotargetbutton: {
            root: {
                className: classNames(
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mr-2 xl:mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' //Dark Mode
                )
            },
            label: 'flex-initial w-0'
        },
        movetosourcebutton: {
            root: {
                className: classNames(
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mr-2 xl:mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' //Dark Mode
                )
            },
            label: 'flex-initial w-0'
        },
        movealltosourcebutton: {
            root: {
                className: classNames(
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mr-2 xl:mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' //Dark Mode
                )
            },
            label: 'flex-initial w-0'
        },
        targetcontrols: 'flex flex-col justify-center p-5',
        targetwrapper: 'grow shrink basis-2/4',
        targetheader: {
            className: classNames(
                'bg-slate-50 text-slate-700 border border-gray-300 p-5 font-bold border-b-0 rounded-t-md',
                'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
            )
        },
        targetlist: {
            className: classNames(
                'list-none m-0 p-0 overflow-auto min-h-[12rem] max-h-[24rem]',
                'border border-gray-300 bg-white text-gray-600 py-3 px-0 rounded-b-md outline-none',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' //Dark Mode
            )
        },
        transition: {
            timeout: 0,
            classNames: {
                enter: '!transition-none',
                enterActive: '!transition-none',
                exit: '!transition-none',
                exitActive: '!transition-none'
            }
        }
    },
}
        `
    };

    const code2 = {
        javascript: `
import React, { useState, useEffect } from 'react';
import { PickList } from 'primereact/picklist';
import { ProductService } from './service/ProductService';

export default function UnstyledDemo() {
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setSource(data));
    }, []);

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    };

    const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-2 items-center gap-3">
                <img className="w-16 shadow-md shrink-0 rounded" src={\`https://primefaces.org/cdn/primereact/images/product/\${item.image}\`} alt={item.name} />
                <div className="flex-1 flex flex-col gap-2">
                    <span className="font-bold">{item.name}</span>
                    <div className="flex items-center gap-2">
                        <i className="pi pi-tag text-sm"></i>
                        <span>{item.category}</span>
                    </div>
                </div>
                <span className="font-bold text-900">\${item.price}</span>
            </div>
        );
    };

    return (
        <div className="card">
            <PickList dataKey="id" source={source} target={target} onChange={onChange} itemTemplate={itemTemplate} breakpoint="1280px"
                sourceHeader="Available" targetHeader="Selected" sourceStyle={{ height: '24rem' }} targetStyle={{ height: '24rem' }} />
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
                <DocSectionCode code={code2} embedded service={['ProductService']} />
            </DocSectionText>
        </>
    );
}
