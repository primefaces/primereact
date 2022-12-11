import React, { useEffect, useState } from 'react';
import { ProductService } from '../../../../service/ProductService';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function FitModeDoc(props) {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<DataTable value={products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
    <Column field="code" header="Code" style={{width:'20%'}}/>
    <Column field="name" header="Name" style={{width:'40%'}}/>
    <Column field="category" header="Category" style={{width:'20%'}}/>
    <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';

const FitModeDoc = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsMini().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <DataTable value={products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                <Column field="code" header="Code" style={{width:'20%'}}/>
                <Column field="name" header="Name" style={{width:'40%'}}/>
                <Column field="category" header="Category" style={{width:'20%'}}/>
                <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';

const FitModeDoc = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProductsMini().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="card">
            <DataTable value={products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                <Column field="code" header="Code" style={{width:'20%'}}/>
                <Column field="name" header="Name" style={{width:'40%'}}/>
                <Column field="category" header="Category" style={{width:'20%'}}/>
                <Column field="quantity" header="Quantity" style={{width:'20%'}}/>
            </DataTable>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Fit Mode demo content.</p>
            </DocSectionText>
            <div className="card">
                <DataTable value={products} resizableColumns columnResizeMode="fit" showGridlines responsiveLayout="scroll">
                    <Column field="code" header="Code" style={{ width: '20%' }} />
                    <Column field="name" header="Name" style={{ width: '40%' }} />
                    <Column field="category" header="Category" style={{ width: '20%' }} />
                    <Column field="quantity" header="Quantity" style={{ width: '20%' }} />
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
