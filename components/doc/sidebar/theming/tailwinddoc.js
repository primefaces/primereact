import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    sidebar: {
        root: ({ props }) => ({
            className: classNames(
                'flex flex-col pointer-events-auto relative transform translate-x-0 translate-y-0 translate-z-0 relative transition-transform duration-300',
                'bg-white text-gray-700 border-0 shadow-lg',
                {
                    '!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': props.position == 'full',
                    'h-full w-80': props.position == 'left' || props.position == 'right',
                    'h-40 w-full': props.position == 'top' || props.position == 'bottom'
                },
                'dark:border dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80'
            )
        }),
        header: {
            className: classNames('flex items-center justify-end', 'p-5')
        },
        closeButton: {
            className: classNames(
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                'dark:hover:text-white/80 dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            )
        },
        closeButtonIcon: 'w-4 h-4 inline-block',
        content: {
            className: classNames('p-5 pt-0 h-full w-full', 'grow overflow-y-auto')
        },
        mask: {
            className: classNames('flex pointer-events-auto', 'bg-black bg-opacity-40 transition duration-200 z-20 transition-colors')
        },
        transition: ({ props }) => {
            return props.position === 'top'
                ? {
                      enterFromClass: 'translate-x-0 -translate-y-full translate-z-0',
                      leaveToClass: 'translate-x-0 -translate-y-full translate-z-0'
                  }
                : props.position === 'bottom'
                ? {
                      enterFromClass: 'translate-x-0 translate-y-full translate-z-0',
                      leaveToClass: 'translate-x-0 translate-y-full translate-z-0'
                  }
                : props.position === 'left'
                ? {
                      enterFromClass: '-translate-x-full translate-y-0 translate-z-0',
                      leaveToClass: '-translate-x-full translate-y-0 translate-z-0'
                  }
                : props.position === 'right'
                ? {
                      enterFromClass: 'translate-x-full translate-y-0 translate-z-0',
                      leaveToClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0'
                  }
                : {
                      enterFromClass: 'opacity-0',
                      enterActiveClass: 'transition-opacity duration-400 ease-in',
                      leaveActiveClass: 'transition-opacity duration-400 ease-in',
                      leaveToClass: 'opacity-0'
                  };
        }
    }
}
        `
    };

    const code2 = {
        javascript: `
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function UnstyledDemo() {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const [visibleRight, setVisibleRight] = useState(false);
    const [visibleTop, setVisibleTop] = useState(false);
    const [visibleBottom, setVisibleBottom] = useState(false);

    return (
        <div className="card">
            <div className="flex gap-2 justify-content-center">
                <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} />
                <Button icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} />
                <Button icon="pi pi-arrow-down" onClick={() => setVisibleTop(true)} />
                <Button icon="pi pi-arrow-up" onClick={() => setVisibleBottom(true)} />
            </div>

            <Sidebar visible={visibleLeft} position="left" onHide={() => setVisibleLeft(false)}>
                <h2>Left Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>

            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <h2>Right Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>

            <Sidebar visible={visibleTop} position="top" onHide={() => setVisibleTop(false)}>
                <h2>Top Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>

            <Sidebar visible={visibleBottom} position="bottom" onHide={() => setVisibleBottom(false)}>
                <h2>Bottom Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
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
