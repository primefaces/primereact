import { useEffect, useState } from 'react';
import { ProductService } from '../../../../service/ProductService';
import { Button } from '../../../lib/button/Button';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Dropdown } from '../../../lib/dropdown/Dropdown';
import { InputNumber } from '../../../lib/inputnumber/InputNumber';
import { InputText } from '../../../lib/inputtext/InputText';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function ProgrammaticDoc(props) {
    const [products, setProducts] = useState(null);
    const [editingRows, setEditingRows] = useState({});

    const statuses = [
        { label: 'In Stock', value: 'INSTOCK' },
        { label: 'Low Stock', value: 'LOWSTOCK' },
        { label: 'Out of Stock', value: 'OUTOFSTOCK' }
    ];

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getStatusLabel = (status) => {
        switch (status) {
            case 'INSTOCK':
                return 'In Stock';

            case 'LOWSTOCK':
                return 'Low Stock';

            case 'OUTOFSTOCK':
                return 'Out of Stock';

            default:
                return 'NA';
        }
    };

    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };

    const onRowEditChange = (e) => {
        setEditingRows(e.data);
    };

    const setActiveRowIndex = (index) => {
        let _editingRows = { ...editingRows, ...{ [`${products[index].id}`]: true } };

        setEditingRows(_editingRows);
    };

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                options={statuses}
                optionLabel="label"
                optionValue="value"
                onChange={(e) => options.editorCallback(e.value)}
                placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={`product-badge status-${option.value.toLowerCase()}`}>{option.label}</span>;
                }}
            />
        );
    };

    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return getStatusLabel(rowData.inventoryStatus);
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    };

    const code = {
        basic: `
<DataTable value={products} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} responsiveLayout="scroll">
    <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
    <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
    <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
</DataTable>
        `,
        javascript: `
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { ProductService } from './service/ProductService';
import './DataTableDemo.css';

export default function ProgrammaticDoc() {
    const [products, setProducts] = useState(null);
    const [editingRows, setEditingRows] = useState({});

    

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const statuses = [
        { label: 'In Stock', value: 'INSTOCK' },
        { label: 'Low Stock', value: 'LOWSTOCK' },
        { label: 'Out of Stock', value: 'OUTOFSTOCK' }
    ];


    const getStatusLabel = (status) => {
        switch (status) {
            case 'INSTOCK':
                return 'In Stock';

            case 'LOWSTOCK':
                return 'Low Stock';

            case 'OUTOFSTOCK':
                return 'Out of Stock';

            default:
                return 'NA';
        }
    };

    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };

    const onRowEditChange = (e) => {
        setEditingRows(e.data);
    };

    const setActiveRowIndex = (index) => {
        let _editingRows = { ...editingRows, ...{ [\`\${products[index].id}\`]: true } };
        setEditingRows(_editingRows);
    }

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const statusEditor = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} optionLabel="label" optionValue="value"
                onChange={(e) => options.editorCallback(e.value)} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={\`product-badge status-\${option.value.toLowerCase()}\`}>{option.label}</span>
                }} />
        );
    }

    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return getStatusLabel(rowData.inventoryStatus);
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    };

    return (
        <div className="card datatable-editing-demo">
            <div className="pt-2 pb-4">
                <Button onClick={() => setActiveRowIndex(0)} className="p-button-text" label="Activate 1st" />
                <Button onClick={() => setActiveRowIndex(2)} className="p-button-text" label="Activate 3rd" />
                <Button onClick={() => setActiveRowIndex(4)} className="p-button-text" label="Activate 5th" />
            </div>

            <div className="p-fluid">
                <DataTable value={products} editMode="row" dataKey="id" editingRows={editingRows} onRowEditChange={onRowEditChange} onRowEditComplete={onRowEditComplete} responsiveLayout="scroll">
                    <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                </DataTable>
            </div>
        </div>
    );
}
        `,
        typescript: `
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { ProductService } from './service/ProductService';
import './DataTableDemo.css';

export default function ProgrammaticDoc() {
    const [products, setProducts] = useState(null);
    const [editingRows, setEditingRows] = useState({});

    

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const statuses = [
        { label: 'In Stock', value: 'INSTOCK' },
        { label: 'Low Stock', value: 'LOWSTOCK' },
        { label: 'Out of Stock', value: 'OUTOFSTOCK' }
    ];

    const getStatusLabel = (status) => {
        switch (status) {
            case 'INSTOCK':
                return 'In Stock';

            case 'LOWSTOCK':
                return 'Low Stock';

            case 'OUTOFSTOCK':
                return 'Out of Stock';

            default:
                return 'NA';
        }
    };

    const onRowEditComplete = (e) => {
        let _products = [...products];
        let { newData, index } = e;

        _products[index] = newData;

        setProducts(_products);
    };

    const onRowEditChange = (e) => {
        setEditingRows(e.data);
    };

    const setActiveRowIndex = (index) => {
        let _editingRows = { ...editingRows, ...{ [\`\${products[index].id}\`]: true } };
        setEditingRows(_editingRows);
    }

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };

    const statusEditor = (options) => {
        return (
            <Dropdown value={options.value} options={statuses} optionLabel="label" optionValue="value"
                onChange={(e) => options.editorCallback(e.value)} placeholder="Select a Status"
                itemTemplate={(option) => {
                    return <span className={\`product-badge status-\${option.value.toLowerCase()}\`}>{option.label}</span>
                }} />
        );
    }

    const priceEditor = (options) => {
        return <InputNumber value={options.value} onValueChange={(e) => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />;
    };

    const statusBodyTemplate = (rowData) => {
        return getStatusLabel(rowData.inventoryStatus);
    };

    const priceBodyTemplate = (rowData) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(rowData.price);
    };

    return (
        <div className="card datatable-editing-demo">
            <div className="pt-2 pb-4">
                <Button onClick={() => setActiveRowIndex(0)} className="p-button-text" label="Activate 1st" />
                <Button onClick={() => setActiveRowIndex(2)} className="p-button-text" label="Activate 3rd" />
                <Button onClick={() => setActiveRowIndex(4)} className="p-button-text" label="Activate 5th" />
            </div>

            <div className="p-fluid">
                <DataTable value={products} editMode="row" dataKey="id" editingRows={editingRows} onRowEditChange={onRowEditChange} onRowEditComplete={onRowEditComplete} responsiveLayout="scroll">
                    <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                    <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                </DataTable>
            </div>
        </div>
    );
}
        `,
        extFiles: {
            'DataTableDemo.css': `
/* DataTableDemo.css */

.datatable-editing-demo .editable-cells-table td.p-cell-editing {
    padding-top: 0;
    padding-bottom: 0;
}
            `
        },
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
                <p>Programmatic demo content.</p>
            </DocSectionText>
            <div className="card">
                <div className="pt-2 pb-4">
                    <Button onClick={() => setActiveRowIndex(0)} className="p-button-text" label="Activate 1st" />
                    <Button onClick={() => setActiveRowIndex(2)} className="p-button-text" label="Activate 3rd" />
                    <Button onClick={() => setActiveRowIndex(4)} className="p-button-text" label="Activate 5th" />
                </div>

                <div className="p-fluid">
                    <DataTable value={products} editMode="row" dataKey="id" editingRows={editingRows} onRowEditChange={onRowEditChange} onRowEditComplete={onRowEditComplete} responsiveLayout="scroll">
                        <Column field="code" header="Code" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="name" header="Name" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column>
                        <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                    </DataTable>
                </div>
            </div>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
