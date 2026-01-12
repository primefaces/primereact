'use client';
import { cn } from '@primeuix/utils';
import { allDocs } from 'contentlayer/generated';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { StyleClass } from 'primereact/styleclass';
import * as React from 'react';
import { ChatGPTIcon, ClaudeIcon, MarkdownIcon } from '../icons';

export default function DocCopyMarkdownMenu({
    llm,
    component,
    className,
    ...props
}: React.ComponentProps<'div'> & {
    llm: string;
    component?: string;
}) {
    const params = useParams();
    const [isCopied, setIsCopied] = React.useState(false);

    const [markdownLink, githubLink, chatGPTLink, claudeLink] = React.useMemo(() => {
        const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';

        let link: string;
        let githubSlug: string;
        const slugArray = Array.isArray(params?.slug) ? params.slug : [params?.slug].filter(Boolean);

        if (component) {
            const componentName = params?.slug?.[1];

            githubSlug = `${slugArray.join('/')}${['theming', 'pt', 'api']?.includes(slugArray[slugArray.length - 1]) ? '' : '/features'}`;
            link = `${baseUrl}/docs/components/${componentName}.md`;
        } else {
            githubSlug = slugArray.join('/');
            link = `${baseUrl}/docs/${slugArray.join('/')}.md`;
        }

        const githubLink = `https://github.com/primefaces/primereact/tree/v11/apps/showcase/docs/${githubSlug}.mdx`;
        const urlMessage = `Read ${link}, I want to ask questions about it.`;
        const encodedUrlMessage = encodeURIComponent(urlMessage);
        const chatGPTLink = `https://chatgpt.com/?hints=search&q=${encodedUrlMessage}`;
        const claudeLink = `https://claude.ai/new?q=${encodedUrlMessage}`;

        return [link, githubLink, chatGPTLink, claudeLink];
    }, [component, params]);

    const markdownContent = React.useMemo(() => {
        if (component) {
            const componentName = params?.slug?.[1];

            if (!componentName) {
                return '';
            }

            let featuresLLM = '';
            let apiLLM = '';
            let themingLLM = '';
            let ptLLM = '';

            allDocs.forEach((doc) => {
                if (doc.componentSlug === `components/${componentName}`) {
                    featuresLLM += doc.llm + '\n';
                }

                if (doc.componentSlug === `components/${componentName}/api`) {
                    apiLLM += doc.llm + '\n';
                }

                if (doc.componentSlug === `components/${componentName}/theming`) {
                    themingLLM += doc.llm + '\n';
                }

                if (doc.componentSlug === `components/${componentName}/pt`) {
                    ptLLM += doc.llm + '\n';
                }
            });

            return featuresLLM + '\n' + apiLLM + '\n' + themingLLM + '\n' + ptLLM;
        }

        return llm;
    }, [component, llm, params]);

    const handleCopy = () => {
        window.navigator.clipboard.writeText(markdownContent);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <div className={cn('flex items-center gap-4 relative', className)} {...props}>
            <div className="bg-surface-0 dark:bg-surface-900 overflow-hidden flex rounded-lg border border-surface shadow-xs divide-x divide-(--p-content-border-color)">
                <button
                    onClick={handleCopy}
                    disabled={isCopied}
                    className="inline-flex items-center gap-2 text-sm font-medium pl-2.5 pr-3 py-1.5 hover:bg-surface-50 dark:hover:bg-surface-800 text-surface-600 hover:text-surface-950 dark:text-surface-300 dark:hover:text-surface-0 transition-colors duration-150 disabled:opacity-75 disabled:pointer-events-none"
                >
                    <i className={`pi ${isCopied ? 'pi-check' : 'pi-copy'}`}></i>
                    <span className="">Copy Page</span>
                </button>
                <StyleClass
                    as="button"
                    type="button"
                    className="px-2.5 flex items-center justify-center transition-colors cursor-pointer hover:bg-surface-50 dark:hover:bg-surface-800 text-surface-600 hover:text-surface-950 dark:text-surface-300 dark:hover:text-surface-0"
                    aria-label="App Configurator"
                    selector=".copy-markdown-dropdown"
                    enterFromClassName="hidden"
                    enterActiveClassName="animate-scalein"
                    leaveToClassName="hidden"
                    leaveActiveClassName="animate-fadeout"
                    hideOnOutsideClick
                >
                    <i className="pi pi-chevron-down text-sm"></i>
                </StyleClass>
            </div>
            <div className="copy-markdown-dropdown hidden absolute top-[calc(100%+4px)] right-0 inset-inline-end-0 w-48 p-1 bg-(--overlay-background) rounded-lg border border-surface origin-top shadow-md z-50">
                <div className="flex flex-col gap-0.5">
                    <DocCopyMarkdownMenuItem href={markdownLink} target="_blank">
                        <MarkdownIcon />
                        View as Markdown
                    </DocCopyMarkdownMenuItem>
                    <DocCopyMarkdownMenuItem href={githubLink} target="_blank">
                        <i className="pi pi-github leading-none! text-sm"></i>
                        Open in Github
                    </DocCopyMarkdownMenuItem>
                    <DocCopyMarkdownMenuItem href={chatGPTLink} target="_blank">
                        <ChatGPTIcon />
                        Open in ChatGPT
                    </DocCopyMarkdownMenuItem>
                    <DocCopyMarkdownMenuItem href={claudeLink} target="_blank">
                        <ClaudeIcon />
                        Open in Claude
                    </DocCopyMarkdownMenuItem>
                </div>
            </div>
        </div>
    );
}

function DocCopyMarkdownMenuItem({ className, ...props }: React.ComponentProps<typeof Link>) {
    return (
        <Link
            className={cn(
                'text-sm [&_svg]:size-3.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-600 hover:text-surface-950 dark:text-surface-300 dark:hover:text-surface-0 transition-colors duration-150',
                className
            )}
            {...props}
        />
    );
}
