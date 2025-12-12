'use client';

import { Icon } from '@primereact/core/icon';
import Link from 'next/link';
import { Breadcrumb } from 'primereact/breadcrumb';

export default function CustomSeparatorDemo() {
    return (
        <div className="card flex justify-center">
            <Breadcrumb>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <Link href="/">
                            <Icon className="pi pi-home" />
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>/</Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Link href="#">Products</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>/</Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Link href="#">
                            <Icon className="pi pi-bolt" /> Electronics
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>/</Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Link href="#">Laptops</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>/</Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Link href="#">Dell</Link>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb>
        </div>
    );
}
