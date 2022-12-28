import React from 'react';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import { Skeleton } from '../../lib/skeleton/Skeleton';
import { DataTable } from '../../lib/datatable/DataTable';
import { Column } from '../../lib/column/Column';

export function DataTableDoc(props) {
    const products = Array.from({ length: 5 });

    const bodyTemplate = () => {
        return <Skeleton></Skeleton>;
    };

    const code = {
        basic: `
<DataTable value={products} className="p-datatable-striped">
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

export default function DataTableDoc() {
    const products = Array.from({ length: 5 });

    const bodyTemplate = () => {
        return <Skeleton></Skeleton>
    }

    return (
        <div className="card">
            <DataTable value={products} className="p-datatable-striped">
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

export default function DataTableDoc() {

    interface Product {
        length: number
      }

    const products: Product[] = [{ length: 5 }];

    function bodyTemplate(): JSX.Element {
        return <Skeleton></Skeleton>
    }

    return (
        <div className="card">
            <DataTable value={products} className="p-datatable-striped">
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
                <p>DataTable Demo Content.</p>
            </DocSectionText>
            <div className="card">
                <DataTable value={products} className="p-datatable-striped">
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
