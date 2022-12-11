import React, { useEffect, useState } from 'react';
import { ProductService } from '../../../service/ProductService';
import { Column } from '../../lib/column/Column';
import { DataTable } from '../../lib/datatable/DataTable';
import { classNames } from '../../lib/utils/Utils';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';
import styles from './DataTable.module.css';

export function StyleDoc(props) {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const rowClass = (data) => {
        if (!styles) {
            return;
        }

        return {
            'row-accessories': data.category === 'Accessories'
        };
    };

    const stockBodyTemplate = (rowData) => {
        const stockClassName = classNames({
            'outofstock x': rowData.quantity === 0,
            'lowstock x': rowData.quantity > 0 && rowData.quantity < 10,
            'instock x': rowData.quantity > 10
        });

        return <div className={stockClassName}>{rowData.quantity}</div>;
    };

    const code = {
        basic: `
<DataTable value={products} className="datatable-style-demo" rowClassName={rowClass} responsiveLayout="scroll">
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
import { ProductService } from '../service/ProductService';
import './DataTableDemo.css';

const StyleDoc = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const rowClass = (data) => {
        return {
            'row-accessories': data.category === 'Accessories'
        }
    }

    const stockBodyTemplate = (rowData) => {
        const stockClassName = classNames({
            'outofstock': rowData.quantity === 0,
            'lowstock': rowData.quantity > 0 && rowData.quantity < 10,
            'instock': rowData.quantity > 10
        });

        return (
            <div className={stockClassName}>
                {rowData.quantity}
            </div>
        );
    }

    return (
        <div className="datatable-style-demo">
            <div className="card">
                <DataTable value={products} className="datatable-style-demo" rowClassName={rowClass} responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity" body={stockBodyTemplate}></Column>
                </DataTable>
            </div>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import './DataTableDemo.css';

const StyleDoc = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const rowClass = (data) => {
        return {
            'row-accessories': data.category === 'Accessories'
        }
    }

    const stockBodyTemplate = (rowData) => {
        const stockClassName = classNames({
            'outofstock': rowData.quantity === 0,
            'lowstock': rowData.quantity > 0 && rowData.quantity < 10,
            'instock': rowData.quantity > 10
        });

        return (
            <div className={stockClassName}>
                {rowData.quantity}
            </div>
        );
    }

    return (
        <div className="datatable-style-demo">
            <div className="card">
                <DataTable value={products} className="datatable-style-demo" rowClassName={rowClass} responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity" body={stockBodyTemplate}></Column>
                </DataTable>
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Particular rows and cells can be styled based on data.</p>
            </DocSectionText>
            <div className="card">
                <DataTable value={products} className="datatable-style-demo" rowClassName={rowClass} responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity" body={stockBodyTemplate}></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
