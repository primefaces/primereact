// @ts-nocheck
'use client';
import DocComponentViewer from '@/components/doc/DocComponentViewer';
import DocPTViewer from '@/components/doc/DocPTViewer';
import { cn } from '@primeuix/utils';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import DocApiTable from './DocApiTable';
import DocCodeViewerConfig from './DocCodeViewerConfig';
const components = {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h1 className={cn('group font-heading mt-2 scroll-m-20 text-4xl font-bold', className)} {...props} />,
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className={cn('group font-heading mt-24 scroll-m-[8.5rem] text-2xl font-semibold first:mt-0', className)} {...props} />,
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className={cn('group font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight', className)} {...props} />,
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h4 className={cn('group font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight', className)} {...props} />,
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h5 className={cn('group font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight', className)} {...props} />,
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => <h6 className={cn('group font-heading mt-8 scroll-m-20 text-base font-semibold tracking-tight', className)} {...props} />,
    a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => <a className={cn('font-medium underline underline-offset-4', className)} {...props} />,
    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => <p className={cn('leading-[1.625rem] [&:not(:first-child)]:mt-6', className)} {...props} />,
    strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => <strong className={cn('font-semibold', className)} {...props} />,
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />,
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />,
    li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => <li className={cn('mt-2', className)} {...props} />,
    blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)} {...props} />,
    img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={cn('rounded-md', className)} alt={alt} {...props} />
    ),
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
    DocApiTable,
    pre: ({ className, children, __rawString__, ...props }: React.HTMLAttributes<HTMLPreElement> & { __rawString__?: string }) => {
        return (
            <div className="group/pre relative">
                <pre className={cn('relative rounded-xl p-5 overflow-auto border border-surface-800 !bg-surface-950', className)} {...props}>
                    {children}
                </pre>
                <DocCodeViewerConfig rawString={__rawString__} />
            </div>
        );
    }
};

interface DocMdxProps {
    code: string;
}

export function DocMdx({ code }: DocMdxProps) {
    const Component = useMDXComponent(code);

    return <Component components={components} />;
}
