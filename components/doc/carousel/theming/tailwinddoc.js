import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import Link from 'next/link';

export function TailwindDoc(props) {
    const code = {
        basic: `
const Tailwind = {
    carousel: {
        root: 'flex flex-col',
        content: 'flex flex-col overflow-auto',
        container: ({ props }) => ({
            className: classNames('flex', {
                'flex-row': props.orientation !== 'vertical',
                'flex-col': props.orientation == 'vertical'
            })
        }),
        previousbutton: {
            className: classNames('flex justify-center items-center self-center overflow-hidden relative shrink-0 grow-0', 'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mx-2')
        },
        itemscontent: 'overflow-hidden w-full',
        itemscontainer: ({ props }) => ({
            className: classNames('flex ', {
                'flex-row': props.orientation !== 'vertical',
                'flex-col h-full': props.orientation == 'vertical'
            })
        }),
        item: ({ props }) => ({
            className: classNames('flex shrink-0 grow', {
                'w-1/3': props.orientation !== 'vertical',
                'w-full': props.orientation == 'vertical'
            })
        }),
        indicators: {
            className: classNames('flex flex-row justify-center flex-wrap')
        },
        indicator: 'mr-2 mb-2',
        indicatorbutton: ({ context }) => ({
            className: classNames('w-8 h-2 transition duration-200 rounded-0', 'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]', {
                'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600': !context.active,
                'bg-blue-500 hover:bg-blue-600': context.active
            })
        })
    }
}
        `
    };

    const code2 = {
        javascript: `
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from './service/ProductService';

export default function UnstyledDemo() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

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

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="border bg-white dark:bg-gray-900 border-gray-300 dark:border-blue-900/40 rounded-lg m-2 text-center py-5 px-3">
                <div className="mb-3 flex justify-center">
                    <img src={\`https://primefaces.org/cdn/primereact/images/product/\${product.image}\`} alt={product.name} className="w-1/2 shadow-sm" />
                </div>
                <div>
                    <h4 className="mb-1 text-gray-700 font-medium dark:text-white/80">{product.name}</h4>
                    <h6 className="mt-0 mb-3 font-medium text-gray-700 dark:text-white/80">\${product.price}</h6>
                    <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                    <div className="mt-5 flex flex-wrap gap-2 justify-center align-center">
                        <Button icon="pi pi-search" rounded className="mr-2 text-gray-700 dark:text-white/80 inline-flex"/>
                        <Button icon="pi pi-star-fill" rounded severity="success" className="mr-2 text-gray-700 dark:text-white/80 inline-flex"/>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
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
