import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Column } from '@/components/lib/column/Column';
import { ContextMenu } from '@/components/lib/contextmenu/ContextMenu';
import { DataTable } from '@/components/lib/datatable/DataTable';
import { Toast } from '@/components/lib/toast/Toast';
import { useEffect, useRef, useState } from 'react';
import { ProductService } from '../../../service/ProductService';
import DeferredDemo from '@/components/demo/DeferredDemo';

export function ContextMenuDoc(props) {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const toast = useRef(null);
    const cm = useRef(null);
    const menuModel = [
        { label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct) },
        { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct) }
    ];

    const loadDemoData = () => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    };

    const viewProduct = (product) => {
        toast.current.show({ severity: 'info', summary: 'Product Selected', detail: product.name });
    };

    const deleteProduct = (product) => {
        let _products = [...products];

        _products = _products.filter((p) => p.id !== product.id);

        toast.current.show({ severity: 'error', summary: 'Product Deleted', detail: product.name });
        setProducts(_products);
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

    const code = {
        basic: `
<Toast ref={toast} />
<ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedProduct(null)} />
<DataTable value={products} onContextMenu={(e) => cm.current.show(e.originalEvent)}
        contextMenuSelection={selectedProduct} onContextMenuSelectionChange={(e) => setSelectedProduct(e.value)} tableStyle={{ minWidth: '50rem' }}>
    <Column field="code" header="Code"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="category" header="Category"></Column>
    <Column field="price" header="Price" body={priceBodyTemplate} />
</DataTable>
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
import { ProductService } from './service/ProductService';

export default function ContextMenuDemo() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const toast = useRef(null);
    const cm = useRef(null);
    const menuModel = [
        { label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct) },
        { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct) }
    ];

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const viewProduct = (product) => {
        toast.current.show({ severity: 'info', summary: 'Product Selected', detail: product.name });
    };

    const deleteProduct = (product) => {
        let _products = [...products];

        _products = _products.filter((p) => p.id !== product.id);

        toast.current.show({ severity: 'error', summary: 'Product Deleted', detail: product.name });
        setProducts(_products);
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

    return (
        <div className="card">
            <Toast ref={toast} />

            <ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedProduct(null)} />
            <DataTable value={products} onContextMenu={(e) => cm.current.show(e.originalEvent)} contextMenuSelection={selectedProduct} onContextMenuSelectionChange={(e) => setSelectedProduct(e.value)} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} />
            </DataTable>
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ContextMenu } from 'primereact/contextmenu';
import { Toast } from 'primereact/toast';
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

export default function ContextMenuDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const toast = useRef<Toast>(null);
    const cm = useRef<ContextMenu>(null);
    const menuModel = [
        { label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct) },
        { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct) }
    ];

    useEffect(() => {
        ProductService.getProductsMini().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const viewProduct = (product) => {
        toast.current.show({ severity: 'info', summary: 'Product Selected', detail: product.name });
    };

    const deleteProduct = (product) => {
        let _products = [...products];

        _products = _products.filter((p) => p.id !== product.id);

        toast.current.show({ severity: 'error', summary: 'Product Deleted', detail: product.name });
        setProducts(_products);
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    };

    return (
        <div className="card">
            <Toast ref={toast} />

            <ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedProduct(null)} />
            <DataTable value={products} onContextMenu={(e) => cm.current.show(e.originalEvent)} contextMenuSelection={selectedProduct} onContextMenuSelectionChange={(e) => setSelectedProduct(e.value)} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="price" header="Price" body={priceBodyTemplate} />
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
                <p>
                    DataTable has exclusive integration with ContextMenu using the <i>onContextMenu</i> event to open a menu on right click alont with
                    <i>contextMenuSelection</i> and <i>onContextMenuSelectionChange</i> properties to control the selection via the menu.
                </p>
            </DocSectionText>
            <DeferredDemo onLoad={loadDemoData}>
                <div className="card">
                    <Toast ref={toast} />

                    <ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedProduct(null)} />
                    <DataTable value={products} onContextMenu={(e) => cm.current.show(e.originalEvent)} contextMenuSelection={selectedProduct} onContextMenuSelectionChange={(e) => setSelectedProduct(e.value)} tableStyle={{ minWidth: '50rem' }}>
                        <Column field="code" header="Code"></Column>
                        <Column field="name" header="Name"></Column>
                        <Column field="category" header="Category"></Column>
                        <Column field="price" header="Price" body={priceBodyTemplate} />
                    </DataTable>
                </div>
            </DeferredDemo>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
