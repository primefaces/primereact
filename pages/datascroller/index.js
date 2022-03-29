import React, { useState, useEffect } from 'react';
import { DataScroller } from '../../components/lib/datascroller/DataScroller';
import { Button } from '../../components/lib/button/Button';
import { Rating } from '../../components/lib/rating/Rating';
import { ProductService } from '../../service/ProductService';
import DataScrollerDoc from '../../components/doc/datascroller';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const DataScrollerDemo = () => {

    const [products, setProducts] = useState([]);
    const productService = new ProductService();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        productService.getProducts().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const itemTemplate = (data) => {
        return (
            <div className="product-item">
                <img src={`${contextPath}/images/product/${data.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readOnly cancel={false}></Rating>
                    <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                </div>
                <div className="product-action">
                    <span className="product-price">${data.price}</span>
                    <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>React DataScroller Component</title>
                <meta name="description" content="DataScroller displays data with on demand loading using scroll." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>DataScroller</h1>
                    <p>DataScroller displays data with on demand loading using scroll.</p>
                </div>

                <DocActions github="datascroller/index.js" />
            </div>

            <div className="content-section implementation">
                Demo is at the bottom of this page.
            </div>

            <DataScrollerDoc />

            <div className="content-section implementation datascroller-demo">
                <div className="card">
                    <DataScroller value={products} itemTemplate={itemTemplate}
                        rows={5} buffer={0.4} header="List of Products" />
                </div>
            </div>

        </div>
    );
}

export default DataScrollerDemo;
