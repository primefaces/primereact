import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { DataScroller } from '@/components/lib/datascroller/DataScroller';
import { Rating } from '@/components/lib/rating/Rating';
import { Tag } from '@/components/lib/tag/Tag';
import { useEffect, useState } from 'react';
import { ProductService } from '../../../../service/ProductService';

export function PTDoc(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const itemTemplate = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${data.image}`} alt={data.name} />
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-1">
                                <div className="text-2xl font-bold text-900">{data.name}</div>
                                <div className="text-700">{data.description}</div>
                            </div>
                            <div className="flex flex-column gap-2">
                                <Rating value={data.rating} readOnly cancel={false}></Rating>
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag product-category-icon"></i>
                                    <span className="font-semibold">{data.category}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                            <span className="text-2xl font-semibold">${data.price}</span>
                            <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                            <Tag value={data.inventoryStatus} severity={getSeverity(data)}></Tag>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const code = {
        basic: `
<DataScroller
    value={products}
    itemTemplate={itemTemplate}
    rows={5}
    buffer={0.4}
    header="List of Products"
    pt={{
        content: { className: 'surface-ground' }
    }}
/>
`,
        javascript: `
import React, { useState, useEffect } from 'react';
import { ProductService } from './service/ProductService';
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';

export default function PTDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const itemTemplate = (data) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={\`https://primefaces.org/cdn/primereact/images/product/\${data.image}\`} alt={data.name} />
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-1">
                                <div className="text-2xl font-bold text-900">{data.name}</div>
                                <div className="text-700">{data.description}</div>
                            </div>
                            <div className="flex flex-column gap-2">
                                <Rating value={data.rating} readOnly cancel={false}></Rating>
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag product-category-icon"></i>
                                    <span className="font-semibold">{data.category}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                            <span className="text-2xl font-semibold">\${data.price}</span>
                            <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                            <Tag value={data.inventoryStatus} severity={getSeverity(data)}></Tag>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <DataScroller
                value={products}
                itemTemplate={itemTemplate}
                rows={5}
                buffer={0.4}
                header="List of Products"
                pt={{
                    content: { className: 'surface-ground' }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState, useEffect } from 'react';
import { ProductService } from './service/ProductService';
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';

interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

export default function BasicDemo() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const itemTemplate = (data: Product) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={\`https://primefaces.org/cdn/primereact/images/product/\${data.image}\`} alt={data.name} />
                    <div className="flex flex-column lg:flex-row justify-content-between align-items-center xl:align-items-start lg:flex-1 gap-4">
                        <div className="flex flex-column align-items-center lg:align-items-start gap-3">
                            <div className="flex flex-column gap-1">
                                <div className="text-2xl font-bold text-900">{data.name}</div>
                                <div className="text-700">{data.description}</div>
                            </div>
                            <div className="flex flex-column gap-2">
                                <Rating value={data.rating} readOnly cancel={false}></Rating>
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag product-category-icon"></i>
                                    <span className="font-semibold">{data.category}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row lg:flex-column align-items-center lg:align-items-end gap-4 lg:gap-2">
                            <span className="text-2xl font-semibold">\${data.price}</span>
                            <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                            <Tag value={data.inventoryStatus} severity={getSeverity(data)}></Tag>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <DataScroller
                value={products}
                itemTemplate={itemTemplate}
                rows={5}
                buffer={0.4}
                header="List of Products"
                pt={{
                    content: { className: 'surface-ground' }
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <DataScroller
                    value={products}
                    itemTemplate={itemTemplate}
                    rows={5}
                    buffer={0.4}
                    header="List of Products"
                    pt={{
                        content: { className: 'surface-ground' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
