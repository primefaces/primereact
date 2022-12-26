import { useEffect, useRef, useState } from 'react';
import { ProductService } from '../../../service/ProductService';
import { Button } from '../../lib/button/Button';
import { Column } from '../../lib/column/Column';
import { DataTable } from '../../lib/datatable/DataTable';
import { OverlayPanel } from '../../lib/overlaypanel/OverlayPanel';
import { Toast } from '../../lib/toast/Toast';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function OverlayPanelDoc(props) {
    const [products, setProducts] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const productService = new ProductService();
    const op = useRef(null);
    const toast = useRef(null);
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current && selectedProduct) {
            op.current.hide();
            toast.current.show({ severity: 'info', summary: 'Product Selected', detail: selectedProduct.name, life: 3000 });
        }
    }, [selectedProduct]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        isMounted.current = true;
        productService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const onProductSelect = (e) => {
        setSelectedProduct(e.value);
    };

    const imageBody = (rowData) => {
        return <img src={`images/product/${rowData.image}`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={rowData.image} className="w-4rem shadow-1" />;
    };

    const priceBody = (rowData) => {
        return formatCurrency(rowData.price);
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Button style={{ minWidth: '15rem' }} type="button" icon="pi pi-search" label={selectedProduct ? selectedProduct.name : 'Select a Product'} onClick={(e) => op.current.toggle(e)} aria-haspopup aria-controls="overlay_panel" />
<OverlayPanel ref={op} showCloseIcon id="overlay_panel" style={{ width: '450px' }} >
    <DataTable value={products} selectionMode="single" paginator rows={5} selection={selectedProduct} onSelectionChange={onProductSelect}>
        <Column field="name" header="Name" sortable />
        <Column header="Image" body={imageBody} />
        <Column field="price" header="Price" sortable body={priceBody} />
    </DataTable>
</OverlayPanel>
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { ProductService } from '../service/ProductService';

export default function OverlayPanelDoc() {
    const [products, setProducts] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const productService = new ProductService();
    const op = useRef(null);
    const toast = useRef(null);
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current && selectedProduct) {
            op.current.hide();
            toast.current.show({ severity: 'info', summary: 'Product Selected', detail: selectedProduct.name, life: 3000 });
        }
    }, [selectedProduct]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        isMounted.current = true;
        productService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const onProductSelect = (e) => {
        setSelectedProduct(e.value);
    };

    const imageBody = (rowData) => {
        return <img src={\`images/product/\${rowData.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="w-4rem shadow-1" />
    };

    const priceBody = (rowData) => {
        return formatCurrency(rowData.price);
    };

    return (
        <div>
            <Toast ref={toast} />
            <Button style={{ minWidth: '15rem' }} type="button" icon="pi pi-search" label={selectedProduct ? selectedProduct.name : 'Select a Product'} onClick={(e) => op.current.toggle(e)} aria-haspopup aria-controls="overlay_panel" />

            <OverlayPanel ref={op} showCloseIcon id="overlay_panel" style={{ width: '450px' }}>
                <DataTable value={products} selectionMode="single" paginator rows={5} selection={selectedProduct} onSelectionChange={onProductSelect}>
                    <Column field="name" header="Name" sortable />
                    <Column header="Image" body={imageBody} />
                    <Column field="price" header="Price" sortable body={priceBody} />
                </DataTable>
            </OverlayPanel>
        </div>

    );
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import { DataTable, DataTableSelectionChangeParams } from 'primereact/datatable';
import { ProductService } from '../service/ProductService';

export default function OverlayPanelDoc() {
    const [products, setProducts] = useState<Product[]>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product>(null);
    const productService = new ProductService();
    const op = useRef<OverlayPanel>(null);
    const toast = useRef<Toast>(null);
    const isMounted = useRef(false);

    useEffect(() => {
        if (isMounted.current && selectedProduct) {
            op.current.hide();
            toast.current.show({ severity: 'info', summary: 'Product Selected', detail: selectedProduct.name, life: 3000 });
        }
    }, [selectedProduct]);

    useEffect(() => {
        isMounted.current = true;
        productService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const onProductSelect = (e: DataTableSelectionChangeParams) => {
        setSelectedProduct(e.value);
    };

    const imageBody = (rowData: Product) => {
        return <img src={\`images/product/\${rowData.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="w-4rem shadow-1" />
    };

    const priceBody = (rowData: Product) => {
        return formatCurrency(rowData.price);
    };

    return (
        <div>
            <Toast ref={toast} />
            <Button style={{ minWidth: '15rem' }} type="button" icon="pi pi-search" label={selectedProduct ? selectedProduct.name : 'Select a Product'} onClick={(e) => op.current.toggle(e)} aria-haspopup aria-controls="overlay_panel" />

            <OverlayPanel ref={op} showCloseIcon id="overlay_panel" style={{ width: '450px' }}>
                <DataTable value={products} selectionMode="single" paginator rows={5} selection={selectedProduct} onSelectionChange={onProductSelect}>
                    <Column field="name" header="Name" sortable />
                    <Column header="Image" body={imageBody} />
                    <Column field="price" header="Price" sortable body={priceBody} />
                </DataTable>
            </OverlayPanel>
        </div>

    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>OverlayPanel is accessed via its reference where visibility is controlled using toggle, show and hide methods.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <div className="card">
                    <Toast ref={toast} />
                    <Button style={{ minWidth: '15rem' }} type="button" icon="pi pi-search" label={selectedProduct ? selectedProduct.name : 'Select a Product'} onClick={(e) => op.current.toggle(e)} aria-haspopup aria-controls="overlay_panel" />

                    <OverlayPanel ref={op} showCloseIcon id="overlay_panel" style={{ width: '450px' }}>
                        <DataTable value={products} selectionMode="single" paginator rows={5} selection={selectedProduct} onSelectionChange={onProductSelect}>
                            <Column field="name" header="Name" sortable />
                            <Column header="Image" body={imageBody} style={{ width: 'px' }} />
                            <Column field="price" header="Price" sortable body={priceBody} />
                        </DataTable>
                    </OverlayPanel>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
