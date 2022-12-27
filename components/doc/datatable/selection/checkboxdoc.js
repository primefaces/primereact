import { useEffect, useState } from 'react';
import { ProductService } from '../../../../service/ProductService';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function CheckboxDoc(props) {
    const [products, setProducts] = useState([]);
    const [selectedProducts1, setSelectedProducts1] = useState(null);
    const [selectedProducts2, setSelectedProducts2] = useState(null);
    const [selectedProducts3, setSelectedProducts3] = useState(null);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const code = {
        basic: `

<h6>Row and Checkbox Selection</h6>
<DataTable value={products} selection={selectedProducts1} onSelectionChange={e => setSelectedProducts1(e.value)} dataKey="id" responsiveLayout="scroll">
    <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>

<h6>Checkbox-Only Selection</h6>
<DataTable value={products} selectionMode="checkbox" selection={selectedProducts2} onSelectionChange={e => setSelectedProducts2(e.value)} dataKey="id" responsiveLayout="scroll">
    <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>

<h6>Page-Only Selection</h6>
<DataTable value={products} selection={selectedProducts3} onSelectionChange={e => setSelectedProducts3(e.value)} dataKey="id" responsiveLayout="scroll"
    selectionPageOnly paginator rows={5}>
    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
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

const CheckboxDoc = () => {

    const [products, setProducts] = useState([]);
    const [selectedProducts1, setSelectedProducts1] = useState(null);
    const [selectedProducts2, setSelectedProducts2] = useState(null);
    const [selectedProducts3, setSelectedProducts3] = useState(null);

    useEffect(() => {
        

        ProductService.getProductsMini().then(data => setProducts(data));
    },[]);

    return (
        <div className="card">
            <h6>Row and Checkbox Selection</h6>
            <DataTable value={products} selection={selectedProducts1} onSelectionChange={e => setSelectedProducts1(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Checkbox-Only Selection</h6>
            <DataTable value={products} selectionMode="checkbox" selection={selectedProducts2} onSelectionChange={e => setSelectedProducts2(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Page-Only Selection</h6>
            <DataTable value={products} selection={selectedProducts3} onSelectionChange={e => setSelectedProducts3(e.value)} dataKey="id" responsiveLayout="scroll"
                selectionPageOnly paginator rows={5}>
                <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
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

const CheckboxDoc = () => {

    const [products, setProducts] = useState([]);
    const [selectedProducts1, setSelectedProducts1] = useState(null);
    const [selectedProducts2, setSelectedProducts2] = useState(null);
    const [selectedProducts3, setSelectedProducts3] = useState(null);

    useEffect(() => {
        

        ProductService.getProductsMini().then(data => setProducts(data));
    },[]);

    return (
        <div className="card">
            <h6>Row and Checkbox Selection</h6>
            <DataTable value={products} selection={selectedProducts1} onSelectionChange={e => setSelectedProducts1(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Checkbox-Only Selection</h6>
            <DataTable value={products} selectionMode="checkbox" selection={selectedProducts2} onSelectionChange={e => setSelectedProducts2(e.value)} dataKey="id" responsiveLayout="scroll">
                <Column selectionMode="multiple" headerStyle={{width: '3em'}}></Column>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Page-Only Selection</h6>
            <DataTable value={products} selection={selectedProducts3} onSelectionChange={e => setSelectedProducts3(e.value)} dataKey="id" responsiveLayout="scroll"
                selectionPageOnly paginator rows={5}>
                <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
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
                <p>Checkbox demo content.</p>
            </DocSectionText>
            <div className="card">
                <h6>Row and Checkbox Selection</h6>
                <DataTable value={products} selection={selectedProducts1} onSelectionChange={(e) => setSelectedProducts1(e.value)} dataKey="id" responsiveLayout="scroll">
                    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Checkbox-Only Selection</h6>
                <DataTable value={products} selectionMode="checkbox" selection={selectedProducts2} onSelectionChange={(e) => setSelectedProducts2(e.value)} dataKey="id" responsiveLayout="scroll">
                    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Page-Only Selection</h6>
                <DataTable value={products} selection={selectedProducts3} onSelectionChange={(e) => setSelectedProducts3(e.value)} dataKey="id" responsiveLayout="scroll" selectionPageOnly paginator rows={5}>
                    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
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
