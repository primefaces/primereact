import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    inputotp: {
        root: { className: 'flex items-center gap-2' },
        input: {
            root: {
                className: classNames(
                    'box-border text-center w-10 h-11 p-3 text-slate-900 border border-gray-300 rounded-lg transition-all duration-200',
                    'hover:border-cyan-500',
                    'focus:border-cyan-500 focus:shadow-[0_0_0_0.2rem_#a5f3fc] focus:outline-0 focus:outline-offset-0'
                )
            }
        }
    }
}
    `
    };

    const code2 = {
        javascript: `
import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';

export default function BasicDemo() {
    const [token, setTokens] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputOtp value={token} onChange={(e) => setTokens(e.value)}/>
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
