'use client';

import { Icon } from '@primereact/core/icon';
import Link from 'next/link';
import { Breadcrumb } from 'primereact/breadcrumb';

export default function BreadcrumbPTDemo() {
    return (
        <Breadcrumb>
            <Breadcrumb.List>
                <Breadcrumb.Item>
                    <Link href="/">
                        <Icon className="pi pi-home" />
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Link href="#">Products</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Link href="#">Electronics</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Link href="#">Laptops</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Link href="#">Dell XPS 15</Link>
                </Breadcrumb.Item>
            </Breadcrumb.List>
        </Breadcrumb>
    );
}
