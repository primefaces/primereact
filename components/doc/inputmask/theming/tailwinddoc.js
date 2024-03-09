import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    inputmask: {
        root: 'font-sans text-base text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 py-3 px-3 border border-gray-300 dark:border-blue-900/40 hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)] transition duration-200 ease-in-out appearance-none rounded-md'
    }
}
        `
    };

    const code2 = {
        javascript: `
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function UnstyledDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-center">
            <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999"/>
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
