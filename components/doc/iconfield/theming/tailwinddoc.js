import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    iconfield: {
        root: {
            className: classNames('relative')
        }
    },
    inputicon: {
        root: ({ context }) => ({
            className: classNames('absolute top-1/2 -mt-2', {
                'left-2': context.iconPosition === 'left',
                'right-2': context.iconPosition === 'right'
            })
        })
    },
}
        `
    };

    const code2 = {
        javascript: `
import React from 'react';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';

export default function BasicDemo() {
    return (
        <div className="flex gap-3">
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText placeholder="Search" />
            </IconField>

            <IconField>
                <InputIcon className="pi pi-spin pi-spinner"> </InputIcon>
                <InputText />
            </IconField>
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
