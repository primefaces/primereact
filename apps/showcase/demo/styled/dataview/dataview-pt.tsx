'use client';

import { ProductService } from '@/services/product.service';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import * as React from 'react';

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

export default function DataViewPTDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);

    React.useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 3)));
    }, []);

    return (
        <DataView>
            <div className="flex flex-col">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className={`flex flex-col sm:flex-row sm:items-center p-6 gap-4 ${index !== 0 ? 'border-t border-surface-200 dark:border-surface-700' : ''}`}
                    >
                        <div className="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                            <div className="flex flex-row md:flex-col justify-between items-start gap-2">
                                <div>
                                    <span className="font-medium text-surface-500 dark:text-surface-400 text-sm">{product.category}</span>
                                    <div className="text-lg font-medium mt-2">{product.name}</div>
                                </div>
                                <div className="bg-surface-100 p-1" style={{ borderRadius: '30px' }}>
                                    <div
                                        className="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
                                        style={{
                                            borderRadius: '30px',
                                            boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)'
                                        }}
                                    >
                                        <span className="text-surface-900 font-medium text-sm">{product.rating}</span>
                                        <i className="pi pi-star-fill text-yellow-500"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col md:items-end gap-8">
                                <span className="text-xl font-semibold">${product.price}</span>
                                <div className="flex flex-row-reverse md:flex-row gap-2">
                                    <Button.Root variant="outlined">
                                        <i className="pi pi-heart"></i>
                                    </Button.Root>
                                    <Button.Root
                                        disabled={product.inventoryStatus === 'OUTOFSTOCK'}
                                        className="flex-auto md:flex-initial whitespace-nowrap"
                                    >
                                        <i className="pi pi-shopping-cart"></i>
                                        Buy Now
                                    </Button.Root>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </DataView>
    );
}
