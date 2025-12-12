'use client';

import { Icon } from '@primereact/core/icon';
import Link from 'next/link';
import { Breadcrumb } from 'primereact/breadcrumb';

export default function RouteDemo() {
    return (
        <div className="card flex justify-center">
            <Breadcrumb>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <Link href="/">
                            <Icon className="pi pi-home" />
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Link href="#">Components</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Link href="#">Form</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item>
                        <Link href="/inputtext">InputText</Link>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb>
        </div>
    );
}
