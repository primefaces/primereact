import DocPTViewer from '@/components/docs/doc-pt-viewer';
import { cn } from '@primeuix/utils';
import { getMDXComponent } from 'next-contentlayer2/hooks';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import DocButton from './doc-button';
import DocComponentShowcase from './doc-component-showcase';
import DocComponentsPreview from './doc-components-preview';
import DocCopyButton from './doc-copy-button';
import DocDemoViewer from './doc-demo-viewer';
import DocLinkCard from './doc-link-card';
import DocNotification from './doc-notification';
import DocNpmWrapper from './doc-npm-wrapper';
import DocSourceViewer from './doc-source-viewer';
import DocStepper, { DocStep } from './doc-stepper';
import DocTable from './doc-table';
import { DocTabs, DocTabsList, DocTabsPanel, DocTabsTab } from './doc-tabs';

const components = {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className={cn('group font-heading mb-2 scroll-m-32 text-3xl font-semibold text-(--high-contrast-text-color)', className)} {...props} />,
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className={cn('group font-heading mb-4 mt-12 scroll-m-32 text-2xl font-semibold text-(--high-contrast-text-color)', className)} {...props} />,
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className={cn('group font-heading mb-2 mt-6 scroll-m-32 text-xl font-semibold text-(--high-contrast-text-color)', className)} {...props} />,
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h4 className={cn('group font-heading mb-2 mt-6 scroll-m-32 text-lg font-semibold text-(--high-contrast-text-color)', className)} {...props} />,
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h5 className={cn('group font-heading mb-2 mt-6 scroll-m-32 text-base font-semibold text-(--high-contrast-text-color)', className)} {...props} />,
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h6 className={cn('group font-heading mb-2 mt-6 scroll-m-32 text-sm font-semibold text-(--high-contrast-text-color)', className)} {...props} />,
    a: ({ className, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
        const isAnchorLink = className?.includes('heading-anchor-link');

        if (isAnchorLink) {
            return <Link href={href ?? ''} className={className} {...props} />;
        }

        const isExternal = /^https?:\/\//.test(href ?? '');

        if (!isExternal) {
            return <Link href={href ?? ''} className={cn('font-medium text-(--primary-text-color) hover:underline!', className)} {...props} />;
        }

        return <a href={href ?? ''} target="_blank" rel="noopener noreferrer" className={cn('font-medium text-(--primary-text-color) hover:underline!', className)} {...props} />;
    },
    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => <p className={cn('mb-4', className)} {...props} />,
    strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => <strong className={cn('font-semibold', className)} {...props} />,
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => <ul className={cn('leading-normal list-disc list-inside', className)} {...props} />,
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />,
    li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => <li className={cn('mt-2', className)} {...props} />,
    blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)} {...props} />,
    img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => <img className={cn('mb-4', className)} alt={alt} {...props} />,
    hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => <hr className="my-4 md:my-8" {...props} />,
    table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="mb-6 overflow-auto">
            <table className={cn('min-w-[960px] w-full mb-6 border-collapse indent-0', className)} {...props} />
        </div>
    ),
    tbody: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => <tbody className={cn('[&_tr]:hover:bg-surface-100 dark:[&_tr]:hover:bg-surface-900', className)} {...props} />,
    tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => <tr className={cn('border-b border-(--border-color) transition-colors duration-150', className)} {...props} />,
    th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => <th className={cn('py-2.5 px-3 capitalize text-start text-sm', className)} {...props} />,
    td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => <td className={cn('py-2.5 px-3 whitespace-pre-line text-sm', className)} {...props} />,
    Image,
    Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => <Link className={cn('font-medium underline underline-offset-4', className)} {...props} />,
    em: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => <em className={cn('text-sm relative rounded-md bg-(--mark-background) font-medium text-(--mark-text) not-italic py-0.5 px-1.25', className)} {...props} />,
    DocDemoViewer,
    DocComponentShowcase,
    DocPTViewer,
    DocNotification,
    DocTable,
    DocStepper,
    DocStep,
    DocLinkCard,
    pre: ({
        className,
        children,
        __syntaxSource__,
        __npmInstall__,
        __yarnInstall__,
        __pnpmInstall__,
        __bunInstall__,
        ...props
    }: React.ComponentProps<'pre'> & {
        __syntaxSource__?: string;
        __npmInstall__?: string;
        __yarnInstall__?: string;
        __pnpmInstall__?: string;
        __bunInstall__?: string;
    }) => {
        const isNpmCommand = __npmInstall__ || __yarnInstall__ || __pnpmInstall__ || __bunInstall__;

        if (isNpmCommand) {
            return <DocNpmWrapper commands={{ npm: __npmInstall__, pnpm: __pnpmInstall__, yarn: __yarnInstall__, bun: __bunInstall__ }} />;
        }

        return (
            <pre data-rehype-pretty-code-pre="" className={cn('group', className)} {...props}>
                {__syntaxSource__ && (
                    <DocCopyButton source={__syntaxSource__} className="opacity-75 group-hover:opacity-100 !transition-[opacity,background-color,color] absolute top-1.75 right-1.75 rounded-lg z-2 group-hover:bg-(--code-figure-background)" />
                )}
                {children}
            </pre>
        );
    },
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
        if (typeof props.children === 'string') {
            return <code className={cn('mark', className)} {...props} />;
        }

        return <code className={cn('font-mono text-sm', className)} {...props} />;
    },
    Button: DocButton,
    DocTabs,
    DocTabsTab,
    DocTabsList,
    DocTabsPanel,
    DocComponentsPreview,
    DocSourceViewer
};

function DocMdx({ code }: { code: string }) {
    const Component = getMDXComponent(code);

    return <Component components={components} />;
}

export default DocMdx;
