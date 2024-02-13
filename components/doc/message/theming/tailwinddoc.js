import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {  
    message: {
        root: ({ props }) => ({
            className: classNames('inline-flex items-center justify-center align-top', 'p-3 m-0 rounded-md', {
                'bg-blue-100 border-0 text-blue-700': props.severity == 'info',
                'bg-green-100 border-0 text-green-700': props.severity == 'success',
                'bg-orange-100 border-0 text-orange-700': props.severity == 'warn',
                'bg-red-100 border-0 text-red-700': props.severity == 'error'
            })
        }),
        icon: 'text-base mr-2'
    }
}
        `
    };

    const code2 = {
        javascript: `
import React from 'react'; 
import { Message } from 'primereact/message';

export default function UnstyledDemo() {
    return (
        <div className="card flex flex-wrap items-center justify-center gap-3">
            <Message severity="info" text="Info Message" />
            <Message severity="success" text="Success Message" />
            <Message severity="warn" text="Warning Message" />
            <Message severity="error" text="Error Message" />
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
