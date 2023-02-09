import React, { useEffect, useState } from 'react';
import { ProductService } from '../../../service/ProductService';
import { Column } from '../../lib/column/Column';
import { DataTable } from '../../lib/datatable/DataTable';
import { classNames } from '../../lib/utils/Utils';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function StyledDataTableDoc(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const rowClass = (data) => {
        return {
            'bg-black-alpha-10': data.category === 'Accessories'
        };
    };

    const stockBodyTemplate = (rowData) => {
        const stockClassName = classNames({
            'text-red-400 line-through font-bold': rowData.quantity === 0,
            'text-yellow-400 font-bold': rowData.quantity > 0 && rowData.quantity < 10,
            'text-green-400 font-bold': rowData.quantity > 10
        });

        return <div className={stockClassName}>{rowData.quantity}</div>;
    };

    const code = {
        basic: `
<DataTable value={products} rowClassName={rowClass} responsiveLayout="scroll">
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity" body={stockBodyTemplate}></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
import './DataTableDemo.css';
const StyledDataTableDoc = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        ProductService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const rowClass = (data) => {
        return {
            'bg-black-alpha-10': data.category === 'Accessories'
        }
    }
    const stockBodyTemplate = (rowData) => {
        const stockClassName = classNames({
            'text-red-400 line-through font-bold': rowData.quantity === 0,
            'text-yellow-400 font-bold': rowData.quantity > 0 && rowData.quantity < 10,
            'text-green-400 font-bold': rowData.quantity > 10
        });
        return (
            <div className={stockClassName}>
                {rowData.quantity}
            </div>
        );
    }
    return (
        <div className="card">
            <DataTable value={products} rowClassName={rowClass} responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity" body={stockBodyTemplate}></Column>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
import './DataTableDemo.css';
const StyledDataTableDoc = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        ProductService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const rowClass = (data) => {
        return {
            'bg-black-alpha-10': data.category === 'Accessories'
        }
    }
    const stockBodyTemplate = (rowData) => {
        const stockClassName = classNames({
            'text-red-400 line-through font-bold': rowData.quantity === 0,
            'text-yellow-400 font-bold': rowData.quantity > 0 && rowData.quantity < 10,
            'text-green-400 font-bold': rowData.quantity > 10
        });
        return (
            <div className={stockClassName}>
                {rowData.quantity}
            </div>
        );
    }
    return (
        <div className="card">
            <DataTable value={products} rowClassName={rowClass} responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity" body={stockBodyTemplate}></Column>
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
                <p>Particular rows and cells can be styled based on data.</p>
            </DocSectionText>
            <div className="card">
                <DataTable value={products} rowClassName={rowClass} responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity" body={stockBodyTemplate}></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
