import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    metergroup: {
        root: ({ props }) => ({
            class: [
                // Flexbox
                'flex gap-4',

                { 'flex-col': props.orientation == 'horizontal', 'flex-row': props.orientation == 'vertical' }
            ]
        }),
        metercontainer: ({ props }) => ({
            class: [
                // Flexbox
                'flex',

                { 'flex-col': props.orientation === 'vertical' },

                // Sizing
                { 'w-2 h-full': props.orientation === 'vertical' },
                { 'h-2': props.orientation === 'horizontal' },

                // Colors
                'bg-gray-200 dark:bg-gray-700',

                // Border Radius
                'rounded-lg'
            ]
        }),
        meter: ({ props }) => ({
            class: [
                // Shape
                'border-0',

                // Rounded Corners - Horizontal
                {
                    'first:rounded-l-lg last:rounded-r-lg': props.orientation === 'horizontal'
                },

                // Rounded Corners - Vertical
                {
                    'first:rounded-t-lg last:rounded-b-lg': props.orientation === 'vertical'
                },

                // Colors
                'bg-primary-500 dark:bg-primary-400'
            ]
        }),
        labellist: ({ props }) => ({
            class: [
                // Display & Flexbox
                'flex flex-wrap',

                { 'gap-4': props.labelOrientation === 'horizontal' },

                { 'gap-2': props.labelOrientation === 'vertical' },

                { 'flex-col': props.labelOrientation === 'vertical' },

                // Conditional Alignment - Horizontal
                {
                    'align-end': props.labelOrientation === 'horizontal' && props.labelPosition === 'end',
                    'align-start': props.labelOrientation === 'horizontal' && props.labelPosition === 'start'
                },

                // Conditional Alignment - Vertical
                {
                    'justify-end': props.labelOrientation === 'vertical' && props.labelPosition === 'end',
                    'justify-start': props.labelOrientation === 'vertical' && props.labelPosition === 'start'
                },

                // List Styling
                'm-0 p-0 list-none'
            ]
        }),
        labellistitem: {
            class: [
                // Flexbox
                'inline-flex',
                'items-center',
                'gap-2'
            ]
        },
        labellisttype: {
            class: [
                // Display
                'inline-flex',

                // Background Color
                'bg-primary-500 dark:bg-primary-400',

                // Size
                'w-2 h-2',

                // Rounded Shape
                'rounded-full'
            ]
        }
    }
}
    `
    };

    const code2 = {
        javascript: `
import React from 'react'; 
import { MeterGroup } from 'primereact/MeterGroup';

export default function UnstyledDemo() {
    const values = [
        { value: 20, color: '#FFC107' },
        { value: 40, color: '#007BE5' },
        { value: 10, color: '#E91E63' },
        { value: 30, color: '#4CAF50' }
    ];


    return (
        <div className="card">
            <MeterGroup values={values} />
        </div>
    )
}`
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
