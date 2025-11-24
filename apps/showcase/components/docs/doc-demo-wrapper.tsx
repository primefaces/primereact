'use client';
import { cn } from '@primeuix/utils';
import React from 'react';
import DocCopyButton from './doc-copy-button';

export default function DocDemoWrapper({
    name,
    component,
    source,
    highlightedCode,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    component?: React.ReactNode;
    source?: string;
    name: string;
    highlightedCode?: string;
}) {
    const [isExpanded, setIsExpanded] = React.useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, demo] = name.split(':');

    const isSourceNotAvailable = !highlightedCode || !source;

    return (
        <div className={cn('rounded-lg border border-(--code-figure-border) overflow-hidden mb-16', className)} {...props}>
            <div className="bg-(--code-figure-background) p-8">{component}</div>
            {!isSourceNotAvailable && (
                <>
                    <div className="flex items-center justify-between gap-8 overflow-x-auto overflow-y-hidden pl-6 pr-1.5 py-1.5 border-y border-(--code-figure-border) bg-(--code-figure-caption-background)">
                        <div className="inline-flex items-center gap-2">
                            <TypescriptLogo className="size-4 fill-surface-500 dark:fill-surface-400" />
                            <span className="font-mono text-surface-500 dark:text-surface-400 whitespace-nowrap leading-none">{demo}.tsx</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CaptionButton>
                                Stackblitz
                                <i className="pi pi-external-link"></i>
                            </CaptionButton>
                            <span className="w-px h-4 bg-surface-200 dark:bg-surface-800"></span>
                            <CaptionButton onClick={() => setIsExpanded((prev) => !prev)}>{isExpanded ? 'Collapse' : 'Expand'}</CaptionButton>
                            <span className="w-px h-4 bg-surface-200 dark:bg-surface-800"></span>
                            <DocCopyButton source={source} className="hover:bg-surface-200/50" />
                        </div>
                    </div>
                    <figure data-rehype-pretty-code-figure="in-wrapper" data-expanded={isExpanded} className="data-[expanded=true]:[&_pre]:max-h-[600px] [&_pre]:max-h-[300px]">
                        <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
                    </figure>
                </>
            )}
        </div>
    );
}

const TypescriptLogo = ({ ...props }: React.ComponentProps<'svg'>) => {
    return (
        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M0 0V14H14V0H0ZM8.29578 7.35078H6.64844V12.4444H5.32078V7.35078H3.70767V6.22222H8.29578V7.35078ZM8.554 12.1536V10.7917C8.554 10.7917 9.29756 11.3524 10.1904 11.3524C11.0833 11.3524 11.0483 10.7691 11.0483 10.689C11.0483 9.842 8.51978 9.842 8.51978 7.966C8.51978 5.41411 12.2041 6.42133 12.2041 6.42133L12.1582 7.63389C12.1582 7.63389 11.5407 7.22167 10.8422 7.22167C10.1446 7.22167 9.89256 7.55378 9.89256 7.90844C9.89256 8.82389 12.4444 8.73211 12.4444 10.5747C12.4444 13.412 8.554 12.1536 8.554 12.1536Z" />
        </svg>
    );
};

const CaptionButton = ({ className, ...props }: React.ComponentProps<'button'>) => {
    return (
        <button
            className={cn(
                'px-2.5 h-8 flex items-center justify-center gap-2 rounded-md hover:text-surface-900 dark:hover:text-surface-0 hover:bg-surface-200/50 dark:hover:bg-surface-800 text-surface-500 dark:text-surface-400 transition-colors',
                className
            )}
            {...props}
        />
    );
};
