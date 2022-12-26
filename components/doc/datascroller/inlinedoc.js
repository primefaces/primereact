import { useState, useEffect } from 'react';
import { DataScroller } from '../../lib/datascroller/DataScroller';
import { Rating } from '../../lib/rating/Rating';
import { Button } from '../../lib/button/Button';
import { ProductService } from '../../../service/ProductService';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InlineDataScrollerDoc(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (data) => {
        return (
            <div className="product-item">
                <img src={`images/product/${data.image}`} onError={(e) => (e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')} alt={data.name} />
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

    const code = {
        basic: `
<DataScroller value={products} itemTemplate={itemTemplate} rows={5} inline scrollHeight="500px" header="Scroll Down to Load More" />
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { DataScroller } from 'primereact/datascroller';
import { ProductService } from '../service/ProductService';

export default function InlineDataScrollerDoc() {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        ProductService.getProducts().then(data => setProducts(data));
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
        <DataScroller value={products} itemTemplate={itemTemplate} rows={5} inline scrollHeight="500px" header="Scroll Down to Load More" />
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { DataScroller } from 'primereact/datascroller';
import { ProductService } from '../service/ProductService';

export default function InlineDataScrollerDoc() {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        ProductService.getProducts().then(data => setProducts(data));
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
        <DataScroller value={products} itemTemplate={itemTemplate} rows={5} inline scrollHeight="500px" header="Scroll Down to Load More" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>DataScroller can listen scroll event of itself rather than document in inline mode.</p>
            </DocSectionText>
            <div className="card">
                <DataScroller value={products} itemTemplate={itemTemplate} rows={5} inline scrollHeight="500px" header="Scroll Down to Load More" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
