import { Home } from '@primeicons/react';
import { Breadcrumb } from '@primereact/ui/breadcrumb';
import Link from 'next/link';

export default function BreadcrumbPTDemo() {
    return (
        <Breadcrumb.Root>
            <Breadcrumb.List>
                <Breadcrumb.Item>
                    <Link href="/">
                        <Home />
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
        </Breadcrumb.Root>
    );
}
