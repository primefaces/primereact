'use client';
import { cn } from '@primeuix/utils';
import React from 'react';
import { type Showcase } from './doc-component-showcase';
import DocCopyButton from './doc-copy-button';
import { CaptionButton } from './doc-demo-wrapper';

export default function DocShowcaseWrapper({
    className,
    showcase,
    ...props
}: React.ComponentProps<'div'> & {
    showcase: Map<string, Showcase>;
}) {
    const [tab, setTab] = React.useState<'styled' | 'tailwind'>('styled');
    const [inlineTab, setInlineTab] = React.useState(showcase.get(tab)?.components.keys().next().value ?? '');
    const [isExpanded, setIsExpanded] = React.useState(false);

    const handleTabChange = (tab: 'styled' | 'tailwind') => {
        setTab(tab);
        setInlineTab(showcase.get(tab)?.components.keys().next().value ?? '');
    };

    return (
        <div className={cn('rounded-lg bg-(--code-figure-background) border border-(--code-figure-border) overflow-hidden mt-4 mb-2', className)} {...props}>
            <div className="p-2 border-b border-(--code-figure-border) flex items-center gap-1">
                {['styled', 'tailwind'].map((item) => (
                    <button
                        key={item}
                        onClick={() => handleTabChange(item as 'styled' | 'tailwind')}
                        className="cursor-pointer px-3 py-2 font-medium rounded-md hover:bg-surface-200/50 dark:hover:bg-surface-800 capitalize text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-300 transition-colors data-selected:bg-surface-200/50 data-selected:text-surface-800 dark:data-selected:bg-surface-800 dark:data-selected:text-surface-0"
                        {...(tab === item ? { 'data-selected': '' } : {})}
                    >
                        {item}
                    </button>
                ))}
                <div className="flex items-center justify-end flex-1">
                    <CaptionButton className="px-3 py-2 h-auto">
                        Stackblitz <i className="pi pi-external-link"></i>
                    </CaptionButton>
                </div>
            </div>
            <div className="p-2">
                <div className="px-6 py-10">{showcase.get(tab)?.demo}</div>
                <div className="rounded-[0.45rem] overflow-hidden ">
                    <div className="flex items-center h-12 pr-2 border-b border-(--code-figure-border)/75 bg-surface-50 dark:bg-surface-950 overflow-auto">
                        {Array.from(showcase.get(tab)?.components.keys() || []).map((item) => (
                            <button
                                key={item}
                                onClick={() => setInlineTab(item)}
                                className="relative h-full cursor-pointer px-3 py-1 flex items-center gap-1.5 font-mono text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-300 transition-colors data-selected:text-surface-800 dark:data-selected:text-surface-0 whitespace-nowrap"
                                {...(item === inlineTab ? { 'data-selected': '' } : {})}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="175.7 78 490.6 436.9" className="w-4 h-auto fill-surface-500 dark:fill-surface-400">
                                    <g>
                                        <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
                                        <circle cx="420.9" cy="296.5" r="45.7" />
                                    </g>
                                </svg>
                                {item.split(':')[1]}.tsx
                            </button>
                        ))}
                        <div className="flex items-center justify-end flex-1 gap-1 ml-4">
                            <CaptionButton onClick={() => setIsExpanded((prev) => !prev)}>{isExpanded ? 'Collapse' : 'Expand'}</CaptionButton>
                            <span className="w-px h-4 bg-surface-200 dark:bg-surface-800"></span>
                            <DocCopyButton source={showcase.get(tab)?.components.get(inlineTab)?.source ?? ''} className="hover:bg-surface-200/50" />
                        </div>
                    </div>
                    <figure
                        data-rehype-pretty-code-figure="in-wrapper"
                        data-expanded={isExpanded}
                        className="data-[expanded=true]:[&_pre]:max-h-[600px] [&_pre]:max-h-[300px] [--code-figure-background:var(--p-surface-50)] dark:[--code-figure-background:var(--p-surface-950)]"
                    >
                        <div dangerouslySetInnerHTML={{ __html: showcase.get(tab)?.components.get(inlineTab)?.highlightedCode || '' }} />
                    </figure>
                </div>
            </div>
        </div>
    );

    return (
        <div className={cn('rounded-lg border border-(--code-figure-border) overflow-hidden mt-4 mb-2', className)} {...props}>
            <div className="px-4 py-2 bg-(--code-figure-background)">
                <div className="px-4 py-12">{showcase.get(tab)?.demo}</div>
            </div>
            <div className="p-2">
                <div className=" relative flex items-center bg-(--code-figure-caption-background) border-y border-(--code-figure-border) h-11 ">
                    <div className="h-full divide-x divide-(--code-figure-border) ">
                        {Array.from(showcase.get(tab)?.components.keys() || []).map((key) => (
                            <button
                                key={key}
                                onClick={() => setInlineTab(key)}
                                className={cn(
                                    'relative group cursor-pointer px-5 h-full inline-flex items-center gap-2 bg-transparent data-selected:bg-surface-0 dark:data-selected:bg-surface-900 last:border-r border-r-(--code-figure-border) after:content-none data-selected:after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-surface-0 dark:after:bg-surface-900'
                                )}
                                {...(key === inlineTab ? { 'data-selected': true } : {})}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="175.7 78 490.6 436.9" className="w-4 h-auto fill-surface-500 dark:fill-surface-400">
                                    <g>
                                        <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
                                        <circle cx="420.9" cy="296.5" r="45.7" />
                                    </g>
                                </svg>
                                <span className="font-mono text-surface-500 dark:text-surface-400 whitespace-nowrap leading-none group-data-selected:text-surface-700 dark:group-data-selected:text-surface-200">{key.split(':')[1]}.tsx</span>
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center justify-end flex-1 px-2 gap-2">
                        <CaptionButton>
                            Stackblitz
                            <i className="pi pi-external-link"></i>
                        </CaptionButton>
                        <span className="w-px h-4 bg-surface-200 dark:bg-surface-800"></span>
                        <CaptionButton onClick={() => setIsExpanded((prev) => !prev)}>
                            {isExpanded ? (
                                <>
                                    <span className="md:block hidden">Collapse</span>
                                    <i className="pi pi-arrow-down-left-and-arrow-up-right-to-center"></i>
                                </>
                            ) : (
                                <>
                                    <span className="md:block hidden">Expand</span>
                                    <i className="pi pi-arrow-up-right-and-arrow-down-left-from-center"></i>
                                </>
                            )}
                        </CaptionButton>
                        <span className="w-px h-4 bg-surface-200 dark:bg-surface-800"></span>
                        <DocCopyButton source={showcase.get(tab)?.components.get(inlineTab)?.source ?? ''} className="hover:bg-surface-200/50" />
                    </div>
                </div>
                <div className="relative">
                    <figure data-rehype-pretty-code-figure="in-wrapper" data-expanded={isExpanded} className="data-[expanded=true]:[&_pre]:max-h-[600px] [&_pre]:max-h-[300px]">
                        <div dangerouslySetInnerHTML={{ __html: showcase.get(tab)?.components.get(inlineTab)?.highlightedCode || '' }} />
                    </figure>
                </div>
            </div>
        </div>
    );
}
