import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    dataview: {
        content: {
            className: classNames(
                'bg-white blue-gray-700 border-0 p-0',
                'dark:bg-gray-900 dark:text-white/80' // Dark Mode
            )
        },
        grid: 'flex flex-wrap ml-0 mr-0 mt-0 bg-white dark:bg-gray-900',
        header: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white/80 border-gray-200 dark:border-blue-900/40 border-t border-b p-4 font-bold'
    },
    dataviewlayoutoptions: {
        listbutton: ({ props }) => ({
            className: classNames(
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
                'transition duration-200',
                'w-12 pt-3 pb-3 rounded-lg rounded-r-none',
                props.layout === 'list' ? 'bg-blue-500 border-blue-500 text-white dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' : 'bg-white border-gray-300 text-blue-gray-700 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80'
            )
        }),
        gridbutton: ({ props }) => ({
            className: classNames(
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
                'transition duration-200',
                'w-12 pt-3 pb-3 rounded-lg rounded-l-none',
                props.layout === 'grid' ? 'bg-blue-500 border-blue-500 text-white dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' : 'bg-white border-gray-300 text-blue-gray-700 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80'
            )
        })
    }
}
        `
    };

    const code2 = {
        javascript: `
import React, { useState, useEffect } from 'react';
import { ProductService } from './service/ProductService';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';

export default function UnstyledDemo() {
    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState('grid');

    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data.slice(0, 12)));
    }, []);

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

    const listItem = (product) => {
        return (
            <div className="flex-initial shrink-0 w-full">
            <div className="flex flex-col xl:flex-row xl:items-start p-4 gap-4 bg-white dark:bg-gray-900">
                <img
                    className="w-3/4 sm:w-64 xl:w-40 shadow-md block xl:block mx-auto rounded-md"
                    src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`}
                    alt={product.name}
                />
                <div className="flex flex-col sm:flex-row justify-between items-center xl:items-start flex-1 gap-4">
                    <div className="flex flex-col items-center sm:items-start gap-3">
                        <div className="text-2xl font-bold text-gray-700 dark:text-white/80">
                            {product.name}
                        </div>
                        <Rating value={product.rating} readonly cancel={false} />
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-2">
                                <i className="pi pi-tag text-gray-700 dark:text-white/80"></i>
                                <span className="font-semibold text-gray-700 dark:text-white/80">
                                    {product.category}
                                </span>
                            </span>
                            <Tag value={product.inventoryStatus} severity={getSeverity(product)} />
                        </div>
                    </div>
                    <div className="flex sm:flex-col items-center sm:align-end gap-3 sm:gap-2">
                        <span className="text-2xl font-semibold text-gray-700 dark:text-white/80">
                        \${product.price}
                        </span>
                        <Button
                            icon="pi pi-shopping-cart"
                            rounded
                            disabled={product.inventoryStatus === 'OUTOFSTOCK'}
                        />
                    </div>
                </div>
            </div>
        </div>
        );
    };

    const gridItem = (product) => {
        return (
            <div className="flex-initial shrink-0 w-full sm:w-1/2 lg:w-full xl:w-1/3 p-2">
            <div className="p-4 border rounded-md bg-white dark:bg-gray-900 border-gray-300 dark:border-blue-900/40">
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <i className="pi pi-tag text-gray-700 dark:text-white/80"></i>
                        <span className="font-semibold text-gray-700 dark:text-white/80">{product.category}</span>
                    </div>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)} />
                </div>
                <div className="flex flex-col items-center gap-3 py-5">
                    <img className="w-3/4 shadow-md rounded-md" src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`} alt={product.name} />
                    <div className="text-2xl font-bold text-gray-700 dark:text-white/80">{product.name}</div>
                    <Rating value={product.rating} readonly cancel={false} />
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold text-gray-700 dark:text-white/80">\${product.price}</span>
                    <Button icon="pi pi-shopping-cart" rounded disabled={product.inventoryStatus === 'OUTOFSTOCK'} />
                </div>
            </div>
        </div>
        );
    };

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list') return listItem(product);
        else if (layout === 'grid') return gridItem(product);
    };

    const header = () => {
        return (
            <div className="flex justify-end bg-gray-100 dark:bg-gray-800">
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        );
    };

    return (
        <div className="card">
            <DataView value={products} itemTemplate={itemTemplate} layout={layout} header={header()} />
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
