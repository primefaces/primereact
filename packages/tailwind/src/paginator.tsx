'use client';
import { PaginatorEllipsisProps, PaginatorFirstProps, PaginatorLastProps, PaginatorNextProps, PaginatorPageProps, PaginatorPagesInstance, PaginatorPagesProps, PaginatorPrevProps, PaginatorRootProps } from '@primereact/types/shared/paginator';
import { cn } from '@/components/ui/utils';
import { Paginator as PrimePaginator } from 'primereact/paginator';
import * as React from 'react';

function Paginator({ className, ...props }: PaginatorRootProps) {
    return <PrimePaginator.Root className={cn('flex items-center gap-2', className)} {...props} />;
}

function PaginatorPages({ className, ...props }: PaginatorPagesProps) {
    return (
        <PrimePaginator.Pages className={cn('flex items-center gap-2', className)} {...props}>
            {({ paginator }: PaginatorPagesInstance) => paginator?.pages.map((page, index) => (page.type === 'page' ? <PaginatorPage key={index} value={page.value} /> : <PaginatorEllipsis key={index} />))}
        </PrimePaginator.Pages>
    );
}

function PaginatorPage({ className, ...props }: PaginatorPageProps) {
    return <PrimePaginator.Page className={cn('cursor-pointer size-9 rounded-lg border border-surface hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors', className)} {...props} />;
}

function PaginatorEllipsis({ className, ...props }: PaginatorEllipsisProps) {
    return <PrimePaginator.Ellipsis className={cn('', className)} {...props} />;
}

function PaginatorFirst({ className, ...props }: PaginatorFirstProps) {
    return <PrimePaginator.First className={cn('', className)} {...props} />;
}

function PaginatorLast({ className, ...props }: PaginatorLastProps) {
    return <PrimePaginator.Last className={cn('', className)} {...props} />;
}

function PaginatorPrev({ className, ...props }: PaginatorPrevProps) {
    return <PrimePaginator.Prev className={cn('', className)} {...props} />;
}

function PaginatorNext({ className, ...props }: PaginatorNextProps) {
    return <PrimePaginator.Next className={cn('', className)} {...props} />;
}

export { Paginator, PaginatorFirst, PaginatorLast, PaginatorNext, PaginatorPage, PaginatorPages, PaginatorPrev };
