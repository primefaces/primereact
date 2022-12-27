import { useEffect, useState } from 'react';
import { ProductService } from '../../../../service/ProductService';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function SingleDoc(props) {
    const [products, setProducts] = useState([]);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const code = {
        basic: `
<h6>Row Selection</h6>
<DataTable value={products} selectionMode="single" selection={selectedProduct1} onSelectionChange={e => setSelectedProduct1(e.value)} dataKey="id" responsiveLayout="scroll">
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
<h6>Cell Selection</h6>
<DataTable value={products} selectionMode="single" cellSelection selection={selectedProduct2} onSelectionChange={e => setSelectedProduct2(e.value)} dataKey="id" responsiveLayout="scroll">
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

const SingleDoc = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);

    useEffect(() => {
        

        ProductService.getProductsMini().then(data => setProducts(data));
    },[]);

    return (
        <div className="card">
            <h6>Row Selection</h6>
            <DataTable value={products} selectionMode="single" selection={selectedProduct1} onSelectionChange={e => setSelectedProduct1(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Cell Selection</h6>
            <DataTable value={products} selectionMode="single" cellSelection selection={selectedProduct2} onSelectionChange={e => setSelectedProduct2(e.value)} dataKey="id" responsiveLayout="scroll">
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

const SingleDoc = () => {

    const [products, setProducts] = useState([]);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);

    useEffect(() => {
        

        ProductService.getProductsMini().then(data => setProducts(data));
    },[]);

    return (
        <div className="card">
            <h6>Row Selection</h6>
            <DataTable value={products} selectionMode="single" selection={selectedProduct1} onSelectionChange={e => setSelectedProduct1(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Cell Selection</h6>
            <DataTable value={products} selectionMode="single" cellSelection selection={selectedProduct2} onSelectionChange={e => setSelectedProduct2(e.value)} dataKey="id" responsiveLayout="scroll">
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
                <p>In single mode, a row or cell is selected on its click event. If it is already selected then it gets unselected using meta key.</p>
            </DocSectionText>
            <div className="card">
                <h6>Row Selection</h6>
                <DataTable value={products} selectionMode="single" selection={selectedProduct1} onSelectionChange={(e) => setSelectedProduct1(e.value)} dataKey="id" responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Cell Selection</h6>
                <DataTable value={products} selectionMode="single" cellSelection selection={selectedProduct2} onSelectionChange={(e) => setSelectedProduct2(e.value)} dataKey="id" responsiveLayout="scroll">
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
