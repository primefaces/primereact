import { Bolt, Home } from '@primeicons/react';
import { Breadcrumb } from '@primereact/ui/breadcrumb';
import Link from 'next/link';

export default function CustomSeparatorDemo() {
    return (
        <div className="flex justify-center">
            <Breadcrumb.Root>
                <Breadcrumb.List>
                    <Breadcrumb.Item>
                        <Link href="/">
                            <Home />
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>/</Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Link href="#">Products</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator>/</Breadcrumb.Separator>
                    <Breadcrumb.Item>
                        <Link href="#">
                            <Bolt />
                            Electronics
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
            </Breadcrumb.Root>
        </div>
    );
}
