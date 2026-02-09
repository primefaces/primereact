'use client';
import { Bolt, ChevronDown, Desktop, Home } from '@primeicons/react';
import { Badge } from '@primereact/ui/badge';
import { Breadcrumb } from '@primereact/ui/breadcrumb';
import { Menu } from '@primereact/ui/menu';
import Link from 'next/link';
import * as React from 'react';

export default function CustomItemDemo() {
    const [selectedBrand, setSelectedBrand] = React.useState('Apple');

    const brands = [{ label: 'Apple' }, { label: 'Dell' }, { label: 'HP' }, { label: 'Lenovo' }, { label: 'Asus' }];

    return (
        <div className="flex justify-center">
            <Breadcrumb.Root>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <Link href="#" className="flex items-center gap-2">
                            <Home />
                            Home
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Link href="#">Products</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Link href="#" className="flex items-center gap-2">
                            <Bolt />
                            Electronics
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Link href="#" className="flex items-center gap-2">
                            <Desktop />
                            Computers
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Link href="#" className="flex items-center gap-2">
                            Laptops
                            <Badge shape="circle">5</Badge>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Menu.Root>
                            <Menu.Trigger variant="text" className="flex items-center gap-2 px-0">
                                {selectedBrand}
                                <ChevronDown className="text-xs" />
                            </Menu.Trigger>

                            <Menu.Portal>
                                <Menu.List>
                                    <Menu.Label>Select Brand</Menu.Label>
                                    {brands.map((brand) => (
                                        <Menu.CheckboxItem
                                            key={brand.label}
                                            checked={selectedBrand === brand.label}
                                            onCheckedChange={() => setSelectedBrand(brand.label)}
                                        >
                                            <Menu.CheckboxIcon />
                                            {brand.label}
                                        </Menu.CheckboxItem>
                                    ))}
                                </Menu.List>
                            </Menu.Portal>
                        </Menu.Root>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb.Root>
        </div>
    );
}
