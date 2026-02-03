'use client';
import { AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon } from '@primereact/icons';
import { usePaginatorChangeEvent } from '@primereact/types/shared/paginator';
import { Paginator } from '@primereact/ui/paginator';
import React from 'react';

function TemplateDemo() {
    const [page, setPage] = React.useState(1);

    return (
        <div className="flex flex-col gap-6 items-center justify-center">
            <Paginator.Root total={12} itemsPerPage={1} page={1} onPageChange={(e: usePaginatorChangeEvent) => setPage(e.value)}>
                <Paginator.Content>
                    <Paginator.First>
                        <AngleDoubleLeftIcon />
                    </Paginator.First>
                    <Paginator.Prev>
                        <AngleLeftIcon />
                    </Paginator.Prev>
                    <div className="text-surface-500">({page} of 12)</div>
                    <Paginator.Next>
                        <AngleRightIcon />
                    </Paginator.Next>
                    <Paginator.Last>
                        <AngleDoubleRightIcon />
                    </Paginator.Last>
                </Paginator.Content>
            </Paginator.Root>

            <div className="p-4 text-center">
                <img
                    src={`https://primefaces.org/cdn/primevue/images/nature/nature${page}.jpg`}
                    alt={page.toString()}
                    className="rounded-lg w-full sm:w-[30rem]"
                />
            </div>
        </div>
    );
}

export default TemplateDemo;
