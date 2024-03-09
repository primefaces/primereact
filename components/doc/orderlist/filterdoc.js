import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { OrderList } from '@/components/lib/orderlist/OrderList';
import { useEffect, useState } from 'react';
import { ProductService } from '../../../service/ProductService';

export function FilterDoc(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.name} />
                <div className="flex-1 flex flex-column gap-2 xl:mr-8">
                    <span className="font-bold">{item.name}</span>
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-tag text-sm"></i>
                        <span>{item.category}</span>
                    </div>
                </div>
                <span className="font-bold text-900">${item.price}</span>
            </div>
        );
    };

    const code = {
        basic: `
<OrderList dataKey="id" value={products} onChange={(e) => setProducts(e.value)} itemTemplate={itemTemplate} header="Products" filter filterBy="name"></OrderList>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { ProductService } from './service/ProductService';

export default function FilterDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={\`https://primefaces.org/cdn/primereact/images/product/\${item.image}\`} alt={item.name} />
                <div className="flex-1 flex flex-column gap-2 xl:mr-8">
                    <span className="font-bold">{item.name}</span>
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-tag text-sm"></i>
                        <span>{item.category}</span>
                    </div>
                </div>
                <span className="font-bold text-900">\${item.price}</span>
            </div>
        );
    };
    
    return (
        <div className="card xl:flex xl:justify-content-center">
            <OrderList dataKey="id" value={products} onChange={(e) => setProducts(e.value)} itemTemplate={itemTemplate} header="Products" filter filterBy="name"></OrderList>
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { OrderList } from 'primereact/orderlist';
import { ProductService } from './service/ProductService';

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: 'string',
    rating: number;
}

export default function FilterDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const itemTemplate = (item: Product) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={\`https://primefaces.org/cdn/primereact/images/product/\${item.image}\`} alt={item.name} />
                <div className="flex-1 flex flex-column gap-2 xl:mr-8">
                    <span className="font-bold">{item.name}</span>
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-tag text-sm"></i>
                        <span>{item.category}</span>
                    </div>
                </div>
                <span className="font-bold text-900">\${item.price}</span>
            </div>
        );
    };
    
    return (
        <div className="card xl:flex xl:justify-content-center">
            <OrderList dataKey="id" value={products} onChange={(e) => setProducts(e.value)} itemTemplate={itemTemplate} header="Products" filter filterBy="name"></OrderList>
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
                <p>
                    Items are filtered using an input field by enabling the <i>filter</i> property. Filter value is checked against the property of an object configured with the <i>filterBy</i> property and the filtering match mode with{' '}
                    <i>filterMatchMode</i> e.g. <i>contains</i>.
                </p>
            </DocSectionText>
            <div className="card xl:flex xl:justify-content-center">
                <OrderList dataKey="id" value={products} onChange={(e) => setProducts(e.value)} itemTemplate={itemTemplate} header="Products" filter filterBy="name"></OrderList>
            </div>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
