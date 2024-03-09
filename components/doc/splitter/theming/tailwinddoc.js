import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {          
    splitter: {
        root: ({ context }) => ({
            className: classNames('bg-white dark:bg-gray-900 rounded-lg text-gray-700 dark:text-white/80', {
                'border border-solid border-gray-300 dark:border-blue-900/40': !context.nested
            })
        }),
        splitterpanel: {
            root: 'flex grow'
        },
        gutter: ({ props }) => ({
            className: classNames('flex items-center justify-center shrink-0', 'transition-all duration-200 bg-gray-100 dark:bg-gray-800', {
                'cursor-col-resize': props.layout == 'horizontal',
                'cursor-row-resize': props.layout !== 'horizontal'
            })
        }),
        gutterhandler: ({ props }) => ({
            className: classNames('bg-gray-300 dark:bg-gray-600 transition-all duration-200', {
                'h-7': props.layout == 'horizontal',
                'w-7 h-2': props.layout !== 'horizontal'
            })
        })
    }
}
    `
    };

    const code2 = {
        javascript: `
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function UnstyledDemo() {
    return (
        <Splitter style={{ height: '300px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 1</SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center">Panel 2</SplitterPanel>
        </Splitter>
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
