import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    tooltip: {
        root: ({ context }) => {
            return {
                className: classNames('absolute shadow-md', {
                    'py-0 px-1': context.right || context.left || (!context.right && !context.left && !context.top && !context.bottom),
                    'py-1 px-0': context.top || context.bottom
                })
            };
        },
        arrow: ({ context }) => ({
            className: classNames('absolute w-0 h-0 border-transparent border-solid', {
                '-mt-1 border-y-[0.25rem] border-r-[0.25rem] border-l-0 border-r-gray-600': context.right,
                '-mt-1 border-y-[0.25rem] border-l-[0.25rem] border-r-0 border-l-gray-600': context.left,
                '-ml-1 border-x-[0.25rem] border-t-[0.25rem] border-b-0 border-t-gray-600': context.top,
                '-ml-1 border-x-[0.25rem] border-b-[0.25rem] border-t-0 border-b-gray-600': context.bottom
            })
        }),
        text: {
            className: 'p-3 bg-gray-600 text-white rounded-md whitespace-pre-line break-words'
        }
    }
}
        `
    };

    const code2 = {
        javascript: `
import React from 'react';
import { InputText } from 'primereact/inputtext';

export default function UnstyledDemo() {
    return (
        <div className="card flex flex-wrap justify-center gap-2">
            <InputText type="text" placeholder="Right" tooltip="Enter your username" />
            <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{ position: 'top' }} />
            <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{ position: 'bottom' }} />
            <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{ position: 'left' }} />
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
