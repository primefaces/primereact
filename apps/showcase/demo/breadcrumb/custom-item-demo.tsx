'use client';

import { Icon } from '@primereact/core/icon';
import Link from 'next/link';
import { Badge } from 'primereact/badge';
import { Breadcrumb } from 'primereact/breadcrumb';
import { Menu } from 'primereact/menu';
import * as React from 'react';

export default function CustomItemDemo() {
    const [selectedBrand, setSelectedBrand] = React.useState('Apple');

    const brands = [{ label: 'Apple' }, { label: 'Dell' }, { label: 'HP' }, { label: 'Lenovo' }, { label: 'Asus' }];

    return (
        <div className="card flex justify-center">
            <Breadcrumb>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <Link href="#" className="flex items-center gap-2">
                            <Icon className="pi pi-home" />
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
                            <Icon className="pi pi-bolt" />
                            Electronics
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Link href="#" className="flex items-center gap-2">
                            <Icon className="pi pi-desktop" />
                            Computers
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Link href="#" className="flex items-center gap-2">
                            Laptops
                            <Badge shape="circle">8</Badge>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Menu>
                            <Menu.Trigger variant="text" className="flex items-center gap-2 px-0">
                                {selectedBrand}
                                <Icon className="pi pi-chevron-down text-xs" />
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
                        </Menu>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb>
        </div>
    );
}
