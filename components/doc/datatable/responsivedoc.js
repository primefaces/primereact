import React, { useEffect, useState } from 'react';
import { ProductService } from '../../../service/ProductService';
import { Column } from '../../lib/column/Column';
import { DataTable } from '../../lib/datatable/DataTable';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<DataTable value={products} responsiveLayout="scroll" header={<h3 className="m-0">Scroll</h3>} className="mb-5" tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name" bodyClassName="white-space-nowrap"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>

<DataTable value={products} responsiveLayout="stack" header={<h3 className="m-0">Stack</h3>} className="mb-5">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name" bodyClassName="white-space-nowrap"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

export default function ResponsiveDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} responsiveLayout="scroll" header={<h3 className="m-0">Scroll</h3>} className="mb-5" tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name" bodyClassName="white-space-nowrap"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <DataTable value={products} responsiveLayout="stack" header={<h3 className="m-0">Stack</h3>} className="mb-5">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name" bodyClassName="white-space-nowrap"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
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

export default function ResponsiveDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <DataTable value={products} responsiveLayout="scroll" header={<h3 className="m-0">Scroll</h3>} className="mb-5" tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name" bodyClassName="white-space-nowrap"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <DataTable value={products} responsiveLayout="stack" header={<h3 className="m-0">Stack</h3>} className="mb-5">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name" bodyClassName="white-space-nowrap"></Column>
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
                    DataTable responsive layout is controlled with the <i>responsiveLayout</i> property that can either be <i>scroll</i> or <i>stack</i>. In smaller screens, <i>scroll</i> mode displays a horizontal scrollbar and <i>stack</i> mode
                    displays columns as vertically. The <i>breakpoint</i> property defines the max-width for the <i>stack</i> mode.
                </p>
            </DocSectionText>
            <div className="card">
                <DataTable value={products} responsiveLayout="scroll" header={<h3 className="m-0">Scroll</h3>} className="mb-5" tableStyle={{ minWidth: '50rem' }}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name" bodyClassName="white-space-nowrap"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <DataTable value={products} responsiveLayout="stack" header={<h3 className="m-0">Stack</h3>} className="mb-5">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name" bodyClassName="white-space-nowrap"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
