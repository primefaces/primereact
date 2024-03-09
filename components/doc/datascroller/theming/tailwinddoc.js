import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    datascroller: {
        content: {
            className: classNames(
                'bg-white blue-gray-700 border-0 p-0',
                'dark:bg-gray-900 dark:text-white/80' // Dark Mode
            )
        },
        grid: 'flex flex-wrap ml-0 mr-0 mt-0 bg-white dark:bg-gray-900',
        header: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white/80 border-gray-200 dark:border-blue-900/40 border-t border-b p-4 font-bold'
    },
}
        `
    };

    const code2 = {
        javascript: `
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataScroller } from 'primereact/datascroller';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';

export default function UnstyledDemo() {
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
            <div className="flex flex-col xl:flex-row xl:items-start p-4 gap-4">
                <img className="w-3/4 sm:w-64 xl:w-40 shadow-2 block xl:block mx-auto rounded" src={\`https://primefaces.org/cdn/primereact/images/product/\${data.image}\`} alt={data.name} />
                <div className="flex flex-col lg:flex-row justify-between items-center xl:items-start lg:flex-1 gap-4">
                    <div className="flex flex-col items-center lg:items-start gap-3">
                        <div className="flex flex-col  gap-1">
                            <div className="text-2xl font-bold text-900 dark:text-white/80">{data.name}</div>
                            <div className="text-700 dark:text-white/80">{data.description}</div>
                        </div>
                        <div className="flex flex-col  gap-2">
                            <Rating value={data.rating} readOnly cancel={false}></Rating>
                            <span className="flex items-center gap-2">
                                <i className="pi pi-tag product-category-icon dark:text-white/80"></i>
                                <span className="font-semibold dark:text-white/80">{data.category}</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row lg:flex-col items-center lg:items-end gap-4 lg:gap-2">
                        <span className="text-2xl font-semibold dark:text-white/80">\${data.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={data.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        <Tag value={data.inventoryStatus} severity={getSeverity(data)}></Tag>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <DataScroller value={products} itemTemplate={itemTemplate} rows={5} buffer={0.4} header="List of Products" />
        </div>
    )
}
    `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    PrimeReact offers a built-in Tailwind theme to get you started quickly. The default values related to the component are displayed below. The component can easily be styled with your own design based on Tailwind utilities, see the{' '}
                    <Link href="/tailwind">Tailwind Customization</Link> section for an example.
                </p>
                <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
                <p>A playground sample with the pre-built Tailwind theme.</p>
                <DocSectionCode code={code2} embedded service={['ProductService']} />
            </DocSectionText>
        </>
    );
}
