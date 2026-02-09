'use client';
import { ProductService } from '@/shared/services/product.service';
import { useDataView } from '@primereact/headless/dataview';
import type { ToggleButtonGroupValueChangeEvent } from '@primereact/types/shared/togglebuttongroup';
import { Button } from '@primereact/ui/button';
import { Tag } from '@primereact/ui/tag';
import { ToggleButton } from '@primereact/ui/togglebutton';
import { ToggleButtonGroup } from '@primereact/ui/togglebuttongroup';
import Image from 'next/image';
import { DataView } from 'primereact/dataview';
import * as React from 'react';
import { Heart } from '@primeicons/react/heart';
import { ShoppingCart } from '@primeicons/react/shopping-cart';
import { StarFill } from '@primeicons/react/star-fill';

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

export default function SortDemo() {
    const [products, setProducts] = React.useState<Product[]>([]);
    const [value, setValue] = React.useState<string | null>(null);

    const { sort } = useDataView();

    React.useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 5)));
    }, []);

    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warn';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return undefined;
        }
    };

    const onSortChange = (value: string | null) => {
        const sortOrder = value === 'hightolow' ? -1 : value === 'lowtohigh' ? 1 : 0;

        setValue(value);
        setProducts((prev) => (sort([...prev], 'price', sortOrder) as Product[]) ?? []);
    };

    return (
        <div>
            <DataView>
                <div className="flex justify-center border-b border-surface-200 dark:border-surface-700 pb-4">
                    <ToggleButtonGroup
                        value={value}
                        onValueChange={(e: ToggleButtonGroupValueChangeEvent) => onSortChange(e.value as string)}
                        allowEmpty={false}
                    >
                        <ToggleButton.Root value="hightolow">
                            <ToggleButton.Indicator>Price High to Low</ToggleButton.Indicator>
                        </ToggleButton.Root>
                        <ToggleButton.Root value="lowtohigh">
                            <ToggleButton.Indicator>Price Low to High</ToggleButton.Indicator>
                        </ToggleButton.Root>
                    </ToggleButtonGroup>
                </div>
                <div className="flex flex-col">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className={`flex flex-col sm:flex-row sm:items-center p-6 gap-4 ${index !== 0 ? 'border-t border-surface-200 dark:border-surface-700' : ''}`}
                        >
                            <div className="md:w-40 relative">
                                <Image
                                    className="mx-auto rounded w-full"
                                    src={`https://primefaces.org/cdn/primevue/images/product/${product.image}`}
                                    alt={product.name}
                                    width={160}
                                    height={160}
                                />
                                <div className="absolute bg-black/70 rounded-border" style={{ left: '4px', top: '4px' }}>
                                    <Tag severity={getSeverity(product)}>{product.inventoryStatus}</Tag>
                                </div>
                            </div>
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
                                            <StarFill className="text-yellow-500"></StarFill>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:items-end gap-8">
                                    <span className="text-xl font-semibold">${product.price}</span>
                                    <div className="flex flex-row-reverse md:flex-row gap-2">
                                        <Button variant="outlined">
                                            <Heart></Heart>
                                        </Button>
                                        <Button
                                            disabled={product.inventoryStatus === 'OUTOFSTOCK'}
                                            className="flex-auto md:flex-initial whitespace-nowrap"
                                        >
                                            <ShoppingCart></ShoppingCart>
                                            Buy Now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </DataView>
        </div>
    );
}
