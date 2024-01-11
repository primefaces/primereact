import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { PickList } from '@/components/lib/picklist/PickList';
import { useEffect, useState } from 'react';
import { ProductService } from '../../../../service/ProductService';

export function PTDoc(props) {
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setSource(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    };

    const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.name} />
                <div className="flex-1 flex flex-column gap-2">
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
<PickList
    dataKey="id"
    source={source}
    target={target}
    onChange={onChange}
    itemTemplate={itemTemplate}
    breakpoint="1280px"
    sourceHeader="Available"
    targetHeader="Selected"
    sourceStyle={{ height: '24rem' }}
    targetStyle={{ height: '24rem' }}
    pt={{
        list: { style: { height: '342px' } },
        moveAllToTargetButton: {
            root: { className: 'bg-teal-400 border-teal-400' }
        },
        moveAllToSourceButton: {
            root: { className: 'bg-teal-400 border-teal-400' }
        },
        item: ({ context }) => ({ className: context.selected ? 'bg-blue-100' : undefined })
    }}
/>
        `,
        javascript: `
import React, { useState, useEffect } from 'react';
import { PickList } from 'primereact/picklist';
import { ProductService } from './service/ProductService';

export default function PTDemo() {
    const [source, setSource] = useState([]);
    const [target, setTarget] = useState([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setSource(data));
    }, []);

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    };

    const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={\`https://primefaces.org/cdn/primereact/images/product/\${item.image}\`} alt={item.name} />
                <div className="flex-1 flex flex-column gap-2">
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
        <div className="card">
            <PickList
                dataKey="id"
                source={source}
                target={target}
                onChange={onChange}
                itemTemplate={itemTemplate}
                breakpoint="1280px"
                sourceHeader="Available"
                targetHeader="Selected"
                sourceStyle={{ height: '24rem' }}
                targetStyle={{ height: '24rem' }}
                pt={{
                    list: { style: { height: '342px' } },
                    moveAllToTargetButton: {
                        root: { className: 'bg-teal-400 border-teal-400' }
                    },
                    moveAllToSourceButton: {
                        root: { className: 'bg-teal-400 border-teal-400' }
                    },
                    item: ({ context }) => ({ className: context.selected ? 'bg-blue-100' : undefined })
                }}
            />
        </div>
    );
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { PickList } from 'primereact/picklist';
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

export default function PTDemo() {
    const [source, setSource] = useState<Product>([]);
    const [target, setTarget] = useState<Product>([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setSource(data));
    }, []);

    const onChange = (event) => {
        setSource(event.source);
        setTarget(event.target);
    };

    const itemTemplate = (item: Product) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={\`https://primefaces.org/cdn/primereact/images/product/\${item.image}\`} alt={item.name} />
                <div className="flex-1 flex flex-column gap-2">
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
        <div className="card">
            <PickList
                dataKey="id"
                source={source}
                target={target}
                onChange={onChange}
                itemTemplate={itemTemplate}
                breakpoint="1280px"
                sourceHeader="Available"
                targetHeader="Selected"
                sourceStyle={{ height: '24rem' }}
                targetStyle={{ height: '24rem' }}
                pt={{
                    list: { style: { height: '342px' } },
                    moveAllToTargetButton: {
                        root: { className: 'bg-teal-400 border-teal-400' }
                    },
                    moveAllToSourceButton: {
                        root: { className: 'bg-teal-400 border-teal-400' }
                    },
                    item: ({ context }) => ({ className: context.selected ? 'bg-blue-100' : undefined })
                }}
            />
        </div>
    );
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
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <PickList
                    dataKey="id"
                    source={source}
                    target={target}
                    onChange={onChange}
                    itemTemplate={itemTemplate}
                    breakpoint="1280px"
                    sourceHeader="Available"
                    targetHeader="Selected"
                    sourceStyle={{ height: '24rem' }}
                    targetStyle={{ height: '24rem' }}
                    pt={{
                        list: { style: { height: '342px' } },
                        moveAllToTargetButton: {
                            root: { className: 'bg-teal-400 border-teal-400' }
                        },
                        moveAllToSourceButton: {
                            root: { className: 'bg-teal-400 border-teal-400' }
                        },
                        item: ({ context }) => ({ className: context.selected ? 'bg-blue-100' : undefined })
                    }}
                />
            </div>
            <DocSectionCode code={code} service={['ProductService']} />
        </>
    );
}
