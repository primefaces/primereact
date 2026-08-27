import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    bottomnavigation: {
        root: 'relative flex overflow-visible bg-white border border-gray-300 rounded-2xl shadow-sm',
        menu: 'flex items-center justify-around flex-nowrap w-full m-0 p-2 list-none outline-none',
        menuitem: 'relative flex flex-1 justify-center min-w-0',
        action: ({ context, props }) => ({
            className: classNames(
                'cursor-pointer select-none inline-flex flex-col items-center justify-center relative no-underline overflow-visible min-w-0 transition-all duration-200',
                'w-14 h-12 rounded-xl text-gray-500',
                {
                    'text-blue-500': context.active,
                    '-translate-y-3 bg-blue-500 text-white shadow-md': context.active && props.activeItemDisplay === 'raised',
                    'bg-blue-50 text-blue-600': context.active && props.activeItemDisplay === 'highlight'
                }
            )
        }),
        icon: ({ props }) => ({
            className: classNames({ 'mb-1': props.showLabels })
        }),
        label: 'text-xs leading-none truncate max-w-full',
        indicator: ({ context, props }) => ({
            className: classNames('absolute hidden bg-blue-500', {
                'block': context.active && props.indicator !== 'none',
                'w-1 h-1 rounded-full -bottom-1': props.indicator === 'dot',
                'h-0.5 rounded-full left-2 right-2 top-0': props.indicator === 'bar'
            })
        })
    }
}
        `
    };

    const code2 = {
        javascript: `
import React from 'react';
import { BottomNavigation } from 'primereact/bottomnavigation';

export default function UnstyledDemo() {
    const items = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Wallet', icon: 'pi pi-credit-card' },
        { label: 'Send', icon: 'pi pi-send' },
        { label: 'Card', icon: 'pi pi-id-card' },
        { label: 'Profile', icon: 'pi pi-user' }
    ];

    return (
        <div className="card flex justify-content-center">
            <BottomNavigation model={items} style={{ maxWidth: '30rem' }} />
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
