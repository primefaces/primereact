import React, { useState, useEffect } from 'react';
import { PickList } from '../../components/lib/picklist/PickList';
import { ProductService } from '../../service/ProductService';
import PickListDoc from '../../components/doc/picklist';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const PickListDemo = () => {

    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);
    const productService = new ProductService();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        productService.getProductsSmall().then(data => setSource(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    }

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
                <title>React PickList Component</title>
                <meta name="description" content="PickList is used to reorder items between different lists." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>PickList</h1>
                    <p>PickList is used to reorder items between different lists.</p>
                </div>

                <DocActions github="picklist/index.js" />
            </div>

            <div className="content-section implementation picklist-demo">
                <div className="card">
                    <PickList source={source} target={target} itemTemplate={itemTemplate}
                        sourceHeader="Available" targetHeader="Selected"
                        sourceStyle={{ height: '342px' }} targetStyle={{ height: '342px' }}
                        onChange={onChange}></PickList>
                </div>
            </div>

            <PickListDoc />
        </div>
    );
}

export default PickListDemo;
