import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    radiobutton: {
        root: {
            className: classNames('relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6')
        },
        input: ({ props }) => ({
            className: classNames(
                'flex justify-center items-center',
                'border-2 w-6 h-6 text-gray-700 rounded-full transition duration-200 ease-in-out',
                {
                    'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80': !props.checked,
                    'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400': props.checked
                },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            )
        }),
        icon: ({ props }) => ({
            className: classNames('transform rounded-full', 'block w-3 h-3 transition duration-200 bg-white dark:bg-gray-900', {
                'backface-hidden scale-10 invisible': !props.checked,
                'transform scale-100 visible': props.checked
            })
        })
    }
}
    `
    };

    const code2 = {
        javascript: `
import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";

export default function UnstyledDemo() {
    const [ingredient, setIngredient] = useState('');

    return (
        <div className="card flex justify-center">
            <div className="flex flex-wrap gap-3">
                <div className="flex items-center">
                    <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
                    <label htmlFor="ingredient1" className="text-gray-700 dark:text-white/80 ml-2">Cheese</label>
                </div>
                <div className="flex items-center">
                    <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
                    <label htmlFor="ingredient2" className="text-gray-700 dark:text-white/80 ml-2">Mushroom</label>
                </div>
                <div className="flex items-center">
                    <RadioButton inputId="ingredient3" name="pizza" value="Pepper" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Pepper'} />
                    <label htmlFor="ingredient3" className="text-gray-700 dark:text-white/80 ml-2">Pepper</label>
                </div>
                <div className="flex items-center">
                    <RadioButton inputId="ingredient4" name="pizza" value="Onion" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Onion'} />
                    <label htmlFor="ingredient4" className="text-gray-700 dark:text-white/80 ml-2">Onion</label>
                </div>
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
                <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
                <p>A playground sample with the pre-built Tailwind theme.</p>
                <DocSectionCode code={code2} embedded />
            </DocSectionText>
        </>
    );
}
