import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';
import React from 'react';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    floatlabel: {
        root: {
            className: classNames(
                'block relative', // root component style
                '[&>label]:absolute [&>label]:pointer-events-none [&>label]:left-2 [&>label]:top-1/2 [&>label]:-mt-2 [&>label]:leading-none [&>label]:transition-all [&>label]:ease-in-out', // label style
                '[&>textarea~label]:top-4', // textarea
                '[&>input:focus~label]:-top-3 [&>input:focus~label]:text-xs', // input focus
                '[&>input:autofill~label]:-top-3 [&>input:autofill~label]:text-xs', // input autofill
                '[&>input.p-filled~label]:-top-3 [&>input.p-filled~label]:text-xs', // input filled
                '[&>textarea:focus~label]:-top-3 [&>textarea:focus~label]:text-xs', // textarea focus
                '[&>textarea.p-filled~label]:-top-3 [&>textarea.p-filled~label]:text-xs', // textarea filled
                '[&>div[data-pc-name="dropdown"][data-p-focus="false"]~label]:-top-3 [&>div[data-pc-name="dropdown"][data-p-focus="false"]~label]:text-xs', // dropdown focus
                '[&>input::placeholder]:opacity-0 [&>input::placeholder]:transition-all [&>input::placeholder]:ease-in-out', // placeholder
                '[&>input::placeholder:focus]:opacity-100 [&>input::placeholder:focus]:transition-all [&>input::placeholder:focus]:ease-in-out' // placeholder focus
            )
        }
    },
}
        `
    };

    const code2 = {
        javascript: `
import React from 'react';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="username">Username</label>
              </FloatLabel>
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
