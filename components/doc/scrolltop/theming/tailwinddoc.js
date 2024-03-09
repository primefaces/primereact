import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {          
    scrolltop: {
        root: ({ props }) => ({
            className: classNames('fixed bottom-20 right-20 flex items-center justify-center', 'ml-auto', {
                '!bg-blue-500 hover:bg-blue-600 text-white rounded-md h-8 w-8': props.target == 'parent',
                '!bg-gray-700 hover:bg-gray-800 h-12 w-12 rounded-full text-white': props.target !== 'parent'
            })
        }),
        transition: {
            enterFromClass: 'opacity-0',
            enterActiveClass: 'transition-opacity duration-150',
            leaveActiveClass: 'transition-opacity duration-150',
            leaveToClass: 'opacity-0'
        }
    }
}
    `
    };

    const code2 = {
        javascript: `
import React from 'react'; 
import { ScrollTop } from 'primereact/scrolltop';

export default function UnstyledDemo() {
    return (
        <div className="card">
            <div style={{ width: '250px', height: '200px', 'overflow': 'auto' }}>
                <p className="text-gray-700 dark:text-white/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur
                    adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor
                    augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet
                    nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus
                    viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec.
                </p>
                <ScrollTop target="parent" threshold={100} className="w-2rem h-2rem border-round bg-primary" icon="pi pi-arrow-up text-base" />
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
