import React, { useEffect, useRef, useState } from 'react';
import { ProductService } from '../../../service/ProductService';
import { Column } from '../../lib/column/Column';
import { ContextMenu } from '../../lib/contextmenu/ContextMenu';
import { DataTable } from '../../lib/datatable/DataTable';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ContextMenuDoc(props) {
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

    const code = {
        basic: `
<Toast ref={toast}></Toast>
<ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedProduct(null)}/>
<DataTable value={products} contextMenuSelection={selectedProduct}
    onContextMenuSelectionChange={e => setSelectedProduct(e.value)}
    onContextMenu={e => cm.current.show(e.originalEvent)} responsiveLayout="scroll">
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
import { ProductService } from '../service/ProductService';

const ContextMenuDoc = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const toast = useRef(null);
    const cm = useRef(null);
    const menuModel = [
        {label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct)},
        {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct)}
    ];
    

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const viewProduct = (product) => {
        toast.current.show({severity: 'info', summary: 'Product Selected', detail: product.name});
    }

    const deleteProduct = (product) => {
        let _products = [...products];
        _products = _products.filter((p) => p.id !== product.id);

        toast.current.show({severity: 'error', summary: 'Product Deleted', detail: product.name});
        setProducts(_products);
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div>
            <Toast ref={toast}></Toast>

            <ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedProduct(null)}/>

            <div className="card">
                <DataTable value={products} contextMenuSelection={selectedProduct}
                    onContextMenuSelectionChange={e => setSelectedProduct(e.value)}
                    onContextMenu={e => cm.current.show(e.originalEvent)} responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} />
                </DataTable>
            </div>
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
import { ProductService } from '../service/ProductService';

const ContextMenuDoc = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const toast = useRef(null);
    const cm = useRef(null);
    const menuModel = [
        {label: 'View', icon: 'pi pi-fw pi-search', command: () => viewProduct(selectedProduct)},
        {label: 'Delete', icon: 'pi pi-fw pi-times', command: () => deleteProduct(selectedProduct)}
    ];
    

    useEffect(() => {
        ProductService.getProductsMini().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const viewProduct = (product) => {
        toast.current.show({severity: 'info', summary: 'Product Selected', detail: product.name});
    }

    const deleteProduct = (product) => {
        let _products = [...products];
        _products = _products.filter((p) => p.id !== product.id);

        toast.current.show({severity: 'error', summary: 'Product Deleted', detail: product.name});
        setProducts(_products);
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const priceBodyTemplate = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div>
            <Toast ref={toast}></Toast>

            <ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedProduct(null)}/>

            <div className="card">
                <DataTable value={products} contextMenuSelection={selectedProduct}
                    onContextMenuSelectionChange={e => setSelectedProduct(e.value)}
                    onContextMenu={e => cm.current.show(e.originalEvent)} responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} />
                </DataTable>
            </div>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>DataTable has exclusive integration with ContextMenu.</p>
            </DocSectionText>
            <div className="card">
                <Toast ref={toast}></Toast>

                <ContextMenu model={menuModel} ref={cm} onHide={() => setSelectedProduct(null)} />
                <DataTable value={products} contextMenuSelection={selectedProduct} onContextMenuSelectionChange={(e) => setSelectedProduct(e.value)} onContextMenu={(e) => cm.current.show(e.originalEvent)} responsiveLayout="scroll">
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="price" header="Price" body={priceBodyTemplate} />
                </DataTable>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
