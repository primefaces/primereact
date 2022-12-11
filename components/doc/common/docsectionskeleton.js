import React from 'react';
import { Column } from '../../lib/column/Column';
import { DataTable } from '../../lib/datatable/DataTable';
import { Skeleton } from '../../lib/skeleton/Skeleton';

function DocSectionSkeleton() {
    const products = Array.from({ length: 5 });

    const bodyTemplate = () => {
        return <Skeleton></Skeleton>;
    };

    return (
        <div className="card">
            <Skeleton width="10rem" className="mb-2"></Skeleton>
            <Skeleton width="5rem" className="mb-4"></Skeleton>
            <DataTable value={products} className="p-datatable-striped">
                <Column field="code" header="Code" style={{ width: '25%' }} body={bodyTemplate}></Column>
                <Column field="name" header="Name" style={{ width: '25%' }} body={bodyTemplate}></Column>
                <Column field="category" header="Category" style={{ width: '25%' }} body={bodyTemplate}></Column>
                <Column field="quantity" header="Quantity" style={{ width: '25%' }} body={bodyTemplate}></Column>
            </DataTable>
        </div>
    );
}

export default DocSectionSkeleton;
