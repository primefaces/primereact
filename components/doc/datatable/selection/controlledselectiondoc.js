import { useEffect, useState } from 'react';
import { ProductService } from '../../../../service/ProductService';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function ControlledSelectionDoc(props) {
    const [products, setProducts] = useState([]);
    const [selectedProducts1, setSelectedProducts1] = useState(null);
    const [selectedProducts2, setSelectedProducts2] = useState(null);
    const [selectedProducts3, setSelectedProducts3] = useState(null);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    const isSelectable = (value, field) => {
        let isSelectable = true;

        switch (field) {
            case 'quantity':
                isSelectable = value > 10;
                break;
            case 'name':
            case 'category':
                isSelectable = value.startsWith('B') || value.startsWith('A');
                break;

            default:
                break;
        }

        return isSelectable;
    };

    const isRowSelectable = (event) => {
        const data = event.data;

        return isSelectable(data.quantity, 'quantity');
    };

    const isCellSelectable = (event) => {
        const data = event.data;

        return isSelectable(data.value, data.field);
    };

    const rowClassName = (data) => {
        return isSelectable(data.quantity, 'quantity') ? '' : 'p-disabled';
    };

    const cellClassName = (value, options) => {
        const { field } = options.column.props;

        return isSelectable(value, field) ? '' : 'p-disabled';
    };

    const code = {
        basic: `

<h6>Row and Checkbox Selection</h6>
<DataTable value={products} selectionMode="multiple" dragSelection selection={selectedProducts1} onSelectionChange={e => setSelectedProducts1(e.value)} dataKey="id" responsiveLayout="scroll"
isDataSelectable={isRowSelectable} rowClassName={rowClassName}>
<Column field="code" header="Code"></Column>
<Column field="name" header="Name"></Column>
<Column field="category" header="Category"></Column>
<Column field="quantity" header="Quantity"></Column>
</DataTable>

<h6>Cell Selection</h6>
<DataTable value={products} selectionMode="multiple" dragSelection cellSelection selection={selectedProducts2} onSelectionChange={e => setSelectedProducts2(e.value)} dataKey="id" responsiveLayout="scroll"
isDataSelectable={isCellSelectable} cellClassName={cellClassName}>
<Column field="code" header="Code"></Column>
<Column field="name" header="Name"></Column>
<Column field="category" header="Category"></Column>
<Column field="quantity" header="Quantity"></Column>
</DataTable>

<h6>Checkbox Selection</h6>
<DataTable value={products} selection={selectedProducts3} onSelectionChange={e => setSelectedProducts3(e.value)} dataKey="id" responsiveLayout="scroll"
isDataSelectable={isRowSelectable} rowClassName={rowClassName}>
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

const ControlledSelectionDoc = () => {

    const [products, setProducts] = useState([]);
    const [selectedProducts1, setSelectedProducts1] = useState(null);
    const [selectedProducts2, setSelectedProducts2] = useState(null);
    const [selectedProducts3, setSelectedProducts3] = useState(null);

    useEffect(() => {
        

        ProductService.getProductsMini().then(data => setProducts(data));
    },[]);

        const isSelectable = (value, field) => {
        let isSelectable = true;
        switch (field) {
            case 'quantity':
                isSelectable = value > 10;
                break;
            case 'name':
            case 'category':
                isSelectable = value.startsWith('B') || value.startsWith('A');
                break;

            default:
                break;
        }
        return isSelectable;
    }

    const isRowSelectable = (event) => {
        const data = event.data;
        return isSelectable(data.quantity, 'quantity');
    }

    const isCellSelectable = (event) => {
        const data = event.data;
        return isSelectable(data.value, data.field);
    }

    const rowClassName = (data) => {
        return isSelectable(data.quantity, 'quantity') ? '' : 'p-disabled';
    }

    const cellClassName = (value, options) => {
        const { field } = options.column.props;
        return isSelectable(value, field) ? '' : 'p-disabled';
    }

    return (
        <div className="card">
            <DataTable value={products} selectionMode="multiple" dragSelection selection={selectedProducts1} onSelectionChange={e => setSelectedProducts1(e.value)} dataKey="id" responsiveLayout="scroll"
                isDataSelectable={isRowSelectable} rowClassName={rowClassName}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Cell Selection</h6>
            <DataTable value={products} selectionMode="multiple" dragSelection cellSelection selection={selectedProducts2} onSelectionChange={e => setSelectedProducts2(e.value)} dataKey="id" responsiveLayout="scroll"
                isDataSelectable={isCellSelectable} cellClassName={cellClassName}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Checkbox Selection</h6>
            <DataTable value={products} selection={selectedProducts3} onSelectionChange={e => setSelectedProducts3(e.value)} dataKey="id" responsiveLayout="scroll"
                isDataSelectable={isRowSelectable} rowClassName={rowClassName}>
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

const ControlledSelectionDoc = () => {

    const [products, setProducts] = useState([]);
    const [selectedProducts1, setSelectedProducts1] = useState(null);
    const [selectedProducts2, setSelectedProducts2] = useState(null);
    const [selectedProducts3, setSelectedProducts3] = useState(null);

    useEffect(() => {
        

        ProductService.getProductsMini().then(data => setProducts(data));
    },[]);

        const isSelectable = (value, field) => {
        let isSelectable = true;
        switch (field) {
            case 'quantity':
                isSelectable = value > 10;
                break;
            case 'name':
            case 'category':
                isSelectable = value.startsWith('B') || value.startsWith('A');
                break;

            default:
                break;
        }
        return isSelectable;
    }

    const isRowSelectable = (event) => {
        const data = event.data;
        return isSelectable(data.quantity, 'quantity');
    }

    const isCellSelectable = (event) => {
        const data = event.data;
        return isSelectable(data.value, data.field);
    }

    const rowClassName = (data) => {
        return isSelectable(data.quantity, 'quantity') ? '' : 'p-disabled';
    }

    const cellClassName = (value, options) => {
        const { field } = options.column.props;
        return isSelectable(value, field) ? '' : 'p-disabled';
    }

    return (
        <div className="card">
            <DataTable value={products} selectionMode="multiple" dragSelection selection={selectedProducts1} onSelectionChange={e => setSelectedProducts1(e.value)} dataKey="id" responsiveLayout="scroll"
                isDataSelectable={isRowSelectable} rowClassName={rowClassName}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Cell Selection</h6>
            <DataTable value={products} selectionMode="multiple" dragSelection cellSelection selection={selectedProducts2} onSelectionChange={e => setSelectedProducts2(e.value)} dataKey="id" responsiveLayout="scroll"
                isDataSelectable={isCellSelectable} cellClassName={cellClassName}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Checkbox Selection</h6>
            <DataTable value={products} selection={selectedProducts3} onSelectionChange={e => setSelectedProducts3(e.value)} dataKey="id" responsiveLayout="scroll"
                isDataSelectable={isRowSelectable} rowClassName={rowClassName}>
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
                <p>It can be checked whether a row or cell can be selected or not according to the specified conditions.</p>
            </DocSectionText>
            <div className="card">
                <h6>Row Selection</h6>
                <DataTable
                    value={products}
                    selectionMode="multiple"
                    dragSelection
                    selection={selectedProducts1}
                    onSelectionChange={(e) => setSelectedProducts1(e.value)}
                    dataKey="id"
                    responsiveLayout="scroll"
                    isDataSelectable={isRowSelectable}
                    rowClassName={rowClassName}
                >
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Cell Selection</h6>
                <DataTable
                    value={products}
                    selectionMode="multiple"
                    dragSelection
                    cellSelection
                    selection={selectedProducts2}
                    onSelectionChange={(e) => setSelectedProducts2(e.value)}
                    dataKey="id"
                    responsiveLayout="scroll"
                    isDataSelectable={isCellSelectable}
                    cellClassName={cellClassName}
                >
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Checkbox Selection</h6>
                <DataTable value={products} selection={selectedProducts3} onSelectionChange={(e) => setSelectedProducts3(e.value)} dataKey="id" responsiveLayout="scroll" isDataSelectable={isRowSelectable} rowClassName={rowClassName}>
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
