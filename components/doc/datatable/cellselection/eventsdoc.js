import { useEffect, useRef, useState } from 'react';
import { ProductService } from '../../../../service/ProductService';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Toast } from '../../../lib/toast/Toast';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function CellSelectEventsDoc(props) {
    const [products, setProducts] = useState([]);
    const [selectedCell, setSelectedCell] = useState(null);
    const toast = useRef(null);

    const onCellSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Cell Selected', detail: `Name: ${event.value}`, life: 3000 });
    };

    const onCellUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Cell Unselected', detail: `Name: ${event.value}`, life: 3000 });
    };

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const code = {
        basic: `
<Toast ref={toast} />

<DataTable value={products} cellSelection selectionMode="single" selection={selectedCell}
        onSelectionChange={(e) => setSelectedCell(e.value)} metaKeySelection={false}
        onCellSelect={onCellSelect} onCellUnselect={onCellUnselect} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useRef, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast'
import { ProductService } from './service/ProductService';

export default function CellSelectEventsDemo() {
    const [products, setProducts] = useState([]);
    const [selectedCell, setSelectedCell] = useState(null);
    const toast = useRef(null);

    const onCellSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Cell Selected', detail: \`Name: \${event.value}\`, life: 3000 });
    };

    const onCellUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Cell Unselected', detail: \`Name: \${event.value}\`, life: 3000 });
    };

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <Toast ref={toast} />
            <DataTable value={products} cellSelection selectionMode="single" selection={selectedCell}
                    onSelectionChange={(e) => setSelectedCell(e.value)} metaKeySelection={false}
                    onCellSelect={onCellSelect} onCellUnselect={onCellUnselect} tableStyle={{ minWidth: '50rem' }}>
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
import React, { useState, useRef, useEffect } from 'react';
import { DataTable, DataTableSelectionChangeEvent, DataTableCellSelection, DataTableSelectEvent, DataTableUnselectEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast'
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

export default function CellSelectEventsDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCell, setSelectedCell] = useState<DataTableCellSelection<Product[]> | null>(null);
    const toast = useRef<Toast>(null);

    const onCellSelect = (event: DataTableCellClickEvent<Product[]>) => {
        toast.current?.show({ severity: 'info', summary: 'Cell Selected', detail: \`Name: \${event.value}\`, life: 3000 });
    };

    const onCellUnselect = (event: DataTableCellClickEvent<Product[]>) => {
        toast.current?.show({ severity: 'warn', summary: 'Cell Unselected', detail: \`Name: \${event.value}\`, life: 3000 });
    };

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <Toast ref={toast} />
            <DataTable value={products} cellSelection selectionMode="single" selection={selectedCell!} metaKeySelection={false}
                    onSelectionChange={(e) => {
                        if (e.type === 'cell') setSelectedCell(e.value);
                    }}
                    onCellSelect={onCellSelect} onCellUnselect={onCellUnselect} tableStyle={{ minWidth: '50rem' }}>
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
                <p>
                    DataTable provides <i>onCellSelect</i> and <i>onCellUnselect</i> events to listen selection events.
                </p>
            </DocSectionText>
            <Toast ref={toast} />
            <div className="card">
                <DataTable
                    value={products}
                    selectionMode="single"
                    cellSelection
                    selection={selectedCell}
                    onSelectionChange={(e) => {
                        setSelectedCell(e.value);
                    }}
                    metaKeySelection={false}
                    onCellSelect={onCellSelect}
                    onCellUnselect={onCellUnselect}
                    tableStyle={{ minWidth: '50rem' }}
                >
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
