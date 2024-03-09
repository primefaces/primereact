import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { DataTable } from '@/components/lib/datatable/DataTable';
import { InputSwitch } from '@/components/lib/inputswitch/InputSwitch';
import { useEffect, useState } from 'react';
import { ProductService } from '../../../../service/ProductService';
import DeferredDemo from '@/components/demo/DeferredDemo';

export function SingleRowSelectionDoc(props) {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [metaKey, setMetaKey] = useState(true);

    const loadDemoData = () => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    };

    const code = {
        basic: `
<InputSwitch checked={metaKey} onChange={(e) => setMetaKey(e.value)} />

<DataTable value={products} selectionMode="single" selection={selectedProduct}
        onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch } from 'primereact/inputswitch';
import { ProductService } from './service/ProductService';

export default function SingleRowSelectionDemo() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [metaKey, setMetaKey] = useState(true);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <DataTable value={products} selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
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
import React, { useState, useEffect } from 'react';
import { DataTable, DataTableSelectionChangeEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputSwitch, InputSwitchChangeEvent } from 'primereact/inputswitch';
import { ProductService } from './service/ProductService';

interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    image?: string;
    price?: number;
    category?: string;
    quantity?: number;
    inventoryStatus?: string;
    rating?: number;
}

export default function SingleRowSelectionDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [metaKey, setMetaKey] = useState<boolean>(true);

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []);

    return (
        <div className="card">
            <div className="flex justify-content-center align-items-center mb-4 gap-2">
                <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e: InputSwitchChangeEvent) => setMetaKey(e.value!)} />
                <label htmlFor="input-metakey">MetaKey</label>
            </div>
            <DataTable value={products} selectionMode="single" selection={selectedProduct!} 
                onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
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
                    Single row selection is enabled by defining <i>selectionMode</i> as <i>single</i> along with a value binding using <i>selection</i> and <i>onSelectionChange</i> properties. When available, it is suggested to provide a unique
                    identifier of a row with <i>dataKey</i> to optimize performance.
                </p>
                <p>
                    By default, metaKey press (e.g. <i>⌘</i>) is necessary to unselect a row however this can be configured with disabling the <i>metaKeySelection</i> property. In touch enabled devices this option has no effect and behavior is same
                    as setting it to false.
                </p>
            </DocSectionText>
            <DeferredDemo onLoad={loadDemoData}>
                <div className="card">
                    <div className="flex justify-content-center align-items-center mb-4 gap-2">
                        <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                        <label htmlFor="input-metakey">MetaKey</label>
                    </div>
                    <DataTable value={products} selectionMode="single" selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} dataKey="id" metaKeySelection={metaKey} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="quantity" header="Quantity"></Column>
                    </DataTable>
                </div>
            </DeferredDemo>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
