import React, { useState, useEffect, useRef } from 'react';
import { OverlayPanel } from '../../components/lib/overlaypanel/OverlayPanel';
import { Button } from '../../components/lib/button/Button';
import { Toast } from '../../components/lib/toast/Toast';
import { Column } from '../../components/lib/column/Column';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { ProductService } from '../../service/ProductService';
import OverlayPanelDoc from '../../components/doc/overlaypanel';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const OverlayPanelDemo = () => {

    const [products, setProducts] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const productService = new ProductService();
    const op = useRef(null);
    const toast = useRef(null);
    const isMounted = useRef(false);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;


    useEffect(() => {
        if (isMounted.current && selectedProduct) {
            op.current.hide();
            toast.current.show({ severity: 'info', summary: 'Product Selected', detail: selectedProduct.name, life: 3000 });
        }
    }, [selectedProduct]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        isMounted.current = true;
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    const onProductSelect = (e) => {
        setSelectedProduct(e.value);
    }

    const imageBody = (rowData) => {
        return <img src={`${contextPath}/images/product/${rowData.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={rowData.image} className="product-image" />
    }

    const priceBody = (rowData) => {
        return formatCurrency(rowData.price);
    }

    return (
        <div>
            <Head>
                <title>React Popover Component</title>
                <meta name="description" content="OverlayPanel also known as Popover, is a container component that can overlay other components on page." />
            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>OverlayPanel</h1>
                    <p>OverlayPanel also known as Popover, is a container component that can overlay other components on page.</p>
                </div>
                <DocActions github="overlaypanel/index.js" />
            </div>

            <div className="content-section implementation">
                <Toast ref={toast} />

                <div className="card">
                    <Button type="button" icon="pi pi-search" label={selectedProduct ? selectedProduct.name : 'Select a Product'} onClick={(e) => op.current.toggle(e)} aria-haspopup aria-controls="overlay_panel" className="select-product-button" />

                    <OverlayPanel ref={op} showCloseIcon id="overlay_panel" style={{ width: '450px' }} className="overlaypanel-demo">
                        <DataTable value={products} selectionMode="single" paginator rows={5}
                            selection={selectedProduct} onSelectionChange={onProductSelect}>
                            <Column field="name" header="Name" sortable />
                            <Column header="Image" body={imageBody} />
                            <Column field="price" header="Price" sortable body={priceBody} />
                        </DataTable>
                    </OverlayPanel>
                </div>
            </div>

            <OverlayPanelDoc />
        </div>
    )
}

export default OverlayPanelDemo;
