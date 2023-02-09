import { useEffect, useState } from 'react';
import { ProductService } from '../../../../service/ProductService';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function MultipleColumnsDoc(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

    const code = {
        basic: `
<DataTable value={products} sortMode="multiple" responsiveLayout="scroll">
    <Column field="code" header="Code" sortable></Column>
    <Column field="name" header="Name" sortable></Column>
    <Column field="category" header="Category" sortable></Column>
    <Column field="quantity" header="Quantity" sortable></Column>
    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';

const MultipleColumnsDoc = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        ProductService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div className="card">
            <p>Use metakey to add a column to the sort selection.</p>
            <DataTable value={products} sortMode="multiple" responsiveLayout="scroll">
                <Column field="code" header="Code" sortable></Column>
                <Column field="name" header="Name" sortable></Column>
                <Column field="category" header="Category" sortable></Column>
                <Column field="quantity" header="Quantity" sortable></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
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

const MultipleColumnsDoc = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        ProductService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div className="card">
            <p>Use metakey to add a column to the sort selection.</p>
            <DataTable value={products} sortMode="multiple" responsiveLayout="scroll">
                <Column field="code" header="Code" sortable></Column>
                <Column field="name" header="Name" sortable></Column>
                <Column field="category" header="Category" sortable></Column>
                <Column field="quantity" header="Quantity" sortable></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
            </DataTable>
        </div>
    );
}
        `,
        data: `
/* ProductService */
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
                <p>Enabling sortable property on a column is enough to make a column sortable. Multiple column sorting is enabled using sortMode property and used with metaKey.</p>
            </DocSectionText>
            <div className="card">
                <DataTable value={products} responsiveLayout="scroll" sortMode="multiple">
                    <Column field="code" header="Code" sortable></Column>
                    <Column field="name" header="Name" sortable></Column>
                    <Column field="category" header="Category" sortable></Column>
                    <Column field="quantity" header="Quantity" sortable></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
