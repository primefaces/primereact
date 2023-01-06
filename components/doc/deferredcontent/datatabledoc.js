import { useRef, useState } from 'react';
import { ProductService } from '../../../service/ProductService';
import { Column } from '../../lib/column/Column';
import { DataTable } from '../../lib/datatable/DataTable';
import { DeferredContent } from '../../lib/deferredcontent/DeferredContent';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DataTableDoc(props) {
    const toast = useRef(null);
    const [products, setProducts] = useState(null);

    const onDataLoad = () => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
        toast.current.show({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    };

    const code = {
        basic: `
<Toast ref={toast} />
<DeferredContent onLoad={onDataLoad}>
    <DataTable value={products}>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
    </DataTable>
</DeferredContent>
        `,
        javascript: `
import React, { useState, useRef } from 'react';
import { DeferredContent } from 'primereact/deferredcontent';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { ProductService } from './service/ProductService';

export default function DataTableDoc() {
    const toast = useRef(null);
    const [products, setProducts] = useState(null);

    const onDataLoad = () => {
        ProductService.getProductsSmall().then(data => setProducts(data));
        toast.current.show({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    }

    return (
        <div className="card flex flex-column">
            <Toast ref={toast} />
            <div className="flex flex-column align-items-center m-3 lg:p-8 text-xl font-semibold" style={{ minHeight: '80rem' }}>
                    Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
                    <i className="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite mt-5" style={{ fontSize: '3rem' }}></i>
                </div>
            <DeferredContent onLoad={onDataLoad}>
                <DataTable value={products}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </DeferredContent>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useRef } from 'react';
import { DeferredContent } from 'primereact/deferredcontent';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { ProductService } from './service/ProductService';

export default function DataTableDoc() {
    const toast = useRef<Toast>(null);
    const [products, setProducts] = useState(null);

    const onDataLoad = () => {
        ProductService.getProductsSmall().then(data => setProducts(data));
        toast.current.show({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    }

    return (
        <div className="card flex flex-column">
            <Toast ref={toast} />
            <div className="flex flex-column align-items-center m-3 lg:p-8 text-xl font-semibold" style={{ minHeight: '80rem' }}>
                    Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
                    <i className="pi pi-angle-down fadeout animation-duration-1000 animation-iteration-infinite mt-5" style={{ fontSize: '3rem' }}></i>
                </div>
            <DeferredContent onLoad={onDataLoad}>
                <DataTable value={products}>
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </DeferredContent>
        </div>
    )
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
                <p>DeferredContent is used as a wrapper element of its content.</p>
            </DocSectionText>
            <div className="card flex flex-column">
                <Toast ref={toast} />
                <DeferredContent onLoad={onDataLoad}>
                    <DataTable value={products}>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </DeferredContent>
            </div>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
