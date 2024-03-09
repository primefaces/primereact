import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { DataTable } from '@/components/lib/datatable/DataTable';
import { useEffect, useState } from 'react';
import { ProductService } from '../../../../service/ProductService';
import DeferredDemo from '@/components/demo/DeferredDemo';

export function PresortDoc(props) {
    const [products, setProducts] = useState([]);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    const loadDemoData = () => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    };

    const code = {
        basic: `
<DataTable value={products} sortField="price" sortOrder={-1} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code" sortable style={{ width: '20%' }}></Column>
    <Column field="name" header="Name" sortable style={{ width: '20%' }}></Column>
    <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ width: '20%' }}></Column>
    <Column field="category" header="Category" sortable style={{ width: '20%' }}></Column>
    <Column field="quantity" header="Quantity" sortable style={{ width: '20%' }}></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function PresortDemo() {
    const [products, setProducts] = useState([]);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (product) => {
        return formatCurrency(product.price);
    };

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} sortField="price" sortOrder={-1} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" sortable style={{ width: '20%' }}></Column>
                <Column field="name" header="Name" sortable style={{ width: '20%' }}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ width: '20%' }}></Column>
                <Column field="category" header="Category" sortable style={{ width: '20%' }}></Column>
                <Column field="quantity" header="Quantity" sortable style={{ width: '20%' }}></Column>
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

export default function PresortDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (product: Product) => {
        return formatCurrency(product.price);
    };

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} sortField="price" sortOrder={-1} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code" sortable style={{ width: '20%' }}></Column>
                <Column field="name" header="Name" sortable style={{ width: '20%' }}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ width: '20%' }}></Column>
                <Column field="category" header="Category" sortable style={{ width: '20%' }}></Column>
                <Column field="quantity" header="Quantity" sortable style={{ width: '20%' }}></Column>
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
                <p>
                    Defining a default <i>sortField</i> and <i>sortOrder</i> displays data as sorted initially in single column sorting. In <i>multiple</i> sort mode,
                    <i>multiSortMeta</i> should be used instead by providing an array of <i>DataTableSortMeta</i> objects.
                </p>
            </DocSectionText>
            <DeferredDemo onLoad={loadDemoData}>
                <div className="card">
                    <DataTable value={products} sortField="price" sortOrder={-1} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="code" header="Code" sortable style={{ width: '20%' }}></Column>
                        <Column field="name" header="Name" sortable style={{ width: '20%' }}></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ width: '20%' }}></Column>
                        <Column field="category" header="Category" sortable style={{ width: '20%' }}></Column>
                        <Column field="quantity" header="Quantity" sortable style={{ width: '20%' }}></Column>
                    </DataTable>
                </div>
            </DeferredDemo>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
