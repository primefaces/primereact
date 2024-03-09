import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { DataTable } from '@/components/lib/datatable/DataTable';
import { useEffect, useState } from 'react';
import { ProductService } from '../../../../service/ProductService';
import DeferredDemo from '@/components/demo/DeferredDemo';

export function DisabledRowSelectionDoc(props) {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const isSelectable = (data) => data.quantity >= 10;

    const isRowSelectable = (event) => (event.data ? isSelectable(event.data) : true);

    const rowClassName = (data) => (isSelectable(data) ? '' : 'p-disabled');

    const loadDemoData = () => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    };

    const code = {
        basic: `
<DataTable value={products} selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id"
        isDataSelectable={isRowSelectable} rowClassName={rowClassName} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function DisabledRowSelectionDemo() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const isSelectable = (data) => data.quantity >= 10;

    const isRowSelectable = (event) => (event.data ? isSelectable(event.data) : true);

    const rowClassName = (data) => (isSelectable(data) ? '' : 'p-disabled');

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id"
                    isDataSelectable={isRowSelectable} rowClassName={rowClassName} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { DataTable, DataTableSelectionChangeEvent, DataTableDataSelectableEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    image?: string;
    price?: number;
    category?: string;
    quantity?: number;
    inventoryStatus?: string;
    rating?: number;
}

export default function DisabledRowSelectionDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const isSelectable = (data: Product) => data.quantity >= 10;

    const isRowSelectable = (event: DataTableDataSelectableEvent) => (event.data ? isSelectable(event.data) : true);

    const rowClassName = (data: Product) => (isSelectable(data) ? '' : 'p-disabled');

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} selectionMode="single" selection={selectedProduct!}
                    onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" isDataSelectable={isRowSelectable} rowClassName={rowClassName} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
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
                    Certain rows can be excluded from selection if <i>isDataSelectable</i> returns false.
                </p>
            </DocSectionText>
            <DeferredDemo onLoad={loadDemoData}>
                <div className="card">
                    <DataTable
                        value={products}
                        selectionMode="single"
                        selection={selectedProduct}
                        onSelectionChange={(e) => setSelectedProduct(e.value)}
                        dataKey="id"
                        isDataSelectable={isRowSelectable}
                        rowClassName={rowClassName}
                        tableStyle={{ minWidth: '50rem' }}
                    >
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>
            </DeferredDemo>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
