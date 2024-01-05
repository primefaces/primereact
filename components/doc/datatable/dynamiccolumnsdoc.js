import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { DataTable } from '@/components/lib/datatable/DataTable';
import { useEffect, useState } from 'react';
import { ProductService } from '../../../service/ProductService';
import DeferredDemo from '@/components/demo/DeferredDemo';

export function DynamicColumnsDoc(props) {
    const [products, setProducts] = useState([]);
    const columns = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'quantity', header: 'Quantity' }
    ];

    const loadDemoData = () => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    };

    const code = {
        basic: `
<DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
    {columns.map((col, i) => (
        <Column key={col.field} field={col.field} header={col.header} />
    ))}
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function DynamicColumnsDemo() {
    const [products, setProducts] = useState([]);
    const columns = [
        {field: 'code', header: 'Code'},
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

interface ColumnMeta {
    field: string;
    header: string;
}

export default function DynamicColumnsDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const columns: ColumnMeta[] = [
        {field: 'code', header: 'Code'},
        {field: 'name', header: 'Name'},
        {field: 'category', header: 'Category'},
        {field: 'quantity', header: 'Quantity'}
    ];

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </div>
    );
}
        `,
        data: `
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
...
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Columns can be created programmatically.</p>
            </DocSectionText>
            <DeferredDemo onLoad={loadDemoData}>
                <div className="card">
                    <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                        {columns.map((col, i) => (
                            <Column key={col.field} field={col.field} header={col.header} />
                        ))}
                    </DataTable>
                </div>
            </DeferredDemo>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
