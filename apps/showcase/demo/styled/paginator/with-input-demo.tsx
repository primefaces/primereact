'use client';
import { AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon } from '@primereact/icons';
import { usePaginatorChangeEvent } from '@primereact/types/shared/paginator';
import { InputText } from '@primereact/ui/inputtext';
import { Paginator } from '@primereact/ui/paginator';
import React from 'react';

function WithInputDemo() {
    const [page, setPage] = React.useState(1);

    const total = 100;
    const itemsPerPage = 5;
    const maxPage = Math.ceil(total / itemsPerPage);

    return (
        <div className="flex items-center justify-center">
            <Paginator.Root
                total={total}
                itemsPerPage={itemsPerPage}
                page={page}
                onPageChange={(e: usePaginatorChangeEvent) => {
                    setPage(e.value);
                }}
            >
                <Paginator.Content>
                    <Paginator.First>
                        <AngleDoubleLeftIcon />
                    </Paginator.First>
                    <Paginator.Prev>
                        <AngleLeftIcon />
                    </Paginator.Prev>
                    <div className="flex items-center gap-2">
                        <InputText
                            size="small"
                            min={1}
                            max={maxPage}
                            value={page}
                            className="max-w-12"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPage(Number(e.target.value))}
                        />
                        <span className="flex-1 whitespace-nowrap text-sm">of {maxPage}</span>
                    </div>
                    <Paginator.Next>
                        <AngleRightIcon />
                    </Paginator.Next>
                    <Paginator.Last>
                        <AngleDoubleRightIcon />
                    </Paginator.Last>
                </Paginator.Content>
            </Paginator.Root>
        </div>
    );
}

export default WithInputDemo;
