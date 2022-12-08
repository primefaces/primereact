import { useState, useEffect } from 'react';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Column } from '../../../lib/column/Column';
import { ProductService } from '../../../../service/ProductService';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function RadioButtonDoc(props) {
    const [products, setProducts] = useState([]);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);

    useEffect(() => {
        const productService = new ProductService();

        productService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const code = {
        basic: `
<h6>Row and RadioButton Selection</h6>
<DataTable value={products} selection={selectedProduct1} onSelectionChange={e => setSelectedProduct1(e.value)} dataKey="id" responsiveLayout="scroll">
    <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>

<h6>RadioButton-Only Selection</h6>
<DataTable value={products} selectionMode="radiobutton" selection={selectedProduct2} onSelectionChange={e => setSelectedProduct2(e.value)} dataKey="id" responsiveLayout="scroll">
    <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,
        javascript: `
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import './DataTableDemo.css';

const RadioButtonDoc = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);

    useEffect(() => {
        const productService = new ProductService();

        productService.getProductsSmall().then(data => setProducts(data));
    },[]);

    return (
        <div className="card datatable-selection-demo">
            <h6>Row and RadioButton Selection</h6>
            <DataTable value={products} selection={selectedProduct1} onSelectionChange={e => setSelectedProduct1(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>RadioButton-Only Selection</h6>
            <DataTable value={products} selectionMode="radiobutton" selection={selectedProduct2} onSelectionChange={e => setSelectedProduct2(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
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
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from '../service/ProductService';
import './DataTableDemo.css';

const RadioButtonDoc = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);

    useEffect(() => {
        const productService = new ProductService();

        productService.getProductsSmall().then(data => setProducts(data));
    },[]);

    return (
        <div className="card datatable-selection-demo">
            <h6>Row and RadioButton Selection</h6>
            <DataTable value={products} selection={selectedProduct1} onSelectionChange={e => setSelectedProduct1(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>RadioButton-Only Selection</h6>
            <DataTable value={products} selectionMode="radiobutton" selection={selectedProduct2} onSelectionChange={e => setSelectedProduct2(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column selectionMode="single" headerStyle={{width: '3em'}}></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Single selection can also be handled using radio buttons and rows by enabling the selectionMode property of column as "single".</p>
            </DocSectionText>
            <div className="card">
                <h6>Row and RadioButton Selection</h6>
                <DataTable value={products} selection={selectedProduct1} onSelectionChange={(e) => setSelectedProduct1(e.value)} dataKey="id" responsiveLayout="scroll" selectionAriaLabel="name">
                    <Column selectionMode="single" headerStyle={{ width: '3em' }}></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>RadioButton-Only Selection</h6>
                <DataTable value={products} selectionMode="radiobutton" selection={selectedProduct2} onSelectionChange={(e) => setSelectedProduct2(e.value)} dataKey="id" responsiveLayout="scroll" selectionAriaLabel="name">
                    <Column selectionMode="single" headerStyle={{ width: '3em' }}></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
