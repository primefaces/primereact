'use client';
import { cn } from '@primeuix/utils';
import React from 'react';
import DocCopyButton from './doc-copy-button';
import { DocDemoViewerProps } from './doc-demo-viewer';

const COMPONENT_PATH_REGEX = /'@\/components\/ui\/[a-zA-Z0-9\-_/]+'/g;

export default function DocDemoWrapper({
    name,
    component,
    source,
    highlightedCode,
    className,
    mode,
    ...props
}: React.ComponentProps<'div'> & {
    component?: React.ReactNode;
    source?: string;
    name: string;
    highlightedCode?: string;
    mode?: DocDemoViewerProps['mode'];
}) {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    const demo = name.startsWith('components/ui/') ? name : name.split(':')[1];

    const isSourceNotAvailable = mode === 'hidden' || !highlightedCode || !source;

    highlightedCode = name.startsWith('components/ui/')
        ? (highlightedCode?.replace(COMPONENT_PATH_REGEX, (match) => {
              const href = `/docs/tailwind/${match.replace('@/', '').replace('ui/', '').replaceAll("'", '')}`;

              return `<a href="${href}" >${match}</a>`;
          }) as string)
        : (highlightedCode as string);

    return (
        <div className={cn('mb-16 mt-2 p-2 space-y-2 rounded-[14px] bg-surface-100 dark:bg-surface-800/75 shadow-[0_0_0_0.5px_rgba(0,0,0,0.2)] dark:shadow-[0_0_0_0.5px_rgba(255,255,255,0.2)]', className)} {...props}>
            {component && (
                <div className="flex flex-col overflow-hidden bg-surface-0 dark:bg-surface-950 rounded-[8px] shadow-[0_0_0_0.5px_rgba(0,0,0,0.2)] dark:shadow-[0_0_0_0.5px_rgba(255,255,255,0.15)]">
                    <div className="flex-1 pt-8 px-8 pb-5 md:pt-10 md:px-10 md:pb-7">{component}</div>
                    <div className="flex items-center gap-2 pl-2.5 pr-1.5 py-1.5">
                        <span className="px-2 py-1.5 rounded-md bg-surface-100 dark:bg-surface-900 font-mono text-sm uppercase text-surface-400 dark:text-surface-500 whitespace-nowrap leading-3 tracking-tight">{demo}</span>
                        <div className="flex items-center justify-end flex-1">
                            <div className="flex items-center gap-px">
                                {mode === 'compact' ? (
                                    <CaptionButton title={isExpanded ? 'Collapse Code' : 'Expand Code'} onClick={() => setIsExpanded((prev) => !prev)}>
                                        <i className={`pi ${isExpanded ? ' pi-arrow-down-left-and-arrow-up-right-to-center' : 'pi-arrow-up-right-and-arrow-down-left-from-center'}`}></i>
                                    </CaptionButton>
                                ) : (
                                    mode === 'collapsible' && (
                                        <CaptionButton title="Toggle Code" onClick={() => setIsCollapsed((prev) => !prev)}>
                                            {!isCollapsed ? <i className="pi pi-code" /> : <i className="pi pi-times" />}
                                        </CaptionButton>
                                    )
                                )}
                                <CaptionButton title="Open in StackBlitz">
                                    <i className="pi pi-bolt"></i>
                                </CaptionButton>
                                {!isSourceNotAvailable && <DocCopyButton title="Copy Code" className="size-8! [&_i]:text-sm!" source={source} />}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {!isSourceNotAvailable && (mode !== 'collapsible' || isCollapsed) && (
                <div className="rounded-[10px] bg-(--code-figure-background) overflow-hidden shadow-[0_0_0_0.5px_rgba(0,0,0,0.2)] dark:shadow-[0_0_0_0.5px_rgba(255,255,255,0.15)]">
                    <figure data-rehype-pretty-code-figure="in-wrapper" data-expanded={isExpanded} className={cn('', mode === 'compact' && 'data-[expanded=true]:[&_pre]:max-h-max [&_pre]:max-h-[300px]')}>
                        <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
                    </figure>
                </div>
            )}
        </div>
    );
}

export const CaptionButton = ({ className, ...props }: React.ComponentProps<'button'>) => {
    return (
        <button
            className={cn(
                'px-2.5 size-8 [&_i]:text-sm! text-sm flex items-center justify-center gap-2 rounded-md hover:text-surface-900 dark:hover:text-surface-0 hover:bg-surface-200/50 dark:hover:bg-surface-800 text-surface-500 dark:text-surface-400 transition-colors',
                className
            )}
            {...props}
        />
    );
};
