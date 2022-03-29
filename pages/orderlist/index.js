import React, { useState, useEffect } from 'react';
import { OrderList } from '../../components/lib/orderlist/OrderList';
import { ProductService } from '../../service/ProductService';
import OrderListDoc from '../../components/doc/orderlist';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const OrderListDemo = () => {

    const [products, setProducts] = useState([]);
    const productService = new ProductService();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return (
            <div className="product-item">
                <div className="image-container">
                    <img src={`${contextPath}/images/product/${item.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
                </div>
                <div className="product-list-detail">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{item.category}</span>
                </div>
                <div className="product-list-action">
                    <h6 className="mb-2">${item.price}</h6>
                    <span className={`product-badge status-${item.inventoryStatus.toLowerCase()}`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>React OrderList Component</title>
                <meta name="description" content="OrderList is used to sort a collection." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>OrderList</h1>
                    <p>OrderList is used to sort a collection.</p>
                </div>

                <DocActions github="orderlist/index.js" />
            </div>

            <div className="content-section implementation orderlist-demo">
                <div className="card">
                    <OrderList value={products} header="List of Products" dragdrop listStyle={{ height: 'auto' }} dataKey="id"
                        itemTemplate={itemTemplate} onChange={(e) => setProducts(e.value)}></OrderList>
                </div>
            </div>

            <OrderListDoc></OrderListDoc>
        </div>
    );
}

export default OrderListDemo;
