import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    inputnumber: {
        root: 'w-full inline-flex',
        input: {
            root: ({ props }) => ({
                className: classNames({ 'rounded-tr-none rounded-br-none': props.showButtons && props.buttonLayout == 'stacked' })
            })
        },
        buttongroup: ({ props }) => ({
            className: classNames({ 'flex flex-col': props.showButtons && props.buttonLayout == 'stacked' })
        }),
        incrementbutton: ({ props }) => ({
            className: classNames('flex !items-center !justify-center', {
                'rounded-br-none rounded-bl-none rounded-bl-none !p-0 flex-1 w-[3rem]': props.showButtons && props.buttonLayout == 'stacked'
            })
        }),
        decrementbutton: ({ props }) => ({
            className: classNames('flex !items-center !justify-center', {
                'rounded-tr-none rounded-tl-none rounded-tl-none !p-0 flex-1 w-[3rem]': props.showButtons && props.buttonLayout == 'stacked'
            })
        })
    }
}
        `
    };

    const code2 = {
        javascript: `
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function UnstyledDemo() {
    const [value1, setValue1] = useState(42723);
    const [value2, setValue2] = useState(58151);
    const [value3, setValue3] = useState(2351.35);
    const [value4, setValue4] = useState(50);

    return (
        <div className="card flex flex-wrap">
            <div className="flex-auto">
                <label htmlFor="integeronly" className="font-bold block mb-2 text-gray-700 dark:text-white/80">Integer Only</label>
                <InputNumber inputId="integeronly" value={value1} onValueChange={(e) => setValue1(e.value)} />
            </div>
            <div className="flex-auto">
                <label htmlFor="withoutgrouping" className="font-bold block mb-2 text-gray-700 dark:text-white/80">Without Grouping</label>
                <InputNumber inputId="withoutgrouping" value={value2} onValueChange={(e) => setValue2(e.value)} useGrouping={false} />
            </div>
            <div className="flex-auto">
                <label htmlFor="minmaxfraction" className="font-bold block mb-2 text-gray-700 dark:text-white/80">Min-Max Fraction Digits</label>
                <InputNumber inputId="minmaxfraction" value={value3} onValueChange={(e) => setValue3(e.value)} minFractionDigits={2} maxFractionDigits={5} />
            </div>
            <div className="flex-auto">
                <label htmlFor="minmax" className="font-bold block mb-2 text-gray-700 dark:text-white/80">Min-Max Boundaries</label>
                <InputNumber inputId="minmax" value={value4} onValueChange={(e) => setValue4(e.value)} min={0} max={100} />
            </div>
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
