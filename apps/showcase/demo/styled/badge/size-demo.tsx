'use client';

import { Badge } from 'primereact/badge';

export default function SizeDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-2">
            <Badge.Root size="small">Small</Badge.Root>
            <Badge.Root>Default</Badge.Root>
            <Badge.Root size="large">Large</Badge.Root>
            <Badge.Root size="xlarge">XLarge</Badge.Root>
        </div>
    );
}
