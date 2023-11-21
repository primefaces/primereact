import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { DataTable } from '@/components/lib/datatable/DataTable';
import { Skeleton } from '@/components/lib/skeleton/Skeleton';

export function DataTableDoc(props) {
    const items = Array.from({ length: 5 }, (v, i) => i);

    const bodyTemplate = () => {
        return <Skeleton></Skeleton>;
    };

    const code = {
        basic: `
<DataTable value={items} className="p-datatable-striped">
    <Column field="code" header="Code" style={{ width: '25%' }} body={bodyTemplate}></Column>
    <Column field="name" header="Name" style={{ width: '25%' }} body={bodyTemplate}></Column>
    <Column field="category" header="Category" style={{ width: '25%' }} body={bodyTemplate}></Column>
    <Column field="quantity" header="Quantity" style={{ width: '25%' }} body={bodyTemplate}></Column>
</DataTable>
        `,
        javascript: `
import React from 'react';
import { Skeleton } from 'primereact/skeleton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function DataTableDemo() {
    const items = Array.from({ length: 5 }, (v, i) => i);

    const bodyTemplate = () => {
        return <Skeleton></Skeleton>
    }

    return (
        <div className="card">
            <DataTable value={items} className="p-datatable-striped">
                <Column field="code" header="Code" style={{ width: '25%' }} body={bodyTemplate}></Column>
                <Column field="name" header="Name" style={{ width: '25%' }} body={bodyTemplate}></Column>
                <Column field="category" header="Category" style={{ width: '25%' }} body={bodyTemplate}></Column>
                <Column field="quantity" header="Quantity" style={{ width: '25%' }} body={bodyTemplate}></Column>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React from 'react';
import { Skeleton } from 'primereact/skeleton';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function DataTableDemo() {
    const items: number[] = Array.from({ length: 5 }, (v, i) => i);

    function bodyTemplate(): JSX.Element {
        return <Skeleton></Skeleton>
    }

    return (
        <div className="card">
            <DataTable value={items} className="p-datatable-striped">
                <Column field="code" header="Code" style={{ width: '25%' }} body={bodyTemplate}></Column>
                <Column field="name" header="Name" style={{ width: '25%' }} body={bodyTemplate}></Column>
                <Column field="category" header="Category" style={{ width: '25%' }} body={bodyTemplate}></Column>
                <Column field="quantity" header="Quantity" style={{ width: '25%' }} body={bodyTemplate}></Column>
            </DataTable>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Sample DataTable implementation using different Skeleton components and PrimeFlex CSS utilities.</p>
            </DocSectionText>
            <div className="card">
                <DataTable value={items} className="p-datatable-striped">
                    <Column field="code" header="Code" style={{ width: '25%' }} body={bodyTemplate}></Column>
                    <Column field="name" header="Name" style={{ width: '25%' }} body={bodyTemplate}></Column>
                    <Column field="category" header="Category" style={{ width: '25%' }} body={bodyTemplate}></Column>
                    <Column field="quantity" header="Quantity" style={{ width: '25%' }} body={bodyTemplate}></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
