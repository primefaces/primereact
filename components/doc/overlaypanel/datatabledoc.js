import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { Column } from '@/components/lib/column/Column';
import { DataTable } from '@/components/lib/datatable/DataTable';
import { OverlayPanel } from '@/components/lib/overlaypanel/OverlayPanel';
import { Toast } from '@/components/lib/toast/Toast';
import { useEffect, useRef, useState } from 'react';
import { ProductService } from '../../../service/ProductService';

export function DataTableDoc(props) {
    const [products, setProducts] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const selectedProductContent = selectedProduct && (
        <div className="p-5 surface-card shadow-2 border-round">
            <div className="relative">
                <img src={'https://primefaces.org/cdn/primereact/images/product/' + selectedProduct.image} alt={selectedProduct.name}></img>
            </div>
            <div className="flex align-items-center justify-content-between mt-3 mb-2">
                <span className="text-900 font-medium text-xl">{selectedProduct.name}</span>
                <span className="text-900 text-xl ml-3">{'$' + selectedProduct.price}</span>
            </div>
            <span className="text-600">{selectedProduct.category}</span>
        </div>
    );

    const op = useRef(null);
    const toast = useRef(null);
    const isMounted = useRef(false);

    const productSelect = (e) => {
        op.current.hide();
        toast.current.show({ severity: 'info', summary: 'Product Selected', detail: e.data.name, life: 3000 });
    };

    useEffect(() => {
        isMounted.current = true;
        ProductService.getProductsSmall().then((data) => {
            setProducts(data);
            setSelectedProduct(data[0]);
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const imageBody = (rowData) => {
        return <img src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`} alt={rowData.image} className="w-4rem shadow-1" />;
    };

    const priceBody = (rowData) => {
        return formatCurrency(rowData.price);
    };

    const code = {
        basic: `
<Toast ref={toast} />
<Button type="button" icon="pi pi-search" label="Search" onClick={(e) => op.current.toggle(e)} />
{selectedProductContent}
<OverlayPanel ref={op} showCloseIcon>
    <DataTable value={products} selectionMode="single" paginator rows={5} selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)}>
        <Column field="name" header="Name" sortable style={{minWidth: '12rem'}} />
        <Column header="Image" body={imageBody} />
        <Column field="price" header="Price" sortable body={priceBody} style={{minWidth: '8rem'}} />
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
import { ProductService } from './service/ProductService';

export default function DataTableDemo() {
    const [products, setProducts] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const selectedProductContent = selectedProduct && (
        <div className="p-5 surface-card shadow-2 border-round">
            <div className="relative">
                <img src={'https://primefaces.org/cdn/primereact/images/product/' + selectedProduct.image} alt={selectedProduct.name}></img>
            </div>
            <div className="flex align-items-center justify-content-between mt-3 mb-2">
                <span className="text-900 font-medium text-xl">{selectedProduct.name}</span>
                <span className="text-900 text-xl ml-3">{'$' + selectedProduct.price}</span>
            </div>
            <span className="text-600">{selectedProduct.category}</span>
        </div>
    );

    const op = useRef(null);
    const toast = useRef(null);
    const isMounted = useRef(false);

    const productSelect = (e) => {
        op.current.hide();
        toast.current.show({ severity: 'info', summary: 'Product Selected', detail:e.data.name, life: 3000 }); 
    };

    useEffect(() => {
        isMounted.current = true;
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const onProductSelect = (e) => {
        setSelectedProduct(e.value);
    };

    const imageBody = (rowData) => {
        return <img src={\`https://primefaces.org/cdn/primereact/images/product/\${rowData.image}\`} alt={rowData.image} className="w-4rem shadow-1" />
    };

    const priceBody = (rowData) => {
        return formatCurrency(rowData.price);
    };

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <Toast ref={toast} />
            <Button type="button" icon="pi pi-search" label="Search" onClick={(e) => op.current.toggle(e)} />
            {selectedProductContent}
            <OverlayPanel ref={op} showCloseIcon closeOnEscape dismissable={false}>
                    <DataTable value={products} selectionMode="single" paginator rows={5} selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} onRowClick={productSelect}>
                        <Column field="name" header="Name" sortable style={{ minWidth: '12rem' }} />
                        <Column header="Image" body={imageBody} />
                        <Column field="price" header="Price" sortable body={priceBody} style={{minWidth: '8rem'}} />
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
import { DataTable, DataTableSelectionChangeEvent } from 'primereact/datatable';
import { ProductService } from './service/ProductService';

export default function DataTableDemo() {
    const [products, setProducts] = useState<Product[]>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product>(null);

    const op = useRef<OverlayPanel>(null);
    const toast = useRef<Toast>(null);
    const isMounted = useRef(false);

    const selectedProductContent = selectedProduct && (
        <div className="p-5 surface-card shadow-2 border-round">
            <div className="relative">
                <img src={'https://primefaces.org/cdn/primereact/images/product/' + selectedProduct.image} alt={selectedProduct.name}></img>
            </div>
            <div className="flex align-items-center justify-content-between mt-3 mb-2">
                <span className="text-900 font-medium text-xl">{selectedProduct.name}</span>
                <span className="text-900 text-xl ml-3">{'$' + selectedProduct.price}</span>
            </div>
            <span className="text-600">{selectedProduct.category}</span>
        </div>
    );
    
    const productSelect = (e) => {
        op.current.hide();
        toast.current.show({ severity: 'info', summary: 'Product Selected', detail:e.data.name, life: 3000 }); 
    };

    useEffect(() => {
        isMounted.current = true;
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const onProductSelect = (e: DataTableSelectionChangeEvent) => {
        setSelectedProduct(e.value);
    };

    const imageBody = (rowData: Product) => {
        return <img src={\`https://primefaces.org/cdn/primereact/images/product/\${rowData.image}\`} alt={rowData.image} className="w-4rem shadow-1" />
    };

    const priceBody = (rowData: Product) => {
        return formatCurrency(rowData.price);
    };

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <Toast ref={toast} />
            <Button type="button" icon="pi pi-search" label="Search" onClick={(e) => op.current.toggle(e)} />
            {selectedProductContent}
            <OverlayPanel ref={op} showCloseIcon closeOnEscape dismissable={false}>
                    <DataTable value={products} selectionMode="single" paginator rows={5} selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} onRowClick={productSelect}>
                        <Column field="name" header="Name" sortable style={{ minWidth: '12rem' }} />
                        <Column header="Image" body={imageBody} />
                        <Column field="price" header="Price" sortable body={priceBody} style={{minWidth: '8rem'}} />
                    </DataTable>
            </OverlayPanel>
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
    image: '/bamboo-watch.jpg',
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
                    An example that displays a DataTable inside a popup to select an item. <i>closeOnEscape</i> is enabled to close the popop when ESC is pressed. The <i>dismissable</i> property when set to <i>false</i> will not close the popup when
                    the document is clicked outside the popup.
                </p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center gap-3">
                <Toast ref={toast} />
                <Button type="button" icon="pi pi-search" label="Search" onClick={(e) => op.current.toggle(e)} />
                {selectedProductContent}
                <OverlayPanel ref={op} showCloseIcon closeOnEscape dismissable={false}>
                    <DataTable value={products} selectionMode="single" paginator rows={5} selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)} onRowClick={productSelect}>
                        <Column field="name" header="Name" sortable style={{ minWidth: '12rem' }} />
                        <Column header="Image" body={imageBody} />
                        <Column field="price" header="Price" sortable body={priceBody} style={{ minWidth: '8rem' }} />
                    </DataTable>
                </OverlayPanel>
            </div>

            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
