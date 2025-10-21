'use client';
import { usePaginatorChangeEvent } from '@primereact/types/shared/paginator';
import { InputText } from 'primereact/inputtext';
import { Paginator } from 'primereact/paginator';
import React from 'react';

function WithInputDemo() {
    const [page, setPage] = React.useState(1);

    const total = 100;
    const itemsPerPage = 5;
    const maxPage = Math.ceil(total / itemsPerPage);

    return (
        <div className="card flex items-center justify-center">
            <Paginator
                total={total}
                itemsPerPage={itemsPerPage}
                page={page}
                onPageChange={(e: usePaginatorChangeEvent) => {
                    setPage(e.value);
                }}
            >
                <Paginator.Content>
                    <Paginator.First />
                    <Paginator.Prev />
                    <div className="flex items-center gap-2">
                        <InputText
                            className="max-w-14 px-2 py-1"
                            type="number"
                            value={page}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPage(Number(e.target.value))}
                        />
                        <span>of {maxPage}</span>
                    </div>
                    <Paginator.Next />
                    <Paginator.Last />
                </Paginator.Content>
            </Paginator>
        </div>
    );
}

export default WithInputDemo;
