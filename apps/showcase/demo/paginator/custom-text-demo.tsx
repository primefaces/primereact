'use client';

import { usePaginatorChangeEvent } from '@primereact/types/shared/paginator';
import { Paginator } from 'primereact/paginator';
import React from 'react';

function CustomTextDemo() {
    const [page, setPage] = React.useState(1);

    const total = 100;
    const itemsPerPage = 5;

    return (
        <div className="flex items-center justify-end">
            <Paginator total={total} itemsPerPage={itemsPerPage} page={page} onPageChange={(e: usePaginatorChangeEvent) => setPage(e.value)}>
                <Paginator.Content>
                    Showing {itemsPerPage * (page - 1) + 1} – {Math.min(total, itemsPerPage * page)} of {total}
                    <Paginator.Prev />
                    <Paginator.Next />
                </Paginator.Content>
            </Paginator>
        </div>
    );
}

export default CustomTextDemo;
