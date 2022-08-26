import React, { useState, useEffect, memo } from 'react';
import { DataScroller } from '../../components/lib/datascroller/DataScroller';
import { Button } from '../../components/lib/button/Button';
import { Rating } from '../../components/lib/rating/Rating';
import { ProductService } from '../../service/ProductService';
import { TabView } from '../../components/lib/tabview/TabView';
import { useLiveEditorTabs } from '../../components/doc/common/liveeditor';
import { DocActions } from '../../components/doc/common/docactions';
import Head from 'next/head';
import getConfig from 'next/config';

const DataScrollerInlineDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useEffect(() => {
        productService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (data) => {
        return (
            <div className="product-item">
                <img src={`${contextPath}/images/product/${data.image}`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={data.name} />
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readOnly cancel={false}></Rating>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{data.category}</span>
                </div>
                <div className="product-action">
                    <span className="product-price">${data.price}</span>
                    <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    <span className={`product-badge status-${data.inventoryStatus.toLowerCase()}`}>{data.inventoryStatus}</span>
                </div>
            </div>
        );
    };

    return (
        <div>
            <Head>
                <title>React DataScroller Component - Inline</title>
                <meta name="description" content="DataScroller can listen scroll event of itself rather than document in inline mode." />
            </Head>
            <div className="content-section introduction">
                <div className="feature-intro">
                    <h1>
                        DataScroller <span>Inline</span>
                    </h1>
                    <p>DataScroller can listen scroll event of itself rather than document in inline mode.</p>
                </div>

                <DocActions github="datascroller/inline.js" />
            </div>

            <div className="content-section implementation datascroller-demo">
                <div className="card">
                    <DataScroller value={products} itemTemplate={itemTemplate} rows={5} inline scrollHeight="500px" header="Scroll Down to Load More" />
                </div>
            </div>

            <DataScrollerInlineDoc></DataScrollerInlineDoc>
        </div>
    );
};

export default DataScrollerInlineDemo;

export const DataScrollerInlineDoc = memo(() => {
    const sources = {
        class: {
            tabName: 'Class Source',
            content: `
import React, { Component } from 'react';
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { ProductService } from '../service/ProductService';
import './DataScrollerDemo.css';

export class DataScrollerInlineDemo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.productService = new ProductService();
        this.itemTemplate = this.itemTemplate.bind(this);
    }

    componentDidMount() {
        this.productService.getProducts().then(data => this.setState({ products: data }));
    }

    itemTemplate(data) {
        return (
            <div className="product-item">
                <img src={\`images/product/\${data.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readOnly cancel={false}></Rating>
                    <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                </div>
                <div className="product-action">
                    <span className="product-price">\${data.price}</span>
                    <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\`}>{data.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="datascroller-demo">
                <div className="card">
                    <DataScroller value={this.state.products} itemTemplate={this.itemTemplate} rows={5} inline scrollHeight="500px" header="Scroll Down to Load More" />
                </div>
            </div>
        );
    }
}
                `
        },
        hooks: {
            tabName: 'Hooks Source',
            content: `
import React, { useState, useEffect } from 'react';
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { ProductService } from '../service/ProductService';
import './DataScrollerDemo.css';

const DataScrollerInlineDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProducts().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (data) => {
        return (
            <div className="product-item">
                <img src={\`images/product/\${data.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readOnly cancel={false}></Rating>
                    <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                </div>
                <div className="product-action">
                    <span className="product-price">\${data.price}</span>
                    <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\`}>{data.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="datascroller-demo">
            <div className="card">
                <DataScroller value={products} itemTemplate={itemTemplate} rows={5} inline scrollHeight="500px" header="Scroll Down to Load More" />
            </div>
        </div>
    );
}
                `
        },
        ts: {
            tabName: 'TS Source',
            content: `
import React, { useState, useEffect } from 'react';
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { ProductService } from '../service/ProductService';
import './DataScrollerDemo.css';

const DataScrollerInlineDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProducts().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (data) => {
        return (
            <div className="product-item">
                <img src={\`images/product/\${data.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readOnly cancel={false}></Rating>
                    <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                </div>
                <div className="product-action">
                    <span className="product-price">\${data.price}</span>
                    <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\`}>{data.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="datascroller-demo">
            <div className="card">
                <DataScroller value={products} itemTemplate={itemTemplate} rows={5} inline scrollHeight="500px" header="Scroll Down to Load More" />
            </div>
        </div>
    );
}
                `
        },
        browser: {
            tabName: 'Browser Source',
            imports: `
<link rel="stylesheet" href="./DataScrollerDemo.css" />
<script src="./ProductService.js"></script>

<script src="https://unpkg.com/primereact/api/api.min.js"></script>
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/datascroller/datascroller.min.js"></script>
<script src="https://unpkg.com/primereact/button/button.min.js"></script>
<script src="https://unpkg.com/primereact/rating/rating.min.js"></script>`,
            content: `
const { useEffect, useState } = React;
const { DataScroller } = primereact.datascroller;
const { Button } = primereact.button;
const { Rating } = primereact.rating;

const DataScrollerInlineDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getProducts().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (data) => {
        return (
            <div className="product-item">
                <img src={\`images/product/\${data.image}\`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readOnly cancel={false}></Rating>
                    <i className="pi pi-tag product-category-icon"></i><span className="product-category">{data.category}</span>
                </div>
                <div className="product-action">
                    <span className="product-price">\${data.price}</span>
                    <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\`}>{data.inventoryStatus}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="datascroller-demo">
            <div className="card">
                <DataScroller value={products} itemTemplate={itemTemplate} rows={5} inline scrollHeight="500px" header="Scroll Down to Load More" />
            </div>
        </div>
    );
}
                `
        }
    };

    const extFiles = {
        'demo/DataScrollerDemo.css': {
            content: `
.datascroller-demo .product-name {
    font-size: 1.5rem;
    font-weight: 700;
}

.datascroller-demo .product-description {
    margin: 0 0 1rem 0;
}

.datascroller-demo .product-category-icon {
    vertical-align: middle;
    margin-right: .5rem;
}

.datascroller-demo .product-category {
    font-weight: 600;
    vertical-align: middle;
}

.datascroller-demo .product-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;
}

.datascroller-demo .product-item img {
    width: 150px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-right: 2rem;
}

.datascroller-demo .product-item .product-detail {
    flex: 1 1 0;
}

.datascroller-demo .product-item .p-rating {
    margin: 0 0 .5rem 0;
}

.datascroller-demo .product-item .product-price {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: .5rem;
    align-self: flex-end;
}

.datascroller-demo .product-item .product-action {
    display: flex;
    flex-direction: column;
}

.datascroller-demo .product-item .p-button {
    margin-bottom: .5rem;
}

@media screen and (max-width: 576px) {
    .datascroller-demo .product-item {
        flex-direction: column;
        align-items: center;
    }

    .datascroller-demo .product-item img {
        width: 75%;
        margin: 2rem 0;
    }

    .datascroller-demo .product-item .product-detail {
        text-align: center;
    }

    .datascroller-demo .product-item .product-price {
        align-self: center;
    }

    .datascroller-demo .product-item .product-action {
        display: flex;
        flex-direction: column;
    }

    .datascroller-demo .product-item .product-action {
        margin-top: 2rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
}
                `
        }
    };

    return (
        <div className="content-section documentation" id="app-doc">
            <TabView>{useLiveEditorTabs({ name: 'DataScrollerInlineDemo', sources: sources, service: 'ProductService', data: 'products', extFiles: extFiles })}</TabView>
        </div>
    );
});
