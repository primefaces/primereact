import React, { useState, useRef } from 'react';
import { DeferredContent } from '../../components/lib/deferredcontent/DeferredContent';
import { DataTable } from '../../components/lib/datatable/DataTable';
import { Column } from '../../components/lib/column/Column';
import { Toast } from '../../components/lib/toast/Toast';
import DeferredContentDoc from '../../components/doc/deferredcontent';
import { ProductService } from '../../service/ProductService';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const DeferredContentDemo = () => {

    const toast = useRef(null);
    const [products, setProducts] = useState(null);
    const productService = new ProductService();

    const onImageLoad = () => {
        toast.current.show({ severity: 'success', summary: 'Image Initialized', detail: 'Scroll down to load the datatable' });
    }

    const onDataLoad = () => {
        productService.getProductsSmall().then(data => setProducts(data));
        toast.current.show({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    }

    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <div>
            <Head>
                <title>React Deferred Content Component</title>
                <meta name="description" content="DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll." />

            </Head>
            <div className="content-section introduction">
                <div>
                    <h1>DeferredContent</h1>
                    <p>DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll.</p>
                </div>
                <DocActions github="deferredcontent/index.js" />
            </div>

            <div className="content-section implementation">
                <Toast ref={toast} />

                <div className="card">
                    <div style={{ height: '800px' }}>
                        Scroll down to lazy load an image and the DataTable which initiates a query that is not executed on initial page load to speed up load performance.
                    </div>

                    <DeferredContent onLoad={onImageLoad}>
                        <img src={`${contextPath}/images/galleria/galleria1.jpg`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt="Prime" />
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
            </div>

            <DeferredContentDoc />
        </div>
    )
}

export default DeferredContentDemo;
