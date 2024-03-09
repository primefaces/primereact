import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {          
    image: {
        root: 'relative inline-block',
        button: {
            className: classNames(
                'absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300',
                'bg-transparent text-gray-100',
                'hover:opacity-100 hover:cursor-pointer hover:bg-black hover:bg-opacity-50' //Hover
            )
        },
        mask: {
            className: classNames('fixed top-0 left-0 w-full h-full', 'flex items-center justify-center', 'bg-black bg-opacity-90')
        },
        toolbar: {
            className: classNames('absolute top-0 right-0 z-10 flex', 'p-4')
        },
        rotaterightbutton: {
            className: classNames(
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        rotaterighticon: 'w-6 h-6',
        rotateleftbutton: {
            className: classNames(
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        rotatelefticon: 'w-6 h-6',
        zoomoutbutton: {
            className: classNames(
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        zoomouticon: 'w-6 h-6',
        zoominbutton: {
            className: classNames(
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        zoominicon: 'w-6 h-6',
        closebutton: {
            className: classNames(
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            )
        },
        closeicon: 'w-6 h-6',
        transition: {
            enterFromClass: 'opacity-0 scale-75',
            enterActiveClass: 'transition-all duration-150 ease-in-out',
            leaveActiveClass: 'transition-all duration-150 ease-in',
            leaveToClass: 'opacity-0 scale-75'
        }
    }
}
    `
    };

    const code2 = {
        javascript: `
import React from 'react'; 
import { Image } from 'primereact/image';

export default function UnstyledDemo() {
    return (
        <div className="card flex justify-center">
            <Image src="https://primefaces.org/cdn/primereact/images/galleria/galleria10.jpg" alt="Image" width="250" preview />
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
