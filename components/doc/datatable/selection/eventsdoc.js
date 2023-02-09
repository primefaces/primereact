import { useEffect, useRef, useState } from 'react';
import { ProductService } from '../../../../service/ProductService';
import { Column } from '../../../lib/column/Column';
import { DataTable } from '../../../lib/datatable/DataTable';
import { Toast } from '../../../lib/toast/Toast';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function EventsDoc(props) {
    const [products, setProducts] = useState([]);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);
    const toast = useRef(null);

    const onRowSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Product Selected', detail: `Name: ${event.data.name}`, life: 3000 });
    };

    const onRowUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Product Unselected', detail: `Name: ${event.data.name}`, life: 3000 });
    };

    const onCellSelect = (event) => {
        toast.current.show({ severity: 'info', summary: `Item Selected In Product`, detail: `${toCapitalize(event.field)}: ${event.value}`, life: 3000 });
    };

    const onCellUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: `Item Unselected In Product`, detail: `${toCapitalize(event.field)}: ${event.value}`, life: 3000 });
    };

    const toCapitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

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
import { ProductService } from './service/ProductService';
import { Toast } from 'primereact/toast';
import './DataTableDemo.css';

export default function EventsDoc() {

    const [products, setProducts] = useState([]);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);

    useEffect(() => {
        

        ProductService.getProductsMini().then(data => setProducts(data));
    },[]);

    return (
        <div className="card datatable-selection-demo">
            <Toast ref={toast} />
            <h6>Row Selection</h6>
            <p>onRowSelect and onRowUnselects are available as selection events.</p>
            <DataTable value={products} selectionMode="single" selection={selectedProduct1} onSelectionChange={e => setSelectedProduct1(e.value)} dataKey="id" responsiveLayout="scroll"
                onRowSelect={onRowSelect} onRowUnselect={onRowUnselect}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Cell Selection</h6>
            <p>onCellSelect and onCellUnselects are available as selection events.</p>
            <DataTable value={products} selectionMode="single" cellSelection selection={selectedProduct2} onSelectionChange={e => setSelectedProduct2(e.value)} dataKey="id" responsiveLayout="scroll"
                onCellSelect={onCellSelect} onCellUnselect={onCellUnselect}>
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
import { ProductService } from './service/ProductService';
import { Toast } from 'primereact/toast';
import './DataTableDemo.css';

export default function EventsDoc() {

    const [products, setProducts] = useState([]);
    const [selectedProduct1, setSelectedProduct1] = useState(null);
    const [selectedProduct2, setSelectedProduct2] = useState(null);
    const toast = useRef(null);

    const onRowSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Product Selected', detail: \`Name: \${event.data.name}\`, life: 3000 });
    }

    const onRowUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Product Unselected', detail: \`Name: \${event.data.name}\`, life: 3000 });
    }

    const onCellSelect = (event) => {
        toast.current.show({ severity: 'info', summary: \`Item Selected In Product\`, detail: \`\${toCapitalize(event.field)}: \${event.value}\`, life: 3000 });
    }

    const onCellUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: \`Item Unselected In Product\`, detail: \`\${toCapitalize(event.field)}: \${event.value}\`, life: 3000 });
    }

    const toCapitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    useEffect(() => {
        

        ProductService.getProductsMini().then(data => setProducts(data));
    },[]);

    return (
        <div className="card datatable-selection-demo">
            <Toast ref={toast} />
            <h6>Row Selection</h6>
            <p>onRowSelect and onRowUnselects are available as selection events.</p>
            <DataTable value={products} selectionMode="single" selection={selectedProduct1} onSelectionChange={e => setSelectedProduct1(e.value)} dataKey="id" responsiveLayout="scroll"
                onRowSelect={onRowSelect} onRowUnselect={onRowUnselect}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>

            <h6>Cell Selection</h6>
            <p>onCellSelect and onCellUnselects are available as selection events.</p>
            <DataTable value={products} selectionMode="single" cellSelection selection={selectedProduct2} onSelectionChange={e => setSelectedProduct2(e.value)} dataKey="id" responsiveLayout="scroll"
                onCellSelect={onCellSelect} onCellUnselect={onCellUnselect}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        `,
        extFiles: {
            'DataTableDemo.css': `
/* DataTableDemo.css */

.datatable-selection-demo .card h6 {
    margin-top: 2rem;
}
.datatable-selection-demo .card h6:first-of-type {
    margin-top: 0;
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
                <p>Events demo content.</p>
            </DocSectionText>
            <div className="card datatable-selection-demo">
                <Toast ref={toast} />
                <h6>Row Selection</h6>
                <p>onRowSelect and onRowUnselects are available as selection events.</p>
                <DataTable value={products} selectionMode="single" selection={selectedProduct1} onSelectionChange={(e) => setSelectedProduct1(e.value)} dataKey="id" responsiveLayout="scroll" onRowSelect={onRowSelect} onRowUnselect={onRowUnselect}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>

                <h6>Cell Selection</h6>
                <p>onCellSelect and onCellUnselects are available as selection events.</p>
                <DataTable
                    value={products}
                    selectionMode="single"
                    cellSelection
                    selection={selectedProduct2}
                    onSelectionChange={(e) => setSelectedProduct2(e.value)}
                    dataKey="id"
                    responsiveLayout="scroll"
                    onCellSelect={onCellSelect}
                    onCellUnselect={onCellUnselect}
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
