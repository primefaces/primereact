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
    cascadeselect: {
        root: ({ props }) => ({
            className: classNames('inline-flex cursor-pointer select-none relative', 'bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition duration-200 ease-in-out rounded-lg', {
                'opacity-60 select-none pointer-events-none cursor-default': props.disabled
            })
        }),
        label: {
            className: classNames('block whitespace-nowrap overflow-hidden flex flex-1 w-1 text-overflow-ellipsis cursor-pointer', 'bg-transparent border-0 p-3 text-gray-700 dark:text-white/80', 'appearance-none rounded-md')
        },
        dropdownButton: {
            className: classNames('flex items-center justify-center shrink-0', 'bg-transparent text-gray-600 dark:text-white/80 w-[3rem] rounded-tr-6 rounded-br-6')
        },
        panel: 'absolute py-3 bg-white dark:bg-gray-900 border-0 shadow-md',
        list: 'm-0 sm:p-0 list-none',
        sublist: {
            className: classNames('block absolute left-full top-0', 'min-w-full z-10', 'py-3 bg-white dark:bg-gray-900 border-0 shadow-md')
        },
        item: ({ state }) => ({
            className: classNames('cursor-pointer font-normal whitespace-nowrap', 'm-0 border-0 bg-transparent transition-shadow rounded-none', {
                'text-gray-700 hover:text-gray-700 hover:bg-gray-200 dark:text-white/80 dark:hover:text-white/80 dark:hover:bg-gray-800/80': !state.selected,
                'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': state.selected
            })
        }),
        content: {
            className: classNames('flex items-center overflow-hidden relative', 'py-3 px-5')
        },
        optionGroupIcon: 'ml-auto',
        transition: TRANSITIONS.overlay
    }
}
        `
    };

    const code2 = {
        javascript: `
import React, { useState } from "react";
import { CascadeSelect } from 'primereact/cascadeselect';

export default function UnstyledDemo() {
    const [selectedCity, setSelectedCity] = useState(null);
    const countries = [
        {
            name: 'Australia',
            code: 'AU',
            states: [
                {
                    name: 'New South Wales',
                    cities: [
                        {cname: 'Sydney', code: 'A-SY'},
                        {cname: 'Newcastle', code: 'A-NE'},
                        {cname: 'Wollongong', code: 'A-WO'}
                    ]
                },
                {
                    name: 'Queensland',
                    cities: [
                        {cname: 'Brisbane', code: 'A-BR'},
                        {cname: 'Townsville', code: 'A-TO'}
                    ]
                },

            ]
        },
        {
            name: 'Canada',
            code: 'CA',
            states: [
                {
                    name: 'Quebec',
                    cities: [
                        {cname: 'Montreal', code: 'C-MO'},
                        {cname: 'Quebec City', code: 'C-QU'}
                    ]
                },
                {
                    name: 'Ontario',
                    cities: [
                        {cname: 'Ottawa', code: 'C-OT'},
                        {cname: 'Toronto', code: 'C-TO'}
                    ]
                },

            ]
        },
        {
            name: 'United States',
            code: 'US',
            states: [
                {
                    name: 'California',
                    cities: [
                        {cname: 'Los Angeles', code: 'US-LA'},
                        {cname: 'San Diego', code: 'US-SD'},
                        {cname: 'San Francisco', code: 'US-SF'}
                    ]
                },
                {
                    name: 'Florida',
                    cities: [
                        {cname: 'Jacksonville', code: 'US-JA'},
                        {cname: 'Miami', code: 'US-MI'},
                        {cname: 'Tampa', code: 'US-TA'},
                        {cname: 'Orlando', code: 'US-OR'}
                    ]
                },
                {
                    name: 'Texas',
                    cities: [
                        {cname: 'Austin', code: 'US-AU'},
                        {cname: 'Dallas', code: 'US-DA'},
                        {cname: 'Houston', code: 'US-HO'}
                    ]
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-center">
            <CascadeSelect value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={countries} 
                optionLabel="cname" optionGroupLabel="name" optionGroupChildren={['states', 'cities']}
                className="w-full md:w-14rem" breakpoint="767px" placeholder="Select a City" style={{ minWidth: '14rem' }}  />
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
