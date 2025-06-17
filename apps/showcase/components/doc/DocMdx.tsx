'use client';
import DocComponentViewer from '@/components/doc/DocComponentViewer';
import DocPTViewer from '@/components/doc/DocPTViewer';
import { cn } from '@primeuix/utils';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import DocCodeViewer from './DocCodeViewer';
import DocTable from './DocTable';
import { Checkbox } from 'primereact/checkbox';

const components = {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className={cn('group font-heading mt-2 scroll-m-32 text-3xl leading-[1.2] font-semibold text-(--high-contrast-text-color)', className)} {...props} />,
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className={cn('group font-heading mb-4 mt-12 scroll-m-32 text-[1.625rem] leading-[1.2] font-semibold text-(--high-contrast-text-color)', className)} {...props} />,
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className={cn('group font-heading mb-2 mt-6 scroll-m-32 text-[1.425rem] leading-[1.2] font-semibold text-(--high-contrast-text-color)', className)} {...props} />,
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h4 className={cn('group font-heading mb-2 mt-6 scroll-m-32 text-lg leading-[1.2] font-semibold text-(--high-contrast-text-color)', className)} {...props} />,
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h5 className={cn('group font-heading mb-2 mt-6 scroll-m-32 text-base leading-[1.2] font-semibold text-(--high-contrast-text-color)', className)} {...props} />,
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h6 className={cn('group font-heading mb-2 mt-6 scroll-m-32 text-sm leading-[1.2] font-semibold text-(--high-contrast-text-color)', className)} {...props} />,
    a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => <a className={cn('font-medium underline underline-offset-4', className)} {...props} />,
    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => <p className={cn('leading-[1.625rem] mb-4', className)} {...props} />,
    strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => <strong className={cn('font-semibold', className)} {...props} />,
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />,
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />,
    li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => <li className={cn('mt-2', className)} {...props} />,
    blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)} {...props} />,
    //img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => <img className={cn('rounded-md', className)} alt={alt} {...props} />,
    hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => <hr className="my-4 md:my-8" {...props} />,
    table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="mb-6 overflow-auto">
            <table className={cn('min-w-[960px] w-full mb-6 border-collapse indent-0', className)} {...props} />
        </div>
    ),
    tbody: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => <tbody className={cn('[&_tr]:hover:bg-surface-100 dark:[&_tr]:hover:bg-surface-900', className)} {...props} />,
    tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => <tr className={cn('border-b border-[var(--border-color)] transition-colors duration-150', className)} {...props} />,
    th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => <th className={cn('py-3 px-4 capitalize text-start', className)} {...props} />,
    td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => <td className={cn('text-[var(--primary-text-color)] py-3 px-4 whitespace-pre-line', className)} {...props} />,
    Image,
    Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => <Link className={cn('font-medium underline underline-offset-4', className)} {...props} />,
    LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
        <Link className={cn('flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10', className)} {...props} />
    ),
    em: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => <em className={cn('relative rounded-md bg-[var(--mark-background)] font-semibold text-[var(--mark-text)] not-italic py-0.5 px-1.5 text-base', className)} {...props} />,
    DocComponentViewer,
    DocPTViewer,
    DocTable,
    Checkbox,
    pre: DocCodeViewer,
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
        const isInlineCode = !className?.includes('language-');

        return <code className={cn(isInlineCode ? 'bg-surface-200 dark:bg-surface-800 border border-surface-300 dark:border-surface-700 rounded-md px-1 py-0.25' : '', className)} {...props} />;
    }
};

interface DocMdxProps {
    code: string;
}

export function DocMdx({ code }: DocMdxProps) {
    const Component = useMDXComponent(code);

    return <Component components={components} />;
}
