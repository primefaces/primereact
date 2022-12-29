import { useRef, useState } from 'react';
import { ProductService } from '../../../service/ProductService';
import { Column } from '../../lib/column/Column';
import { DataTable } from '../../lib/datatable/DataTable';
import { DeferredContent } from '../../lib/deferredcontent/DeferredContent';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DeferredContentDoc(props) {
    const toast = useRef(null);
    const [products, setProducts] = useState(null);

    const onImageLoad = () => {
        toast.current.show({ severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable' });
    };

    const onDataLoad = () => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
        toast.current.show({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    };

    const code = {
        basic: `
<Toast ref={toast} />
<div style={{ height: '800px' }}>Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.</div>

<DeferredContent onLoad={onImageLoad}>
    <img src="images/galleria/galleria1.jpg" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="Prime" />
</DeferredContent>

<div style={{ height: '500px' }}></div>

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

export default function DeferredContentDoc() {
    const toast = useRef(null);
    const [products, setProducts] = useState(null);
    

    const onImageLoad = () => {
        toast.current.show({ severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable' });
    }

    const onDataLoad = () => {
        ProductService.getProductsSmall().then(data => setProducts(data));
        toast.current.show({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    }

    return (
        <Toast ref={toast} />
        <div style={{ height: '800px' }}>Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.</div>

        <DeferredContent onLoad={onImageLoad}>
            <img src="images/galleria/galleria1.jpg" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="Prime" />
        </DeferredContent>

        <div style={{ height: '500px' }}></div>

        <DeferredContent onLoad={onDataLoad}>
            <DataTable value={products}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </DeferredContent>
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

export default function DeferredContentDoc() {
    const toast = useRef<Toast>(null);
    const [products, setProducts] = useState(null);
    

    const onImageLoad = () => {
        toast.current.show({ severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable' });
    }

    const onDataLoad = () => {
        ProductService.getProductsSmall().then(data => setProducts(data));
        toast.current.show({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    }

    return (
        <Toast ref={toast} />
        <div style={{ height: '800px' }}>Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.</div>

        <DeferredContent onLoad={onImageLoad}>
            <img src="images/galleria/galleria1.jpg" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="Prime" />
        </DeferredContent>

        <div style={{ height: '500px' }}></div>

        <DeferredContent onLoad={onDataLoad}>
            <DataTable value={products}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </DeferredContent>
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
            <div className="card">
                <div style={{ height: '800px' }}>Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.</div>
                <Toast ref={toast} />

                <DeferredContent onLoad={onImageLoad}>
                    <img src="images/galleria/galleria1.jpg" onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt="Prime" />
                </DeferredContent>

                <div style={{ height: '500px' }}></div>

                <DeferredContent onLoad={onDataLoad}>
                    <DataTable value={products}>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </DeferredContent>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
