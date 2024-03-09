import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { DataTable } from '@/components/lib/datatable/DataTable';
import { DeferredContent } from '@/components/lib/deferredcontent/DeferredContent';
import { Toast } from '@/components/lib/toast/Toast';
import { useRef, useState } from 'react';
import { ProductService } from '../../../service/ProductService';

export function DataTableDoc(props) {
    const toast = useRef(null);
    const [products, setProducts] = useState(null);

    const onDataLoad = () => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
        toast.current.show({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    };

    const code = {
        basic: `
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

export default function DataTableDemo() {
    const toast = useRef(null);
    const [products, setProducts] = useState(null);

    const onDataLoad = () => {
        ProductService.getProductsSmall().then(data => setProducts(data));
        toast.current.show({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    }

    return (
        <div className="card">
            <p style={{marginBottom: '70rem', textAlign: 'center'}}>Scroll down to lazy load a DataTable.</p>
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

export default function DataTableDemo() {
    const toast = useRef<Toast>(null);
    const [products, setProducts] = useState(null);

    const onDataLoad = () => {
        ProductService.getProductsSmall().then(data => setProducts(data));
        toast.current.show({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    }

    return (
        <div className="card">
            <p style={{marginBottom: '70rem', textAlign: 'center'}}>Scroll down to lazy load a DataTable.</p>
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
                <p>A practical example that loads only when table becomes visible in viewport.</p>
            </DocSectionText>
            <div className="card">
                <p style={{ marginBottom: '70rem', textAlign: 'center' }}>Scroll down to lazy load a DataTable.</p>
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
