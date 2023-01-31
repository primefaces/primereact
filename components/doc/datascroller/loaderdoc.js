import { useState, useEffect, useRef } from 'react';
import { DataScroller } from '../../lib/datascroller/DataScroller';
import { Rating } from '../../lib/rating/Rating';
import { Button } from '../../lib/button/Button';
import { ProductService } from '../../../service/ProductService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function LoaderDataScrollerDoc(props) {
    const [products, setProducts] = useState([]);
    const ds = useRef(null);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (data) => {
        return (
            <div className="product-item">
                <img src={`/images/product/${data.image}`} alt={data.name} />
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

    const footer = <Button type="text" icon="pi pi-plus" label="Load" onClick={() => ds.current.load()} />;

    const code = {
        basic: `
<DataScroller ref={ds} value={products} itemTemplate={itemTemplate} rows={5} loader footer={footer} header="Click Load Button at Footer to Load More" />
        `,
        javascript: `
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { DataScroller } from 'primereact/datascroller';
import { ProductService } from './service/ProductService';

export default function LoaderDataScrollerDoc() {
    const [products, setProducts] = useState([]);
    const ds = useRef(null);
    

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (data) => {
        return (
            <div className="product-item">
                <img src={\`https://primereact.org/images/product/\${data.image}\`} alt={data.name} />
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readOnly cancel={false}></Rating>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{data.category}</span>
                </div>
                <div className="product-action">
                <span className="product-price">\${data.price}</span>
                    <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\`}>{data.inventoryStatus}</span>
                </div>
            </div>
        );
    };

    const footer = <Button type="text" icon="pi pi-plus" label="Load" onClick={() => ds.current.load()} />;

    return (
        <div className="card datascroller-demo">
            <DataScroller ref={ds} value={products} itemTemplate={itemTemplate} rows={5} loader footer={footer} header="Click Load Button at Footer to Load More" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { DataScroller } from 'primereact/datascroller';
import { ProductService } from './service/ProductService';

export default function LoaderDataScrollerDoc() {
    const [products, setProducts] = useState([]);
    const ds = useRef(null);
    

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (data) => {
        return (
            <div className="product-item">
                <img src={\`https://primereact.org/images/product/\${data.image}\`} alt={data.name} />
                <div className="product-detail">
                    <div className="product-name">{data.name}</div>
                    <div className="product-description">{data.description}</div>
                    <Rating value={data.rating} readOnly cancel={false}></Rating>
                    <i className="pi pi-tag product-category-icon"></i>
                    <span className="product-category">{data.category}</span>
                </div>
                <div className="product-action">
                <span className="product-price">\${data.price}</span>
                    <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                    <span className={\`product-badge status-\${data.inventoryStatus.toLowerCase()}\`}>{data.inventoryStatus}</span>
                </div>
            </div>
        );
    };

    const footer = <Button type="text" icon="pi pi-plus" label="Load" onClick={() => ds.current.load()} />;

    return (
        <div className="card datascroller-demo">
            <DataScroller ref={ds} value={products} itemTemplate={itemTemplate} rows={5} loader footer={footer} header="Click Load Button at Footer to Load More" />
        </div>
    )
}
        `,
        extFiles: {
            'DataScrollerDemo.css': `
/* DataScrollerDemo.css */
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
        },
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
                <p>Instead of scrolling, a custom element can be used to load data.</p>
            </DocSectionText>
            <div className="card">
                <DataScroller ref={ds} value={products} itemTemplate={itemTemplate} rows={5} loader footer={footer} header="Click Load Button at Footer to Load More" />
            </div>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
