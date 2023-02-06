import { useEffect, useState } from 'react';
import { ProductService } from '../../../service/ProductService';
import { OrderList } from '../../lib/orderlist/OrderList';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DragDropDoc(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return (
            <div className="flex align-items-center p-2 w-full flex-wrap">
                <div className="w-full text-center md:w-auto md:text-left">
                    <img className="w-7rem md:w-5rem md:shadow-2 md:mr-3 mb-3 md:mb-auto" src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.name} />
                </div>
                <div className="flex-1">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag vertical-align-middle mr-2"></i>
                    <span className="vertical-align-middle line-height-1">{item.category}</span>
                </div>
                <div className="flex flex-column align-items-end">
                    <h6 className="mb-2">${item.price}</h6>
                    <span className={`product-badge status-${item.inventoryStatus.toLowerCase()}`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    };

    const code = {
        basic: `
<OrderList value={products} itemTemplate={itemTemplate} dragdrop onChange={(e) => setProducts(e.value)}></OrderList>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { ProductService } from './service/ProductService';

export default function DragDropDoc() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return (
            <div className="flex align-items-center p-2 w-full flex-wrap">
                <div className="w-full text-center md:w-auto md:text-left">
                    <img className='w-7rem md:w-5rem md:shadow-2 md:mr-3 mb-3 md:mb-auto' src={\`https://primefaces.org/cdn/primereact/images/product/\${item.image}\`} alt={item.name} />
                </div>
                <div className="flex-1">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag vertical-align-middle mr-2"></i>
                    <span className="vertical-align-middle line-height-1">{item.category}</span>
                </div>
                <div className="flex flex-column align-items-end">
                <h6 className="mb-2">\${item.price}</h6>
                    <span className={\`product-badge status-\${item.inventoryStatus.toLowerCase()}\`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    };
    
    return (
        <div className="card">
            <OrderList value={products} itemTemplate={itemTemplate} dragdrop onChange={(e) => setProducts(e.value)}></OrderList>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { ProductService } from './service/ProductService';

export default function DragDropDoc() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return (
            <div className="flex align-items-center p-2 w-full flex-wrap">
                <div className="w-full text-center md:w-auto md:text-left">
                    <img className='w-7rem md:w-5rem md:shadow-2 md:mr-3 mb-3 md:mb-auto' src={\`https://primefaces.org/cdn/primereact/images/product/\${item.image}\`} alt={item.name} />
                </div>
                <div className="flex-1">
                    <h5 className="mb-2">{item.name}</h5>
                    <i className="pi pi-tag vertical-align-middle mr-2"></i>
                    <span className="vertical-align-middle line-height-1">{item.category}</span>
                </div>
                <div className="flex flex-column align-items-end">
                <h6 className="mb-2">\${item.price}</h6>
                    <span className={\`product-badge status-\${item.inventoryStatus.toLowerCase()}\`}>{item.inventoryStatus}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="card" >
            <OrderList value={products} itemTemplate={itemTemplate} dragdrop onChange={(e) => setProducts(e.value)}></OrderList>
        </div>
    )
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
                    Items can be reordered using drag and drop by enabling <i>dragdrop</i> property.
                </p>
            </DocSectionText>
            <div className="card">
                <OrderList value={products} itemTemplate={itemTemplate} dragdrop onChange={(e) => setProducts(e.value)}></OrderList>
            </div>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
