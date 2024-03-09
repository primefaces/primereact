import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {          
    tabview: {
        navContainer: ({ props }) => ({
            className: classNames(
                'relative', // Relative positioning.
                { 'overflow-hidden': props.scrollable } // Overflow condition.
            )
        }),
        navContent: 'overflow-y-hidden overscroll-contain overscroll-auto scroll-smooth [&::-webkit-scrollbar]:hidden', // Overflow and scrollbar styles.
        previousButton: {
            className: classNames('h-full flex items-center justify-center !absolute top-0 z-20', 'left-0', 'bg-white text-blue-500 w-12 shadow-md rounded-none', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 )') // Flex and absolute positioning styles.
        },
        nextButton: {
            className: classNames('h-full flex items-center justify-center !absolute top-0 z-20', 'right-0', 'bg-white text-blue-500 w-12 shadow-md rounded-none', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 ') // Flex and absolute positioning styles.
        },
        nav: {
            className: classNames('flex flex-1 list-none m-0 p-0', 'bg-transparent border border-gray-300 border-0 border-b-2', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 ') // Flex, list, margin, padding, and border styles.
        },
        tabpanel: {
            header: ({ props }) => ({
                className: classNames('mr-0', { 'cursor-default pointer-events-none select-none user-select-none opacity-60': props?.disabled }) // Margin and condition-based styles.
            }),
            headerAction: ({ parent, context }) => ({
                className: classNames(
                    'items-center cursor-pointer flex overflow-hidden relative select-none text-decoration-none user-select-none', // Flex and overflow styles.
                    'border-b-2 p-5 font-bold rounded-t-md transition-shadow duration-200 m-0', // Border, padding, font, and transition styles.
                    'transition-colors duration-200', // Transition duration style.
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // Focus styles.
                    {
                        'border-gray-300 bg-white text-gray-700 hover:bg-white hover:border-gray-400 hover:text-gray-600 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80':
                            parent.state.activeIndex !== context.index, // Condition-based hover styles.
                        'bg-white border-blue-500 text-blue-500 dark:bg-gray-900 dark:border-blue-300 dark:text-blue-300': parent.state.activeIndex === context.index // Condition-based active styles.
                    }
                ),
                style: { marginBottom: '-2px' } // Negative margin style.
            }),
            headerTitle: {
                className: classNames('leading-none whitespace-nowrap') // Leading and whitespace styles.
            },
            content: {
                className: classNames('bg-white p-5 border-0 text-gray-700 rounded-bl-md rounded-br-md', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80') // Background, padding, border, and text styles.
            }
        }
    }
}
    `
    };

    const code2 = {
        javascript: `
import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';

export default function UnstyledDemo() {
    return (
        <div className="card">
            <TabView>
                <TabPanel header="Header I">
                    <p className="m-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </TabPanel>
                <TabPanel header="Header II">
                    <p className="m-0">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                        ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                </TabPanel>
                <TabPanel header="Header III">
                    <p className="m-0">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
                        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                        culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                    </p>
                </TabPanel>
                <TabPanel header="Header IV" disabled></TabPanel>
            </TabView>
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
