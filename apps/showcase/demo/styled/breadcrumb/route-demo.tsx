import { Home } from '@primeicons/react';
import { Breadcrumb } from '@primereact/ui/breadcrumb';
import Link from 'next/link';

export default function RouteDemo() {
    return (
        <div className="flex justify-center">
            <Breadcrumb.Root>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <Link href="/">
                            <Home />
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
            </Breadcrumb.Root>
        </div>
    );
}
