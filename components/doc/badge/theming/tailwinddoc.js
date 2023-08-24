import Link from 'next/link';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function TailwindDoc(props) {
    const code = {
        basic: `
badge: {
    root: ({ props }) => ({
        className: classNames(
            'rounded-full p-0 text-center inline-block',
            'bg-blue-500 text-white font-bold',
            {
                'bg-gray-500 ': props.severity == 'secondary',
                'bg-green-500 ': props.severity == 'success',
                'bg-blue-500 ': props.severity == 'info',
                'bg-orange-500 ': props.severity == 'warning',
                'bg-purple-500 ': props.severity == 'help',
                'bg-red-500 ': props.severity == 'danger'
            },
            {
                'text-xs min-w-[1.5rem] h-[1.5rem] leading-[1.5rem]': props.size == null,
                'text-lg min-w-[2.25rem] h-[2.25rem] leading-[2.25rem]': props.size == 'large',
                'text-2xl min-w-[3rem] h-[3rem] leading-[3rem]': props.size == 'xlarge'
            }
        )
    })
}
    `
    };

    const code2 = {
        javascript: `
import React from 'react';
import { Badge } from 'primereact/badge';

export default function UnstyledDemo() {
    return (
        <div>
            <div className="card flex flex-wrap justify-content-center gap-2">
                <Badge value="2"></Badge>
                <Badge value="8" severity="success"></Badge>
                <Badge value="4" severity="info"></Badge >
                <Badge value="12" severity="warning"></Badge>
                <Badge value="3" severity="danger"></Badge>
            </div>
            <div className="card flex flex-wrap justify-content-center gap-4">
                <i className="pi pi-bell p-overlay-badge" style={{ fontSize: '2rem' }}>
                    <Badge value="2"></Badge>
                </i>
                <i className="pi pi-calendar p-overlay-badge" style={{ fontSize: '2rem' }}>
                    <Badge value="5+" severity="danger"></Badge>
                </i>
                <i className="pi pi-envelope p-overlay-badge" style={{ fontSize: '2rem' }}>
                    <Badge severity="danger"></Badge>
                </i>
            </div>
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
